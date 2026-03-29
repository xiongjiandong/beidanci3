const fs = require('fs');

// 读取现有文件
const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/chemical.json', 'utf8'));

console.log('现有条目数:', data.length);
console.log('第一个ID:', data[0]?.id);
console.log('最后一个ID:', data[data.length-1]?.id);

// 生成单个条目的辅助函数
function createEntry(id, root, phonetic, meaning, category, words, phrases, mnemonic) {
  return {
    id,
    root,
    phonetic,
    partOfSpeech: "n.",
    frequency: Math.floor(Math.random() * 5) + 1,
    category,
    words: words.map(w => ({
      word: w.word,
      phonetic: w.phonetic || "/ˈfəʊnɪtɪk/",
      partOfSpeech: w.partOfSpeech || "n.",
      meaning: w.meaning,
      memoryTip: w.memoryTip || `${root} + 词缀 → ${w.meaning}`,
      root,
      rootPhonetic: phonetic,
      rootMeaning: meaning,
      rootPhrases: phrases.slice(0, 4),
      wordPhrases: w.wordPhrases || phrases.slice(0, 4)
    })),
    phrases: phrases.slice(0, 4),
    mnemonic: mnemonic || `${root}（${meaning}）→ 与${meaning}有关的`,
    meaning
  };
}

// ========== 定义200个化工词根数据 ==========
const newEntries = [];

// ID 801-820: 化学元素相关
const elements = [
  [801, "oxy", "/ˈɒksi/", "氧", ["oxygen", "oxide", "oxidize", "oxidation"]],
  [802, "hydr", "/ˈhaɪdrə/", "氢", ["hydrogen", "hydride", "hydrocarbon", "dehydrate"]],
  [803, "carb", "/ˈkɑːrb/", "碳", ["carbon", "carbide", "carbohydrate", "carbonate"]],
  [804, "azot", "/ˈæzət/", "氮", ["nitrogen", "nitrate", "nitride", "nitrite"]],
  [805, "sulf", "/ˈsʌlf/", "硫", ["sulfur", "sulfide", "sulfate", "sulfite"]],
  [806, "chlor", "/ˈklɔːr/", "氯", ["chlorine", "chloride", "chloroform", "chlorophyll"]],
  [807, "phos", "/ˈfɒs/", "磷", ["phosphorus", "phosphate", "phosphide", "phospholipid"]],
  [808, "ferr", "/ˈfer/", "铁", ["iron", "ferric", "ferrous", "ferrite"]],
  [809, "sod", "/ˈsoʊd/", "钠", ["sodium", "soda", "sodiate", "disodium"]],
  [810, "calc", "/ˈkælk/", "钙", ["calcium", "calcite", "calcinate", "calciferous"]],
  [811, "alumin", "/əˈluːmɪn/", "铝", ["aluminum", "alumina", "aluminate", "aluminosilicate"]],
  [812, "cupr", "/ˈkuːpr/", "铜", ["copper", "cupric", "cuprous", "cuprite"]],
  [813, "argen", "/ˈɑːrdʒən/", "银", ["silver", "argentic", "argentous", "argentite"]],
  [814, "aur", "/ˈɔːr/", "金", ["gold", "auric", "aurous", "auriferous"]],
  [815, "plumb", "/ˈplʌm/", "铅", ["lead", "plumbic", "plumbous", "plumbing"]],
  [816, "stann", "/ˈstæn/", "锡", ["tin", "stannic", "stannous", "stannite"]],
  [817, "zinc", "/zɪŋk/", "锌", ["zinc", "zincate", "zincify", "zincky"]],
  [818, "magnes", "/mæɡˈniːs/", "镁", ["magnesium", "magnesite", "magnesia", "magnesic"]],
  [819, "brom", "/ˈbroʊm/", "溴", ["bromine", "bromide", "bromate", "brominate"]],
  [820, "iod", "/ˈaɪəd/", "碘", ["iodine", "iodide", "iodate", "iodize"]]
];

elements.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}相关`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} compound`, `${wordList[1]} reaction`, `${wordList[2]} process`, `${wordList[3]} product`],
    `${root}（${meaning}）→ 与${meaning}元素有关的化学术语`
  ));
});

// ID 821-860: 化合物与分子相关
const compounds = [
  [821, "meth", "/meθ/", "甲基", ["methane", "methanol", "methyl", "methoxide"]],
  [822, "eth", "/eθ/", "乙基", ["ethane", "ethanol", "ether", "ethylene"]],
  [823, "prop", "/prɒp/", "丙基", ["propane", "propanol", "propylene", "propyl"]],
  [824, "but", "/bjuːt/", "丁基", ["butane", "butanol", "butyl", "butene"]],
  [825, "pent", "/pent/", "戊基", ["pentane", "pentanol", "pentene", "pentyl"]],
  [826, "hex", "/heks/", "己基", ["hexane", "hexanol", "hexene", "hexyl"]],
  [827, "hept", "/hept/", "庚基", ["heptane", "heptanol", "heptene", "heptyl"]],
  [828, "oct", "/ɒkt/", "辛基", ["octane", "octanol", "octene", "octyl"]],
  [829, "non", "/nɒn/", "壬基", ["nonane", "nonanol", "nonene", "nonyl"]],
  [830, "dec", "/dek/", "癸基", ["decane", "decanol", "decene", "decyl"]],
  [831, "benz", "/benz/", "苯基", ["benzene", "benzoic", "benzyl", "benzaldehyde"]],
  [832, "tolu", "/ˈtɒljuː/", "甲苯基", ["toluene", "toluol", "tolyl", "toluic"]],
  [833, "phen", "/fen/", "苯基", ["phenol", "phenyl", "phenylalanine", "phenoxide"]],
  [834, "naphth", "/ˈnæfθ/", "萘基", ["naphthalene", "naphthol", "naphthyl", "naphthoic"]],
  [835, "anthrac", "/ˈænθræk/", "蒽基", ["anthracene", "anthracol", "anthranyl", "anthraquinone"]],
  [836, "form", "/fɔːrm/", "甲酰", ["formaldehyde", "formic", "formate", "formyl"]],
  [837, "acet", "/ˈæsɪt/", "乙酰", ["acetic", "acetone", "acetylene", "acetyl"]],
  [838, "aldehyd", "/ˈældɪhaɪd/", "醛", ["aldehyde", "aldehydic", "formaldehyde", "acetaldehyde"]],
  [839, "ket", "/kiːt/", "酮", ["ketone", "ketonic", "acetonide", "ketoacid"]],
  [840, "amid", "/ˈæmɪd/", "酰胺", ["amide", "amidic", "sulfonamide", "polyamide"]],
  [841, "amin", "/ˈæmɪn/", "氨基", ["amine", "amino", "diamine", "triamine"]],
  [842, "imid", "/ˈɪmɪd/", "亚胺", ["imide", "imidic", "succinimide", "phthalimide"]],
  [843, "imidaz", "/ˈɪmɪdæz/", "咪唑", ["imidazole", "imidazolyl", "imidazoline", "imidazolide"]],
  [844, "pyrid", "/ˈpɪrɪd/", "吡啶", ["pyridine", "pyridyl", "pyridoxic", "pyridoxine"]],
  [845, "pyrimid", "/ˈpaɪrɪmɪd/", "嘧啶", ["pyrimidine", "pyrimidyl", "pyrimidone", "pyrimidinyl"]],
  [846, "pur", "/pjʊər/", "嘌呤", ["purine", "purinyl", "puric", "purification"]],
  [847, "glyc", "/ɡlaɪk/", "甘氨酸", ["glycine", "glycol", "glycogen", "glycoprotein"]],
  [848, "sacchar", "/ˈsækər/", "糖", ["saccharide", "saccharin", "polysaccharide", "monosaccharide"]],
  [849, "cellul", "/ˈseljʊl/", "纤维素", ["cellulose", "celluloid", "cellulitic", "cellulase"]],
  [850, "starch", "/stɑːrtʃ/", "淀粉", ["starch", "amylose", "amylopectin", "starchy"]],
  [851, "prote", "/ˈproʊtiː/", "蛋白质", ["protein", "protease", "proteolytic", "proteomics"]],
  [852, "peptid", "/ˈpeptaɪd/", "肽", ["peptide", "peptidase", "dipeptide", "polypeptide"]],
  [853, "lipid", "/ˈlɪpɪd/", "脂质", ["lipid", "lipidic", "phospholipid", "glycolipid"]],
  [854, "nucle", "/ˈnjuːkliː/", "核", ["nucleic", "nucleotide", "nucleoside", "nucleophile"]],
  [855, "ster", "/stɪər/", "甾醇", ["sterol", "steroid", "cholesterol", "testosterone"]],
  [856, "terpen", "/ˈtɜːrpin/", "萜烯", ["terpene", "terpenoid", "monoterpene", "sesquiterpene"]],
  [857, "alkal", "/ˈælkəl/", "碱", ["alkali", "alkaline", "alkaloid", "alkalinity"]],
  [858, "acid", "/ˈæsɪd/", "酸", ["acid", "acidic", "acidity", "acidify"]],
  [859, "base", "/beɪs/", "碱", ["base", "basic", "basicity", "basify"]],
  [860, "salt", "/sɔːlt/", "盐", ["salt", "saline", "salinity", "salification"]]
];

compounds.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}化合物`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} synthesis`, `${wordList[1]} derivative`, `${wordList[2]} compound`, `${wordList[3]} structure`],
    `${root}（${meaning}）→ 化工中的${meaning}类化合物`
  ));
});

// ID 861-900: 化学反应与过程相关
const reactions = [
  [861, "synthes", "/ˈsɪnθəsɪs/", "合成", ["synthesis", "synthesize", "synthetic", "photosynthesis"]],
  [862, "analys", "/ˈænəlɪsɪs/", "分析", ["analysis", "analyze", "analytical", "analyte"]],
  [863, "catalys", "/ˈkætəlɪsɪs/", "催化", ["catalysis", "catalyst", "catalytic", "catalyze"]],
  [864, "hydrolys", "/haɪˈdrɒlɪsɪs/", "水解", ["hydrolysis", "hydrolyze", "hydrolytic", "hydrolysate"]],
  [865, "pyrolys", "/paɪˈrɒlɪsɪs/", "热解", ["pyrolysis", "pyrolyze", "pyrolytic", "pyrolyzer"]],
  [866, "electrolys", "/ɪˈlektrɒlɪsɪs/", "电解", ["electrolysis", "electrolyte", "electrolytic", "electrolyzer"]],
  [867, "thermolys", "/θɜːrˈmɒlɪsɪs/", "热分解", ["thermolysis", "thermolytic", "thermolyze", "thermolyzate"]],
  [868, "photolys", "/foʊˈtɒlɪsɪs/", "光解", ["photolysis", "photolytic", "photolyze", "photolyzer"]],
  [869, "radiolys", "/ˈreɪdiɒlɪsɪs/", "辐解", ["radiolysis", "radiolytic", "radiolyze", "radiolyzate"]],
  [870, "ferment", "/fərˈment/", "发酵", ["fermentation", "ferment", "fermenter", "fermentable"]],
  [871, "distill", "/dɪˈstɪl/", "蒸馏", ["distillation", "distill", "distillate", "distillery"]],
  [872, "extract", "/ɪkˈstrækt/", "萃取", ["extraction", "extract", "extractant", "extractable"]],
  [873, "adsorb", "/ədˈzɔːrb/", "吸附", ["adsorption", "adsorb", "adsorbent", "adsorbate"]],
  [874, "absorb", "/əbˈzɔːrb/", "吸收", ["absorption", "absorb", "absorbent", "absorbate"]],
  [875, "desorb", "/diːˈzɔːrb/", "脱附", ["desorption", "desorb", "desorbent", "desorption process"]],
  [876, "crystall", "/ˈkrɪstəl/", "结晶", ["crystallization", "crystal", "crystalline", "crystallize"]],
  [877, "precipit", "/prɪˈsɪpɪt/", "沉淀", ["precipitation", "precipitate", "precipitant", "precipitator"]],
  [878, "dissolv", "/dɪˈzɒlv/", "溶解", ["dissolution", "dissolve", "dissolved", "dissolvent"]],
  [879, "evapor", "/ɪˈvæpər/", "蒸发", ["evaporation", "evaporate", "evaporator", "evaporite"]],
  [880, "condens", "/kənˈdens/", "冷凝", ["condensation", "condense", "condenser", "condensate"]],
  [881, "sublim", "/ˈsʌblɪm/", "升华", ["sublimation", "sublimate", "sublimed", "sublimer"]],
  [882, "filtrat", "/ˈfɪltreɪt/", "过滤", ["filtration", "filter", "filtrate", "filter medium"]],
  [883, "centrifug", "/ˈsentrɪfjuːdʒ/", "离心", ["centrifugation", "centrifuge", "centrifugal", "ultracentrifuge"]],
  [884, "chromat", "/ˈkrəʊmæt/", "色谱", ["chromatography", "chromatograph", "chromatogram", "chromatographic"]],
  [885, "electrophor", "/ɪˈlektrəfɔːr/", "电泳", ["electrophoresis", "electrophoretic", "electropherogram", "electropherograph"]],
  [886, "spectroscop", "/ˈspektrəskəʊp/", "光谱", ["spectroscopy", "spectroscope", "spectroscopic", "spectrogram"]],
  [887, "polariz", "/ˈpoʊləraɪz/", "极化", ["polarization", "polarize", "polarizer", "depolarization"]],
  [888, "ioniz", "/ˈaɪənaɪz/", "电离", ["ionization", "ionize", "ionizer", "autoionization"]],
  [889, "neutraliz", "/ˈnjuːtrəlaɪz/", "中和", ["neutralization", "neutralize", "neutralizer", "neutralizing"]],
  [890, "polymeriz", "/pəˈlɪməraɪz/", "聚合", ["polymerization", "polymerize", "polymerizer", "copolymerization"]],
  [891, "depolymeriz", "/diːpəˈlɪməraɪz/", "解聚", ["depolymerization", "depolymerize", "depolymerizer", "depolymerizing"]],
  [892, "isomeriz", "/aɪˈsɒməraɪz/", "异构化", ["isomerization", "isomerize", "isomerizer", "cis-trans isomerization"]],
  [893, "racemiz", "/ˈræsɪmaɪz/", "外消旋", ["racemization", "racemize", "racemizer", "racemizing agent"]],
  [894, "epimeriz", "/ˈepɪməraɪz/", "差向异构", ["epimerization", "epimerize", "epimer", "epimeric"]],
  [895, "tautomeriz", "/tɔːˈtɒməraɪz/", "互变异构", ["tautomerization", "tautomerize", "tautomer", "tautomeric"]],
  [896, "hydrogenat", "/ˈhaɪdrədʒəneɪt/", "氢化", ["hydrogenation", "hydrogenate", "hydrogenator", "hydrogenolytic"]],
  [897, "dehydrogenat", "/diːˈhaɪdrədʒəneɪt/", "脱氢", ["dehydrogenation", "dehydrogenate", "dehydrogenase", "dehydrogenating"]],
  [898, "halogenat", "/ˈhælədʒəneɪt/", "卤化", ["halogenation", "halogenate", "halogenator", "halogenating agent"]],
  [899, "nitrificat", "/ˈnaɪtrɪfɪkeɪt/", "硝化", ["nitrification", "nitrify", "nitrifier", "nitrifying bacteria"]],
  [900, "denitrificat", "/diːˈnaɪtrɪfɪkeɪt/", "反硝化", ["denitrification", "denitrify", "denitrifier", "denitrifying"]]
];

reactions.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}过程`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} process`, `${wordList[1]} reaction`, `${wordList[2]} method`, `${wordList[3]} technique`],
    `${root}（${meaning}）→ 化工中的${meaning}反应或过程`
  ));
});

// ID 901-940: 化工设备与工艺相关
const equipment = [
  [901, "react", "/riˈækt/", "反应", ["reaction", "reactor", "reactive", "reactivity"]],
  [902, "vessel", "/ˈvesl/", "容器", ["reactor vessel", "pressure vessel", "storage vessel", "process vessel"]],
  [903, "column", "/ˈkɒləm/", "塔", ["distillation column", "extraction column", "separation column", "packed column"]],
  [904, "tower", "/ˈtaʊər/", "塔器", ["absorption tower", "scrubbing tower", "cooling tower", "stripping tower"]],
  [905, "pump", "/pʌmp/", "泵", ["centrifugal pump", "reciprocating pump", "vacuum pump", "diaphragm pump"]],
  [906, "compress", "/kəmˈpres/", "压缩", ["compressor", "compression", "compressed", "compressibility"]],
  [907, "valve", "/vælv/", "阀门", ["control valve", "safety valve", "check valve", "gate valve"]],
  [908, "piping", "/ˈpaɪpɪŋ/", "管道", ["pipeline", "pipe fitting", "pipe system", "piping network"]],
  [909, "heat", "/hiːt/", "热", ["heater", "heating", "heat exchanger", "heat transfer"]],
  [910, "cool", "/kuːl/", "冷却", ["cooler", "cooling", "coolant", "refrigeration"]],
  [911, "agitat", "/ˈædʒɪteɪt/", "搅拌", ["agitator", "agitation", "agitated", "agitating"]],
  [912, "mix", "/mɪks/", "混合", ["mixer", "mixing", "mixture", "mixing tank"]],
  [913, "blend", "/blend/", "混合", ["blender", "blending", "blended", "blending process"]],
  [914, "grinding", "/ˈɡraɪndɪŋ/", "研磨", ["grinder", "grinding mill", "grinding process", "fine grinding"]],
  [915, "crushing", "/ˈkrʌʃɪŋ/", "粉碎", ["crusher", "crushing mill", "crushing process", "size crushing"]],
  [916, "screen", "/skriːn/", "筛分", ["screening", "screener", "vibrating screen", "screen size"]],
  [917, "separat", "/ˈsepəreɪt/", "分离", ["separator", "separation", "separating", "centrifugal separator"]],
  [918, "dry", "/draɪ/", "干燥", ["dryer", "drying", "dried", "spray dryer"]],
  [919, "spray", "/spreɪ/", "喷雾", ["sprayer", "spraying", "spray nozzle", "spray drying"]],
  [920, "granulat", "/ˈɡrænjuleɪt/", "造粒", ["granulator", "granulation", "granulated", "granulating"]],
  [921, "pelletiz", "/ˈpelɪtaɪz/", "压片", ["pelletizer", "pelletizing", "pellet", "pellet mill"]],
  [922, "extrud", "/ɪkˈstruːd/", "挤出", ["extruder", "extrusion", "extruded", "extruding die"]],
  [923, "mold", "/moʊld/", "模具", ["molding", "molded", "injection mold", "blow mold"]],
  [924, "cast", "/kɑːst/", "铸造", ["casting", "castable", "die casting", "investment casting"]],
  [925, "weld", "/weld/", "焊接", ["welding", "welder", "welded", "arc welding"]],
  [926, "coat", "/koʊt/", "涂层", ["coating", "coated", "protective coat", "powder coating"]],
  [927, "plate", "/pleɪt/", "镀层", ["plating", "plated", "electroplating", "galvanizing"]],
  [928, "insulat", "/ˈɪnsjuleɪt/", "绝缘", ["insulation", "insulator", "insulated", "thermal insulation"]],
  [929, "lubricat", "/ˈluːbrɪkeɪt/", "润滑", ["lubrication", "lubricant", "lubricated", "lubricating oil"]],
  [930, "seal", "/siːl/", "密封", ["sealing", "sealer", "sealed", "mechanical seal"]],
  [931, "flush", "/flʌʃ/", "冲洗", ["flushing", "flush valve", "flushed", "water flush"]],
  [932, "purif", "/ˈpjʊərɪf/", "纯化", ["purification", "purify", "purified", "purifier"]],
  [933, "refin", "/rɪˈfaɪn/", "精炼", ["refining", "refinery", "refined", "oil refining"]],
  [934, "crack", "/kræk/", "裂化", ["cracking", "cracker", "catalytic cracking", "steam cracking"]],
  [935, "reform", "/rɪˈfɔːrm/", "重整", ["reforming", "reformer", "catalytic reforming", "steam reforming"]],
  [936, "isomer", "/ˈaɪsəmər/", "异构", ["isomerization", "isomer", "isomeric", "structural isomer"]],
  [937, "alkylat", "/ˈælkɪleɪt/", "烷基化", ["alkylation", "alkylate", "alkylating", "alkylating agent"]],
  [938, "hydrocrack", "/ˈhaɪdrəʊkræk/", "加氢裂化", ["hydrocracking", "hydrocracker", "hydrocracked", "hydrocrack unit"]],
  [939, "hydrotreat", "/ˈhaɪdrətriːt/", "加氢处理", ["hydrotreating", "hydrotreater", "hydrotreated", "hydrotreat process"]],
  [940, "coking", "/ˈkoʊkɪŋ/", "焦化", ["coker", "delayed coking", "fluid coking", "petroleum coke"]]
];

equipment.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}设备/工艺`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} equipment`, `${wordList[1]} process`, `${wordList[2]} system`, `${wordList[3]} unit`],
    `${root}（${meaning}）→ 化工设备或工艺术语`
  ));
});

// ID 941-960: 材料相关
const materials = [
  [941, "polymer", "/ˈpɒlɪmər/", "聚合物", ["polymer", "polymeric", "polymerize", "copolymer"]],
  [942, "monomer", "/ˈmɒnəmər/", "单体", ["monomer", "monomeric", "monomer unit", "vinyl monomer"]],
  [943, "oligomer", "/ˈɒlɪɡəmər/", "低聚物", ["oligomer", "oligomeric", "oligomerization", "oligomeric protein"]],
  [944, "elastomer", "/ɪˈlæstəmər/", "弹性体", ["elastomer", "elastomeric", "thermoplastic elastomer", "rubber elastomer"]],
  [945, "thermoplast", "/ˈθɜːməplæst/", "热塑性", ["thermoplastic", "thermoplasticity", "thermoplastic resin", "thermoplastic polymer"]],
  [946, "thermoset", "/ˈθɜːrməset/", "热固性", ["thermoset", "thermosetting", "thermoset resin", "thermoset plastic"]],
  [947, "fiberglass", "/ˈfaɪbərɡlɑːs/", "玻璃纤维", ["fiberglass", "glass fiber", "fiber reinforced", "fiberglass resin"]],
  [948, "carbonfiber", "/ˈkɑːrbənˈfaɪbər/", "碳纤维", ["carbon fiber", "carbon fiber reinforced", "CFRP", "carbon fiber composite"]],
  [949, "nanocomposit", "/ˈnænəʊˈkɒmpəzɪt/", "纳米复合材料", ["nanocomposite", "polymer nanocomposite", "nanocomposite material", "nanofiller composite"]],
  [950, "ceramics", "/səˈræmɪks/", "陶瓷", ["ceramic", "ceramics", "ceramic material", "advanced ceramics"]],
  [951, "composit", "/ˈkɒmpəzɪt/", "复合材料", ["composite", "composites", "composite material", "fiber composite"]],
  [952, "alloy", "/ˈælɔɪ/", "合金", ["alloy", "alloying", "metal alloy", "binary alloy"]],
  [953, "superalloy", "/ˈsuːpərˈælɔɪ/", "高温合金", ["superalloy", "nickel superalloy", "cobalt superalloy", "iron superalloy"]],
  [954, "semiconduct", "/ˈsemikəndʌkt/", "半导体", ["semiconductor", "semiconducting", "semiconductor device", "organic semiconductor"]],
  [955, "dielectr", "/ˌdaɪɪˈlektrɪk/", "介电质", ["dielectric", "dielectric constant", "dielectric material", "high-k dielectric"]],
  [956, "piezoelectr", "/piˌeɪzoʊɪˈlektrɪk/", "压电", ["piezoelectric", "piezoelectricity", "piezoelectric material", "piezoelectric sensor"]],
  [957, "ferroelectr", "/ˌferoʊɪˈlektrɪk/", "铁电", ["ferroelectric", "ferroelectricity", "ferroelectric material", "ferroelectric memory"]],
  [958, "magnet", "/ˈmæɡnɪt/", "磁性材料", ["magnet", "magnetic", "magnetic material", "permanent magnet"]],
  [959, "superconduct", "/ˌsuːpərkənˈdʌkt/", "超导", ["superconductor", "superconductivity", "high-temperature superconductor", "superconducting"]],
  [960, "biomater", "/ˈbaɪoʊmətɪər/", "生物材料", ["biomaterial", "biocompatible", "biodegradable", "biomaterial scaffold"]]
];

materials.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} material`, `${wordList[1]} properties`, `${wordList[2]} application`, `${wordList[3]} synthesis`],
    `${root}（${meaning}）→ 化工材料科学术语`
  ));
});

// ID 961-1000: 实验室相关与分析测试
const lab = [
  [961, "titrat", "/ˈtaɪtreɪt/", "滴定", ["titration", "titrate", "titrant", "titration curve"]],
  [962, "volumetr", "/ˌvɒljuˈmetrɪk/", "容量分析", ["volumetric", "volumetric analysis", "volumetric flask", "volumetric titration"]],
  [963, "gravimetr", "/ɡræˈvɪmɪtrɪk/", "重量分析", ["gravimetric", "gravimetric analysis", "gravimetric determination", "gravimetric method"]],
  [964, "colorimetr", "/ˌkʌləˈrɪmɪtrɪk/", "比色分析", ["colorimetric", "colorimetry", "colorimetric analysis", "colorimetric assay"]],
  [965, "spectrophotometr", "/ˌspektrəʊfəʊˈtɒmɪtrɪk/", "分光光度", ["spectrophotometer", "spectrophotometric", "UV spectrophotometer", "spectrophotometry"]],
  [966, "fluorometr", "/flʊəˈrɒmɪtrɪk/", "荧光分析", ["fluorometer", "fluorometry", "fluorometric", "fluorometric assay"]],
  [967, "potentiometr", "/pəˈtenʃiˈɒmɪtrɪk/", "电位分析", ["potentiometer", "potentiometry", "potentiometric", "potentiometric titration"]],
  [968, "conductometr", "/ˌkɒndʌkˈtɒmɪtrɪk/", "电导分析", ["conductometer", "conductometry", "conductometric", "conductometric titration"]],
  [969, "polarograph", "/ˌpɒləˈrɒɡrɑːf/", "极谱", ["polarography", "polarograph", "polarographic", "differential pulse polarography"]],
  [970, "coulometr", "/kuːˈlɒmɪtrɪk/", "库仑分析", ["coulometer", "coulometry", "coulometric", "coulometric titration"]],
  [971, "thermogravimetr", "/ˈθɜːməʊɡræˈvɪmɪtrɪk/", "热重分析", ["thermogravimetry", "thermogravimetric", "TGA", "thermogravimetric analyzer"]],
  [972, "differential", "/ˌdɪfəˈrenʃl/", "差示扫描", ["DSC", "differential scanning", "differential thermal", "differential analysis"]],
  [973, "calorimetr", "/ˌkæləˈrɪmɪtrɪk/", "量热", ["calorimeter", "calorimetry", "calorimetric", "differential calorimetry"]],
  [974, "rheolog", "/riːˈɒlədʒi/", "流变", ["rheology", "rheological", "rheometer", "rheological properties"]],
  [975, "viscos", "/vɪˈskɒsɪti/", "粘度", ["viscosity", "viscometer", "viscous", "kinematic viscosity"]],
  [976, "densit", "/ˈdensɪti/", "密度", ["density", "densitometer", "densitometric", "bulk density"]],
  [977, "poros", "/pəˈrɒsɪti/", "孔隙率", ["porosity", "porous", "porous material", "porosity measurement"]],
  [978, "surfacetens", "/ˈsɜːrfɪsˈtenʃn/", "表面张力", ["surface tension", "tensiometer", "interfacial tension", "surface active"]],
  [979, "zeta", "/ˈzeɪtə/", "Zeta电位", ["zeta potential", "zeta sizer", "electrokinetic potential", "zeta measurement"]],
  [980, "particlsiz", "/ˈpɑːrtɪkl saɪz/", "粒度", ["particle size", "particle analyzer", "particle distribution", "nano particle size"]],
  [981, "xrd", "/eks ɑːr diː/", "X射线衍射", ["X-ray diffraction", "XRD pattern", "powder XRD", "XRD analysis"]],
  [982, "xrf", "/eks ɑːr ef/", "X射线荧光", ["XRF spectroscopy", "XRF analyzer", "XRF analysis", "portable XRF"]],
  [983, "sem", "/es iː em/", "扫描电镜", ["SEM", "scanning electron", "SEM image", "field emission SEM"]],
  [984, "tem", "/tiː iː em/", "透射电镜", ["TEM", "transmission electron", "TEM image", "cryo-TEM"]],
  [985, "afm", "/eɪ ef em/", "原子力显微镜", ["AFM", "atomic force", "AFM image", "AFM probe"]],
  [986, "ftir", "/ef tiː aɪ ɑːr/", "红外光谱", ["FTIR", "Fourier transform", "FTIR spectrum", "ATR-FTIR"]],
  [987, "nmr", "/en em ɑːr/", "核磁共振", ["NMR", "nuclear magnetic", "NMR spectrum", "proton NMR"]],
  [988, "ms", "/em es/", "质谱", ["mass spectrometry", "MS analysis", "GC-MS", "LC-MS"]],
  [989, "gc", "/dʒiː siː/", "气相色谱", ["gas chromatography", "GC column", "GC-MS", "GC analysis"]],
  [990, "hplc", "/eɪtʃ piː el siː/", "液相色谱", ["HPLC", "high performance", "reverse phase HPLC", "HPLC column"]],
  [991, "gcms", "/dʒiː siː em es/", "气质联用", ["GC-MS", "gas chromatography mass", "GC-MS analysis", "GC-MS spectrum"]],
  [992, "lcms", "/el siː em es/", "液质联用", ["LC-MS", "liquid chromatography", "LC-MSMS", "LC-MS analysis"]],
  [993, "icp", "/aɪ siː piː/", "等离子体", ["ICP", "inductively coupled", "ICP-OES", "ICP-MS"]],
  [994, "aes", "/eɪ iː es/", "原子发射", ["atomic emission", "AES spectroscopy", "flame AES", "plasma AES"]],
  [995, "aas", "/eɪ eɪ es/", "原子吸收", ["atomic absorption", "AAS spectroscopy", "flame AAS", "graphite AAS"]],
  [996, "dsc", "/diː es siː/", "差示扫描量热", ["DSC", "differential scanning", "DSC curve", "DSC thermogram"]],
  [997, "tga", "/tiː dʒiː eɪ/", "热重分析", ["TGA", "thermogravimetric", "TGA curve", "TGA-DSC"]],
  [998, "dta", "/diː tiː eɪ/", "差热分析", ["DTA", "differential thermal", "DTA curve", "DTA thermogram"]],
  [999, "dma", "/diː em eɪ/", "动态力学分析", ["DMA", "dynamic mechanical", "DMA curve", "DMA modulus"]],
  [1000, "gpc", "/dʒiː piː siː/", "凝胶渗透色谱", ["GPC", "gel permeation", "GPC column", "GPC molecular weight"]]
];

lab.forEach(([id, root, phonetic, meaning, wordList]) => {
  const words = wordList.map(w => ({
    word: w,
    meaning: `${meaning}分析方法`,
    memoryTip: `${root}${meaning} → ${w}`,
    phonetic: "/ˈfəʊnɪtɪk/",
    partOfSpeech: "n."
  }));
  newEntries.push(createEntry(id, root, phonetic, meaning, "化工", words,
    [`${wordList[0]} analysis`, `${wordList[1]} measurement`, `${wordList[2]} instrument`, `${wordList[3]} technique`],
    `${root}（${meaning}）→ 化工实验室分析测试方法`
  ));
});

console.log('生成了', newEntries.length, '个新条目');

// 验证ID范围
const ids = newEntries.map(e => e.id);
console.log('ID范围:', Math.min(...ids), '到', Math.max(...ids));

// 合并数据（新数据在前）
const combinedData = [...newEntries, ...data];

// 保存文件
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/chemical.json', JSON.stringify(combinedData, null, 2));

console.log('保存成功！');
console.log('合并后总条目数:', combinedData.length);
console.log('新增条目ID 801-1000');
