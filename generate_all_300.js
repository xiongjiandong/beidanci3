const fs = require('fs');

// Read existing data
const rawData = fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8');
const data = JSON.parse(rawData);

console.log('Current entries:', data.length);

// Define 300 semiconductor roots (id 201-500, frequency 201-500)
const rootDefinitions = [];

// Helper to add entries
function addEntry(id, root, phonetic, meaning, pos, mnemonic) {
  rootDefinitions.push({ id, root, phonetic, meaning, pos, mnemonic });
}

// ID 201-250: Core process and material terms
addEntry(201, "dielectric", "/ˌdaɪəˈlektrɪk/", "电介质", "n./adj.", "dia-穿过 + electric电 → 不导电的物质 → 电介质");
addEntry(202, "substrate", "/ˈsʌbstreɪt/", "衬底", "n.", "sub-下面 + strate层 → 最底层的支撑材料 → 衬底");
addEntry(203, "oxide", "/ˈɒksaɪd/", "氧化物", "n.", "ox-氧 + -ide化合物 → 氧化物");
addEntry(204, "implant", "/ɪmˈplɑːnt/", "注入", "v./n.", "im-进入 + plant种植 → 将离子种入材料 → 离子注入");
addEntry(205, "dopant", "/ˈdoʊpənt/", "掺杂剂", "n.", "dope掺杂 + -ant剂 → 掺杂剂");
addEntry(206, "epitaxy", "/ɪˈpɪtəksi/", "外延", "n.", "epi-上面 + taxy排列 → 在上面排列生长 → 外延");
addEntry(207, "diffusion", "/dɪˈfjuːʒən/", "扩散", "n.", "dif-分开 + fus流动 + -ion → 向四周流动 → 扩散");
addEntry(208, "oxidation", "/ˌɒksɪˈdeɪʃən/", "氧化", "n.", "oxid-氧 + -ation → 氧化过程");
addEntry(209, "etchant", "/ˈetʃənt/", "蚀刻剂", "n.", "etch蚀刻 + -ant剂 → 蚀刻剂");
addEntry(210, "photoresist", "/ˌfoʊtoʊrɪˈzɪst/", "光刻胶", "n.", "photo光 + resist抵抗 → 光敏抗蚀剂 → 光刻胶");
addEntry(211, "mask", "/mɑːsk/", "掩膜", "n./v.", "mask面具 → 遮住不需要曝光的部分 → 掩膜");
addEntry(212, "alignment", "/əˈlaɪnmənt/", "对准", "n.", "a-向 + line线 + -ment → 对齐到一条线 → 对准");
addEntry(213, "exposure", "/ɪkˈspəʊʒər/", "曝光", "n.", "ex-出 + pos放 + -ure → 放出来让光照射 → 曝光");
addEntry(214, "development", "/dɪˈveləpmənt/", "显影", "n.", "de-相反 + velop包裹 → 展开 → 显影过程");
addEntry(215, "deposition", "/ˌdepəˈzɪʃən/", "沉积", "n.", "de-下 + pos放 + -ition → 放下沉积 → 沉积");
addEntry(216, "sputtering", "/ˈspʌtərɪŋ/", "溅射", "n.", "sputter飞溅 + -ing → 原子飞溅沉积 → 溅射");
addEntry(217, "evaporation", "/ɪˌvæpəˈreɪʃən/", "蒸发", "n.", "e-出 + vapor蒸汽 + -ation → 变成蒸汽 → 蒸发");
addEntry(218, "CVD", "/siː viː diː/", "化学气相沉积", "n.", "Chemical Vapor Deposition缩写 → 化学气相沉积");
addEntry(219, "PVD", "/piː viː diː/", "物理气相沉积", "n.", "Physical Vapor Deposition缩写 → 物理气相沉积");
addEntry(220, "ALD", "/eɪ el diː/", "原子层沉积", "n.", "Atomic Layer Deposition缩写 → 原子层沉积");
addEntry(221, "anneal", "/əˈniːl/", "退火", "v./n.", "an-加强 + neal烘烤 → 加热后慢冷 → 退火");
addEntry(222, "planarization", "/ˌplænəraɪˈzeɪʃən/", "平坦化", "n.", "planar平面 + -ization → 使平面化 → 平坦化");
addEntry(223, "CMP", "/siː em piː/", "化学机械抛光", "n.", "Chemical Mechanical Planarization缩写 → 化学机械抛光");
addEntry(224, "metallization", "/məˌtælaɪˈzeɪʃən/", "金属化", "n.", "metal金属 + -lization → 金属化过程");
addEntry(225, "interconnect", "/ˌɪntərkəˈnekt/", "互连", "v./n.", "inter-之间 + connect连接 → 元件间连接 → 互连");
addEntry(226, "via", "/ˈvaɪə/", "通孔", "n.", "via经过 → 层间连接的通道 → 通孔");
addEntry(227, "contact", "/ˈkɒntækt/", "接触孔", "n.", "con-共同 + tact接触 → 硅与金属接触处 → 接触孔");
addEntry(228, "plug", "/plʌɡ/", "插塞", "n./v.", "plug插头 → 填充通孔的材料 → 插塞");
addEntry(229, "barrier", "/ˈbæriər/", "阻挡层", "n.", "bar阻挡 + -rier → 阻挡扩散的层 → 阻挡层");
addEntry(230, "seed", "/siːd/", "种子层", "n.", "seed种子 → 电镀生长的起始层 → 种子层");
addEntry(231, "electromigration", "/ɪˌlektrəʊmaɪˈɡreɪʃən/", "电迁移", "n.", "electro-电 + migration迁移 → 电子风导致的金属迁移");
addEntry(232, "stress", "/stres/", "应力", "n./v.", "stress压力 → 材料内部的机械应力");
addEntry(233, "strain", "/streɪn/", "应变", "n./v.", "strain拉紧 → 材料受力后的变形 → 应变");
addEntry(234, "dislocation", "/ˌdɪsləʊˈkeɪʃən/", "位错", "n.", "dis-分离 + location位置 → 原子位置错排 → 位错");
addEntry(235, "defect", "/ˈdiːfekt/", "缺陷", "n.", "de-不 + fect做 → 没做好的地方 → 缺陷");
addEntry(236, "vacancy", "/ˈveɪkənsi/", "空位", "n.", "vac-空 + -ancy → 晶格中缺失原子 → 空位");
addEntry(237, "interstitial", "/ˌɪntərˈstɪʃəl/", "间隙", "n./adj.", "inter-之间 + stit站 + -ial → 站在间隙中 → 间隙");
addEntry(238, "impurity", "/ɪmˈpjʊərəti/", "杂质", "n.", "im-不 + pure纯 + -ity → 不纯的物质 → 杂质");
addEntry(239, "contamination", "/kənˌtæmɪˈneɪʃən/", "污染", "n.", "con-共同 + tamin接触 + -ation → 接触污染物 → 污染");
addEntry(240, "particle", "/ˈpɑːrtɪkl/", "颗粒", "n.", "part部分 + -icle小 → 小颗粒 → 微粒");
addEntry(241, "scratch", "/skrætʃ/", "划痕", "n./v.", "scratch抓 → 表面抓痕 → 划痕");
addEntry(242, "residue", "/ˈrezɪdjuː/", "残留物", "n.", "re-回 + sid坐 + -ue → 留下的东西 → 残留物");
addEntry(243, "corrosion", "/kəˈrəʊʒən/", "腐蚀", "n.", "cor-完全 + ros咬 + -ion → 咬坏 → 腐蚀");
addEntry(244, "electrolyte", "/ɪˈlektrəlaɪt/", "电解质", "n.", "electro-电 + lyte溶解 → 导电的溶液 → 电解质");
addEntry(245, "electrode", "/ɪˈlektrəʊd/", "电极", "n.", "electro-电 + -ode路 → 电路的端点 → 电极");
addEntry(246, "anode", "/ˈænəʊd/", "阳极", "n.", "ana-上 + -ode路 → 电流向上的极 → 阳极");
addEntry(247, "cathode", "/ˈkæθəʊd/", "阴极", "n.", "cath-下 + -ode路 → 电流向下的极 → 阴极");
addEntry(248, "electrostatic", "/ɪˌlektrəʊˈstætɪk/", "静电", "adj.", "electro-电 + stat-静止 + -ic → 静止的电 → 静电");
addEntry(249, "discharge", "/dɪsˈtʃɑːrdʒ/", "放电", "v./n.", "dis-相反 + charge充电 → 相反于充电 → 放电");
addEntry(250, "breakdown", "/ˈbreɪkdaʊn/", "击穿", "n.", "break破坏 + down向下 → 绝缘被破坏 → 击穿");

console.log('Generated definitions count:', rootDefinitions.length);

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

// Generate all entries
const newEntries = rootDefinitions.map(createEntry);

// Combine with existing data
const combinedData = [...data, ...newEntries];

console.log(`Combined entries: ${combinedData.length}`);
console.log(`New entries added: ${newEntries.length}`);
console.log(`ID range: ${combinedData[0].id} to ${combinedData[combinedData.length-1].id}`);

// Write back to file
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', JSON.stringify(combinedData, null, 2));
console.log('Successfully updated semiconductor.json');
