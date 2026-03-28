const fs = require('fs');

// 词根数据生成器
function generateLesson(root, phonetic, meaning, category, id, frequency, words, phrases, mnemonic, partOfSpeech = '名词/动词') {
  return {
    id,
    root,
    phonetic,
    partOfSpeech,
    meaning,
    frequency,
    category,
    words: words.map(w => ({
      word: w.word,
      phonetic: w.phonetic,
      partOfSpeech: w.partOfSpeech,
      meaning: w.meaning,
      memoryTip: w.memoryTip,
      root,
      rootPhonetic: phonetic,
      rootMeaning: meaning,
      rootPhrases: phrases,
      wordPhrases: phrases
    })),
    phrases,
    mnemonic
  };
}

// 通信行业词根库 - 第2批 (继续扩展到150个)
const communicationRoots = [
  { root: 'link', phonetic: '/lɪŋk/', meaning: '链路；链接', words: [
    { word: 'link', phonetic: '/lɪŋk/', partOfSpeech: 'n.', meaning: '链路', memoryTip: '本身是词根' },
    { word: 'link budget', phonetic: '/lɪŋk ˈbʌdʒɪt/', partOfSpeech: 'n.', meaning: '链路预算', memoryTip: 'link + budget' },
    { word: 'uplink', phonetic: '/ˈʌplɪŋk/', partOfSpeech: 'n.', meaning: '上行链路', memoryTip: 'up + link' },
    { word: 'downlink', phonetic: '/ˈdaʊnlɪŋk/', partOfSpeech: 'n.', meaning: '下行链路', memoryTip: 'down + link' }
  ], phrases: ['link quality 链路质量', 'establish link 建立链路', 'wireless link 无线链路'], mnemonic: 'Link→"领客"→带领客人通过链路' },

  { root: 'error', phonetic: '/ˈerər/', meaning: '错误', words: [
    { word: 'error', phonetic: '/ˈerər/', partOfSpeech: 'n.', meaning: '错误', memoryTip: '本身是词根' },
    { word: 'error rate', phonetic: '/ˈerər reɪt/', partOfSpeech: 'n.', meaning: '误码率', memoryTip: 'error + rate' },
    { word: 'error correction', phonetic: '/ˈerər kəˈrekʃn/', partOfSpeech: 'n.', meaning: '纠错', memoryTip: 'error + correction' },
    { word: 'error detection', phonetic: '/ˈerər dɪˈtekʃn/', partOfSpeech: 'n.', meaning: '检错', memoryTip: 'error + detection' }
  ], phrases: ['bit error rate 误比特率', 'error control 差错控制', 'error free 无误码'], mnemonic: 'Error→"爱若"→爱出错的问题' },

  { root: 'noise', phonetic: '/nɔɪz/', meaning: '噪声', words: [
    { word: 'noise', phonetic: '/nɔɪz/', partOfSpeech: 'n.', meaning: '噪声', memoryTip: '本身是词根' },
    { word: 'noise figure', phonetic: '/nɔɪz ˈfɪɡjər/', partOfSpeech: 'n.', meaning: '噪声系数', memoryTip: 'noise + figure' },
    { word: 'noise reduction', phonetic: '/nɔɪz rɪˈdʌkʃn/', partOfSpeech: 'n.', meaning: '降噪', memoryTip: 'noise + reduction' },
    { word: 'white noise', phonetic: '/waɪt nɔɪz/', partOfSpeech: 'n.', meaning: '白噪声', memoryTip: 'white + noise' }
  ], phrases: ['thermal noise 热噪声', 'noise level 噪声电平', 'signal to noise 信噪比'], mnemonic: 'Noise→"诺伊斯"→噪声困扰着诺伊斯' },

  { root: 'filter', phonetic: '/ˈfɪltər/', meaning: '滤波器', words: [
    { word: 'filter', phonetic: '/ˈfɪltər/', partOfSpeech: 'n.', meaning: '滤波器', memoryTip: '本身是词根' },
    { word: 'low pass filter', phonetic: '/loʊ pæs ˈfɪltər/', partOfSpeech: 'n.', meaning: '低通滤波器', memoryTip: 'low + pass + filter' },
    { word: 'high pass filter', phonetic: '/haɪ pæs ˈfɪltər/', partOfSpeech: 'n.', meaning: '高通滤波器', memoryTip: 'high + pass + filter' },
    { word: 'band pass filter', phonetic: '/bænd pæs ˈfɪltər/', partOfSpeech: 'n.', meaning: '带通滤波器', memoryTip: 'band + pass + filter' }
  ], phrases: ['filter design 滤波器设计', 'digital filter 数字滤波器', 'adaptive filter 自适应滤波器'], mnemonic: 'Filter→"非尔特"→过滤信号的工具' },

  { root: 'amplify', phonetic: '/ˈæmplɪfaɪ/', meaning: '放大', words: [
    { word: 'amplify', phonetic: '/ˈæmplɪfaɪ/', partOfSpeech: 'v.', meaning: '放大', memoryTip: 'ampli(大) + fy(使)' },
    { word: 'amplifier', phonetic: '/ˈæmplɪfaɪər/', partOfSpeech: 'n.', meaning: '放大器', memoryTip: 'amplify + er' },
    { word: 'amplification', phonetic: '/ˌæmplɪfɪˈkeɪʃn/', partOfSpeech: 'n.', meaning: '放大', memoryTip: 'amplify + cation' },
    { word: 'power amplifier', phonetic: '/ˈpaʊər ˈæmplɪfaɪər/', partOfSpeech: 'n.', meaning: '功率放大器', memoryTip: 'power + amplifier' }
  ], phrases: ['signal amplification 信号放大', 'low noise amplifier 低噪声放大器', 'gain amplification 增益放大'], mnemonic: 'Amplify→"俺普利法"→俺用普通方法放大' },

  { root: 'attenuate', phonetic: '/əˈtenjueɪt/', meaning: '衰减', words: [
    { word: 'attenuate', phonetic: '/əˈtenjueɪt/', partOfSpeech: 'v.', meaning: '衰减', memoryTip: 'at(向) + tenu(细) + ate' },
    { word: 'attenuation', phonetic: '/əˌtenjʊˈeɪʃn/', partOfSpeech: 'n.', meaning: '衰减', memoryTip: 'attenuate + ion' },
    { word: 'attenuator', phonetic: '/əˈtenjʊeɪtər/', partOfSpeech: 'n.', meaning: '衰减器', memoryTip: 'attenuate + or' },
    { word: 'signal attenuation', phonetic: '/ˈsɪɡnəl əˌtenjʊˈeɪʃn/', partOfSpeech: 'n.', meaning: '信号衰减', memoryTip: 'signal + attenuation' }
  ], phrases: ['path loss attenuation 路径损耗衰减', 'attenuation coefficient 衰减系数', 'optical attenuation 光衰减'], mnemonic: 'Attenuate→"阿特牛艾特"→信号变得很细弱' },

  { root: 'carrier', phonetic: '/ˈkæriər/', meaning: '载波', words: [
    { word: 'carrier', phonetic: '/ˈkæriər/', partOfSpeech: 'n.', meaning: '载波', memoryTip: 'carry(携带) + r' },
    { word: 'carrier frequency', phonetic: '/ˈkæriər ˈfriːkwənsi/', partOfSpeech: 'n.', meaning: '载波频率', memoryTip: 'carrier + frequency' },
    { word: 'carrier wave', phonetic: '/ˈkæriər weɪv/', partOfSpeech: 'n.', meaning: '载波', memoryTip: 'carrier + wave' },
    { word: 'multi carrier', phonetic: '/ˈmʌlti ˈkæriər/', partOfSpeech: 'n.', meaning: '多载波', memoryTip: 'multi + carrier' }
  ], phrases: ['carrier signal 载波信号', 'carrier synchronization 载波同步', 'single carrier 单载波'], mnemonic: 'Carrier→"凯瑞尔"→凯瑞载着信号走' },

  { root: 'spread', phonetic: '/spred/', meaning: '扩展；扩频', words: [
    { word: 'spread', phonetic: '/spred/', partOfSpeech: 'v.', meaning: '扩展', memoryTip: '本身是词根' },
    { word: 'spread spectrum', phonetic: '/spred ˈspektrəm/', partOfSpeech: 'n.', meaning: '扩频', memoryTip: 'spread + spectrum' },
    { word: 'spreading', phonetic: '/ˈspredɪŋ/', partOfSpeech: 'n.', meaning: '扩展', memoryTip: 'spread + ing' },
    { word: 'spread spectrum communication', phonetic: '/spred ˈspektrəm kəˌmjuːnɪˈkeɪʃn/', partOfSpeech: 'n.', meaning: '扩频通信', memoryTip: 'spread + spectrum + communication' }
  ], phrases: ['direct sequence spread spectrum 直接序列扩频', 'frequency hopping spread spectrum 跳频扩频', 'spread code 扩频码'], mnemonic: 'Spread→"斯普瑞德"→把信号散开传播' },

  { root: 'hop', phonetic: '/hɒp/', meaning: '跳频；跳跃', words: [
    { word: 'hop', phonetic: '/hɒp/', partOfSpeech: 'v./n.', meaning: '跳频', memoryTip: '本身是词根' },
    { word: 'frequency hopping', phonetic: '/ˈfriːkwənsi hɒpɪŋ/', partOfSpeech: 'n.', meaning: '跳频', memoryTip: 'frequency + hop + ing' },
    { word: 'hop rate', phonetic: '/hɒp reɪt/', partOfSpeech: 'n.', meaning: '跳频速率', memoryTip: 'hop + rate' },
    { word: 'hop sequence', phonetic: '/hɒp ˈsiːkwəns/', partOfSpeech: 'n.', meaning: '跳频序列', memoryTip: 'hop + sequence' }
  ], phrases: ['fast frequency hopping 快跳频', 'slow frequency hopping 慢跳频', 'hop pattern 跳频图案'], mnemonic: 'Hop→"哈普"→哈普跳来跳去' },

  { root: 'access', phonetic: '/ˈækses/', meaning: '接入', words: [
    { word: 'access', phonetic: '/ˈækses/', partOfSpeech: 'n./v.', meaning: '接入', memoryTip: 'ac(向) + cess(走)' },
    { word: 'access point', phonetic: '/ˈækses pɔɪnt/', partOfSpeech: 'n.', meaning: '接入点', memoryTip: 'access + point' },
    { word: 'multiple access', phonetic: '/ˈmʌltɪpl ˈækses/', partOfSpeech: 'n.', meaning: '多址接入', memoryTip: 'multiple + access' },
    { word: 'random access', phonetic: '/ˈrændəm ˈækses/', partOfSpeech: 'n.', meaning: '随机接入', memoryTip: 'random + access' }
  ], phrases: ['access network 接入网', 'access control 接入控制', 'broadband access 宽带接入'], mnemonic: 'Access→"爱克赛斯"→爱进入系统' },

  { root: 'connect', phonetic: '/kəˈnekt/', meaning: '连接', words: [
    { word: 'connect', phonetic: '/kəˈnekt/', partOfSpeech: 'v.', meaning: '连接', memoryTip: 'con(共同) + nect(连接)' },
    { word: 'connection', phonetic: '/kəˈnekʃn/', partOfSpeech: 'n.', meaning: '连接', memoryTip: 'connect + ion' },
    { word: 'connector', phonetic: '/kəˈnektər/', partOfSpeech: 'n.', meaning: '连接器', memoryTip: 'connect + or' },
    { word: 'disconnect', phonetic: '/ˌdɪskəˈnekt/', partOfSpeech: 'v.', meaning: '断开', memoryTip: 'dis(不) + connect' }
  ], phrases: ['connection oriented 面向连接', 'connectionless 无连接', 'network connection 网络连接'], mnemonic: 'Connect→"康耐克特"→连接在一起' },

  { root: 'poll', phonetic: '/poʊl/', meaning: '轮询', words: [
    { word: 'poll', phonetic: '/poʊl/', partOfSpeech: 'v./n.', meaning: '轮询', memoryTip: '本身是词根' },
    { word: 'polling', phonetic: '/ˈpoʊlɪŋ/', partOfSpeech: 'n.', meaning: '轮询', memoryTip: 'poll + ing' },
    { word: 'polling system', phonetic: '/ˈpoʊlɪŋ ˈsɪstəm/', partOfSpeech: 'n.', meaning: '轮询系统', memoryTip: 'polling + system' },
    { word: 'polling interval', phonetic: '/ˈpoʊlɪŋ ˈɪntərvl/', partOfSpeech: 'n.', meaning: '轮询间隔', memoryTip: 'polling + interval' }
  ], phrases: ['polling mechanism 轮询机制', 'poll cycle 轮询周期', 'poll request 轮询请求'], mnemonic: 'Poll→"普尔"→轮流询问' },

  { root: 'relay', phonetic: '/riːˈleɪ/', meaning: '中继', words: [
    { word: 'relay', phonetic: '/riːˈleɪ/', partOfSpeech: 'n./v.', meaning: '中继', memoryTip: 're(再) + lay(放置)' },
    { word: 'relay station', phonetic: '/riːˈleɪ ˈsteɪʃn/', partOfSpeech: 'n.', meaning: '中继站', memoryTip: 'relay + station' },
    { word: 'relay node', phonetic: '/riːˈleɪ noʊd/', partOfSpeech: 'n.', meaning: '中继节点', memoryTip: 'relay + node' },
    { word: 'cooperative relay', phonetic: '/koʊˈɒpərətɪv riːˈleɪ/', partOfSpeech: 'n.', meaning: '协作中继', memoryTip: 'cooperative + relay' }
  ], phrases: ['relay transmission 中继传输', 'relay network 中继网络', 'relay selection 中继选择'], mnemonic: 'Relay→"瑞雷"→瑞雷帮助传递信号' },

  { root: 'frame', phonetic: '/freɪm/', meaning: '帧', words: [
    { word: 'frame', phonetic: '/freɪm/', partOfSpeech: 'n.', meaning: '帧', memoryTip: '本身是词根' },
    { word: 'frame structure', phonetic: '/freɪm ˈstrʌktʃər/', partOfSpeech: 'n.', meaning: '帧结构', memoryTip: 'frame + structure' },
    { word: 'frame header', phonetic: '/freɪm ˈhedər/', partOfSpeech: 'n.', meaning: '帧头', memoryTip: 'frame + header' },
    { word: 'frame synchronization', phonetic: '/freɪm ˌsɪŋkrənaɪˈzeɪʃn/', partOfSpeech: 'n.', meaning: '帧同步', memoryTip: 'frame + synchronization' }
  ], phrases: ['data frame 数据帧', 'frame rate 帧率', 'frame length 帧长度'], mnemonic: 'Frame→"弗瑞姆"→框架里的数据' },

  { root: 'slot', phonetic: '/slɒt/', meaning: '时隙', words: [
    { word: 'slot', phonetic: '/slɒt/', partOfSpeech: 'n.', meaning: '时隙', memoryTip: '本身是词根' },
    { word: 'time slot', phonetic: '/taɪm slɒt/', partOfSpeech: 'n.', meaning: '时隙', memoryTip: 'time + slot' },
    { word: 'slot allocation', phonetic: '/slɒt ˌæləˈkeɪʃn/', partOfSpeech: 'n.', meaning: '时隙分配', memoryTip: 'slot + allocation' },
    { word: 'slot synchronization', phonetic: '/slɒt ˌsɪŋkrənaɪˈzeɪʃn/', partOfSpeech: 'n.', meaning: '时隙同步', memoryTip: 'slot + synchronization' }
  ], phrases: ['slot time 时隙时间', 'dynamic slot 动态时隙', 'slot assignment 时隙分配'], mnemonic: 'Slot→"斯洛特"→时间的小槽' },

  { root: 'code', phonetic: '/koʊd/', meaning: '码；编码', words: [
    { word: 'code', phonetic: '/koʊd/', partOfSpeech: 'n.', meaning: '代码；码', memoryTip: '本身是词根' },
    { word: 'code division', phonetic: '/koʊd dɪˈvɪʒn/', partOfSpeech: 'n.', meaning: '码分', memoryTip: 'code + division' },
    { word: 'channel code', phonetic: '/ˈtʃænəl koʊd/', partOfSpeech: 'n.', meaning: '信道码', memoryTip: 'channel + code' },
    { word: 'source code', phonetic: '/sɔːrs koʊd/', partOfSpeech: 'n.', meaning: '信源码', memoryTip: 'source + code' }
  ], phrases: ['error correcting code 纠错码', 'code rate 码率', 'code word 码字'], mnemonic: 'Code→"扣的"→密码被扣住了' },

  { root: 'crypt', phonetic: '/krɪpt/', meaning: '加密', words: [
    { word: 'encrypt', phonetic: '/ɪnˈkrɪpt/', partOfSpeech: 'v.', meaning: '加密', memoryTip: 'en(使) + crypt(隐藏)' },
    { word: 'decrypt', phonetic: '/diːˈkrɪpt/', partOfSpeech: 'v.', meaning: '解密', memoryTip: 'de(解除) + crypt' },
    { word: 'encryption', phonetic: '/ɪnˈkrɪpʃn/', partOfSpeech: 'n.', meaning: '加密', memoryTip: 'encrypt + ion' },
    { word: 'cryptography', phonetic: '/krɪpˈtɒɡrəfi/', partOfSpeech: 'n.', meaning: '密码学', memoryTip: 'crypt + ography' }
  ], phrases: ['data encryption 数据加密', 'encryption algorithm 加密算法', 'public key encryption 公钥加密'], mnemonic: 'Crypt→"克里普特"→隐藏的秘密' },

  { root: 'authenticate', phonetic: '/ɔːˈθentɪkeɪt/', meaning: '认证', words: [
    { word: 'authenticate', phonetic: '/ɔːˈθentɪkeɪt/', partOfSpeech: 'v.', meaning: '认证', memoryTip: 'authen(真实) + ticate' },
    { word: 'authentication', phonetic: '/ɔːˌθentɪˈkeɪʃn/', partOfSpeech: 'n.', meaning: '认证', memoryTip: 'authenticate + ion' },
    { word: 'authenticator', phonetic: '/ɔːˈθentɪkeɪtər/', partOfSpeech: 'n.', meaning: '认证器', memoryTip: 'authenticate + or' },
    { word: 'user authentication', phonetic: '/ˈjuːzər ɔːˌθentɪˈkeɪʃn/', partOfSpeech: 'n.', meaning: '用户认证', memoryTip: 'user + authentication' }
  ], phrases: ['identity authentication 身份认证', 'authentication protocol 认证协议', 'mutual authentication 双向认证'], mnemonic: 'Authenticate→"奥森提K特"→确认真实身份' },

  { root: 'cipher', phonetic: '/ˈsaɪfər/', meaning: '密码', words: [
    { word: 'cipher', phonetic: '/ˈsaɪfər/', partOfSpeech: 'n.', meaning: '密码', memoryTip: '本身是词根' },
    { word: 'cipher text', phonetic: '/ˈsaɪfər tekst/', partOfSpeech: 'n.', meaning: '密文', memoryTip: 'cipher + text' },
    { word: 'cipher algorithm', phonetic: '/ˈsaɪfər ˈælɡərɪðəm/', partOfSpeech: 'n.', meaning: '密码算法', memoryTip: 'cipher + algorithm' },
    { word: 'block cipher', phonetic: '/blɒk ˈsaɪfər/', partOfSpeech: 'n.', meaning: '分组密码', memoryTip: 'block + cipher' }
  ], phrases: ['stream cipher 流密码', 'cipher key 密钥', 'cipher suite 密码套件'], mnemonic: 'Cipher→"赛弗"→密码比赛' }
];

// 读取现有数据
const existing = JSON.parse(fs.readFileSync('src/data/communication.json', 'utf8'));
const lastItem = existing[existing.length - 1];
let startId = lastItem ? lastItem.id + 1 : 2051;
let startFreq = lastItem ? lastItem.frequency + 1 : 83;

const newLessons = communicationRoots.map(item => {
  return generateLesson(
    item.root, item.phonetic, item.meaning, '通信',
    startId++, startFreq++, item.words, item.phrases, item.mnemonic
  );
});

const allLessons = [...existing, ...newLessons];
fs.writeFileSync('src/data/communication.json', JSON.stringify(allLessons, null, 2), 'utf8');
console.log('通信类目: 已添加', newLessons.length, '个新词根，共', allLessons.length, '个');
