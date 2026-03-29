// Generate 300 new semiconductor root entries
// Target: id 201-500, frequency 201-500

const newEntries = [];

// Helper function to create entry
function createEntry(id, freq, root, phonetic, pos, meaning, words, phrases, mnemonic) {
    return {
        id: id,
        root: root,
        phonetic: phonetic,
        partOfSpeech: pos,
        frequency: freq,
        category: "半导体",
        words: words.map(w => ({
            word: w.word,
            phonetic: w.phonetic,
            partOfSpeech: w.partOfSpeech || pos,
            meaning: w.meaning,
            memoryTip: w.memoryTip,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases.map(p => p.split(' (')[0]),
            wordPhrases: w.wordPhrases || phrases.map(p => p.split(' (')[0])
        })),
        phrases: phrases,
        mnemonic: mnemonic,
        meaning: meaning
    };
}

// 晶圆制造相关 (201-230)
newEntries.push(createEntry(201, 201, "wafer", "/ˈweɪfər/", "n.", "晶圆", [
    {word: "wafer", phonetic: "/ˈweɪfər/", partOfSpeech: "n.", meaning: "晶圆", memoryTip: "wafer薄片 → 半导体晶圆", wordPhrases: ["wafer fabrication", "wafer processing", "wafer inspection", "wafer bonding"]},
    {word: "wafer fab", phonetic: "/ˈweɪfər fæb/", partOfSpeech: "n.", meaning: "晶圆厂", memoryTip: "wafer晶圆 + fab工厂 → 晶圆厂", wordPhrases: ["wafer fab capacity", "wafer fab equipment", "wafer fab process", "wafer fab automation"]},
    {word: "wafer sort", phonetic: "/ˈweɪfər sɔːrt/", partOfSpeech: "n.", meaning: "晶圆测试", memoryTip: "wafer晶圆 + sort分类 → 晶圆测试", wordPhrases: ["wafer sort test", "wafer sort yield", "wafer sort equipment", "wafer sort process"]},
    {word: "wafer dicing", phonetic: "/ˈweɪfər ˈdaɪsɪŋ/", partOfSpeech: "n.", meaning: "晶圆切割", memoryTip: "wafer晶圆 + dicing切割 → 晶圆切割", wordPhrases: ["wafer dicing saw", "wafer dicing street", "wafer dicing blade", "wafer dicing process"]}
], ["wafer fabrication (晶圆制造)", "wafer processing (晶圆加工)", "wafer inspection (晶圆检测)", "wafer bonding (晶圆键合)"], "wafer（晶圆）→ 半导体的基础材料薄片 → 晶圆"));

newEntries.push(createEntry(202, 202, "fab", "/fæb/", "n.", "晶圆厂", [
    {word: "fab", phonetic: "/fæb/", partOfSpeech: "n.", meaning: "晶圆厂", memoryTip: "fabrication缩写 → 晶圆厂", wordPhrases: ["fab capacity", "fab utilization", "foundry service", "fabless company"]},
    {word: "foundry", phonetic: "/ˈfaʊndri/", partOfSpeech: "n.", meaning: "代工厂", memoryTip: "found铸造 + -ry场所 → 代工厂", wordPhrases: ["pure-play foundry", "IDM foundry", "foundry model", "foundry business"]},
    {word: "IDM", phonetic: "/ˌaɪ diː ˈem/", partOfSpeech: "n.", meaning: "集成器件制造商", memoryTip: "Integrated Device Manufacturer → 垂直整合制造", wordPhrases: ["IDM company", "IDM model", "IDM strategy", "IDM advantage"]},
    {word: "fabless", phonetic: "/ˈfeɪbləs/", partOfSpeech: "adj.", meaning: "无晶圆厂的", memoryTip: "fab + -less无 → 无晶圆厂的", wordPhrases: ["fabless design", "fabless semiconductor", "fabless company", "fabless model"]}
], ["fab capacity (晶圆厂产能)", "fab utilization (晶圆厂利用率)", "foundry service (代工服务)", "fabless company (无晶圆厂公司)"], "fab（晶圆厂）→ fabrication facility → 半导体制造工厂"));

newEntries.push(createEntry(203, 203, "lithography", "/lɪˈθɒɡrəfi/", "n.", "光刻", [
    {word: "lithography", phonetic: "/lɪˈθɒɡrəfi/", partOfSpeech: "n.", meaning: "光刻", memoryTip: "litho石 + graphy写 → 光刻", wordPhrases: ["optical lithography", "EUV lithography", "immersion lithography", "lithography machine"]},
    {word: "photolithography", phonetic: "/ˌfəʊtəʊlɪˈθɒɡrəfi/", partOfSpeech: "n.", meaning: "光刻技术", memoryTip: "photo光 + lithography光刻 → 光刻技术", wordPhrases: ["photolithography process", "photolithography equipment", "photolithography mask", "photolithography resist"]},
    {word: "EUV", phonetic: "/ˌiː juː ˈviː/", partOfSpeech: "n.", meaning: "极紫外光刻", memoryTip: "Extreme Ultraviolet → 极紫外光刻", wordPhrases: ["EUV scanner", "EUV source", "EUV mask", "EUV resist"]},
    {word: "scanner", phonetic: "/ˈskænər/", partOfSpeech: "n.", meaning: "扫描仪", memoryTip: "scan扫描 + -er器 → 光刻扫描仪", wordPhrases: ["lithography scanner", "wafer scanner", "scanning speed", "scanning exposure"]}
], ["optical lithography (光学光刻)", "EUV lithography (EUV光刻)", "immersion lithography (浸没式光刻)", "lithography machine (光刻机)"], "lithography（光刻）→ 用光在硅片上刻画电路图案 → 光刻技术"));

newEntries.push(createEntry(204, 204, "etch", "/etʃ/", "v.", "刻蚀", [
    {word: "etch", phonetic: "/etʃ/", partOfSpeech: "v.", meaning: "刻蚀", memoryTip: "etch腐蚀 → 刻蚀", wordPhrases: ["plasma etching", "reactive ion etching", "etch rate", "etch selectivity"]},
    {word: "etching", phonetic: "/ˈetʃɪŋ/", partOfSpeech: "n.", meaning: "刻蚀工艺", memoryTip: "etch + -ing → 刻蚀工艺", wordPhrases: ["dry etching", "wet etching", "etching profile", "etching uniformity"]},
    {word: "dry etch", phonetic: "/draɪ etʃ/", partOfSpeech: "n.", meaning: "干法刻蚀", memoryTip: "dry干 + etch刻蚀 → 干法刻蚀", wordPhrases: ["dry etch process", "dry etch chamber", "dry etch chemistry", "dry etch endpoint"]},
    {word: "wet etch", phonetic: "/wet etʃ/", partOfSpeech: "n.", meaning: "湿法刻蚀", memoryTip: "wet湿 + etch刻蚀 → 湿法刻蚀", wordPhrases: ["wet etch bath", "wet etch solution", "wet etch rate", "wet etch selectivity"]}
], ["plasma etching (等离子刻蚀)", "reactive ion etching (反应离子刻蚀)", "etch rate (刻蚀速率)", "etch selectivity (刻蚀选择比)"], "etch（刻蚀）→ 用化学或物理方法去除材料 → 刻蚀工艺"));

newEntries.push(createEntry(205, 205, "dope", "/dəʊp/", "v.", "掺杂", [
    {word: "dope", phonetic: "/dəʊp/", partOfSpeech: "v.", meaning: "掺杂", memoryTip: "dope掺杂 → 半导体掺杂", wordPhrases: ["ion implantation", "doping concentration", "n-type doping", "p-type doping"]},
    {word: "doping", phonetic: "/ˈdəʊpɪŋ/", partOfSpeech: "n.", meaning: "掺杂工艺", memoryTip: "dope + -ing → 掺杂工艺", wordPhrases: ["doping profile", "doping level", "doping uniformity", "doping activation"]},
    {word: "implant", phonetic: "/ɪmˈplɑːnt/", partOfSpeech: "v.", meaning: "离子注入", memoryTip: "im进入 + plant种植 → 离子注入", wordPhrases: ["implant energy", "implant dose", "ion implantation", "implant profile"]},
    {word: "diffusion", phonetic: "/dɪˈfjuːʒn/", partOfSpeech: "n.", meaning: "扩散", memoryTip: "dif分开 + fus流 + ion → 扩散", wordPhrases: ["thermal diffusion", "diffusion coefficient", "diffusion furnace", "solid solubility"]}
], ["ion implantation (离子注入)", "doping concentration (掺杂浓度)", "n-type doping (N型掺杂)", "p-type doping (P型掺杂)"], "dope（掺杂）→ 向半导体中添加杂质改变导电性 → 掺杂工艺"));

newEntries.push(createEntry(206, 206, "deposit", "/dɪˈpɒzɪt/", "v.", "沉积", [
    {word: "deposit", phonetic: "/dɪˈpɒzɪt/", partOfSpeech: "v.", meaning: "沉积", memoryTip: "de向下 + posit放 → 沉积", wordPhrases: ["thin film deposition", "chemical vapor deposition", "physical vapor deposition", "deposition rate"]},
    {word: "CVD", phonetic: "/ˌsiː viː ˈdiː/", partOfSpeech: "n.", meaning: "化学气相沉积", memoryTip: "Chemical Vapor Deposition → 化学气相沉积", wordPhrases: ["LPCVD", "PECVD", "CVD chamber", "CVD process"]},
    {word: "PVD", phonetic: "/ˌpiː viː ˈdiː/", partOfSpeech: "n.", meaning: "物理气相沉积", memoryTip: "Physical Vapor Deposition → 物理气相沉积", wordPhrases: ["sputtering", "evaporation", "PVD chamber", "PVD film"]},
    {word: "ALD", phonetic: "/ˌeɪ el ˈdiː/", partOfSpeech: "n.", meaning: "原子层沉积", memoryTip: "Atomic Layer Deposition → 原子层沉积", wordPhrases: ["ALD process", "ALD film", "ALD precursor", "thermal ALD"]}
], ["thin film deposition (薄膜沉积)", "chemical vapor deposition (化学气相沉积)", "physical vapor deposition (物理气相沉积)", "deposition rate (沉积速率)"], "deposit（沉积）→ 在晶圆表面沉积薄膜材料 → 沉积工艺"));

newEntries.push(createEntry(207, 207, "photoresist", "/ˌfəʊtəʊrɪˈzɪst/", "n.", "光刻胶", [
    {word: "photoresist", phonetic: "/ˌfəʊtəʊrɪˈzɪst/", partOfSpeech: "n.", meaning: "光刻胶", memoryTip: "photo光 + resist抵抗 → 光刻胶", wordPhrases: ["positive resist", "negative resist", "photoresist coating", "photoresist stripping"]},
    {word: "resist", phonetic: "/rɪˈzɪst/", partOfSpeech: "n.", meaning: "抗蚀剂", memoryTip: "re反 + sist站 → 抵抗 → 抗蚀剂", wordPhrases: ["resist thickness", "resist pattern", "resist residue", "resist adhesion"]},
    {word: "PR", phonetic: "/piː ɑːr/", partOfSpeech: "n.", meaning: "光刻胶", memoryTip: "PhotoResist缩写 → 光刻胶", wordPhrases: ["PR coating", "PR development", "PR thickness", "PR stripping"]},
    {word: "coating", phonetic: "/ˈkəʊtɪŋ/", partOfSpeech: "n.", meaning: "涂布", memoryTip: "coat涂层 + -ing → 涂布", wordPhrases: ["spin coating", "spray coating", "coating uniformity", "coating thickness"]}
], ["positive resist (正胶)", "negative resist (负胶)", "photoresist coating (光刻胶涂布)", "photoresist stripping (光刻胶去除)"], "photoresist（光刻胶）→ 对光敏感的高分子材料 → 光刻工艺核心材料"));

newEntries.push(createEntry(208, 208, "mask", "/mɑːsk/", "n.", "掩膜版", [
    {word: "mask", phonetic: "/mɑːsk/", partOfSpeech: "n.", meaning: "掩膜版", memoryTip: "mask面具 → 掩膜版", wordPhrases: ["mask design", "mask alignment", "binary mask", "phase shift mask"]},
    {word: "reticle", phonetic: "/ˈretɪkl/", partOfSpeech: "n.", meaning: "掩膜版", memoryTip: "reticle标线片 → 光刻掩膜版", wordPhrases: ["reticle stage", "reticle library", "reticle inspection", "reticle defect"]},
    {word: "photomask", phonetic: "/ˈfəʊtəʊmɑːsk/", partOfSpeech: "n.", meaning: "光掩膜", memoryTip: "photo光 + mask掩膜 → 光掩膜", wordPhrases: ["photomask fabrication", "photomask inspection", "photomask repair", "photomask blank"]},
    {word: "stencil", phonetic: "/ˈstensl/", partOfSpeech: "n.", meaning: "掩模", memoryTip: "stencil模板 → 掩模", wordPhrases: ["stencil mask", "nanoimprint stencil", "stencil lithography", "stencil pattern"]}
], ["mask design (掩膜版设计)", "mask alignment (掩膜对准)", "binary mask (二元掩膜)", "phase shift mask (相移掩膜)"], "mask（掩膜版）→ 刻有电路图案的透明版 → 光刻模板"));

newEntries.push(createEntry(209, 209, "clean", "/kliːn/", "v.", "清洗", [
    {word: "clean", phonetic: "/kliːn/", partOfSpeech: "v.", meaning: "清洗", memoryTip: "clean清洁 → 晶圆清洗", wordPhrases: ["wafer cleaning", "wet cleaning", "dry cleaning", "particle removal"]},
    {word: "rinse", phonetic: "/rɪns/", partOfSpeech: "v.", meaning: "冲洗", memoryTip: "rinse冲洗 → 清洗步骤", wordPhrases: ["rinse step", "DI water rinse", "rinse tank", "rinse dry"]},
    {word: "RCA", phonetic: "/ˌɑːr siː ˈeɪ/", partOfSpeech: "n.", meaning: "RCA清洗", memoryTip: "Radio Corporation of America → RCA标准清洗", wordPhrases: ["RCA clean", "RCA SC-1", "RCA SC-2", "modified RCA"]},
    {word: "particle", phonetic: "/ˈpɑːrtɪkl/", partOfSpeech: "n.", meaning: "颗粒", memoryTip: "part部分 + icle小 → 颗粒", wordPhrases: ["particle count", "particle detection", "particle contamination", "killer defect"]}
], ["wafer cleaning (晶圆清洗)", "wet cleaning (湿法清洗)", "dry cleaning (干法清洗)", "particle removal (颗粒去除)"], "clean（清洗）→ 去除晶圆表面污染物 → 关键制程步骤"));

newEntries.push(createEntry(210, 210, "anneal", "/əˈniːl/", "v.", "退火", [
    {word: "anneal", phonetic: "/əˈniːl/", partOfSpeech: "v.", meaning: "退火", memoryTip: "anneal退火 → 热处理工艺", wordPhrases: ["thermal annealing", "laser annealing", "spike anneal", "annealing temperature"]},
    {word: "annealing", phonetic: "/əˈniːlɪŋ/", partOfSpeech: "n.", meaning: "退火工艺", memoryTip: "anneal + -ing → 退火工艺", wordPhrases: ["furnace annealing", "rapid thermal annealing", "laser annealing", "microwave annealing"]},
    {word: "RTA", phonetic: "/ˌɑːr tiː ˈeɪ/", partOfSpeech: "n.", meaning: "快速热退火", memoryTip: "Rapid Thermal Annealing → 快速热退火", wordPhrases: ["RTA process", "RTA system", "spike RTA", "millisecond RTA"]},
    {word: "furnace", phonetic: "/ˈfɜːrnɪs/", partOfSpeech: "n.", meaning: "炉管", memoryTip: "furnace炉子 → 退火炉", wordPhrases: ["diffusion furnace", "batch furnace", "vertical furnace", "furnace tube"]}
], ["thermal annealing (热退火)", "laser annealing (激光退火)", "spike anneal (尖峰退火)", "annealing temperature (退火温度)"], "anneal（退火）→ 加热后缓慢冷却修复晶格 → 热处理工艺"));

console.log(`Generated ${newEntries.length} entries so far...`);

// Continue with more entries (211-500)
// Additional entries will be added below...

module.exports = newEntries;
