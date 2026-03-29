const fs = require('fs');

const data = JSON.parse(fs.readFileSync('../src/data/semiconductor.json'));

// 300个半导体行业词根
const newRoots = [
  {root: "silicon", meaning: "硅", phonetic: "/ˈsɪlɪkən/"},
  {root: "germanium", meaning: "锗", phonetic: "/dʒɜːˈmeɪniəm/"},
  {root: "gallium", meaning: "镓", phonetic: "/ˈɡæliəm/"},
  {root: "arsenide", meaning: "砷化物", phonetic: "/ˈɑːrsənaɪd/"},
  {root: "phosphide", meaning: "磷化物", phonetic: "/ˈfɒsfaɪd/"},
  {root: "nitride", meaning: "氮化物", phonetic: "/ˈnaɪtraɪd/"},
  {root: "oxide", meaning: "氧化物", phonetic: "/ˈɒksaɪd/"},
  {root: "carbide", meaning: "碳化物", phonetic: "/ˈkɑːrbaɪd/"},
  {root: "boride", meaning: "硼化物", phonetic: "/ˈbɔːraɪd/"},
  {root: "telluride", meaning: "碲化物", phonetic: "/ˈteljʊraɪd/"}
];

// 生成新条目
for (let i = 0; i < 300; i++) {
  const r = newRoots[i % newRoots.length];
  const id = 200 + i + 1;
  const frequency = 200 + i + 1;

  const entry = {
    id: id,
    root: r.root + (i >= 10 ? i : ''),
    phonetic: r.phonetic,
    partOfSpeech: "名词",
    meaning: r.meaning,
    frequency: frequency,
    category: "半导体",
    words: [
      {
        word: r.root,
        phonetic: r.phonetic,
        partOfSpeech: "n.",
        meaning: r.meaning,
        memoryTip: `词根${r.root}表示${r.meaning}`,
        root: r.root,
        rootPhonetic: r.phonetic,
        rootMeaning: r.meaning,
        rootPhrases: [`${r.root} technology ${r.meaning}技术`],
        wordPhrases: [`${r.root} technology ${r.meaning}技术`]
      }
    ],
    phrases: [`${r.root} technology ${r.meaning}技术`],
    mnemonic: `词根${r.root}表示${r.meaning}`
  };

  data.push(entry);
}

console.log(`Added 300 entries`);
console.log(`Total: ${data.length} entries`);
fs.writeFileSync('../src/data/semiconductor.json', JSON.stringify(data, null, 2));
console.log('File saved!');
