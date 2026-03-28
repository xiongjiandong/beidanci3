const fs = require('fs');

// 词根数据生成器
function generateLesson(root, phonetic, meaning, category, id, frequency, words, phrases, mnemonic, partOfSpeech = '名词/动词') {
  const lesson = {
    id,
    root,
    phonetic,
    partOfSpeech,
    meaning,
    frequency,
    category,
    words: words.map(w => ({
      ...w,
      root,
      rootPhonetic: phonetic,
      rootMeaning: meaning,
      rootPhrases: phrases,
      wordPhrases: w.wordPhrases || phrases
    })),
    phrases,
    mnemonic
  };
  return lesson;
}

// 通信行业词根库
const communicationRoots = [
  ['antenna', '/ænˈtenə/', '天线', '名词',
    [
      ['antenna', '/ænˈtenə/', 'n.', '天线', '本身是词根'],
      ['antennas', '/ænˈtenəz/', 'n.', '天线(复数)', 'antenna + s'],
      ['antenna array', '/ænˈtenə əˈreɪ/', 'n.', '天线阵列', 'antenna + array'],
      ['antenna gain', '/ænˈtenə ɡeɪn/', 'n.', '天线增益', 'antenna + gain']
    ],
    ['base station antenna 基站天线', 'smart antenna 智能天线', 'antenna design 天线设计'],
    'Antenna→"安天纳"→安装在天上接纳信号'
  ],
  ['band', '/bænd/', '频段；带', '名词',
    [
      ['band', '/bænd/', 'n.', '频段', '本身是词根'],
      ['bandwidth', '/ˈbændwɪdθ/', 'n.', '带宽', 'band + width'],
      ['broadband', '/ˈbrɔːdbænd/', 'n.', '宽带', 'broad + band'],
      ['narrowband', '/ˈnæroʊbænd/', 'n.', '窄带', 'narrow + band']
    ],
    ['frequency band 频段', 'bandwidth allocation 带宽分配', 'broadband network 宽带网络'],
    'Band→"班的"→一班人占用一个频段'
  ],
  ['channel', '/ˈtʃænəl/', '信道；通道', '名词',
    [
      ['channel', '/ˈtʃænəl/', 'n.', '信道', '本身是词根'],
      ['channel capacity', '/ˈtʃænəl kəˈpæsəti/', 'n.', '信道容量', 'channel + capacity'],
      ['channel coding', '/ˈtʃænəl ˈkoʊdɪŋ/', 'n.', '信道编码', 'channel + coding'],
      ['channel estimation', '/ˈtʃænəl ˌestɪˈmeɪʃn/', 'n.', '信道估计', 'channel + estimation']
    ],
    ['wireless channel 无线信道', 'channel model 信道模型', 'channel quality 信道质量'],
    'Channel→"畅挪"→畅通无阻的通道'
  ],
  ['transmit', '/trænzˈmɪt/', '传输；发射', '动词',
    [
      ['transmit', '/trænzˈmɪt/', 'v.', '传输', 'trans(穿过) + mit(送)'],
      ['transmission', '/trænzˈmɪʃn/', 'n.', '传输', 'transmit + sion'],
      ['transmitter', '/trænzˈmɪtər/', 'n.', '发射机', 'transmit + ter'],
      ['transceiver', '/trænˈsiːvər/', 'n.', '收发器', 'trans + ceive + r']
    ],
    ['data transmission 数据传输', 'transmit power 发射功率', 'transmission rate 传输速率'],
    'Transmit→"传斯密特"→传送秘密的东西'
  ],
  ['receive', '/rɪˈsiːv/', '接收', '动词',
    [
      ['receive', '/rɪˈsiːv/', 'v.', '接收', 're(回) + ceive(抓)'],
      ['receiver', '/rɪˈsiːvər/', 'n.', '接收机', 'receive + r'],
      ['reception', '/rɪˈsepʃn/', 'n.', '接收', 'receive + tion'],
      ['receiving', '/rɪˈsiːvɪŋ/', 'n.', '接收中', 'receive + ing']
    ],
    ['signal reception 信号接收', 'receiver sensitivity 接收灵敏度', 'receive antenna 接收天线'],
    'Receive→"瑞思ive"→思考着接收'
  ],
  ['modulate', '/ˈmɒdjʊleɪt/', '调制', '动词',
    [
      ['modulate', '/ˈmɒdjʊleɪt/', 'v.', '调制', 'mod(模式) + ulate'],
      ['modulation', '/ˌmɒdjʊˈleɪʃn/', 'n.', '调制', 'modulate + ion'],
      ['demodulate', '/diːˈmɒdjʊleɪt/', 'v.', '解调', 'de(解除) + modulate'],
      ['modulator', '/ˈmɒdjʊleɪtər/', 'n.', '调制器', 'modulate + or']
    ],
    ['modulation scheme 调制方案', 'amplitude modulation 调幅', 'frequency modulation 调频'],
    'Modulate→"摸掉"→摸掉信号进行调制'
  ],
  ['encode', '/ɪnˈkoʊd/', '编码', '动词',
    [
      ['encode', '/ɪnˈkoʊd/', 'v.', '编码', 'en(使) + code(代码)'],
      ['encoder', '/ɪnˈkoʊdər/', 'n.', '编码器', 'encode + r'],
      ['encoding', '/ɪnˈkoʊdɪŋ/', 'n.', '编码', 'encode + ing'],
      ['decoding', '/diːˈkoʊdɪŋ/', 'n.', '解码', 'de + code + ing']
    ],
    ['source encoding 信源编码', 'channel encoding 信道编码', 'encode data 编码数据'],
    'Encode→"因扣的"→因为扣住了所以编码'
  ],
  ['spectrum', '/ˈspektrəm/', '频谱', '名词',
    [
      ['spectrum', '/ˈspektrəm/', 'n.', '频谱', '本身是词根'],
      ['spectral', '/ˈspektrəl/', 'adj.', '频谱的', 'spectrum + al'],
      ['spectrogram', '/ˈspektrəɡræm/', 'n.', '频谱图', 'spectro + gram'],
      ['spectrum analyzer', '/ˈspektrəm ˈænəlaɪzər/', 'n.', '频谱分析仪', 'spectrum + analyzer']
    ],
    ['frequency spectrum 频谱', 'spectrum allocation 频谱分配', 'spectrum efficiency 频谱效率'],
    'Spectrum→"思派可川"→思考频率的分布'
  ],
  ['mobile', '/ˈmoʊbaɪl/', '移动', '形容词/名词',
    [
      ['mobile', '/ˈmoʊbaɪl/', 'adj.', '移动的', '本身是词根'],
      ['mobility', '/moʊˈbɪləti/', 'n.', '移动性', 'mobile + ity'],
      ['mobilize', '/ˈmoʊbəlaɪz/', 'v.', '动员', 'mobile + ize'],
      ['immobile', '/ɪˈmoʊbaɪl/', 'adj.', '静止的', 'im(不) + mobile']
    ],
    ['mobile communication 移动通信', 'mobile network 移动网络', 'mobile device 移动设备'],
    'Mobile→"摸拜"→摸着手机拜年→移动'
  ],
  ['wireless', '/ˈwaɪərləs/', '无线', '形容词',
    [
      ['wireless', '/ˈwaɪərləs/', 'adj.', '无线的', 'wire(线) + less(无)'],
      ['wire', '/waɪər/', 'n.', '电线', '本身是词根'],
      ['wired', '/waɪərd/', 'adj.', '有线的', 'wire + d'],
      ['wirelessly', '/ˈwaɪərləsli/', 'adv.', '无线地', 'wireless + ly']
    ],
    ['wireless network 无线网络', 'wireless communication 无线通信', 'wireless signal 无线信号'],
    'Wireless→"歪尔勒斯"→歪着不用线→无线'
  ],
  ['frequency', '/ˈfriːkwənsi/', '频率', '名词',
    [
      ['frequency', '/ˈfriːkwənsi/', 'n.', '频率', 'frequen(频繁) + cy'],
      ['frequent', '/ˈfriːkwənt/', 'adj.', '频繁的', '本身是词根'],
      ['frequently', '/ˈfriːkwəntli/', 'adv.', '频繁地', 'frequent + ly'],
      ['infrequency', '/ɪnˈfriːkwənsi/', 'n.', '稀少', 'in(不) + frequency']
    ],
    ['radio frequency 射频', 'frequency band 频段', 'frequency domain 频域'],
    'Frequency→"夫瑞quensee"→频繁出现的次数'
  ],
  ['interference', '/ˌɪntərˈfɪərəns/', '干扰', '名词',
    [
      ['interference', '/ˌɪntərˈfɪərəns/', 'n.', '干扰', 'inter(相互) + fere(打击) + nce'],
      ['interfere', '/ˌɪntərˈfɪr/', 'v.', '干扰', 'inter + fere'],
      ['interfering', '/ˌɪntərˈfɪərɪŋ/', 'adj.', '干扰的', 'interfere + ing'],
      ['co-channel interference', '/koʊ ˈtʃænəl ˌɪntərˈfɪərəns/', 'n.', '同频干扰', 'co + channel + interference']
    ],
    ['signal interference 信号干扰', 'interference cancellation 干扰消除', 'reduce interference 减少干扰'],
    'Interference→"因特非儿伦斯"→相互之间打来打去→干扰'
  ],
  ['base station', '/beɪs ˈsteɪʃn/', '基站', '名词',
    [
      ['base station', '/beɪs ˈsteɪʃn/', 'n.', '基站', 'base(基) + station(站)'],
      ['base', '/beɪs/', 'n.', '基地', '本身是词根'],
      ['station', '/ˈsteɪʃn/', 'n.', '站点', '本身是词根'],
      ['basestation', '/ˈbeɪsˌsteɪʃn/', 'n.', '基站', 'base + station']
    ],
    ['base station antenna 基站天线', 'base station controller 基站控制器', 'macro base station 宏基站'],
    'Base station→"贝斯斯得神"→基地的站点'
  ],
  ['cellular', '/ˈseljələr/', '蜂窝', '形容词',
    [
      ['cellular', '/ˈseljələr/', 'adj.', '蜂窝的', 'cell(细胞) + ular'],
      ['cell', '/sel/', 'n.', '小区；细胞', '本身是词根'],
      ['cellular network', '/ˈseljələr ˈnetwɜːrk/', 'n.', '蜂窝网络', 'cellular + network'],
      ['microcell', '/ˈmaɪkroʊsel/', 'n.', '微小区', 'micro + cell']
    ],
    ['cellular system 蜂窝系统', 'cellular phone 蜂窝电话', 'cellular data 蜂窝数据'],
    'Cellular→"塞久乐"→像细胞一样的小区'
  ],
  ['handover', '/ˈhændoʊvər/', '切换', '名词/动词',
    [
      ['handover', '/ˈhændoʊvər/', 'n.', '切换', 'hand(手) + over(越过)'],
      ['hand off', '/hænd ɔːf/', 'n.', '切换', 'hand + off'],
      ['handover failure', '/ˈhændoʊvər ˈfeɪljər/', 'n.', '切换失败', 'handover + failure'],
      ['soft handover', '/sɔːft ˈhændoʊvər/', 'n.', '软切换', 'soft + handover']
    ],
    ['seamless handover 无缝切换', 'handover process 切换过程', 'handover decision 切换决策'],
    'Handover→"汉德欧沃"→手越过去→切换'
  ],
  ['latency', '/ˈleɪtənsi/', '延迟', '名词',
    [
      ['latency', '/ˈleɪtənsi/', 'n.', '延迟', 'latent(潜伏) + cy'],
      ['latent', '/ˈleɪtənt/', 'adj.', '潜伏的', '本身是词根'],
      ['low latency', '/loʊ ˈleɪtənsi/', 'n.', '低延迟', 'low + latency'],
      ['latency time', '/ˈleɪtənsi taɪm/', 'n.', '延迟时间', 'latency + time']
    ],
    ['network latency 网络延迟', 'reduce latency 降低延迟', 'latency requirement 延迟要求'],
    'Latency→"类滕see"→等待的时间'
  ],
  ['throughput', '/ˈθruːpʊt/', '吞吐量', '名词',
    [
      ['throughput', '/ˈθruːpʊt/', 'n.', '吞吐量', 'through(通过) + put(放)'],
      ['through', '/θruː/', 'prep.', '通过', '本身是词根'],
      ['high throughput', '/haɪ ˈθruːpʊt/', 'n.', '高吞吐量', 'high + throughput'],
      ['throughput rate', '/ˈθruːpʊt reɪt/', 'n.', '吞吐率', 'throughput + rate']
    ],
    ['system throughput 系统吞吐量', 'throughput optimization 吞吐量优化', 'maximum throughput 最大吞吐量'],
    'Throughput→"斯入普特"→通过并输出的量'
  ],
  ['packet', '/ˈpækɪt/', '数据包', '名词',
    [
      ['packet', '/ˈpækɪt/', 'n.', '数据包', 'pack(包) + et(小)'],
      ['pack', '/pæk/', 'v.', '打包', '本身是词根'],
      ['packet loss', '/ˈpækɪt lɔːs/', 'n.', '丢包', 'packet + loss'],
      ['packet switching', '/ˈpækɪt ˈswɪtʃɪŋ/', 'n.', '分组交换', 'packet + switching']
    ],
    ['data packet 数据包', 'packet header 包头', 'packet transmission 包传输'],
    'Packet→"派克特"→打包的小东西'
  ],
  ['protocol', '/ˈproʊtəkɒl/', '协议', '名词',
    [
      ['protocol', '/ˈproʊtəkɒl/', 'n.', '协议', 'proto(第一) + col(胶)'],
      ['protocol stack', '/ˈproʊtəkɒl stæk/', 'n.', '协议栈', 'protocol + stack'],
      ['TCP protocol', '/tiː siː piː ˈproʊtəkɒl/', 'n.', 'TCP协议', 'TCP + protocol'],
      ['HTTP protocol', '/eɪtʃ tiː tiː piː ˈproʊtəkɒl/', 'n.', 'HTTP协议', 'HTTP + protocol']
    ],
    ['communication protocol 通信协议', 'network protocol 网络协议', 'protocol layer 协议层'],
    'Protocol→"普若头口"→第一份胶水粘合的规则'
  ],
  ['router', '/ˈruːtər/', '路由器', '名词',
    [
      ['router', '/ˈruːtər/', 'n.', '路由器', 'route(路由) + r'],
      ['route', '/ruːt/', 'n./v.', '路由', '本身是词根'],
      ['routing', '/ˈruːtɪŋ/', 'n.', '路由选择', 'route + ing'],
      ['wireless router', '/ˈwaɪərləs ˈruːtər/', 'n.', '无线路由器', 'wireless + router']
    ],
    ['router configuration 路由器配置', 'default route 默认路由', 'routing table 路由表'],
    'Router→"入特"→数据进入的特派员'
  ],
  ['switch', '/swɪtʃ/', '交换机', '名词/动词',
    [
      ['switch', '/swɪtʃ/', 'n.', '交换机', '本身是词根'],
      ['switching', '/ˈswɪtʃɪŋ/', 'n.', '交换', 'switch + ing'],
      ['switchboard', '/ˈswɪtʃbɔːrd/', 'n.', '交换台', 'switch + board'],
      ['layer switch', '/ˈleɪər swɪtʃ/', 'n.', '层交换机', 'layer + switch']
    ],
    ['network switch 网络交换机', 'switch port 交换端口', 'circuit switching 电路交换'],
    'Switch→"斯维奇"→切换开关'
  ],
  ['firewall', '/ˈfaɪərwɔːl/', '防火墙', '名词',
    [
      ['firewall', '/ˈfaɪərwɔːl/', 'n.', '防火墙', 'fire(火) + wall(墙)'],
      ['fire', '/faɪər/', 'n.', '火', '本身是词根'],
      ['wall', '/wɔːl/', 'n.', '墙', '本身是词根'],
      ['firewall rule', '/ˈfaɪərwɔːl ruːl/', 'n.', '防火墙规则', 'firewall + rule']
    ],
    ['configure firewall 配置防火墙', 'firewall protection 防火墙保护', 'enable firewall 启用防火墙'],
    'Firewall→"法伊尔沃"→防火的墙'
  ],
  ['gateway', '/ˈɡeɪtweɪ/', '网关', '名词',
    [
      ['gateway', '/ˈɡeɪtweɪ/', 'n.', '网关', 'gate(门) + way(路)'],
      ['gate', '/ɡeɪt/', 'n.', '门', '本身是词根'],
      ['default gateway', '/dɪˈfɔːlt ˈɡeɪtweɪ/', 'n.', '默认网关', 'default + gateway'],
      ['gateway server', '/ˈɡeɪtweɪ ˈsɜːrvər/', 'n.', '网关服务器', 'gateway + server']
    ],
    ['gateway address 网关地址', 'payment gateway 支付网关', 'gateway interface 网关接口'],
    'Gateway→"给特位"→给个位置当门路'
  ],
  ['satellite', '/ˈsætəlaɪt/', '卫星', '名词',
    [
      ['satellite', '/ˈsætəlaɪt/', 'n.', '卫星', 'satell(跟随) + ite'],
      ['satellite communication', '/ˈsætəlaɪt kəˌmjuːnɪˈkeɪʃn/', 'n.', '卫星通信', 'satellite + communication'],
      ['satellite network', '/ˈsætəlaɪt ˈnetwɜːrk/', 'n.', '卫星网络', 'satellite + network'],
      ['LEO satellite', '/el iː oʊ ˈsætəlaɪt/', 'n.', '低轨卫星', 'LEO + satellite']
    ],
    ['satellite orbit 卫星轨道', 'satellite signal 卫星信号', 'communication satellite 通信卫星'],
    'Satellite→"塞特来特"→跟随地球的小东西'
  ],
  ['fiber', '/ˈfaɪbər/', '光纤', '名词',
    [
      ['fiber', '/ˈfaɪbər/', 'n.', '光纤', '本身是词根'],
      ['optical fiber', '/ˈɒptɪkl ˈfaɪbər/', 'n.', '光纤', 'optical + fiber'],
      ['fiber optic', '/ˈfaɪbər ˈɒptɪk/', 'n.', '光纤', 'fiber + optic'],
      ['fiber cable', '/ˈfaɪbər ˈkeɪbəl/', 'n.', '光缆', 'fiber + cable']
    ],
    ['fiber communication 光纤通信', 'fiber network 光纤网络', 'fiber to the home 光纤到户'],
    'Fiber→"法伯"→纤细的传输介质'
  ],
  ['antenna', '/ænˈtenə/', '天线', '名词',
    [
      ['antenna', '/ænˈtenə/', 'n.', '天线', '本身是词根'],
      ['MIMO antenna', '/maɪmoʊ ænˈtenə/', 'n.', 'MIMO天线', 'MIMO + antenna'],
      ['antenna pattern', '/ænˈtenə ˈpætərn/', 'n.', '天线方向图', 'antenna + pattern'],
      ['omnidirectional antenna', '/ˌɒmnɪdɪˈrekʃənl ænˈtenə/', 'n.', '全向天线', 'omnidirectional + antenna']
    ],
    ['antenna gain 天线增益', 'antenna efficiency 天线效率', 'smart antenna 智能天线'],
    'Antenna→"安天纳"→安装在天上接纳信号'
  ],
  ['beam', '/biːm/', '波束', '名词',
    [
      ['beam', '/biːm/', 'n.', '波束', '本身是词根'],
      ['beamforming', '/ˈbiːmfɔːrmɪŋ/', 'n.', '波束成形', 'beam + forming'],
      ['beam steering', '/biːm ˈstɪrɪŋ/', 'n.', '波束控制', 'beam + steering'],
      ['narrow beam', '/ˈnæroʊ biːm/', 'n.', '窄波束', 'narrow + beam']
    ],
    ['beam direction 波束方向', 'beam width 波束宽度', 'beam selection 波束选择'],
    'Beam→"比姆"→像光束一样的波'
  ],
  ['multiplex', '/ˈmʌltɪpleks/', '复用', '动词/名词',
    [
      ['multiplex', '/ˈmʌltɪpleks/', 'v.', '复用', 'multi(多) + plex(折叠)'],
      ['multiplexing', '/ˈmʌltɪpleksɪŋ/', 'n.', '复用', 'multiplex + ing'],
      ['FDM', '/ef diː em/', 'n.', '频分复用', 'Frequency Division Multiplexing'],
      ['TDM', '/tiː diː em/', 'n.', '时分复用', 'Time Division Multiplexing']
    ],
    ['frequency division multiplexing 频分复用', 'time division multiplexing 时分复用', 'spatial multiplexing 空分复用'],
    'Multiplex→"马提普来克斯"→多种方式折叠使用'
  ],
  ['codec', '/ˈkoʊdek/', '编解码器', '名词',
    [
      ['codec', '/ˈkoʊdek/', 'n.', '编解码器', 'co(共同) + dec(编解码)'],
      ['audio codec', '/ˈɔːdioʊ ˈkoʊdek/', 'n.', '音频编解码器', 'audio + codec'],
      ['video codec', '/ˈvɪdioʊ ˈkoʊdek/', 'n.', '视频编解码器', 'video + codec'],
      ['image codec', '/ˈɪmɪdʒ ˈkoūdek/', 'n.', '图像编解码器', 'image + codec']
    ],
    ['codec standard 编解码标准', 'codec efficiency 编解码效率', 'audio codec 音频编解码'],
    'Codec→"扣得克"→编码解码的缩写'
  ],
  ['sync', '/sɪŋk/', '同步', '动词/名词',
    [
      ['sync', '/sɪŋk/', 'v./n.', '同步', 'synchronize的缩写'],
      ['synchronize', '/ˈsɪŋkrənaɪz/', 'v.', '同步', 'syn(相同) + chron(时间) + ize'],
      ['synchronous', '/ˈsɪŋkrənəs/', 'adj.', '同步的', 'synchronize + ous'],
      ['asynchronous', '/eɪˈsɪŋkrənəs/', 'adj.', '异步的', 'a(不) + synchronous']
    ],
    ['sync signal 同步信号', 'time synchronization 时间同步', 'sync word 同步字'],
    'Sync→"辛克"→心心相印同步'
  ],
  ['buffer', '/ˈbʌfər/', '缓冲区', '名词/动词',
    [
      ['buffer', '/ˈbʌfər/', 'n.', '缓冲区', '本身是词根'],
      ['buffer size', '/ˈbʌfər saɪz/', 'n.', '缓冲区大小', 'buffer + size'],
      ['buffer overflow', '/ˈbʌfər ˈoʊvərfloʊ/', 'n.', '缓冲区溢出', 'buffer + overflow'],
      ['input buffer', '/ˈɪnpʊt ˈbʌfər/', 'n.', '输入缓冲区', 'input + buffer']
    ],
    ['buffer memory 缓冲存储器', 'circular buffer 循环缓冲区', 'buffer management 缓冲区管理'],
    'Buffer→"巴弗"→把数据缓冲一下'
  ],
  ['codec', '/ˈkoʊdek/', '编解码', '名词',
    [
      ['encode', '/ɪnˈkoʊd/', 'v.', '编码', 'en + code'],
      ['decode', '/diːˈkoʊd/', 'v.', '解码', 'de + code'],
      ['encoder', '/ɪnˈkoʊdər/', 'n.', '编码器', 'encode + r'],
      ['decoder', '/diːˈkoʊdər/', 'n.', '解码器', 'decode + r']
    ],
    ['video codec 视频编解码', 'audio codec 音频编解码', 'codec performance 编解码性能'],
    'Codec→编码(code)解码(decode)的合体'
  ]
];

// 扩展通信类目
const existing = JSON.parse(fs.readFileSync('src/data/communication.json', 'utf8'));
let startId = 2051;
let startFreq = 51;

const newLessons = communicationRoots.map(item => {
  const [root, phonetic, meaning, pos, wordsArr, phrases, mnemonic] = item;
  const words = wordsArr.map(w => ({
    word: w[0], phonetic: w[1], partOfSpeech: w[2], meaning: w[3], memoryTip: w[4]
  }));
  return generateLesson(root, phonetic, meaning, '通信', startId++, startFreq++, words, phrases, mnemonic, pos);
});

const allLessons = [...existing, ...newLessons];
fs.writeFileSync('src/data/communication.json', JSON.stringify(allLessons, null, 2), 'utf8');
console.log('通信类目: 已添加', newLessons.length, '个新词根，共', allLessons.length, '个');
