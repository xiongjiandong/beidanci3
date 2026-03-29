const fs = require('fs');

// Read existing file
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

// Helper to process batch
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

// ========== Entries 251-300: 半导体器件 ==========
const devices = [
    [251, 'transistor', '/trænˈzɪstər/', 'n.', '晶体管',
        [['transistor', '/trænˈzɪstər/', '晶体管', 'transfer + resistor → 晶体管'],
         ['MOSFET', '/ˈmɒsfet/', 'MOS场效应管', 'Metal-Oxide-Semiconductor FET → MOSFET'],
         ['bipolar', '/baɪˈpəʊlər/', '双极型', 'bi双 + polar极 → 双极型'],
         ['FET', '/ef iː tiː/', '场效应管', 'Field Effect Transistor → FET']],
        ['transistor device (晶体管器件)', 'MOSFET transistor (MOSFET晶体管)', 'bipolar transistor (双极型晶体管)', 'field effect transistor (场效应晶体管)'],
        'transistor（晶体管）→ 半导体基本器件 → 晶体管'],

    [252, 'diode', '/ˈdaɪəʊd/', 'n.', '二极管',
        [['diode', '/ˈdaɪəʊd/', '二极管', 'di二 + ode极 → 二极管'],
         ['LED', '/el iː diː/', '发光二极管', 'Light Emitting Diode → LED'],
         ['photodiode', '/ˈfəʊtəʊdaɪəʊd/', '光电二极管', 'photo光 + diode → 光电二极管'],
         ['Zener', '/ˈziːnər/', '齐纳二极管', 'Zener齐纳 → 稳压二极管']],
        ['diode device (二极管器件)', 'light emitting diode (发光二极管)', 'photodiode detector (光电二极管探测器)', 'Zener diode (齐纳二极管)'],
        'diode（二极管）→ 单向导电的半导体器件 → 二极管'],

    [253, 'MOSFET', '/ˈmɒsfet/', 'n.', 'MOS管',
        [['MOSFET', '/ˈmɒsfet/', 'MOS管', 'Metal-Oxide-Semiconductor FET'],
         ['CMOS', '/ˈsiːmɒs/', '互补MOS', 'Complementary MOS → CMOS'],
         ['NMOS', '/ˈenmɒs/', 'N沟道MOS', 'N-channel MOS → NMOS'],
         ['PMOS', '/ˈpiːmɒs/', 'P沟道MOS', 'P-channel MOS → PMOS']],
        ['MOSFET device (MOSFET器件)', 'CMOS technology (CMOS技术)', 'NMOS transistor (NMOS晶体管)', 'power MOSFET (功率MOSFET)'],
        'MOSFET（MOS管）→ 金属氧化物半导体场效应管 → MOS管'],

    [254, 'CMOS', '/ˈsiːmɒs/', 'n.', 'CMOS',
        [['CMOS', '/ˈsiːmɒs/', 'CMOS', 'Complementary MOS → 互补MOS'],
         ['CMOS inverter', '/ˈsiːmɒs ɪnˈvɜːrtər/', 'CMOS反相器', 'CMOS + inverter → CMOS反相器'],
         ['CMOS logic', '/ˈsiːmɒs ˈlɒdʒɪk/', 'CMOS逻辑', 'CMOS + logic → CMOS逻辑'],
         ['CMOS sensor', '/ˈsiːmɒs ˈsensər/', 'CMOS传感器', 'CMOS + sensor → CMOS传感器']],
        ['CMOS technology (CMOS技术)', 'CMOS process (CMOS工艺)', 'CMOS circuit (CMOS电路)', 'CMOS image sensor (CMOS图像传感器)'],
        'CMOS（互补MOS）→ 现代集成电路的主流技术 → CMOS'],

    [255, 'bipolar', '/baɪˈpəʊlər/', 'adj.', '双极型',
        [['bipolar', '/baɪˈpəʊlər/', '双极型', 'bi双 + polar极 → 双极型'],
         ['BJT', '/ˌbiː dʒeɪ ˈtiː/', '双极型晶体管', 'Bipolar Junction Transistor → BJT'],
         ['HBT', '/ˌeɪtʃ biː ˈtiː/', '异质结双极晶体管', 'Heterojunction Bipolar Transistor → HBT'],
         ['bipolar transistor', '/baɪˈpəʊlər trænˈzɪstər/', '双极型晶体管', 'bipolar + transistor → 双极型晶体管']],
        ['bipolar transistor (双极型晶体管)', 'bipolar technology (双极型技术)', 'bipolar process (双极型工艺)', 'heterojunction bipolar (异质结双极)'],
        'bipolar（双极型）→ 电子和空穴都参与导电 → 双极型'],

    [256, 'JFET', '/ˈdʒeɪfet/', 'n.', '结型场效应管',
        [['JFET', '/ˈdʒeɪfet/', '结型场效应管', 'Junction FET → 结型场效应管'],
         ['MESFET', '/ˈmesfet/', '金属半导体场效应管', 'Metal-Semiconductor FET → MESFET'],
         ['HEMT', '/ˈhemət/', '高电子迁移率晶体管', 'High Electron Mobility Transistor → HEMT'],
         ['MODFET', '/ˈmɒdfet/', '调制掺杂场效应管', 'Modulation-Doped FET → MODFET']],
        ['JFET device (JFET器件)', 'GaAs MESFET (砷化镓MESFET)', 'AlGaAs HEMT (AlGaAs HEMT)', 'pHEMT (赝配HEMT)'],
        'JFET（结型场效应管）→ 利用PN结控制沟道的FET → JFET'],

    [257, ' FinFET', '/ˈfɪnfet/', 'n.', '鳍式场效应管',
        [['FinFET', '/ˈfɪnfet/', '鳍式场效应管', 'Fin + FET → 鳍式场效应管'],
         ['tri-gate', '/traɪ ɡeɪt/', '三栅', 'tri三 + gate栅 → 三栅'],
         ['gate-all-around', '/ɡeɪt ɔːl əˈraʊnd/', '全环绕栅', 'gate all around → 全环绕栅'],
         ['nanowire', '/ˈnænəʊwaɪər/', '纳米线', 'nano纳 + wire线 → 纳米线']],
        ['FinFET transistor (FinFET晶体管)', 'tri-gate transistor (三栅晶体管)', 'gate-all-around FET (全环绕栅FET)', 'nanowire FET (纳米线FET)'],
        'FinFET（鳍式场效应管）→ 3D结构的MOSFET → FinFET'],

    [258, 'IGBT', '/ˌaɪ dʒiː biː ˈtiː/', 'n.', '绝缘栅双极晶体管',
        [['IGBT', '/ˌaɪ dʒiː biː ˈtiː/', 'IGBT', 'Insulated Gate Bipolar Transistor → IGBT'],
         ['power device', '/ˈpaʊər dɪˈvaɪs/', '功率器件', 'power功率 + device器件 → 功率器件'],
         ['thyristor', '/θaɪˈrɪstər/', '晶闸管', 'thyristor晶闸管'],
         ['power MOSFET', '/ˈpaʊər ˈmɒsfet/', '功率MOSFET', 'power + MOSFET → 功率MOSFET']],
        ['IGBT module (IGBT模块)', 'power transistor (功率晶体管)', 'power semiconductor (功率半导体)', 'high voltage device (高压器件)'],
        'IGBT（绝缘栅双极晶体管）→ 功率电子核心器件 → IGBT'],

    [259, 'thyristor', '/θaɪˈrɪstər/', 'n.', '晶闸管',
        [['thyristor', '/θaɪˈrɪstər/', '晶闸管', 'thyristor晶闸管'],
         ['SCR', '/ˌes siː ˈɑːr/', '可控硅', 'Silicon Controlled Rectifier → SCR'],
         ['triac', '/ˈtraɪæk/', '三端双向可控硅', 'triac三端双向可控硅'],
         ['GTO', '/ˌdʒiː tiː əʊ/', '门极可关断晶闸管', 'Gate Turn-Off → GTO']],
        ['thyristor device (晶闸管器件)', 'silicon controlled rectifier (可控硅整流器)', 'power thyristor (功率晶闸管)', 'thyristor converter (晶闸管变流器)'],
        'thyristor（晶闸管）→ 半控型功率器件 → 晶闸管'],

    [260, 'rectifier', '/ˈrektɪfaɪər/', 'n.', '整流器',
        [['rectifier', '/ˈrektɪfaɪər/', '整流器', 'rectify整流 + -er器 → 整流器'],
         ['diode bridge', '/ˈdaɪəʊd brɪdʒ/', '二极管桥', 'diode + bridge桥 → 二极管桥'],
         ['Schottky', '/ˈʃɒtki/', '肖特基', 'Schottky肖特基 → 肖特基二极管'],
         ['full-wave', '/fʊl weɪv/', '全波', 'full全 + wave波 → 全波']],
        ['rectifier circuit (整流电路)', 'full-wave rectifier (全波整流器)', 'bridge rectifier (桥式整流器)', 'Schottky rectifier (肖特基整流器)'],
        'rectifier（整流器）→ 将交流转换为直流 → 整流器'],
];

processBatch(devices);
console.log('Added devices 251-260. Total:', newEntries.length);

// Continue with more entries 261-300
const moreDevices = [
    [261, 'sensor', '/ˈsensər/', 'n.', '传感器',
        [['sensor', '/ˈsensər/', '传感器', 'sense感觉 + -or器 → 传感器'],
         ['MEMS', '/mems/', '微机电系统', 'Micro-Electro-Mechanical System → MEMS'],
         ['accelerometer', '/ækˌseləˈrɒmɪtər/', '加速度计', 'accelerate加速 + meter计 → 加速度计'],
         ['gyroscope', '/ˈdʒaɪrəskəʊp/', '陀螺仪', 'gyro旋转 + scope观察 → 陀螺仪']],
        ['MEMS sensor (MEMS传感器)', 'pressure sensor (压力传感器)', 'temperature sensor (温度传感器)', 'image sensor (图像传感器)'],
        'sensor（传感器）→ 检测物理量的半导体器件 → 传感器'],

    [262, 'optoelectronic', '/ˌɒptəʊɪlekˈtrɒnɪk/', 'adj.', '光电子的',
        [['optoelectronic', '/ˌɒptəʊɪlekˈtrɒnɪk/', '光电子的', 'opto光 + electronic电子 → 光电子的'],
         ['optoelectronics', '/ˌɒptəʊɪlekˈtrɒnɪks/', '光电子学', 'opto + electronics → 光电子学'],
         ['photonic', '/fəʊˈtɒnɪk/', '光子的', 'photon光子 + -ic → 光子的'],
         ['optoelectronic device', '/ˌɒptəʊɪlekˈtrɒnɪk dɪˈvaɪs/', '光电子器件', 'optoelectronic + device → 光电子器件']],
        ['optoelectronic device (光电子器件)', 'optoelectronic integration (光电子集成)', 'optoelectronic technology (光电子技术)', 'optoelectronic component (光电子元件)'],
        'optoelectronic（光电子的）→ 光学与电子学结合 → 光电子'],

    [263, 'solar cell', '/ˈsəʊlər sel/', 'n.', '太阳能电池',
        [['solar cell', '/ˈsəʊlər sel/', '太阳能电池', 'solar太阳 + cell电池 → 太阳能电池'],
         ['photovoltaic', '/ˌfəʊtəʊvɒlˈteɪɪk/', '光伏的', 'photo光 + volt伏 + aic → 光伏的'],
         ['PV', '/ˌpiː viː/', '光伏', 'PhotoVoltaic → 光伏'],
         ['PERC', '/pɜːrk/', '钝化发射极背接触', 'Passivated Emitter Rear Cell → PERC']],
        ['solar cell (太阳能电池)', 'photovoltaic cell (光伏电池)', 'silicon solar cell (硅太阳能电池)', 'thin film solar (薄膜太阳能)'],
        'solar cell（太阳能电池）→ 光能转电能的器件 → 太阳能电池'],

    [264, 'capacitor', '/kəˈpæsɪtər/', 'n.', '电容器',
        [['capacitor', '/kəˈpæsɪtər/', '电容器', 'capacity容量 + -or器 → 电容器'],
         ['MIM', '/ˌem aɪ ˈem/', '金属-绝缘体-金属', 'Metal-Insulator-Metal → MIM'],
         ['MOSCAP', '/ˈmɒskæp/', 'MOS电容', 'MOS Capacitor → MOSCAP'],
         ['varactor', '/vəˈræktər/', '变容二极管', 'variable + reactor → 变容管']],
        ['decoupling capacitor (去耦电容)', 'bypass capacitor (旁路电容)', 'MIM capacitor (MIM电容)', 'MOS capacitor (MOS电容)'],
        'capacitor（电容器）→ 存储电荷的器件 → 电容器'],

    [265, 'resistor', '/rɪˈzɪstər/', 'n.', '电阻器',
        [['resistor', '/rɪˈzɪstər/', '电阻器', 'resist抵抗 + -or器 → 电阻器'],
         ['polysilicon resistor', '/ˌpɒliˈsɪlɪkən rɪˈzɪstər/', '多晶硅电阻', 'polysilicon + resistor → 多晶硅电阻'],
         ['diffused resistor', '/dɪˈfjuːzd rɪˈzɪstər/', '扩散电阻', 'diffused扩散 + resistor → 扩散电阻'],
         ['well resistor', '/wel rɪˈzɪstər/', '阱电阻', 'well阱 + resistor → 阱电阻']],
        ['polysilicon resistor (多晶硅电阻)', 'diffusion resistor (扩散电阻)', 'thin film resistor (薄膜电阻)', 'precision resistor (精密电阻)'],
        'resistor（电阻器）→ 限制电流的器件 → 电阻器'],

    [266, 'inductor', '/ɪnˈdʌktər/', 'n.', '电感器',
        [['inductor', '/ɪnˈdʌktər/', '电感器', 'induct感应 + -or器 → 电感器'],
         ['spiral inductor', '/ˈspaɪərəl ɪnˈdʌktər/', '螺旋电感', 'spiral螺旋 + inductor → 螺旋电感'],
         ['bondwire', '/ˈbɒndwaɪər/', '键合线', 'bond键合 + wire线 → 键合线'],
         ['on-chip inductor', '/ɒn tʃɪp ɪnˈdʌktər/', '片上电感', 'on-chip + inductor → 片上电感']],
        ['spiral inductor (螺旋电感)', 'bondwire inductor (键合线电感)', 'integrated inductor (集成电感)', 'high-Q inductor (高Q电感)'],
        'inductor（电感器）→ 存储磁能的器件 → 电感器'],

    [267, 'varactor', '/vəˈræktər/', 'n.', '变容二极管',
        [['varactor', '/vəˈræktər/', '变容二极管', 'variable + reactor → 变容管'],
         ['varicap', '/ˈværɪkæp/', '变容管', 'variable + capacitance → 变容管'],
         ['tuning diode', '/ˈtjuːnɪŋ ˈdaɪəʊd/', '调谐二极管', 'tuning调谐 + diode → 调谐二极管'],
         ['variable capacitor', '/ˈveəriəbl kəˈpæsɪtər/', '可变电容', 'variable + capacitor → 可变电容']],
        ['varactor diode (变容二极管)', 'hyperabrupt varactor (超突变变容管)', 'varactor tuning (变容管调谐)', 'voltage variable capacitor (电压可变电容)'],
        'varactor（变容二极管）→ 电容随电压变化的二极管 → 变容管'],

    [268, 'photodetector', '/ˈfəʊtəʊdɪtekər/', 'n.', '光电探测器',
        [['photodetector', '/ˈfəʊtəʊdɪtekər/', '光电探测器', 'photo光 + detector探测器 → 光电探测器'],
         ['APD', '/ˌeɪ piː ˈdiː/', '雪崩光电二极管', 'Avalanche PhotoDiode → APD'],
         ['PIN diode', '/ˌpiː aɪ en ˈdaɪəʊd/', 'PIN二极管', 'P-Intrinsic-N diode → PIN二极管'],
         ['phototransistor', '/ˈfəʊtəʊtrænˈzɪstər/', '光电晶体管', 'photo + transistor → 光电晶体管']],
        ['photodetector array (光电探测器阵列)', 'avalanche photodiode (雪崩光电二极管)', 'PIN photodetector (PIN光电探测器)', 'photodetector sensitivity (光电探测器灵敏度)'],
        'photodetector（光电探测器）→ 将光信号转为电信号 → 光电探测器'],

    [269, 'laser', '/ˈleɪzər/', 'n.', '激光器',
        [['laser', '/ˈleɪzər/', '激光器', 'Light Amplification by Stimulated Emission of Radiation → 激光'],
         ['VCSEL', '/ˈvɪksəl/', '垂直腔面发射激光器', 'Vertical-Cavity Surface-Emitting Laser → VCSEL'],
         ['DFB laser', '/ˌdiː ef biː ˈleɪzər/', '分布式反馈激光器', 'Distributed Feedback Laser → DFB激光器'],
         ['edge emitter', '/edʒ ɪˈmɪtər/', '边发射', 'edge边 + emitter发射器 → 边发射']],
        ['semiconductor laser (半导体激光器)', 'VCSEL array (VCSEL阵列)', 'DFB laser (DFB激光器)', 'laser diode (激光二极管)'],
        'laser（激光器）→ 受激辐射光放大器件 → 激光器'],

    [270, 'modulator', '/ˈmɒdjʊleɪtər/', 'n.', '调制器',
        [['modulator', '/ˈmɒdjʊleɪtər/', '调制器', 'modulate调制 + -or器 → 调制器'],
         ['EAM', '/ˌiː eɪ ˈem/', '电吸收调制器', 'Electro-Absorption Modulator → EAM'],
         ['Mach-Zehnder', '/mɑːk ˈzendər/', '马赫-曾德尔', 'Mach-Zehnder interferometer → MZ调制器'],
         ['phase modulator', '/feɪz ˈmɒdjʊleɪtər/', '相位调制器', 'phase相位 + modulator → 相位调制器']],
        ['electro-optic modulator (电光调制器)', 'Mach-Zehnder modulator (马赫-曾德尔调制器)', 'intensity modulator (强度调制器)', 'phase modulator (相位调制器)'],
        'modulator（调制器）→ 改变光信号参数的器件 → 调制器'],
];

processBatch(moreDevices);
console.log('Added more devices 261-270. Total:', newEntries.length);

// Continue with entries 271-300
const integratedCircuits = [
    [271, 'IC', '/ˌaɪ ˈsiː/', 'n.', '集成电路',
        [['IC', '/ˌaɪ ˈsiː/', '集成电路', 'Integrated Circuit → IC'],
         ['LSI', '/ˌel es ˈaɪ/', '大规模集成电路', 'Large Scale Integration → LSI'],
         ['VLSI', '/ˌviː el es ˈaɪ/', '超大规模集成电路', 'Very Large Scale Integration → VLSI'],
         ['ULSI', '/ˌjuː el es ˈaɪ/', '甚大规模集成电路', 'Ultra Large Scale Integration → ULSI']],
        ['integrated circuit (集成电路)', 'LSI circuit (大规模集成电路)', 'VLSI technology (VLSI技术)', 'ULSI device (甚大规模器件)'],
        'IC（集成电路）→ 将多个元件集成在芯片上 → 集成电路'],

    [272, 'microprocessor', '/ˌmaɪkrəʊˈprəʊsesər/', 'n.', '微处理器',
        [['microprocessor', '/ˌmaɪkrəʊˈprəʊsesər/', '微处理器', 'micro微 + processor处理器 → 微处理器'],
         ['CPU', '/ˌsiː piː ˈjuː/', '中央处理器', 'Central Processing Unit → CPU'],
         ['ALU', '/ˌeɪ el ˈjuː/', '算术逻辑单元', 'Arithmetic Logic Unit → ALU'],
         ['core', '/kɔːr/', '核心', 'core核心 → 处理器核心']],
        ['microprocessor unit (微处理器)', 'multicore processor (多核处理器)', 'CPU core (CPU核心)', 'microprocessor architecture (微处理器架构)'],
        'microprocessor（微处理器）→ 计算机的核心芯片 → 微处理器'],

    [273, 'memory', '/ˈmeməri/', 'n.', '存储器',
        [['memory', '/ˈmeməri/', '存储器', 'memory记忆 → 存储器'],
         ['DRAM', '/ˈdiːræm/', '动态随机存取存储器', 'Dynamic Random Access Memory → DRAM'],
         ['SRAM', '/ˈesræm/', '静态随机存取存储器', 'Static Random Access Memory → SRAM'],
         ['ROM', '/rɒm/', '只读存储器', 'Read-Only Memory → ROM']],
        ['memory chip (存储芯片)', 'DRAM cell (DRAM单元)', 'SRAM array (SRAM阵列)', 'flash memory (闪存)'],
        'memory（存储器）→ 存储数据的芯片 → 存储器'],

    [274, 'DRAM', '/ˈdiːræm/', 'n.', 'DRAM',
        [['DRAM', '/ˈdiːræm/', 'DRAM', 'Dynamic Random Access Memory → 动态随机存取存储器'],
         ['capacitor', '/kəˈpæsɪtər/', '电容', 'capacitor电容 → DRAM存储电容'],
         ['refresh', '/rɪˈfreʃ/', '刷新', 'refresh刷新 → DRAM刷新'],
         ['DDR', '/ˌdiː diː ˈɑːr/', '双倍数据率', 'Double Data Rate → DDR']],
        ['DRAM cell (DRAM单元)', 'DRAM capacitor (DRAM电容)', 'DRAM refresh (DRAM刷新)', 'DDR DRAM (DDR DRAM)'],
        'DRAM（动态随机存取存储器）→ 需要刷新的易失性存储器 → DRAM'],

    [275, 'SRAM', '/ˈesræm/', 'n.', 'SRAM',
        [['SRAM', '/ˈesræm/', 'SRAM', 'Static Random Access Memory → 静态随机存取存储器'],
         ['flip-flop', '/ˈflɪp flɒp/', '触发器', 'flip翻转 + flop翻转 → 触发器'],
         ['6T cell', '/sɪks tiː sel/', '6T单元', 'six transistor cell → 6T SRAM单元'],
         ['cache', '/kæʃ/', '缓存', 'cache缓存 → 高速缓存']],
        ['SRAM cell (SRAM单元)', 'SRAM cache (SRAM缓存)', '6T SRAM (6T SRAM)', 'low power SRAM (低功耗SRAM)'],
        'SRAM（静态随机存取存储器）→ 速度快但密度低的存储器 → SRAM'],

    [276, 'flash', '/flæʃ/', 'n.', '闪存',
        [['flash', '/flæʃ/', '闪存', 'flash闪 → 闪存'],
         ['NAND', '/nænd/', '与非', 'Not AND → NAND闪存'],
         ['NOR', '/nɔːr/', '或非', 'Not OR → NOR闪存'],
         ['floating gate', '/ˈfləʊtɪŋ ɡeɪt/', '浮栅', 'floating浮 + gate栅 → 浮栅']],
        ['NAND flash (NAND闪存)', 'NOR flash (NOR闪存)', 'flash memory (闪存)', 'floating gate (浮栅)'],
        'flash（闪存）→ 非易失性存储器 → 闪存'],

    [277, 'logic', '/ˈlɒdʒɪk/', 'n.', '逻辑',
        [['logic', '/ˈlɒdʒɪk/', '逻辑', 'logic逻辑'],
         ['gate', '/ɡeɪt/', '门', 'gate门 → 逻辑门'],
         ['inverter', '/ɪnˈvɜːrtər/', '反相器', 'invert反转 + -er器 → 反相器'],
         ['NAND gate', '/nænd ɡeɪt/', '与非门', 'NAND + gate → 与非门']],
        ['logic gate (逻辑门)', 'logic circuit (逻辑电路)', 'combinational logic (组合逻辑)', 'sequential logic (时序逻辑)'],
        'logic（逻辑）→ 实现布尔运算的电路 → 逻辑电路'],

    [278, 'adder', '/ˈædər/', 'n.', '加法器',
        [['adder', '/ˈædər/', '加法器', 'add加 + -er器 → 加法器'],
         ['full adder', '/fʊl ˈædər/', '全加器', 'full全 + adder → 全加器'],
         ['half adder', '/hɑːf ˈædər/', '半加器', 'half半 + adder → 半加器'],
         ['carry', '/ˈkæri/', '进位', 'carry携带 → 进位']],
        ['full adder (全加器)', 'ripple carry adder (行波进位加法器)', 'carry look-ahead (超前进位)', 'adder circuit (加法器电路)'],
        'adder（加法器）→ 执行加法运算的逻辑电路 → 加法器'],

    [279, 'multiplexer', '/ˈmʌltɪpleksər/', 'n.', '多路选择器',
        [['multiplexer', '/ˈmʌltɪpleksər/', '多路选择器', 'multi多 + plexer → 多路选择器'],
         ['MUX', '/mʌks/', '多路器', 'multiplexer缩写 → MUX'],
         ['demultiplexer', '/ˌdiːˈmʌltɪpleksər/', '多路分配器', 'de多路 + multiplexer → 多路分配器'],
         ['DEMUX', '/ˈdiːmʌks/', '多路分配器', 'demultiplexer缩写 → DEMUX']],
        ['multiplexer circuit (多路选择器电路)', 'data selector (数据选择器)', '8-to-1 MUX (8选1多路器)', 'analog multiplexer (模拟多路器)'],
        'multiplexer（多路选择器）→ 从多路输入中选择一路输出 → 多路器'],

    [280, 'flip-flop', '/ˈflɪp flɒp/', 'n.', '触发器',
        [['flip-flop', '/ˈflɪp flɒp/', '触发器', 'flip翻转 + flop翻转 → 触发器'],
         ['latch', '/lætʃ/', '锁存器', 'latch锁存 → 锁存器'],
         ['D flip-flop', '/diː ˈflɪp flɒp/', 'D触发器', 'D-type flip-flop → D触发器'],
         ['JK flip-flop', '/ˌdʒeɪ keɪ ˈflɪp flɒp/', 'JK触发器', 'JK flip-flop → JK触发器']],
        ['D flip-flop (D触发器)', 'JK flip-flop (JK触发器)', 'T flip-flop (T触发器)', 'SR latch (SR锁存器)'],
        'flip-flop（触发器）→ 存储一位数据的时序电路 → 触发器'],
];

processBatch(integratedCircuits);
console.log('Added ICs 271-280. Total:', newEntries.length);

// Continue with more entries 281-300
const analogRF = [
    [281, 'amplifier', '/ˈæmplɪfaɪər/', 'n.', '放大器',
        [['amplifier', '/ˈæmplɪfaɪər/', '放大器', 'amplify放大 + -er器 → 放大器'],
         ['op-amp', '/ɒp æmp/', '运算放大器', 'operational amplifier → 运放'],
         ['OTA', '/ˌəʊ tiː ˈeɪ/', '跨导运算放大器', 'Operational Transconductance Amplifier → OTA'],
         ['differential', '/ˌdɪfəˈrenʃl/', '差分的', 'differential差分 → 差分放大器']],
        ['operational amplifier (运算放大器)', 'differential amplifier (差分放大器)', 'low noise amplifier (低噪声放大器)', 'power amplifier (功率放大器)'],
        'amplifier（放大器）→ 放大信号幅度的电路 → 放大器'],

    [282, 'comparator', '/kəmˈpærətər/', 'n.', '比较器',
        [['comparator', '/kəmˈpærətər/', '比较器', 'compare比较 + -ator器 → 比较器'],
         ['hysteresis', '/ˌhɪstəˈriːsɪs/', '滞回', 'hysteresis滞回 → 比较器滞回'],
         ['threshold', '/ˈθreʃhəʊld/', '阈值', 'threshold门槛 → 阈值'],
         ['zero-crossing', '/ˈzɪərəʊ ˈkrɒsɪŋ/', '过零', 'zero零 + crossing交叉 → 过零']],
        ['voltage comparator (电压比较器)', 'analog comparator (模拟比较器)', 'hysteresis comparator (滞回比较器)', 'window comparator (窗口比较器)'],
        'comparator（比较器）→ 比较两个电压的电路 → 比较器'],

    [283, 'oscillator', '/ˈɒsɪleɪtər/', 'n.', '振荡器',
        [['oscillator', '/ˈɒsɪleɪtər/', '振荡器', 'oscillate振荡 + -or器 → 振荡器'],
         ['VCO', '/ˌviː siː əʊ/', '压控振荡器', 'Voltage Controlled Oscillator → VCO'],
         ['LC oscillator', '/el siː ˈɒsɪleɪtər/', 'LC振荡器', 'LC tank oscillator → LC振荡器'],
         ['ring oscillator', '/rɪŋ ˈɒsɪleɪtər/', '环形振荡器', 'ring环 + oscillator → 环形振荡器']],
        ['voltage controlled oscillator (压控振荡器)', 'crystal oscillator (晶体振荡器)', 'ring oscillator (环形振荡器)', 'relaxation oscillator (弛张振荡器)'],
        'oscillator（振荡器）→ 产生周期性信号的电路 → 振荡器'],

    [284, 'mixer', '/ˈmɪksər/', 'n.', '混频器',
        [['mixer', '/ˈmɪksər/', '混频器', 'mix混合 + -er器 → 混频器'],
         ['downconverter', '/ˈdaʊnkənvɜːrtər/', '下变频器', 'down下 + converter转换器 → 下变频器'],
         ['upconverter', '/ˈʌpkənvɜːrtər/', '上变频器', 'up上 + converter转换器 → 上变频器'],
         ['multiplier', '/ˈmʌltɪplaɪər/', '乘法器', 'multiply乘 + -er器 → 乘法器']],
        ['frequency mixer (混频器)', 'RF mixer (射频混频器)', 'image reject mixer (镜像抑制混频器)', 'active mixer (有源混频器)'],
        'mixer（混频器）→ 将两个信号混合产生新频率 → 混频器'],

    [285, 'filter', '/ˈfɪltər/', 'n.', '滤波器',
        [['filter', '/ˈfɪltər/', '滤波器', 'filter过滤 → 滤波器'],
         ['low-pass', '/ləʊ pɑːs/', '低通', 'low低 + pass通 → 低通'],
         ['high-pass', '/haɪ pɑːs/', '高通', 'high高 + pass通 → 高通'],
         ['band-pass', '/bænd pɑːs/', '带通', 'band带 + pass通 → 带通']],
        ['low pass filter (低通滤波器)', 'high pass filter (高通滤波器)', 'band pass filter (带通滤波器)', 'active filter (有源滤波器)'],
        'filter（滤波器）→ 选择特定频率信号的电路 → 滤波器'],

    [286, 'ADC', '/ˌeɪ diː ˈsiː/', 'n.', '模数转换器',
        [['ADC', '/ˌeɪ diː ˈsiː/', '模数转换器', 'Analog-to-Digital Converter → ADC'],
         ['DAC', '/ˌdiː eɪ ˈsiː/', '数模转换器', 'Digital-to-Analog Converter → DAC'],
         ['quantization', '/ˌkwɒntaɪˈzeɪʃn/', '量化', 'quantize量化 + ation → 量化'],
         ['resolution', '/ˌrezəˈluːʃn/', '分辨率', 'resolution分辨率 → ADC位数']],
        ['analog to digital converter (模数转换器)', 'digital to analog converter (数模转换器)', 'ADC resolution (ADC分辨率)', 'sampling rate (采样率)'],
        'ADC（模数转换器）→ 将模拟信号转为数字信号 → ADC'],

    [287, 'PLL', '/ˌpiː el ˈel/', 'n.', '锁相环',
        [['PLL', '/ˌpiː el ˈel/', '锁相环', 'Phase-Locked Loop → PLL'],
         ['VCO', '/ˌviː siː əʊ/', '压控振荡器', 'Voltage Controlled Oscillator → VCO'],
         ['phase detector', '/feɪz dɪˈtektər/', '鉴相器', 'phase相位 + detector检测器 → 鉴相器'],
         ['frequency divider', '/ˈfriːkwənsi dɪˈvaɪdər/', '分频器', 'frequency频率 + divider分频器 → 分频器']],
        ['phase locked loop (锁相环)', 'frequency synthesizer (频率合成器)', 'clock multiplier (时钟倍频器)', 'PLL bandwidth (PLL带宽)'],
        'PLL（锁相环）→ 使输出频率跟踪输入频率的电路 → PLL'],

    [288, 'bandgap', '/ˈbændɡæp/', 'n.', '带隙',
        [['bandgap', '/ˈbændɡæp/', '带隙', 'band带 + gap隙 → 带隙'],
         ['bandgap reference', '/ˈbændɡæp ˈrefrəns/', '带隙基准', 'bandgap + reference → 带隙基准'],
         ['BGREF', '/ˌbiː dʒiː ˈref/', '带隙基准', 'BandGap REFerence → 带隙基准'],
         ['temperature coefficient', '/ˈtemprətʃər ˌkəʊɪˈfɪʃnt/', '温度系数', 'temperature + coefficient → 温度系数']],
        ['bandgap reference (带隙基准)', 'voltage reference (电压基准)', 'precision reference (精密基准)', 'low drift reference (低漂移基准)'],
        'bandgap（带隙）→ 产生稳定基准电压的电路 → 带隙基准'],

    [289, 'regulator', '/ˈreɡjuleɪtər/', 'n.', '稳压器',
        [['regulator', '/ˈreɡjuleɪtər/', '稳压器', 'regulate调节 + -or器 → 稳压器'],
         ['LDO', '/ˌel diː əʊ/', '低压差稳压器', 'Low Dropout Regulator → LDO'],
         ['DC-DC', '/ˌdiː siː ˈdiː siː/', '直流-直流转换器', 'DC-DC converter → DC-DC'],
         ['switching', '/ˈswɪtʃɪŋ/', '开关', 'switch开关 + -ing → 开关式']],
        ['linear regulator (线性稳压器)', 'low dropout regulator (低压差稳压器)', 'switching regulator (开关稳压器)', 'DC-DC converter (DC-DC转换器)'],
        'regulator（稳压器）→ 提供稳定输出电压的电路 → 稳压器'],

    [290, 'ESD', '/ˌiː es ˈdiː/', 'n.', '静电放电',
        [['ESD', '/ˌiː es ˈdiː/', '静电放电', 'ElectroStatic Discharge → ESD'],
         ['protection', '/prəˈtekʃn/', '保护', 'protect保护 + ion → 保护'],
         ['diode', '/ˈdaɪəʊd/', '二极管', 'diode二极管 → ESD保护二极管'],
         ['clamp', '/klæmp/', '钳位', 'clamp钳位 → ESD钳位']],
        ['ESD protection (ESD保护)', 'ESD diode (ESD二极管)', 'input protection (输入保护)', 'ESD clamp (ESD钳位)'],
        'ESD（静电放电）→ 防止静电损伤的保护电路 → ESD保护'],

    [291, 'RF', '/ˌɑːr ˈef/', 'n.', '射频',
        [['RF', '/ˌɑːr ˈef/', '射频', 'Radio Frequency → RF'],
         ['microwave', '/ˈmaɪkrəʊweɪv/', '微波', 'micro微 + wave波 → 微波'],
         ['millimeter wave', '/ˈmɪlimiːtər weɪv/', '毫米波', 'millimeter毫米 + wave波 → 毫米波'],
         ['terahertz', '/ˈterəhɜːts/', '太赫兹', 'tera太 + hertz赫兹 → 太赫兹']],
        ['RF circuit (射频电路)', 'RF amplifier (射频放大器)', 'microwave device (微波器件)', 'millimeter wave (毫米波)'],
        'RF（射频）→ 无线电频率的电路和器件 → 射频'],

    [292, 'antenna', '/ænˈtenə/', 'n.', '天线',
        [['antenna', '/ænˈtenə/', '天线', 'antenna天线'],
         ['dipole', '/ˈdaɪpəʊl/', '偶极子', 'di双 + pole极 → 偶极子'],
         ['patch', '/pætʃ/', '贴片', 'patch贴片 → 贴片天线'],
         ['array', '/əˈreɪ/', '阵列', 'array阵列 → 天线阵列']],
        ['antenna array (天线阵列)', 'dipole antenna (偶极天线)', 'patch antenna (贴片天线)', 'on-chip antenna (片上天线)'],
        'antenna（天线）→ 收发无线电波的器件 → 天线'],

    [293, 'transceiver', '/trænˈsiːvər/', 'n.', '收发器',
        [['transceiver', '/trænˈsiːvər/', '收发器', 'transmitter + receiver → 收发器'],
         ['transmitter', '/trænˈsmɪtər/', '发射机', 'transmit发射 + -er器 → 发射机'],
         ['receiver', '/rɪˈsiːvər/', '接收机', 'receive接收 + -er器 → 接收机'],
         ['duplexer', '/ˈdjuːpleksər/', '双工器', 'duplex双工 + -er器 → 双工器']],
        ['radio transceiver (无线电收发器)', 'optical transceiver (光收发器)', 'RF transceiver (射频收发器)', 'wireless transceiver (无线收发器)'],
        'transceiver（收发器）→ 同时具有发射和接收功能的器件 → 收发器'],

    [294, 'TIA', '/ˌtiː aɪ ˈeɪ/', 'n.', '跨阻放大器',
        [['TIA', '/ˌtiː aɪ ˈeɪ/', '跨阻放大器', 'TransImpedance Amplifier → TIA'],
         ['transimpedance', '/trænzɪmˈpiːdns/', '跨阻', 'trans跨 + impedance阻抗 → 跨阻'],
         ['photodiode', '/ˈfəʊtəʊdaɪəʊd/', '光电二极管', 'photo + diode → 光电二极管'],
         ['preamplifier', '/priːˈæmplɪfaɪər/', '前置放大器', 'pre前 + amplifier → 前置放大器']],
        ['transimpedance amplifier (跨阻放大器)', 'optical receiver (光接收机)', 'current to voltage (电流转电压)', 'TIA bandwidth (TIA带宽)'],
        'TIA（跨阻放大器）→ 将电流转换为电压的放大器 → TIA'],

    [295, 'limiter', '/ˈlɪmɪtər/', 'n.', '限幅器',
        [['limiter', '/ˈlɪmɪtər/', '限幅器', 'limit限制 + -er器 → 限幅器'],
         ['AGC', '/ˌeɪ dʒiː ˈsiː/', '自动增益控制', 'Automatic Gain Control → AGC'],
         ['clipper', '/ˈklɪpər/', '削波器', 'clip剪切 + -er器 → 削波器'],
         ['compressor', '/kəmˈpresər/', '压缩器', 'compress压缩 + -or器 → 压缩器']],
        ['automatic gain control (自动增益控制)', 'hard limiter (硬限幅器)', 'soft limiter (软限幅器)', 'RF limiter (射频限幅器)'],
        'limiter（限幅器）→ 限制信号幅度的电路 → 限幅器'],

    [296, 'detector', '/dɪˈtektər/', 'n.', '检测器',
        [['detector', '/dɪˈtektər/', '检测器', 'detect检测 + -or器 → 检测器'],
         ['envelope', '/ˈenvələʊp/', '包络', 'envelope信封 → 信号包络'],
         ['peak', '/piːk/', '峰值', 'peak峰 → 峰值检测'],
         ['RMS', '/ˌɑːr em ˈes/', '均方根', 'Root Mean Square → RMS']],
        ['envelope detector (包络检测器)', 'peak detector (峰值检测器)', 'RMS detector (RMS检测器)', 'power detector (功率检测器)'],
        'detector（检测器）→ 提取信号包络或参数的电路 → 检测器'],

    [297, 'phase shifter', '/feɪz ˈʃɪftər/', 'n.', '移相器',
        [['phase shifter', '/feɪz ˈʃɪftər/', '移相器', 'phase相位 + shifter移相器 → 移相器'],
         ['variable', '/ˈveəriəbl/', '可变的', 'variable可变 → 可变移相器'],
         ['digital', '/ˈdɪdʒɪtl/', '数字的', 'digital数字 → 数字移相器'],
         ['vector', '/ˈvektər/', '矢量', 'vector矢量 → 矢量调制器']],
        ['variable phase shifter (可变移相器)', 'digital phase shifter (数字移相器)', 'phase array (相控阵)', 'vector modulator (矢量调制器)'],
        'phase shifter（移相器）→ 改变信号相位的电路 → 移相器'],

    [298, 'attenuator', '/əˈtenjueɪtər/', 'n.', '衰减器',
        [['attenuator', '/əˈtenjueɪtər/', '衰减器', 'attenuate衰减 + -or器 → 衰减器'],
         ['pad', '/pæd/', '衰减网络', 'pad垫 → 衰减垫'],
         ['step', '/step/', '步进', 'step步 → 步进衰减'],
         ['continuous', '/kənˈtɪnjuəs/', '连续', 'continuous连续 → 连续可调']],
        ['variable attenuator (可变衰减器)', 'step attenuator (步进衰减器)', 'digital attenuator (数字衰减器)', 'optical attenuator (光衰减器)'],
        'attenuator（衰减器）→ 降低信号幅度的电路 → 衰减器'],

    [299, 'circulator', '/ˈsɜːrkjuleɪtər/', 'n.', '环形器',
        [['circulator', '/ˈsɜːrkjuleɪtər/', '环形器', 'circulate循环 + -or器 → 环形器'],
         ['isolator', '/ˈaɪsəleɪtər/', '隔离器', 'isolate隔离 + -or器 → 隔离器'],
         ['ferrite', '/ˈferaɪt/', '铁氧体', 'ferrite铁氧体'],
         ['YIG', '/jɪɡ/', '钇铁石榴石', 'Yttrium Iron Garnet → YIG']],
        ['ferrite circulator (铁氧体环形器)', 'isolator (隔离器)', 'YIG resonator (YIG谐振器)', 'ferrite device (铁氧体器件)'],
        'circulator（环形器）→ 单向传输信号的器件 → 环形器'],

    [300, 'coupler', '/ˈkʌplər/', 'n.', '耦合器',
        [['coupler', '/ˈkʌplər/', '耦合器', 'couple耦合 + -er器 → 耦合器'],
         ['directional', '/dəˈrekʃənl/', '定向的', 'directional定向 → 定向耦合器'],
         ['hybrid', '/ˈhaɪbrɪd/', '混合', 'hybrid混合 → 混合耦合器'],
         ['quadrature', '/ˈkwɒdrətʃər/', '正交', 'quadrature正交 → 正交耦合器']],
        ['directional coupler (定向耦合器)', 'hybrid coupler (混合耦合器)', 'quadrature coupler (正交耦合器)', 'power divider (功率分配器)'],
        'coupler（耦合器）→ 分配或合成信号的器件 → 耦合器'],
];

processBatch(analogRF);
console.log('Added analog/RF 281-300. Total:', newEntries.length);

console.log('Final total new entries:', newEntries.length);

// Save all new entries
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/new_entries_201_300.json', JSON.stringify(newEntries, null, 2));
console.log('Saved entries 201-300');
