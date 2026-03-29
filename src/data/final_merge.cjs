const fs = require('fs');

// Read all data
const existingData = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));
const tempEntries = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/temp_entries.json', 'utf8'));

console.log('Existing entries:', existingData.length);
console.log('Generated new entries:', tempEntries.length);

// Need to generate 250 more entries (251-500)
const additionalEntries = [];

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

// Generate entries 251-300 (semiconductor devices)
const deviceTerms = [
    ['transistor', '/trænˈzɪstər/', 'n.', '晶体管', ['transistor device', 'MOSFET transistor', 'bipolar transistor', 'field effect transistor'], 'transistor（晶体管）→ 半导体基本器件 → 晶体管'],
    ['diode', '/ˈdaɪəʊd/', 'n.', '二极管', ['diode device', 'light emitting diode', 'photodiode detector', 'Zener diode'], 'diode（二极管）→ 单向导电的半导体器件 → 二极管'],
    ['MOSFET', '/ˈmɒsfet/', 'n.', 'MOS管', ['MOSFET device', 'CMOS technology', 'NMOS transistor', 'power MOSFET'], 'MOSFET（MOS管）→ 金属氧化物半导体场效应管 → MOS管'],
    ['CMOS', '/ˈsiːmɒs/', 'n.', 'CMOS', ['CMOS technology', 'CMOS process', 'CMOS circuit', 'CMOS image sensor'], 'CMOS（互补MOS）→ 现代集成电路的主流技术 → CMOS'],
    ['bipolar', '/baɪˈpəʊlər/', 'adj.', '双极型', ['bipolar transistor', 'bipolar technology', 'bipolar process', 'heterojunction bipolar'], 'bipolar（双极型）→ 电子和空穴都参与导电 → 双极型'],
    ['JFET', '/ˈdʒeɪfet/', 'n.', '结型场效应管', ['JFET device', 'GaAs MESFET', 'AlGaAs HEMT', 'pHEMT'], 'JFET（结型场效应管）→ 利用PN结控制沟道的FET → JFET'],
    ['FinFET', '/ˈfɪnfet/', 'n.', '鳍式场效应管', ['FinFET transistor', 'tri-gate transistor', 'gate-all-around FET', 'nanowire FET'], 'FinFET（鳍式场效应管）→ 3D结构的MOSFET → FinFET'],
    ['IGBT', '/ˌaɪ dʒiː biː ˈtiː/', 'n.', '绝缘栅双极晶体管', ['IGBT module', 'power transistor', 'power semiconductor', 'high voltage device'], 'IGBT（绝缘栅双极晶体管）→ 功率电子核心器件 → IGBT'],
    ['thyristor', '/θaɪˈrɪstər/', 'n.', '晶闸管', ['thyristor device', 'silicon controlled rectifier', 'power thyristor', 'thyristor converter'], 'thyristor（晶闸管）→ 半控型功率器件 → 晶闸管'],
    ['rectifier', '/ˈrektɪfaɪər/', 'n.', '整流器', ['rectifier circuit', 'full-wave rectifier', 'bridge rectifier', 'Schottky rectifier'], 'rectifier（整流器）→ 将交流转换为直流 → 整流器'],
    ['sensor', '/ˈsensər/', 'n.', '传感器', ['MEMS sensor', 'pressure sensor', 'temperature sensor', 'image sensor'], 'sensor（传感器）→ 检测物理量的半导体器件 → 传感器'],
    ['optoelectronic', '/ˌɒptəʊɪlekˈtrɒnɪk/', 'adj.', '光电子的', ['optoelectronic device', 'optoelectronic integration', 'optoelectronic technology', 'optoelectronic component'], 'optoelectronic（光电子的）→ 光学与电子学结合 → 光电子'],
    ['solar cell', '/ˈsəʊlər sel/', 'n.', '太阳能电池', ['solar cell', 'photovoltaic cell', 'silicon solar cell', 'thin film solar'], 'solar cell（太阳能电池）→ 光能转电能的器件 → 太阳能电池'],
    ['capacitor', '/kəˈpæsɪtər/', 'n.', '电容器', ['decoupling capacitor', 'bypass capacitor', 'MIM capacitor', 'MOS capacitor'], 'capacitor（电容器）→ 存储电荷的器件 → 电容器'],
    ['resistor', '/rɪˈzɪstər/', 'n.', '电阻器', ['polysilicon resistor', 'diffusion resistor', 'thin film resistor', 'precision resistor'], 'resistor（电阻器）→ 限制电流的器件 → 电阻器'],
    ['inductor', '/ɪnˈdʌktər/', 'n.', '电感器', ['spiral inductor', 'bondwire inductor', 'integrated inductor', 'high-Q inductor'], 'inductor（电感器）→ 存储磁能的器件 → 电感器'],
    ['varactor', '/vəˈræktər/', 'n.', '变容二极管', ['varactor diode', 'hyperabrupt varactor', 'varactor tuning', 'voltage variable capacitor'], 'varactor（变容二极管）→ 电容随电压变化的二极管 → 变容管'],
    ['photodetector', '/ˈfəʊtəʊdɪtekər/', 'n.', '光电探测器', ['photodetector array', 'avalanche photodiode', 'PIN photodetector', 'photodetector sensitivity'], 'photodetector（光电探测器）→ 将光信号转为电信号 → 光电探测器'],
    ['laser', '/ˈleɪzər/', 'n.', '激光器', ['semiconductor laser', 'VCSEL array', 'DFB laser', 'laser diode'], 'laser（激光器）→ 受激辐射光放大器件 → 激光器'],
    ['modulator', '/ˈmɒdjʊleɪtər/', 'n.', '调制器', ['electro-optic modulator', 'Mach-Zehnder modulator', 'intensity modulator', 'phase modulator'], 'modulator（调制器）→ 改变光信号参数的器件 → 调制器'],
    ['IC', '/ˌaɪ ˈsiː/', 'n.', '集成电路', ['integrated circuit', 'LSI circuit', 'VLSI technology', 'ULSI device'], 'IC（集成电路）→ 将多个元件集成在芯片上 → 集成电路'],
    ['microprocessor', '/ˌmaɪkrəʊˈprəʊsesər/', 'n.', '微处理器', ['microprocessor unit', 'multicore processor', 'CPU core', 'microprocessor architecture'], 'microprocessor（微处理器）→ 计算机的核心芯片 → 微处理器'],
    ['memory', '/ˈmeməri/', 'n.', '存储器', ['memory chip', 'DRAM cell', 'SRAM array', 'flash memory'], 'memory（存储器）→ 存储数据的芯片 → 存储器'],
    ['DRAM', '/ˈdiːræm/', 'n.', 'DRAM', ['DRAM cell', 'DRAM capacitor', 'DRAM refresh', 'DDR DRAM'], 'DRAM（动态随机存取存储器）→ 需要刷新的易失性存储器 → DRAM'],
    ['SRAM', '/ˈesræm/', 'n.', 'SRAM', ['SRAM cell', 'SRAM cache', '6T SRAM', 'low power SRAM'], 'SRAM（静态随机存取存储器）→ 速度快但密度低的存储器 → SRAM'],
    ['flash', '/flæʃ/', 'n.', '闪存', ['NAND flash', 'NOR flash', 'flash memory', 'floating gate'], 'flash（闪存）→ 非易失性存储器 → 闪存'],
    ['logic', '/ˈlɒdʒɪk/', 'n.', '逻辑', ['logic gate', 'logic circuit', 'combinational logic', 'sequential logic'], 'logic（逻辑）→ 实现布尔运算的电路 → 逻辑电路'],
    ['adder', '/ˈædər/', 'n.', '加法器', ['full adder', 'ripple carry adder', 'carry look-ahead', 'adder circuit'], 'adder（加法器）→ 执行加法运算的逻辑电路 → 加法器'],
    ['multiplexer', '/ˈmʌltɪpleksər/', 'n.', '多路选择器', ['multiplexer circuit', 'data selector', '8-to-1 MUX', 'analog multiplexer'], 'multiplexer（多路选择器）→ 从多路输入中选择一路输出 → 多路器'],
    ['flip-flop', '/ˈflɪp flɒp/', 'n.', '触发器', ['D flip-flop', 'JK flip-flop', 'T flip-flop', 'SR latch'], 'flip-flop（触发器）→ 存储一位数据的时序电路 → 触发器'],
    ['amplifier', '/ˈæmplɪfaɪər/', 'n.', '放大器', ['operational amplifier', 'differential amplifier', 'low noise amplifier', 'power amplifier'], 'amplifier（放大器）→ 放大信号幅度的电路 → 放大器'],
    ['comparator', '/kəmˈpærətər/', 'n.', '比较器', ['voltage comparator', 'analog comparator', 'hysteresis comparator', 'window comparator'], 'comparator（比较器）→ 比较两个电压的电路 → 比较器'],
    ['oscillator', '/ˈɒsɪleɪtər/', 'n.', '振荡器', ['voltage controlled oscillator', 'crystal oscillator', 'ring oscillator', 'relaxation oscillator'], 'oscillator（振荡器）→ 产生周期性信号的电路 → 振荡器'],
    ['mixer', '/ˈmɪksər/', 'n.', '混频器', ['frequency mixer', 'RF mixer', 'image reject mixer', 'active mixer'], 'mixer（混频器）→ 将两个信号混合产生新频率 → 混频器'],
    ['filter', '/ˈfɪltər/', 'n.', '滤波器', ['low pass filter', 'high pass filter', 'band pass filter', 'active filter'], 'filter（滤波器）→ 选择特定频率信号的电路 → 滤波器'],
    ['ADC', '/ˌeɪ diː ˈsiː/', 'n.', '模数转换器', ['analog to digital converter', 'digital to analog converter', 'ADC resolution', 'sampling rate'], 'ADC（模数转换器）→ 将模拟信号转为数字信号 → ADC'],
    ['PLL', '/ˌpiː el ˈel/', 'n.', '锁相环', ['phase locked loop', 'frequency synthesizer', 'clock multiplier', 'PLL bandwidth'], 'PLL（锁相环）→ 使输出频率跟踪输入频率的电路 → PLL'],
    ['bandgap', '/ˈbændɡæp/', 'n.', '带隙', ['bandgap reference', 'voltage reference', 'precision reference', 'low drift reference'], 'bandgap（带隙）→ 产生稳定基准电压的电路 → 带隙基准'],
    ['regulator', '/ˈreɡjuleɪtər/', 'n.', '稳压器', ['linear regulator', 'low dropout regulator', 'switching regulator', 'DC-DC converter'], 'regulator（稳压器）→ 提供稳定输出电压的电路 → 稳压器'],
    ['ESD', '/ˌiː es ˈdiː/', 'n.', '静电放电', ['ESD protection', 'ESD diode', 'input protection', 'ESD clamp'], 'ESD（静电放电）→ 防止静电损伤的保护电路 → ESD保护'],
    ['RF', '/ˌɑːr ˈef/', 'n.', '射频', ['RF circuit', 'RF amplifier', 'microwave device', 'millimeter wave'], 'RF（射频）→ 无线电频率的电路和器件 → 射频'],
    ['antenna', '/ænˈtenə/', 'n.', '天线', ['antenna array', 'dipole antenna', 'patch antenna', 'on-chip antenna'], 'antenna（天线）→ 收发无线电波的器件 → 天线'],
    ['transceiver', '/trænˈsiːvər/', 'n.', '收发器', ['radio transceiver', 'optical transceiver', 'RF transceiver', 'wireless transceiver'], 'transceiver（收发器）→ 同时具有发射和接收功能的器件 → 收发器'],
    ['TIA', '/ˌtiː aɪ ˈeɪ/', 'n.', '跨阻放大器', ['transimpedance amplifier', 'optical receiver', 'current to voltage', 'TIA bandwidth'], 'TIA（跨阻放大器）→ 将电流转换为电压的放大器 → TIA'],
    ['limiter', '/ˈlɪmɪtər/', 'n.', '限幅器', ['automatic gain control', 'hard limiter', 'soft limiter', 'RF limiter'], 'limiter（限幅器）→ 限制信号幅度的电路 → 限幅器'],
    ['detector', '/dɪˈtektər/', 'n.', '检测器', ['envelope detector', 'peak detector', 'RMS detector', 'power detector'], 'detector（检测器）→ 提取信号包络或参数的电路 → 检测器'],
    ['phase shifter', '/feɪz ˈʃɪftər/', 'n.', '移相器', ['variable phase shifter', 'digital phase shifter', 'phase array', 'vector modulator'], 'phase shifter（移相器）→ 改变信号相位的电路 → 移相器'],
    ['attenuator', '/əˈtenjueɪtər/', 'n.', '衰减器', ['variable attenuator', 'step attenuator', 'digital attenuator', 'optical attenuator'], 'attenuator（衰减器）→ 降低信号幅度的电路 → 衰减器'],
    ['circulator', '/ˈsɜːrkjuleɪtər/', 'n.', '环形器', ['ferrite circulator', 'isolator', 'YIG resonator', 'ferrite device'], 'circulator（环形器）→ 单向传输信号的器件 → 环形器'],
    ['coupler', '/ˈkʌplər/', 'n.', '耦合器', ['directional coupler', 'hybrid coupler', 'quadrature coupler', 'power divider'], 'coupler（耦合器）→ 分配或合成信号的器件 → 耦合器'],
];

// Generate entries 251-300
for (let i = 0; i < deviceTerms.length; i++) {
    const [root, phonetic, pos, meaning, phrases, mnemonic] = deviceTerms[i];
    const id = 251 + i;
    const words = [
        [root, phonetic, pos, meaning, `${root} → ${meaning}`],
        [`${root} device`, phonetic.replace('/', ' ').trim() + ' dɪˈvaɪs/', 'n.', `${meaning}器件`, `${root} + device → ${meaning}器件`],
        [`${root} process`, phonetic.replace('/', ' ').trim() + ' ˈprəʊses/', 'n.', `${meaning}工艺`, `${root} + process → ${meaning}工艺`],
        [`${root} technology`, phonetic.replace('/', ' ').trim() + ' tekˈnɒlədʒi/', 'n.', `${meaning}技术`, `${root} + technology → ${meaning}技术`]
    ];
    const formattedPhrases = phrases.map(p => `${p} (${p})`);
    additionalEntries.push(createEntry(id, id, root, phonetic, pos, meaning, words, formattedPhrases, mnemonic));
}

console.log('Generated entries 251-300. Total additional:', additionalEntries.length);

// Generate entries 301-350 (packaging and test)
const packageTerms = [
    ['package', '/ˈpækɪdʒ/', 'n.', '封装', ['IC package', 'chip package', 'packaging technology', 'packaging material'], 'package（封装）→ 保护芯片并提供外部连接 → 封装'],
    ['die', '/daɪ/', 'n.', '芯片', ['bare die', 'die attach', 'die bond', 'die size'], 'die（芯片）→ 未封装的裸芯片 → 裸片'],
    ['bond', '/bɒnd/', 'v.', '键合', ['wire bonding', 'ball bonding', 'wedge bonding', 'bond wire'], 'bond（键合）→ 用金属线连接芯片和封装 → 键合'],
    ['wire', '/ˈwaɪər/', 'n.', '引线', ['bond wire', 'gold wire', 'copper wire', 'wire bond'], 'wire（引线）→ 连接芯片与引脚的金属线 → 键合线'],
    ['solder', '/ˈsəʊldər/', 'n.', '焊料', ['solder ball', 'solder bump', 'lead-free solder', 'solder joint'], 'solder（焊料）→ 连接芯片与基板的金属材料 → 焊料'],
    ['flip chip', '/flɪp tʃɪp/', 'n.', '倒装芯片', ['flip chip bonding', 'flip chip package', 'C4 bump', 'flip chip assembly'], 'flip chip（倒装芯片）→ 芯片正面朝下安装的封装方式 → 倒装芯片'],
    ['BGA', '/ˌbiː dʒiː ˈeɪ/', 'n.', '球栅阵列', ['BGA package', 'CSP', 'FBGA', 'WLCSP'], 'BGA（球栅阵列）→ 底部有焊球阵列的封装 → BGA'],
    ['leadframe', '/ˈliːdfreɪm/', 'n.', '引线框架', ['leadframe package', 'metal leadframe', 'leadframe strip', 'leadframe plating'], 'leadframe（引线框架）→ 传统封装的金属框架 → 引线框架'],
    ['substrate', '/ˈsʌbstreɪt/', 'n.', '基板', ['package substrate', 'organic substrate', 'ceramic substrate', 'laminate substrate'], 'substrate（基板）→ 支撑和连接芯片的载体 → 基板'],
    ['encapsulant', '/ɪnˈkæpsjʊlənt/', 'n.', '封装材料', ['molding compound', 'epoxy resin', 'encapsulation material', 'liquid encapsulant'], 'encapsulant（封装材料）→ 保护芯片的塑封料 → 封装材料'],
    ['dielectric', '/ˌdaɪɪˈlektrɪk/', 'n.', '介质', ['low-k dielectric', 'interlayer dielectric', 'passivation layer', 'dielectric constant'], 'dielectric（介质）→ 绝缘材料用于隔离导电层 → 介质'],
    ['interposer', '/ˈɪntəpəʊzər/', 'n.', '中介层', ['silicon interposer', 'TSV interposer', 'organic interposer', '2.5D interposer'], 'interposer（中介层）→ 用于多芯片集成的中间层 → 中介层'],
    ['wafer level', '/ˈweɪfər ˈlevl/', 'n.', '晶圆级', ['wafer level packaging', 'WLCSP', 'fan-out WLP', 'fan-in WLP'], 'wafer level（晶圆级）→ 在晶圆状态完成封装 → 晶圆级封装'],
    ['3D IC', '/θriː diː ˌaɪ ˈsiː/', 'n.', '三维集成电路', ['3D stacking', 'die stacking', '3D memory', 'heterogeneous integration'], '3D IC（三维集成电路）→ 垂直堆叠芯片的集成技术 → 3D IC'],
    ['chiplets', '/ˈtʃɪpləts/', 'n.', '芯粒', ['chiplet design', 'chiplet integration', 'chiplet ecosystem', 'modular chiplet'], 'chiplets（芯粒）→ 分解大芯片为多个小芯片的技术 → 芯粒'],
    ['test', '/test/', 'v.', '测试', ['wafer test', 'final test', 'burn-in test', 'function test'], 'test（测试）→ 验证芯片功能和性能 → 测试'],
    ['probe', '/prəʊb/', 'n.', '探针', ['probe card', 'cantilever probe', 'membrane probe', 'vertical probe'], 'probe（探针）→ 接触芯片pad进行测试 → 探针'],
    ['yield', '/jiːld/', 'n.', '良率', ['die yield', 'wafer yield', 'yield management', 'yield learning'], 'yield（良率）→ 合格芯片占总芯片的比例 → 良率'],
    ['defect', '/ˈdiːfekt/', 'n.', '缺陷', ['defect density', 'defect inspection', 'defect classification', 'defect review'], 'defect（缺陷）→ 导致芯片失效的异常 → 缺陷'],
    ['inspection', '/ɪnˈspekʃn/', 'n.', '检测', ['optical inspection', 'electron beam inspection', 'defect inspection', 'critical dimension measurement'], 'inspection（检测）→ 发现和识别缺陷的过程 → 检测'],
    ['binning', '/ˈbɪnɪŋ/', 'n.', '分档', ['speed binning', 'voltage binning', 'power binning', 'grade sorting'], 'binning（分档）→ 按性能将芯片分类 → 分档'],
    ['reliability', '/rɪˌlaɪəˈbɪlɪti/', 'n.', '可靠性', ['reliability test', 'accelerated life test', 'failure analysis', 'reliability model'], 'reliability（可靠性）→ 芯片在规定条件下正常工作的能力 → 可靠性'],
    ['burn-in', '/ˈbɜːrn ɪn/', 'n.', '老化', ['burn-in test', 'high temperature storage', 'temperature cycling', 'voltage stress'], 'burn-in（老化）→ 在高温高压下筛选早期失效 → 老化测试'],
    ['FA', '/ef ˈeɪ/', 'n.', '失效分析', ['failure analysis', 'root cause analysis', 'fault isolation', 'defect localization'], 'FA（失效分析）→ 找出芯片失效原因的分析方法 → 失效分析'],
    ['DRC', '/ˌdiː ɑːr ˈsiː/', 'n.', '设计规则检查', ['design rule check', 'layout verification', 'physical verification', 'pattern matching'], 'DRC（设计规则检查）→ 检查版图是否符合工艺规则 → DRC'],
];

for (let i = 0; i < packageTerms.length; i++) {
    const [root, phonetic, pos, meaning, phrases, mnemonic] = packageTerms[i];
    const id = 301 + i;
    const words = [
        [root, phonetic, pos, meaning, `${root} → ${meaning}`],
        [`${root} device`, phonetic.replace('/', ' ').trim() + ' dɪˈvaɪs/', 'n.', `${meaning}器件`, `${root} + device → ${meaning}器件`],
        [`${root} process`, phonetic.replace('/', ' ').trim() + ' ˈprəʊses/', 'n.', `${meaning}工艺`, `${root} + process → ${meaning}工艺`],
        [`${root} technology`, phonetic.replace('/', ' ').trim() + ' tekˈnɒlədʒi/', 'n.', `${meaning}技术`, `${root} + technology → ${meaning}技术`]
    ];
    const formattedPhrases = phrases.map(p => `${p} (${p})`);
    additionalEntries.push(createEntry(id, id, root, phonetic, pos, meaning, words, formattedPhrases, mnemonic));
}

console.log('Generated entries 301-325. Total additional:', additionalEntries.length);

// Generate entries 326-400 (device physics and process)
const physicsTerms = [
    ['band', '/bænd/', 'n.', '能带', ['energy band', 'conduction band', 'valence band', 'band diagram'], 'band（能带）→ 电子能量分布的区域 → 能带'],
    ['electron', '/ɪˈlektrɒn/', 'n.', '电子', ['electron concentration', 'electron mobility', 'electron affinity', 'free electron'], 'electron（电子）→ 带负电的载流子 → 电子'],
    ['hole', '/həʊl/', 'n.', '空穴', ['hole concentration', 'hole mobility', 'hole current', 'hole density'], 'hole（空穴）→ 带正电的载流子 → 空穴'],
    ['junction', '/ˈdʒʌŋkʃn/', 'n.', '结', ['PN junction', 'depletion region', 'junction capacitance', 'Schottky junction'], 'junction（结）→ P型和N型半导体的界面 → 结'],
    ['depletion', '/dɪˈpliːʃn/', 'n.', '耗尽', ['depletion region', 'depletion width', 'depletion capacitance', 'depletion mode'], 'depletion（耗尽）→ 载流子被耗尽的区域 → 耗尽区'],
    ['inversion', '/ɪnˈvɜːrʒn/', 'n.', '反型', ['inversion layer', 'inversion charge', 'threshold voltage', 'weak inversion'], 'inversion（反型）→ 半导体表面载流子类型反转 → 反型'],
    ['accumulation', '/əˌkjuːmjəˈleɪʃn/', 'n.', '积累', ['accumulation mode', 'accumulation layer', 'flatband voltage', 'surface accumulation'], 'accumulation（积累）→ 多数载流子在表面积累 → 积累'],
    ['mobility', '/məʊˈbɪlɪti/', 'n.', '迁移率', ['electron mobility', 'hole mobility', 'mobility degradation', 'mobility model'], 'mobility（迁移率）→ 载流子在电场中移动的速度 → 迁移率'],
    ['recombination', '/ˌriːkɒmbɪˈneɪʃn/', 'n.', '复合', ['carrier lifetime', 'recombination rate', 'generation-recombination', 'surface recombination'], 'recombination（复合）→ 电子和空穴的湮灭过程 → 复合'],
    ['tunneling', '/ˈtʌnəlɪŋ/', 'n.', '隧穿', ['quantum tunneling', 'direct tunneling', 'Fowler-Nordheim tunneling', 'tunneling current'], 'tunneling（隧穿）→ 量子力学隧穿效应 → 隧穿'],
    ['ion', '/ˈaɪən/', 'n.', '离子', ['ion implantation', 'ion source', 'ion beam', 'ion mass'], 'ion（离子）→ 带电的原子或分子 → 离子'],
    ['sputter', '/ˈspʌtər/', 'v.', '溅射', ['sputter deposition', 'magnetron sputtering', 'DC sputtering', 'RF sputtering'], 'sputter（溅射）→ 用离子轰击靶材沉积薄膜 → 溅射'],
    ['evaporation', '/ɪˌvæpəˈreɪʃn/', 'n.', '蒸发', ['electron beam evaporation', 'thermal evaporation', 'resistive evaporation', 'molecular beam epitaxy'], 'evaporation（蒸发）→ 加热材料使其气化沉积 → 蒸发'],
    ['PECVD', '/ˌpiː iː siː viː ˈdiː/', 'n.', '等离子增强化学气相沉积', ['PECVD nitride', 'PECVD oxide', 'plasma enhanced CVD', 'low pressure CVD'], 'PECVD（等离子增强化学气相沉积）→ 用等离子体增强反应的CVD → PECVD'],
    ['spinner', '/ˈspɪnər/', 'n.', '涂胶机', ['spin coater', 'photoresist spinner', 'edge bead removal', 'soft bake'], 'spinner（涂胶机）→ 旋转涂布光刻胶的设备 → 涂胶机'],
    ['track', '/træk/', 'n.', '涂胶显影机', ['coat/develop track', 'positive developer', 'negative developer', 'development rate'], 'track（涂胶显影机）→ 集成涂胶和显影的工艺设备 → 涂胶显影机'],
    ['metrology', '/məˈtrɒlədʒi/', 'n.', '计量', ['optical metrology', 'film thickness measurement', 'critical dimension measurement', 'overlay measurement'], 'metrology（计量）→ 测量薄膜和图形参数的仪器 → 计量'],
    ['profilometer', '/ˌprəʊfɪˈlɒmɪtər/', 'n.', '轮廓仪', ['surface profilometer', 'step height measurement', 'surface roughness', 'film thickness'], 'profilometer（轮廓仪）→ 测量表面轮廓和台阶高度的仪器 → 轮廓仪'],
    ['AFM', '/ˌeɪ ef ˈem/', 'n.', '原子力显微镜', ['atomic force microscopy', 'scanning probe microscopy', 'AFM image', 'surface topography'], 'AFM（原子力显微镜）→ 用探针扫描表面形貌的显微镜 → AFM'],
    ['SEM', '/ˌes iː ˈem/', 'n.', '扫描电子显微镜', ['scanning electron microscopy', 'SEM image', 'cross-section SEM', 'high resolution SEM'], 'SEM（扫描电子显微镜）→ 用电子束成像的显微镜 → SEM'],
    ['TEM', '/ˌtiː iː ˈem/', 'n.', '透射电子显微镜', ['transmission electron microscopy', 'TEM cross-section', 'high resolution TEM', 'electron diffraction'], 'TEM（透射电子显微镜）→ 透射电子成像的高分辨显微镜 → TEM'],
    ['XRD', '/ˌeks ɑːr ˈdiː/', 'n.', 'X射线衍射', ['X-ray diffraction', 'crystal orientation', 'lattice constant', 'phase analysis'], 'XRD（X射线衍射）→ 分析晶体结构的表征技术 → XRD'],
    ['SIMS', '/sɪmz/', 'n.', '二次离子质谱', ['secondary ion mass spectrometry', 'depth profiling', 'dopant profile', 'impurity analysis'], 'SIMS（二次离子质谱）→ 分析元素深度分布的技术 → SIMS'],
    ['electrical', '/ɪˈlektrɪkl/', 'adj.', '电学的', ['electrical test', 'I-V measurement', 'C-V measurement', 'parameter extraction'], 'electrical（电学的）→ 电学特性的测量和分析 → 电学测试'],
    ['prober', '/ˈprəʊbər/', 'n.', '探针台', ['wafer prober', 'automatic prober', 'probe card interface', 'hot chuck'], 'prober（探针台）→ 进行晶圆级电学测试的设备 → 探针台'],
];

for (let i = 0; i < physicsTerms.length; i++) {
    const [root, phonetic, pos, meaning, phrases, mnemonic] = physicsTerms[i];
    const id = 326 + i;
    const words = [
        [root, phonetic, pos, meaning, `${root} → ${meaning}`],
        [`${root} device`, phonetic.replace('/', ' ').trim() + ' dɪˈvaɪs/', 'n.', `${meaning}器件`, `${root} + device → ${meaning}器件`],
        [`${root} process`, phonetic.replace('/', ' ').trim() + ' ˈprəʊses/', 'n.', `${meaning}工艺`, `${root} + process → ${meaning}工艺`],
        [`${root} technology`, phonetic.replace('/', ' ').trim() + ' tekˈnɒlədʒi/', 'n.', `${meaning}技术`, `${root} + technology → ${meaning}技术`]
    ];
    const formattedPhrases = phrases.map(p => `${p} (${p})`);
    additionalEntries.push(createEntry(id, id, root, phonetic, pos, meaning, words, formattedPhrases, mnemonic));
}

console.log('Generated entries 326-350. Total additional:', additionalEntries.length);

// Save progress
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/additional_entries.json', JSON.stringify(additionalEntries, null, 2));
console.log('Saved additional entries');
