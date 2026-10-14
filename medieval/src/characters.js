
const CHARS = [];

const INVITE = {
  title: "By Command of the Household of Baron Godfrey de Ravenmoor",
  paras: [
    "Hear ye, all good folk of every estate, whether lord or lady, knight or merchant, minstrel or fool!",
    "Baron Godfrey Aldous de Ravenmoor doth bid thee to a <strong>Great Feast on the eve of All Hallows</strong>, to be held in the Hall of Ravenmoor Keep, in the year of Our Lord 1342.",
    "A most Exalted Lady hath come among us from a land beyond the farthest roads, with an escort and strange gifts in her train. In gratitude for so rare an honour, the Baron doth open his hall, his cellar, and his fire. Come, give thanks, and treat of trade and friendship, that all our houses may prosper.",
    "There shall be roast fowl, mulled mead, soul cakes for the souls of the faithful, and a toast, with the opening of all gifts, wherein by the custom of Ravenmoor each giver shall taste first of his own offering."
  ],
  small: [
    "Dress as befits thy station and thy purse; a hat and a good humour suffice. Gifts for the Exalted Lady shall be set upon the gift table by the Baron's household, and presented at the toast; thou needest bring none. Mind thy manners; the Baron counts everything. Each guest shall receive a purse of gold at the door, to spend upon tidings; and at the feast's end, prizes shall be given.",
    "Thine own good name and station are described in a private letter, which the Steward will deliver when thou givest thy name below. Keep it close and tell no one.",
    "Sent by the hand of Godwin Hobsworth, Steward of Ravenmoor. Make answer to the Steward that thou wilt attend."
  ]
};


CHARS.push(
{ id:"baron", name:"Baron Godfrey Aldous de Ravenmoor", title:"Lord of Ravenmoor Keep, your gracious host", emoji:"🏰", optional:false,
  p1:{
    who:"You are the proud, slightly anxious master of Ravenmoor, a modest barony you describe as 'practically a kingdom'. Tonight's feast is your grandest ever. A foreign queen has honoured your hall with a visit and you mean to impress her, charm the King, and sign a trade charter. You know almost nothing about the queen except that she has come from very far away with an escort and a great many trunks, and you are desperate to learn more.",
    quirk:"You COUNT everything aloud as you go ('Seven candles! Splendid!', 'Four guests by the fire, a fine number!') and you introduce every guest with an absurd, grand title you invent on the spot ('The Duke of Sunsets', 'Her Grace the Countess of Pudding'). You are certain your cellar is the finest in the shire.",
    treat:["Greet everyone as the most honoured guest you have ever had, then forget their name and invent a new title.","Flatter the King and Queen constantly and fuss that they have the best chairs.","Hover around the foreign queen and beg her for stories of her homeland, then nod as if you already knew.","Whenever money is mentioned, change the subject to your cellar."],
    rel:[["Lord Reginald Thornbury","Your oldest friend from boyhood, and also, awkwardly, a debtor: you and Master Crowe lent him a great deal."],["Master Bartholomew Crowe","Your business partner in lending and trade. You suspect he cheats you, but you need him."],["King Oswin","Your liege. His approval is your favourite food."]],
    flaw:"Vanity. You cannot bear to be corrected, and you exaggerate everything you know.",
    secret:"ABOUT MASTER CROWE: his famous 'Eastern silk' is dyed English wool. You have known for months and have said nothing because you profit too. Trade this for information.",
    gift:"The host's household provides a flask of 'the finest spiced mead in the shire' (it is mostly cider) for the Exalted Lady, and sets it on the gift table for you. You taste it first at the toast, by the custom of the house.",
    props:["A big ring of keys (any keys!)","A goblet or fancy mug to wave around","A rolled paper 'guest list' you consult and ignore","A cape: a bedsheet or bathrobe with a pinned-on brooch"],
    costume:"A velvet-looking robe or bathrobe, a belt, fur trim from a scarf, a slightly crooked small crown or cap.",
    starters:["'Have you seen my cellar? Four hundred casks!' (it is not four hundred.)","'Did you count the candles? Eleven!'","'Tell me, what do you know of our esteemed guest?'"]
  },
},
{ id:"suyin", name:"Queen Zhao Suyin of Cathay", title:"Sovereign of Cathay, the Honoured Guest from the Far East", emoji:"🏮", optional:false,
  p1:{
    who:"You are the Queen of Cathay, a great kingdom at the far eastern edge of the world. After two years on the long road you have reached the western lands to see them for yourself and find trading partners, because your court has grown bored of its own tea. You are calm, observant, wise, and quietly amused by European customs: eating with knives, bathing in rivers, and shouting at feasts.",
    quirk:"After each strange European custom, raise ONE eyebrow, say 'In Cathay...' and describe something that is the exact opposite. Whenever someone is upset, nervous, or arguing, you stop everything and ceremonially pour them tea, with a small bow. You never hurry.",
    treat:["Speak slowly and formally. Thank everyone for the smallest courtesy.","Be politely curious about the King (you outrank him in manners and let him know with a tiny smile).","Amused but wary of merchants who haggle. Let Master Crowe talk himself into trouble.","Refuse to discuss business until everyone has been served tea."],
    rel:[["Master Bartholomew Crowe","A persistent merchant who keeps offering you 'authentic Cathay silk'. You find it hilarious and slightly insulting."],["Baron Godfrey","Your kind but exhausting host. He counts things a great deal."],["Queen Margarethe","You admire her command of a room and secretly want to win the 'who is more regal' contest."],["Wen Liang","Your interpreter and companion, if he is in attendance. A trusted old friend."]],
    flaw:"Rigid about protocol. You will not be hurried, interrupted, or served out of order, and you hold a grudge for a bad pour of tea.",
    secret:"ABOUT QUEEN MARGARETHE: the large pearl necklace she wears is glass. A queen of Cathay knows real pearls by their glow. Trade this for information.",
    props:["A teapot or kettle and a few small cups (or mugs)","A folding fan or paper fan","A silk robe or long scarf (a kimono or bathrobe works)","Chopsticks as hairpins; a pen or two"],
    costume:"A long, flowing robe in red or gold, hair up and held with chopsticks, calm expression, a hint of dramatic eye makeup.",
    starters:["'In Cathay, a host drinks first. Tell me, is this custom also yours?'","'May I pour you some tea? You seem agitated.'"]
  },
},
{ id:"oswin", name:"King Oswin Edmund Plantagrey IV", title:"By the Grace of Heaven, King of Aldermere", emoji:"👑", optional:false,
  p1:{
    who:"You are the cheerful, round, and not-especially-bright King of Aldermere, who loves feasting, hunting, and being told he is wise. You rule mostly by agreeing with whoever spoke last. You have come to Ravenmoor mostly for the food, and partly because Queen Margarethe made you.",
    quirk:"You refer to yourself as 'We' (and sometimes forget and say 'me'). You fall asleep in the middle of sentences and wake up suddenly shouting a food ('...and thus the treaty—PIE!'). You carry a snack, always, and are always hungry.",
    treat:["Be delighted by everyone, but especially anyone who offers you food.","Defer to Queen Margarethe on everything, loudly.","Treat the Jester as your best friend; ask for a joke every few minutes.","Doze off whenever anyone speaks about trade, taxes, or politics for more than a sentence."],
    rel:[["Queen Margarethe","Your wife, the real ruler of Aldermere. You are terrified and adoring."],["Tobias Thistlewick, the Jester","Your closest friend. He tells you the truth and you pretend it is a joke."],["Magister Mordecai","Your court magician. You believe every word he says."]],
    flaw:"Gluttony and gullibility. You will believe anything, if it is said with confidence, and you can be bribed with sweets.",
    secret:"ABOUT LORD THORNBURY: at the last royal feast he stole your marzipan swan, tucked it into his coat, and ate it behind a curtain. You saw. Trade this for information.",
    props:["A paper or cardboard crown","A scepter (a wooden spoon, rolling pin, or long candle)","A cape or blanket draped over your shoulders","A drumstick or snack in your pocket at all times"],
    costume:"A red robe or tablecloth cape, golden belt, crown slightly askew, a napkin tucked in your collar.",
    starters:["'We are very hungry. Is there... pie?'","'Where is our jester? We require a joke.'","'Is it time for the feast? What time is it? Is it feast time?'"]
  },
},
{ id:"margarethe", name:"Queen Margarethe Eleanor Plantagrey", title:"Queen of Aldermere, Consort of King Oswin", emoji:"💎", optional:false,
  p1:{
    who:"You are the sharp, elegant, deeply bossy Queen of Aldermere. You run the kingdom, the household, the King's diet, and everyone's posture. You have come to Ravenmoor chiefly to ensure the new foreign queen does not outshine you.",
    quirk:"You SNAP your fan shut to silence a room and give commands in a clipped monotone ('Sit. Eat. Smile. Not like that.'). You correct everyone's manners, posture, and grammar, even strangers'. You sniff at things and say 'Hm.'",
    treat:["Command, correct, and instruct. Everyone should sit up straighter.","Be icily polite to the foreign queen, secretly rivalrous: you want the better chair.","Hover protectively over the King and cut his dessert for him.","Be suspicious of the Magician; roll your eyes when he predicts anything."],
    rel:[["King Oswin","Your husband. You love him dearly and treat him like a child."],["Lady Rosamund Thornbury","Your cousin, fallen on hard times. You pity her and pretend not to."],["Magister Mordecai","The court magician you cannot stand. He mutters about poisons and potions."]],
    flaw:"Control. You cannot stand being unprepared and you must have the last word.",
    secret:"ABOUT MAGISTER MORDECAI: his 'prophecies' are copied from a cheap street almanac he hides in his sleeve. You found it. Trade this for information.",
    props:["A hand fan (to snap)","A small bell or spoon to tap on a glass","A tiara or shiny headband","White gloves; a lace handkerchief"],
    costume:"A long gown or dress, a shawl, pearls, a tall stiff posture, an expression that says 'I am disappointed'.",
    starters:["'Sit up straight. You look like a sack of turnips.'","'Is that how they hold a goblet in your country? Hm.'","'My husband has no idea where he is. Please be kind.'"]
  },
}
);


CHARS.push(
{ id:"cedric", name:"Sir Cedric Aelfric Brightblade", title:"Knight of the Realm, Champion of Queen Margarethe", emoji:"⚔️", optional:false,
  p1:{
    who:"You are a famously brave knight, according to you, and you have come partly to hunt wolves in the Baron's woods tomorrow. You have fought in 'forty victories' (the number changes every time you say it) and you will tell anyone who will hold still. You are secretly terrified of ghosts, geese, and loud noises in the dark. It is All Hallows' Eve and you are NOT comfortable.",
    quirk:"Every story starts 'In my forty victories...' and the number changes each time ('thirty-eight', 'fifty-one'). You make tiny involuntary flinches at spooky noises (creaks, bells, giggles) and then say 'Hah! A knight is never startled!' very loudly.",
    treat:["Puff up your chest around other men of rank; challenge the Jester to a verbal duel and lose.","Bow low to the Queens and compliment their courage.","Treat your squire Wat with gruff affection and constantly ask him to hold something.","Avoid anything spooky; change the subject whenever ghosts, bats, or the dark are mentioned."],
    rel:[["Squire Wat Fenwick","Your squire, your shadow, your biggest fan. You teach him everything (badly)."],["Queen Margarethe","You are her champion. You would die for her and she knows it and bosses you."],["Baron Godfrey","He (and a merchant partner) lent you 50 marks, which you have not repaid. You avoid him by loudly telling stories."]],
    flaw:"A secret coward who is dying to be seen as a hero. You also owe money you pretend you don't.",
    secret:"ABOUT MAGISTER MORDECAI: his 'magical lightning' is flash powder. You saw him mixing it in the stable behind the royal tent last spring. Trade this for information.",
    props:["A cardboard, foam, or wooden sword with a scabbard","A shield (a lid, tray, or cardboard)","A tin-foil medal pinned to your chest","A colander, pot, or helmet-shaped hat"],
    costume:"A tunic with a tabard over a long-sleeved shirt, a belt with a sword, boots, an enormous mustache (drawn or glued).",
    starters:["'In my forty victories, I have never seen such a feast!'","'Ahem, who rang that bell? I was not startled.'","'Wat! Hold this. And that. And my dignity.'"]
  },
},
{ id:"wat", name:"Wat Piers Fenwick", title:"Squire to Sir Cedric the Valiant", emoji:"🧣", optional:false,
  p1:{
    who:"You are a sweet, overeager young squire, clumsy and endlessly loyal to Sir Cedric. You can write a clear hand, which makes you useful to everyone who needs a letter copied. You carry much more than you should and you drop at least one thing per conversation.",
    quirk:"You REPEAT the last few words of anything Sir Cedric says, in awe ('Forty victories!' 'Forty!'), then add 'Indeed!' You cannot lie without going bright red and stammering. You are always carrying something and apologising.",
    treat:["Admire Sir Cedric loudly, at all times.","Be shy around the Princess (if she is present); blush and drop something.","Be helpful to everyone: offer to carry, fetch, or copy anything.","If asked a direct question, answer too honestly, then regret it."],
    rel:[["Sir Cedric","Your knight, your hero, your boss. You love him, even though you know his stories are fibs."],["Tobias Thistlewick, the Jester","Your friend. He teaches you rhymes and tricks."],["Princess Isolde","If she attends: your secret crush. You write poems you never show."]],
    flaw:"You cannot lie. Any direct question gets a stammering, over-honest answer, and you cannot keep a secret for long.",
    secret:"ABOUT SIR CEDRIC: he is terrified of ghosts, geese, and the dark, and he sleeps with a candle burning. You hold his gauntlets while he shivers. Trade this for information.",
    props:["A tray piled with random objects (cups, a sock, a shoe)","A polishing cloth over your shoulder","A quill pen and a small roll of paper","A tote bag or satchel marked 'GEAR'"],
    costume:"A plain tunic, belt, boots, hair slightly messy, a smudge of ink on your cheek.",
    starters:["'Sir Cedric says he has done forty victories!' 'Forty!'","'May I carry that for you? Oh dear, I dropped something.'","'I have a scroll of poems if... never mind, it is nothing.'"]
  },
},
{ id:"mordecai", name:"Magister Mordecai Quillfeather", title:"Court Magician to King Oswin", emoji:"🔮", optional:false,
  p1:{
    who:"You are the King's court magician and the most mysterious man in the kingdom. You are also a fraud. Your 'magic' is stagecraft, flash powder, card tricks, and cheap almanacs. You must never be caught, because the King believes in you, and the King's belief is your whole income.",
    quirk:"You gasp at 'omens' in ordinary things ('The salt spilled to the LEFT!' 'Three candles! An omen!') and make vague, ominous predictions that could mean anything. You pull coins from people's ears and sleeves. You speak in a hushed, theatrical whisper and wave your sleeves.",
    treat:["Be mysterious and dramatic with everyone; read palms and tea leaves.","Tell the King his future is bright, which he loves.","Be wary of the Jester; he is the one person who sees through you.","Avoid Queen Margarethe's gaze; she hates you."],
    rel:[["King Oswin","Your patron. He believes everything you say, and you take care to say very little."],["Tobias Thistlewick, the Jester","Your rival. He mocks your tricks and you hate it."],["Queen Margarethe","She distrusts you. You are very polite and sweaty near her."]],
    flaw:"Total fraud, terrified of being exposed. You panic when asked to perform real magic or to explain how your tricks work.",
    secret:"ABOUT TOBIAS THE JESTER: he writes the rude ballads about the court that are sung in every tavern. His rhymes give him away: he always rhymes 'queen' with 'obscene'. Trade this for information.",
    props:["A pointy hat or hood and a long robe (a bathrobe!)","A deck of cards or some coins for tricks","A glass bowl or ball as a 'crystal ball'","A wand: a chopstick, stick, or wooden spoon"],
    costume:"A starry dark robe, a pointed hat, rings, a long fake beard if you can. Practice one coin trick.",
    starters:["'Hush! Do you not hear it? The omens are... stirring.'","'Allow me to read your palm. Ah. I see... a visitor. Or a loss.'","'The coin! It was behind your ear all along.'"]
  },
},
{ id:"tobias", name:"Tobias \"Tumble\" Thistlewick", title:"Court Jester to King Oswin", emoji:"🃏", optional:false,
  p1:{
    who:"You are the King's beloved court jester: wise as a judge, silly as a goose. You tell the truth to everyone, always disguised as a joke, so you may say what no one else can. You are rarely taken seriously, which suits you perfectly.",
    quirk:"You speak mostly in RHYME (even badly: 'oh the mead, I do need!'), your bells jingle with every move, and you deliver insults as compliments ('Sir, your mind is as sharp as a bowl of pudding!'). You cartwheel when surprised and bow at the end of every performance.",
    treat:["Tease everyone gently, especially the powerful. Poke fun at the knight, the magician, and the Baron.","Be fiercely loyal to King Oswin; keep him laughing.","Speak a hard truth, then follow it with 'Just a jest!'","Be warm and silly with the Squire and the Princess."],
    rel:[["King Oswin","Your friend and your patron. He is a child, and you love him."],["Magister Mordecai","Your rival. You can duplicate any of his tricks but he cannot do yours."],["Baron Godfrey","He found your mockery rude and threatened to banish you from his halls."]],
    flaw:"You cannot resist mocking anyone and everyone. It has made you enemies. You also hate being quiet.",
    secret:"ABOUT QUEEN MARGARETHE: she sings in the bath, loudly and badly, and has begged you never to tell. You were walking past the bath-house and heard 'Greensleeves' butchered. Trade this for information.",
    props:["A jingling hat or bells (tie small bells to your sleeves)","A stick topped with a sock puppet or stuffed toy","Three balls or socks to (almost) juggle","Mismatched socks, tights, or colourful clothing"],
    costume:"Bright, mismatched colours, a floppy two-pointed hat with bells, striped tights, a big painted smile.",
    starters:["'Good sir, you are as wise as a bell, and just as hollow!'","'A knight, a mage, and a king walk into a feast... and only one is sober!'","'Hear the tale of Wat the Squire, who dropped a lance, and then his hire!'"]
  },
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
    props:["A monocle (a magnifying glass or a round frame)","A faded fancy coat with lots of deep pockets","An empty coin purse you wave around","A lace handkerchief; a hidden snack"],
    costume:"The fanciest worn-out jacket you own, a floppy cravat, scuffed shoes you pretend are fashionable.",
    starters:["'Money? Oh, how tedious. Is that a cheese?'","'Do try the comfits, they are simply too delightful to ignore.'","'My manor? Splendid, thank you. The roof is... aerated.'"]
  },
},
{ id:"rosamund", name:"Lady Rosamund Philippa Thornbury", title:"Lady of Thornbury Manor, cousin to the Queen", emoji:"🦢", optional:false,
  p1:{
    who:"You are Lord Thornbury's formidable, impeccably polite wife. Your family fell on hard times a long while ago, and you have not stopped smiling since. You never mention money, you never complain, and you pity everyone who has more of it than you.",
    quirk:"You are SYRUPY-sweet and devastatingly polite: 'Oh, how BRAVE of you to wear that!', 'Dear me, what a dish... what is it?' Every compliment contains a small knife. You pat everyone's arm gently while delivering the insult.",
    treat:["Be warm, genteel, and kind, then deliver a polite, devastating comment.","Defer to your husband in public, and run the show in private.","Be loyal to your cousin Queen Margarethe, who fusses over you.","Pity merchants. Speak to Master Crowe as if he is a charming puppy."],
    rel:[["Lord Reginald Thornbury","Your husband. Kind, useless, adored. You manage everything."],["Queen Margarethe","Your cousin. You love her and resent how kindly she pities you."],["Brother Ambrose","If he attends: your confessor, who keeps your secrets."]],
    flaw:"Pride in your family name. You would rather starve in silk than accept charity, and you never admit anything is wrong.",
    secret:"ABOUT YOUR HUSBAND: Reginald pockets sweets everywhere he goes, comfits, marzipan, bits of cheese. You find melted comfits in all his coats and have given up. He thinks you don't know. Trade this for information.",
    gift:"The host's household provides a tin of lavender shortbread (slightly burnt) in your name for the Exalted Lady, and sets it on the gift table for you. You taste a piece first at the toast, with a brave smile.",
    props:["Lace gloves or a lace-trimmed scarf","A hand fan","Obviously-fake jewels: big bead necklace, clip-on earrings","A lorgnette (a pair of glasses on a stick) or a monocle"],
    costume:"An old-fashioned, slightly threadbare gown, too many mismatched jewels, perfect posture, flawless smile.",
    starters:["'Oh, how BRAVE of you to wear that. Truly.'","'Reginald, dear, put the cheese back.'","'Do you know, my cousin the Queen mentions you often. Mostly as a warning.'"]
  },
},
{ id:"crowe", name:"Master Bartholomew Crowe", title:"Merchant of the Wool Guild, Crowe &amp; Company", emoji:"💰", optional:false,
  p1:{
    who:"You are a shrewd, chatty, relentless merchant who has never met a thing that couldn't be sold at a profit. You have come to Ravenmoor for one reason: to win the foreign queen's trade, and thereby a monopoly. You sell everything: wool, spices, oil, 'authentic' silks, and the occasional hunter's bait.",
    quirk:"You APPRAISE everything and everyone aloud ('That hat? Two shillings! The cloak? Eight!') and you name a price for every object, favour, and secret, even in casual chat. You tally on your fingers and hum when you are doing sums. You haggle even over greetings.",
    treat:["Pitch everything to everyone. Everyone is a customer. Price every gift you see.","Be fawning to the foreign Queen and the King. Be unctuous. Offer discounts.","Avoid Lord Thornbury politely; he owes you money.","Give everyone's gift a price tag, loudly."],
    rel:[["Baron Godfrey","Your partner in loans and trade. You think he is a fool but a profitable one."],["The foreign Queen","The prize. You will sell her anything. (You will learn who she is when she arrives.)"],["King Oswin","Your biggest debtor. His circlet is in your strongbox."]],
    flaw:"Greed. You also sell fakes and have a habit of mislabelling goods, 'for efficiency'.",
    secret:"ABOUT KING OSWIN: his gold circlet is in pawn to you for a loan that paid for hunting dogs. The King does not wear it because he does not have it. Trade this for information.",
    gift:"The host's household provides a pewter tin of your finest candied ginger, with a small paper price tag, in your name for the Exalted Lady, and sets it on the gift table for you. By the custom of the house you taste the first piece yourself at the toast, then you sell her the rest.",
    props:["An abacus, calculator, or notebook of figures","A coin pouch full of tokens or chocolate coins","A measuring tape or ruler"],
    costume:"A tidy tunic in good brown wool, a cap, a chain of office, a belt with a purse, ink-stained fingers.",
    starters:["'That cloak? Eight shillings. Tell me, what would you pay for a better one?'","'For you, friend, a special price. Just for you.'","'Everything has a price. What is yours?'"]
  },
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
    props:["A flower crown or a few real/paper flowers","A 'love letter' on scented paper","A pillow or cushion for fainting safely","A hand mirror or ribbon"],
    costume:"A pastel gown or nightgown with a long scarf as a veil, flowers in your hair, flushed cheeks.",
    starters:["'Ohhh, is it not exactly like a ballad?' *sigh*","'Have you ever loved someone whose name you couldn't say?'","'I feel faint... Oh, there is a lovely cushion!'"]
  },
},
{ id:"wen", name:"Wen Liang", title:"Interpreter and Escort to the Queen of Cathay", emoji:"🏯", optional:true,
  p1:{
    who:"You are Queen Suyin's loyal interpreter and companion, who has travelled with her for two years. You speak the western tongue fluently, with very dry humour. You translate for the Queen, but you add your own opinion. You are the only person who knows what she really thinks.",
    quirk:"You TRANSLATE the Queen's flowery pronouncements into blunt, deadpan one-liners ('She says she is honoured to dwell in your hospitality.' 'Translation: the soup is fine.'). You speak without expression, no matter what is happening. You occasionally 'misinterpret' on purpose, to mischief.",
    treat:["Stand just behind the Queen and translate for her. Be dry and unflappable.","Give honest, brutal translations of what Europeans say, too ('He says he is delighted. He is not.').","Be wary of anyone who tries to sell things to the Queen.","Be quietly polite and very, very funny."],
    rel:[["Queen Suyin","Your queen and friend. You know her moods by her fan."],["Master Crowe","He tries to sell you things between sentences. You enjoy ruining his deals."],["Magister Mordecai","He tried to buy 'something exciting' from the Queen's baggage. You said no."]],
    flaw:"You mistranslate on purpose when bored. It has already caused one treaty near-disaster.",
    secret:"ABOUT QUEEN SUYIN: she adores English custard tarts and ate eleven on the road. She has begged you never to tell. Trade this for information.",
    props:["A scroll or rolled paper","A small notebook and a quill or pen","A sash or silk belt","A teacup, always on a saucer"],
    costume:"A simple dark silk robe with a sash, hair tied back, completely neutral expression.",
    starters:["'She says it is a pleasure. It is... a pleasure.'","'I will translate that. She says no.'","'Do not mention custard tarts. I beg you.'"]
  },
},
{ id:"godwin", name:"Godwin Alfred Hobsworth", title:"Steward of Ravenmoor Keep", emoji:"🗝️", optional:true,
  p1:{
    who:"You are the Baron's long-suffering steward, responsible for every door, key, cask, and candle in Ravenmoor. You love rules above all things. Tonight you are in a state of constant, quiet panic, because a royal feast means a thousand things that can go wrong.",
    quirk:"You ANNOUNCE rules nobody asked for ('Rule the Seventeenth: no sitting on the stairs!', 'Rule the Forty-First: no whistling before the soup!') and invent a new rule each time someone does something amusing. Your keys jingle constantly, and you sneak little sips from any goblet that is unattended.",
    treat:["Fuss over everyone and everything; announce rules and fix chairs.","Be loyal to the Baron even when he is ridiculous.","Be suspicious of the Jester, who has been known to steal from the kitchen.","Be deferential to royalty but secretly more important than any of them."],
    rel:[["Baron Godfrey","Your master. You adore and fear his enthusiasm."],["Tobias Thistlewick, the Jester","Your nemesis. He has pinched honey pots and mocked your keys."],["Brother Ambrose","Your drinking buddy, over a few secret sips in the cellar."]],
    flaw:"You secretly sneak sips of the Baron's best wine and are hoping nobody counts the barrels.",
    secret:"ABOUT BROTHER AMBROSE: he keeps a tiny flask of mead inside his Bible, hollowed out for the purpose. He refills it from the cellar. Trade this for information.",
    props:["A very large ring of keys","A staff or long broom handle","A clipboard or scroll of 'Protocol'","A small bell to ring for dinner"],
    costume:"A dark livery or apron, a chain of office, a very serious expression, spectacles on the end of the nose.",
    starters:["'Rule the Twenty-Third: do not touch the candelabra.'","'Have you counted the guests? I make it eleven. Or sixteen. Dear me.'","'Is that goblet yours? Whose goblet is that?'"]
  },
},
{ id:"ambrose", name:"Brother Ambrose Tuck Marlowe", title:"Friar and Chaplain of Ravenmoor Chapel", emoji:"🍺", optional:true,
  p1:{
    who:"You are the jolly, round chaplain of Ravenmoor, a friar who loves a good meal, a good laugh, and a very good ale. You are a gifted herbalist and healer and you know more about plants than anyone for twenty miles. You are rarely entirely sober.",
    quirk:"You bless everything ('Benedicite, soup!') in terrible, made-up Latin ('Dominus pass-the-salt-um!'), burst into hiccups when nervous, and tell long stories that wander off into recipes. You offer penance in food form ('Three pies and a cheese!').",
    treat:["Be warm and cheerful to everyone, and bless everything.","Scold the Squire gently for his sins (clumsiness).","Be an ally to the Steward, but needle him about the keys.","Fuss over anyone who looks ill or sad."],
    rel:[["Lady Rosamund Thornbury","One of your flock. She confesses little, but you see her sorrows."],["Godwin Hobsworth, the Steward","Your drinking buddy and fellow cellar-raider."],["Baron Godfrey","He lets you live in the chapel and complains about your tankard."]],
    flaw:"Gluttony and tipsiness. You will say anything for another sip, and you sometimes fall asleep in the middle of a blessing.",
    secret:"ABOUT STEWARD GODWIN: he sneaks sips of the Baron's best wine from the cellar every night. Cask 9 is nearly empty. Trade this for information.",
    props:["A brown robe or blanket tied with a rope belt","A string of prayer beads (or a necklace)","A tankard (a mug)","A small book or 'herb journal'"],
    costume:"A brown hooded robe with a rope belt, sandals, a bit of flour on your sleeves.",
    starters:["'Benedicite! Is this soup or a sacrament?'","'Child, what ails you? Have you tried more cheese?'","'Hic! I only had a thimble of mead. A large thimble.'"]
  },
},
{ id:"lucien", name:"Lucien Fairweather", title:"Troubadour, Minstrel of the Roads", emoji:"🎶", optional:true,
  p1:{
    who:"You are a wandering troubadour who has come to Ravenmoor hoping to play for the royal court, and be paid. You are charming, vain, and entirely certain that you are the greatest songwriter in the realm. You are broke and always on the lookout for a rhyme.",
    quirk:"You burst into improvised SONG whenever there is tension, silence, or a pause ('Oh, the soup is hot, and the guests are not...'), and you rhyme at the end of every second sentence. You strike a pose after each verse and wait for applause.",
    treat:["Serenade people (especially the Princess), whether they asked or not.","Compete with the Jester for attention.","Be delighted by any drama; it's material.","Angle for payment from the Baron or the King."],
    rel:[["Princess Isolde","Your muse. You serenade her at every opportunity."],["Tobias Thistlewick, the Jester","Your rival for the royal ear."],["Baron Godfrey","He has not yet paid your fee from last Easter."]],
    flaw:"You steal other minstrels' tunes and swear they're yours. You also never pay back anything you borrow.",
    secret:"ABOUT TOBIAS THE JESTER: he cannot actually juggle. His juggling balls are stuffed socks, and he has dropped them in every performance for years. Trade this for information.",
    props:["A lute, ukulele, guitar, or tambourine","A feathered cap or hat","A small songbook or lyric sheet","A rose to present (to anyone)"],
    costume:"A colourful tunic, a cape, a feathered hat, boots, a dramatic scarf.",
    starters:["'I have composed a ballad about this very moment!'","'Shall I sing? I shall sing.'","'Who here has a rhyme for \"Baron\"? Only \"barren\"...'"]
  },
}
);



module.exports = { CHARS, INVITE };
