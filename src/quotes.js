const quotes = [
  {
    _id: "lpxXplIA4ie",
    author: "Yogi Berra",
    content: "Half the lies they tell about me aren't true.",
    tags: ["sports", "competition"],
    authorSlug: "yogi-berra",
    length: 45,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "ch-0pti9X6U",
    author: "Joe Adcock",
    content: "Trying to sneak a fastball past Hank Aaron is like trying to sneak the sunrise past a rooster.",
    tags: ["sports", "competition"],
    authorSlug: "joe-adcock",
    length: 94,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "fwMKi2Q0Pk",
    author: "Michael Phelps",
    content: "You can't put a limit on anything. The more you dream, the farther you get.",
    tags: ["sports", "competition"],
    authorSlug: "michael-phelps",
    length: 75,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "3KGpfidF22D",
    author: "William James",
    content: "Most people never run far enough on their first wind to find out they've got a second.",
    tags: ["sports", "competition"],
    authorSlug: "william-james",
    length: 86,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "l0LfTgApB3",
    author: "Babe Ruth",
    content:
      "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
    tags: ["sports", "competition"],
    authorSlug: "babe-ruth",
    length: 186,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "nAOVUhK6RJ",
    author: "Kareem Abdul-Jabbar",
    content: "You can't win unless you learn how to lose.",
    tags: ["sports", "competition"],
    authorSlug: "kareem-abdul-jabbar",
    length: 43,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "0Ny0rPtnM3",
    author: "Vince Lombardi",
    content: "Winners never quit and quitters never win.",
    tags: ["sports", "competition"],
    authorSlug: "vince-lombardi",
    length: 42,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "9aunKqSWDu",
    author: "Dan Gable",
    content:
      "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.",
    tags: ["sports", "competition"],
    authorSlug: "dan-gable",
    length: 115,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "vZ-5DQPCJag",
    author: "George Orwell",
    content:
      "Serious sport has nothing to do with fair play. It is bound up with hatred, jealousy, boastfulness, disregard of all rules and sadistic pleasure in witnessing violence. In other words, it is war minus the shooting.",
    tags: ["sports"],
    authorSlug: "george-orwell",
    length: 214,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "x-0qEVIZ66n",
    author: "Eric Liddell",
    content: "God made me fast. And when I run, I feel His pleasure.",
    tags: ["sports", "competition"],
    authorSlug: "eric-liddell",
    length: 54,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "vtzyn3LKIA",
    author: "Wayne Gretzky",
    content: "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
    tags: ["sports", "competition"],
    authorSlug: "wayne-gretzky",
    length: 104,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "MNoB9t3dfeS",
    author: "Shaquille O'Neal",
    content:
      "I'm tired of hearing about money, money, money, money, money. I just want to play the game, drink Pepsi, and wear Reebok.",
    tags: ["sports", "humorous"],
    authorSlug: "shaquille-o-neal",
    length: 121,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "Hpo_qh-q76A",
    author: "Reggie Jackson (basketball, born 1990)",
    content: "Fans don't boo nobodies.",
    tags: ["sports", "competition"],
    authorSlug: "reggie-jackson-basketball-born-1990",
    length: 24,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "Nr6_kltWU8x",
    author: "Hugo Black",
    content:
      "When I was 40, my doctor advised me that a man in his 40s shouldn't play tennis. I heeded his advice carefully and could hardly wait until I reached 50 to start again.",
    tags: ["sports", "humorous"],
    authorSlug: "hugo-black",
    length: 167,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "2wnTElJ9STU",
    author: "Hank Aaron",
    content:
      "My motto was always to keep swinging. Whether I was in a slump or feeling badly or having trouble off the field, the only thing to do was keep swinging.",
    tags: ["sports", "competition"],
    authorSlug: "hank-aaron",
    length: 152,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "Wp2A_oOWNEq",
    author: "Muhammad Ali",
    content: "It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up.",
    tags: ["sports"],
    authorSlug: "muhammad-ali",
    length: 80,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "-fGobZrnsR",
    author: "Bobby Unser",
    content: "Success is where preparation and opportunity meet.",
    tags: ["sports", "competition"],
    authorSlug: "bobby-unser",
    length: 50,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "_rEPkuDXaWo",
    author: "Casey Stengel",
    content: "Finding good players is easy. Getting them to play as a team is another story.",
    tags: ["sports", "competition"],
    authorSlug: "casey-stengel",
    length: 78,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "81hjl4B9wx2",
    author: "Ernie Banks",
    content: "The only way to prove that you're a good sport is to lose.",
    tags: ["sports", "competition"],
    authorSlug: "ernie-banks",
    length: 58,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  },
  {
    _id: "wNd1PnDiIN",
    author: "Bob Feller",
    content:
      "Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is.",
    tags: ["sports", "competition"],
    authorSlug: "bob-feller",
    length: 200,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08"
  }
];

export default quotes;
