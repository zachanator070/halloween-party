// Builds the Phase 2 data and the solution text for one chosen murderer.
// scripts/new-case.js picks the murderer at random, so nobody has to see the choice.
// Candidates are cast members who are in the keep during the poisoning window and have a motive.
const base = require('./phase2.base.js');

const CANDIDATES = ['reginald', 'rosamund', 'baron'];
const NAMES = {
  reginald: 'Lord Reginald Cuthbert Thornbury',
  rosamund: 'Lady Rosamund Philippa Thornbury',
  baron: 'Baron Godfrey Aldous de Ravenmoor'
};

const clone = (o) => JSON.parse(JSON.stringify(o));
function sub(obj, key, a, b) {
  if (!obj[key].includes(a)) throw new Error('patch target missing: ' + a.slice(0, 50));
  obj[key] = obj[key].replace(a, b);
}

function buildPhase2(X) {
  if (!CANDIDATES.includes(X)) throw new Error('bad candidate');
  const P = clone(base);

  // ---- common: Sir Cedric and Wat are together at the armorer's (both alibied); Cedric stays a motive decoy
  P.cedric.p2.afternoon = "From four o'clock until half past five you and Wat practised at the quintain (forty-one passes; you will say forty). At half past five you and Wat carried your dented helm to the armorer's and waited there together, telling stories, until the helm was mended at the seven o'clock bell.";
  sub(P.cedric.ev, 'text', "At half past five the squire was sent off with the dented helm to the smithy. Sir Cedric went off alone to rest. <i>(Marshal: 'Neither looked back.')</i>", "At half past five knight and squire left the lists together with the dented helm, bound for the smithy. <i>(Marshal: 'Still arguing about the number of passes.')</i>");
  P.cedric.bonus[2] = "You and your squire waited at the smithy until your helm was mended at seven. The armorer says you told him about all forty victories.";
  P.wat.p2.afternoon = "You and Sir Cedric practised at the tilt-yard from four until half past five. Then you carried his dented helm to the armorer's together and waited there until it was mended at seven, eating two apples, before carrying it back to the Hall.";
  P.wat.ev.text = "<span class='aname'>SMITHY OF RAVENMOOR</span>Received <b>5:40 pm</b>, Oct 31: one helm, dented, of Sir C. Brightblade, brought by Sir Cedric himself and his squire <b>Wat Fenwick</b>.<br>Mended at the <b>seven o'clock bell</b>. <b>Both waited in the smithy throughout</b> (the squire ate two apples).<br><i>Armorer's mark: ⚒</i>";

  // ---- common: three letters, silk accounts, rider note for the red (Cedric's) pouch
  P.reginald.p2.story = "Three letters were slid under your door: one addressed to you, one to Sir Cedric and one to the Baron (clearly misdelivered by the page-boy, who cannot read). You pocketed all three, as you pocket everything.";
  P.reginald.ev.text = "<span class='aname'>CROWE &amp; CO., jointly with Baron Godfrey</span><b>Letter 1.</b> To Lord Reginald Thornbury: three hundred marks due by <b>All Souls' Day (Nov 2)</b>, or <b>Thornbury Manor shall be forfeit</b>.<br><b>Letter 2.</b> To Sir Cedric Brightblade: fifty marks due by All Souls' Day, or his <b>warhorse Valor and gilt spurs shall be seized</b>.<br><b>Letter 3.</b> To Baron Godfrey: <b>'Double my share, or I shall tell the Exalted Lady what your Eastern silk is made of.'</b><br><i>'I shall announce all three at the toast, for shame pays faster than silver.' B. Crowe</i><br><b>Delivery note.</b> 'Wolfsbane, red cord, sold to Sir C. for the hunt. Sent by my rider to the Baron's hunting lodge, as it is not fit to be carried among guests. B.C.'";
  P.reginald.p2.quest[1] = "You promised the cook a wager on how many chickens burned. Find her kitchen chit (the Baron has it) and turn it in.";
  P.reginald.bonus[0] = "The pouch found in the garden was blue. Master Crowe's ledger says who bought the blue one.";
  P.rosamund.bonus[0] = "The empty pouch had a blue cord. The red one was sent by Master Crowe's rider to the Baron's hunting lodge and never came into the keep.";
  P.rosamund.bonus[2] = "Master Crowe intended to announce two seizures and a secret at the toast: a warhorse, a manor, and what the Baron's silk is made of.";
  P.oswin.bonus[2] = "Master Crowe boasted that at the toast he would 'sell a horse, a manor and a secret in front of everyone'.";
  P.tobias.p2.secret = "ABOUT MASTER CROWE: at 7:40 he whispered to you, 'Tonight at the toast, Fool, I shall sell somebody's horse, somebody's manor and somebody's secret, in front of everyone!' He winked. You promised not to tell.";
  P.crowe.p2.truths[7] = ["Did you plan to announce debts at the toast?", "Yes. Two seizures and one secret."];
  P.baron.p2.story = "At supper the night before, you and Master Crowe argued about announcing your debtors' names at the toast: Crowe insisted that 'shame pays faster than silver'. You called it ungentlemanly. He laughed, and hinted he might also mention your Eastern silk to the foreign Lady, which made you furious.";

  // ---- the ledger: the BLUE pouch belongs to the murderer
  const blue = {
    reginald: "<i>Lord R. Thornbury</i>, on credit, 'for wolves among the manor sheep'",
    rosamund: "<i>Lady R. Thornbury</i>, on credit, 'for the wolves among the manor sheep'",
    baron: "<i>Baron Godfrey</i>, 'for the wolves in my woods'"
  }[X];
  P.crowe.ev.text = "<span class='aname'>CROWE &amp; CO. LEDGER</span><b>WOLFSBANE (dried root, ground). Three linen pouches, each tied with a coloured cord:</b><br>BLUE: Oct 30, to " + blue + ".<br>GREEN: Oct 8, Hollin Fair, to <i>Magister Mordecai</i>, 'a stage trick'.<br>RED: Oct 30, to <i>Sir Cedric Brightblade</i>, 'bait for the wolf hunt'. <i>Sent on to the Baron's hunting lodge by rider.</i><br><b>LOANS (jointly with the Baron):</b> Lord Thornbury 300 marks; Sir Cedric 50 marks.<br><b>SILK:</b> forty bolts of 'Eastern silk' sold to the Baron: <i>dyed English wool</i>.<br><b>PAWN:</b> one gold circlet (royal), unredeemed.";

  // ---- the murderer's gap in an otherwise airtight set of alibis
  if (X === 'reginald') {
    P.baron.ev.text = "<span class='aname'>KITCHEN TALLY, in the cook's hand</span><b>5:30</b> The Baron comes in to taste the soups. <b>Fifteen</b> soups tasted, four spilled. The Baron stays until the bell.<br><b>5:35</b> Lord Thornbury caught at the door with comfits in his pockets. <b>Chased off with a ladle.</b> Ran toward the garden passage.<br><b>7:00</b> Bell. Spit still greasy.<br><i>Cook's mark: ✿</i>";
    P.reginald.p2.afternoon = "You spent the late afternoon strolling alone around the keep and the gardens, admiring the architecture, with one brief trip to the kitchen for comfits, from which you were chased with a ladle. Then you strolled some more.";
    P.reginald.bonus[2] = "The cook says she chased you out of her kitchen with a ladle at about twenty-five to six.";
    P.baron.p2.secret = "ABOUT LORD THORNBURY: at about half past five he slipped into the kitchen to pilfer comfits (he has stolen sweets from your kitchen since he was a boy). The cook chased him out with a ladle and he bolted toward the garden passage. You did not see where he went.";
    P.baron.p2.story = P.baron.p2.story;
  }
  if (X === 'rosamund') {
    P.rosamund.p2.afternoon = "At about six o'clock you went to the chapel for the All Hallows' vigil and lit seven candles for your husband's finances. You prayed, took a breath of air outside at some point, came back, and prayed until the seven o'clock bell. Brother Ambrose gave you a receipt for the offering, as you never go anywhere without a receipt.";
    P.rosamund.bonus[1] = "Brother Ambrose's register records the candles you lit and the hours of your vigil. He keeps it beside his tankard.";
    P.ambrose.p2.afternoon = "From half past five you were in the chapel, sweeping and setting out seven candles; Tam the bell-boy rang the half-hour bell and saw you. At six o'clock Lady Rosamund Thornbury came for the vigil and lit the candles. You sat in the back with a tankard, nodding off, and gave her a receipt. You cannot swear she stayed the whole hour, as you dozed.";
    P.ambrose.ev.text = "<span class='aname'>VIGIL REGISTER, ST. ETHELBURGA</span>All Hallows' Eve:<br><b>5:30</b> Chapel opened by Br. Ambrose, swept, seven candles set. Half-hour bell rung by Tam the bell-boy, who saw him.<br><b>6:00</b> Present: Lady Rosamund Thornbury. Seven candles lit.<br><b>6:10</b> Lady Rosamund steps out for air. <b>6:50</b> Returns. (Br. Ambrose dozing. Mead.)<br><b>7:00</b> Bell.<br><i>Witness: Tam the bell-boy, who rang every bell and saw Br. Ambrose at his post (mark ✱).</i>";
    P.wat.bonus[2] = "Two of Lady Rosamund's seven vigil candles had guttered out and been relit.";
  }
  if (X === 'baron') {
    P.baron.ev.text = "<span class='aname'>KITCHEN TALLY, in the cook's hand</span><b>5:30</b> The Baron comes in to taste the soups. (He says <b>fifteen</b> soups; the cook did not count.)<br><b>5:30</b> Lord Thornbury caught at the door with comfits in his pockets. <b>Set to turn the spit and scour the pots until the seven o'clock bell.</b> Two chickens burned.<br><b>7:00</b> Bell. Lord Thornbury released. Spit still greasy.<br><i>Cook's mark: ✿</i>";
    P.reginald.p2.story += " While you turned the spit you noticed that the Baron, who had come to taste soups, went off for the best part of an hour after announcing he must 'inspect the cellar and the herb garden'.";
    P.baron.p2.afternoon = "From half past five you were in the kitchens, tasting soups with the cook (fifteen; you will say fifteen). Then you went off to inspect the cellar and the herb garden, and returned to the kitchens before the seven o'clock bell.";
    P.suyin.bonus[2] = "The cook says the Baron tasted soups from half past five, but left around ten to six and was not back until a quarter to seven.";
    P.tobias.bonus[2] = "The cook says the Baron left her kitchen at about ten to six to 'inspect the cellar'. Lord Thornbury, however, never left the spit.";
  }

  // ---- convictions: none may accuse the murderer
  const herring = {
    oswin: ['mordecai', "You are firmly convinced that Magister Mordecai is the murderer. He mutters over potions, and he is the only man who could make you believe a poisoning was a prophecy. You do not know what clears him."],
    wat: ['tobias', "You are firmly convinced that Tobias the Jester is the murderer. He mocks Sir Cedric at every feast, and a fool who mocks his betters would sooner poison the party than leave it. You do not know what clears him."],
    mordecai: ['tobias', "You are firmly convinced that Tobias the Jester is the murderer. He has hated you for years and sees through every trick, and a jester who hates a magician would love to start a mystery. You do not know what clears him."],
    lucien: ['tobias', "You are firmly convinced that Tobias the Jester is the murderer. He is your rival for the royal ear and cannot bear another performer in the room. You do not know what clears him."],
    rosamund: ['wat', "You are firmly convinced that Squire Wat is the murderer. He is forever carrying trays around the Hall, and a boy with a tray can hide anything. You do not know what clears him."]
  };
  const defaultAccused = { oswin: 'reginald', wat: 'rosamund', mordecai: 'baron', lucien: 'baron', rosamund: 'baron' };
  for (const [holder, acc] of Object.entries(defaultAccused)) if (acc === X) P[holder].p2.herring = herring[holder][1];
  return P;
}

// ---------------------------------------------------------------- solution text
function solutionFor(X) {
  const N = NAMES[X];
  const motive = {
    reginald: "Crowe and the Baron's demand letter threatens to forfeit Thornbury Manor (300 marks due All Souls' Day) and Crowe planned to announce it at the toast. Proud, ruined and terrified of shame.",
    rosamund: "The same 300-mark demand: Thornbury Manor forfeit on All Souls' Day, to be announced at the toast. She learned of the debt only the night before and could not bear to lose her family home and name.",
    baron: "Crowe's Letter 3 threatened to tell the Exalted Lady that the Baron's 'Eastern silk' is dyed English wool (and the famous cellar is mostly cider) unless the Baron doubled Crowe's share. The Baron's whole reputation and the trade deal were at stake."
  }[X];
  const means = {
    reginald: "BLUE pouch, sold to Lord Thornbury on Oct 30 on credit 'for wolves among the manor sheep' (ledger).",
    rosamund: "BLUE pouch, sold to Lady Rosamund on Oct 30 on credit 'for the wolves among the manor sheep' (ledger).",
    baron: "BLUE pouch, sold to the Baron on Oct 30 'for the wolves in my woods' (ledger)."
  }[X];
  const opportunity = {
    reginald: "Strolling alone with no alibi. The cook's chit shows him chased from the kitchen at 5:35, running toward the garden passage. About 6:20 he entered the Hall by the garden door, emptied the pouch into the tin, left the lid crooked and tossed the empty pouch into the shrubs.",
    rosamund: "Stepped out of the chapel 6:10 to 6:50 'for air' (the vigil register records the gap; her receipt, written by the dozing chaplain, claims the full hour; Brother Ambrose was dozing but Tam the bell-boy kept watch on him). In that gap she entered the Hall by the garden door, emptied the pouch into the tin, left the lid crooked and tossed the empty pouch into the shrubs.",
    baron: "Left the kitchens at about 5:50 and was not seen until 6:45 ('inspecting the cellar and the herb garden'); Lord Thornbury (turning the spit) noticed the absence, and the bonus clues from the cook confirm it; no document clears him. In that time he entered the Hall by the garden door, emptied the pouch into the tin, left the lid crooked and tossed the empty pouch into the shrubs."
  }[X];
  const row = (who, claim, src) => '| ' + who + ' | ' + claim + ' | ' + src + ' |';
  const gap = (id, alibi, src) => (id === X ? row(NAMES[id], '**NO ALIBI: ' + {
    reginald: 'strolling alone, chased from the kitchen at 5:35',
    rosamund: 'out of the chapel 6:10 to 6:50',
    baron: 'absent from the kitchens 5:50 to 6:45'
  }[id] + '**', {
    reginald: 'Cook\'s chit (names him only at 5:35)',
    rosamund: 'Vigil register (names the gap); her receipt claims the full hour',
    baron: 'Lord Thornbury\'s account and the cook\'s bonus clues; no document clears him'
  }[id]) : row(NAMES[id] || id, alibi, src));

  return `# SEALED REFERENCE (v3): Hallowmas Feast at Ravenmoor (1342), victim: Master Crowe

Reviewer / host-at-the-reveal only. Regenerated with a randomly chosen murderer.

## 1. The truth
- **Victim:** Master Bartholomew Crowe (merchant). Played by Shelby Gorriceta.
- **Murderer:** **${N}**. Their player is never told.
- **Method:** wolfsbane (monkshood), ground dried root: one whole **blue-corded** pouch from Crowe & Co., emptied into Crowe's pewter tin of candied ginger on the Hall's gift table. Custom of the house: at the toast each giver tastes his own gift first, so Crowe ate the first piece. Staged symptoms: tingling and numb tongue, chest fluttering, collapse.
- **Motive:** ${motive}
- **Means:** ${means}
- **Opportunity:** the Hall was closed 5:30 to 7:00 (main door barred, garden door latched but not bolted); the gifts, including Crowe's shut tin, sat on the gift table from 5:15. ${opportunity}
- **Why unaware:** no card describes the deed. The murderer's cards describe their time in plain, specific, unevasive terms (an errand, some air, a stroll) and the same kinds of detail as everyone else's; the gap is documented only on other players' cards or by evidence the murderer does not hold. The reveal narrates the deed as done offstage before the game began.
- **Decoy motives:** Crowe's three demand letters threaten Lord Thornbury (the manor), Sir Cedric (his horse Valor) and the Baron (silk exposure), so each has a reason to want Crowe quiet. The RED pouch went to Sir Cedric and was sent on to the Baron's hunting lodge by rider; the GREEN pouch is the Magister's and still sealed.

## 2. Timeline (Oct 31, 1342; story time equals party time)
- Oct 8: Magister Mordecai buys the GREEN pouch at Hollin Fair (still sealed).
- Oct 29: Lord and Lady Thornbury arrive.
- Oct 30: Cedric, Wat and Crowe arrive. Crowe sells the BLUE pouch (see Means) and the RED pouch (to Cedric, sent on to the hunting lodge by rider). At supper Crowe teases Cedric about Valor.
- Morning: three demand letters slid under doors; the page-boy delivers all three to Lord Thornbury's room.
- 12:40: royal carriage axle breaks near Hollin; mended 6:40; party leaves 6:45.
- 1:00 pm: Queen Suyin and Wen arrive.
- 4:00 to 5:30: Cedric and Wat at the tilt-yard; then they carry the dented helm to the armorer and wait together (receipt 5:40, mended at 7:00).
- 5:15: gifts set on the Hall's gift table (three gifts: the Baron's mead, Lady Rosamund's shortbread, Crowe's tin, shut).
- 5:30: Hall closed. Suyin and Crowe begin tea in the East Gallery (window faces the stable yard; Wen outside; Pip the page-boy brings hot water at 6:15). Ambrose is already in the chapel (sweeping, bell-boy Tam). The Baron begins tasting soups in the kitchens.
- 6:00: Lady Rosamund begins the chapel vigil (to 7:00).
- 6:20: the murderer enters the Hall by the garden door (see Opportunity).
- 7:00: bell, Hall opens. 7:15: royal party arrives. 7:20: King finds dust and crooked lid. 7:30: Jester finds the empty blue pouch outside the garden door.
- 8:00: toast, opening of gifts: Crowe tastes first and dies.

## 3. Alibi matrix for the window 5:30 to 7:00
| Character | Status | Source |
|---|---|---|
| King, Queen Margarethe, Magister, Jester, Lucien, Princess Isolde | Not at the keep until 7:15 | Arrival Roll, Smith's receipt, sketchbook |
${row('Queen Suyin', 'Tea with Crowe in the East Gallery', 'Wen\'s log, Order of Ceremonies, Crowe\'s ghost')}
${row('Wen Liang', 'Corridor outside the gallery', 'Wen\'s log witnessed by Pip the page-boy')}
${row('Sir Cedric and Wat', 'At the armorer\'s together', 'Armorer\'s receipt, tilt-yard tablet')}
${gap('rosamund', 'Chapel vigil 6:00 to 7:00', 'Chapel receipt, vigil register')}
${row('Brother Ambrose', 'In the chapel from 5:30, bell-boy Tam saw him at every bell', 'Vigil register (witnessed), Lady\'s receipt')}
${gap('baron', 'Kitchens 5:30 to 7:00', 'Cook\'s kitchen chit')}
${gap('reginald', 'Kitchen: turning the spit 5:30 to 7:00', 'Cook\'s kitchen chit')}
Exactly one cast member (the murderer) has no alibi.

## 4. Clue map (living players; Crowe's ghost holds the ledger)
| Holder | Evidence | What it shows |
|---|---|---|
| Crowe (ghost) | Day Ledger | BLUE pouch to the murderer, GREEN to the Magister, RED to Sir Cedric (sent to the hunting lodge); loans to Lord Thornbury (300) and Sir Cedric (50); the Baron's silk |
| Baron | Cook's kitchen chit | ${{ reginald: 'The cook chased Lord Thornbury off at 5:35 (toward the garden passage); the Baron stayed at the soups', rosamund: 'Lord Thornbury turned the spit until the bell; the Baron stayed at the soups until the bell', baron: 'Lord Thornbury turned the spit until the bell; silent about the Baron after he arrived' }[X]} |
| Queen Suyin | Order of Ceremonies | Gifts set 5:15; Hall closed 5:30; main door barred, garden door latched; schedule lines for the Baron and the tea |
| King | Napkin of bitter dust | Wolfsbane spilled at the gift table before the royal party arrived (cloth laid fresh at 5:15) |
| Queen Margarethe | Herald's Roll | Royals arrived 7:15 |
| Sir Cedric | Tilt-yard tablet | Knight and squire left the lists together at 5:30 |
| Wat | Armorer's receipt | Knight and squire both at the smithy |
| Magister | Sealed GREEN pouch | His pouch is unopened |
| Jester | Empty BLUE pouch | The murder pouch, found at the garden door |
| Lord Thornbury | Demand letters | Three motives (Lord, Cedric, Baron) and the delivery note sending the RED pouch to the hunting lodge |
| Lady Rosamund | Chapel receipt | Her time at the chapel |
| Wen | Tea log | Tea with Crowe, witnessed by Pip |
| Lucien | Smith's receipt | Royal party at Hollin until 6:45 |
| Ambrose | Vigil register | His time in the chapel, witnessed by Tam |
| Princess Isolde | Sketchbook | Royal party at Hollin by the smithy clock |
Uncast: Godwin (door tally).

## 5. Red herrings (convictions; all false)
Every conviction accuses someone who has an evidence-backed alibi and is not the murderer. Oswin: Magister Mordecai or Lord Thornbury; Margarethe: Magister; Cedric: Magister; Wat: Lady Rosamund or the Jester; Magister: the Baron or the Jester; Lord: Wat; Lady: the Baron or Wat; Baron: the Jester; Isolde: Ambrose; Ambrose: Magister; Lucien: the Baron or the Jester; Godwin: the Jester. The build swaps any conviction that would point at the murderer for one of the others.

## 6. Deduction path
1. Method: wolfsbane in Crowe's ginger tin (death scene, ghost).
2. Window and entry: Hall closed 5:30 to 7:00, garden door (Order of Ceremonies).
3. Eliminate by alibi, using the Roll, Smith receipt, sketchbook, tea log, armorer receipt, chapel documents and the cook's chit. One person remains.
4. Confirm: the ledger says that person bought the BLUE pouch, and the blue pouch was found at the garden door. The Magister's is sealed and Sir Cedric's went to the hunting lodge.
5. Motive: the demand letters, Wat's secret about Valor, Tobias's secret ("a horse, a manor and a secret").

## 7. Reveal read-aloud
"It was the ginger tin, and it was ${N}! Crowe's threat was too much to bear. While the Hall stood closed, ${N} slipped in by the garden door, emptied a whole pouch of Crowe's own wolfsbane into the tin, and tossed the empty blue pouch into the shrubs. This was never in your card. Take a bow!"
Awards: Master Detective to every guest who names the murderer; Richest Purse (most gold, start 10, +2 per quest turn-in); Best Costume and Best Actor by vote. Method and motive are for bragging rights.

## 8. Contingency (missing guest)
- The murderer's player missing: have a host helper play the role in the background.
- Any other missing guest: have a helper read their card; the evidence they hold is needed.
- A spare guest arriving: no change.

## 9. Known tells for the reviewer to judge
- The murderer's own afternoon is the only one with an unwitnessed stretch (everyone else's is documented); a host who reads every card could infer it. The wording is plain, not evasive, and the gap is documented on other players' cards.
- Several characters have motives (Lord, Lady, Cedric, Baron), so the evidence rather than motive must decide.
- The host plays the Baron and sees the printed cards.

## 10. Bonus clue cards (three per player, handed over on turn-in)
Each character has three true clues covering: wolfsbane symptoms, the Hall's closure, the three coloured pouches and who bought them, the cook and chapel timelines, the Hollin smithy times, the crooked lid, and the three threats Crowe planned to announce.

## 11. Cast
Baron: Zach. Suyin: Alyssum. Magister: Brad. Wen: Emily Barber. Lucien: John. King: Craig. Queen Margarethe: Emily Brown. Cedric: Jared. Wat: Breyton. Jester: Kayla. Lord: Ryan. Lady: Rachel. Crowe (victim): Shelby. Ambrose: Kelson Stephenson. Isolde: Paige Stephenson. Spare: Godwin.

## 12. The presentation of gifts
Three gifts provided by the host: Baron (spiced mead), Lady Rosamund (shortbread), Crowe (candied ginger). The host calls them: Baron (tastes, safe), Crowe (tastes and dies), Lady Rosamund (not reached).

## 13. Purpose of every evidence card
Each card clears someone or fixes the means: ledger (who bought which pouch), chit (clears or breaks the Baron's and Lord Thornbury's alibis), Order (window and entry, Baron and tea schedule), dust napkin (poison predates the royal party), Roll, Smith receipt and sketchbook (clear the royal party), tilt tablet and armorer receipt (clear Cedric and Wat), green pouch (clears the Magister), blue pouch (the murder pouch), demand letters (motives, red pouch sent away), chapel receipt and register (Lady and Ambrose), tea log (Suyin and Wen).

## 14. Clock alignment with the real party
The party starts about 7:00 pm and the toast is at 8:00 pm. The poisoning window (5:30 to 7:00 pm) ends when the guests arrive. All times use story time.

## 15. Fifteen players: evidence and quests
Every living player holds one unique piece (14 living players plus Crowe's ghost holding the ledger). Quest targets are all held by present players and every piece is targeted by at least one quest.
`;
}

module.exports = { CANDIDATES, NAMES, buildPhase2, solutionFor };
