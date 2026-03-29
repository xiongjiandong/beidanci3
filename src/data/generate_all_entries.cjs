const fs = require('fs');

// Read existing file
const existingData = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));
console.log('Existing entries:', existingData.length);

// Define all 300 new entries
const newEntries = [];

function createEntry(id, freq, root, phonetic, pos, meaning, words, phrases, mnemonic) {
    return {
        id: id,
        root: root,
        phonetic: phonetic,
        partOfSpeech: pos,
        frequency: freq,
        category: '半导体',
        words: words.map((w, idx) => ({
            word: w.word,
            phonetic: w.phonetic,
            partOfSpeech: w.partOfSpeech || pos,
            meaning: w.meaning,
            memoryTip: w.memoryTip,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases.map(p => p.split(' (')[0]),
            wordPhrases: w.wordPhrases || [
                w.word + ' technology',
                w.word + ' process',
                w.word + ' equipment',
                w.word + ' application'
            ]
        })),
        phrases: phrases,
        mnemonic: mnemonic,
        meaning: meaning
    };
}

// ========== 晶圆制造 (201-230) ==========

newEntries.push(createEntry(201, 201, 'wafer', '/ˈweɪfər/', 'n.', '晶圆', [
    {word: 'wafer', phonetic: '/ˈweɪfər/', meaning: '晶圆', memoryTip: 'wafer薄片 → 半导体晶圆'},
    {word: 'wafer fab', phonetic: '/ˈweɪfər fæb/', meaning: '晶圆厂', memoryTip: 'wafer晶圆 + fab工厂 → 晶圆厂'},
    {word: 'wafer sort', phonetic: '/ˈweɪfər sɔːrt/', meaning: '晶圆测试', memoryTip: 'wafer晶圆 + sort分类 → 晶圆测试'},
    {word: 'wafer dicing', phonetic: '/ˈweɪfər ˈdaɪsɪŋ/', meaning: '晶圆切割', memoryTip: 'wafer晶圆 + dicing切割 → 晶圆切割'}
], ['wafer fabrication (晶圆制造)', 'wafer processing (晶圆加工)', 'wafer inspection (晶圆检测)', 'wafer bonding (晶圆键合)'], 'wafer（晶圆）→ 半导体的基础材料薄片 → 晶圆'));

newEntries.push(createEntry(202, 202, 'fab', '/fæb/', 'n.', '晶圆厂', [
    {word: 'fab', phonetic: '/fæb/', meaning: '晶圆厂', memoryTip: 'fabrication缩写 → 晶圆厂'},
    {word: 'foundry', phonetic: '/ˈfaʊndri/', meaning: '代工厂', memoryTip: 'found铸造 + -ry场所 → 代工厂'},
    {word: 'IDM', phonetic: '/ˌaɪ diː ˈem/', meaning: '集成器件制造商', memoryTip: 'Integrated Device Manufacturer → 垂直整合制造'},
    {word: 'fabless', phonetic: '/ˈfeɪbləs/', meaning: '无晶圆厂的', memoryTip: 'fab + -less无 → 无晶圆厂的'}
], ['fab capacity (晶圆厂产能)', 'fab utilization (晶圆厂利用率)', 'foundry service (代工服务)', 'fabless company (无晶圆厂公司)'], 'fab（晶圆厂）→ fabrication facility → 半导体制造工厂'));

newEntries.push(createEntry(203, 203, 'lithography', '/lɪˈθɒɡrəfi/', 'n.', '光刻', [
    {word: 'lithography', phonetic: '/lɪˈθɒɡrəfi/', meaning: '光刻', memoryTip: 'litho石 + graphy写 → 光刻'},
    {word: 'photolithography', phonetic: '/ˌfəʊtəʊlɪˈθɒɡrəfi/', meaning: '光刻技术', memoryTip: 'photo光 + lithography光刻 → 光刻技术'},
    {word: 'EUV', phonetic: '/ˌiː juː ˈviː/', meaning: '极紫外光刻', memoryTip: 'Extreme Ultraviolet → 极紫外光刻'},
    {word: 'scanner', phonetic: '/ˈskænər/', meaning: '扫描仪', memoryTip: 'scan扫描 + -er器 → 光刻扫描仪'}
], ['optical lithography (光学光刻)', 'EUV lithography (EUV光刻)', 'immersion lithography (浸没式光刻)', 'lithography machine (光刻机)'], 'lithography（光刻）→ 用光在硅片上刻画电路图案 → 光刻技术'));

newEntries.push(createEntry(204, 204, 'etch', '/etʃ/', 'v.', '刻蚀', [
    {word: 'etch', phonetic: '/etʃ/', meaning: '刻蚀', memoryTip: 'etch腐蚀 → 刻蚀'},
    {word: 'etching', phonetic: '/ˈetʃɪŋ/', meaning: '刻蚀工艺', memoryTip: 'etch + -ing → 刻蚀工艺'},
    {word: 'dry etch', phonetic: '/draɪ etʃ/', meaning: '干法刻蚀', memoryTip: 'dry干 + etch刻蚀 → 干法刻蚀'},
    {word: 'wet etch', phonetic: '/wet etʃ/', meaning: '湿法刻蚀', memoryTip: 'wet湿 + etch刻蚀 → 湿法刻蚀'}
], ['plasma etching (等离子刻蚀)', 'reactive ion etching (反应离子刻蚀)', 'etch rate (刻蚀速率)', 'etch selectivity (刻蚀选择比)'], 'etch（刻蚀）→ 用化学或物理方法去除材料 → 刻蚀工艺'));

newEntries.push(createEntry(205, 205, 'dope', '/dəʊp/', 'v.', '掺杂', [
    {word: 'dope', phonetic: '/dəʊp/', meaning: '掺杂', memoryTip: 'dope掺杂 → 半导体掺杂'},
    {word: 'doping', phonetic: '/ˈdəʊpɪŋ/', meaning: '掺杂工艺', memoryTip: 'dope + -ing → 掺杂工艺'},
    {word: 'implant', phonetic: '/ɪmˈplɑːnt/', meaning: '离子注入', memoryTip: 'im进入 + plant种植 → 离子注入'},
    {word: 'diffusion', phonetic: '/dɪˈfjuːʒn/', meaning: '扩散', memoryTip: 'dif分开 + fus流 + ion → 扩散'}
], ['ion implantation (离子注入)', 'doping concentration (掺杂浓度)', 'n-type doping (N型掺杂)', 'p-type doping (P型掺杂)'], 'dope（掺杂）→ 向半导体中添加杂质改变导电性 → 掺杂工艺'));

newEntries.push(createEntry(206, 206, 'deposit', '/dɪˈpɒzɪt/', 'v.', '沉积', [
    {word: 'deposit', phonetic: '/dɪˈpɒzɪt/', meaning: '沉积', memoryTip: 'de向下 + posit放 → 沉积'},
    {word: 'CVD', phonetic: '/ˌsiː viː ˈdiː/', meaning: '化学气相沉积', memoryTip: 'Chemical Vapor Deposition → 化学气相沉积'},
    {word: 'PVD', phonetic: '/ˌpiː viː ˈdiː/', meaning: '物理气相沉积', memoryTip: 'Physical Vapor Deposition → 物理气相沉积'},
    {word: 'ALD', phonetic: '/ˌeɪ el ˈdiː/', meaning: '原子层沉积', memoryTip: 'Atomic Layer Deposition → 原子层沉积'}
], ['thin film deposition (薄膜沉积)', 'chemical vapor deposition (化学气相沉积)', 'physical vapor deposition (物理气相沉积)', 'deposition rate (沉积速率)'], 'deposit（沉积）→ 在晶圆表面沉积薄膜材料 → 沉积工艺'));

newEntries.push(createEntry(207, 207, 'photoresist', '/ˌfəʊtəʊrɪˈzɪst/', 'n.', '光刻胶', [
    {word: 'photoresist', phonetic: '/ˌfəʊtəʊrɪˈzɪst/', meaning: '光刻胶', memoryTip: 'photo光 + resist抵抗 → 光刻胶'},
    {word: 'resist', phonetic: '/rɪˈzɪst/', meaning: '抗蚀剂', memoryTip: 're反 + sist站 → 抵抗 → 抗蚀剂'},
    {word: 'PR', phonetic: '/piː ɑːr/', meaning: '光刻胶', memoryTip: 'PhotoResist缩写 → 光刻胶'},
    {word: 'coating', phonetic: '/ˈkəʊtɪŋ/', meaning: '涂布', memoryTip: 'coat涂层 + -ing → 涂布'}
], ['positive resist (正胶)', 'negative resist (负胶)', 'photoresist coating (光刻胶涂布)', 'photoresist stripping (光刻胶去除)'], 'photoresist（光刻胶）→ 对光敏感的高分子材料 → 光刻工艺核心材料'));

newEntries.push(createEntry(208, 208, 'mask', '/mɑːsk/', 'n.', '掩膜版', [
    {word: 'mask', phonetic: '/mɑːsk/', meaning: '掩膜版', memoryTip: 'mask面具 → 掩膜版'},
    {word: 'reticle', phonetic: '/ˈretɪkl/', meaning: '掩膜版', memoryTip: 'reticle标线片 → 光刻掩膜版'},
    {word: 'photomask', phonetic: '/ˈfəʊtəʊmɑːsk/', meaning: '光掩膜', memoryTip: 'photo光 + mask掩膜 → 光掩膜'},
    {word: 'stencil', phonetic: '/ˈstensl/', meaning: '掩模', memoryTip: 'stencil模板 → 掩模'}
], ['mask design (掩膜版设计)', 'mask alignment (掩膜对准)', 'binary mask (二元掩膜)', 'phase shift mask (相移掩膜)'], 'mask（掩膜版）→ 刻有电路图案的透明版 → 光刻模板'));

newEntries.push(createEntry(209, 209, 'clean', '/kliːn/', 'v.', '清洗', [
    {word: 'clean', phonetic: '/kliːn/', meaning: '清洗', memoryTip: 'clean清洁 → 晶圆清洗'},
    {word: 'rinse', phonetic: '/rɪns/', meaning: '冲洗', memoryTip: 'rinse冲洗 → 清洗步骤'},
    {word: 'RCA', phonetic: '/ˌɑːr siː ˈeɪ/', meaning: 'RCA清洗', memoryTip: 'Radio Corporation of America → RCA标准清洗'},
    {word: 'particle', phonetic: '/ˈpɑːrtɪkl/', meaning: '颗粒', memoryTip: 'part部分 + icle小 → 颗粒'}
], ['wafer cleaning (晶圆清洗)', 'wet cleaning (湿法清洗)', 'dry cleaning (干法清洗)', 'particle removal (颗粒去除)'], 'clean（清洗）→ 去除晶圆表面污染物 → 关键制程步骤'));

newEntries.push(createEntry(210, 210, 'anneal', '/əˈniːl/', 'v.', '退火', [
    {word: 'anneal', phonetic: '/əˈniːl/', meaning: '退火', memoryTip: 'anneal退火 → 热处理工艺'},
    {word: 'annealing', phonetic: '/əˈniːlɪŋ/', meaning: '退火工艺', memoryTip: 'anneal + -ing → 退火工艺'},
    {word: 'RTA', phonetic: '/ˌɑːr tiː ˈeɪ/', meaning: '快速热退火', memoryTip: 'Rapid Thermal Annealing → 快速热退火'},
    {word: 'furnace', phonetic: '/ˈfɜːrnɪs/', meaning: '炉管', memoryTip: 'furnace炉子 → 退火炉'}
], ['thermal annealing (热退火)', 'laser annealing (激光退火)', 'spike anneal (尖峰退火)', 'annealing temperature (退火温度)'], 'anneal（退火）→ 加热后缓慢冷却修复晶格 → 热处理工艺'));

newEntries.push(createEntry(211, 211, 'planarization', '/ˌplænəraɪˈzeɪʃn/', 'n.', '平坦化', [
    {word: 'planarization', phonetic: '/ˌplænəraɪˈzeɪʃn/', meaning: '平坦化', memoryTip: 'planar平面 + ization化 → 平坦化'},
    {word: 'CMP', phonetic: '/ˌsiː em ˈpiː/', meaning: '化学机械抛光', memoryTip: 'Chemical Mechanical Planarization → 化学机械抛光'},
    {word: 'polish', phonetic: '/ˈpɒlɪʃ/', meaning: '抛光', memoryTip: 'polish抛光 → 表面平坦化'},
    {word: 'slurry', phonetic: '/ˈslɜːri/', meaning: '研磨液', memoryTip: 'slurry浆料 → CMP研磨液'}
], ['chemical mechanical polishing (化学机械抛光)', 'global planarization (全局平坦化)', 'CMP process (CMP工艺)', 'dielectric CMP (介质层CMP)'], 'planarization（平坦化）→ 使晶圆表面平整 → CMP工艺'));

newEntries.push(createEntry(212, 212, 'oxidation', '/ˌɒksɪˈdeɪʃn/', 'n.', '氧化', [
    {word: 'oxidation', phonetic: '/ˌɒksɪˈdeɪʃn/', meaning: '氧化', memoryTip: 'oxid氧化 + ation → 氧化'},
    {word: 'oxide', phonetic: '/ˈɒksaɪd/', meaning: '氧化物', memoryTip: 'oxid氧化 + e → 氧化物'},
    {word: 'SiO2', phonetic: '/ˌes aɪ əʊ tuː/', meaning: '二氧化硅', memoryTip: 'Silicon Dioxide → 二氧化硅'},
    {word: 'gate oxide', phonetic: '/ɡeɪt ˈɒksaɪd/', meaning: '栅氧化层', memoryTip: 'gate栅 + oxide氧化物 → 栅氧化层'}
], ['thermal oxidation (热氧化)', 'dry oxidation (干氧氧化)', 'wet oxidation (湿氧氧化)', 'gate oxide (栅氧化层)'], 'oxidation（氧化）→ 硅与氧反应生成SiO2 → 基础工艺'));

newEntries.push(createEntry(213, 213, 'epitaxy', '/ˌepɪˈtæksi/', 'n.', '外延', [
    {word: 'epitaxy', phonetic: '/ˌepɪˈtæksi/', meaning: '外延', memoryTip: 'epi上 + taxis排列 → 外延生长'},
    {word: 'epi', phonetic: '/ˈepi/', meaning: '外延层', memoryTip: 'epitaxy缩写 → 外延层'},
    {word: 'epitaxial', phonetic: '/ˌepɪˈtæksiəl/', meaning: '外延的', memoryTip: 'epitaxy + -ial → 外延的'},
    {word: 'MOCVD', phonetic: '/ˌem əʊ siː viː ˈdiː/', meaning: '金属有机化学气相沉积', memoryTip: 'Metal-Organic CVD → MOCVD'}
], ['epitaxial growth (外延生长)', 'epitaxial layer (外延层)', 'homoepitaxy (同质外延)', 'heteroepitaxy (异质外延)'], 'epitaxy（外延）→ 在单晶衬底上生长单晶薄膜 → 外延工艺'));

newEntries.push(createEntry(214, 214, 'metallization', '/ˌmetəlaɪˈzeɪʃn/', 'n.', '金属化', [
    {word: 'metallization', phonetic: '/ˌmetəlaɪˈzeɪʃn/', meaning: '金属化', memoryTip: 'metal金属 + ization化 → 金属化'},
    {word: 'interconnect', phonetic: '/ˌɪntərkəˈnekt/', meaning: '互连', memoryTip: 'inter之间 + connect连接 → 互连'},
    {word: 'copper', phonetic: '/ˈkɒpər/', meaning: '铜', memoryTip: 'copper铜 → Cu互连'},
    {word: 'aluminum', phonetic: '/əˈluːmɪnəm/', meaning: '铝', memoryTip: 'aluminum铝 → Al互连'}
], ['copper interconnect (铜互连)', 'damascene process (大马士革工艺)', 'dual damascene (双大马士革)', 'metal layer (金属层)'], 'metallization（金属化）→ 形成金属连线实现电路连接 → 金属化工艺'));

newEntries.push(createEntry(215, 215, 'diffusion', '/dɪˈfjuːʒn/', 'n.', '扩散', [
    {word: 'diffusion', phonetic: '/dɪˈfjuːʒn/', meaning: '扩散', memoryTip: 'dif分开 + fus流 → 扩散'},
    {word: 'furnace', phonetic: '/ˈfɜːrnɪs/', meaning: '扩散炉', memoryTip: 'furnace炉 → 扩散炉'},
    {word: 'drive-in', phonetic: '/ˈdraɪv ɪn/', meaning: '推进扩散', memoryTip: 'drive驱动 + in进入 → 推进扩散'},
    {word: 'predeposition', phonetic: '/ˌpriːdepəˈzɪʃn/', meaning: '预沉积', memoryTip: 'pre预 + deposition沉积 → 预沉积'}
], ['thermal diffusion (热扩散)', 'diffusion furnace (扩散炉)', 'diffusion coefficient (扩散系数)', 'solid solubility (固溶度)'], 'diffusion（扩散）→ 杂质在高温下向硅中扩散 → 掺杂工艺'));

newEntries.push(createEntry(216, 216, 'implant', '/ɪmˈplɑːnt/', 'v.', '离子注入', [
    {word: 'implant', phonetic: '/ɪmˈplɑːnt/', meaning: '注入', memoryTip: 'im进入 + plant种植 → 注入'},
    {word: 'implanter', phonetic: '/ɪmˈplɑːntər/', meaning: '离子注入机', memoryTip: 'implant + -er → 注入机'},
    {word: 'accelerator', phonetic: '/əkˈseləreɪtər/', meaning: '加速器', memoryTip: 'accelerate加速 + -or → 加速器'},
    {word: 'beam', phonetic: '/biːm/', meaning: '束流', memoryTip: 'beam光束/束流 → 离子束'}
], ['ion implantation (离子注入)', 'implant energy (注入能量)', 'implant dose (注入剂量)', 'ion beam (离子束)'], 'implant（注入）→ 将离子加速注入硅片 → 精确掺杂'));

newEntries.push(createEntry(217, 217, 'photomask', '/ˈfəʊtəʊmɑːsk/', 'n.', '光掩膜', [
    {word: 'photomask', phonetic: '/ˈfəʊtəʊmɑːsk/', meaning: '光掩膜', memoryTip: 'photo光 + mask掩膜 → 光掩膜'},
    {word: 'mask blank', phonetic: '/mɑːsk blæŋk/', meaning: '掩膜坯', memoryTip: 'mask + blank空白 → 掩膜坯'},
    {word: 'chrome', phonetic: '/krəʊm/', meaning: '铬', memoryTip: 'chrome铬 → 掩膜遮光层'},
    {word: 'quartz', phonetic: '/kwɔːrts/', meaning: '石英', memoryTip: 'quartz石英 → 掩膜基板'}
], ['mask fabrication (掩膜制造)', 'mask inspection (掩膜检测)', 'mask repair (掩膜修复)', 'reticle (掩膜版)'], 'photomask（光掩膜）→ 刻有电路图案的石英版 → 光刻模板'));

newEntries.push(createEntry(218, 218, 'stepper', '/ˈstepər/', 'n.', '步进光刻机', [
    {word: 'stepper', phonetic: '/ˈstepər/', meaning: '步进光刻机', memoryTip: 'step步进 + -er → 步进光刻机'},
    {word: 'scanner', phonetic: '/ˈskænər/', meaning: '扫描光刻机', memoryTip: 'scan扫描 + -er → 扫描光刻机'},
    {word: 'projection', phonetic: '/prəˈdʒekʃn/', meaning: '投影', memoryTip: 'project投影 + ion → 投影'},
    {word: 'aligner', phonetic: '/əˈlaɪnər/', meaning: '对准器', memoryTip: 'align对准 + -er → 对准器'}
], ['step and repeat (步进重复)', 'scan and repeat (扫描重复)', 'projection aligner (投影对准机)', 'exposure tool (曝光设备)'], 'stepper（步进机）→ 步进重复曝光的光刻设备 → 光刻机'));

newEntries.push(createEntry(219, 219, 'resist', '/rɪˈzɪst/', 'n.', '光刻胶', [
    {word: 'resist', phonetic: '/rɪˈzɪst/', meaning: '光刻胶', memoryTip: 'resist抵抗 → 抗蚀剂'},
    {word: 'photoresist', phonetic: '/ˌfəʊtəʊrɪˈzɪst/', meaning: '光刻胶', memoryTip: 'photo光 + resist → 光刻胶'},
    {word: 'developer', phonetic: '/dɪˈveləpər/', meaning: '显影液', memoryTip: 'develop显影 + -er → 显影液'},
    {word: 'solvent', phonetic: '/ˈsɒlvənt/', meaning: '溶剂', memoryTip: 'solve溶解 + -ent → 溶剂'}
], ['positive resist (正胶)', 'negative resist (负胶)', 'resist coating (涂胶)', 'resist stripping (去胶)'], 'resist（光刻胶）→ 抵抗刻蚀的感光材料 → 光刻胶'));

newEntries.push(createEntry(220, 220, 'substrate', '/ˈsʌbstreɪt/', 'n.', '衬底', [
    {word: 'substrate', phonetic: '/ˈsʌbstreɪt/', meaning: '衬底', memoryTip: 'sub下 + stratum层 → 衬底'},
    {word: 'bulk', phonetic: '/bʌlk/', meaning: '体材料', memoryTip: 'bulk大块 → 体硅'},
    {word: 'SOI', phonetic: '/ˌes əʊ ˈaɪ/', meaning: '绝缘体上硅', memoryTip: 'Silicon On Insulator → SOI'},
    {word: 'handle', phonetic: '/ˈhændl/', meaning: '支撑层', memoryTip: 'handle手柄 → 支撑层'}
], ['silicon substrate (硅衬底)', 'substrate material (衬底材料)', 'SOI wafer (SOI晶圆)', 'substrate preparation (衬底准备)'], 'substrate（衬底）→ 承载集成电路的基础材料 → 衬底'));

newEntries.push(createEntry(221, 221, 'chamber', '/ˈtʃeɪmbər/', 'n.', '反应腔', [
    {word: 'chamber', phonetic: '/ˈtʃeɪmbər/', meaning: '反应腔', memoryTip: 'chamber腔室 → 反应腔'},
    {word: 'process chamber', phonetic: '/ˈprəʊses ˈtʃeɪmbər/', meaning: '工艺腔', memoryTip: 'process工艺 + chamber腔 → 工艺腔'},
    {word: 'loadlock', phonetic: '/ˈləʊdlɒk/', meaning: '装载锁', memoryTip: 'load装载 + lock锁 → 装载锁'},
    {word: 'vacuum', phonetic: '/ˈvækjuːm/', meaning: '真空', memoryTip: 'vacuum真空 → 真空腔'}
], ['process chamber (工艺腔)', 'transfer chamber (传送腔)', 'vacuum chamber (真空腔)', 'loadlock chamber (装载腔)'], 'chamber（反应腔）→ 进行工艺反应的封闭空间 → 反应腔'));

newEntries.push(createEntry(222, 222, 'endpoint', '/ˈendpɔɪnt/', 'n.', '终点检测', [
    {word: 'endpoint', phonetic: '/ˈendpɔɪnt/', meaning: '终点', memoryTip: 'end结束 + point点 → 终点'},
    {word: 'detection', phonetic: '/dɪˈtekʃn/', meaning: '检测', memoryTip: 'detect检测 + ion → 检测'},
    {word: 'interferometry', phonetic: '/ˌɪntərfɪˈrɒmɪtri/', meaning: '干涉测量', memoryTip: 'interfer干涉 + ometry测量 → 干涉测量'},
    {word: 'emission', phonetic: '/ɪˈmɪʃn/', meaning: '发射', memoryTip: 'e出 + miss送 + ion → 发射'}
], ['endpoint detection (终点检测)', 'interferometric endpoint (干涉终点检测)', 'OES endpoint (发射光谱终点检测)', 'endpoint signal (终点信号)'], 'endpoint（终点检测）→ 检测工艺结束时刻 → 工艺控制'));

newEntries.push(createEntry(223, 223, 'monitor', '/ˈmɒnɪtər/', 'v.', '监控', [
    {word: 'monitor', phonetic: '/ˈmɒnɪtər/', meaning: '监控', memoryTip: 'monitor监控 → 工艺监控'},
    {word: 'metrology', phonetic: '/məˈtrɒlədʒi/', meaning: '计量', memoryTip: 'metro测量 + logy学 → 计量'},
    {word: 'sensor', phonetic: '/ˈsensər/', meaning: '传感器', memoryTip: 'sense感觉 + -or → 传感器'},
    {word: 'control', phonetic: '/kənˈtrəʊl/', meaning: '控制', memoryTip: 'con共同 + trol → 控制'}
], ['process monitor (工艺监控)', 'in-situ monitor (原位监控)', 'statistical process control (统计过程控制)', 'advanced process control (先进过程控制)'], 'monitor（监控）→ 实时监测工艺参数 → 工艺控制'));

newEntries.push(createEntry(224, 224, 'particle', '/ˈpɑːrtɪkl/', 'n.', '颗粒', [
    {word: 'particle', phonetic: '/ˈpɑːrtɪkl/', meaning: '颗粒', memoryTip: 'part部分 + icle小 → 颗粒'},
    {word: 'contamination', phonetic: '/kənˌtæmɪˈneɪʃn/', meaning: '污染', memoryTip: 'contamin污染 + ation → 污染'},
    {word: 'defect', phonetic: '/ˈdiːfekt/', meaning: '缺陷', memoryTip: 'de不 + fect做 → 缺陷'},
    {word: 'yield', phonetic: '/jiːld/', meaning: '良率', memoryTip: 'yield产出 → 良率'}
], ['particle count (颗粒数)', 'particle detection (颗粒检测)', 'particle contamination (颗粒污染)', 'killer defect (致命缺陷)'], 'particle（颗粒）→ 影响良率的微小污染物 → 颗粒控制'));

newEntries.push(createEntry(225, 225, 'photon', '/ˈfəʊtɒn/', 'n.', '光子', [
    {word: 'photon', phonetic: '/ˈfəʊtɒn/', meaning: '光子', memoryTip: 'photo光 + -on粒子 → 光子'},
    {word: 'wavelength', phonetic: '/ˈweɪvleŋθ/', meaning: '波长', memoryTip: 'wave波 + length长 → 波长'},
    {word: 'exposure', phonetic: '/ɪkˈspəʊʒər/', meaning: '曝光', memoryTip: 'ex出 + pos放 + ure → 曝光'},
    {word: 'dose', phonetic: '/dəʊs/', meaning: '剂量', memoryTip: 'dose剂量 → 曝光剂量'}
], ['photon energy (光子能量)', '193nm wavelength (193nm波长)', 'exposure dose (曝光剂量)', 'EUV photon (EUV光子)'], 'photon（光子）→ 光的量子粒子 → 光刻光源'));

newEntries.push(createEntry(226, 226, 'plasma', '/ˈplæzmə/', 'n.', '等离子体', [
    {word: 'plasma', phonetic: '/ˈplæzmə/', meaning: '等离子体', memoryTip: 'plasma血浆 → 等离子体'},
    {word: 'ion', phonetic: '/ˈaɪən/', meaning: '离子', memoryTip: 'ion离子 → 电离粒子'},
    {word: 'electron', phonetic: '/ɪˈlektrɒn/', meaning: '电子', memoryTip: 'electr电 + on → 电子'},
    {word: 'radical', phonetic: '/ˈrædɪkl/', meaning: '自由基', memoryTip: 'radical激进的 → 自由基'}
], ['plasma etching (等离子刻蚀)', 'plasma CVD (等离子CVD)', 'plasma density (等离子密度)', 'plasma damage (等离子损伤)'], 'plasma（等离子体）→ 电离气体状态 → 刻蚀/CVD工艺'));

newEntries.push(createEntry(227, 227, 'pressure', '/ˈpreʃər/', 'n.', '压力', [
    {word: 'pressure', phonetic: '/ˈpreʃər/', meaning: '压力', memoryTip: 'press压 + ure → 压力'},
    {word: 'vacuum', phonetic: '/ˈvækjuːm/', meaning: '真空', memoryTip: 'vacu空 + um → 真空'},
    {word: 'atmosphere', phonetic: '/ˈætməsfɪər/', meaning: '大气压', memoryTip: 'atmo气 + sphere球 → 大气'},
    {word: 'torr', phonetic: '/tɔːr/', meaning: '托', memoryTip: 'torr托 → 压力单位'}
], ['low pressure (低压)', 'high vacuum (高真空)', 'base pressure (基础压力)', 'process pressure (工艺压力)'], 'pressure（压力）→ 工艺腔内的气压控制 → 工艺参数'));

newEntries.push(createEntry(228, 228, 'temperature', '/ˈtemprətʃər/', 'n.', '温度', [
    {word: 'temperature', phonetic: '/ˈtemprətʃər/', meaning: '温度', memoryTip: 'temper调节 + ature → 温度'},
    {word: 'heating', phonetic: '/ˈhiːtɪŋ/', meaning: '加热', memoryTip: 'heat热 + -ing → 加热'},
    {word: 'cooling', phonetic: '/ˈkuːlɪŋ/', meaning: '冷却', memoryTip: 'cool冷 + -ing → 冷却'},
    {word: 'thermocouple', phonetic: '/ˈθɜːrməkʌpl/', meaning: '热电偶', memoryTip: 'thermo热 + couple偶 → 热电偶'}
], ['process temperature (工艺温度)', 'annealing temperature (退火温度)', 'temperature ramp (温度斜坡)', 'temperature uniformity (温度均匀性)'], 'temperature（温度）→ 关键工艺参数之一 → 温度控制'));

newEntries.push(createEntry(229, 229, 'throughput', '/ˈθruːpʊt/', 'n.', '产能', [
    {word: 'throughput', phonetic: '/ˈθruːpʊt/', meaning: '产能', memoryTip: 'through通过 + put放 → 产能'},
    {word: 'WPH', phonetic: '/ˌdʌbljuː piː ˈeɪtʃ/', meaning: '每小时晶圆数', memoryTip: 'Wafers Per Hour → WPH'},
    {word: 'uptime', phonetic: '/ˈʌptaɪm/', meaning: '运行时间', memoryTip: 'up上 + time时间 → 运行时间'},
    {word: 'MTBF', phonetic: '/ˌem tiː biː ˈef/', meaning: '平均故障间隔', memoryTip: 'Mean Time Between Failures → MTBF'}
], ['equipment throughput (设备产能)', 'fab throughput (晶圆厂产能)', 'throughput optimization (产能优化)', 'high throughput (高产能)'], 'throughput（产能）→ 单位时间处理的晶圆数 → 生产效率'));

newEntries.push(createEntry(230, 230, 'batch', '/bætʃ/', 'n.', '批次', [
    {word: 'batch', phonetic: '/bætʃ/', meaning: '批次', memoryTip: 'batch批量 → 批次'},
    {word: 'lot', phonetic: '/lɒt/', meaning: '批次', memoryTip: 'lot批次 → 生产批次'},
    {word: 'wafer lot', phonetic: '/ˈweɪfər lɒt/', meaning: '晶圆批次', memoryTip: 'wafer晶圆 + lot批次 → 晶圆批次'},
    {word: 'batch processing', phonetic: '/bætʃ ˈprəʊsesɪŋ/', meaning: '批量处理', memoryTip: 'batch + processing → 批量处理'}
], ['batch processing (批量处理)', 'single wafer processing (单片处理)', 'lot tracking (批次追踪)', 'batch size (批次大小)'], 'batch（批次）→ 同时处理的晶圆组 → 生产组织'));

console.log('Created entries 201-230. Total:', newEntries.length);

// Continue with more entries (231-500)...
// For now, let's save what we have and continue

fs.writeFileSync('f:/claudeanli/beidanci3/src/data/new_entries_201_230.json', JSON.stringify(newEntries, null, 2));
console.log('Saved entries 201-230');
