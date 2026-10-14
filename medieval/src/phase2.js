// Phase 2 cards, evidence and bonus clues, keyed by character id (merged into CHARS by build.js).
// p2.quest = [what to seek, why]. bonus = three clues given when the player turns in their quest evidence.
const PHASE2 = {

baron: {
  p2: {
    afternoon: "From half past five until the seven o'clock bell you were in the kitchens, tasting soups with the cook. You counted fourteen soups (it was fifteen; you will say fourteen). You left only once, to shout at a kitchen boy.",
    story: "At supper the night before, you and Master Crowe argued about announcing your debtors' names at the toast: Crowe insisted that 'shame pays faster than silver'. You called it ungentlemanly. He laughed. Today, Lord Thornbury spent the whole evening turning the spit beside you, complaining that it was beneath him.",
    secret: "ABOUT LORD THORNBURY: you saw him slip into the kitchen at half past five to pilfer comfits (he has stolen sweets from your kitchen since he was a boy). The cook caught him and put him to work at the spit until the seven o'clock bell. He did not leave once.",
    herring: "You are firmly convinced that Tobias the Jester is the murderer. He mocked you at the last feast and you threatened to banish him, and a jester who hates a host would sooner poison the party than leave it. You do not know what clears him.",
    quest: ["Master Crowe's Day Ledger", "Your partner kept his ledger of sales and loans. Find it (Crowe's ghost has it) and turn it in. Ask nicely: ghosts cannot carry things."]
  },
  ev: { name: "The Cook's Kitchen Chit", emoji: "🍲",
    text: "<span class='aname'>KITCHEN TALLY, in the cook's hand</span><b>5:30</b> The Baron comes in to taste the soups. <b>Fifteen</b> soups tasted, four spilled.<br><b>5:30</b> Lord Thornbury caught at the door with comfits in his pockets. <b>Set to turn the spit and scour the pots until the seven o'clock bell.</b> Two chickens burned.<br><b>7:00</b> Bell. Both released. Spit still greasy.<br><i>Cook's mark: ✿</i>",
    how: "The cook handed it to you at the bell, to prove you owed her nothing for the soup you tasted." },
  bonus: [
    "The poison was wolfsbane, also called monkshood: ground dried root. A strong dose numbs the tongue and tingles the lips within moments of tasting.",
    "Master Crowe's tin of candied ginger sat on the gift table from a quarter past five, lid shut, until the toast. The Hall was closed from half past five until seven.",
    "The Hall's garden door was found with its latch lifted, though the Steward swears he left it latched."
  ]
},

suyin: {
  p2: {
    afternoon: "You arrived at one o'clock. From half past five until the seven o'clock bell you sat in the East Gallery taking tea with Master Crowe, who talked the entire time. The gallery window faces the stable yard, so you saw nothing of the gardens. You counted seven pots of tea.",
    story: "The Baron gave you a copy of the Order of Ceremonies for the evening. You approve of the custom that each giver tastes his own gift first. Master Crowe boasted of his candied ginger and swore it was 'the finest cut in the shire'.",
    secret: "ABOUT MASTER CROWE: he told you he set his tin of candied ginger on the gift table in the Hall at a quarter past five, lid shut, planning to 'taste first and sell the rest'. He did not leave your sight between half past five and seven.",
    herring: null,
    quest: ["The Chapel Vigil Register", "You are curious about the Western custom of burning candles for the dead and for finances. Brother Ambrose keeps the chapel's register. Find it and turn it in."]
  },
  ev: { name: "The Baron's Order of Ceremonies", emoji: "📜",
    text: "<span class='aname'>ORDER OF THE HALLOWS' EVE FEAST</span>In the Baron's own hand:<br>• <b>5:15</b> All gifts for the Exalted Lady to be set upon the gift table in the Hall, sealed or covered.<br>• <b>5:30 to 7:00</b> Baron to the kitchens (soups). Tea for the Exalted Lady in the East Gallery, with Master Crowe.<br>• <b>5:30</b> Hall CLOSED to guests. Main door BARRED. Garden door latched (not bolted) for the herb boy.<br>• <b>7:00</b> Bell. Hall to open.<br>• <b>7:30</b> Guests seated.<br>• <b>8:00</b> THE TOAST, and the OPENING OF GIFTS. By the custom of Ravenmoor, each giver tastes first of any food or drink he has given.<br>• <b>8:30</b> Soul cakes.",
    how: "The Baron gave this to you himself, so you would know when to stand for the toast." },
  bonus: [
    "The Hall's main door was barred from half past five until the seven o'clock bell. During that time the only way in was the garden door.",
    "Master Crowe sold exactly three pouches of wolfsbane. Each was tied with a coloured cord: blue, green and red.",
    "The cook swears the Baron never left the kitchen between half past five and seven. He tasted fifteen soups."
  ]
},

oswin: {
  p2: {
    afternoon: "You and Margarethe left the royal castle at dawn. The carriage axle broke near Hollin and the smith kept you waiting until a quarter to seven, so you did not reach Ravenmoor until a quarter past seven, hungry, grumpy and tired. You rode with the Queen, Princess Isolde, Magister Mordecai and the Jester, with the baggage cart behind.",
    story: "The moment you entered the Hall you went straight for the gift table hoping for snacks. A tin with a crow stamp had a crooked lid, and beside it lay a spill of grey-green dust. You scooped it into your napkin, thinking it was spice, and the cook shooed you away before you could taste it. A good thing.",
    secret: "ABOUT YOUR CROWN: the royal circlet you are not wearing is in pawn to Master Crowe, for a loan that bought last year's hunting hounds. Margarethe does not know. You want it back before she notices.",
    herring: "You are firmly convinced that Lord Thornbury is the murderer. He once stole your marzipan swan, and a man who steals sweets would poison them. You do not know what clears him.",
    quest: ["The Herald's Roll of Arrivals", "You wish to know which of your guests dared arrive before you. Find the Herald's roll and turn it in."]
  },
  ev: { name: "A Napkin of Bitter Dust", emoji: "🧻",
    text: "<span class='aname'>A STAINED LINEN NAPKIN</span>Folded within, a pinch of coarse <b>grey-green powder</b> with a few fibres of dried root. It smells earthy and bitter. <i>(Whatever you do, do not taste it.)</i><br>The cook says the gift table's cloth was laid fresh at a quarter past five, so the spill came after that.",
    how: "You scooped it from the edge of the gift table at 7:20, five minutes after the royal party reached the Hall, beside a pewter tin with a crow stamp and a crooked lid. The dust was already there when you walked in." },
  bonus: [
    "The dust in your napkin is dried, ground wolfsbane root.",
    "The pouch found outside the garden door had a blue cord. Master Crowe sold only one blue pouch.",
    "Master Crowe boasted that at the toast he would 'sell a horse and a manor in front of everyone'."
  ]
},

margarethe: {
  p2: {
    afternoon: "You rode with the King, Princess Isolde, the Magister and Tobias the Jester. The royal carriage axle broke near Hollin and was not mended until a quarter to seven, so you did not reach Ravenmoor until a quarter past seven. You were angry the entire way. The Herald wrote down everyone's arrival.",
    story: "At the gate the Herald handed you the roll of arrivals to sign off for the royal party. You still have it. At the Hall you noticed the gift table for the foreign Lady: three gifts. You were not pleased to learn Master Crowe had dared propose a marriage for your daughter.",
    secret: "ABOUT YOUR COUSIN LADY ROSAMUND: the Thornburys are deeply in debt to the Baron and to Master Crowe. You secretly sent them money twice; it was not enough.",
    herring: "You are firmly convinced that Magister Mordecai is the murderer. He is always muttering about potions and 'rats of the realm', and he looked far too pleased when Crowe fell. You do not know what clears him.",
    quest: ["The Magister's sealed pouch of wolfsbane", "You want proof the Magister deals in poisons. Find his pouch and turn it in."]
  },
  ev: { name: "The Herald's Roll of Arrivals", emoji: "🪶",
    text: "<span class='aname'>HERALD'S ROLL, RAVENMOOR GATE</span><b>Resident:</b> Baron Godfrey; Steward Godwin; Brother Ambrose (chapel).<br><b>Oct 29:</b> Lord &amp; Lady Thornbury.<br><b>Oct 30:</b> Sir Cedric Brightblade &amp; squire Wat Fenwick. Master Crowe, merchant.<br><b>Oct 31, one o'clock:</b> Queen Zhao Suyin of Cathay, with escort Wen Liang.<br><b>Oct 31, a quarter past seven:</b> King Oswin, Queen Margarethe, Princess Isolde, Magister Mordecai, Tobias the Jester, Lucien the minstrel, and the royal household. <i>(Royal carriage: broken axle.)</i>",
    how: "The Herald handed it to you at the gate so you could sign off for the royal party. You kept it." },
  bonus: [
    "The Magister's green pouch is sealed. The pouch found in the garden was empty and tied with blue.",
    "The royal party's axle was mended at Hollin Smithy at a quarter to seven. Nobody from the royal party was at Ravenmoor before the bell.",
    "The lid on Master Crowe's tin was found crooked at twenty past seven; he had left it shut."
  ]
},

cedric: {
  p2: {
    afternoon: "From four o'clock until half past five you and Wat practised at the quintain (forty-one passes; you will say forty). At half past five you sent Wat to the armorer with your dented helm and went off alone to rest and polish your spurs, because a knight needs solitude before a feast. You lost track of time and appeared at the seven o'clock bell.",
    story: "You came to Ravenmoor partly to hunt wolves in the Baron's woods tomorrow. At supper last night Master Crowe teased you loudly in front of the table, saying a fine horse like Valor 'would fetch a fair price at All Souls'. You laughed it off with a tale of your forty-second victory. Valor is the only horse you have ever loved.",
    secret: "ABOUT YOUR 50 MARKS: you owe the Baron fifty marks, and you hoped no one would mention it at the feast. You are ashamed, and you are terrified that Valor may be taken.",
    herring: "You are firmly convinced that Magister Mordecai is the murderer. A man who sells fake magic would sell real poison, and you saw him whispering over a bag. You do not know what clears him.",
    quest: ["The Armorer's Receipt", "You want proof your helm was mended on time. Find the receipt (your squire has it) and turn it in."]
  },
  ev: { name: "The Tilt-Yard Tablet", emoji: "🛡️",
    text: "<span class='aname'>WAX TABLET OF THE MARSHAL OF THE LISTS</span>Oct 31. Practice at the quintain, Sir Cedric Brightblade and squire. From <b>four o'clock until half past five</b>. <b>Forty-one</b> passes. (Sir Cedric says forty. The Marshal has noted forty-one.)<br>At half past five the squire was sent off with the dented helm to the smithy. Sir Cedric went off alone to rest. <i>(Marshal: 'Neither looked back.')</i><br>One dent in a helm. One dent in a goose. <i>Marshal's mark: ♞</i>",
    how: "The Marshal handed it to you as proof of your passes. You intend to show it to everyone as proof of your forty victories. (It is only a practice tablet.)" },
  bonus: [
    "Wolfsbane is the old hunters' wolf-bait: a tiny dose kills a wolf. For a person, it numbs the tongue first.",
    "Master Crowe's sweetmeats were due to be tasted first by Crowe himself, as the custom of Ravenmoor requires.",
    "Your squire waited at the smithy until your helm was mended at seven. He was seen eating two apples."
  ]
},

wat: {
  p2: {
    afternoon: "You and Sir Cedric practised at the tilt-yard from four until half past five. Then Sir Cedric sent you to the armorer with his dented helm and said he would go and rest. You waited at the smithy until the helm was mended at seven, eating two apples, then carried it back to the Hall.",
    story: "On the way to the smithy you thought Sir Cedric seemed quieter than usual: he had not told a single story since supper. You did not like to ask. Your arms were aching from the lances.",
    secret: "ABOUT SIR CEDRIC'S HORSE: at supper on Oct 30 Master Crowe teased Sir Cedric loudly that his horse Valor 'would fetch a fair price at All Souls'. Sir Cedric went white, then laughed it off with a story. You have never seen him go that pale.",
    herring: "You are firmly convinced that Lady Rosamund is the murderer. Her polite insults must be hiding something sharper. You do not know what clears her.",
    quest: ["Sir Cedric's Tilt-Yard Tablet", "You want proof you served at the tilt-yard so Sir Cedric will recommend you for knighthood. Find the Marshal's tablet (Sir Cedric has it) and turn it in. Ask nicely."]
  },
  ev: { name: "The Armorer's Receipt", emoji: "⚒️",
    text: "<span class='aname'>SMITHY OF RAVENMOOR</span>Received <b>5:40 pm</b>, Oct 31: one helm, dented, of Sir C. Brightblade, brought by his squire <b>Wat Fenwick</b>.<br>Mended at the <b>seven o'clock bell</b>. The squire waited in the smithy throughout (ate two apples).<br><i>Armorer's mark: ⚒</i>",
    how: "The armorer gave it to you when you collected the mended helm." },
  bonus: [
    "Wolfsbane takes only a few breaths to work when tasted in a strong dose, and the tongue goes numb first.",
    "The Hall was closed from half past five until seven. Anyone who entered had to use the garden door.",
    "Lady Rosamund's seven vigil candles burned down to matching stubs. Whoever kept the vigil never left."
  ]
},

mordecai: {
  p2: {
    afternoon: "You travelled with the royal party. The carriage axle broke near Hollin, you spent hours standing in the mud being blamed for it, and you reached Ravenmoor at a quarter past seven, grumpy and covered in dust.",
    story: "Three weeks ago at Hollin Fair you bought a pouch of wolfsbane from Master Crowe for your 'Werewolf Potion' stage trick, in which a wolf-howl is heard from a cauldron (it is actually Gerald, a very patient pet rat, plus a sleeve). The pouch is still sealed in your bag, tied with a green cord.",
    secret: "ABOUT THE ROYAL COACH: the axle that broke was no curse. The King's coachman admitted to you that he forgot to grease it. You swore not to tell the Queen, who has been blaming you ('the magician's bad omens').",
    herring: "You are firmly convinced that Baron Godfrey is the murderer. Crowe was his partner and could have exposed the Baron's fake silk, and the Baron has no alibi you know of. You do not know what clears him.",
    quest: ["A Napkin of Bitter Dust", "You are fascinated by unusual powders. Find the King's napkin of grey-green powder and turn it in."]
  },
  ev: { name: "A Sealed Pouch of Wolfsbane (Green)", emoji: "☠️",
    text: "<span class='aname'>POUCH OF WOLFSBANE</span><span class='big'>☠️</span><b>Crowe &amp; Co.</b> printed in black. A small linen pouch tied with a <b>GREEN cord</b>; the wax seal is <b>UNBROKEN</b>. Warning in red: <i>'Wolfsbane (monkshood), dried root. Poison! Keep from wolves, werewolves and Kings.'</i>",
    how: "You bought it at Hollin Fair on Oct 8 for your Werewolf Potion trick. You carry it in your bag. It has never been opened." },
  bonus: [
    "The dust in the King's napkin is the same grey-green ground root that spilled onto the gift table beside Master Crowe's tin.",
    "The empty pouch found outside the garden door is not green. Yours is sealed.",
    "One pouch was sold in blue, one in green, and one in red. Master Crowe's ledger says who bought each."
  ]
},

tobias: {
  p2: {
    afternoon: "You rode with the King, Queen Margarethe and the Princess in the cart behind the royal carriage, and sang all the way to keep the King amused. The axle broke near Hollin and you reached Ravenmoor at a quarter past seven, singing the whole way.",
    story: "At half past seven, as the guests settled, your bell fell off your hat and rolled out through the Hall's garden door. You went after it and, in the shrubs just outside the door, you found a crumpled, empty linen pouch tied with a blue cord, as if someone had tossed it quickly away. You pocketed it with a rhyme.",
    secret: "ABOUT MASTER CROWE: at 7:40 he whispered to you, 'Tonight at the toast, Fool, I shall sell somebody's horse and somebody's manor, in front of everyone!' He winked. You promised not to tell.",
    herring: null,
    quest: ["Master Crowe's Demand Letters", "You love gossip about who owes whom. Find the bundle of demand letters (Lord Thornbury has them) and turn it in."]
  },
  ev: { name: "An Empty Pouch of Wolfsbane (Blue)", emoji: "📦",
    text: "<span class='aname'>CRUMPLED LINEN POUCH</span><span class='big'>📦</span>Slit open, <b>completely empty</b>, tied with a <b>BLUE cord</b>. A little grey-green dust clings to the seams, and there is a bitter smell. Tag: <b>'Crowe &amp; Co. Wolfsbane.'</b> Gravel from a garden path is stuck to it.",
    how: "You found it in the shrubs just outside the Hall's garden door at about half past seven, when you chased your fallen bell." },
  bonus: [
    "The pouch you found was tied with a blue cord, and only one blue pouch was sold.",
    "Master Crowe's ledger records the buyer of every pouch, by colour.",
    "The cook swears the Baron never left the kitchen while the Hall was closed."
  ]
},

reginald: {
  p2: {
    afternoon: "At half past five you slipped into the kitchen for comfits. The cook caught you, clipped your ear and set you turning the spit and scraping pots until the seven o'clock bell, with the Baron tasting soups at your elbow. You have never held a tool in your life.",
    story: "Two letters were slid under your door: one addressed to you, one to Sir Cedric (clearly misdelivered, since his room is next to yours). You pocketed both, as you pocket everything. On Oct 30 Master Crowe also sold you a pouch of wolfsbane, on credit, for the wolves among the manor sheep, and sent it on to Thornbury Manor by his rider (the delivery note is with the letters). You never saw the pouch itself.",
    secret: "ABOUT YOUR DEBT: you owe the Baron and Master Crowe 300 marks, due on All Souls' Day, or Thornbury Manor is forfeit. You have told no one. Your wife would die of shame. You hope that, somehow, it will all go away.",
    herring: "You are firmly convinced that Squire Wat is the murderer. He is always carrying things around the Hall, and a person with a tray can hide anything. You do not know what clears him.",
    quest: ["The Cook's Kitchen Chit", "You want proof (to show your wife) that you were punished unjustly. Find the cook's chit (the Baron has it) and turn it in."]
  },
  ev: { name: "Master Crowe's Demand Letters", emoji: "✉️",
    text: "<span class='aname'>CROWE &amp; CO., jointly with Baron Godfrey</span><b>Letter 1.</b> To Lord Reginald Thornbury: three hundred marks due by <b>All Souls' Day (Nov 2)</b>, or <b>Thornbury Manor shall be forfeit</b>.<br><b>Letter 2.</b> To Sir Cedric Brightblade: fifty marks due by All Souls' Day, or his <b>warhorse Valor and gilt spurs shall be seized</b>.<br><i>'I shall announce both at the toast, for shame pays faster than silver.' B. Crowe</i><br><b>Delivery note.</b> 'Wolfsbane, red cord, sold to Lord T. on credit. Sent by my rider to Thornbury Manor today, as it is not fit to be carried among guests. B.C.'",
    how: "Both were slid under your door this morning. The second was clearly misdelivered. You pocketed both and tried not to read the last line." },
  bonus: [
  "The pouch found in the garden was blue. Your red pouch is not the one used.",
  "The Marshal confirms that practice at the tilt-yard ended at half past five.",
  "The cook's chit says you turned the spit from half past five until the bell, and burned two chickens."
]
},

rosamund: {
  p2: {
    afternoon: "At about six o'clock you went to the chapel for the All Hallows' vigil and lit seven candles for your husband's finances. You stayed in prayer until the seven o'clock bell. Brother Ambrose gave you a receipt for the offering, as you never go anywhere without a receipt.",
    story: "You have not seen your husband much since lunch. He said he would 'take the air'. He is always vague about afternoons. At supper he was as vague and charming as ever.",
    secret: "ABOUT THE DEBT: your husband owes the Baron and Master Crowe 300 marks, due on All Souls' Day, or Thornbury Manor is forfeit. You found out only last night. He does not know you know. You have been sick with worry.",
    herring: "You are firmly convinced that Baron Godfrey is the murderer. He was Crowe's partner and Crowe could have exposed his fake silk, and you cannot imagine the Baron missing a chance to be dramatic. You do not know what clears him.",
    quest: ["The empty wolfsbane pouch", "You cannot abide litter in a lady's garden. Find the discarded pouch (the Jester has it) and turn it in."]
  },
  ev: { name: "The Chapel Offering Receipt", emoji: "🕯️",
    text: "<span class='aname'>CHAPEL OF ST. ETHELBURGA, RAVENMOOR</span>Received this day, All Hallows' Eve, of <b>Lady Rosamund Thornbury</b>: an offering of <b>seven candles</b> and a coin, for the vigil. Lady Rosamund entered at six o'clock, finding Br. Ambrose already at the altar since half past five, and kept the vigil <b>until the seven o'clock bell</b>.<br><i>Br. Ambrose Marlowe, chaplain</i> (and a small drawing of a tankard).",
    how: "Brother Ambrose gave it to you after the vigil. You keep every receipt. You never know when you might need one." },
  bonus: [
    "The empty pouch had a blue cord. The red one was sent by Master Crowe's rider to Thornbury Manor and never came to the keep.",
    "Brother Ambrose's register confirms you never left the vigil between six and seven.",
    "Master Crowe intended to announce two seizures at the toast: a warhorse and a manor."
  ]
},

crowe: {
  p2: { ghost: true,
    rules: [
      "You are DEAD. You are now the Ghost of Master Crowe. Put on a sheet or a pale veil, if you have one, and wander the Hall silently and mournfully. Do not speak, except to answer questions.",
      "Any living guest may ask you yes-or-no questions, but you may answer only THREE in total across the whole evening. Answer by nodding or shaking your head, then name a price for the answer in a hollow ghostly whisper ('Yes. Dear at twice the price.').",
      "Answer truthfully using the list below. If asked something not on the list, shake your head sadly (you do not know).",
      "You still carry your Phase 1 secret, which you may share by nodding only if asked about it directly."
    ],
    truths: [
      ["Was the poison in your tin of candied ginger?", "Yes."],
      ["Was it wolfsbane (monkshood)?", "Yes."],
      ["Was the tin shut when you set it on the gift table at a quarter past five?", "Yes."],
      ["Did you see who tampered with it?", "No. It came as a surprise to you."],
      ["Were you taking tea with Queen Suyin from half past five until seven?", "Yes. You never left her side."],
      ["Was the Hall barred to guests from half past five until the bell at seven?", "Yes."],
      ["Did you sell three pouches of wolfsbane?", "Yes. They are all in your ledger."],
      ["Did you plan to announce debts at the toast?", "Yes. Two of them."]
    ],
    quest: ["The Interpreter's Tea Log", "You wish to see how many offers you made at tea (you counted a great many). Find Wen's log and turn it in. Ask nicely: ghosts cannot carry things."]
  },
  ev: { name: "Master Crowe's Day Ledger", emoji: "📒",
    text: "<span class='aname'>CROWE &amp; CO. LEDGER</span><b>WOLFSBANE (dried root, ground). Three linen pouches, each tied with a coloured cord:</b><br>BLUE: Oct 30, to <i>Sir Cedric Brightblade</i>, 'bait for the wolf hunt'.<br>GREEN: Oct 8, Hollin Fair, to <i>Magister Mordecai</i>, 'a stage trick'.<br>RED: Oct 30, to <i>Lord R. Thornbury</i>, on credit, 'for wolves among the manor sheep'. <i>Sent on to Thornbury Manor by rider.</i><br><b>LOANS (jointly with the Baron):</b> Lord Thornbury 300 marks; Sir Cedric 50 marks.<br><b>PAWN:</b> one gold circlet (royal), unredeemed.",
    how: "You never let it out of your coat, not even in death." },
  bonus: [
    "Only three people could buy wolfsbane from you: three pouches, three coloured cords.",
    "The dose had to be big: a whole pouch, emptied into the tin.",
    "You set your tin down at a quarter past five. The Hall was closed from half past five. The poisoner came after that, by the garden door."
  ]
},

isolde: {
  p2: {
    afternoon: "You rode to Ravenmoor with your parents, the Magister and the Jester. The axle broke near Hollin and you did not arrive until a quarter past seven. You spent the wait weaving daisy chains and fretting about your hair.",
    story: "Earlier this week, you overheard your mother angrily saying that Master Crowe had written offering you in marriage to his nephew 'with wool and silk rights as the dowry', as if you were a parcel. You were horrified.",
    secret: "ABOUT YOUR MOTHER: Queen Margarethe was livid and called Master Crowe 'a counting-house toad' behind his back. But she is too proper to harm anyone. You know her best, and you are sure she is no killer.",
    herring: "You are firmly convinced that Brother Ambrose the Friar is the murderer. He is a herbalist, he mutters dark Latin, and he looked twitchy when Crowe fell. You do not know what clears him.",
    quest: ["The Smith's Receipt from Hollin", "You want a keepsake of the dreadful day the axle broke. Find the smith's receipt (the minstrel has it) and turn it in."]
  },
  ev: { name: "The Princess's Sketchbook", emoji: "🎨",
    text: "<span class='aname'>SKETCHBOOK OF PRINCESS ISOLDE</span>Page 7: <i>Hollin Smithy, by the smithy's clock, <b>half past six</b>.</i> Quick portraits: the King asleep on a barrel, the Queen frowning at the axle, the Magister covered in mud, the Jester juggling socks, the minstrel singing at a donkey.<br>Page 8: <i>The road. A quarter to seven.</i> Everyone squashed into the carriage. Page 9: <i>The gate. A quarter past seven.</i> A very cross Herald.",
    how: "You draw everything. You drew all this to pass the time while the smith mended the axle." },
  bonus: [
    "Wolfsbane makes the tongue tingle and go numb, and then the heart falters.",
    "The royal party's axle was not mended until a quarter to seven.",
    "The empty pouch found outside the garden door was tied with blue."
  ]
},

wen: {
  p2: {
    afternoon: "You arrived at one o'clock with the Queen. From half past five until seven, you stood in the corridor outside the East Gallery, keeping a log of the tea ceremony with Master Crowe. The gallery window overlooks the stable yard. You counted seven pots, and Master Crowe never left the Queen's side.",
    story: "Master Crowe talked for ninety minutes. You were told to log every word, but you abandoned the log after the third offer of 'authentic silk' and drew small, rude pictures of his hat instead. He mentioned his candied ginger twice and promised to open the tin at the toast.",
    secret: "ABOUT THE QUEEN'S CHARTER: the Queen had already decided to trade with the Baron, not Master Crowe. She was going to announce it at the toast, as a surprise. Crowe's death is bad for no one's trade but his own.",
    herring: null,
    quest: ["The Baron's Order of Ceremonies", "You must give the Queen a plain-spoken translation of the feast's schedule. Find the Order (your Queen has it) and turn it in. Be diplomatic."]
  },
  ev: { name: "The Interpreter's Tea Log", emoji: "🍵",
    text: "<span class='aname'>LOG OF THE TEA CEREMONY</span>East Gallery, Oct 31. <b>5:30</b> The Queen sits. Master Crowe sits. Pot 1.<br><b>6:15</b> Pot 4. Master Crowe still talking. The window overlooks the stable yard.<br><b>7:00</b> Bell. Pot 7. Master Crowe has offered the Queen 'silk', 'a bargain', and 'a sure thing'. Queen declines all.<br><i>Witness: Pip the page-boy, who brought hot water at 6:15 (mark ☕). (Margin: a rude drawing of a merchant's hat.)</i>",
    how: "You kept it while standing guard outside the gallery. It is mostly accurate." },
  bonus: [
    "Queen Suyin and Master Crowe took tea together from half past five until seven. Crowe never left her side.",
    "The Hall's main door was barred while the tea was poured.",
    "Master Crowe sold three wolfsbane pouches: blue, green and red."
  ]
},

godwin: {
  p2: {
    afternoon: "At a quarter past five you finished setting the gift table in the Hall. At half past five you barred the main door of the Hall as the Baron ordered. You left the garden door latched but not bolted, for the herb boy, and went down to the cellar to check the casks until the bell at seven. You were in the cellar about an hour and a half. You did not see anyone in the Hall.",
    story: "You kept the key to the Hall's main door on your belt the whole time. You counted three gifts on the table when you closed the Hall, including a pewter tin with a crow stamp, its lid shut. The Baron's own supply of rat poison, kept in the locked cupboard, was untouched.",
    secret: "ABOUT THE GARDEN DOOR: it has no bolt, only a latch, because the Baron refused to pay for one. You warned him twice. You feel responsible and want to blame someone else.",
    herring: "You are firmly convinced that Tobias the Jester is the murderer. He has hated the Baron since the banishment threat, he has stolen honey, and he laughed when Crowe fell. You do not know what clears him.",
    quest: ["The empty wolfsbane pouch", "You want to see whose poison it was and who left it on your clean garden path. Find the pouch and turn it in."]
  },
  ev: { name: "The Steward's Tally of Doors", emoji: "🗝️",
    text: "<span class='aname'>STEWARD'S TALLY OF DOORS</span>Oct 31, the Great Hall:<br>• <b>5:15</b> Gift table set: 3 gifts, covered or sealed. (Pewter tin, crow stamp, lid shut.)<br>• <b>5:30</b> Hall closed. MAIN DOOR barred, key on my belt. Garden door latched (<i>no bolt, as ever</i>).<br>• <b>5:35 to 7:00</b> Steward in cellar with the cooper, inventory of 14 casks (<i>cooper's mark: ⌘</i>).<br>• <b>7:00</b> Bell. Hall opened. Nobody seen in or out.",
    how: "You wrote it as you went, because you write everything down." },
  bonus: [
    "The gift table held three gifts when the Hall was closed, and still held three at half past seven. Master Crowe's tin was the only one with its lid crooked.",
    "The garden door's latch was found lifted at seven, though you left it latched.",
    "The empty pouch found outside the garden door was tied with blue."
  ]
},

ambrose: {
  p2: {
    afternoon: "From half past five you were in the chapel, sweeping and setting out seven candles; Tam the bell-boy rang the half-hour bell and saw you. At six o'clock Lady Rosamund Thornbury came for the vigil, lit the candles, and stayed in prayer until the bell at seven. You sat in the back with a tankard, nodding off, and gave her a receipt. You can swear she did not leave.",
    story: "As the herbalist of Ravenmoor, you know every poisonous plant for miles. You know wolfsbane well: it grows wild only in the high valleys, and the Baron's gardens have none. Whoever used it must have bought it. You saw nobody in the garden.",
    secret: "ABOUT THE POISON: wolfsbane numbs the mouth and tongue within moments of tasting, then makes the heart falter. The Baron's gardens do not grow it. It must have come in a pouch from a merchant.",
    herring: "You are firmly convinced that Magister Mordecai is the murderer. Dark arts, you are sure. He mutters over potions and keeps strange bottles. You do not know what clears him.",
    quest: ["Lady Rosamund's chapel offering receipt", "You want to check you signed it properly. Find the receipt and turn it in."]
  },
  ev: { name: "The Chapel Vigil Register", emoji: "📖",
    text: "<span class='aname'>VIGIL REGISTER, ST. ETHELBURGA</span>All Hallows' Eve:<br><b>5:30</b> Chapel opened by Br. Ambrose, swept, seven candles set. Half-hour bell rung by Tam the bell-boy, who saw him.<br><b>6:00</b> Present: Lady Rosamund Thornbury. Seven candles lit.<br><b>6:45</b> Lady Rosamund still at prayer. (Br. Ambrose dozing. Mead.)<br><b>7:00</b> Bell. Lady Rosamund rose.<br><i>Witness: Tam the bell-boy (mark ✱). (Margin: 'Pray for the soul of the soup.')</i>",
    how: "You keep the chapel's register. It is the only book you can reliably find." },
  bonus: [
    "Master Crowe sold exactly three wolfsbane pouches, one in each of blue, green and red.",
    "The Magister's green pouch is sealed with its wax unbroken.",
    "The Baron's gardens grow no wolfsbane. Whoever used it had to buy it."
  ]
},

lucien: {
  p2: {
    afternoon: "You rode to Ravenmoor on the back of the royal baggage cart with Tobias the Jester. The axle of the royal carriage broke near Hollin and the whole party waited at the smithy until a quarter to seven, so you reached the keep only at a quarter past seven. You spent the wait composing a ballad. Tobias did not appreciate it.",
    story: "At an earlier feast the Baron promised to pay you for a song and never did. While tuning your lute in the Hall at about half past seven you noticed the gift table: three gifts, and one pewter tin with a crow stamp whose lid sat crooked and whose rim had a grey smudge on it.",
    secret: "ABOUT THE GIFT TABLE: you noticed that tin because it was the only gift not covered in cloth. You thought of lifting a ginger piece for the road, but the cook was glaring.",
    herring: "You are firmly convinced that Baron Godfrey is the murderer. He has kept your wages from you, and he looked far too calm when Crowe fell. You do not know what clears him.",
    quest: ["The Princess's Sketchbook", "You hear the Princess draws everything, even minstrels. Find her sketchbook and turn it in."]
  },
  ev: { name: "The Smith's Receipt from Hollin", emoji: "🧾",
    text: "<span class='aname'>HOLLIN SMITHY</span>Oct 31: royal carriage, <b>axle and wheel</b>, received 12:40 pm, returned <b>6:40 pm</b>. Royal baggage cart, one wheel, mended. Paid by the King's carter.<br>Party left Hollin at <b>a quarter to seven</b>.<br><i>(Smith's note: 'A cranky King, and a more cranky Queen.')</i>",
    how: "The King's carter handed it to you to keep dry in your lute case." },
  bonus: [
    "The royal party left Hollin at a quarter to seven and reached Ravenmoor at a quarter past seven. None of them were here during the afternoon.",
    "The Hall's gift table held three gifts. Master Crowe's tin was the only one with a crooked lid.",
    "The pouch found outside the garden door was blue, and Master Crowe's ledger says who bought the blue one."
  ]
}

};
module.exports = PHASE2;
