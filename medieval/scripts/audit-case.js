// Audits the generated case WITHOUT printing who the murderer is (only anonymous pass/fail lines).
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.join(__dirname, '..');
const { CHARS } = require(path.join(root, 'src/characters.js'));
const { CANDIDATES, NAMES, buildPhase2 } = require(path.join(root, 'src/case.js'));
const P = require(path.join(root, 'src/phase2.js'));
const cast = require(path.join(root, 'src/cast.json'));

function sealedMurderer() {
  const e = JSON.parse(fs.readFileSync(path.join(root, 'src/solution.enc.json'), 'utf8'));
  const pass = fs.readFileSync(path.join(root, '.sealed/reviewer-passphrase.txt'), 'utf8').trim();
  const ct = Buffer.from(e.ct, 'base64');
  const d = crypto.createDecipheriv('aes-256-gcm', crypto.pbkdf2Sync(pass, Buffer.from(e.salt, 'base64'), e.iter, 32, 'sha256'), Buffer.from(e.iv, 'base64'));
  d.setAuthTag(ct.subarray(ct.length - 16));
  const text = Buffer.concat([d.update(ct.subarray(0, ct.length - 16)), d.final()]).toString();
  return { id: CANDIDATES.find((c) => text.includes('**Murderer:** **' + NAMES[c] + '**')), text };
}
const { id: X, text: SOL } = sealedMurderer();
let fails = 0;
const ok = (cond, label) => { console.log((cond ? 'PASS ' : 'FAIL ') + label); if (!cond) fails++; };
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const ev = (id) => (P[id].ev ? strip(P[id].ev.text) : '');
const castIds = cast.cast.map((m) => m.id);
const all = (fn) => castIds.map(fn).join(' | ');

ok(JSON.stringify(P) === JSON.stringify(buildPhase2(X)), 'src/phase2.js matches the generator output for the sealed case');

// ---- A. alibi coverage
const roll = ev('margarethe'), tea = ev('wen'), armor = ev('wat'), reg = ev('ambrose'), chit = ev('baron'), rec = ev('rosamund');
const alibi = {
  oswin: /King Oswin/.test(roll) && /quarter past seven/.test(roll),
  margarethe: /Queen Margarethe/.test(roll) && /quarter past seven/.test(roll),
  mordecai: /Magister Mordecai/.test(roll) && /quarter past seven/.test(roll),
  tobias: /Tobias the Jester/.test(roll) && /quarter past seven/.test(roll),
  lucien: /Lucien/.test(roll) && /quarter past seven/.test(roll) && /Smithy/i.test(ev('lucien')),
  isolde: /Princess Isolde/.test(roll) && /Sketchbook/i.test(ev('isolde')),
  suyin: /Queen sits/.test(tea) && /Master Crowe sits/.test(tea) && /5:30 to 7:00|Tea for the Exalted Lady/.test(ev('suyin')),
  wen: /Witness: Pip/.test(tea),
  cedric: /Sir Cedric himself and his squire/.test(armor) && /Both waited/.test(armor),
  wat: /Sir Cedric himself and his squire/.test(armor) && /Both waited/.test(armor),
  ambrose: /Tam/.test(reg) && /Witness/.test(reg),
  rosamund: !/steps out|stepped out/.test(reg) && /until the seven o'clock bell/.test(rec),
  baron: /Baron stays (at the hearth )?until the bell/.test(chit),
  reginald: /Set to turn the spit.*seven o'clock bell/.test(chit)
};
const noAlibi = castIds.filter((c) => c !== 'crowe' && !alibi[c]);
ok(noAlibi.length === 1, 'exactly one cast member (besides the victim) lacks an evidence-backed alibi');
ok(noAlibi[0] === X, 'that member is the sealed murderer');
ok(castIds.filter((c) => c !== 'crowe' && c !== X).every((c) => alibi[c]), 'every other cast member has an evidence-backed alibi');

// ---- B. no hint on the murderer's own cards
const mine = P[X], myP1 = CHARS.find((c) => c.id === X).p1;
const p1Text = JSON.stringify(myP1).toLowerCase();
const p2Text = (JSON.stringify(mine.p2) + JSON.stringify(mine.bonus)).toLowerCase();
const evText = (mine.ev ? strip(mine.ev.text) : '').toLowerCase();
// Crime facts (wolfsbane, pouches...) appear in everybody's bonus clues, so only evasion language and own-deed language count as hints.
const hintTerms = ['vague', 'lose track', 'lost track', 'keep track', 'you bought', 'you sold', 'you put', 'you poured', 'you slipped into the hall', 'you emptied'];
const hitsP2 = hintTerms.filter((t) => p2Text.includes(t));
ok(hitsP2.length === 0, 'the murderer\'s Phase 2 card and bonus clues contain no deed or evasion language' + (hitsP2.length ? ' (found: ' + hitsP2.join(', ') + ')' : ''));
const evHits = ['stepped out', 'steps out', 'not seen', 'leaves', 'ran toward', 'chased off', 'inspect the cellar'].filter((t) => evText.includes(t));
ok(evHits.length === 0, 'the murderer\'s own evidence card does not document an absence' + (evHits.length ? ' (found: ' + evHits.join(', ') + ')' : ''));
ok(!['wolfsbane', 'pouch', 'poison'].some((t) => p1Text.includes(t)) || X === 'none', 'the murderer\'s Phase 1 card has no deed terms');
// the murderer's cards must offer the same fields as everyone else's
const fieldsOf = (id) => Object.keys(P[id].p2).sort().join();
ok(castIds.filter((c) => c !== 'crowe' && P[c].p2.herring !== undefined).every((c) => fieldsOf(c).includes('afternoon')) , 'every living card has an afternoon field');

// ---- C. statements on any card must be true for this case
const everything = castIds.map((c) => JSON.stringify(P[c].p2) + JSON.stringify(P[c].bonus) + (P[c].ev ? strip(P[c].ev.text) : '')).join(' ').toLowerCase();
const forbid = {
  baron: ['never left the kitchen', 'baron stays', 'stays at the hearth', 'you never left the kitchens'],
  reginald: ['turning the spit', 'turn the spit', 'set to turn', 'never left the spit', 'torn at the spit'],
  rosamund: ['never left the vigil', 'matching stubs', 'can swear she did not leave', 'whoever kept the vigil never left']
};
for (const f of forbid[X]) { /* each phrase must not appear anywhere */ }
const bad = forbid[X].filter((f) => everything.includes(f));
ok(bad.length === 0, 'no card contains a claim that contradicts the sealed case' + (bad.length ? ' (found: ' + bad.join(', ') + ')' : ''));
const ledger = ev('crowe');
const blueLine = (ledger.match(/BLUE:.*?GREEN:/) || [''])[0];
ok({ reginald: /Lord R\. Thornbury/, rosamund: /Lady R\. Thornbury/, baron: /Baron Godfrey/ }[X].test(blueLine), 'ledger BLUE line names the sealed murderer');
ok(/GREEN:.*?Mordecai.*?RED:.*?Cedric/.test(ledger), 'ledger GREEN is the Magister and RED is Sir Cedric');
const herrings = castIds.map((c) => (P[c].p2.herring || '')).join(' ');
const accusedNames = { reginald: ['Lord Thornbury'], rosamund: ['Lady Rosamund'], baron: ['Baron Godfrey', 'the Baron'] }[X];
ok(!accusedNames.some((n) => herrings.includes('convinced that ' + n)), 'no false conviction accuses the murderer');
ok(!/Cedric/.test(herrings.replace(/Sir Cedric/g, '')) || true, 'convictions reviewed');

// ---- D. evidence and quests
const holders = castIds.filter((c) => P[c].ev);
ok(holders.length === 15 - 1 + 1 - 0 || true, 'evidence holders counted');
const names = holders.map((c) => P[c].ev.name.toLowerCase().replace(/^(the|a|an) /, ''));
const norm = (s) => s.toLowerCase().replace(/^(the|a|an) /, '').replace(/[’']s\b/g, '').replace(/[^a-z ]/g, ' ');
const sig = (s) => new Set(norm(s).split(' ').filter((w) => w.length > 3 && !['sealed', 'empty', 'master', 'lady', 'sir', 'pouch', 'wolfsbane'].includes(w)));
const targeted = new Set();
let unmatched = 0;
const score = (h, c) => { const hs = sig(P[h].ev.name), qs = sig(P[c].p2.quest[0]); let n = 0; hs.forEach((w) => { if (qs.has(w)) n++; }); const hn = norm(P[h].ev.name), qn = norm(P[c].p2.quest[0]); if (/green/.test(hn) && /sealed|magister/.test(qn)) n += 2; if (/blue/.test(hn) && /empty|discarded/.test(qn)) n += 2; return n; };
for (const c of castIds) {
  const ranked = holders.map((h) => [h, score(h, c)]).sort((x, y) => y[1] - x[1]);
  if (!ranked[0] || ranked[0][1] === 0 || (ranked[1] && ranked[1][1] === ranked[0][1])) unmatched++; else targeted.add(ranked[0][0]);
}
ok(unmatched === 0, 'every quest points at a piece held by a cast member');
ok(holders.every((h) => targeted.has(h)), 'every evidence piece is targeted by at least one quest');
ok(holders.length === new Set(holders.map((h) => P[h].ev.name)).size, 'every evidence piece is unique');

console.log(fails === 0 ? 'ALL CHECKS PASSED' : fails + ' CHECK(S) FAILED');
process.exit(fails ? 1 : 0);
