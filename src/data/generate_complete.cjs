const fs = require('fs');

// Read existing file
const existingData = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));
console.log('Existing entries:', existingData.length);

// Create 300 new entries (id 201-500, frequency 201-500)
const newEntries = [];

function createEntry(id, freq, root, phonetic, pos, meaning, words, phrases, mnemonic) {
    const wordPhrases = words.map(w => [
        w[0] + ' technology',
        w[0] + ' process',
        w[0] + ' equipment',
        w[0] + ' application'
    ]);

    return {
        id: id,
        root: root,
        phonetic: phonetic,
        partOfSpeech: pos,
        frequency: freq,
        category: '半导体',
        words: words.map((w, idx) => ({
            word: w[0],
            phonetic: w[1],
            partOfSpeech: w[2] || pos,
            meaning: w[3],
            memoryTip: w[4],
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases.map(p => p.split(' (')[0]),
            wordPhrases: wordPhrases[idx]
        })),
        phrases: phrases,
        mnemonic: mnemonic,
        meaning: meaning
    };
}

function processBatch(batchData) {
    batchData.forEach(entry => {
        const [id, root, phonetic, pos, meaning, words, phrases, mnemonic] = entry;
        newEntries.push(createEntry(id, id, root, phonetic, pos, meaning, words, phrases, mnemonic));
    });
}

// Data arrays - 300 entries total
// Entries 201-230: 晶圆制造基础
const entries201_230 = [
    [201, 'wafer', '/ˈweɪfər/', 'n.', '晶圆', [['wafer','/ˈweɪfər/','n.','晶圆','wafer薄片 → 半导体晶圆'],['wafer fab','/ˈweɪfər fæb/','n.','晶圆厂','wafer晶圆 + fab工厂 → 晶圆厂'],['wafer sort','/ˈweɪfər sɔːrt/','n.','晶圆测试','wafer晶圆 + sort分类 → 晶圆测试'],['wafer dicing','/ˈweɪfər ˈdaɪsɪŋ/','n.','晶圆切割','wafer晶圆 + dicing切割 → 晶圆切割']], ['wafer fabrication (晶圆制造)', 'wafer processing (晶圆加工)', 'wafer inspection (晶圆检测)', 'wafer bonding (晶圆键合)'], 'wafer（晶圆）→ 半导体的基础材料薄片 → 晶圆'],
    [202, 'fab', '/fæb/', 'n.', '晶圆厂', [['fab','/fæb/','n.','晶圆厂','fabrication缩写 → 晶圆厂'],['foundry','/ˈfaʊndri/','n.','代工厂','found铸造 + -ry场所 → 代工厂'],['IDM','/ˌaɪ diː ˈem/','n.','集成器件制造商','Integrated Device Manufacturer → 垂直整合制造'],['fabless','/ˈfeɪbləs/','adj.','无晶圆厂的','fab + -less无 → 无晶圆厂的']], ['fab capacity (晶圆厂产能)', 'fab utilization (晶圆厂利用率)', 'foundry service (代工服务)', 'fabless company (无晶圆厂公司)'], 'fab（晶圆厂）→ fabrication facility → 半导体制造工厂'],
    [203, 'lithography', '/lɪˈθɒɡrəfi/', 'n.', '光刻', [['lithography','/lɪˈθɒɡrəfi/','n.','光刻','litho石 + graphy写 → 光刻'],['photolithography','/ˌfəʊtəʊlɪˈθɒɡrəfi/','n.','光刻技术','photo光 + lithography光刻 → 光刻技术'],['EUV','/ˌiː juː ˈviː/','n.','极紫外光刻','Extreme Ultraviolet → 极紫外光刻'],['scanner','/ˈskænər/','n.','扫描仪','scan扫描 + -er器 → 光刻扫描仪']], ['optical lithography (光学光刻)', 'EUV lithography (EUV光刻)', 'immersion lithography (浸没式光刻)', 'lithography machine (光刻机)'], 'lithography（光刻）→ 用光在硅片上刻画电路图案 → 光刻技术'],
    [204, 'etch', '/etʃ/', 'v.', '刻蚀', [['etch','/etʃ/','v.','刻蚀','etch腐蚀 → 刻蚀'],['etching','/ˈetʃɪŋ/','n.','刻蚀工艺','etch + -ing → 刻蚀工艺'],['dry etch','/draɪ etʃ/','n.','干法刻蚀','dry干 + etch刻蚀 → 干法刻蚀'],['wet etch','/wet etʃ/','n.','湿法刻蚀','wet湿 + etch刻蚀 → 湿法刻蚀']], ['plasma etching (等离子刻蚀)', 'reactive ion etching (反应离子刻蚀)', 'etch rate (刻蚀速率)', 'etch selectivity (刻蚀选择比)'], 'etch（刻蚀）→ 用化学或物理方法去除材料 → 刻蚀工艺'],
    [205, 'dope', '/dəʊp/', 'v.', '掺杂', [['dope','/dəʊp/','v.','掺杂','dope掺杂 → 半导体掺杂'],['doping','/ˈdəʊpɪŋ/','n.','掺杂工艺','dope + -ing → 掺杂工艺'],['implant','/ɪmˈplɑːnt/','v.','离子注入','im进入 + plant种植 → 离子注入'],['diffusion','/dɪˈfjuːʒn/','n.','扩散','dif分开 + fus流 + ion → 扩散']], ['ion implantation (离子注入)', 'doping concentration (掺杂浓度)', 'n-type doping (N型掺杂)', 'p-type doping (P型掺杂)'], 'dope（掺杂）→ 向半导体中添加杂质改变导电性 → 掺杂工艺'],
    [206, 'deposit', '/dɪˈpɒzɪt/', 'v.', '沉积', [['deposit','/dɪˈpɒzɪt/','v.','沉积','de向下 + posit放 → 沉积'],['CVD','/ˌsiː viː ˈdiː/','n.','化学气相沉积','Chemical Vapor Deposition → 化学气相沉积'],['PVD','/ˌpiː viː ˈdiː/','n.','物理气相沉积','Physical Vapor Deposition → 物理气相沉积'],['ALD','/ˌeɪ el ˈdiː/','n.','原子层沉积','Atomic Layer Deposition → 原子层沉积']], ['thin film deposition (薄膜沉积)', 'chemical vapor deposition (化学气相沉积)', 'physical vapor deposition (物理气相沉积)', 'deposition rate (沉积速率)'], 'deposit（沉积）→ 在晶圆表面沉积薄膜材料 → 沉积工艺'],
    [207, 'photoresist', '/ˌfəʊtəʊrɪˈzɪst/', 'n.', '光刻胶', [['photoresist','/ˌfəʊtəʊrɪˈzɪst/','n.','光刻胶','photo光 + resist抵抗 → 光刻胶'],['resist','/rɪˈzɪst/','n.','抗蚀剂','re反 + sist站 → 抵抗 → 抗蚀剂'],['PR','/piː ɑːr/','n.','光刻胶','PhotoResist缩写 → 光刻胶'],['coating','/ˈkəʊtɪŋ/','n.','涂布','coat涂层 + -ing → 涂布']], ['positive resist (正胶)', 'negative resist (负胶)', 'photoresist coating (光刻胶涂布)', 'photoresist stripping (光刻胶去除)'], 'photoresist（光刻胶）→ 对光敏感的高分子材料 → 光刻工艺核心材料'],
    [208, 'mask', '/mɑːsk/', 'n.', '掩膜版', [['mask','/mɑːsk/','n.','掩膜版','mask面具 → 掩膜版'],['reticle','/ˈretɪkl/','n.','掩膜版','reticle标线片 → 光刻掩膜版'],['photomask','/ˈfəʊtəʊmɑːsk/','n.','光掩膜','photo光 + mask掩膜 → 光掩膜'],['stencil','/ˈstensl/','n.','掩模','stencil模板 → 掩模']], ['mask design (掩膜版设计)', 'mask alignment (掩膜对准)', 'binary mask (二元掩膜)', 'phase shift mask (相移掩膜)'], 'mask（掩膜版）→ 刻有电路图案的透明版 → 光刻模板'],
    [209, 'clean', '/kliːn/', 'v.', '清洗', [['clean','/kliːn/','v.','清洗','clean清洁 → 晶圆清洗'],['rinse','/rɪns/','v.','冲洗','rinse冲洗 → 清洗步骤'],['RCA','/ˌɑːr siː ˈeɪ/','n.','RCA清洗','Radio Corporation of America → RCA标准清洗'],['particle','/ˈpɑːrtɪkl/','n.','颗粒','part部分 + icle小 → 颗粒']], ['wafer cleaning (晶圆清洗)', 'wet cleaning (湿法清洗)', 'dry cleaning (干法清洗)', 'particle removal (颗粒去除)'], 'clean（清洗）→ 去除晶圆表面污染物 → 关键制程步骤'],
    [210, 'anneal', '/əˈniːl/', 'v.', '退火', [['anneal','/əˈniːl/','v.','退火','anneal退火 → 热处理工艺'],['annealing','/əˈniːlɪŋ/','n.','退火工艺','anneal + -ing → 退火工艺'],['RTA','/ˌɑːr tiː ˈeɪ/','n.','快速热退火','Rapid Thermal Annealing → 快速热退火'],['furnace','/ˈfɜːrnɪs/','n.','炉管','furnace炉子 → 退火炉']], ['thermal annealing (热退火)', 'laser annealing (激光退火)', 'spike anneal (尖峰退火)', 'annealing temperature (退火温度)'], 'anneal（退火）→ 加热后缓慢冷却修复晶格 → 热处理工艺'],
    [211, 'planarization', '/ˌplænəraɪˈzeɪʃn/', 'n.', '平坦化', [['planarization','/ˌplænəraɪˈzeɪʃn/','n.','平坦化','planar平面 + ization化 → 平坦化'],['CMP','/ˌsiː em ˈpiː/','n.','化学机械抛光','Chemical Mechanical Planarization → 化学机械抛光'],['polish','/ˈpɒlɪʃ/','v.','抛光','polish抛光 → 表面平坦化'],['slurry','/ˈslɜːri/','n.','研磨液','slurry浆料 → CMP研磨液']], ['chemical mechanical polishing (化学机械抛光)', 'global planarization (全局平坦化)', 'CMP process (CMP工艺)', 'dielectric CMP (介质层CMP)'], 'planarization（平坦化）→ 使晶圆表面平整 → CMP工艺'],
    [212, 'oxidation', '/ˌɒksɪˈdeɪʃn/', 'n.', '氧化', [['oxidation','/ˌɒksɪˈdeɪʃn/','n.','氧化','oxid氧化 + ation → 氧化'],['oxide','/ˈɒksaɪd/','n.','氧化物','oxid氧化 + e → 氧化物'],['SiO2','/ˌes aɪ əʊ tuː/','n.','二氧化硅','Silicon Dioxide → 二氧化硅'],['gate oxide','/ɡeɪt ˈɒksaɪd/','n.','栅氧化层','gate栅 + oxide氧化物 → 栅氧化层']], ['thermal oxidation (热氧化)', 'dry oxidation (干氧氧化)', 'wet oxidation (湿氧氧化)', 'gate oxide (栅氧化层)'], 'oxidation（氧化）→ 硅与氧反应生成SiO2 → 基础工艺'],
    [213, 'epitaxy', '/ˌepɪˈtæksi/', 'n.', '外延', [['epitaxy','/ˌepɪˈtæksi/','n.','外延','epi上 + taxis排列 → 外延生长'],['epi','/ˈepi/','n.','外延层','epitaxy缩写 → 外延层'],['epitaxial','/ˌepɪˈtæksiəl/','adj.','外延的','epitaxy + -ial → 外延的'],['MOCVD','/ˌem əʊ siː viː ˈdiː/','n.','金属有机化学气相沉积','Metal-Organic CVD → MOCVD']], ['epitaxial growth (外延生长)', 'epitaxial layer (外延层)', 'homoepitaxy (同质外延)', 'heteroepitaxy (异质外延)'], 'epitaxy（外延）→ 在单晶衬底上生长单晶薄膜 → 外延工艺'],
    [214, 'metallization', '/ˌmetəlaɪˈzeɪʃn/', 'n.', '金属化', [['metallization','/ˌmetəlaɪˈzeɪʃn/','n.','金属化','metal金属 + ization化 → 金属化'],['interconnect','/ˌɪntərkəˈnekt/','n.','互连','inter之间 + connect连接 → 互连'],['copper','/ˈkɒpər/','n.','铜','copper铜 → Cu互连'],['aluminum','/əˈluːmɪnəm/','n.','铝','aluminum铝 → Al互连']], ['copper interconnect (铜互连)', 'damascene process (大马士革工艺)', 'dual damascene (双大马士革)', 'metal layer (金属层)'], 'metallization（金属化）→ 形成金属连线实现电路连接 → 金属化工艺'],
    [215, 'diffusion', '/dɪˈfjuːʒn/', 'n.', '扩散', [['diffusion','/dɪˈfjuːʒn/','n.','扩散','dif分开 + fus流 → 扩散'],['furnace','/ˈfɜːrnɪs/','n.','扩散炉','furnace炉 → 扩散炉'],['drive-in','/ˈdraɪv ɪn/','n.','推进扩散','drive驱动 + in进入 → 推进扩散'],['predeposition','/ˌpriːdepəˈzɪʃn/','n.','预沉积','pre预 + deposition沉积 → 预沉积']], ['thermal diffusion (热扩散)', 'diffusion furnace (扩散炉)', 'diffusion coefficient (扩散系数)', 'solid solubility (固溶度)'], 'diffusion（扩散）→ 杂质在高温下向硅中扩散 → 掺杂工艺'],
    [216, 'implant', '/ɪmˈplɑːnt/', 'v.', '离子注入', [['implant','/ɪmˈplɑːnt/','v.','注入','im进入 + plant种植 → 注入'],['implanter','/ɪmˈplɑːntər/','n.','离子注入机','implant + -er → 注入机'],['accelerator','/əkˈseləreɪtər/','n.','加速器','accelerate加速 + -or → 加速器'],['beam','/biːm/','n.','束流','beam光束/束流 → 离子束']], ['ion implantation (离子注入)', 'implant energy (注入能量)', 'implant dose (注入剂量)', 'ion beam (离子束)'], 'implant（注入）→ 将离子加速注入硅片 → 精确掺杂'],
    [217, 'photomask', '/ˈfəʊtəʊmɑːsk/', 'n.', '光掩膜', [['photomask','/ˈfəʊtəʊmɑːsk/','n.','光掩膜','photo光 + mask掩膜 → 光掩膜'],['mask blank','/mɑːsk blæŋk/','n.','掩膜坯','mask + blank空白 → 掩膜坯'],['chrome','/krəʊm/','n.','铬','chrome铬 → 掩膜遮光层'],['quartz','/kwɔːrts/','n.','石英','quartz石英 → 掩膜基板']], ['mask fabrication (掩膜制造)', 'mask inspection (掩膜检测)', 'mask repair (掩膜修复)', 'reticle (掩膜版)'], 'photomask（光掩膜）→ 刻有电路图案的石英版 → 光刻模板'],
    [218, 'stepper', '/ˈstepər/', 'n.', '步进光刻机', [['stepper','/ˈstepər/','n.','步进光刻机','step步进 + -er → 步进光刻机'],['scanner','/ˈskænər/','n.','扫描光刻机','scan扫描 + -er → 扫描光刻机'],['projection','/prəˈdʒekʃn/','n.','投影','project投影 + ion → 投影'],['aligner','/əˈlaɪnər/','n.','对准器','align对准 + -er → 对准器']], ['step and repeat (步进重复)', 'scan and repeat (扫描重复)', 'projection aligner (投影对准机)', 'exposure tool (曝光设备)'], 'stepper（步进机）→ 步进重复曝光的光刻设备 → 光刻机'],
    [219, 'resist', '/rɪˈzɪst/', 'n.', '光刻胶', [['resist','/rɪˈzɪst/','n.','光刻胶','resist抵抗 → 抗蚀剂'],['photoresist','/ˌfəʊtəʊrɪˈzɪst/','n.','光刻胶','photo光 + resist → 光刻胶'],['developer','/dɪˈveləpər/','n.','显影液','develop显影 + -er → 显影液'],['solvent','/ˈsɒlvənt/','n.','溶剂','solve溶解 + -ent → 溶剂']], ['positive resist (正胶)', 'negative resist (负胶)', 'resist coating (涂胶)', 'resist stripping (去胶)'], 'resist（光刻胶）→ 抵抗刻蚀的感光材料 → 光刻胶'],
    [220, 'substrate', '/ˈsʌbstreɪt/', 'n.', '衬底', [['substrate','/ˈsʌbstreɪt/','n.','衬底','sub下 + stratum层 → 衬底'],['bulk','/bʌlk/','n.','体材料','bulk大块 → 体硅'],['SOI','/ˌes əʊ ˈaɪ/','n.','绝缘体上硅','Silicon On Insulator → SOI'],['handle','/ˈhændl/','n.','支撑层','handle手柄 → 支撑层']], ['silicon substrate (硅衬底)', 'substrate material (衬底材料)', 'SOI wafer (SOI晶圆)', 'substrate preparation (衬底准备)'], 'substrate（衬底）→ 承载集成电路的基础材料 → 衬底'],
    [221, 'chamber', '/ˈtʃeɪmbər/', 'n.', '反应腔', [['chamber','/ˈtʃeɪmbər/','n.','反应腔','chamber腔室 → 反应腔'],['process chamber','/ˈprəʊses ˈtʃeɪmbər/','n.','工艺腔','process工艺 + chamber腔 → 工艺腔'],['loadlock','/ˈləʊdlɒk/','n.','装载锁','load装载 + lock锁 → 装载锁'],['vacuum','/ˈvækjuːm/','n.','真空','vacuum真空 → 真空腔']], ['process chamber (工艺腔)', 'transfer chamber (传送腔)', 'vacuum chamber (真空腔)', 'loadlock chamber (装载腔)'], 'chamber（反应腔）→ 进行工艺反应的封闭空间 → 反应腔'],
    [222, 'endpoint', '/ˈendpɔɪnt/', 'n.', '终点检测', [['endpoint','/ˈendpɔɪnt/','n.','终点','end结束 + point点 → 终点'],['detection','/dɪˈtekʃn/','n.','检测','detect检测 + ion → 检测'],['interferometry','/ˌɪntərfɪˈrɒmɪtri/','n.','干涉测量','interfer干涉 + ometry测量 → 干涉测量'],['emission','/ɪˈmɪʃn/','n.','发射','e出 + miss送 + ion → 发射']], ['endpoint detection (终点检测)', 'interferometric endpoint (干涉终点检测)', 'OES endpoint (发射光谱终点检测)', 'endpoint signal (终点信号)'], 'endpoint（终点检测）→ 检测工艺结束时刻 → 工艺控制'],
    [223, 'monitor', '/ˈmɒnɪtər/', 'v.', '监控', [['monitor','/ˈmɒnɪtər/','v.','监控','monitor监控 → 工艺监控'],['metrology','/məˈtrɒlədʒi/','n.','计量','metro测量 + logy学 → 计量'],['sensor','/ˈsensər/','n.','传感器','sense感觉 + -or → 传感器'],['control','/kənˈtrəʊl/','n.','控制','con共同 + trol → 控制']], ['process monitor (工艺监控)', 'in-situ monitor (原位监控)', 'statistical process control (统计过程控制)', 'advanced process control (先进过程控制)'], 'monitor（监控）→ 实时监测工艺参数 → 工艺控制'],
    [224, 'particle', '/ˈpɑːrtɪkl/', 'n.', '颗粒', [['particle','/ˈpɑːrtɪkl/','n.','颗粒','part部分 + icle小 → 颗粒'],['contamination','/kənˌtæmɪˈneɪʃn/','n.','污染','contamin污染 + ation → 污染'],['defect','/ˈdiːfekt/','n.','缺陷','de不 + fect做 → 缺陷'],['yield','/jiːld/','n.','良率','yield产出 → 良率']], ['particle count (颗粒数)', 'particle detection (颗粒检测)', 'particle contamination (颗粒污染)', 'killer defect (致命缺陷)'], 'particle（颗粒）→ 影响良率的微小污染物 → 颗粒控制'],
    [225, 'photon', '/ˈfəʊtɒn/', 'n.', '光子', [['photon','/ˈfəʊtɒn/','n.','光子','photo光 + -on粒子 → 光子'],['wavelength','/ˈweɪvleŋθ/','n.','波长','wave波 + length长 → 波长'],['exposure','/ɪkˈspəʊʒər/','n.','曝光','ex出 + pos放 + ure → 曝光'],['dose','/dəʊs/','n.','剂量','dose剂量 → 曝光剂量']], ['photon energy (光子能量)', '193nm wavelength (193nm波长)', 'exposure dose (曝光剂量)', 'EUV photon (EUV光子)'], 'photon（光子）→ 光的量子粒子 → 光刻光源'],
    [226, 'plasma', '/ˈplæzmə/', 'n.', '等离子体', [['plasma','/ˈplæzmə/','n.','等离子体','plasma血浆 → 等离子体'],['ion','/ˈaɪən/','n.','离子','ion离子 → 电离粒子'],['electron','/ɪˈlektrɒn/','n.','电子','electr电 + on → 电子'],['radical','/ˈrædɪkl/','n.','自由基','radical激进的 → 自由基']], ['plasma etching (等离子刻蚀)', 'plasma CVD (等离子CVD)', 'plasma density (等离子密度)', 'plasma damage (等离子损伤)'], 'plasma（等离子体）→ 电离气体状态 → 刻蚀/CVD工艺'],
    [227, 'pressure', '/ˈpreʃər/', 'n.', '压力', [['pressure','/ˈpreʃər/','n.','压力','press压 + ure → 压力'],['vacuum','/ˈvækjuːm/','n.','真空','vacu空 + um → 真空'],['atmosphere','/ˈætməsfɪər/','n.','大气压','atmo气 + sphere球 → 大气'],['torr','/tɔːr/','n.','托','torr托 → 压力单位']], ['low pressure (低压)', 'high vacuum (高真空)', 'base pressure (基础压力)', 'process pressure (工艺压力)'], 'pressure（压力）→ 工艺腔内的气压控制 → 工艺参数'],
    [228, 'temperature', '/ˈtemprətʃər/', 'n.', '温度', [['temperature','/ˈtemprətʃər/','n.','温度','temper调节 + ature → 温度'],['heating','/ˈhiːtɪŋ/','n.','加热','heat热 + -ing → 加热'],['cooling','/ˈkuːlɪŋ/','n.','冷却','cool冷 + -ing → 冷却'],['thermocouple','/ˈθɜːrməkʌpl/','n.','热电偶','thermo热 + couple偶 → 热电偶']], ['process temperature (工艺温度)', 'annealing temperature (退火温度)', 'temperature ramp (温度斜坡)', 'temperature uniformity (温度均匀性)'], 'temperature（温度）→ 关键工艺参数之一 → 温度控制'],
    [229, 'throughput', '/ˈθruːpʊt/', 'n.', '产能', [['throughput','/ˈθruːpʊt/','n.','产能','through通过 + put放 → 产能'],['WPH','/ˌdʌbljuː piː ˈeɪtʃ/','n.','每小时晶圆数','Wafers Per Hour → WPH'],['uptime','/ˈʌptaɪm/','n.','运行时间','up上 + time时间 → 运行时间'],['MTBF','/ˌem tiː biː ˈef/','n.','平均故障间隔','Mean Time Between Failures → MTBF']], ['equipment throughput (设备产能)', 'fab throughput (晶圆厂产能)', 'throughput optimization (产能优化)', 'high throughput (高产能)'], 'throughput（产能）→ 单位时间处理的晶圆数 → 生产效率'],
    [230, 'batch', '/bætʃ/', 'n.', '批次', [['batch','/bætʃ/','n.','批次','batch批量 → 批次'],['lot','/lɒt/','n.','批次','lot批次 → 生产批次'],['wafer lot','/ˈweɪfər lɒt/','n.','晶圆批次','wafer晶圆 + lot批次 → 晶圆批次'],['batch processing','/bætʃ ˈprəʊsesɪŋ/','n.','批量处理','batch + processing → 批量处理']], ['batch processing (批量处理)', 'single wafer processing (单片处理)', 'lot tracking (批次追踪)', 'batch size (批次大小)'], 'batch（批次）→ 同时处理的晶圆组 → 生产组织'],
];

processBatch(entries201_230);
console.log('Added entries 201-230. Total:', newEntries.length);

// Save progress
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/temp_entries.json', JSON.stringify(newEntries, null, 2));
console.log('Progress saved');
