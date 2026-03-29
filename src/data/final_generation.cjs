const fs = require('fs');

// Read existing file (200 entries)
const existingData = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));
console.log('Existing entries:', existingData.length);

const newEntries = [];

function createEntry(id, freq, root, phonetic, pos, meaning, words, phrases, mnemonic) {
    const wordPhrases = words.map(w => [
        w.word + ' technology',
        w.word + ' process',
        w.word + ' equipment',
        w.word + ' application'
    ]);

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
        const wordObjs = words.map(w => ({
            word: w[0],
            phonetic: w[1],
            meaning: w[2],
            memoryTip: w[3]
        }));
        newEntries.push(createEntry(id, id, root, phonetic, pos, meaning, wordObjs, phrases, mnemonic));
    });
}

// ========== 封装测试 (301-350) ==========
const packaging = [
    [301, 'package', '/ˈpækɪdʒ/', 'n.', '封装',
        [['package', '/ˈpækɪdʒ/', '封装', 'package包裹 → 芯片封装'],
         ['packaging', '/ˈpækɪdʒɪŋ/', '封装工艺', 'package + -ing → 封装工艺'],
         ['assembly', '/əˈsembli/', '组装', 'assemble组装 → 封装组装'],
         ['seal', '/siːl/', '密封', 'seal密封 → 封装密封']],
        ['IC package (集成电路封装)', 'chip package (芯片封装)', 'packaging technology (封装技术)', 'packaging material (封装材料)'],
        'package（封装）→ 保护芯片并提供外部连接 → 封装'],

    [302, 'die', '/daɪ/', 'n.', '芯片',
        [['die', '/daɪ/', '芯片', 'die芯片 → 未封装的裸芯片'],
         ['chip', '/tʃɪp/', '芯片', 'chip碎片 → 集成电路芯片'],
         ['die attach', '/daɪ əˈtætʃ/', '芯片粘接', 'die + attach粘接 → 芯片粘接'],
         ['die pad', '/daɪ pæd/', '芯片焊盘', 'die + pad焊盘 → 芯片焊盘']],
        ['bare die (裸芯片)', 'die attach (芯片粘接)', 'die bond (芯片键合)', 'die size (芯片尺寸)'],
        'die（芯片）→ 未封装的裸芯片 → 裸片'],

    [303, 'bond', '/bɒnd/', 'v.', '键合',
        [['bond', '/bɒnd/', '键合', 'bond结合 → 键合'],
         ['bonding', '/ˈbɒndɪŋ/', '键合工艺', 'bond + -ing → 键合工艺'],
         ['wire bond', '/ˈwaɪər bɒnd/', '引线键合', 'wire线 + bond键合 → 引线键合'],
         ['ball bond', '/bɔːl bɒnd/', '球焊', 'ball球 + bond → 球焊']],
        ['wire bonding (引线键合)', 'ball bonding (球焊)', 'wedge bonding (楔焊)', 'bond wire (键合线)'],
        'bond（键合）→ 用金属线连接芯片和封装 → 键合'],

    [304, 'wire', '/ˈwaɪər/', 'n.', '引线',
        [['wire', '/ˈwaɪər/', '引线', 'wire线 → 键合引线'],
         ['gold wire', '/ɡəʊld ˈwaɪər/', '金丝', 'gold金 + wire → 金丝'],
         ['copper wire', '/ˈkɒpər ˈwaɪər/', '铜丝', 'copper铜 + wire → 铜丝'],
         ['aluminum wire', '/əˈluːmɪnəm ˈwaɪər/', '铝丝', 'aluminum铝 + wire → 铝丝']],
        ['bond wire (键合线)', 'gold wire (金丝)', 'copper wire (铜丝)', 'wire bond (引线键合)'],
        'wire（引线）→ 连接芯片与引脚的金属线 → 键合线'],

    [305, 'solder', '/ˈsəʊldər/', 'n.', '焊料',
        [['solder', '/ˈsəʊldər/', '焊料', 'solder焊料'],
         ['solder ball', '/ˈsəʊldər bɔːl/', '焊球', 'solder + ball球 → 焊球'],
         ['solder bump', '/ˈsəʊldər bʌmp/', '焊凸点', 'solder + bump凸点 → 焊凸点'],
         ['solder paste', '/ˈsəʊldər peɪst/', '焊膏', 'solder + paste膏 → 焊膏']],
        ['solder ball (焊球)', 'solder bump (焊凸点)', 'lead-free solder (无铅焊料)', 'solder joint (焊点)'],
        'solder（焊料）→ 连接芯片与基板的金属材料 → 焊料'],

    [306, 'flip chip', '/flɪp tʃɪp/', 'n.', '倒装芯片',
        [['flip chip', '/flɪp tʃɪp/', '倒装芯片', 'flip翻转 + chip芯片 → 倒装芯片'],
         ['C4', '/siː fɔːr/', '可控塌陷芯片连接', 'Controlled Collapse Chip Connection → C4'],
         ['bump', '/bʌmp/', '凸点', 'bump凸点 → 芯片凸点'],
         ['underfill', '/ˈʌndərfɪl/', '底部填充', 'under下 + fill填充 → 底部填充']],
        ['flip chip bonding (倒装芯片键合)', 'flip chip package (倒装芯片封装)', 'C4 bump (C4凸点)', 'flip chip assembly (倒装组装)'],
        'flip chip（倒装芯片）→ 芯片正面朝下安装的封装方式 → 倒装芯片'],

    [307, 'BGA', '/ˌbiː dʒiː ˈeɪ/', 'n.', '球栅阵列',
        [['BGA', '/ˌbiː dʒiː ˈeɪ/', '球栅阵列', 'Ball Grid Array → BGA'],
         ['solder ball', '/ˈsəʊldər bɔːl/', '焊球', 'solder焊 + ball球 → 焊球'],
         ['grid', '/ɡrɪd/', '栅格', 'grid栅格 → 阵列栅格'],
         ['array', '/əˈreɪ/', '阵列', 'array阵列 → 球阵列']],
        ['BGA package (BGA封装)', 'CSP (芯片级封装)', 'FBGA (细间距BGA)', 'WLCSP (晶圆级CSP)'],
        'BGA（球栅阵列）→ 底部有焊球阵列的封装 → BGA'],

    [308, 'leadframe', '/ˈliːdfreɪm/', 'n.', '引线框架',
        [['leadframe', '/ˈliːdfreɪm/', '引线框架', 'lead引线 + frame框架 → 引线框架'],
         ['lead', '/liːd/', '引线', 'lead引线 → 封装引脚'],
         ['paddle', '/ˈpædl/', '焊盘', 'paddle桨 → 芯片焊盘'],
         ['flag', '/flæɡ/', '芯片座', 'flag旗 → 芯片座']],
        ['leadframe package (引线框架封装)', 'metal leadframe (金属引线框架)', 'leadframe strip (引线框架条)', 'leadframe plating (引线框架电镀)'],
        'leadframe（引线框架）→ 传统封装的金属框架 → 引线框架'],

    [309, 'substrate', '/ˈsʌbstreɪt/', 'n.', '基板',
        [['substrate', '/ˈsʌbstreɪt/', '基板', 'sub下 + stratum层 → 基板'],
         ['PCB', '/ˌpiː siː ˈbiː/', '印刷电路板', 'Printed Circuit Board → PCB'],
         ['laminate', '/ˈlæmɪnət/', '层压板', 'laminate层压 → 层压基板'],
         ['ceramic', '/səˈræmɪk/', '陶瓷', 'ceramic陶瓷 → 陶瓷基板']],
        ['package substrate (封装基板)', 'organic substrate (有机基板)', 'ceramic substrate (陶瓷基板)', 'laminate substrate (层压基板)'],
        'substrate（基板）→ 支撑和连接芯片的载体 → 基板'],

    [310, 'encapsulant', '/ɪnˈkæpsjʊlənt/', 'n.', '封装材料',
        [['encapsulant', '/ɪnˈkæpsjʊlənt/', '封装材料', 'encapsulate封装 → 封装材料'],
         ['molding', '/ˈməʊldɪŋ/', '塑封', 'mold模塑 + -ing → 塑封'],
         ['compound', '/ˈkɒmpaʊnd/', '化合物', 'compound化合物 → 塑封料'],
         ['epoxy', '/ɪˈpɒksi/', '环氧树脂', 'epoxy环氧 → 环氧树脂']],
        ['molding compound (塑封料)', 'epoxy resin (环氧树脂)', 'encapsulation material (封装材料)', 'liquid encapsulant (液态封装料)'],
        'encapsulant（封装材料）→ 保护芯片的塑封料 → 封装材料'],

    [311, 'dielectric', '/ˌdaɪɪˈlektrɪk/', 'n.', '介质',
        [['dielectric', '/ˌdaɪɪˈlektrɪk/', '介质', 'dia穿过 + electric电 → 介质'],
         ['insulator', '/ˈɪnsjuleɪtər/', '绝缘体', 'insulate绝缘 → 绝缘体'],
         ['passivation', '/ˌpæsɪˈveɪʃn/', '钝化', 'passive钝化 + ation → 钝化'],
         ['low-k', '/ləʊ keɪ/', '低介电常数', 'low低 + k介电常数 → 低k']],
        ['low-k dielectric (低k介质)', 'interlayer dielectric (层间介质)', 'passivation layer (钝化层)', 'dielectric constant (介电常数)'],
        'dielectric（介质）→ 绝缘材料用于隔离导电层 → 介质'],

    [312, 'interposer', '/ˈɪntəpəʊzər/', 'n.', '中介层',
        [['interposer', '/ˈɪntəpəʊzər/', '中介层', 'inter之间 + poser放置 → 中介层'],
         ['TSV', '/ˌtiː es ˈviː/', '硅通孔', 'Through-Silicon Via → TSV'],
         ['via', '/ˈvaɪə/', '通孔', 'via通路 → 通孔'],
         ['RDL', '/ˌɑːr diː ˈel/', '重分布层', 'Redistribution Layer → RDL']],
        ['silicon interposer (硅中介层)', 'TSV interposer (TSV中介层)', 'organic interposer (有机中介层)', '2.5D interposer (2.5D中介层)'],
        'interposer（中介层）→ 用于多芯片集成的中间层 → 中介层'],

    [313, 'wafer level', '/ˈweɪfər ˈlevl/', 'n.', '晶圆级',
        [['wafer level', '/ˈweɪfər ˈlevl/', '晶圆级', 'wafer晶圆 + level级 → 晶圆级'],
         ['WLP', '/ˌdʌbljuː el ˈpiː/', '晶圆级封装', 'Wafer Level Packaging → WLP'],
         ['WLCSP', '/ˌdʌbljuː el siː es ˈpiː/', '晶圆级CSP', 'Wafer Level CSP → WLCSP'],
         ['fan-out', '/fæn aʊt/', '扇出', 'fan扇 + out出 → 扇出']],
        ['wafer level packaging (晶圆级封装)', 'WLCSP (晶圆级芯片尺寸封装)', 'fan-out WLP (扇出型WLP)', 'fan-in WLP (扇入型WLP)'],
        'wafer level（晶圆级）→ 在晶圆状态完成封装 → 晶圆级封装'],

    [314, '3D IC', '/θriː diː ˌaɪ ˈsiː/', 'n.', '三维集成电路',
        [['3D IC', '/θriː diː ˌaɪ ˈsiː/', '三维集成电路', '3D Integrated Circuit → 3D IC'],
         ['stacking', '/ˈstækɪŋ/', '堆叠', 'stack堆叠 + -ing → 堆叠'],
         ['die stack', '/daɪ stæk/', '芯片堆叠', 'die芯片 + stack堆叠 → 芯片堆叠'],
         ['heterogeneous', '/ˌhetərəˈdʒiːniəs/', '异构的', 'hetero异 + gene基因 → 异构的']],
        ['3D stacking (3D堆叠)', 'die stacking (芯片堆叠)', '3D memory (3D存储器)', 'heterogeneous integration (异构集成)'],
        '3D IC（三维集成电路）→ 垂直堆叠芯片的集成技术 → 3D IC'],

    [315, 'chiplets', '/ˈtʃɪpləts/', 'n.', '芯粒',
        [['chiplets', '/ˈtʃɪpləts/', '芯粒', 'chip芯片 + -lets小 → 芯粒'],
         ['dielet', '/ˈdaɪlət/', '小芯片', 'die芯片 + -let小 → 小芯片'],
         ['chiplet architecture', '/ˈtʃɪplət ˈɑːrkɪtektʃər/', '芯粒架构', 'chiplet + architecture → 芯粒架构'],
         ['disaggregation', '/dɪsˌæɡrɪˈɡeɪʃn/', '分解', 'dis分散 + aggregation聚合 → 分解']],
        ['chiplet design (芯粒设计)', 'chiplet integration (芯粒集成)', 'chiplet ecosystem (芯粒生态系统)', 'modular chiplet (模块化芯粒)'],
        'chiplets（芯粒）→ 分解大芯片为多个小芯片的技术 → 芯粒'],
];

processBatch(packaging);
console.log('Added packaging 301-315. Total:', newEntries.length);

// Continue with entries 316-350
const test = [
    [316, 'test', '/test/', 'v.', '测试',
        [['test', '/test/', '测试', 'test测试 → 芯片测试'],
         ['testing', '/ˈtestɪŋ/', '测试工艺', 'test + -ing → 测试工艺'],
         ['probe', '/prəʊb/', '探针', 'probe探针 → 测试探针'],
         ['ATE', '/ˌeɪ tiː ˈiː/', '自动测试设备', 'Automatic Test Equipment → ATE']],
        ['wafer test (晶圆测试)', 'final test (终测)', 'burn-in test (老化测试)', 'function test (功能测试)'],
        'test（测试）→ 验证芯片功能和性能 → 测试'],

    [317, 'probe', '/prəʊb/', 'n.', '探针',
        [['probe', '/prəʊb/', '探针', 'probe探针 → 测试探针'],
         ['probe card', '/prəʊb kɑːrd/', '探针卡', 'probe + card卡 → 探针卡'],
         ['probe needle', '/prəʊb ˈniːdl/', '探针', 'probe + needle针 → 探针'],
         ['probe station', '/prəʊb ˈsteɪʃn/', '探针台', 'probe + station台 → 探针台']],
        ['probe card (探针卡)', 'cantilever probe (悬臂探针)', 'membrane probe (薄膜探针)', 'vertical probe (垂直探针)'],
        'probe（探针）→ 接触芯片pad进行测试 → 探针'],

    [318, 'yield', '/jiːld/', 'n.', '良率',
        [['yield', '/jiːld/', '良率', 'yield产出 → 良率'],
         ['yield rate', '/jiːld reɪt/', '良率', 'yield + rate率 → 良率'],
         ['yield loss', '/jiːld lɒs/', '良率损失', 'yield + loss损失 → 良率损失'],
         ['yield enhancement', '/jiːld ɪnˈhɑːnsmənt/', '良率提升', 'yield + enhancement提升 → 良率提升']],
        ['die yield (芯片良率)', 'wafer yield (晶圆良率)', 'yield management (良率管理)', 'yield learning (良率学习)'],
        'yield（良率）→ 合格芯片占总芯片的比例 → 良率'],

    [319, 'defect', '/ˈdiːfekt/', 'n.', '缺陷',
        [['defect', '/ˈdiːfekt/', '缺陷', 'de不 + fect做 → 缺陷'],
         ['defectivity', '/dɪˈfektɪvɪti/', '缺陷率', 'defect缺陷 + ivity → 缺陷率'],
         ['killer defect', '/ˈkɪlər ˈdiːfekt/', '致命缺陷', 'killer致命 + defect → 致命缺陷'],
         ['nuisance defect', '/ˈnjuːsns ˈdiːfekt/', '干扰缺陷', 'nuisance干扰 + defect → 干扰缺陷']],
        ['defect density (缺陷密度)', 'defect inspection (缺陷检测)', 'defect classification (缺陷分类)', 'defect review (缺陷复查)'],
        'defect（缺陷）→ 导致芯片失效的异常 → 缺陷'],

    [320, 'inspection', '/ɪnˈspekʃn/', 'n.', '检测',
        [['inspection', '/ɪnˈspekʃn/', '检测', 'inspect检查 + ion → 检测'],
         ['review', '/rɪˈvjuː/', '复查', 'review复查 → 缺陷复查'],
         ['metrology', '/məˈtrɒlədʒi/', '计量', 'metro测量 + logy学 → 计量'],
         ['measurement', '/ˈmeʒərmənt/', '测量', 'measure测量 + ment → 测量']],
        ['optical inspection (光学检测)', 'electron beam inspection (电子束检测)', 'defect inspection (缺陷检测)', 'critical dimension measurement (关键尺寸测量)'],
        'inspection（检测）→ 发现和识别缺陷的过程 → 检测'],

    [321, 'binning', '/ˈbɪnɪŋ/', 'n.', '分档',
        [['binning', '/ˈbɪnɪŋ/', '分档', 'bin箱子 + -ing → 分档'],
         ['sort', '/sɔːrt/', '分类', 'sort分类 → 芯片分类'],
         ['speed bin', '/spiːd bɪn/', '速度分档', 'speed速度 + bin档 → 速度分档'],
         ['grade', '/ɡreɪd/', '等级', 'grade等级 → 芯片等级']],
        ['speed binning (速度分档)', 'voltage binning (电压分档)', 'power binning (功耗分档)', 'grade sorting (等级分类)'],
        'binning（分档）→ 按性能将芯片分类 → 分档'],

    [322, 'reliability', '/rɪˌlaɪəˈbɪlɪti/', 'n.', '可靠性',
        [['reliability', '/rɪˌlaɪəˈbɪlɪti/', '可靠性', 'rely依靠 + ability能力 → 可靠性'],
         ['lifetime', '/ˈlaɪftaɪm/', '寿命', 'life生命 + time时间 → 寿命'],
         ['failure', '/ˈfeɪljər/', '失效', 'fail失败 → 失效'],
         ['MTTF', '/ˌem tiː tiː ˈef/', '平均失效时间', 'Mean Time To Failure → MTTF']],
        ['reliability test (可靠性测试)', 'accelerated life test (加速寿命测试)', 'failure analysis (失效分析)', 'reliability model (可靠性模型)'],
        'reliability（可靠性）→ 芯片在规定条件下正常工作的能力 → 可靠性'],

    [323, 'burn-in', '/ˈbɜːrn ɪn/', 'n.', '老化',
        [['burn-in', '/ˈbɜːrn ɪn/', '老化', 'burn烧 + in进入 → 老化'],
         ['HAST', '/hæst/', '高加速应力测试', 'Highly Accelerated Stress Test → HAST'],
         ['HTOL', '/ˌeɪtʃ tiː əʊ ˈel/', '高温工作寿命', 'High Temperature Operating Life → HTOL'],
         ['TDDB', '/ˌtiː diː diː ˈbiː/', '时变介质击穿', 'Time Dependent Dielectric Breakdown → TDDB']],
        ['burn-in test (老化测试)', 'high temperature storage (高温储存)', 'temperature cycling (温度循环)', 'voltage stress (电压应力)'],
        'burn-in（老化）→ 在高温高压下筛选早期失效 → 老化测试'],

    [324, 'FA', '/ef ˈeɪ/', 'n.', '失效分析',
        [['FA', '/ef ˈeɪ/', '失效分析', 'Failure Analysis → FA'],
         ['PFA', '/ˌpiː ef ˈeɪ/', '物理失效分析', 'Physical Failure Analysis → PFA'],
         ['EFA', '/ˌiː ef ˈeɪ/', '电性失效分析', 'Electrical Failure Analysis → EFA'],
         ['root cause', '/ruːt kɔːz/', '根本原因', 'root根 + cause原因 → 根本原因']],
        ['failure analysis (失效分析)', 'root cause analysis (根本原因分析)', 'fault isolation (故障隔离)', 'defect localization (缺陷定位)'],
        'FA（失效分析）→ 找出芯片失效原因的分析方法 → 失效分析'],

    [325, 'DRC', '/ˌdiː ɑːr ˈsiː/', 'n.', '设计规则检查',
        [['DRC', '/ˌdiː ɑːr ˈsiː/', '设计规则检查', 'Design Rule Check → DRC'],
         ['LVS', '/ˌel viː ˈes/', '版图与电路对比', 'Layout Versus Schematic → LVS'],
         ['ERC', '/ˌiː ɑːr ˈsiː/', '电气规则检查', 'Electrical Rule Check → ERC'],
         ['ANT', '/ænt/', '天线规则检查', 'ANTenna check → 天线规则']],
        ['design rule check (设计规则检查)', 'layout verification (版图验证)', 'physical verification (物理验证)', 'pattern matching (图形匹配)'],
        'DRC（设计规则检查）→ 检查版图是否符合工艺规则 → DRC'],
];

processBatch(test);
console.log('Added test 316-325. Total:', newEntries.length);

// Continue with more entries 326-400
const moreEntries = [
    // 器件物理 (326-340)
    [326, 'band', '/bænd/', 'n.', '能带',
        [['band', '/bænd/', '能带', 'band带 → 能带'],
         ['conduction band', '/kənˈdʌkʃn bænd/', '导带', 'conduction传导 + band → 导带'],
         ['valence band', '/ˈveɪləns bænd/', '价带', 'valence价 + band → 价带'],
         ['bandgap', '/ˈbændɡæp/', '带隙', 'band带 + gap隙 → 带隙']],
        ['energy band (能带)', 'conduction band (导带)', 'valence band (价带)', 'band diagram (能带图)'],
        'band（能带）→ 电子能量分布的区域 → 能带'],

    [327, 'electron', '/ɪˈlektrɒn/', 'n.', '电子',
        [['electron', '/ɪˈlektrɒn/', '电子', 'electr电 + on → 电子'],
         ['hole', '/həʊl/', '空穴', 'hole洞 → 空穴'],
         ['carrier', '/ˈkæriər/', '载流子', 'carry携带 + -er → 载流子'],
         ['majority carrier', '/məˈdʒɒrɪti ˈkæriər/', '多数载流子', 'majority多数 + carrier → 多数载流子']],
        ['electron concentration (电子浓度)', 'electron mobility (电子迁移率)', 'electron affinity (电子亲和能)', 'free electron (自由电子)'],
        'electron（电子）→ 带负电的载流子 → 电子'],

    [328, 'hole', '/həʊl/', 'n.', '空穴',
        [['hole', '/həʊl/', '空穴', 'hole洞 → 空穴'],
         ['p-type', '/piː taɪp/', 'P型', 'positive正 + type型 → P型'],
         ['acceptor', '/əkˈseptər/', '受主', 'accept接受 + -or → 受主'],
         ['minority carrier', '/maɪˈnɒrɪti ˈkæriər/', '少数载流子', 'minority少数 + carrier → 少数载流子']],
        ['hole concentration (空穴浓度)', 'hole mobility (空穴迁移率)', 'hole current (空穴电流)', 'hole density (空穴密度)'],
        'hole（空穴）→ 带正电的载流子 → 空穴'],

    [329, 'junction', '/ˈdʒʌŋkʃn/', 'n.', '结',
        [['junction', '/ˈdʒʌŋkʃn/', '结', 'junct连接 + ion → 结'],
         ['PN junction', '/ˌpiː en ˈdʒʌŋkʃn/', 'PN结', 'P-N junction → PN结'],
         ['depletion', '/dɪˈpliːʃn/', '耗尽', 'deplete耗尽 + ion → 耗尽'],
         ['barrier', '/ˈbæriər/', '势垒', 'barrier障碍 → 势垒']],
        ['PN junction (PN结)', 'depletion region (耗尽区)', 'junction capacitance (结电容)', 'Schottky junction (肖特基结)'],
        'junction（结）→ P型和N型半导体的界面 → 结'],

    [330, 'depletion', '/dɪˈpliːʃn/', 'n.', '耗尽',
        [['depletion', '/dɪˈpliːʃn/', '耗尽', 'deplete耗尽 + ion → 耗尽'],
         ['depletion region', '/dɪˈpliːʃn ˈriːdʒən/', '耗尽区', 'depletion + region区域 → 耗尽区'],
         ['space charge', '/speɪs tʃɑːrdʒ/', '空间电荷', 'space空间 + charge电荷 → 空间电荷'],
         ['built-in', '/ˈbɪlt ɪn/', '内建', 'built建 + in内 → 内建']],
        ['depletion region (耗尽区)', 'depletion width (耗尽层宽度)', 'depletion capacitance (耗尽电容)', 'depletion mode (耗尽模式)'],
        'depletion（耗尽）→ 载流子被耗尽的区域 → 耗尽区'],

    [331, 'inversion', '/ɪnˈvɜːrʒn/', 'n.', '反型',
        [['inversion', '/ɪnˈvɜːrʒn/', '反型', 'invert反转 + ion → 反型'],
         ['inversion layer', '/ɪnˈvɜːrʒn ˈleɪər/', '反型层', 'inversion + layer层 → 反型层'],
         ['threshold', '/ˈθreʃhəʊld/', '阈值', 'threshold门槛 → 阈值电压'],
         ['strong inversion', '/strɒŋ ɪnˈvɜːrʒn/', '强反型', 'strong强 + inversion → 强反型']],
        ['inversion layer (反型层)', 'inversion charge (反型电荷)', 'threshold voltage (阈值电压)', 'weak inversion (弱反型)'],
        'inversion（反型）→ 半导体表面载流子类型反转 → 反型'],

    [332, 'accumulation', '/əˌkjuːmjəˈleɪʃn/', 'n.', '积累',
        [['accumulation', '/əˌkjuːmjəˈleɪʃn/', '积累', 'accumulate积累 + ion → 积累'],
         ['accumulation layer', '/əˌkjuːmjəˈleɪʃn ˈleɪər/', '积累层', 'accumulation + layer → 积累层'],
         ['flatband', '/ˈflætbænd/', '平带', 'flat平 + band带 → 平带'],
         ['deep depletion', '/diːp dɪˈpliːʃn/', '深耗尽', 'deep深 + depletion → 深耗尽']],
        ['accumulation mode (积累模式)', 'accumulation layer (积累层)', 'flatband voltage (平带电压)', 'surface accumulation (表面积累)'],
        'accumulation（积累）→ 多数载流子在表面积累 → 积累'],

    [333, 'mobility', '/məʊˈbɪlɪti/', 'n.', '迁移率',
        [['mobility', '/məʊˈbɪlɪti/', '迁移率', 'mobile移动 + ity → 迁移率'],
         ['drift', '/drɪft/', '漂移', 'drift漂移 → 漂移运动'],
         ['scattering', '/ˈskætərɪŋ/', '散射', 'scatter散射 + -ing → 散射'],
         ['surface roughness', '/ˈsɜːrfɪs ˈrʌfnəs/', '表面粗糙度', 'surface表面 + roughness粗糙 → 表面粗糙度']],
        ['electron mobility (电子迁移率)', 'hole mobility (空穴迁移率)', 'mobility degradation (迁移率退化)', 'mobility model (迁移率模型)'],
        'mobility（迁移率）→ 载流子在电场中移动的速度 → 迁移率'],

    [334, 'recombination', '/ˌriːkɒmbɪˈneɪʃn/', 'n.', '复合',
        [['recombination', '/ˌriːkɒmbɪˈneɪʃn/', '复合', 're再 + combination结合 → 复合'],
         ['generation', '/ˌdʒenəˈreɪʃn/', '产生', 'generate产生 + ion → 产生'],
         ['SRH', '/ˌes ɑːr ˈeɪtʃ/', '肖克利-里德-霍尔', 'Shockley-Read-Hall → SRH复合'],
         ['lifetime', '/ˈlaɪftaɪm/', '寿命', 'life生命 + time时间 → 寿命']],
        ['carrier lifetime (载流子寿命)', 'recombination rate (复合速率)', 'generation-recombination (产生-复合)', 'surface recombination (表面复合)'],
        'recombination（复合）→ 电子和空穴的湮灭过程 → 复合'],

    [335, 'tunneling', '/ˈtʌnəlɪŋ/', 'n.', '隧穿',
        [['tunneling', '/ˈtʌnəlɪŋ/', '隧穿', 'tunnel隧道 + -ing → 隧穿'],
         ['Fowler-Nordheim', '/ˈfaʊlər ˈnɔːrdhaɪm/', '福勒-诺德海姆', 'Fowler-Nordheim隧穿'],
         ['direct tunneling', '/dəˈrekt ˈtʌnəlɪŋ/', '直接隧穿', 'direct直接 + tunneling → 直接隧穿'],
         ['tunnel oxide', '/ˈtʌnl ˈɒksaɪd/', '隧穿氧化层', 'tunnel + oxide → 隧穿氧化层']],
        ['quantum tunneling (量子隧穿)', 'direct tunneling (直接隧穿)', 'Fowler-Nordheim tunneling (FN隧穿)', 'tunneling current (隧穿电流)'],
        'tunneling（隧穿）→ 量子力学隧穿效应 → 隧穿'],

    // 制造工艺 (336-360)
    [336, 'ion', '/ˈaɪən/', 'n.', '离子',
        [['ion', '/ˈaɪən/', '离子', 'ion离子'],
         ['ion source', '/ˈaɪən sɔːrs/', '离子源', 'ion + source源 → 离子源'],
         ['ion beam', '/ˈaɪən biːm/', '离子束', 'ion + beam束 → 离子束'],
         ['ion energy', '/ˈaɪən ˈenərdʒi/', '离子能量', 'ion + energy能量 → 离子能量']],
        ['ion implantation (离子注入)', 'ion source (离子源)', 'ion beam (离子束)', 'ion mass (离子质量)'],
        'ion（离子）→ 带电的原子或分子 → 离子'],

    [337, 'sputter', '/ˈspʌtər/', 'v.', '溅射',
        [['sputter', '/ˈspʌtər/', '溅射', 'sputter溅射'],
         ['sputtering', '/ˈspʌtərɪŋ/', '溅射工艺', 'sputter + -ing → 溅射工艺'],
         ['magnetron', '/ˈmæɡnɪtrɒn/', '磁控管', 'magnet磁 + -tron管 → 磁控管'],
         ['target', '/ˈtɑːrɡɪt/', '靶材', 'target靶 → 溅射靶材']],
        ['sputter deposition (溅射沉积)', 'magnetron sputtering (磁控溅射)', 'DC sputtering (直流溅射)', 'RF sputtering (射频溅射)'],
        'sputter（溅射）→ 用离子轰击靶材沉积薄膜 → 溅射'],

    [338, 'evaporation', '/ɪˌvæpəˈreɪʃn/', 'n.', '蒸发',
        [['evaporation', '/ɪˌvæpəˈreɪʃn/', '蒸发', 'evaporate蒸发 + ion → 蒸发'],
         ['e-beam', '/ˈiː biːm/', '电子束', 'electron beam → 电子束'],
         ['thermal evaporation', '/ˈθɜːrml ɪˌvæpəˈreɪʃn/', '热蒸发', 'thermal热 + evaporation → 热蒸发'],
         ['filament', '/ˈfɪləmənt/', '灯丝', 'filament灯丝 → 蒸发源']],
        ['electron beam evaporation (电子束蒸发)', 'thermal evaporation (热蒸发)', 'resistive evaporation (电阻蒸发)', 'molecular beam epitaxy (分子束外延)'],
        'evaporation（蒸发）→ 加热材料使其气化沉积 → 蒸发'],

    [339, 'PECVD', '/ˌpiː iː siː viː ˈdiː/', 'n.', '等离子增强化学气相沉积',
        [['PECVD', '/ˌpiː iː siː viː ˈdiː/', 'PECVD', 'Plasma Enhanced CVD → 等离子增强CVD'],
         ['LPCVD', '/ˌel piː siː viː ˈdiː/', '低压化学气相沉积', 'Low Pressure CVD → 低压CVD'],
         ['plasma', '/ˈplæzmə/', '等离子体', 'plasma等离子体'],
         ['reactant', '/riˈæktənt/', '反应物', 'react反应 + -ant → 反应物']],
        ['PECVD nitride (PECVD氮化硅)', 'PECVD oxide (PECVD氧化硅)', 'plasma enhanced CVD (等离子增强CVD)', 'low pressure CVD (低压CVD)'],
        'PECVD（等离子增强化学气相沉积）→ 用等离子体增强反应的CVD → PECVD'],

    [340, 'spinner', '/ˈspɪnər/', 'n.', '涂胶机',
        [['spinner', '/ˈspɪnər/', '涂胶机', 'spin旋转 + -er器 → 涂胶机'],
         ['spin coat', '/spɪn kəʊt/', '旋涂', 'spin旋转 + coat涂 → 旋涂'],
         ['photoresist', '/ˌfəʊtəʊrɪˈzɪst/', '光刻胶', 'photo光 + resist抵抗 → 光刻胶'],
         ['dispense', '/dɪˈspens/', '分配', 'dispense分配 → 涂胶分配']],
        ['spin coater (旋涂机)', 'photoresist spinner (光刻胶涂胶机)', 'edge bead removal (边缘胶去除)', 'soft bake (软烘)'],
        'spinner（涂胶机）→ 旋转涂布光刻胶的设备 → 涂胶机'],

    [341, 'track', '/træk/', 'n.', '涂胶显影机',
        [['track', '/træk/', '涂胶显影机', 'track轨道 → 涂胶显影轨道'],
         ['developer', '/dɪˈveləpər/', '显影液', 'develop显影 + -er → 显影液'],
         ['edge exposure', '/edʒ ɪkˈspəʊʒər/', '边缘曝光', 'edge边缘 + exposure曝光 → 边缘曝光'],
         ['hard bake', '/hɑːrd beɪk/', '坚膜', 'hard硬 + bake烘烤 → 坚膜']],
        ['coat/develop track (涂胶显影机)', 'positive developer (正胶显影液)', 'negative developer (负胶显影液)', 'development rate (显影速率)'],
        'track（涂胶显影机）→ 集成涂胶和显影的工艺设备 → 涂胶显影机'],

    [342, 'metrology', '/məˈtrɒlədʒi/', 'n.', '计量',
        [['metrology', '/məˈtrɒlədʒi/', '计量', 'metro测量 + logy学 → 计量'],
         ['ellipsometry', '/ɪˌlɪpˈsɒmɪtri/', '椭偏仪', 'ellipse椭圆 + metry测量 → 椭偏仪'],
         ['reflectometry', '/ˌriːflekˈtɒmɪtri/', '反射仪', 'reflect反射 + metry → 反射仪'],
         ['scatterometry', '/ˌskætəˈrɒmɪtri/', '散射仪', 'scatter散射 + metry → 散射仪']],
        ['optical metrology (光学计量)', 'film thickness measurement (膜厚测量)', 'critical dimension measurement (关键尺寸测量)', 'overlay measurement (套刻测量)'],
        'metrology（计量）→ 测量薄膜和图形参数的仪器 → 计量'],

    [343, 'profilometer', '/ˌprəʊfɪˈlɒmɪtər/', 'n.', '轮廓仪',
        [['profilometer', '/ˌprəʊfɪˈlɒmɪtər/', '轮廓仪', 'profile轮廓 + meter计 → 轮廓仪'],
         ['stylus', '/ˈstaɪləs/', '探针', 'stylus探针 → 轮廓仪探针'],
         ['step height', '/step haɪt/', '台阶高度', 'step台阶 + height高度 → 台阶高度'],
         ['roughness', '/ˈrʌfnəs/', '粗糙度', 'rough粗糙 + ness → 粗糙度']],
        ['surface profilometer (表面轮廓仪)', 'step height measurement (台阶高度测量)', 'surface roughness (表面粗糙度)', 'film thickness (膜厚)'],
        'profilometer（轮廓仪）→ 测量表面轮廓和台阶高度的仪器 → 轮廓仪'],

    [344, 'AFM', '/ˌeɪ ef ˈem/', 'n.', '原子力显微镜',
        [['AFM', '/ˌeɪ ef ˈem/', '原子力显微镜', 'Atomic Force Microscope → AFM'],
         ['cantilever', '/ˈkæntɪliːvər/', '悬臂', 'cantilever悬臂 → AFM探针'],
         ['tip', '/tɪp/', '针尖', 'tip尖端 → AFM针尖'],
         ['tapping mode', '/ˈtæpɪŋ məʊd/', '轻敲模式', 'tapping轻敲 + mode模式 → 轻敲模式']],
        ['atomic force microscopy (原子力显微镜)', 'scanning probe microscopy (扫描探针显微镜)', 'AFM image (AFM图像)', 'surface topography (表面形貌)'],
        'AFM（原子力显微镜）→ 用探针扫描表面形貌的显微镜 → AFM'],

    [345, 'SEM', '/ˌes iː ˈem/', 'n.', '扫描电子显微镜',
        [['SEM', '/ˌes iː ˈem/', '扫描电子显微镜', 'Scanning Electron Microscope → SEM'],
         ['electron beam', '/ɪˈlektrɒn biːm/', '电子束', 'electron电子 + beam束 → 电子束'],
         ['magnification', '/ˌmæɡnɪfɪˈkeɪʃn/', '放大倍率', 'magnify放大 + cation → 放大倍率'],
         ['secondary electron', '/ˈsekəndri ɪˈlektrɒn/', '二次电子', 'secondary二次 + electron → 二次电子']],
        ['scanning electron microscopy (扫描电子显微镜)', 'SEM image (SEM图像)', 'cross-section SEM (截面SEM)', 'high resolution SEM (高分辨SEM)'],
        'SEM（扫描电子显微镜）→ 用电子束成像的显微镜 → SEM'],

    [346, 'TEM', '/ˌtiː iː ˈem/', 'n.', '透射电子显微镜',
        [['TEM', '/ˌtiː iː ˈem/', '透射电子显微镜', 'Transmission Electron Microscope → TEM'],
         ['transmission', '/trænzˈmɪʃn/', '透射', 'transmit透射 + ion → 透射'],
         ['thin film', '/θɪn fɪlm/', '薄膜', 'thin薄 + film膜 → 薄膜'],
         ['lattice', '/ˈlætɪs/', '晶格', 'lattice晶格 → 晶体结构']],
        ['transmission electron microscopy (透射电子显微镜)', 'TEM cross-section (TEM截面)', 'high resolution TEM (高分辨TEM)', 'electron diffraction (电子衍射)'],
        'TEM（透射电子显微镜）→ 透射电子成像的高分辨显微镜 → TEM'],

    [347, 'XRD', '/ˌeks ɑːr ˈdiː/', 'n.', 'X射线衍射',
        [['XRD', '/ˌeks ɑːr ˈdiː/', 'X射线衍射', 'X-Ray Diffraction → XRD'],
         ['diffraction', '/dɪˈfrækʃn/', '衍射', 'diffract衍射 + ion → 衍射'],
         ['crystal', '/ˈkrɪstl/', '晶体', 'crystal晶体'],
         ['orientation', '/ˌɔːriənˈteɪʃn/', '取向', 'orient定向 + ation → 取向']],
        ['X-ray diffraction (X射线衍射)', 'crystal orientation (晶体取向)', 'lattice constant (晶格常数)', 'phase analysis (相分析)'],
        'XRD（X射线衍射）→ 分析晶体结构的表征技术 → XRD'],

    [348, 'SIMS', '/sɪmz/', 'n.', '二次离子质谱',
        [['SIMS', '/sɪmz/', '二次离子质谱', 'Secondary Ion Mass Spectrometry → SIMS'],
         ['mass spectrometry', '/mæs spekˈtrɒmɪtri/', '质谱', 'mass质量 + spectrometry谱学 → 质谱'],
         ['depth profile', '/depθ ˈprəʊfaɪl/', '深度剖面', 'depth深度 + profile剖面 → 深度剖面'],
         ['dopant', '/ˈdəʊpənt/', '掺杂剂', 'dope掺杂 + -ant → 掺杂剂']],
        ['secondary ion mass spectrometry (二次离子质谱)', 'depth profiling (深度剖析)', 'dopant profile (掺杂剖面)', 'impurity analysis (杂质分析)'],
        'SIMS（二次离子质谱）→ 分析元素深度分布的技术 → SIMS'],

    [349, 'electrical', '/ɪˈlektrɪkl/', 'adj.', '电学的',
        [['electrical', '/ɪˈlektrɪkl/', '电学的', 'electric电 + -al → 电学的'],
         ['parameter', '/pəˈræmɪtər/', '参数', 'para旁 + meter测量 → 参数'],
         ['I-V', '/aɪ viː/', '电流-电压', 'Current-Voltage → I-V特性'],
         ['C-V', '/siː viː/', '电容-电压', 'Capacitance-Voltage → C-V特性']],
        ['electrical test (电学测试)', 'I-V measurement (I-V测量)', 'C-V measurement (C-V测量)', 'parameter extraction (参数提取)'],
        'electrical（电学的）→ 电学特性的测量和分析 → 电学测试'],

    [350, 'prober', '/ˈprəʊbər/', 'n.', '探针台',
        [['prober', '/ˈprəʊbər/', '探针台', 'probe探针 + -er器 → 探针台'],
         ['probe card', '/prəʊb kɑːrd/', '探针卡', 'probe探针 + card卡 → 探针卡'],
         ['chuck', '/tʃʌk/', '卡盘', 'chuck卡盘 → 晶圆卡盘'],
         ['manipulator', '/məˈnɪpjuleɪtər/', '操纵器', 'manipulate操纵 + -or → 操纵器']],
        ['wafer prober (晶圆探针台)', 'automatic prober (自动探针台)', 'probe card interface (探针卡接口)', 'hot chuck (热卡盘)'],
        'prober（探针台）→ 进行晶圆级电学测试的设备 → 探针台'],
];

processBatch(moreEntries);
console.log('Added more entries 326-350. Total:', newEntries.length);

console.log('Total new entries created:', newEntries.length);

// Save new entries
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/new_entries_partial.json', JSON.stringify(newEntries, null, 2));
console.log('Saved entries to new_entries_partial.json');
