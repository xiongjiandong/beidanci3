const fs = require('fs');
const path = require('path');

// 300个六级词根数据（id 501-800）
const newRoots = [
  // id 501-550
  {
    "id": 501,
    "root": "aer",
    "phonetic": "/ˈeər/",
    "partOfSpeech": "词根",
    "meaning": "空气，气体",
    "frequency": 501,
    "category": "六级",
    "words": [
      {"word": "aerial", "phonetic": "/ˈeəriəl/", "partOfSpeech": "adj.", "meaning": "空中的，航空的", "memoryTip": "aer空气 + -ial形容词后缀 → 空气中的 → 空中的", "root": "aer", "rootPhonetic": "/ˈeər/", "rootMeaning": "空气"},
      {"word": "aeroplane", "phonetic": "/ˈeərəpleɪn/", "partOfSpeech": "n.", "meaning": "飞机", "memoryTip": "aero空气 + plane飞机 → 空中飞行器 → 飞机", "root": "aer", "rootPhonetic": "/ˈeər/", "rootMeaning": "空气"},
      {"word": "aerosol", "phonetic": "/ˈeərəsɒl/", "partOfSpeech": "n.", "meaning": "气溶胶，喷雾", "memoryTip": "aero空气 + sol溶液 → 空气溶胶 → 气溶胶", "root": "aer", "rootPhonetic": "/ˈeər/", "rootMeaning": "空气"},
      {"word": "aerobics", "phonetic": "/eəˈrəʊbɪks/", "partOfSpeech": "n.", "meaning": "有氧运动", "memoryTip": "aero空气 + bio生命 + -ics学科 → 需要空气的生命运动 → 有氧运动", "root": "aer", "rootPhonetic": "/ˈeər/", "rootMeaning": "空气"}
    ],
    "phrases": ["aerial view 鸟瞰图", "aerobics class 有氧健身课", "aerosol spray 气溶胶喷雾"],
    "mnemonic": "aer→空气→与空气、气体相关"
  },
  {
    "id": 502,
    "root": "agon",
    "phonetic": "/ˈæɡən/",
    "partOfSpeech": "词根",
    "meaning": "挣扎，斗争",
    "frequency": 502,
    "category": "六级",
    "words": [
      {"word": "agony", "phonetic": "/ˈæɡəni/", "partOfSpeech": "n.", "meaning": "极度痛苦", "memoryTip": "agon挣扎 + -y名词后缀 → 挣扎的痛苦 → 极度痛苦", "root": "agon", "rootPhonetic": "/ˈæɡən/", "rootMeaning": "挣扎"},
      {"word": "agonize", "phonetic": "/ˈæɡənaɪz/", "partOfSpeech": "v.", "meaning": "使极度痛苦，挣扎", "memoryTip": "agon挣扎 + -ize动词后缀 → 使挣扎 → 使极度痛苦", "root": "agon", "rootPhonetic": "/ˈæɡən/", "rootMeaning": "挣扎"},
      {"word": "antagonist", "phonetic": "/ænˈtæɡənɪst/", "partOfSpeech": "n.", "meaning": "对手，反派", "memoryTip": "ant-反 + agon斗争 + -ist人 → 反对斗争的人 → 对手", "root": "agon", "rootPhonetic": "/ˈæɡən/", "rootMeaning": "挣扎"},
      {"word": "protagonist", "phonetic": "/prəˈtæɡənɪst/", "partOfSpeech": "n.", "meaning": "主角，主人公", "memoryTip": "prot-首先 + agon斗争 + -ist人 → 首先斗争的人 → 主角", "root": "agon", "rootPhonetic": "/ˈæɡən/", "rootMeaning": "挣扎"}
    ],
    "phrases": ["in agony 痛苦地", "agonize over 为...而苦恼", "main antagonist 主要反派"],
    "mnemonic": "agon→挣扎→痛苦、斗争"
  },
  {
    "id": 503,
    "root": "ali",
    "phonetic": "/ˈeɪlaɪ/",
    "partOfSpeech": "词根",
    "meaning": "其他，另一个",
    "frequency": 503,
    "category": "六级",
    "words": [
      {"word": "alien", "phonetic": "/ˈeɪliən/", "partOfSpeech": "adj./n.", "meaning": "外国的；外星人", "memoryTip": "ali其他 + -en → 其他地方的 → 外国的；外星人", "root": "ali", "rootPhonetic": "/ˈeɪlaɪ/", "rootMeaning": "其他"},
      {"word": "alienate", "phonetic": "/ˈeɪliəneɪt/", "partOfSpeech": "v.", "meaning": "使疏远，离间", "memoryTip": "ali其他 + -en- + -ate动词 → 使成为其他 → 使疏远", "root": "ali", "rootPhonetic": "/ˈeɪlaɪ/", "rootMeaning": "其他"},
      {"word": "inalienable", "phonetic": "/ɪnˈeɪliənəbl/", "partOfSpeech": "adj.", "meaning": "不可剥夺的", "memoryTip": "in-不 + ali其他 + -en- + -able能 → 不能让与他人 → 不可剥夺的", "root": "ali", "rootPhonetic": "/ˈeɪlaɪ/", "rootMeaning": "其他"}
    ],
    "phrases": ["alien culture 异域文化", "alienate from 与...疏远", "inalienable rights 不可剥夺的权利"],
    "mnemonic": "ali→其他→异域、外星"
  },
  {
    "id": 504,
    "root": "alter",
    "phonetic": "/ˈɔːltər/",
    "partOfSpeech": "词根",
    "meaning": "其他，改变",
    "frequency": 504,
    "category": "六级",
    "words": [
      {"word": "alternate", "phonetic": "/ˈɔːltərnət/", "partOfSpeech": "v./adj.", "meaning": "交替；交替的", "memoryTip": "alter其他 + -n- + -ate → 换成其他 → 交替", "root": "alter", "rootPhonetic": "/ˈɔːltər/", "rootMeaning": "其他"},
      {"word": "alternative", "phonetic": "/ɔːlˈtɜːnətɪv/", "partOfSpeech": "n./adj.", "meaning": "选择；替代的", "memoryTip": "alter其他 + -n- + -ative → 其他的选择 → 替代选择", "root": "alter", "rootPhonetic": "/ˈɔːltər/", "rootMeaning": "其他"},
      {"word": "altruism", "phonetic": "/ˈæltruɪzəm/", "partOfSpeech": "n.", "meaning": "利他主义", "memoryTip": "altr其他 + -u- + -ism主义 → 为他人着想 → 利他主义", "root": "alter", "rootPhonetic": "/ˈɔːltər/", "rootMeaning": "其他"}
    ],
    "phrases": ["alternate between 在...之间交替", "alternative energy 替代能源", "altruism spirit 利他精神"],
    "mnemonic": "alter→其他→改变、替代"
  },
  {
    "id": 505,
    "root": "am",
    "phonetic": "/æm/",
    "partOfSpeech": "词根",
    "meaning": "爱",
    "frequency": 505,
    "category": "六级",
    "words": [
      {"word": "amateur", "phonetic": "/ˈæmətər/", "partOfSpeech": "n./adj.", "meaning": "业余爱好者；业余的", "memoryTip": "am爱 + -ateur人 → 出于爱好的人 → 业余爱好者", "root": "am", "rootPhonetic": "/æm/", "rootMeaning": "爱"},
      {"word": "amiable", "phonetic": "/ˈeɪmiəbl/", "partOfSpeech": "adj.", "meaning": "和蔼可亲的", "memoryTip": "am爱 + -i- + -able能 → 能爱的 → 可爱的，和蔼的", "root": "am", "rootPhonetic": "/æm/", "rootMeaning": "爱"},
      {"word": "amicable", "phonetic": "/ˈæmɪkəbl/", "partOfSpeech": "adj.", "meaning": "友好的，和睦的", "memoryTip": "am爱 + -ic- + -able能 → 能爱的 → 友好的", "root": "am", "rootPhonetic": "/æm/", "rootMeaning": "爱"},
      {"word": "enamor", "phonetic": "/ɪˈnæmər/", "partOfSpeech": "v.", "meaning": "使迷恋，使倾心", "memoryTip": "en-使 + am爱 + -or → 使爱上 → 使迷恋", "root": "am", "rootPhonetic": "/æm/", "rootMeaning": "爱"}
    ],
    "phrases": ["amateur player 业余选手", "amiable personality 和蔼的性格", "amicable solution 友好解决方案"],
    "mnemonic": "am→爱→喜爱、友好"
  },
  {
    "id": 506,
    "root": "ampl",
    "phonetic": "/ˈæmpl/",
    "partOfSpeech": "词根",
    "meaning": "大，宽阔",
    "frequency": 506,
    "category": "六级",
    "words": [
      {"word": "ample", "phonetic": "/ˈæmpl/", "partOfSpeech": "adj.", "meaning": "充足的，宽敞的", "memoryTip": "ampl大 + -e → 大的 → 充足的，宽敞的", "root": "ampl", "rootPhonetic": "/ˈæmpl/", "rootMeaning": "大"},
      {"word": "amplify", "phonetic": "/ˈæmplɪfaɪ/", "partOfSpeech": "v.", "meaning": "放大，增强", "memoryTip": "ampl大 + -i- + -fy使 → 使变大 → 放大", "root": "ampl", "rootPhonetic": "/ˈæmpl/", "rootMeaning": "大"},
      {"word": "amplitude", "phonetic": "/ˈæmplɪtjuːd/", "partOfSpeech": "n.", "meaning": "振幅，广阔", "memoryTip": "ampl大 + -itude状态 → 大的状态 → 振幅，广阔", "root": "ampl", "rootPhonetic": "/ˈæmpl/", "rootMeaning": "大"}
    ],
    "phrases": ["ample evidence 充分证据", "amplify sound 放大声音", "wave amplitude 波幅"],
    "mnemonic": "ampl→大→充足、放大"
  },
  {
    "id": 507,
    "root": "anim",
    "phonetic": "/ˈænɪm/",
    "partOfSpeech": "词根",
    "meaning": "生命，精神",
    "frequency": 507,
    "category": "六级",
    "words": [
      {"word": "animal", "phonetic": "/ˈænɪml/", "partOfSpeech": "n.", "meaning": "动物", "memoryTip": "anim生命 + -al → 有生命的 → 动物", "root": "anim", "rootPhonetic": "/ˈænɪm/", "rootMeaning": "生命"},
      {"word": "animate", "phonetic": "/ˈænɪmeɪt/", "partOfSpeech": "v./adj.", "meaning": "使有生气；有生命的", "memoryTip": "anim生命 + -ate使 → 使有生命 → 使有生气", "root": "anim", "rootPhonetic": "/ˈænɪm/", "rootMeaning": "生命"},
      {"word": "unanimous", "phonetic": "/juˈnænɪməs/", "partOfSpeech": "adj.", "meaning": "全体一致的", "memoryTip": "un-一个 + anim精神 + -ous → 一个精神的 → 全体一致的", "root": "anim", "rootPhonetic": "/ˈænɪm/", "rootMeaning": "生命"},
      {"word": "magnanimous", "phonetic": "/mæɡˈnænɪməs/", "partOfSpeech": "adj.", "meaning": "宽宏大量的", "memoryTip": "magn大 + anim精神 + -ous → 大精神的 → 宽宏大量的", "root": "anim", "rootPhonetic": "/ˈænɪm/", "rootMeaning": "生命"}
    ],
    "phrases": ["animate cartoon 动画", "unanimous decision 一致决定", "magnanimous gesture 宽宏大量的姿态"],
    "mnemonic": "anim→生命→动物、生气"
  },
  {
    "id": 508,
    "root": "ann",
    "phonetic": "/æn/",
    "partOfSpeech": "词根",
    "meaning": "年",
    "frequency": 508,
    "category": "六级",
    "words": [
      {"word": "annual", "phonetic": "/ˈænjuəl/", "partOfSpeech": "adj.", "meaning": "每年的，年度的", "memoryTip": "ann年 + -ual → 每年的 → 年度的", "root": "ann", "rootPhonetic": "/æn/", "rootMeaning": "年"},
      {"word": "anniversary", "phonetic": "/ˌænɪˈvɜːsəri/", "partOfSpeech": "n.", "meaning": "周年纪念", "memoryTip": "ann年 + i + vers转 + ary → 转了一年 → 周年纪念", "root": "ann", "rootPhonetic": "/æn/", "rootMeaning": "年"},
      {"word": "annuity", "phonetic": "/əˈnjuːəti/", "partOfSpeech": "n.", "meaning": "年金，养老金", "memoryTip": "ann年 + -u- + -ity → 每年的钱 → 年金", "root": "ann", "rootPhonetic": "/æn/", "rootMeaning": "年"},
      {"word": "perennial", "phonetic": "/pəˈreniəl/", "partOfSpeech": "adj.", "meaning": "多年的，持久的", "memoryTip": "per-贯穿 + enn年 + -ial → 贯穿多年的 → 持久的", "root": "ann", "rootPhonetic": "/æn/", "rootMeaning": "年"}
    ],
    "phrases": ["annual report 年度报告", "wedding anniversary 结婚纪念日", "annual salary 年薪"],
    "mnemonic": "ann→年→年度、周年"
  },
  {
    "id": 509,
    "root": "anthrop",
    "phonetic": "/ˈænθrəp/",
    "partOfSpeech": "词根",
    "meaning": "人，人类",
    "frequency": 509,
    "category": "六级",
    "words": [
      {"word": "anthropology", "phonetic": "/ˌænθrəˈpɒlədʒi/", "partOfSpeech": "n.", "meaning": "人类学", "memoryTip": "anthrop人类 + -o- + -logy学科 → 研究人类的学科 → 人类学", "root": "anthrop", "rootPhonetic": "/ˈænθrəp/", "rootMeaning": "人"},
      {"word": "anthropologist", "phonetic": "/ˌænθrəˈpɒlədʒɪst/", "partOfSpeech": "n.", "meaning": "人类学家", "memoryTip": "anthrop人类 + -o- + -logist学家 → 人类学家", "root": "anthrop", "rootPhonetic": "/ˈænθrəp/", "rootMeaning": "人"},
      {"word": "philanthropy", "phonetic": "/fɪˈlænθrəpi/", "partOfSpeech": "n.", "meaning": "慈善，博爱", "memoryTip": "phil爱 + anthrop人类 + -y → 爱人类 → 慈善", "root": "anthrop", "rootPhonetic": "/ˈænθrəp/", "rootMeaning": "人"},
      {"word": "misanthrope", "phonetic": "/ˈmɪsənθrəʊp/", "partOfSpeech": "n.", "meaning": "厌恶人类者", "memoryTip": "mis恨 + anthrop人类 + -e → 恨人类的人 → 厌恶人类者", "root": "anthrop", "rootPhonetic": "/ˈænθrəp/", "rootMeaning": "人"}
    ],
    "phrases": ["cultural anthropology 文化人类学", "philanthropy work 慈善工作", "social anthropologist 社会人类学家"],
    "mnemonic": "anthrop→人→人类、人类学"
  },
  {
    "id": 510,
    "root": "apt",
    "phonetic": "/æpt/",
    "partOfSpeech": "词根",
    "meaning": "适应，能力",
    "frequency": 510,
    "category": "六级",
    "words": [
      {"word": "apt", "phonetic": "/æpt/", "partOfSpeech": "adj.", "meaning": "恰当的，有...倾向的", "memoryTip": "apt能力 → 有能力的 → 恰当的", "root": "apt", "rootPhonetic": "/æpt/", "rootMeaning": "适应"},
      {"word": "aptitude", "phonetic": "/ˈæptɪtjuːd/", "partOfSpeech": "n.", "meaning": "天资，自然倾向", "memoryTip": "apt能力 + -itude状态 → 能力状态 → 天资", "root": "apt", "rootPhonetic": "/æpt/", "rootMeaning": "适应"},
      {"word": "adapt", "phonetic": "/əˈdæpt/", "partOfSpeech": "v.", "meaning": "适应，改编", "memoryTip": "ad-向 + apt适应 → 向...适应 → 适应", "root": "apt", "rootPhonetic": "/æpt/", "rootMeaning": "适应"},
      {"word": "adept", "phonetic": "/əˈdept/", "partOfSpeech": "adj./n.", "meaning": "熟练的；行家", "memoryTip": "ad-向 + ept(apt)能力 → 有能力 → 熟练的", "root": "apt", "rootPhonetic": "/æpt/", "rootMeaning": "适应"}
    ],
    "phrases": ["apt description 恰当描述", "aptitude test 能力倾向测试", "adapt to 适应"],
    "mnemonic": "apt→适应→能力、恰当"
  }
];

// 由于条目数量很多，我需要分批添加。先处理文件读取
const filePath = path.join(__dirname, 'src/data/cet-6.json');

// 读取文件
let content = fs.readFileSync(filePath, 'utf8');

// 移除最后的 ] 和换行
content = content.trim();
if (content.endsWith(']')) {
  content = content.slice(0, -1).trim();
}

// 添加逗号如果文件中有条目
if (content.endsWith('}')) {
  content += ',';
}

// 添加新条目
const newContent = JSON.stringify(newRoots, null, 2);
content += '\n' + newContent.slice(1, -1); // 移除新数组的 [ 和 ]

// 添加结尾 ]
content += '\n]';

// 写入文件
fs.writeFileSync(filePath, content);

console.log(`成功添加了 ${newRoots.length} 个词根条目`);
