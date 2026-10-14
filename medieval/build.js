// Builds the web-servable site and the host/reviewer documents.
//   node build.js
// Inputs : src/characters.js, src/cast.json, src/host-guide.src.html, src/solution.enc.json
// Outputs: site/invitation.html, site/p1/<token>.html (one per character),
//          site/review-<token>/{reviewer,party-materials,host-guide,phase1-all}.html, distribution.md
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { CHARS, INVITE } = require('./src/characters.js');
const PHASE2 = require('./src/phase2.js');
for (const c of CHARS) { if (!PHASE2[c.id]) throw new Error('No phase 2 data for ' + c.id); Object.assign(c, PHASE2[c.id]); }
const CAST = require('./src/cast.json');

const ROOT = __dirname;
const SITE = path.join(ROOT, 'site');
const tokenFile = path.join(ROOT, 'src', 'tokens.json');
const tokens = fs.existsSync(tokenFile) ? JSON.parse(fs.readFileSync(tokenFile, 'utf8')) : {};
const tok = () => crypto.randomBytes(8).toString('hex');
for (const c of CHARS) tokens[c.id] = tokens[c.id] || tok();
tokens.review = tokens.review || tok();
fs.writeFileSync(tokenFile, JSON.stringify(tokens, null, 2));

const playerOf = {};
for (const m of CAST.cast) playerOf[m.id] = m.player;

// A guest's page address is derived from their normalised name, so the invitation form can compute it
// without shipping a name-to-address table. Spare characters keep random addresses.
tokens.nameSalt = tokens.nameSalt || crypto.randomBytes(16).toString('hex');
const NAME_ITER = 100000;
const normName = (s) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
const nameToken = (name) => crypto.pbkdf2Sync(normName(name), Buffer.from(tokens.nameSalt, 'hex'), NAME_ITER, 16, 'sha256').toString('hex');
const tokenOf = {};
for (const c of CHARS) tokenOf[c.id] = playerOf[c.id] ? nameToken(playerOf[c.id]) : tokens[c.id];
fs.writeFileSync(tokenFile, JSON.stringify(tokens, null, 2));

// Phase 2 cards are encrypted into each character page; the host reveals this passphrase when Phase 2 starts.
const phase2Pass = (process.env.PHASE2_PASSPHRASE || fs.readFileSync(path.join(ROOT, '.sealed', 'phase2-passphrase.txt'), 'utf8')).trim().toLowerCase();
function encryptText(text, pass) {
  const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12), iter = 310000;
  const c = crypto.createCipheriv('aes-256-gcm', crypto.pbkdf2Sync(pass, salt, iter, 32, 'sha256'), iv);
  const ct = Buffer.concat([c.update(text, 'utf8'), c.final(), c.getAuthTag()]);
  return { iter, salt: salt.toString('base64'), iv: iv.toString('base64'), ct: ct.toString('base64') };
}
const client = (f) => fs.readFileSync(path.join(ROOT, 'src', 'client', f), 'utf8');
const isSpare = (c) => !playerOf[c.id];
const byId = Object.fromEntries(CHARS.map((c) => [c.id, c]));
for (const m of CAST.cast) if (!byId[m.id]) throw new Error('Unknown character in cast: ' + m.id);

const GOLD_RULES = `<h4>Gold coins and awards</h4>
<p>You begin the feast with <b>10 gold coins</b> (the host will hand them to you). Coins may be offered in trade for information: a secret, an answer, or a piece of evidence. Haggle as your character would. Turning in the evidence you are sent to find earns <b>2 more coins</b> from the host.</p>
<p>At the end of the feast, prizes are given for: <b>Richest Purse</b> (most coins), <b>Master Detective</b> (everyone who names the murderer), and by vote of all guests, <b>Best Costume</b> and <b>Best Actor</b>.</p>`;
const li = (a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
const write = (rel, content) => {
  const f = path.join(SITE, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
};

const BASE_CSS = `
:root{--parch:#f6ecd0;--ink:#2b1d0e;--red:#7a1f1f;--gold:#a8791a;--green:#2f4a2c}
*{box-sizing:border-box}
body{margin:0;background:#3a2e22;color:var(--ink);font-family:Palatino,"Palatino Linotype","Book Antiqua",Georgia,serif;line-height:1.45}
.card{position:relative;background:var(--parch);border:3px double var(--red);border-radius:10px;padding:16px 20px;background-image:radial-gradient(circle at 12% 8%,#fff6 0,#fff0 40%),radial-gradient(circle at 90% 95%,#b8864b33 0,#0000 45%)}
.card h3{margin:0;font-size:1.5em;font-variant:small-caps;letter-spacing:.5px;color:var(--red);line-height:1.1}
.card .title{font-style:italic}
.head{display:flex;gap:12px;align-items:center;border-bottom:1.5px solid var(--gold);padding-bottom:6px;margin-bottom:8px}
.emoji{font-size:2.6em;line-height:1}
.badge{margin-left:auto;text-align:center;font-size:.7em;text-transform:uppercase;letter-spacing:1px;color:#fff;background:var(--red);border-radius:4px;padding:3px 7px}
.badge.p2{background:var(--green)}.badge.ev{background:#5b3a12}.badge.ghost{background:#4b5563}
h4{margin:10px 0 2px;font-size:.8em;font-variant:small-caps;letter-spacing:1px;color:var(--gold);border-bottom:1px dotted #a8791a88}
p{margin:2px 0 4px}ul{margin:2px 0 4px;padding-left:20px}
.secret{background:#e8d29a;border:1px dashed var(--red);border-radius:5px;padding:5px 9px;margin-top:6px}
.herring{background:#e4e6c8;border:1px dashed var(--green);border-radius:5px;padding:5px 9px;margin-top:6px}
.foot{margin-top:10px;font-size:.8em;text-align:center;color:#6b5230;border-top:1px solid #a8791a66;padding-top:4px;font-style:italic}
.artifact{background:#fffaf0;border:1px solid #b8a06a;box-shadow:inset 0 0 18px #c9a85b55;padding:6px 9px;margin:4px 0;font-family:"Courier New",monospace;line-height:1.3}
.artifact .aname{font-family:Palatino,serif;font-weight:bold;font-size:1.15em;display:block;text-align:center;margin-bottom:3px;color:var(--red)}
.artifact .big{font-size:2.6em;text-align:center;display:block;line-height:1.1}
`;

// ---------------------------------------------------------------- Phase 1 (web page)
const P1_CSS = `${BASE_CSS}
.wrap{max-width:780px;margin:0 auto;padding:16px}
.card{font-size:1.05rem}
.for{font-size:.9em;color:#6b5230;margin:0 0 6px}
.nav{max-width:780px;margin:0 auto;padding:10px 16px;color:#e8c66a;font-size:.95em}
.card+.card,#p2out .card{margin-top:18px}
.lock input,.nameform input{font:inherit;padding:6px 10px;width:18em;max-width:100%}
.lock button,.nameform button{font:inherit;padding:6px 14px;background:var(--gold);color:#fff;border:0;border-radius:4px;cursor:pointer}
.err{color:#a11;display:block;margin-top:4px}
.nav a{color:#e8c66a}
@media print{body{background:#fff}.nav{display:none}.card{break-inside:avoid;box-shadow:none}}
@media (max-width:520px){.card{padding:12px}.head{flex-wrap:wrap}.badge{margin-left:0}}
`;
function p1Body(c) {
  const p = c.p1;
  const player = playerOf[c.id];
  return `<article class="card">
<div class="head"><div class="emoji">${c.emoji}</div><div><h3>${c.name}</h3><div class="title">${c.title}</div></div><div class="badge">Phase 1<br>Your Character</div></div>
${player ? `<p class="for">Prepared for <b>${player}</b>. Keep this page secret!</p>` : ''}
<h4>Who you are</h4><p>${p.who}</p>
<h4>Your quirks (lean into them!)</h4><p>${p.quirk}</p>
<h4>How you treat others</h4>${li(p.treat)}
<h4>Your relationships</h4>${li(p.rel.map((r) => '<b>' + r[0] + ':</b> ' + r[1]))}
<h4>Your flaw</h4><p>${p.flaw}</p>
<div class="secret"><b>Your secret to trade:</b> ${p.secret}<br><i>You may reveal it in exchange for information or gold. Do not show anyone this page.</i></div>
${GOLD_RULES}
<h4>Props to bring</h4>${li(p.props)}<p><i>Costume tip:</i> ${p.costume}</p>
${p.gift ? `<h4>Your gift</h4><p>${p.gift}</p>` : ''}
<h4>Conversation starters</h4>${li(p.starters)}
<div class="foot">Keep this page secret. More will be revealed at the feast.</div>
</article>`;
}
const p2Body = (c) => p2Card(c);
function p1Page(c) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${c.name}: Your Character</title><style>${P1_CSS}</style></head><body>
<div class="nav"><a href="../invitation.html">&larr; Read the invitation again</a></div>
<div class="wrap">${p1Body(c)}
<article class="card lock" id="p2lock"><div class="head"><div class="emoji">🔒</div><div><h3>Phase 2</h3><div class="title">Sealed until the murder</div></div></div>
<p>When the host announces the death and Phase 2 begins, they will reveal a passphrase. Enter it here to read your Phase 2 card.</p>
<form id="p2form"><input type="text" id="p2pass" placeholder="Passphrase" autocomplete="off" autocapitalize="off" spellcheck="false"> <button type="submit">Unlock</button> <span id="p2err" class="err"></span></form></article>
<div id="p2out" hidden></div>
</div><script>${client('phase2-unlock.js').replace('__ENC__', JSON.stringify(encryptText(p2Body(c), phase2Pass)))}</script></body></html>`;
}

// ---------------------------------------------------------------- Invitation
function invitationPage() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>A Summons to Ravenmoor</title><style>${BASE_CSS}
.wrap{max-width:640px;margin:0 auto;padding:18px}
.card{text-align:center;font-size:1.15rem;padding:28px 30px}
.card h3{font-size:1.7em}
.seal{font-size:3.5em;margin:6px 0}
.small-print{font-size:.85em;font-style:italic}
.nameform{font-size:1rem}.nameform input{font:inherit;padding:6px 10px;width:18em;max-width:100%}
.nameform button{font:inherit;padding:6px 14px;background:var(--gold);color:#fff;border:0;border-radius:4px;cursor:pointer}
.err{color:#a11;display:block;margin-top:4px}
@media print{body{background:#fff}}
</style></head><body><div class="wrap"><article class="card">
<h3>${INVITE.title}</h3><div class="seal">🕯️</div>
${INVITE.paras.map((x) => '<p>' + x + '</p>').join('')}
${INVITE.small.map((x) => '<p class="small-print">' + x + '</p>').join('')}
</article>
<article class="card nameform" style="margin-top:18px"><h4>Present thyself to the Steward</h4>
<p>Enter thy full name to receive the letter describing thy character.</p>
<form id="nameForm"><input type="text" id="guestName" placeholder="First and last name" autocomplete="name" required> <button type="submit">Find my character</button><span id="nameErr" class="err"></span></form>
</article></div><script>${client('name-form.js').replace('__SALT__', tokens.nameSalt).replace('__ITER__', String(NAME_ITER))}</script></body></html>`;
}

// ---------------------------------------------------------------- Print cards (Phase 2, evidence, slips)
const PRINT_CSS = `${BASE_CSS}
main{padding:18px}
.toolbar{position:sticky;top:0;z-index:10;background:#1f1812;color:#f6ecd0;padding:10px 16px;display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center;font-size:14px}
.toolbar a{color:#e8c66a;margin-right:4px}.toolbar button{background:var(--gold);color:#fff;border:0;border-radius:4px;cursor:pointer;padding:5px 12px}
.note{max-width:1100px;margin:14px auto;background:#2a2118;color:#e6d7b2;padding:10px 14px;border-radius:6px;font-size:14px}
section.sheet-section{margin:0 auto 32px;max-width:1100px}
section>h2{color:#f6ecd0;font-variant:small-caps;letter-spacing:2px;border-bottom:2px solid var(--gold);padding-bottom:4px}
section>p.intro{color:#d9c9a3;font-size:14px}
.cards{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
.card{width:100%;max-width:5.2in;font-size:1rem;line-height:1.35;display:flex;flex-direction:column;break-inside:avoid;page-break-inside:avoid;padding:14px 16px}
.card h3{font-size:1.4em}.card .for{font-size:.85em;margin:0}.card .foot{margin-top:auto}
.artifact{font-size:.9em}
body.hide-spare .spare{display:none!important}
@page{size:letter landscape;margin:.3in}
@media print{
 .card{width:5.2in;max-width:none;height:7.7in;overflow:hidden;font-size:8.9pt;line-height:1.26;padding:.16in .2in .14in}
 .card.small{height:3.85in;font-size:8.6pt;padding:.1in .16in}
 .card h3{font-size:15pt}.card .title{font-size:9.5pt}.card .emoji{font-size:30pt}.card h4{font-size:8pt}.card .for{font-size:8pt}
 .artifact{font-size:8.2pt}
 body{background:#fff}.toolbar,.note,section>h2,section>p.intro{display:none!important}
 main{padding:0}section.sheet-section{margin:0;max-width:none;page-break-before:always}section.sheet-section:first-of-type{page-break-before:auto}
 .cards{display:grid;grid-template-columns:5.2in 5.2in;gap:0 .15in;justify-content:center}
 body[data-only="p2"] section:not(#p2),body[data-only="ev"] section:not(#ev),body[data-only="bonus"] section:not(#bonus),body[data-only="ballot"] section:not(#ballot),body[data-only="awards"] section:not(#awards){display:none!important}
}`;
const forLine = (c) => (playerOf[c.id] ? `<div class="for">Player: <b>${playerOf[c.id]}</b></div>` : '');
const cls = (c) => (isSpare(c) ? ' spare' : '');
function p2Card(c) {
  const p = c.p2;
  if (p.ghost) {
    return `<article class="card${cls(c)}">
<div class="head"><div class="emoji">👻</div><div><h3>The Ghost of Ravenmoor</h3><div class="title">${c.name}, now deceased</div>${forLine(c)}</div><div class="badge ghost">Phase 2<br>Ghost</div></div>
<h4>Your new role</h4>${li(p.rules)}
<h4>Your truthful answers (use only if asked)</h4>
<div class="secret">${p.truths.map((t) => '<div><b>' + t[0] + '</b> ' + t[1] + '</div>').join('')}</div>
${c.ev ? `<h4>Your evidence</h4><p>You hold <b>${c.ev.name}</b>. Living guests may read it or trade for it.</p>` : ''}
${p.quest ? `<h4>Your quest</h4><p><b>Seek: ${p.quest[0]}.</b> ${p.quest[1]} (The host will give you Bonus Clues.)</p>` : ''}
<h4>Gold and awards</h4><p>You keep the gold you had and may still earn coins for your quest. Coins count toward <b>Richest Purse</b>, and you may vote for <b>Best Costume</b> and <b>Best Actor</b>.</p>
<p><i>You do not know who killed you. Enjoy haunting.</i></p>
<div class="foot">You win by watching them all fumble.</div></article>`;
  }
  return `<article class="card${cls(c)}">
<div class="head"><div class="emoji">${c.emoji}</div><div><h3>${c.name}</h3><div class="title">Phase 2: Master Crowe is dead!</div>${forLine(c)}</div><div class="badge p2">Phase 2<br>Your Character</div></div>
<h4>Your afternoon</h4><p>${p.afternoon}</p>
<h4>What else you know</h4><p>${p.story}</p>
<div class="secret"><b>Your new secret to trade:</b> ${p.secret}</div>
${p.herring ? `<div class="herring"><b>Your conviction:</b> ${p.herring}</div>` : ''}
<h4>Your evidence</h4><p>You were handed a piece of evidence: <b>${c.ev.name}</b>. You may show it, describe it, or trade it for secrets or for other evidence. Whoever holds it can read it.</p>
<h4>Your quest</h4><p><b>Seek: ${p.quest[0]}.</b> ${p.quest[1]} (When you do, the host will give you your Bonus Clues.)</p>
<h4>Your goal</h4><p>Work out WHO killed Master Crowe, HOW, and WHY. At the end of the party, fill in your Final Ballot (your accusation, plus your votes for Best Costume and Best Actor) and hand it to the host. Coins you hold count toward Richest Purse; trade them freely for information. Remember: you may even be wrong about everyone, including yourself.</p>
<div class="foot">Phase 2 card. Speak in character, as before. Trade freely.</div></article>`;
}
function evCard(c) {
  const e = c.ev;
  return `<article class="card small${cls(c)}">
<div class="head"><div class="emoji">${e.emoji}</div><div><h3 style="font-size:12pt">${e.name}</h3><div class="title">Held by ${c.name}</div>${forLine(c)}</div><div class="badge ev">Evidence</div></div>
<div class="artifact">${e.text}</div>
<p><b>How it came to you:</b> ${e.how}</p>
<div class="foot">Trade this for a secret or another piece of evidence. Show it to others only in trade.</div></article>`;
}
function ballotCard(c) {
  const line = '<span style="display:inline-block;border-bottom:1px solid #2b1d0e;min-width:11em">&nbsp;</span>';
  return `<article class="card small${cls(c)}">
<div class="head"><div class="emoji">🗳️</div><div><h3 style="font-size:12pt">Final Ballot</h3><div class="title">${c.name}</div>${forLine(c)}</div><div class="badge">Ballot</div></div>
<h4>Your accusation</h4>
<p>Murderer: ${line}</p><p>Method: ${line}</p><p>Motive: ${line}</p>
<h4>Your votes (not for yourself)</h4>
<p>Best Costume: ${line}</p><p>Best Actor: ${line}</p>
<p>Coins in my purse at the end: ${'<span style="display:inline-block;border-bottom:1px solid #2b1d0e;min-width:4em">&nbsp;</span>'}</p>
<div class="foot">Hand this to the host when the final bell rings.</div></article>`;
}
const AWARDS = [
  ['💰', 'Richest Purse', 'Awarded to the guest who ends the feast with the most gold coins.'],
  ['🔍', 'Master Detective', 'Awarded to every guest who named the true murderer.'],
  ['🎭', 'Best Costume', 'Awarded to the guest chosen by all as the best dressed of the feast.'],
  ['⭐', 'Best Actor', 'Awarded to the guest chosen by all as the finest player of their part.']
];
const awardCard = (a) => `<article class="card small"><div class="head"><div class="emoji">${a[0]}</div><div><h3 style="font-size:13pt">${a[1]}</h3><div class="title">The Hallowmas Feast at Ravenmoor, 1342</div></div></div>
<p style="text-align:center;margin-top:12px">${a[2]}</p><p style="text-align:center;margin-top:18px"><b>Awarded to:</b> <span style="display:inline-block;border-bottom:1px solid #2b1d0e;min-width:12em">&nbsp;</span></p>
<div class="foot">By the hand of the Baron's household. One certificate per winner; spares for Master Detective are included.</div></article>`;
function bonusCard(c) {
  const q = c.p2.quest[0];
  return `<article class="card small${cls(c)}">
<div class="head"><div class="emoji">🗝️</div><div><h3 style="font-size:12pt">Bonus Clues</h3><div class="title">${c.name}</div>${forLine(c)}</div><div class="badge ev">Bonus</div></div>
<p><i>Hand over when this player turns in:</i> <b>${q}</b>.</p>
${li(c.bonus)}
<div class="foot">Three true clues. Share them, trade them, or keep them close.</div></article>`;
}

function printMaterials() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Phase 2, Evidence and Bonus Clue Cards (printable)</title><style>${PRINT_CSS}</style></head><body class="hide-spare">
<div class="toolbar"><strong>🕯️ Ravenmoor Feast: print cards</strong>
<span><a href="#p2">Phase 2</a> <a href="#ev">Evidence</a> <a href="#bonus">Bonus clues</a> <a href="#ballot">Final ballots</a> <a href="#awards">Awards</a> <a href="../reviewer.html">Reviewer page</a> <a href="host-guide.html">Host guide</a></span>
<label><input type="checkbox" id="spareToggle"> Include spare characters (not cast)</label>
<label>Print <select id="printSel"><option value="">everything</option><option value="p2">Phase 2 cards</option><option value="ev">Evidence cards</option><option value="bonus">Bonus clue cards</option><option value="ballot">Final ballots</option><option value="awards">Award certificates</option></select></label>
<button id="printBtn">Print</button></div>
<div class="note"><b>How to print:</b> Letter paper, <em>landscape</em>, default margins, scale 100%, Background graphics ON. Phase 2 cards print two to a sheet, evidence cards four to a sheet, bonus clue cards, final ballots and award certificates four to a sheet. Cut along the card borders. The invitation, Phase 1 pages and Phase 2 cards are digital (the Phase 2 card unlocks on each player's page with the passphrase the host reveals); these printed Phase 2 cards are an optional fallback. Evidence cards and bonus clue cards are physical. Keep them sealed until the host's signal.</div>
<main>
<section class="sheet-section" id="p2"><h2>Phase 2: Character Cards</h2><p class="intro">Host hands these out after the death scene. One per player.</p><div class="cards">${CHARS.map(p2Card).join('')}</div></section>
<section class="sheet-section" id="ev"><h2>Evidence Cards</h2><p class="intro">Hand one to each living character with their Phase 2 card.</p><div class="cards">${CHARS.filter((c) => c.ev).map(evCard).join('')}</div></section>
<section class="sheet-section" id="bonus"><h2>Bonus Clue Cards</h2><p class="intro">When a guest turns in the evidence they were told to find, hand them their own bonus clue card (it carries their name). Keep them sealed until then.</p><div class="cards">${CHARS.map(bonusCard).join('')}</div></section>
<section class="sheet-section" id="ballot"><h2>Final Ballots</h2><p class="intro">One per player, handed out when the final bell rings.</p><div class="cards">${CHARS.map(ballotCard).join('')}</div></section>
<section class="sheet-section" id="awards"><h2>Award Certificates</h2><p class="intro">Hand out at the end of the party. Two spare Master Detective certificates are included in case several guests solve the case.</p><div class="cards">${[...AWARDS, AWARDS[1], AWARDS[1]].map(awardCard).join('')}</div></section>
</main>
<script>
document.getElementById('spareToggle').addEventListener('change',e=>document.body.classList.toggle('hide-spare',!e.target.checked));
document.getElementById('printBtn').addEventListener('click',()=>{const v=document.getElementById('printSel').value;if(v)document.body.dataset.only=v;else delete document.body.dataset.only;window.print();});
window.addEventListener('afterprint',()=>{delete document.body.dataset.only;});
</script></body></html>`;
}

// ---------------------------------------------------------------- Phase 1 overview for the reviewer
function phase1All() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>All Phase 1 cards (reviewer view)</title><style>${P1_CSS}.wrap{max-width:900px}.wrap>.card{margin-bottom:22px}.tag{color:#e8c66a;font-size:.9em;margin:0 0 4px}</style></head><body>
<div class="nav"><a href="../reviewer.html">&larr; Reviewer page</a> &middot; Every Phase 1 page in one view. Players only ever see their own.</div>
<div class="wrap">${CHARS.map((c) => `<p class="tag">${playerOf[c.id] ? 'Cast: ' + playerOf[c.id] : 'Spare character (not cast)'}</p>${p1Body(c)}`).join('')}</div></body></html>`;
}

// ---------------------------------------------------------------- Host guide
function hostGuide() {
  const rows = CHARS.map((c, i) => `<tr><td>${i + 1}</td><td>${c.name}</td><td>${c.title}</td><td>${playerOf[c.id] || '<i>spare</i>'}</td></tr>`).join('');
  const table = `<table><tr><th>#</th><th>Character</th><th>Role</th><th>Player</th></tr>${rows}</table>`;
  return fs.readFileSync(path.join(ROOT, 'src', 'host-guide.src.html'), 'utf8').replace('{{CAST_TABLE}}', table);
}

// ---------------------------------------------------------------- Reviewer page
function reviewerPage() {
  const enc = fs.readFileSync(path.join(ROOT, 'src', 'solution.enc.json'), 'utf8');
  const p1Links = CHARS.map((c) => `<li><a href="p1/${tokenOf[c.id]}.html">${c.name}</a> <span class="dim">(${playerOf[c.id] ? playerOf[c.id] : 'spare'})</span></li>`).join('');
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Reviewer Page: The Hallowmas Feast at Ravenmoor</title><style>
body{font-family:Palatino,Georgia,serif;max-width:900px;margin:0 auto;padding:20px;background:#f6ecd0;color:#2b1d0e;line-height:1.5}
h1{color:#7a1f1f;font-variant:small-caps;border-bottom:3px double #a8791a}h2{color:#7a1f1f;font-variant:small-caps;border-bottom:1px solid #a8791a;margin-top:28px}
a{color:#7a1f1f}.dim{color:#6b5230;font-size:.9em}.cols{columns:2;column-gap:30px}
.box{border:2px dashed #7a1f1f;background:#fbf3dc;padding:10px 14px;border-radius:6px;margin:12px 0}
input[type=password],input[type=text]{font:inherit;padding:6px 10px;width:20em;max-width:100%}button{font:inherit;padding:6px 14px;background:#a8791a;color:#fff;border:0;border-radius:4px;cursor:pointer}
#out{margin-top:16px;background:#fffaf0;border:1px solid #b8a06a;padding:8px 18px;border-radius:6px}
#out table{border-collapse:collapse;width:100%;font-size:.92em}#out th,#out td{border:1px solid #b8a06a;padding:4px 8px;text-align:left;vertical-align:top}#out th{background:#e8d29a}
#out code{background:#e8d9ab;padding:0 4px;border-radius:3px}#err{color:#a11;margin-left:10px}
li{margin:2px 0}
</style></head><body>
<h1>Reviewer Page: The Hallowmas Feast at Ravenmoor</h1>
<p>You are the outside reviewer of a medieval Halloween murder-mystery party (15 players, fourteenth century, all characters caricatures). Your job is to confirm the mystery is <b>coherent, fair, and fun</b>. The host and players must not see the solution, so it is encrypted on this page. You hold the passphrase.</p>

<h2>1. Read the materials</h2>
<div class="cols"><ul>
<li><a href="invitation.html">Invitation</a> (what players receive; identical for all)</li>
<li><a href="${R}/phase1-all.html">All Phase 1 cards in one page</a></li>
<li><a href="${R}/party-materials.html">Phase 2 cards, evidence cards, bonus clue cards</a> (printable; tick "Include spare characters" for the full set)</li>
<li><a href="${R}/host-guide.html">Host guide</a> (must contain no solution)</li>
</ul></div>
<h3>Each player's own Phase 1 page</h3>
<div class="cols"><ul>${p1Links}</ul></div>

<h2>2. Decrypt the solution</h2>
<div class="box">The solution is encrypted in this page (AES-256-GCM, key derived with PBKDF2). Decryption happens entirely in your browser; nothing is sent anywhere. <b>Do not share the passphrase with the host until the reveal.</b></div>
<form id="f"><input type="password" id="pw" placeholder="Passphrase" autocomplete="off"> <button type="submit">Decrypt</button><span id="err"></span></form>
<div id="out" hidden></div>

<h2>3. Review checklist</h2>
<h3>Coherence and fairness</h3><ul>
<li>The case is solvable from the cast characters' cards and evidence.</li>
<li>Every fact in the solution's timeline matches the cards (times, names, pouch colours, door details).</li>
<li>The alibi matrix holds: only the culprit has an unaccounted-for window.</li>
<li>No single card names or decisively points to the culprit. Note how many cards contribute partially.</li>
<li>The culprit's cards never describe the deed or use evasive wording; their own account of the afternoon is plain and specific. Judge whether anything on their cards (their afternoon, quest, bonus clues or evidence) hints that they did it. Run <code>node scripts/audit-case.js</code> in the repository for an anonymous machine check.</li>
<li>Red herrings are only convictions about a murderer, motive, or flaw; each is clearly false given other cards and none implicates the real culprit.</li>
<li>Every living player has a unique evidence piece and a quest target held by someone who is present.</li>
</ul>
<h3>Fun</h3><ul>
<li>Each character has a quirk to lean into, props, and conversation starters.</li>
<li>Phase 1 secrets are low-stakes, funny gossip about other characters (mostly).</li>
<li>Master Crowe's death scene reveals the method clearly and is easy to act out.</li>
<li>Trading secrets and evidence feels rewarding in both phases.</li>
<li>Casting makes sense for the actual players (see the table in the host guide).</li>
<li>The invitation page's name form leads each guest to their own Phase 1 page; each character page unlocks its Phase 2 card with a passphrase the host reveals when Phase 2 starts (ask the host for it to preview).</li>
</ul>
<h3>Content and tone</h3><ul>
<li>Family-friendly: romance only, no affairs, no drug themes, drinking limited to mead, wine and cider.</li>
<li>The queen's homeland (far east) appears only on her own cards, her escort's, and in Phase 2 materials; the invitation never names it. Her portrayal is respectful, not stereotyped.</li>
<li>Medieval European feel: kings, knights, merchants, servants; anachronisms are playful.</li>
</ul>
<h3>Reporting</h3><p>Reply to the host with problems or suggestions, <b>without revealing the solution</b>. If the host reports a cancellation, read the contingency section of the solution and advise how to cover the role.</p>

<script>
const ENC = ${enc};
const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const inline = (s) => esc(s).replace(/\\*\\*(.+?)\\*\\*/g,'<b>$1</b>').replace(/\`([^\`]+)\`/g,'<code>$1</code>');
function md(src) {
  const lines = src.split('\\n'); let html = '', i = 0, list = false;
  const closeList = () => { if (list) { html += '</ul>'; list = false; } };
  while (i < lines.length) {
    const l = lines[i];
    if (/^\\|/.test(l)) {
      closeList(); const rows = [];
      while (i < lines.length && /^\\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = (r) => r.replace(/^\\||\\|\\s*$/g,'').split('|').map((x) => x.trim());
      html += '<table>' + '<tr>' + cells(rows[0]).map((c) => '<th>' + inline(c) + '</th>').join('') + '</tr>' +
        rows.slice(2).map((r) => '<tr>' + cells(r).map((c) => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') + '</table>';
      continue;
    }
    const h = l.match(/^(#{1,3}) (.*)/);
    if (h) { closeList(); html += '<h' + h[1].length + '>' + inline(h[2]) + '</h' + h[1].length + '>'; }
    else if (/^- /.test(l)) { if (!list) { html += '<ul>'; list = true; } html += '<li>' + inline(l.slice(2)) + '</li>'; }
    else if (l.trim() === '') closeList();
    else { closeList(); html += '<p>' + inline(l) + '</p>'; }
    i++;
  }
  closeList(); return html;
}
document.getElementById('f').addEventListener('submit', async (e) => {
  e.preventDefault();
  const err = document.getElementById('err'), out = document.getElementById('out'); err.textContent = '';
  try {
    if (!window.crypto || !crypto.subtle) { out.hidden = true; err.textContent = 'This browser cannot decrypt here: open the page over https or as a local file.'; return; }
    const pass = document.getElementById('pw').value.trim().toLowerCase();
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(ENC.salt), iterations: ENC.iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(ENC.iv) }, key, b64(ENC.ct));
    out.innerHTML = md(new TextDecoder().decode(buf)); out.hidden = false; out.scrollIntoView();
  } catch (x) { out.hidden = true; err.textContent = 'Could not decrypt: check the passphrase.'; }
});
</script></body></html>`;
}

// ---------------------------------------------------------------- Write everything
fs.rmSync(SITE, { recursive: true, force: true });
write('invitation.html', invitationPage());
for (const c of CHARS) write(`p1/${tokenOf[c.id]}.html`, p1Page(c));
write('robots.txt', 'User-agent: *\nDisallow: /\n');
const R = `review-${tokens.review}`;
write('reviewer.html', reviewerPage());
write(`${R}/party-materials.html`, printMaterials());
write(`${R}/phase1-all.html`, phase1All());
write(`${R}/host-guide.html`, hostGuide());

const lines = ['# Distribution list', '', 'Paths are relative to the `site/` folder (the web root). Send every guest only the invitation link: they enter their full name on it and are taken to their own character page. The direct links below are a backup (never send someone else\'s link). Each character page has a Phase 2 passphrase box; the passphrase is in `.sealed/phase2-passphrase.txt` (git-ignored). Reveal it to everyone when Phase 2 begins.', '',
  `Invitation (everyone): \`/invitation.html\``, '', '| Player | Character | Phase 1 link |', '|---|---|---|'];
for (const m of CAST.cast) lines.push(`| ${m.player} | ${byId[m.id].name} | \`/p1/${tokenOf[m.id]}.html\` |`);
lines.push('', '## Spare characters (hand out only if an extra guest arrives)', '', '| Character | Phase 1 link |', '|---|---|');
for (const c of CHARS.filter(isSpare)) lines.push(`| ${c.name} | \`/p1/${tokenOf[c.id]}.html\` |`);
lines.push('', '## Reviewer and host documents (do NOT send to players)', '', `\`/reviewer.html\` (reviewer page), \`/${R}/party-materials.html\`, \`/${R}/host-guide.html\`, \`/${R}/phase1-all.html\``, '');
fs.writeFileSync(path.join(ROOT, 'distribution.md'), lines.join('\n'));
console.log('Built', CHARS.length, 'character pages. Review folder:', R);
