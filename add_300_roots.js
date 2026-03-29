const fs = require('fs');

// Read existing data
const rawData = fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8');
const data = JSON.parse(rawData);

console.log('Current entries:', data.length);
console.log('Last entry ID:', data[data.length-1].id);

// Define 300 semiconductor roots (id 201-500, frequency 201-500)
const rootDefinitions = [
  // ID 201-250: High frequency core process terms
  { id: 201, root: "dielectric", phonetic: "/ˌdaɪəˈlektrɪk/", meaning: "电介质", pos: "n./adj.", mnemonic: "dia-穿过 + electric电 → 不导电的物质 → 电介质" },
  { id: 202, root: "substrate", phonetic: "/ˈsʌbstreɪt/", meaning: "衬底", pos: "n.", mnemonic: "sub-下面 + strate层 → 最底层的支撑材料 → 衬底" },
  { id: 203, root: "oxide", phonetic: "/ˈɒksaɪd/", meaning: "氧化物", pos: "n.", mnemonic: "ox-氧 + -ide化合物 → 氧化物" },
  { id: 204, root: "implant", phonetic: "/ɪmˈplɑːnt/", meaning: "注入", pos: "v./n.", mnemonic: "im-进入 + plant种植 → 将离子种入材料 → 离子注入" },
  { id: 205, root: "dopant", phonetic: "/ˈdoʊpənt/", meaning: "掺杂剂", pos: "n.", mnemonic: "dope掺杂 + -ant剂 → 掺杂剂" },
  { id: 206, root: "epitaxy", phonetic: "/ɪˈpɪtəksi/", meaning: "外延", pos: "n.", mnemonic: "epi-上面 + taxy排列 → 在上面排列生长 → 外延" },
  { id: 207, root: "diffusion", phonetic: "/dɪˈfjuːʒən/", meaning: "扩散", pos: "n.", mnemonic: "dif-分开 + fus流动 + -ion → 向四周流动 → 扩散" },
  { id: 208, root: "oxidation", phonetic: "/ˌɒksɪˈdeɪʃən/", meaning: "氧化", pos: "n.", mnemonic: "oxid-氧 + -ation → 氧化过程" },
  { id: 209, root: "etchant", phonetic: "/ˈetʃənt/", meaning: "蚀刻剂", pos: "n.", mnemonic: "etch蚀刻 + -ant剂 → 蚀刻剂" },
  { id: 210, root: "photoresist", phonetic: "/ˌfoʊtoʊrɪˈzɪst/", meaning: "光刻胶", pos: "n.", mnemonic: "photo光 + resist抵抗 → 光敏抗蚀剂 → 光刻胶" }
];

// Generate full entry from root definition
function createEntry(def) {
  const phrases = [
    `${def.root} technology`,
    `${def.root} process`,
    `${def.root} equipment`,
    `${def.root} material`
  ];

  const translatedPhrases = [
    `${def.root} technology (${def.meaning}技术)`,
    `${def.root} process (${def.meaning}工艺)`,
    `${def.root} equipment (${def.meaning}设备)`,
    `${def.root} material (${def.meaning}材料)`
  ];

  return {
    id: def.id,
    root: def.root,
    phonetic: def.phonetic,
    partOfSpeech: def.pos,
    frequency: def.id,
    category: "半导体",
    words: [
      {
        word: def.root,
        phonetic: def.phonetic,
        partOfSpeech: def.pos,
        meaning: def.meaning,
        memoryTip: def.mnemonic,
        root: def.root,
        rootPhonetic: def.phonetic,
        rootMeaning: def.meaning,
        rootPhrases: phrases,
        wordPhrases: phrases
      }
    ],
    phrases: translatedPhrases,
    mnemonic: def.mnemonic,
    meaning: def.meaning
  };
}

// Generate 10 sample entries
const newEntries = rootDefinitions.map(createEntry);

console.log(`Generated ${newEntries.length} entries`);
console.log('Sample entry ID:', newEntries[0].id);

// Save to separate file for verification
fs.writeFileSync('f:/claudeanli/beidanci3/new_entries_201_210.json', JSON.stringify(newEntries, null, 2));
console.log('Saved to new_entries_201_210.json');
