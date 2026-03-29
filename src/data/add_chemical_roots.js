const fs = require('fs');

// 读取现有文件
const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/chemical.json', 'utf8'));

console.log('现有条目数:', data.length);
console.log('第一个ID:', data[0].id);
console.log('最后一个ID:', data[data.length-1].id);

// 定义200个化工词根数据
const newRoots = [
  // ========== ID 801-820: 化学元素相关 ==========
  {
    id: 801, root: "oxy", phonetic: "/ˈɒksi/", partOfSpeech: "n.", frequency: 5, category: "化工", meaning: "氧",
    words: [
      { word: "oxygen", phonetic: "/ˈɒksɪdʒən/", partOfSpeech: "n.", meaning: "氧", memoryTip: "oxy氧 + -gen产生 → 氧", root: "oxy", rootPhonetic: "/ˈɒksi/", rootMeaning: "氧", rootPhrases: ["oxygen supply", "oxygen tank"], wordPhrases: ["oxygen supply", "oxygen tank"] },
      { word: "oxide", phonetic: "/ˈɒksaɪd/", partOfSpeech: "n.", meaning: "氧化物", memoryTip: "ox(y) + -ide化合物 → 氧化物", root: "oxy", rootPhonetic: "/ˈɒksi/", rootMeaning: "氧", rootPhrases: ["iron oxide", "carbon dioxide"], wordPhrases: ["iron oxide", "carbon dioxide"] },
      { word: "oxidize", phonetic: "/ˈɒksɪdaɪz/", partOfSpeech: "v.", meaning: "氧化", memoryTip: "oxy氧 + -ize使 → 氧化", root: "oxy", rootPhonetic: "/ˈɒksi/", rootMeaning: "氧", rootPhrases: ["oxidize metal", "slow oxidize"], wordPhrases: ["oxidize metal", "slow oxidize"] },
      { word: "oxidation", phonetic: "/ˌɒksɪˈdeɪʃn/", partOfSpeech: "n.", meaning: "氧化作用", memoryTip: "oxy氧 + -ation动作 → 氧化", root: "oxy", rootPhonetic: "/ˈɒksi/", rootMeaning: "氧", rootPhrases: ["oxidation process", "oxidation state"], wordPhrases: ["oxidation process", "oxidation state"] }
    ],
    phrases: ["oxygen supply", "oxygen tank", "iron oxide", "carbon dioxide"],
    mnemonic: "oxy（氧）→ 与氧元素有关的"
  },
  {
    id: 802, root: "hydr", phonetic: "/ˈhaɪdrə/", partOfSpeech: "n.", frequency: 4, category: "化工", meaning: "氢",
    words: [
      { word: "hydrogen", phonetic: "/ˈhaɪdrədʒən/", partOfSpeech: "n.", meaning: "氢", memoryTip: "hydr水 + -gen产生 → 氢（生水）", root: "hydr", rootPhonetic: "/ˈhaɪdrə/", rootMeaning: "氢", rootPhrases: ["hydrogen bond", "hydrogen fuel"], wordPhrases: ["hydrogen bond", "hydrogen fuel"] },
      { word: "hydride", phonetic: "/ˈhaɪdraɪd/", partOfSpeech: "n.", meaning: "氢化物", memoryTip: "hydr + -ide → 氢化物", root: "hydr", rootPhonetic: "/ˈhaɪdrə/", rootMeaning: "氢", rootPhrases: ["metal hydride", "hydride ion"], wordPhrases: ["metal hydride", "hydride ion"] },
      { word: "hydrocarbon", phonetic: "/ˌhaɪdrəˈkɑːrbən/", partOfSpeech: "n.", meaning: "碳氢化合物", memoryTip: "hydr氢 + carbon碳 → 碳氢化合物", root: "hydr", rootPhonetic: "/ˈhaɪdrə/", rootMeaning: "氢", rootPhrases: ["aromatic hydrocarbon", "saturated hydrocarbon"], wordPhrases: ["aromatic hydrocarbon", "saturated hydrocarbon"] },
      { word: "dehydrate", phonetic: "/diːˈhaɪdreɪt/", partOfSpeech: "v.", meaning: "脱水", memoryTip: "de-去掉 + hydr水 + -ate → 脱水", root: "hydr", rootPhonetic: "/ˈhaɪdrə/", rootMeaning: "氢", rootPhrases: ["dehydrate food", "dehydrate agent"], wordPhrases: ["dehydrate food", "dehydrate agent"] }
    ],
    phrases: ["hydrogen bond", "hydrogen fuel", "aromatic hydrocarbon"],
    mnemonic: "hydr（氢/水）→ 与氢或水有关的"
  },
  {
    id: 803, root: "carb", phonetic: "/ˈkɑːrb/", partOfSpeech: "n.", frequency: 5, category: "化工", meaning: "碳",
    words: [
      { word: "carbon", phonetic: "/ˈkɑːrbən/", partOfSpeech: "n.", meaning: "碳", memoryTip: "carb碳 + -on → 碳", root: "carb", rootPhonetic: "/ˈkɑːrb/", rootMeaning: "碳", rootPhrases: ["carbon dioxide", "carbon fiber"], wordPhrases: ["carbon dioxide", "carbon fiber"] },
      { word: "carbide", phonetic: "/ˈkɑːrbaɪd/", partOfSpeech: "n.", meaning: "碳化物", memoryTip: "carb + -ide → 碳化物", root: "carb", rootPhonetic: "/ˈkɑːrb/", rootMeaning: "碳", rootPhrases: ["silicon carbide", "tungsten carbide"], wordPhrases: ["silicon carbide", "tungsten carbide"] },
      { word: "carbohydrate", phonetic: "/ˌkɑːrboʊˈhaɪdreɪt/", partOfSpeech: "n.", meaning: "碳水化合物", memoryTip: "carb碳 + hydr水 + -ate → 碳水化合物", root: "carb", rootPhonetic: "/ˈkɑːrb/", rootMeaning: "碳", rootPhrases: ["complex carbohydrate", "simple carbohydrate"], wordPhrases: ["complex carbohydrate", "simple carbohydrate"] },
      { word: "carbonate", phonetic: "/ˈkɑːrbənət/", partOfSpeech: "n.", meaning: "碳酸盐", memoryTip: "carbon碳 + -ate盐 → 碳酸盐", root: "carb", rootPhonetic: "/ˈkɑːrb/", rootMeaning: "碳", rootPhrases: ["calcium carbonate", "sodium carbonate"], wordPhrases: ["calcium carbonate", "sodium carbonate"] }
    ],
    phrases: ["carbon dioxide", "carbon fiber", "silicon carbide"],
    mnemonic: "carb（碳）→ 与碳元素有关的"
  },
  {
    id: 804, root: "azot", phonetic: "/ˈæzət/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "氮",
    words: [
      { word: "nitrogen", phonetic: "/ˈnaɪtrədʒən/", partOfSpeech: "n.", meaning: "氮", memoryTip: "nitr-氮 + -gen产生 → 氮", root: "azot", rootPhonetic: "/ˈæzət/", rootMeaning: "氮", rootPhrases: ["nitrogen cycle", "nitrogen fixation"], wordPhrases: ["nitrogen cycle", "nitrogen fixation"] },
      { word: "nitrate", phonetic: "/ˈnaɪtreɪt/", partOfSpeech: "n.", meaning: "硝酸盐", memoryTip: "nitr-氮 + -ate盐 → 硝酸盐", root: "azot", rootPhonetic: "/ˈæzət/", rootMeaning: "氮", rootPhrases: ["ammonium nitrate", "potassium nitrate"], wordPhrases: ["ammonium nitrate", "potassium nitrate"] },
      { word: "nitride", phonetic: "/ˈnaɪtraɪd/", partOfSpeech: "n.", meaning: "氮化物", memoryTip: "nitr-氮 + -ide → 氮化物", root: "azot", rootPhonetic: "/ˈæzət/", rootMeaning: "氮", rootPhrases: ["boron nitride", "silicon nitride"], wordPhrases: ["boron nitride", "silicon nitride"] },
      { word: "nitrite", phonetic: "/ˈnaɪtraɪt/", partOfSpeech: "n.", meaning: "亚硝酸盐", memoryTip: "nitr-氮 + -ite亚盐 → 亚硝酸盐", root: "azot", rootPhonetic: "/ˈæzət/", rootMeaning: "氮", rootPhrases: ["sodium nitrite", "nitrite preservative"], wordPhrases: ["sodium nitrite", "nitrite preservative"] }
    ],
    phrases: ["nitrogen cycle", "nitrogen fixation", "ammonium nitrate"],
    mnemonic: "azot/nitr（氮）→ 与氮元素有关的"
  },
  {
    id: 805, root: "sulf", phonetic: "/ˈsʌlf/", partOfSpeech: "n.", frequency: 4, category: "化工", meaning: "硫",
    words: [
      { word: "sulfur", phonetic: "/ˈsʌlfər/", partOfSpeech: "n.", meaning: "硫", memoryTip: "sulf硫 + -ur → 硫", root: "sulf", rootPhonetic: "/ˈsʌlf/", rootMeaning: "硫", rootPhrases: ["sulfur dioxide", "sulfuric acid"], wordPhrases: ["sulfur dioxide", "sulfuric acid"] },
      { word: "sulfide", phonetic: "/ˈsʌlfaɪd/", partOfSpeech: "n.", meaning: "硫化物", memoryTip: "sulf硫 + -ide → 硫化物", root: "sulf", rootPhonetic: "/ˈsʌlf/", rootMeaning: "硫", rootPhrases: ["hydrogen sulfide", "metal sulfide"], wordPhrases: ["hydrogen sulfide", "metal sulfide"] },
      { word: "sulfate", phonetic: "/ˈsʌlfeɪt/", partOfSpeech: "n.", meaning: "硫酸盐", memoryTip: "sulf硫 + -ate → 硫酸盐", root: "sulf", rootPhonetic: "/ˈsʌlf/", rootMeaning: "硫", rootPhrases: ["sodium sulfate", "copper sulfate"], wordPhrases: ["sodium sulfate", "copper sulfate"] },
      { word: "sulfite", phonetic: "/ˈsʌlfaɪt/", partOfSpeech: "n.", meaning: "亚硫酸盐", memoryTip: "sulf硫 + -ite → 亚硫酸盐", root: "sulf", rootPhonetic: "/ˈsʌlf/", rootMeaning: "硫", rootPhrases: ["sodium sulfite", "potassium sulfite"], wordPhrases: ["sodium sulfite", "potassium sulfite"] }
    ],
    phrases: ["sulfur dioxide", "sulfuric acid", "hydrogen sulfide"],
    mnemonic: "sulf（硫）→ 与硫元素有关的"
  },
  {
    id: 806, root: "chlor", phonetic: "/ˈklɔːr/", partOfSpeech: "n.", frequency: 4, category: "化工", meaning: "氯",
    words: [
      { word: "chlorine", phonetic: "/ˈklɔːriːn/", partOfSpeech: "n.", meaning: "氯", memoryTip: "chlor-氯 + -ine → 氯", root: "chlor", rootPhonetic: "/ˈklɔːr/", rootMeaning: "氯", rootPhrases: ["chlorine gas", "chlorine bleach"], wordPhrases: ["chlorine gas", "chlorine bleach"] },
      { word: "chloride", phonetic: "/ˈklɔːraɪd/", partOfSpeech: "n.", meaning: "氯化物", memoryTip: "chlor-氯 + -ide → 氯化物", root: "chlor", rootPhonetic: "/ˈklɔːr/", rootMeaning: "氯", rootPhrases: ["sodium chloride", "hydrogen chloride"], wordPhrases: ["sodium chloride", "hydrogen chloride"] },
      { word: "chloroform", phonetic: "/ˈklɔːrəfɔːrm/", partOfSpeech: "n.", meaning: "氯仿", memoryTip: "chloro-氯 + form甲酰 → 氯仿", root: "chlor", rootPhonetic: "/ˈklɔːr/", rootMeaning: "氯", rootPhrases: ["chloroform solvent", "liquid chloroform"], wordPhrases: ["chloroform solvent", "liquid chloroform"] },
      { word: "chlorophyll", phonetic: "/ˈklɔːrəfɪl/", partOfSpeech: "n.", meaning: "叶绿素", memoryTip: "chloro-绿 + phyll叶 → 叶绿素", root: "chlor", rootPhonetic: "/ˈklɔːr/", rootMeaning: "氯", rootPhrases: ["chlorophyll pigment", "chlorophyll molecule"], wordPhrases: ["chlorophyll pigment", "chlorophyll molecule"] }
    ],
    phrases: ["chlorine gas", "chlorine bleach", "sodium chloride"],
    mnemonic: "chlor（氯/绿）→ 与氯元素有关的"
  },
  {
    id: 807, root: "phos", phonetic: "/ˈfɒs/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "磷",
    words: [
      { word: "phosphorus", phonetic: "/ˈfɒsfərəs/", partOfSpeech: "n.", meaning: "磷", memoryTip: "phos光 + phor携带 + -us → 磷（带光者）", root: "phos", rootPhonetic: "/ˈfɒs/", rootMeaning: "磷", rootPhrases: ["phosphorus cycle", "white phosphorus"], wordPhrases: ["phosphorus cycle", "white phosphorus"] },
      { word: "phosphate", phonetic: "/ˈfɒsfeɪt/", partOfSpeech: "n.", meaning: "磷酸盐", memoryTip: "phos磷 + -phate盐 → 磷酸盐", root: "phos", rootPhonetic: "/ˈfɒs/", rootMeaning: "磷", rootPhrases: ["calcium phosphate", "phosphate buffer"], wordPhrases: ["calcium phosphate", "phosphate buffer"] },
      { word: "phosphide", phonetic: "/ˈfɒfsaɪd/", partOfSpeech: "n.", meaning: "磷化物", memoryTip: "phos磷 + -ide → 磷化物", root: "phos", rootPhonetic: "/ˈfɒs/", rootMeaning: "磷", rootPhrases: ["aluminum phosphide", "metal phosphide"], wordPhrases: ["aluminum phosphide", "metal phosphide"] },
      { word: "phospholipid", phonetic: "/ˌfɒsfəˈlɪpɪd/", partOfSpeech: "n.", meaning: "磷脂", memoryTip: "phoso磷 + lipid脂 → 磷脂", root: "phos", rootPhonetic: "/ˈfɒs/", rootMeaning: "磷", rootPhrases: ["phospholipid bilayer", "membrane phospholipid"], wordPhrases: ["phospholipid bilayer", "membrane phospholipid"] }
    ],
    phrases: ["phosphorus cycle", "white phosphorus", "calcium phosphate"],
    mnemonic: "phos（磷）→ 与磷元素有关的"
  },
  {
    id: 808, root: "ferr", phonetic: "/ˈfer/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "铁",
    words: [
      { word: "iron", phonetic: "/ˈaɪərn/", partOfSpeech: "n.", meaning: "铁", memoryTip: "ferr-铁的变体 → 铁", root: "ferr", rootPhonetic: "/ˈfer/", rootMeaning: "铁", rootPhrases: ["ferric ion", "ferrous metal"], wordPhrases: ["iron ore", "cast iron"] },
      { word: "ferric", phonetic: "/ˈferɪk/", partOfSpeech: "adj.", meaning: "铁的；三价铁的", memoryTip: "ferr铁 + -ic → 铁的", root: "ferr", rootPhonetic: "/ˈfer/", rootMeaning: "铁", rootPhrases: ["ferric chloride", "ferric sulfate"], wordPhrases: ["ferric chloride", "ferric sulfate"] },
      { word: "ferrous", phonetic: "/ˈferəs/", partOfSpeech: "adj.", meaning: "亚铁的；二价铁的", memoryTip: "ferr铁 + -ous → 亚铁的", root: "ferr", rootPhonetic: "/ˈfer/", rootMeaning: "铁", rootPhrases: ["ferrous sulfate", "ferrous metal"], wordPhrases: ["ferrous sulfate", "ferrous metal"] },
      { word: "ferrite", phonetic: "/ˈferaɪt/", partOfSpeech: "n.", meaning: "铁素体；铁氧体", memoryTip: "ferr铁 + -ite → 铁素体", root: "ferr", rootPhonetic: "/ˈfer/", rootMeaning: "铁", rootPhrases: ["ferrite core", "ferrite magnet"], wordPhrases: ["ferrite core", "ferrite magnet"] }
    ],
    phrases: ["ferric ion", "ferrous metal", "ferric chloride"],
    mnemonic: "ferr（铁）→ 与铁元素有关的"
  },
  {
    id: 809, root: "sod", phonetic: "/ˈsoʊd/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "钠",
    words: [
      { word: "sodium", phonetic: "/ˈsoʊdiəm/", partOfSpeech: "n.", meaning: "钠", memoryTip: "sod钠 + -ium → 钠", root: "sod", rootPhonetic: "/ˈsoʊd/", rootMeaning: "钠", rootPhrases: ["sodium chloride", "sodium hydroxide"], wordPhrases: ["sodium chloride", "sodium hydroxide"] },
      { word: "soda", phonetic: "/ˈsoʊdə/", partOfSpeech: "n.", meaning: "苏打；汽水", memoryTip: "sod钠 + -a → 苏打（含钠）", root: "sod", rootPhonetic: "/ˈsoʊd/", rootMeaning: "钠", rootPhrases: ["baking soda", "soda ash"], wordPhrases: ["baking soda", "soda ash"] },
      { word: "sodiate", phonetic: "/ˈsoʊdieɪt/", partOfSpeech: "v.", meaning: "钠化", memoryTip: "sodi-钠 + -ate → 钠化", root: "sod", rootPhonetic: "/ˈsoʊd/", rootMeaning: "钠", rootPhrases: ["sodiate process", "sodiate compound"], wordPhrases: ["sodiate process", "sodiate compound"] },
      { word: "disodium", phonetic: "/daɪˈsoʊdiəm/", partOfSpeech: "adj.", meaning: "二钠的", memoryTip: "di-二 + sodium钠 → 二钠的", root: "sod", rootPhonetic: "/ˈsoʊd/", rootMeaning: "钠", rootPhrases: ["disodium phosphate", "disodium salt"], wordPhrases: ["disodium phosphate", "disodium salt"] }
    ],
    phrases: ["sodium chloride", "sodium hydroxide", "baking soda"],
    mnemonic: "sod（钠）→ 与钠元素有关的"
  },
  {
    id: 810, root: "calc", phonetic: "/ˈkælk/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "钙",
    words: [
      { word: "calcium", phonetic: "/ˈkælsiəm/", partOfSpeech: "n.", meaning: "钙", memoryTip: "calc钙 + -ium → 钙", root: "calc", rootPhonetic: "/ˈkælk/", rootMeaning: "钙", rootPhrases: ["calcium carbonate", "calcium ion"], wordPhrases: ["calcium carbonate", "calcium ion"] },
      { word: "calcite", phonetic: "/ˈkælsaɪt/", partOfSpeech: "n.", meaning: "方解石", memoryTip: "calc钙 + -ite → 方解石（含钙）", root: "calc", rootPhonetic: "/ˈkælk/", rootMeaning: "钙", rootPhrases: ["calcite crystal", "calcite mineral"], wordPhrases: ["calcite crystal", "calcite mineral"] },
      { word: "calcinate", phonetic: "/ˈkælsɪneɪt/", partOfSpeech: "v.", meaning: "煅烧", memoryTip: "calc钙 + -inate → 煅烧（成钙）", root: "calc", rootPhonetic: "/ˈkælk/", rootMeaning: "钙", rootPhrases: ["calcinate limestone", "calcinate process"], wordPhrases: ["calcinate limestone", "calcinate process"] },
      { word: "calciferous", phonetic: "/kælˈsɪfərəs/", partOfSpeech: "adj.", meaning: "含钙的", memoryTip: "calc钙 + -ferous含 → 含钙的", root: "calc", rootPhonetic: "/ˈkælk/", rootMeaning: "钙", rootPhrases: ["calciferous rock", "calciferous soil"], wordPhrases: ["calciferous rock", "calciferous soil"] }
    ],
    phrases: ["calcium carbonate", "calcium ion", "calcite crystal"],
    mnemonic: "calc（钙）→ 与钙元素有关的"
  },
  {
    id: 811, root: "alumin", phonetic: "/əˈluːmɪn/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "铝",
    words: [
      { word: "aluminum", phonetic: "/əˈluːmɪnəm/", partOfSpeech: "n.", meaning: "铝", memoryTip: "alumin-铝 + -um → 铝", root: "alumin", rootPhonetic: "/əˈluːmɪn/", rootMeaning: "铝", rootPhrases: ["aluminum foil", "aluminum alloy"], wordPhrases: ["aluminum foil", "aluminum alloy"] },
      { word: "alumina", phonetic: "/əˈluːmɪnə/", partOfSpeech: "n.", meaning: "氧化铝", memoryTip: "alumin-铝 + -a → 氧化铝", root: "alumin", rootPhonetic: "/əˈluːmɪn/", rootMeaning: "铝", rootPhrases: ["alumina ceramic", "activated alumina"], wordPhrases: ["alumina ceramic", "activated alumina"] },
      { word: "aluminate", phonetic: "/əˈluːmɪneɪt/", partOfSpeech: "n.", meaning: "铝酸盐", memoryTip: "alumin-铝 + -ate → 铝酸盐", root: "alumin", rootPhonetic: "/əˈluːmɪn/", rootMeaning: "铝", rootPhrases: ["sodium aluminate", "calcium aluminate"], wordPhrases: ["sodium aluminate", "calcium aluminate"] },
      { word: "aluminosilicate", phonetic: "/əˌluːmɪnəˈsɪlɪkeɪt/", partOfSpeech: "n.", meaning: "硅铝酸盐", memoryTip: "alumino铝 + silicate硅酸盐 → 硅铝酸盐", root: "alumin", rootPhonetic: "/əˈluːmɪn/", rootMeaning: "铝", rootPhrases: ["aluminosilicate mineral", "zeolite aluminosilicate"], wordPhrases: ["aluminosilicate mineral", "zeolite aluminosilicate"] }
    ],
    phrases: ["aluminum foil", "aluminum alloy", "alumina ceramic"],
    mnemonic: "alumin（铝）→ 与铝元素有关的"
  },
  {
    id: 812, root: "cupr", phonetic: "/ˈkuːpr/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "铜",
    words: [
      { word: "copper", phonetic: "/ˈkɒpər/", partOfSpeech: "n.", meaning: "铜", memoryTip: "cupr铜 → 铜", root: "cupr", rootPhonetic: "/ˈkuːpr/", rootMeaning: "铜", rootPhrases: ["copper sulfate", "copper wire"], wordPhrases: ["copper sulfate", "copper wire"] },
      { word: "cupric", phonetic: "/ˈkjuːprɪk/", partOfSpeech: "adj.", meaning: "铜的；二价铜的", memoryTip: "cupr铜 + -ic → 铜的", root: "cupr", rootPhonetic: "/ˈkuːpr/", rootMeaning: "铜", rootPhrases: ["cupric oxide", "cupric chloride"], wordPhrases: ["cupric oxide", "cupric chloride"] },
      { word: "cuprous", phonetic: "/ˈkjuːprəs/", partOfSpeech: "adj.", meaning: "亚铜的；一价铜的", memoryTip: "cupr铜 + -ous → 亚铜的", root: "cupr", rootPhonetic: "/ˈkuːpr/", rootMeaning: "铜", rootPhrases: ["cuprous oxide", "cuprous chloride"], wordPhrases: ["cuprous oxide", "cuprous chloride"] },
      { word: "cuprite", phonetic: "/ˈkjuːpraɪt/", partOfSpeech: "n.", meaning: "赤铜矿", memoryTip: "cupr铜 + -ite → 赤铜矿", root: "cupr", rootPhonetic: "/ˈkuːpr/", rootMeaning: "铜", rootPhrases: ["cuprite ore", "cuprite mineral"], wordPhrases: ["cuprite ore", "cuprite mineral"] }
    ],
    phrases: ["copper sulfate", "copper wire", "cupric oxide"],
    mnemonic: "cupr（铜）→ 与铜元素有关的"
  },
  {
    id: 813, root: "argen", phonetic: "/ˈɑːrdʒən/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "银",
    words: [
      { word: "silver", phonetic: "/ˈsɪlvər/", partOfSpeech: "n.", meaning: "银", memoryTip: "argen银的变体 → 银", root: "argen", rootPhonetic: "/ˈɑːrdʒən/", rootMeaning: "银", rootPhrases: ["silver nitrate", "silver halide"], wordPhrases: ["silver nitrate", "silver halide"] },
      { word: "argentic", phonetic: "/ɑːrˈdʒentɪk/", partOfSpeech: "adj.", meaning: "银的；二价银的", memoryTip: "argen银 + -tic → 银的", root: "argen", rootPhonetic: "/ˈɑːrdʒən/", rootMeaning: "银", rootPhrases: ["argentic oxide", "argentic compound"], wordPhrases: ["argentic oxide", "argentic compound"] },
      { word: "argentous", phonetic: "/ɑːrˈdʒentəs/", partOfSpeech: "adj.", meaning: "亚银的；一价银的", memoryTip: "argen银 + -ous → 亚银的", root: "argen", rootPhonetic: "/ˈɑːrdʒən/", rootMeaning: "银", rootPhrases: ["argentous chloride", "argentous oxide"], wordPhrases: ["argentous chloride", "argentous oxide"] },
      { word: "argentite", phonetic: "/ɑːrˈdʒentaɪt/", partOfSpeech: "n.", meaning: "辉银矿", memoryTip: "argen银 + -ite → 辉银矿", root: "argen", rootPhonetic: "/ˈɑːrdʒən/", rootMeaning: "银", rootPhrases: ["argentite ore", "argentite deposit"], wordPhrases: ["argentite ore", "argentite deposit"] }
    ],
    phrases: ["silver nitrate", "silver halide", "argentic oxide"],
    mnemonic: "argen（银）→ 与银元素有关的"
  },
  {
    id: 814, root: "aur", phonetic: "/ˈɔːr/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "金",
    words: [
      { word: "gold", phonetic: "/ɡoʊld/", partOfSpeech: "n.", meaning: "金", memoryTip: "aur金的变体 → 金", root: "aur", rootPhonetic: "/ˈɔːr/", rootMeaning: "金", rootPhrases: ["auric ion", "aurous compound"], wordPhrases: ["gold metal", "gold alloy"] },
      { word: "auric", phonetic: "/ˈɔːrɪk/", partOfSpeech: "adj.", meaning: "金的；三价金的", memoryTip: "aur金 + -ic → 金的", root: "aur", rootPhonetic: "/ˈɔːr/", rootMeaning: "金", rootPhrases: ["auric chloride", "auric oxide"], wordPhrases: ["auric chloride", "auric oxide"] },
      { word: "aurous", phonetic: "/ˈɔːrəs/", partOfSpeech: "adj.", meaning: "亚金的；一价金的", memoryTip: "aur金 + -ous → 亚金的", root: "aur", rootPhonetic: "/ˈɔːr/", rootMeaning: "金", rootPhrases: ["aurous chloride", "aurous ion"], wordPhrases: ["aurous chloride", "aurous ion"] },
      { word: "auriferous", phonetic: "/ɔːˈrɪfərəs/", partOfSpeech: "adj.", meaning: "含金的；产金的", memoryTip: "aur金 + -ferous含 → 含金的", root: "aur", rootPhonetic: "/ˈɔːr/", rootMeaning: "金", rootPhrases: ["auriferous ore", "auriferous quartz"], wordPhrases: ["auriferous ore", "auriferous quartz"] }
    ],
    phrases: ["auric ion", "aurous compound", "auric chloride"],
    mnemonic: "aur（金）→ 与金元素有关的"
  },
  {
    id: 815, root: "plumb", phonetic: "/ˈplʌm/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "铅",
    words: [
      { word: "lead", phonetic: "/led/", partOfSpeech: "n.", meaning: "铅", memoryTip: "plumb铅的变体 → 铅", root: "plumb", rootPhonetic: "/ˈplʌm/", rootMeaning: "铅", rootPhrases: ["plumbic oxide", "plumbous ion"], wordPhrases: ["lead metal", "lead pipe"] },
      { word: "plumbic", phonetic: "/ˈplʌmbɪk/", partOfSpeech: "adj.", meaning: "铅的；四价铅的", memoryTip: "plumb铅 + -ic → 铅的", root: "plumb", rootPhonetic: "/ˈplʌm/", rootMeaning: "铅", rootPhrases: ["plumbic oxide", "plumbic acid"], wordPhrases: ["plumbic oxide", "plumbic acid"] },
      { word: "plumbous", phonetic: "/ˈplʌmbəs/", partOfSpeech: "adj.", meaning: "亚铅的；二价铅的", memoryTip: "plumb铅 + -ous → 亚铅的", root: "plumb", rootPhonetic: "/ˈplʌm/", rootMeaning: "铅", rootPhrases: ["plumbous chloride", "plumbous oxide"], wordPhrases: ["plumbous chloride", "plumbous oxide"] },
      { word: "plumbing", phonetic: "/ˈplʌmɪŋ/", partOfSpeech: "n.", meaning: "管道系统", memoryTip: "plumb铅管 + -ing → 管道系统（原用铅管）", root: "plumb", rootPhonetic: "/ˈplʌm/", rootMeaning: "铅", rootPhrases: ["plumbing system", "plumbing fixture"], wordPhrases: ["plumbing system", "plumbing fixture"] }
    ],
    phrases: ["plumbic oxide", "plumbous ion", "plumbic acid"],
    mnemonic: "plumb（铅）→ 与铅元素有关的"
  },
  {
    id: 816, root: "stann", phonetic: "/ˈstæn/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "锡",
    words: [
      { word: "tin", phonetic: "/tɪn/", partOfSpeech: "n.", meaning: "锡", memoryTip: "stann锡的变体 → 锡", root: "stann", rootPhonetic: "/ˈstæn/", rootMeaning: "锡", rootPhrases: ["stannic chloride", "stannous oxide"], wordPhrases: ["tin metal", "tin can"] },
      { word: "stannic", phonetic: "/ˈstænɪk/", partOfSpeech: "adj.", meaning: "锡的；四价锡的", memoryTip: "stann锡 + -ic → 锡的", root: "stann", rootPhonetic: "/ˈstæn/", rootMeaning: "锡", rootPhrases: ["stannic chloride", "stannic oxide"], wordPhrases: ["stannic chloride", "stannic oxide"] },
      { word: "stannous", phonetic: "/ˈstænəs/", partOfSpeech: "adj.", meaning: "亚锡的；二价锡的", memoryTip: "stann锡 + -ous → 亚锡的", root: "stann", rootPhonetic: "/ˈstæn/", rootMeaning: "锡", rootPhrases: ["stannous chloride", "stannous fluoride"], wordPhrases: ["stannous chloride", "stannous fluoride"] },
      { word: "stannite", phonetic: "/ˈstænaɪt/", partOfSpeech: "n.", meaning: "黄锡矿", memoryTip: "stann锡 + -ite → 黄锡矿", root: "stann", rootPhonetic: "/ˈstæn/", rootMeaning: "锡", rootPhrases: ["stannite ore", "stannite mineral"], wordPhrases: ["stannite ore", "stannite mineral"] }
    ],
    phrases: ["stannic chloride", "stannous oxide", "stannic acid"],
    mnemonic: "stann（锡）→ 与锡元素有关的"
  },
  {
    id: 817, root: "zinc", phonetic: "/zɪŋk/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "锌",
    words: [
      { word: "zinc", phonetic: "/zɪŋk/", partOfSpeech: "n.", meaning: "锌", memoryTip: "zinc锌 → 锌", root: "zinc", rootPhonetic: "/zɪŋk/", rootMeaning: "锌", rootPhrases: ["zinc oxide", "zinc sulfate"], wordPhrases: ["zinc oxide", "zinc sulfate"] },
      { word: "zincate", phonetic: "/ˈzɪŋkeɪt/", partOfSpeech: "n.", meaning: "锌酸盐", memoryTip: "zinc锌 + -ate → 锌酸盐", root: "zinc", rootPhonetic: "/zɪŋk/", rootMeaning: "锌", rootPhrases: ["sodium zincate", "potassium zincate"], wordPhrases: ["sodium zincate", "potassium zincate"] },
      { word: "zincify", phonetic: "/ˈzɪŋkɪfaɪ/", partOfSpeech: "v.", meaning: "镀锌；包锌", memoryTip: "zinc锌 + -ify使 → 镀锌", root: "zinc", rootPhonetic: "/zɪŋk/", rootMeaning: "锌", rootPhrases: ["zincify steel", "zincify iron"], wordPhrases: ["zincify steel", "zincify iron"] },
      { word: "zincky", phonetic: "/ˈzɪŋki/", partOfSpeech: "adj.", meaning: "含锌的", memoryTip: "zinc锌 + -ky → 含锌的", root: "zinc", rootPhonetic: "/zɪŋk/", rootMeaning: "锌", rootPhrases: ["zincky ore", "zincky compound"], wordPhrases: ["zincky ore", "zincky compound"] }
    ],
    phrases: ["zinc oxide", "zinc sulfate", "sodium zincate"],
    mnemonic: "zinc（锌）→ 与锌元素有关的"
  },
  {
    id: 818, root: "magnes", phonetic: "/mæɡˈniːs/", partOfSpeech: "n.", frequency: 3, category: "化工", meaning: "镁",
    words: [
      { word: "magnesium", phonetic: "/mæɡˈniːziəm/", partOfSpeech: "n.", meaning: "镁", memoryTip: "magnes镁 + -ium → 镁", root: "magnes", rootPhonetic: "/mæɡˈniːs/", rootMeaning: "镁", rootPhrases: ["magnesium oxide", "magnesium chloride"], wordPhrases: ["magnesium oxide", "magnesium chloride"] },
      { word: "magnesite", phonetic: "/ˈmæɡnɪsaɪt/", partOfSpeech: "n.", meaning: "菱镁矿", memoryTip: "magnes镁 + -ite → 菱镁矿", root: "magnes", rootPhonetic: "/mæɡˈniːs/", rootMeaning: "镁", rootPhrases: ["magnesite ore", "burned magnesite"], wordPhrases: ["magnesite ore", "burned magnesite"] },
      { word: "magnesia", phonetic: "/mæɡˈniːʃə/", partOfSpeech: "n.", meaning: "氧化镁", memoryTip: "magnes镁 + -ia → 氧化镁", root: "magnes", rootPhonetic: "/mæɡˈniːs/", rootMeaning: "镁", rootPhrases: ["magnesia cement", "calcined magnesia"], wordPhrases: ["magnesia cement", "calcined magnesia"] },
      { word: "magnesic", phonetic: "/mæɡˈniːsɪk/", partOfSpeech: "adj.", meaning: "镁的", memoryTip: "magnes镁 + -ic → 镁的", root: "magnes", rootPhonetic: "/mæɡˈniːs/", rootMeaning: "镁", rootPhrases: ["magnesic compound", "magnesic salt"], wordPhrases: ["magnesic compound", "magnesic salt"] }
    ],
    phrases: ["magnesium oxide", "magnesium chloride", "magnesite ore"],
    mnemonic: "magnes（镁）→ 与镁元素有关的"
  },
  {
    id: 819, root: "brom", phonetic: "/ˈbroʊm/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "溴",
    words: [
      { word: "bromine", phonetic: "/ˈbroʊmiːn/", partOfSpeech: "n.", meaning: "溴", memoryTip: "brom-溴 + -ine → 溴", root: "brom", rootPhonetic: "/ˈbroʊm/", rootMeaning: "溴", rootPhrases: ["bromine water", "bromine compound"], wordPhrases: ["bromine water", "bromine compound"] },
      { word: "bromide", phonetic: "/ˈbroʊmaɪd/", partOfSpeech: "n.", meaning: "溴化物", memoryTip: "brom-溴 + -ide → 溴化物", root: "brom", rootPhonetic: "/ˈbroʊm/", rootMeaning: "溴", rootPhrases: ["potassium bromide", "silver bromide"], wordPhrases: ["potassium bromide", "silver bromide"] },
      { word: "bromate", phonetic: "/ˈbroʊmeɪt/", partOfSpeech: "n.", meaning: "溴酸盐", memoryTip: "brom-溴 + -ate → 溴酸盐", root: "brom", rootPhonetic: "/ˈbroʊm/", rootMeaning: "溴", rootPhrases: ["potassium bromate", "sodium bromate"], wordPhrases: ["potassium bromate", "sodium bromate"] },
      { word: "brominate", phonetic: "/ˈbroʊmɪneɪt/", partOfSpeech: "v.", meaning: "溴化", memoryTip: "brom-溴 + -inate → 溴化", root: "brom", rootPhonetic: "/ˈbroʊm/", rootMeaning: "溴", rootPhrases: ["brominate compound", "brominate process"], wordPhrases: ["brominate compound", "brominate process"] }
    ],
    phrases: ["bromine water", "bromine compound", "potassium bromide"],
    mnemonic: "brom（溴）→ 与溴元素有关的"
  },
  {
    id: 820, root: "iod", phonetic: "/ˈaɪəd/", partOfSpeech: "n.", frequency: 2, category: "化工", meaning: "碘",
    words: [
      { word: "iodine", phonetic: "/ˈaɪədiːn/", partOfSpeech: "n.", meaning: "碘", memoryTip: "iod-碘 + -ine → 碘", root: "iod", rootPhonetic: "/ˈaɪəd/", rootMeaning: "碘", rootPhrases: ["iodine tincture", "iodine deficiency"], wordPhrases: ["iodine tincture", "iodine deficiency"] },
      { word: "iodide", phonetic: "/ˈaɪədaɪd/", partOfSpeech: "n.", meaning: "碘化物", memoryTip: "iod-碘 + -ide → 碘化物", root: "iod", rootPhonetic: "/ˈaɪəd/", rootMeaning: "碘", rootPhrases: ["potassium iodide", "hydrogen iodide"], wordPhrases: ["potassium iodide", "hydrogen iodide"] },
      { word: "iodate", phonetic: "/ˈaɪədeɪt/", partOfSpeech: "n.", meaning: "碘酸盐", memoryTip: "iod-碘 + -ate → 碘酸盐", root: "iod", rootPhonetic: "/ˈaɪəd/", rootMeaning: "碘", rootPhrases: ["potassium iodate", "calcium iodate"], wordPhrases: ["potassium iodate", "calcium iodate"] },
      { word: "iodize", phonetic: "/ˈaɪədaɪz/", partOfSpeech: "v.", meaning: "碘化", memoryTip: "iod-碘 + -ize → 碘化", root: "iod", rootPhonetic: "/ˈaɪəd/", rootMeaning: "碘", rootPhrases: ["iodize salt", "iodize process"], wordPhrases: ["iodize salt", "iodize process"] }
    ],
    phrases: ["iodine tincture", "iodine deficiency", "potassium iodide"],
    mnemonic: "iod（碘）→ 与碘元素有关的"
  }
];

console.log('已创建', newRoots.length, '个词根数据');
console.log('需要继续添加更多数据以达到200个...');
