
const CHARS = [];
const REWARDS = [];
const INVITE = {
  title: "By Command of the Household of Baron Godfrey de Ravenmoor",
  paras: [
    "Hear ye, all good folk of every estate, whether lord or lady, knight or merchant, minstrel or fool!",
    "Baron Godfrey Aldous de Ravenmoor doth bid thee to a <strong>Great Feast on the eve of All Hallows</strong>, to be held in the Hall of Ravenmoor Keep, in the year of Our Lord 1342.",
    "A most Exalted Lady hath come among us from a land beyond the farthest roads, with an escort and strange gifts in her train. In gratitude for so rare an honour, the Baron doth open his hall, his cellar, and his fire. Come, give thanks, and treat of trade and friendship, that all our houses may prosper.",
    "There shall be roast fowl, mulled mead, soul cakes for the souls of the faithful, and a toast to be drunk from the Baron's own Loving Cup."
  ],
  small: [
    "Dress as befits thy station. Bring a modest gift for thy host. Mind thy manners; the Baron counts everything.",
    "Thine own good name and station are described in a private letter, which the Steward will deliver when thou givest thy name below. Keep it close and tell no one.",
    "Sent by the hand of Godwin Hobsworth, Steward of Ravenmoor. Make answer to the Steward that thou wilt attend."
  ]
};


CHARS.push(
{ id:"baron", name:"Baron Godfrey Aldous de Ravenmoor", title:"Lord of Ravenmoor Keep, your gracious host", emoji:"🏰", optional:false,
  p1:{
    who:"You are the proud, slightly anxious master of Ravenmoor, a modest barony you describe as 'practically a kingdom'. Tonight's feast is your grandest ever. A foreign queen has honoured your hall with a visit and you mean to impress her, charm the King, and sign a trade charter. You know almost nothing about the queen except that she has come from very far away with an escort and a great many trunks. Pretend you know more.",
    quirk:"You COUNT everything aloud as you go ('Seven candles! Splendid!', 'Four guests by the fire, a fine number!') and you introduce every guest with an absurd, grand title you invent on the spot ('The Duke of Sunsets', 'Her Grace the Countess of Pudding'). You are certain your cellar is the finest in the shire.",
    treat:["Greet everyone as the most honoured guest you have ever had, then forget their name and invent a new title.","Flatter the King and Queen constantly and fuss that they have the best chairs.","Hover around the foreign queen and beg her for stories of her homeland, then nod as if you already knew.","Whenever money is mentioned, change the subject to your cellar."],
    rel:[["Lord Reginald Thornbury","Your oldest friend from boyhood, and also, awkwardly, a debtor. You have been patient. Tonight patience runs out."],["Master Bartholomew Crowe","Your business partner in lending and trade. You suspect he cheats you, but you need him."],["King Oswin","Your liege. His approval is your favourite food."]],
    flaw:"Vanity. You cannot bear to be corrected, and you will bluff rather than admit you don't know something.",
    secret:"ABOUT MASTER CROWE: his famous 'Eastern silk' is dyed English wool. You have known for months and have said nothing because you profit too. Trade this for information.",
    gift:"A little engraved souvenir spoon for each guest (they are slightly bent).",
    props:["A big ring of keys (any keys!)","A goblet or fancy mug to wave around","A rolled paper 'guest list' you consult and ignore","A cape: a bedsheet or bathrobe with a pinned-on brooch"],
    costume:"A velvet-looking robe or bathrobe, a belt, fur trim from a scarf, a slightly crooked small crown or cap.",
    starters:["'Have you seen my cellar? Four hundred casks!' (it is not four hundred.)","'Did you count the candles? Eleven!'","'Tell me, what do you know of our esteemed guest?'"]
  },
  p2:{ ghost:true,
    rules:["You are DEAD. You are now the Ghost of Ravenmoor. Put on a sheet or a pale veil, if you have one, and wander the hall silently and mournfully. Do not speak, except to answer questions.","Any living guest may ask you yes-or-no questions, but you may answer only THREE in total across the whole evening. Answer by nodding or shaking your head. Keep count aloud in a hollow ghostly whisper: 'One...' (you still count everything).","Answer truthfully using the list below. If asked something not on the list, shake your head sadly (you do not know).","You still carry your own secret from your Phase 1 card, but you may only share it through a nod when asked a direct question about it."],
    truths:[["Was the poison in the Loving Cup?","Yes."],["Was it ratsbane?","Yes."],["Did you see who put it there?","No. It came as a surprise to you."],["Was the cup clean when it was tasted at a quarter past five?","Yes."],["Was the Great Hall empty between a quarter past five and the six o'clock bell?","Yes. The main door was barred."],["Was the cellar's own rat poison used?","No."],["Did you plan to speak of money owed at the toast?","Yes. You meant to name three debtors."],["Do you suspect the Queen of Cathay?","No."]]
  },
  ev:null
},
{ id:"suyin", name:"Queen Zhao Suyin of Cathay", title:"Sovereign of Cathay, the Honoured Guest from the Far East", emoji:"🏮", optional:false,
  p1:{
    who:"You are the Queen of Cathay, a great kingdom at the far eastern edge of the world. After two years on the long road you have reached the western lands to see them for yourself and find trading partners, because your court has grown bored of its own tea. You are calm, observant, wise, and quietly amused by European customs: eating with knives, bathing in rivers, and shouting at feasts.",
    quirk:"After each strange European custom, raise ONE eyebrow, say 'In Cathay...' and describe something that is the exact opposite. Whenever someone is upset, nervous, or arguing, you stop everything and ceremonially pour them tea, with a small bow. You never hurry.",
    treat:["Speak slowly and formally. Thank everyone for the smallest courtesy.","Be politely curious about the King (you outrank him in manners and let him know with a tiny smile).","Amused but wary of merchants who haggle. Let Master Crowe talk himself into trouble.","Refuse to discuss business until everyone has been served tea."],
    rel:[["Master Bartholomew Crowe","A persistent merchant who keeps offering you 'authentic Cathay silk'. You find it hilarious and slightly insulting."],["Baron Godfrey","Your kind but exhausting host. He counts things a great deal."],["Queen Margarethe","You admire her command of a room and secretly want to win the 'who is more regal' contest."],["Wen Liang","Your interpreter and companion, if he is in attendance. A trusted old friend."]],
    flaw:"Rigid about protocol. You will not be hurried, interrupted, or served out of order, and you hold a grudge for a bad pour of tea.",
    secret:"ABOUT QUEEN MARGARETHE: the large pearl necklace she wears is glass. A queen of Cathay knows real pearls by their glow. Trade this for information.",
    gift:"Small boxes of fragrant tea for everyone, and a tiny silk fan for the Baron.",
    props:["A teapot or kettle and a few small cups (or mugs)","A folding fan or paper fan","A silk robe or long scarf (a kimono or bathrobe works)","Chopsticks as hairpins; a pen or two"],
    costume:"A long, flowing robe in red or gold, hair up and held with chopsticks, calm expression, a hint of dramatic eye makeup.",
    starters:["'In Cathay, a host drinks first. Tell me, is this custom also yours?'","'May I pour you some tea? You seem agitated.'"]
  },
  p2:{
    afternoon:"You arrived at one o'clock. From half past four until the six o'clock bell you sat in the East Gallery taking tea with Master Crowe, who talked the entire time. Through the window you watched the tilt-yard, where Sir Cedric and his squire practised for hours. You counted seven pots of tea and forty-one passes at the quintain.",
    story:"At the Baron's request you were given a copy of the Order of Ceremonies for the evening, so that you would know the order of toasts. You found the Baron's habit of counting the minutes strangely comforting. The Baron's strange mixture of pride and fear troubled you; you think he was frightened of something.",
    secret:"ABOUT CROWE: he never stops talking, but he did not leave your sight between half past four and six. You can vouch for him, and for Sir Cedric and his squire (you watched the whole tilt-yard).",
    herring:null,
    quest:["Master Crowe's ledger","You want to know what a western merchant charges. Find his ledger of sales and loans and turn it in to the host."]
  },
  ev:{ name:"The Baron's Order of Ceremonies", emoji:"📜",
    text:"<span class='aname'>ORDER OF THE HALLOWS' EVE FEAST</span>In the Baron's own hand:<br>• <b>4:30</b> The Loving Cup to be filled with spiced mead and set upon the Hall sideboard. Hall closed to guests.<br>• <b>5:15</b> Kitchen boy to taste the Cup. Steward to BAR the main door of the Hall. The garden door to be latched (not bolted) for the herb boy.<br>• <b>6:00</b> Bell. Hall to open.<br>• <b>6:30</b> Guests seated. Count the candles!<br>• <b>7:30</b> THE TOAST. I shall drink first from the Cup.<br>• <b>8:00</b> Soul cakes.<br>• Spare no expense for the foreign Lady.",
    how:"The Baron gave this to you himself, so you would know when to stand for the toast." }
},
{ id:"oswin", name:"King Oswin Edmund Plantagrey IV", title:"By the Grace of Heaven, King of Aldermere", emoji:"👑", optional:false,
  p1:{
    who:"You are the cheerful, round, and not-especially-bright King of Aldermere, who loves feasting, hunting, and being told he is wise. You rule mostly by agreeing with whoever spoke last. You have come to Ravenmoor mostly for the food, and partly because Queen Margarethe made you.",
    quirk:"You refer to yourself as 'We' (and sometimes forget and say 'me'). You fall asleep in the middle of sentences and wake up suddenly shouting a food ('...and thus the treaty—PIE!'). You carry a snack, always, and are always hungry.",
    treat:["Be delighted by everyone, but especially anyone who offers you food.","Defer to Queen Margarethe on everything, loudly.","Treat the Jester as your best friend; ask for a joke every few minutes.","Doze off whenever anyone speaks about trade, taxes, or politics for more than a sentence."],
    rel:[["Queen Margarethe","Your wife, the real ruler of Aldermere. You are terrified and adoring."],["Tobias Thistlewick, the Jester","Your closest friend. He tells you the truth and you pretend it is a joke."],["Magister Mordecai","Your court magician. You believe every word he says."]],
    flaw:"Gluttony and gullibility. You will believe anything, if it is said with confidence, and you can be bribed with sweets.",
    secret:"ABOUT LORD THORNBURY: at the last royal feast he stole your marzipan swan, tucked it into his coat, and ate it behind a curtain. You saw. Trade this for information.",
    gift:"A signed (by someone else) royal decree granting the Baron 'the right to be honoured by the King', plus a jar of honey.",
    props:["A paper or cardboard crown","A scepter (a wooden spoon, rolling pin, or long candle)","A cape or blanket draped over your shoulders","A drumstick or snack in your pocket at all times"],
    costume:"A red robe or tablecloth cape, golden belt, crown slightly askew, a napkin tucked in your collar.",
    starters:["'We are very hungry. Is there... pie?'","'Where is our jester? We require a joke.'","'Is it time for the feast? What time is it? Is it feast time?'"]
  },
  p2:{
    afternoon:"You and Margarethe left the royal castle at dawn. The royal carriage broke a wheel on the road and you did not reach Ravenmoor until a quarter past six, hungry, grumpy, and thoroughly tired. You rode with the Queen, the Princess, Magister Mordecai, and the Jester the entire way.",
    story:"The moment you entered the Great Hall you went straight for the sideboard hoping for snacks, found only crumbs on the floor, and the cook shooed you away. It was a great disappointment. The Baron then told you he was about to 'settle some accounts' at the toast and winked in a way you did not understand.",
    secret:"ABOUT YOUR CROWN: the royal circlet you are not wearing is in pawn to Master Crowe, for a loan that bought last year's hunting hounds. Margarethe does not know. You want it back before she notices.",
    herring:"You are firmly convinced that Master Crowe is the murderer. You think he poisoned the Baron to stop him calling in his loans and keep the royal pawn secret. You do not know what clears him.",
    quest:["The Herald's Roll of Arrivals","You wish to know which of your guests dared arrive before you. Find the Herald's roll and turn it in."]
  },
  ev:{ name:"A Napkin of Sugared Crumbs", emoji:"🍬",
    text:"<span class='aname'>A STAINED LINEN NAPKIN</span>Folded within, a pinch of crumbs: pale <b>violet sugar crystals</b> and a sticky purple smear, plainly the remains of <b>violet comfits</b>. The Baron's cook makes them but once a year, for the feast, and the first tray is not served until after the toast.",
    how:"You scooped it from the flagstones beneath the Hall's sideboard at 6:20, hoping for a snack. The cook shouted. You kept the napkin." }
},
{ id:"margarethe", name:"Queen Margarethe Eleanor Plantagrey", title:"Queen of Aldermere, Consort of King Oswin", emoji:"💎", optional:false,
  p1:{
    who:"You are the sharp, elegant, deeply bossy Queen of Aldermere. You run the kingdom, the household, the King's diet, and everyone's posture. You have come to Ravenmoor chiefly to ensure the new foreign queen does not outshine you.",
    quirk:"You SNAP your fan shut to silence a room and give commands in a clipped monotone ('Sit. Eat. Smile. Not like that.'). You correct everyone's manners, posture, and grammar, even strangers'. You sniff at things and say 'Hm.'",
    treat:["Command, correct, and instruct. Everyone should sit up straighter.","Be icily polite to the foreign queen, secretly rivalrous: you want the better chair.","Hover protectively over the King and cut his dessert for him.","Be suspicious of the Magician; roll your eyes when he predicts anything."],
    rel:[["King Oswin","Your husband. You love him dearly and treat him like a child."],["Lady Rosamund Thornbury","Your cousin, fallen on hard times. You pity her and pretend not to."],["Magister Mordecai","The court magician you cannot stand. He mutters about poisons and potions."]],
    flaw:"Control. You cannot stand being unprepared and you must have the last word.",
    secret:"ABOUT MAGISTER MORDECAI: his 'prophecies' are copied from a cheap street almanac he hides in his sleeve. You found it. Trade this for information.",
    gift:"A hand-embroidered cushion (it is slightly too small to sit on) and a signed note on royal letterhead.",
    props:["A hand fan (to snap)","A small bell or spoon to tap on a glass","A tiara or shiny headband","White gloves; a lace handkerchief"],
    costume:"A long gown or dress, a shawl, pearls, a tall stiff posture, an expression that says 'I am disappointed'.",
    starters:["'Sit up straight. You look like a sack of turnips.'","'Is that how they hold a goblet in your country? Hm.'","'My husband has no idea where he is. Please be kind.'"]
  },
  p2:{
    afternoon:"You rode with the King, the Magister, and Tobias the Jester, with the royal household following. The carriage broke a wheel on the road and the royal party did not arrive until a quarter past six. You were angry the entire way. The Herald wrote down everyone's arrival.",
    story:"At the gate the Herald handed you the roll of arrivals to sign off for the royal party. You still have it. You noted that you are the last to arrive at the feast you were guests of honour at, and you will never forgive the wheelwright.",
    secret:"ABOUT YOUR COUSIN LADY ROSAMUND: the Thornburys are deeply in debt, to the Baron most of all. You secretly sent them money twice; it was not enough.",
    herring:"You are firmly convinced that Magister Mordecai is the murderer. He is always muttering about poisons and potions and 'rats of the realm', and he looked far too pleased when the Baron fell. You do not know what clears him.",
    quest:["The Magister's packet of ratsbane","You want proof the Magister poisons things. Find his sealed ratsbane packet and turn it in."]
  },
  ev:{ name:"The Herald's Roll of Arrivals", emoji:"🪶",
    text:"<span class='aname'>HERALD'S ROLL, RAVENMOOR GATE</span><b>Resident:</b> Baron Godfrey; Steward Godwin; Brother Ambrose (chapel).<br><b>Oct 29:</b> Lord &amp; Lady Thornbury.<br><b>Oct 30:</b> Sir Cedric Brightblade &amp; squire Wat Fenwick. Master Crowe, merchant.<br><b>Oct 31, one o'clock:</b> Queen Zhao Suyin of Cathay, with escort Wen Liang.<br><b>Oct 31, a quarter past six:</b> King Oswin, Queen Margarethe, Magister Mordecai, Tobias the Jester, and the royal household. <i>(Royal carriage: broken wheel.)</i>",
    how:"The Herald handed it to you at the gate so you could sign off for the royal party. You kept it." }
}
);


CHARS.push(
{ id:"cedric", name:"Sir Cedric Aelfric Brightblade", title:"Knight of the Realm, Champion of Queen Margarethe", emoji:"⚔️", optional:false,
  p1:{
    who:"You are a famously brave knight, according to you. You have fought in 'forty victories' (the number changes every time you say it) and you will tell anyone who will hold still. You are secretly terrified of ghosts, geese, and loud noises in the dark. It is All Hallows' Eve and you are NOT comfortable.",
    quirk:"Every story starts 'In my forty victories...' and the number changes each time ('thirty-eight', 'fifty-one'). You make tiny involuntary flinches at spooky noises (creaks, bells, giggles) and then say 'Hah! A knight is never startled!' very loudly.",
    treat:["Puff up your chest around other men of rank; challenge the Jester to a verbal duel and lose.","Bow low to the Queens and compliment their courage.","Treat your squire Wat with gruff affection and constantly ask him to hold something.","Avoid anything spooky; change the subject whenever ghosts, bats, or the dark are mentioned."],
    rel:[["Squire Wat Fenwick","Your squire, your shadow, your biggest fan. You teach him everything (badly)."],["Queen Margarethe","You are her champion. You would die for her and she knows it and bosses you."],["Baron Godfrey","He lent you 50 marks, which you have not repaid. You avoid him by loudly telling stories."]],
    flaw:"A secret coward who is dying to be seen as a hero. You also owe money you pretend you don't.",
    secret:"ABOUT MAGISTER MORDECAI: his 'magical lightning' is flash powder. You saw him mixing it in the stable behind the royal tent last spring. Trade this for information.",
    gift:"A polished (by Wat) hunting horn for the Baron to blow at feasts. It is horrifyingly loud.",
    props:["A cardboard, foam, or wooden sword with a scabbard","A shield (a lid, tray, or cardboard)","A tin-foil medal pinned to your chest","A colander, pot, or helmet-shaped hat"],
    costume:"A tunic with a tabard over a long-sleeved shirt, a belt with a sword, boots, an enormous mustache (drawn or glued).",
    starters:["'In my forty victories, I have never seen such a feast!'","'Ahem, who rang that bell? I was not startled.'","'Wat! Hold this. And that. And my dignity.'"]
  },
  p2:{
    afternoon:"From half past four until the six o'clock bell, you and Squire Wat practised at the tilt-yard quintain (forty-one passes, you will say forty). The Marshal's tablet recorded it. You could see the East Gallery window, where the foreign queen and Master Crowe took tea the whole time. You waved. Nobody waved back.",
    story:"Between passes you glimpsed Lord Thornbury strolling alone in the gardens, pressing a hand to his coat and looking worried about something. You thought nothing of it: he looks worried constantly.",
    secret:"ABOUT YOUR 50 MARKS: you owe the Baron, and you suspect he planned to say so at the toast. You are ashamed but also relieved the debt may now be 'forgotten'. You are NOT proud of this.",
    herring:"You are firmly convinced that Tobias the Jester is the murderer. The Baron threatened to banish the jester after the last feast, and the Jester writes nasty songs about knights. You do not know what clears him.",
    quest:["The empty ratsbane packet","You want to know who discarded a poison packet near the Hall. Find it and turn it in."]
  },
  ev:{ name:"The Tilt-Yard Tablet", emoji:"🛡️",
    text:"<span class='aname'>WAX TABLET OF THE MARSHAL OF THE LISTS</span>Oct 31. Practice at the quintain, Sir Cedric Brightblade and squire. From <b>half past four until the six o'clock bell</b>. <b>Forty-one</b> passes. (Sir Cedric says forty. The Marshal has noted forty-one.)<br>Four dents in the quintain. One dent in a goose. <i>Marshal's mark: ♞</i>",
    how:"The Marshal handed it to you as proof of your passes. You intend to show it to everyone as proof of your forty victories. (It is only a practice tablet.)" }
},
{ id:"wat", name:"Wat Piers Fenwick", title:"Squire to Sir Cedric the Valiant", emoji:"🧣", optional:false,
  p1:{
    who:"You are a sweet, overeager young squire, clumsy and endlessly loyal to Sir Cedric. You can write a clear hand, which makes you useful to everyone who needs a letter copied. You carry much more than you should and you drop at least one thing per conversation.",
    quirk:"You REPEAT the last few words of anything Sir Cedric says, in awe ('Forty victories!' 'Forty!'), then add 'Indeed!' You cannot lie without going bright red and stammering. You are always carrying something and apologising.",
    treat:["Admire Sir Cedric loudly, at all times.","Be shy around the Princess (if she is present); blush and drop something.","Be helpful to everyone: offer to carry, fetch, or copy anything.","If asked a direct question, answer too honestly, then regret it."],
    rel:[["Sir Cedric","Your knight, your hero, your boss. You love him, even though you know his stories are fibs."],["Tobias Thistlewick, the Jester","Your friend. He teaches you rhymes and tricks."],["Princess Isolde","If she attends: your secret crush. You write poems you never show."]],
    flaw:"You cannot lie. Any direct question gets a stammering, over-honest answer, and you cannot keep a secret for long.",
    secret:"ABOUT SIR CEDRIC: he is terrified of ghosts, geese, and the dark, and he sleeps with a candle burning. You hold his gauntlets while he shivers. Trade this for information.",
    gift:"A small neat hand-copied scroll of poems (for anyone who wants one), tied with a ribbon.",
    props:["A tray piled with random objects (cups, a sock, a shoe)","A polishing cloth over your shoulder","A quill pen and a small roll of paper","A tote bag or satchel marked 'GEAR'"],
    costume:"A plain tunic, belt, boots, hair slightly messy, a smudge of ink on your cheek.",
    starters:["'Sir Cedric says he has done forty victories!' 'Forty!'","'May I carry that for you? Oh dear, I dropped something.'","'I have a scroll of poems if... never mind, it is nothing.'"]
  },
  p2:{
    afternoon:"You and Sir Cedric were at the tilt-yard from half past four until the bell at six. A squire never leaves his knight's side. You held the lances, mended the straps, and chased away a goose. It was a very long afternoon.",
    story:"Last week the stables were overrun with rats. Master Crowe sold you a packet of ratsbane on Oct 30 for three pennies, and you put it out. Fourteen rats died. You threw the empty packet into the stable midden, and you are very proud of your rat count. Earlier in the week, the Baron asked you to fair-copy his toast speech, as your hand is neat.",
    secret:"ABOUT THE BARON'S TOAST: the Baron planned to name three debtors in his toast, saying their names would 'ring through the hall'. You did not understand why, but the draft you copied is clear enough. He seemed very pleased with himself.",
    herring:"You are firmly convinced that the MOTIVE was the Queen of Cathay's trade charter. Surely someone wanted the Baron dead to stop the deal. You think the Baron's charter would have ruined whoever is cut out of the trade.",
    quest:["Sir Cedric's Tilt-Yard Tablet","You want proof you served at the tilt-yard so Sir Cedric will finally recommend you for knighthood. Find the Marshal's tablet and turn it in. (It is held by Sir Cedric. Ask him nicely.)"]
  },
  ev:{ name:"The Baron's Toast Speech (Draft)", emoji:"🎤",
    text:"<span class='aname'>THE TOAST, FIRST DRAFT</span><i>(fair copy in Wat's hand, Baron's corrections)</i><br>'Honoured guests! <b>First</b>, to our Eastern Lady, whose coming is a wonder. <b>Second</b>, tonight I settle accounts, and I shall name three debtors for all to hear: a gallant knight, <u>fifty marks</u>; a merchant who sells me wool as silk; and one <u>noble friend of long years</u>, whose <u>three hundred marks</u> are overdue and whose manor shall be mine by All Souls' Day. Ha! You know who you are! <b>Third</b>, a toast, from the Loving Cup. I SHALL DRINK FIRST.'",
    how:"The Baron asked you to copy this in your neat hand three days ago. You kept the draft. You were told not to show anyone before the toast." }
},
{ id:"mordecai", name:"Magister Mordecai Quillfeather", title:"Court Magician to King Oswin", emoji:"🔮", optional:false,
  p1:{
    who:"You are the King's court magician and the most mysterious man in the kingdom. You are also a fraud. Your 'magic' is stagecraft, flash powder, card tricks, and cheap almanacs. You must never be caught, because the King believes in you, and the King's belief is your whole income.",
    quirk:"You gasp at 'omens' in ordinary things ('The salt spilled to the LEFT!' 'Three candles! An omen!') and make vague, ominous predictions that could mean anything. You pull coins from people's ears and sleeves. You speak in a hushed, theatrical whisper and wave your sleeves.",
    treat:["Be mysterious and dramatic with everyone; read palms and tea leaves.","Tell the King his future is bright, which he loves.","Be wary of the Jester; he is the one person who sees through you.","Avoid Queen Margarethe's gaze; she hates you."],
    rel:[["King Oswin","Your patron. He believes everything you say, and you take care to say very little."],["Tobias Thistlewick, the Jester","Your rival. He mocks your tricks and you hate it."],["Queen Margarethe","She distrusts you. You are very polite and sweaty near her."]],
    flaw:"Total fraud, terrified of being exposed. You panic when asked to perform real magic or to explain how your tricks work.",
    secret:"ABOUT TOBIAS THE JESTER: he writes the rude ballads about the court that are sung in every tavern. His rhymes give him away: he always rhymes 'queen' with 'obscene'. Trade this for information.",
    gift:"A small velvet bag of 'enchanted' pebbles (guaranteed to bring luck for at least a day).",
    props:["A pointy hat or hood and a long robe (a bathrobe!)","A deck of cards or some coins for tricks","A glass bowl or ball as a 'crystal ball'","A wand: a chopstick, stick, or wooden spoon"],
    costume:"A starry dark robe, a pointed hat, rings, a long fake beard if you can. Practice one coin trick.",
    starters:["'Hush! Do you not hear it? The omens are... stirring.'","'Allow me to read your palm. Ah. I see... a visitor. Or a loss.'","'The coin! It was behind your ear all along.'"]
  },
  p2:{
    afternoon:"You travelled with the royal party. The wheel broke on the road, you spent hours standing in the mud being blamed for it, and you reached Ravenmoor at a quarter past six, grumpy and covered in dust.",
    story:"Three weeks ago at Hollin Fair you bought a packet of ratsbane from Master Crowe for your 'Rat-Vanishing Trick', in which a rat vanishes from a box. It is still sealed in your bag. You have never used it, since the trick actually uses a sleeve and a very patient pet rat named Gerald.",
    secret:"ABOUT THE ROYAL COACH: the wheel that broke on the road was no curse. The King's coachman admitted to you that he forgot to grease the axle. You swore not to tell the Queen, who has been blaming you ('the magician's bad omens').",
    herring:"You are firmly convinced that Sir Cedric is the murderer. You know the Baron lent him fifty marks and you saw him staring at the Baron's goblet when you arrived. You do not know what clears him.",
    quest:["The Baron's Toast Speech (Draft)","You fear the Baron meant to name you as a fraud in his toast. Find his draft speech and turn it in."]
  },
  ev:{ name:"A Sealed Packet of Ratsbane (No. 3)", emoji:"☠️",
    text:"<span class='aname'>PACKET OF RATSBANE</span><span class='big'>☠️</span><b>Crowe &amp; Co.</b> printed in black. <b>No. 3</b> stamped with a crow. Tied with black thread; the wax seal is <b>UNBROKEN</b>. Warning in red: <i>'Poison! Keep from children, pie, and Kings.'</i>",
    how:"You bought it at Hollin Fair on Oct 8. You carry it in your bag for your Rat-Vanishing Trick. It has never been opened." }
},
{ id:"tobias", name:"Tobias \"Tumble\" Thistlewick", title:"Court Jester to King Oswin", emoji:"🃏", optional:false,
  p1:{
    who:"You are the King's beloved court jester: wise as a judge, silly as a goose. You tell the truth to everyone, always disguised as a joke, so you may say what no one else can. You are rarely taken seriously, which suits you perfectly.",
    quirk:"You speak mostly in RHYME (even badly: 'oh the mead, I do need!'), your bells jingle with every move, and you deliver insults as compliments ('Sir, your mind is as sharp as a bowl of pudding!'). You cartwheel when surprised and bow at the end of every performance.",
    treat:["Tease everyone gently, especially the powerful. Poke fun at the knight, the magician, and the Baron.","Be fiercely loyal to King Oswin; keep him laughing.","Speak a hard truth, then follow it with 'Just a jest!'","Be warm and silly with the Squire and the Princess."],
    rel:[["King Oswin","Your friend and your patron. He is a child, and you love him."],["Magister Mordecai","Your rival. You can duplicate any of his tricks but he cannot do yours."],["Baron Godfrey","He found your mockery rude and threatened to banish you from his halls."]],
    flaw:"You cannot resist mocking anyone and everyone. It has made you enemies. You also hate being quiet.",
    secret:"ABOUT QUEEN MARGARETHE: she sings in the bath, loudly and badly, and has begged you never to tell. You were walking past the bath-house and heard 'Greensleeves' butchered. Trade this for information.",
    gift:"A set of three 'juggling' balls (they are actually socks) and an acrostic poem about the Baron.",
    props:["A jingling hat or bells (tie small bells to your sleeves)","A stick topped with a sock puppet or stuffed toy","Three balls or socks to (almost) juggle","Mismatched socks, tights, or colourful clothing"],
    costume:"Bright, mismatched colours, a floppy two-pointed hat with bells, striped tights, a big painted smile.",
    starters:["'Good sir, you are as wise as a bell, and just as hollow!'","'A knight, a mage, and a king walk into a feast... and only one is sober!'","'Hear the tale of Wat the Squire, who dropped a lance, and then his hire!'"]
  },
  p2:{
    afternoon:"You rode with the King and Queen Margarethe in the cart behind the royal carriage, and sang all the way to keep the King amused. The wheel broke and you reached Ravenmoor at a quarter past six, singing the whole way.",
    story:"At half past six, as the guests settled, your bell fell off your hat and rolled out through the garden door. You went after it and, in the gravel just outside the door, you found a torn, crumpled, empty ratsbane packet marked with a crow stamp, as if someone had tossed it quickly into the shrubs. You pocketed it with a rhyme.",
    secret:"ABOUT THE FEAST: the Baron whispered to you at 6:40 that he had 'a big surprise for the toast' and told you not to joke about money for the rest of the night. You promised and immediately regretted it.",
    herring:null,
    quest:["The Baron's Order of Ceremonies","You are curious why the Baron cared so much about the order of the evening. Find the Order and turn it in. (The foreign Queen has it. Make her laugh!)"]
  },
  ev:{ name:"An Empty Packet of Ratsbane (No. 2)", emoji:"📦",
    text:"<span class='aname'>CRUMPLED PAPER PACKET</span><span class='big'>📦</span>Crow stamp. <b>'Crowe &amp; Co. RATSBANE No. 2.'</b> Torn open, <b>completely empty</b>, a little grey dust clinging to the fold. A smell of garlic. Gravel from a garden path still stuck to it.",
    how:"You found it in the gravel just outside the Hall's garden door at about half past six, when you chased your fallen bell." }
}
);


CHARS.push(
{ id:"reginald", name:"Lord Reginald Cuthbert Thornbury", title:"Lord of Thornbury Manor (somewhat in the red)", emoji:"🎩", optional:false,
  p1:{
    who:"You are a charming, vague, and thoroughly bankrupt nobleman. Your manor leaks, your servants have left, and your coat is older than most guests. You are tremendously proud and pretend nothing is wrong. You never speak of money, because it is 'so tedious'.",
    quirk:"You say 'Money is so TEDIOUS' whenever the subject comes up, and you discreetly POCKET snacks and small trinkets throughout the evening (bread, cheese, comfits, sugared nuts, an occasional spoon). You are the sort of person who 'forgets' his purse.",
    treat:["Act lavishly rich. Wave away bills, dismiss prices, and say 'a trifle'.","Be effortlessly charming to everyone, especially people you owe money.","Be anxious whenever the Baron or Master Crowe is close; find a reason to slip away.","Be fiercely devoted to your wife, and defer to her on every serious decision."],
    rel:[["Baron Godfrey","Your oldest friend since boyhood, and your greatest creditor. You avoid his eye."],["Lady Rosamund Thornbury","Your wife and the real brains of the family. You adore her."],["Master Crowe","You owe him, too. You duck behind pillars when he approaches."]],
    flaw:"Pride, delusion, and an inability to face his problems. You have never in your life done a day's work.",
    secret:"ABOUT THE BARON: his famous cellar is mostly cider barrels. You helped him roll them in when no one was looking, years ago. He swore you to secrecy. Trade this for information.",
    gift:"A beautiful wooden box, empty. 'The contents are a surprise. A surprise for a later date.'",
    props:["A monocle (a magnifying glass or a round frame)","A faded fancy coat with lots of deep pockets","An empty coin purse you wave around","A lace handkerchief; a hidden snack"],
    costume:"The fanciest worn-out jacket you own, a floppy cravat, scuffed shoes you pretend are fashionable.",
    starters:["'Money? Oh, how tedious. Is that a cheese?'","'Do try the comfits, they are simply too delightful to ignore.'","'My manor? Splendid, thank you. The roof is... aerated.'"]
  },
  p2:{
    afternoon:"You spent the late afternoon strolling alone around the keep, admiring the architecture and the gardens. You are a bit vague about exactly where and for how long: you never could keep track of time, unless a meal was involved.",
    story:"The Baron delivered a formal writ to you on Oct 29, which you have not yet shown your wife. You folded it into your coat and promptly lost track of what it said, because the last sentence made your head spin. You are sure it will 'sort itself out'.",
    secret:"ABOUT YOUR DEBT: you owe the Baron 300 marks, due on All Souls' Day, or Thornbury Manor is forfeit. You have told no one. Your wife would die of shame. You hope that, somehow, it will all go away.",
    herring:"You are firmly convinced that Master Crowe is the murderer. He sniffs around your debts and knows exactly how much you owe, and you think you once heard him mutter that the Baron 'would not see All Souls'. You do not know what clears him.",
    quest:["Lady Rosamund's chapel offering receipt","You want proof your wife has been praying for your finances. Find her receipt from the chapel (she is guarding it) and turn it in."]
  },
  ev:{ name:"The Baron's Writ of Debt", emoji:"📜",
    text:"<span class='aname'>WRIT OF DEBT</span>Under the seal of Baron Godfrey Aldous de Ravenmoor:<br><i>I, the Baron, demand of my friend <b>Lord Reginald Cuthbert Thornbury</b> the sum of <b>THREE HUNDRED MARKS</b>, to be paid by <b>All Souls' Day (Nov 2)</b>. Failing which, <b>Thornbury Manor shall be forfeit</b> and pass to me. No further extension shall be granted.</i><br>Delivered by hand, Oct 29.",
    how:"The Baron handed it to you at supper on the 29th. You folded it into your coat and tried not to read the last line." }
},
{ id:"rosamund", name:"Lady Rosamund Philippa Thornbury", title:"Lady of Thornbury Manor, cousin to the Queen", emoji:"🦢", optional:false,
  p1:{
    who:"You are Lord Thornbury's formidable, impeccably polite wife. Your family fell on hard times a long while ago, and you have not stopped smiling since. You never mention money, you never complain, and you pity everyone who has more of it than you.",
    quirk:"You are SYRUPY-sweet and devastatingly polite: 'Oh, how BRAVE of you to wear that!', 'Dear me, what a dish... what is it?' Every compliment contains a small knife. You pat everyone's arm gently while delivering the insult.",
    treat:["Be warm, genteel, and kind, then deliver a polite, devastating comment.","Defer to your husband in public, and run the show in private.","Be loyal to your cousin Queen Margarethe, who fusses over you.","Pity merchants. Speak to Master Crowe as if he is a charming puppy."],
    rel:[["Lord Reginald Thornbury","Your husband. Kind, useless, adored. You manage everything."],["Queen Margarethe","Your cousin. You love her and resent how kindly she pities you."],["Brother Ambrose","If he attends: your confessor, who keeps your secrets."]],
    flaw:"Pride in your family name. You would rather starve in silk than accept charity, and you never admit anything is wrong.",
    secret:"ABOUT YOUR HUSBAND: Reginald pockets sweets everywhere he goes, comfits, marzipan, bits of cheese. You find melted comfits in all his coats and have given up. He thinks you don't know. Trade this for information.",
    gift:"A hand-stitched lavender sachet (the lavender is mostly dried grass) and a thoughtful note.",
    props:["Lace gloves or a lace-trimmed scarf","A hand fan","Obviously-fake jewels: big bead necklace, clip-on earrings","A lorgnette (a pair of glasses on a stick) or a monocle"],
    costume:"An old-fashioned, slightly threadbare gown, too many mismatched jewels, perfect posture, flawless smile.",
    starters:["'Oh, how BRAVE of you to wear that. Truly.'","'Reginald, dear, put the cheese back.'","'Do you know, my cousin the Queen mentions you often. Mostly as a warning.'"]
  },
  p2:{
    afternoon:"At about five o'clock you went to the chapel for the All Hallows' vigil and lit seven candles for your husband's finances. You stayed in prayer until the six o'clock bell. Brother Ambrose gave you a receipt for the offering, as you never go anywhere without a receipt.",
    story:"You have not seen your husband much since lunch. He said he would 'take the air'. He is always vague about afternoons. When he rejoined you, he was in an extraordinarily good mood, quite unlike him, and he kissed you on the forehead.",
    secret:"ABOUT THE DEBT: your husband owes the Baron 300 marks. You discovered it only last night when you found the writ crumpled in his coat. He does not know you know. You have been sick with worry.",
    herring:"You are firmly convinced that Magister Mordecai is the murderer. He is a sinister man who deals in potions and omens and looked far too interested in rats. You do not know what clears him.",
    quest:["The King's napkin of sugared crumbs","You want to return the King's lost napkin to impress him. Find it (the King has it) and turn it in. Be polite."]
  },
  ev:{ name:"The Chapel Offering Receipt", emoji:"🕯️",
    text:"<span class='aname'>CHAPEL OF ST. ETHELBURGA, RAVENMOOR</span>Received this day, All Hallows' Eve, of <b>Lady Rosamund Thornbury</b>: an offering of <b>seven candles</b> and a coin, for the vigil. Lady Rosamund entered at five o'clock and kept the vigil <b>until the six o'clock bell</b>.<br><i>Br. Ambrose Marlowe, chaplain</i> (and a small drawing of a tankard).",
    how:"Brother Ambrose gave it to you after the vigil. You keep every receipt. You never know when you might need one." }
},
{ id:"crowe", name:"Master Bartholomew Crowe", title:"Merchant of the Wool Guild, Crowe &amp; Company", emoji:"💰", optional:false,
  p1:{
    who:"You are a shrewd, chatty, relentless merchant who has never met a thing that couldn't be sold at a profit. You have come to Ravenmoor for one reason: to win the foreign queen's trade, and thereby a monopoly. You sell everything: wool, spices, oil, 'authentic' silks, and the occasional rat poison.",
    quirk:"You APPRAISE everything and everyone aloud ('That hat? Two shillings! The cloak? Eight!') and you name a price for every object, favour, and secret, even in casual chat. You tally on your fingers and hum when you are doing sums. You haggle even over greetings.",
    treat:["Pitch everything to everyone. Everyone is a customer.","Be fawning to the foreign Queen and the King. Be unctuous. Offer discounts.","Avoid Lord Thornbury politely; he owes you money.","Give everyone's gift a price tag, loudly."],
    rel:[["Baron Godfrey","Your partner in loans and trade. You think he is a fool but a profitable one."],["The foreign Queen","The prize. You will sell her anything. (You will learn who she is when she arrives.)"],["King Oswin","Your biggest debtor. His circlet is in your strongbox."]],
    flaw:"Greed. You also sell fakes and have a habit of mislabelling goods, 'for efficiency'.",
    secret:"ABOUT KING OSWIN: his gold circlet is in pawn to you for a loan that paid for hunting dogs. The King does not wear it because he does not have it. Trade this for information.",
    gift:"A set of 'free samples' for everyone (spice, a ribbon, a lump of 'amber'), each with a small paper price tag.",
    props:["An abacus, calculator, or notebook of figures","A coin pouch full of tokens or chocolate coins","A measuring tape or ruler","A bolt or swatch of cloth to display"],
    costume:"A tidy tunic in good brown wool, a cap, a chain of office, a belt with a purse, ink-stained fingers.",
    starters:["'That cloak? Eight shillings. Tell me, what would you pay for a better one?'","'For you, friend, a special price. Just for you.'","'Everything has a price. What is yours?'"]
  },
  p2:{
    afternoon:"From half past four until the bell at six you sat in the East Gallery, taking tea with Queen Suyin and pitching her your wares. She poured seven pots. Through the window you watched Sir Cedric and his squire tilt at the quintain in the yard below. You did not leave her side for even a moment.",
    story:"This week you sold three packets of ratsbane, all stamped 'Crowe &amp; Co.', each with a number: No. 1 to the squire (for the stables), No. 2 to Lord Thornbury (on credit, for the manor's rats), and No. 3 to the King's magician (at Hollin Fair on Oct 8). You keep a careful ledger of every sale and every loan.",
    secret:"ABOUT THE LOANS: you and the Baron lent money jointly to Lord Thornbury (300 marks) and to Sir Cedric (50 marks). The Baron planned to collect on both at the feast, to your great amusement. You were not planning to be so public about it.",
    herring:"You are firmly convinced that Squire Wat is the murderer. He bought poison from you the day before, nervous and blushing, and could not look you in the eye. You do not know what clears him.",
    quest:["Lord Thornbury's Writ of Debt","You want to know exactly how much the Baron claimed in debts. Find the Baron's writ to Lord Thornbury and turn it in."]
  },
  ev:{ name:"Crowe & Co. Day Ledger", emoji:"📒",
    text:"<span class='aname'>CROWE &amp; CO. LEDGER</span><b>RATSBANE (3 packets, each stamped with a crow and a number):</b><br>No. 1: Oct 30, to <i>Wat Fenwick, squire</i>, 3d, for stable rats.<br>No. 2: Oct 30, to <i>Lord R. Thornbury</i>, on credit, 'for the rats at Thornbury Manor'.<br>No. 3: Oct 8, Hollin Fair, to <i>Magister Mordecai</i>, 3d, 'for a stage trick'.<br><b>LOANS (jointly with the Baron):</b> Lord Thornbury 300 marks; Sir Cedric 50 marks.<br><b>PAWN:</b> One gold circlet (royal), unredeemed.",
    how:"It never leaves your side. Today you reluctantly agreed to show it, in the hope of selling something." }
}
);


CHARS.push(
{ id:"isolde", name:"Princess Isolde Rosalind Plantagrey", title:"Princess of Aldermere, daughter of King Oswin", emoji:"🌹", optional:true,
  p1:{
    who:"You are the dreamy, romantic, dramatic young Princess of Aldermere. You believe the world is a ballad and you are its heroine. You have a lot of feelings, a lot of sighs, and a very clean handkerchief.",
    quirk:"You SIGH loudly at nothing ('Ohhh...'), clutch your heart at mention of love, poetry, or the moon, and FAINT dramatically (onto the pillow or sofa) at anything alarming. You cry 'It's just like the ballads!' about everything.",
    treat:["Be romantic about every situation and gently swoon.","Be excessively sweet to the squire and the minstrel. Gaze longingly.","Be embarrassed by your mother's bossiness; hide behind your fan.","If anyone mentions 'duty', run away or faint."],
    rel:[["Queen Margarethe and King Oswin","Your parents. Your mother organises your life and your father forgets it."],["Squire Wat Fenwick","The sweet squire who dropped a tray at court. You think of him often. A little too often."],["Lucien the Troubadour","He writes songs about you. They are not good, but you swoon anyway."]],
    flaw:"Naive and impulsive. You believe any sad story and run from any responsibility.",
    secret:"ABOUT SQUIRE WAT: he carries a poem folded in his tunic that begins 'O Princess of the starry hair'. You peeked. You did not tell him you peeked. Trade this for information.",
    gift:"A pressed rose in a tiny glass frame for the Baron, and a sonnet you wrote about the moon.",
    props:["A flower crown or a few real/paper flowers","A 'love letter' on scented paper","A pillow or cushion for fainting safely","A hand mirror or ribbon"],
    costume:"A pastel gown or nightgown with a long scarf as a veil, flowers in your hair, flushed cheeks.",
    starters:["'Ohhh, is it not exactly like a ballad?' *sigh*","'Have you ever loved someone whose name you couldn't say?'","'I feel faint... Oh, there is a lovely cushion!'"]
  },
  p2:{
    afternoon:"You rode to Ravenmoor with your parents, the Magister, and the Jester, in the royal carriage. The wheel broke and you did not arrive until a quarter past six. You spent the journey weaving daisy chains and fretting about your hair.",
    story:"Earlier this week, you overheard your mother angrily telling someone that the Baron had written offering you in marriage to his nephew 'with a dowry of a trade charter', as if you were a parcel. You were horrified. The Baron's letter has made your mother very cross indeed.",
    secret:"ABOUT YOUR MOTHER: Queen Margarethe was livid about the proposal and called the Baron a 'strutting bantam' behind his back. But she is too proper to harm anyone. You know her best, and you are sure she is no killer.",
    herring:"You are firmly convinced that Brother Ambrose the Friar is the murderer. He is a herbalist, he mutters dark Latin, and he looked twitchy when the Baron fell. You do not know what clears him.",
    quest:["The Baron's Toast Speech (Draft)","You wonder if the Baron wrote anything about you in his toast. Find his speech and turn it in."]
  },
  ev:{ name:"The Baron's Marriage Proposal Letter", emoji:"💌",
    text:"<span class='aname'>FROM BARON GODFREY</span>To Their Majesties of Aldermere:<br><i>'I humbly offer the hand of the Princess Isolde to my nephew, Lord Alaric of Ravenmoor, with the Queen of the East's trade charter as dowry. I expect your answer by All Souls'.'</i><br>(The Queen of Aldermere has written across it: <b>'NEVER!'</b> and underlined it three times.)",
    how:"You found it crumpled in your mother's travelling case. You were horrified and kept it." }
},
{ id:"wen", name:"Wen Liang", title:"Interpreter and Escort to the Queen of Cathay", emoji:"🏯", optional:true,
  p1:{
    who:"You are Queen Suyin's loyal interpreter and companion, who has travelled with her for two years. You speak the western tongue fluently, with very dry humour. You translate for the Queen, but you add your own opinion. You are the only person who knows what she really thinks.",
    quirk:"You TRANSLATE the Queen's flowery pronouncements into blunt, deadpan one-liners ('She says she is honoured to dwell in your hospitality.' 'Translation: the soup is fine.'). You speak without expression, no matter what is happening. You occasionally 'misinterpret' on purpose, to mischief.",
    treat:["Stand just behind the Queen and translate for her. Be dry and unflappable.","Give honest, brutal translations of what Europeans say, too ('He says he is delighted. He is not.').","Be wary of anyone who tries to sell things to the Queen.","Be quietly polite and very, very funny."],
    rel:[["Queen Suyin","Your queen and friend. You know her moods by her fan."],["Master Crowe","He tries to sell you things between sentences. You enjoy ruining his deals."],["Magister Mordecai","He tried to buy 'something exciting' from the Queen's baggage. You said no."]],
    flaw:"You mistranslate on purpose when bored. It has already caused one treaty near-disaster.",
    secret:"ABOUT QUEEN SUYIN: she adores English custard tarts and ate eleven on the road. She has begged you never to tell. Trade this for information.",
    gift:"A scroll with the Baron's name written in beautiful Cathay characters (it says 'Honoured Host' - maybe).",
    props:["A scroll or rolled paper","A small notebook and a quill or pen","A sash or silk belt","A teacup, always on a saucer"],
    costume:"A simple dark silk robe with a sash, hair tied back, completely neutral expression.",
    starters:["'She says it is a pleasure. It is... a pleasure.'","'I will translate that. She says no.'","'Do not mention custard tarts. I beg you.'"]
  },
  p2:{
    afternoon:"You arrived at one o'clock with the Queen. From half past four until six, you stood in the corridor outside the East Gallery, keeping a log of the tea ceremony with Master Crowe. The gallery window overlooks the tilt-yard. You could not hear them but you counted seven pots and watched Sir Cedric's passes.",
    story:"Master Crowe talked for ninety minutes. You were told to log every word, but you abandoned the log after the third offer of 'authentic silk', and drew small, rude pictures of Master Crowe's hat instead.",
    secret:"ABOUT THE QUEEN'S CHARTER: the Queen has already decided to trade with the Baron. She was going to announce it at the toast, as a surprise. The Baron's death is bad for everyone.",
    herring:null,
    quest:["The Tilt-Yard Tablet","You wish to understand this 'forty victories' business. Find Sir Cedric's tablet and turn it in."]
  },
  ev:{ name:"The Interpreter's Tea Log", emoji:"🍵",
    text:"<span class='aname'>LOG OF THE TEA CEREMONY</span>East Gallery, Oct 31. <b>4:30</b> The Queen sits. Master Crowe sits. Pot 1.<br><b>5:15</b> Pot 4. Master Crowe still talking. Window overlooks the tilt-yard: Sir Cedric and squire at the quintain.<br><b>6:00</b> Bell. Pot 7. Master Crowe has offered the Queen 'silk', 'a bargain', and 'a sure thing'. Queen declines all.<br><i>(Margin: a rude drawing of a merchant's hat.)</i>",
    how:"You kept it while standing guard outside the gallery. It is mostly accurate." }
},
{ id:"godwin", name:"Godwin Alfred Hobsworth", title:"Steward of Ravenmoor Keep", emoji:"🗝️", optional:true,
  p1:{
    who:"You are the Baron's long-suffering steward, responsible for every door, key, cask, and candle in Ravenmoor. You love rules above all things. Tonight you are in a state of constant, quiet panic, because a royal feast means a thousand things that can go wrong.",
    quirk:"You ANNOUNCE rules nobody asked for ('Rule the Seventeenth: no sitting on the stairs!', 'Rule the Forty-First: no whistling before the soup!') and invent a new rule each time someone does something amusing. Your keys jingle constantly, and you sneak little sips from any goblet that is unattended.",
    treat:["Fuss over everyone and everything; announce rules and fix chairs.","Be loyal to the Baron even when he is ridiculous.","Be suspicious of the Jester, who has been known to steal from the kitchen.","Be deferential to royalty but secretly more important than any of them."],
    rel:[["Baron Godfrey","Your master. You adore and fear his enthusiasm."],["Tobias Thistlewick, the Jester","Your nemesis. He has pinched honey pots and mocked your keys."],["Brother Ambrose","Your drinking buddy, over a few secret sips in the cellar."]],
    flaw:"You secretly sneak sips of the Baron's best wine and are hoping nobody counts the barrels.",
    secret:"ABOUT BROTHER AMBROSE: he keeps a tiny flask of mead inside his Bible, hollowed out for the purpose. He refills it from the cellar. Trade this for information.",
    gift:"A hand-lettered 'Rules of the House' scroll, numbered up to 112.",
    props:["A very large ring of keys","A staff or long broom handle","A clipboard or scroll of 'Protocol'","A small bell to ring for dinner"],
    costume:"A dark livery or apron, a chain of office, a very serious expression, spectacles on the end of the nose.",
    starters:["'Rule the Twenty-Third: do not touch the candelabra.'","'Have you counted the guests? I make it eleven. Or sixteen. Dear me.'","'Is that goblet yours? Whose goblet is that?'"]
  },
  p2:{
    afternoon:"At a quarter past five you barred the main door of the Great Hall as the Baron ordered. You left the garden door latched but not bolted, for the herb boy, and you went down to the cellar to check the casks until the bell at six. You were in the cellar 'inventorying' about thirty-five minutes. You did not see anyone in the Hall.",
    story:"You kept the key to the Hall's main door on your belt the whole time. The Baron's own supply of rat poison, kept in the locked cupboard, was untouched when you checked it after the murder. You are very proud of that cupboard.",
    secret:"ABOUT THE GARDEN DOOR: it has no bolt, only a latch, because the Baron refused to pay for one. You warned him twice. You feel responsible and want to blame someone else.",
    herring:"You are firmly convinced that Tobias the Jester is the murderer. He has hated the Baron since the banishment threat, and he has stolen honey, and he laughed when the Baron fell. You do not know what clears him.",
    quest:["The empty ratsbane packet","You want to see whose poison it was and who left it on your clean garden path. Find the packet and turn it in."]
  },
  ev:{ name:"The Steward's Door Tally", emoji:"🗝️",
    text:"<span class='aname'>STEWARD'S TALLY OF DOORS</span>Oct 31, the Great Hall:<br>• <b>4:30</b> Hall closed. Cup on sideboard.<br>• <b>5:15</b> Cup tasted by kitchen boy: <b>sound</b>. MAIN DOOR barred. Key on my belt.<br>• <b>5:15</b> Garden door latched (<i>no bolt, as ever</i>).<br>• <b>5:20 to 5:55</b> Steward in cellar, inventory of 14 casks. (Cask 9 slightly lighter. Odd.)<br>• <b>6:00</b> Bell. Hall opened. Nobody seen in or out.",
    how:"You wrote it as you went, because you write everything down." }
},
{ id:"ambrose", name:"Brother Ambrose Tuck Marlowe", title:"Friar and Chaplain of Ravenmoor Chapel", emoji:"🍺", optional:true,
  p1:{
    who:"You are the jolly, round chaplain of Ravenmoor, a friar who loves a good meal, a good laugh, and a very good ale. You are a gifted herbalist and healer and you know more about plants than anyone for twenty miles. You are rarely entirely sober.",
    quirk:"You bless everything ('Benedicite, soup!') in terrible, made-up Latin ('Dominus pass-the-salt-um!'), burst into hiccups when nervous, and tell long stories that wander off into recipes. You offer penance in food form ('Three pies and a cheese!').",
    treat:["Be warm and cheerful to everyone, and bless everything.","Scold the Squire gently for his sins (clumsiness).","Be an ally to the Steward, but needle him about the keys.","Fuss over anyone who looks ill or sad."],
    rel:[["Lady Rosamund Thornbury","One of your flock. She confesses little, but you see her sorrows."],["Godwin Hobsworth, the Steward","Your drinking buddy and fellow cellar-raider."],["Baron Godfrey","He lets you live in the chapel and complains about your tankard."]],
    flaw:"Gluttony and tipsiness. You will say anything for another sip, and you sometimes fall asleep in the middle of a blessing.",
    secret:"ABOUT STEWARD GODWIN: he sneaks sips of the Baron's best wine from the cellar every night. Cask 9 is nearly empty. Trade this for information.",
    gift:"A bottle of 'blessed' herbal tonic (it tastes like feet) and a loaf of fresh bread.",
    props:["A brown robe or blanket tied with a rope belt","A string of prayer beads (or a necklace)","A tankard (a mug)","A small book or 'herb journal'"],
    costume:"A brown hooded robe with a rope belt, sandals, a bit of flour on your sleeves.",
    starters:["'Benedicite! Is this soup or a sacrament?'","'Child, what ails you? Have you tried more cheese?'","'Hic! I only had a thimble of mead. A large thimble.'"]
  },
  p2:{
    afternoon:"At five o'clock Lady Rosamund Thornbury came to the chapel for the vigil, lit seven candles, and stayed in prayer until the bell at six. You sat in the back with a tankard, nodding off, and gave her a receipt. You can swear she did not leave.",
    story:"As the herbalist of Ravenmoor, you know every poisonous plant for miles, but you know very little about ratsbane, a poison from the city. You saw nobody in the garden. The vigil took your full attention (and a lot of mead).",
    secret:"ABOUT THE POISON: ratsbane does not usually kill at once. It burns the throat and the belly and leaves a smell of garlic. The Baron died fast. Whoever mixed it used a lot, probably an entire packet.",
    herring:"You are firmly convinced that Magister Mordecai is the murderer. Dark arts, you are sure. He mutters over potions and keeps strange bottles. You do not know what clears him.",
    quest:["The Magister's sealed packet of ratsbane","You wish to bless the dangerous object, from a safe distance. Find his sealed packet and turn it in."]
  },
  ev:{ name:"The Chapel Vigil Register", emoji:"📖",
    text:"<span class='aname'>VIGIL REGISTER, ST. ETHELBURGA</span>All Hallows' Eve:<br><b>5:00</b> Present: Lady Rosamund Thornbury. Seven candles lit.<br><b>5:45</b> Lady Rosamund still at prayer. (Br. Ambrose dozing. Mead.)<br><b>6:00</b> Bell. Lady Rosamund rose.<br><i>(Margin: 'Pray for the soul of the soup.')</i>",
    how:"You keep the chapel's register. It is the only book you can reliably find." }
},
{ id:"lucien", name:"Lucien Fairweather", title:"Troubadour, Minstrel of the Roads", emoji:"🎶", optional:true,
  p1:{
    who:"You are a wandering troubadour who has come to Ravenmoor hoping to play for the royal court, and be paid. You are charming, vain, and entirely certain that you are the greatest songwriter in the realm. You are broke and always on the lookout for a rhyme.",
    quirk:"You burst into improvised SONG whenever there is tension, silence, or a pause ('Oh, the soup is hot, and the guests are not...'), and you rhyme at the end of every second sentence. You strike a pose after each verse and wait for applause.",
    treat:["Serenade people (especially the Princess), whether they asked or not.","Compete with the Jester for attention.","Be delighted by any drama; it's material.","Angle for payment from the Baron or the King."],
    rel:[["Princess Isolde","Your muse. You serenade her at every opportunity."],["Tobias Thistlewick, the Jester","Your rival for the royal ear."],["Baron Godfrey","He has not yet paid your fee from last Easter."]],
    flaw:"You steal other minstrels' tunes and swear they're yours. You also never pay back anything you borrow.",
    secret:"ABOUT TOBIAS THE JESTER: he cannot actually juggle. His juggling balls are stuffed socks, and he has dropped them in every performance for years. Trade this for information.",
    gift:"A song about the Baron, performed on the spot, with an invoice.",
    props:["A lute, ukulele, guitar, or tambourine","A feathered cap or hat","A small songbook or lyric sheet","A rose to present (to anyone)"],
    costume:"A colourful tunic, a cape, a feathered hat, boots, a dramatic scarf.",
    starters:["'I have composed a ballad about this very moment!'","'Shall I sing? I shall sing.'","'Who here has a rhyme for \"Baron\"? Only \"barren\"...'"]
  },
  p2:{
    afternoon:"You rode to Ravenmoor on the back of the royal baggage cart with Tobias the Jester, and the cart broke a wheel on the road, so you reached the keep only at a quarter past six. You spent the journey composing a ballad. Tobias did not appreciate it.",
    story:"At an earlier feast the Baron promised to pay you for a song and never did. You wrote 'The Ballad of Lord Moneyless' in revenge, and half the court has sung it. The 'Lord Moneyless' of the ballad is a poor lord with a worn-out coat and a very bad habit of stuffing food in his pockets.",
    secret:"ABOUT THE BALLAD: the lord of the song is based on a real nobleman you met at a feast. He pocketed three comfits and a boiled egg during your very first verse. You have never named him in public, since he's a nobleman, but you could describe him.",
    herring:"You are firmly convinced that Steward Godwin is the murderer. The Steward has kept your wages from you, shuts doors in your face, and had the keys to the Hall that evening. You do not know what clears him.",
    quest:["Lord Thornbury's Writ of Debt","You want to know how much a lord's debt really is, for the second verse of your ballad. Find the Baron's writ and turn it in."]
  },
  ev:{ name:"The Ballad of Lord Moneyless", emoji:"🎵",
    text:"<span class='aname'>THE BALLAD OF LORD MONEYLESS</span>'Oh Lord Moneyless, of the manor so thin,<br>With a roof full of holes and no coin within,<br>He swears that he's rich, 'neath his threadbare brocade,<br>But his <b>pockets are stuffed with comfits and bread</b>!<br>He takes bits of cheese when he thinks no one's near,<br>And a spoon for his supper, and a boiled egg, I fear!'<br><i>(A note in the margin: 'Tune stolen from another minstrel.')</i>",
    how:"You wrote it last winter and it is sung in every tavern. The lord in it is real, but the verses never name him." }
}
);


REWARDS.push(
 "The kitchen boy who tasted the Loving Cup at a quarter past five swore it was sound: nothing but spiced mead.",
 "The Baron's own rat poison, kept under the Steward's lock, was untouched. The poison came from outside the keep.",
 "A trial tray of violet comfits stood by the kitchen door at five o'clock. When the cook returned, it was lighter by a fistful.",
 "A whole packet of ratsbane was stirred into the Cup, enough to give the mead a faint smell of garlic and iron.",
 "The garden door's latch was found lifted at six o'clock, though the Steward swears he left it latched.",
 "The Hall's main door stayed barred from a quarter past five until the six o'clock bell. The only way in was the garden door.",
 "Fresh scuffs marked the gravel by the garden door: a shoe worn thin at the sole.",
 "The Baron laughed on the stairs this morning: 'By All Souls' Day I shall own a fine new manor!'",
 "The Loving Cup is the only silver goblet in the keep engraved with a raven. The Baron forbade anyone else to drink from it.",
 "Ratsbane stirred into warm, spiced mead leaves no colour at all, only a gritty sweetness underneath the spice.",
 "The kitchen boy who tasted the Cup was sent to the cellar for a keg at twenty past five, and saw no one in the passage to the Hall.",
 "The Marshal swears that neither the knight nor his squire left the lists between half past four and the six o'clock bell.",
 "The chapel's seven vigil candles were burned down to matching stubs by six o'clock. Whoever kept the vigil never left."
);


module.exports = { CHARS, REWARDS, INVITE };
