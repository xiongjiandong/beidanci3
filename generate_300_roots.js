const fs = require('fs');

// Generate 300 semiconductor roots with id 201-500
// frequency 201-500, sorted by industry usage frequency

const rootTemplates = [
  { root: "dielectric", phonetic: "/ˌdaɪəˈlektrɪk/", meaning: "电介质", pos: "n./adj.", mnemonic: "dia-穿过 + electric电 → 不导电的物质 → 电介质" },
  { root: "substrate", phonetic: "/ˈsʌbstreɪt/", meaning: "衬底", pos: "n.", mnemonic: "sub-下面 + strate层 → 最底层的支撑材料 → 衬底" },
  { root: "oxide", phonetic: "/ˈɒksaɪd/", meaning: "氧化物", pos: "n.", mnemonic: "ox-氧 + -ide化合物 → 氧化物" },
  { root: "implant", phonetic: "/ɪmˈplɑːnt/", meaning: "注入", pos: "v./n.", mnemonic: "im-进入 + plant种植 → 将离子种入材料 → 离子注入" },
  { root: "dopant", phonetic: "/ˈdoʊpənt/", meaning: "掺杂剂", pos: "n.", mnemonic: "dope掺杂 + -ant剂 → 掺杂剂" },
  { root: "epitaxy", phonetic: "/ɪˈpɪtəksi/", meaning: "外延", pos: "n.", mnemonic: "epi-上面 + taxy排列 → 在上面排列生长 → 外延" },
  { root: "diffusion", phonetic: "/dɪˈfjuːʒən/", meaning: "扩散", pos: "n.", mnemonic: "dif-分开 + fus流动 + -ion → 向四周流动 → 扩散" },
  { root: "oxidation", phonetic: "/ˌɒksɪˈdeɪʃən/", meaning: "氧化", pos: "n.", mnemonic: "oxid-氧 + -ation → 氧化过程" },
  { root: "etchant", phonetic: "/ˈetʃənt/", meaning: "蚀刻剂", pos: "n.", mnemonic: "etch蚀刻 + -ant剂 → 蚀刻剂" },
  { root: "photoresist", phonetic: "/ˌfoʊtoʊrɪˈzɪst/", meaning: "光刻胶", pos: "n.", mnemonic: "photo光 + resist抵抗 → 光敏抗蚀剂 → 光刻胶" }
];

console.log('Script loaded. Templates:', rootTemplates.length);
