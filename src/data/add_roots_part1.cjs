const fs = require('fs');

const newRoots = [];

// 生成词根数据的函数
function createRoot(id, root, phonetic, partOfSpeech, meaning, frequency, words, phrases, mnemonic) {
  return {
    id,
    root,
    phonetic,
    partOfSpeech,
    meaning,
    frequency,
    category: '四级',
    words,
    phrases,
    mnemonic
  };
}

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

// 词根数据列表
const rootsData = [
  // 11043-11060
  {
    id: 11043, root: 'cert', phonetic: '/sɜːrt/', partOfSpeech: 'adj.', meaning: '确定', frequency: 93,
    words: [
      createWord('certain', '/ˈsɜːrtn/', 'adj.', '确定的', 'cert确定 + -ain形容词 → 确定的', 'cert', '/sɜːrt/', '确定', ['certain about 对...确定', 'certify that 证明', 'certificate of ...的证书', 'ascertain the truth 查明真相'], ['certain about 对...确定', 'make certain 确定']),
      createWord('certify', '/ˈsɜːrtɪfaɪ/', 'v.', '证明', 'cert确定 + -ify动词 → 使确定 → 证明', 'cert', '/sɜːrt/', '确定', ['certain about 对...确定', 'certify that 证明', 'certificate of ...的证书', 'ascertain the truth 查明真相'], ['certify that 证明', 'certify for 为...证明']),
      createWord('certificate', '/sərˈtɪfɪkət/', 'n.', '证书', 'cert确定 + -i- + fic做 + -ate名词 → 确定做的事 → 证书', 'cert', '/sɜːrt/', '确定', ['certain about 对...确定', 'certify that 证明', 'certificate of ...的证书', 'ascertain the truth 查明真相'], ['certificate of ...的证书', 'birth certificate 出生证明']),
      createWord('ascertain', '/ˌæsərˈteɪn/', 'v.', '查明', 'as(to) + certain确定 → 使确定 → 查明', 'cert', '/sɜːrt/', '确定', ['certain about 对...确定', 'certify that 证明', 'certificate of ...的证书', 'ascertain the truth 查明真相'], ['ascertain the truth 查明真相', 'ascertain facts 查明事实'])
    ],
    phrases: ['certain about 对...确定', 'certify that 证明', 'certificate of ...的证书', 'ascertain the truth 查明真相'],
    mnemonic: 'cert（确定）→ 确信无疑 → 确定'
  },
  {
    id: 11044, root: 'fin', phonetic: '/fɪn/', partOfSpeech: 'n./v.', meaning: '结束/界限', frequency: 94,
    words: [
      createWord('final', '/ˈfaɪnl/', 'adj./n.', '最后的', 'fin结束 + -al形容词 → 结束的 → 最后的', 'fin', '/fɪn/', '结束/界限', ['final decision 最终决定', 'define as 定义为', 'infinite resources 无限资源', 'finance minister 财政部长'], ['final decision 最终决定', 'final exam 期末考试']),
      createWord('define', '/dɪˈfaɪn/', 'v.', '定义', 'de加强 + fin界限 + e → 划定界限 → 定义', 'fin', '/fɪn/', '结束/界限', ['final decision 最终决定', 'define as 定义为', 'infinite resources 无限资源', 'finance minister 财政部长'], ['define as 定义为', 'clearly define 清楚定义']),
      createWord('infinite', '/ˈɪnfɪnət/', 'adj.', '无限的', 'in无 + fin界限 + -ite形容词 → 没有界限的 → 无限的', 'fin', '/fɪn/', '结束/界限', ['final decision 最终决定', 'define as 定义为', 'infinite resources 无限资源', 'finance minister 财政部长'], ['infinite resources 无限资源', 'infinite possibility 无限可能']),
      createWord('finance', '/ˈfaɪnæns/', 'n./v.', '金融/资助', 'fin结束 + -ance名词 → 最终的支付 → 金融', 'fin', '/fɪn/', '结束/界限', ['final decision 最终决定', 'define as 定义为', 'infinite resources 无限资源', 'finance minister 财政部长'], ['finance minister 财政部长', 'personal finance 个人理财'])
    ],
    phrases: ['final decision 最终决定', 'define as 定义为', 'infinite resources 无限资源', 'finance minister 财政部长'],
    mnemonic: 'fin（结束）→ 到达终点 → 结束/界限'
  },
  {
    id: 11045, root: 'just', phonetic: '/dʒʌst/', partOfSpeech: 'adj./adv.', meaning: '公正/正确', frequency: 95,
    words: [
      createWord('justice', '/ˈdʒʌstɪs/', 'n.', '正义/公正', 'just公正 + -ice名词 → 公正的状态 → 正义', 'just', '/dʒʌst/', '公正/正确', ['social justice 社会正义', 'justify actions 为...辩护', 'adjust to 适应', 'unjust treatment 不公正待遇'], ['social justice 社会正义', 'do justice 公平对待']),
      createWord('justify', '/ˈdʒʌstɪfaɪ/', 'v.', '证明...正当', 'just正确 + -ify动词 → 使正确 → 证明...正当', 'just', '/dʒʌst/', '公正/正确', ['social justice 社会正义', 'justify actions 为...辩护', 'adjust to 适应', 'unjust treatment 不公正待遇'], ['justify actions 为...辩护', 'justify doing 证明做...正当']),
      createWord('adjust', '/əˈdʒʌst/', 'v.', '调整', 'ad(to) + just正确 → 使正确 → 调整', 'just', '/dʒʌst/', '公正/正确', ['social justice 社会正义', 'justify actions 为...辩护', 'adjust to 适应', 'unjust treatment 不公正待遇'], ['adjust to 适应', 'adjust the settings 调整设置']),
      createWord('unjust', '/ʌnˈdʒʌst/', 'adj.', '不公正的', 'un不 + just公正 → 不公正的', 'just', '/dʒʌst/', '公正/正确', ['social justice 社会正义', 'justify actions 为...辩护', 'adjust to 适应', 'unjust treatment 不公正待遇'], ['unjust treatment 不公正待遇', 'unjust law 不公正法律'])
    ],
    phrases: ['social justice 社会正义', 'justify actions 为...辩护', 'adjust to 适应', 'unjust treatment 不公正待遇'],
    mnemonic: 'just（公正）→ 正直无私 → 公正/正确'
  },
  {
    id: 11046, root: 'loc', phonetic: '/ləʊk/', partOfSpeech: 'n.', meaning: '地方', frequency: 96,
    words: [
      createWord('local', '/ˈləʊkl/', 'adj./n.', '当地的', 'loc地方 + -al形容词 → 地方的 → 当地的', 'loc', '/ləʊk/', '地方', ['local government 地方政府', 'locate in 位于', 'allocate resources 分配资源', 'location of ...的位置'], ['local government 地方政府', 'local people 当地人']),
      createWord('locate', '/ləʊˈkeɪt/', 'v.', '定位/位于', 'loc地方 + -ate动词 → 找到地方 → 定位', 'loc', '/ləʊk/', '地方', ['local government 地方政府', 'locate in 位于', 'allocate resources 分配资源', 'location of ...的位置'], ['locate in 位于', 'locate the problem 找到问题']),
      createWord('allocate', '/ˈæləkeɪt/', 'v.', '分配', 'al(to) + loc地方 + -ate动词 → 放到地方 → 分配', 'loc', '/ləʊk/', '地方', ['local government 地方政府', 'locate in 位于', 'allocate resources 分配资源', 'location of ...的位置'], ['allocate resources 分配资源', 'allocate funds 分配资金']),
      createWord('location', '/ləʊˈkeɪʃn/', 'n.', '位置', 'loc地方 + -ation名词 → 地方的状态 → 位置', 'loc', '/ləʊk/', '地方', ['local government 地方政府', 'locate in 位于', 'allocate resources 分配资源', 'location of ...的位置'], ['location of ...的位置', 'prime location 黄金位置'])
    ],
    phrases: ['local government 地方政府', 'locate in 位于', 'allocate resources 分配资源', 'location of ...的位置'],
    mnemonic: 'loc（地方）→ 特定位置 → 地方'
  },
  {
    id: 11047, root: 'nov', phonetic: '/nɒv/', partOfSpeech: 'adj.', meaning: '新', frequency: 97,
    words: [
      createWord('novel', '/ˈnɒvl/', 'n./adj.', '小说/新颖的', 'nov新 + -el名词 → 新鲜的事物 → 小说', 'nov', '/nɒv/', '新', ['novel idea 新颖的想法', 'innovate in 在...创新', 'renovate the building 翻新建筑', 'novice at ...的新手'], ['novel idea 新颖的想法', 'best-selling novel 畅销小说']),
      createWord('innovate', '/ˈɪnəveɪt/', 'v.', '创新', 'in里面 + nov新 + -ate动词 → 使内部更新 → 创新', 'nov', '/nɒv/', '新', ['novel idea 新颖的想法', 'innovate in 在...创新', 'renovate the building 翻新建筑', 'novice at ...的新手'], ['innovate in 在...创新', 'innovate technology 创新技术']),
      createWord('renovate', '/ˈrenəveɪt/', 'v.', '翻新', 're再 + nov新 + -ate动词 → 使再新 → 翻新', 'nov', '/nɒv/', '新', ['novel idea 新颖的想法', 'innovate in 在...创新', 'renovate the building 翻新建筑', 'novice at ...的新手'], ['renovate the building 翻新建筑', 'renovate the house 翻新房子']),
      createWord('novice', '/ˈnɒvɪs/', 'n.', '新手', 'nov新 + -ice名词 → 新来的人 → 新手', 'nov', '/nɒv/', '新', ['novel idea 新颖的想法', 'innovate in 在...创新', 'renovate the building 翻新建筑', 'novice at ...的新手'], ['novice at ...的新手', 'complete novice 完全新手'])
    ],
    phrases: ['novel idea 新颖的想法', 'innovate in 在...创新', 'renovate the building 翻新建筑', 'novice at ...的新手'],
    mnemonic: 'nov（新）→ 新鲜事物 → 新'
  },
  {
    id: 11048, root: 'oper', phonetic: '/ɒpər/', partOfSpeech: 'v.', meaning: '工作/操作', frequency: 98,
    words: [
      createWord('operate', '/ˈɒpəreɪt/', 'v.', '操作/运转', 'oper工作 + -ate动词 → 工作 → 操作', 'oper', '/ɒpər/', '工作/操作', ['operate on 对...动手术', 'cooperate with 与...合作', 'operator of ...的操作员', 'operation system 操作系统'], ['operate on 对...动手术', 'operate a machine 操作机器']),
      createWord('cooperate', '/kəʊˈɒpəreɪt/', 'v.', '合作', 'co一起 + oper工作 + -ate动词 → 一起工作 → 合作', 'oper', '/ɒpər/', '工作/操作', ['operate on 对...动手术', 'cooperate with 与...合作', 'operator of ...的操作员', 'operation system 操作系统'], ['cooperate with 与...合作', 'willing to cooperate 愿意合作']),
      createWord('operator', '/ˈɒpəreɪtər/', 'n.', '操作员', 'oper工作 + -ator人 → 工作的人 → 操作员', 'oper', '/ɒpər/', '工作/操作', ['operate on 对...动手术', 'cooperate with 与...合作', 'operator of ...的操作员', 'operation system 操作系统'], ['operator of ...的操作员', 'phone operator 电话接线员']),
      createWord('operation', '/ˌɒpəˈreɪʃn/', 'n.', '操作/手术', 'oper工作 + -ation名词 → 工作的过程 → 操作', 'oper', '/ɒpər/', '工作/操作', ['operate on 对...动手术', 'cooperate with 与...合作', 'operator of ...的操作员', 'operation system 操作系统'], ['operation system 操作系统', 'undergo operation 接受手术'])
    ],
    phrases: ['operate on 对...动手术', 'cooperate with 与...合作', 'operator of ...的操作员', 'operation system 操作系统'],
    mnemonic: 'oper（工作）→ 辛勤劳动 → 工作/操作'
  },
  {
    id: 11049, root: 'pet', phonetic: '/pet/', partOfSpeech: 'v.', meaning: '追求/寻求', frequency: 99,
    words: [
      createWord('compete', '/kəmˈpiːt/', 'v.', '竞争', 'com一起 + pet追求 + e → 一起追求 → 竞争', 'pet', '/pet/', '追求/寻求', ['compete with 与...竞争', 'appetite for 对...的欲望', 'repeat after 跟读', 'competent at 胜任'], ['compete with 与...竞争', 'compete for 争夺']),
      createWord('appetite', '/ˈæpɪtaɪt/', 'n.', '食欲/欲望', 'ap(to) + pet追求 + -ite名词 → 追求的东西 → 食欲', 'pet', '/pet/', '追求/寻求', ['compete with 与...竞争', 'appetite for 对...的欲望', 'repeat after 跟读', 'competent at 胜任'], ['appetite for 对...的欲望', 'lose appetite 没胃口']),
      createWord('repeat', '/rɪˈpiːt/', 'v.', '重复', 're再次 + pet追求 → 再次追求 → 重复', 'pet', '/pet/', '追求/寻求', ['compete with 与...竞争', 'appetite for 对...的欲望', 'repeat after 跟读', 'competent at 胜任'], ['repeat after 跟读', 'repeat the process 重复过程']),
      createWord('competent', '/ˈkɒmpɪtənt/', 'adj.', '有能力的', 'compete竞争 + -ent形容词 → 能竞争的 → 有能力的', 'pet', '/pet/', '追求/寻求', ['compete with 与...竞争', 'appetite for 对...的欲望', 'repeat after 跟读', 'competent at 胜任'], ['competent at 胜任', 'highly competent 非常能干'])
    ],
    phrases: ['compete with 与...竞争', 'appetite for 对...的欲望', 'repeat after 跟读', 'competent at 胜任'],
    mnemonic: 'pet（追求）→ 努力争取 → 追求/寻求'
  },
  {
    id: 11050, root: 'simil', phonetic: '/ˈsɪmɪl/', partOfSpeech: 'adj.', meaning: '相似', frequency: 100,
    words: [
      createWord('similar', '/ˈsɪmɪlər/', 'adj.', '相似的', 'simil相似 + -ar形容词 → 相似的', 'simil', '/ˈsɪmɪl/', '相似', ['similar to 与...相似', 'assimilate into 同化入', 'simulate the process 模拟过程', 'simultaneous events 同时发生的事件'], ['similar to 与...相似', 'very similar 非常相似']),
      createWord('assimilate', '/əˈsɪmɪleɪt/', 'v.', '同化/吸收', 'as(to) + simil相似 + -ate动词 → 使相似 → 同化', 'simil', '/ˈsɪmɪl/', '相似', ['similar to 与...相似', 'assimilate into 同化入', 'simulate the process 模拟过程', 'simultaneous events 同时发生的事件'], ['assimilate into 同化入', 'assimilate knowledge 吸收知识']),
      createWord('simulate', '/ˈsɪmjuleɪt/', 'v.', '模拟', 'simul相似 + -ate动词 → 使相似 → 模拟', 'simil', '/ˈsɪmɪl/', '相似', ['similar to 与...相似', 'assimilate into 同化入', 'simulate the process 模拟过程', 'simultaneous events 同时发生的事件'], ['simulate the process 模拟过程', 'simulate reality 模拟现实']),
      createWord('simultaneous', '/ˌsɪmlˈteɪniəs/', 'adj.', '同时的', 'simul相同 + -taneous形容词 → 在相同时间的 → 同时的', 'simil', '/ˈsɪmɪl/', '相似', ['similar to 与...相似', 'assimilate into 同化入', 'simulate the process 模拟过程', 'simultaneous events 同时发生的事件'], ['simultaneous events 同时发生的事件', 'simultaneous translation 同声传译'])
    ],
    phrases: ['similar to 与...相似', 'assimilate into 同化入', 'simulate the process 模拟过程', 'simultaneous events 同时发生的事件'],
    mnemonic: 'simil（相似）→ 看起来像 → 相似'
  },
  // 11051-11060
  {
    id: 11051, root: 'solv', phonetic: '/sɒlv/', partOfSpeech: 'v.', meaning: '溶解/解决', frequency: 101,
    words: [
      createWord('solve', '/sɒlv/', 'v.', '解决', 'solv溶解 + e → 溶解问题 → 解决', 'solv', '/sɒlv/', '溶解/解决', ['solve the problem 解决问题', 'solution to ...的解决方案', 'resolve to do 决心做', 'absolute power 绝对权力'], ['solve the problem 解决问题', 'solve the puzzle 解开谜题']),
      createWord('solution', '/səˈluːʃn/', 'n.', '解决方案', 'solv解决 + -ution名词 → 解决的结果 → 解决方案', 'solv', '/sɒlv/', '溶解/解决', ['solve the problem 解决问题', 'solution to ...的解决方案', 'resolve to do 决心做', 'absolute power 绝对权力'], ['solution to ...的解决方案', 'find a solution 找到解决方案']),
      createWord('resolve', '/rɪˈzɒlv/', 'v.', '解决/决心', 're再 + solv解决 + e → 再次解决 → 决心', 'solv', '/sɒlv/', '溶解/解决', ['solve the problem 解决问题', 'solution to ...的解决方案', 'resolve to do 决心做', 'absolute power 绝对权力'], ['resolve to do 决心做', 'resolve the conflict 解决冲突']),
      createWord('absolute', '/ˈæbsəluːt/', 'adj.', '绝对的', 'ab离开 + solv溶解 + -ute形容词 → 溶解掉限制的 → 绝对的', 'solv', '/sɒlv/', '溶解/解决', ['solve the problem 解决问题', 'solution to ...的解决方案', 'resolve to do 决心做', 'absolute power 绝对权力'], ['absolute power 绝对权力', 'absolute truth 绝对真理'])
    ],
    phrases: ['solve the problem 解决问题', 'solution to ...的解决方案', 'resolve to do 决心做', 'absolute power 绝对权力'],
    mnemonic: 'solv（溶解）→ 化解问题 → 溶解/解决'
  },
  {
    id: 11052, root: 'terr', phonetic: '/ter/', partOfSpeech: 'n.', meaning: '土地/恐惧', frequency: 102,
    words: [
      createWord('territory', '/ˈterətɔːri/', 'n.', '领土', 'terr土地 + -itory名词 → 土地区域 → 领土', 'terr', '/ter/', '土地/恐惧', ['territory of ...的领土', 'terrible accident 可怕的事故', 'terrify sb 使某人恐惧', 'terrestrial planet 类地行星'], ['territory of ...的领土', 'occupied territory 被占领土']),
      createWord('terrible', '/ˈterəbl/', 'adj.', '可怕的', 'terr恐惧 + -ible形容词 → 令人恐惧的 → 可怕的', 'terr', '/ter/', '土地/恐惧', ['territory of ...的领土', 'terrible accident 可怕的事故', 'terrify sb 使某人恐惧', 'terrestrial planet 类地行星'], ['terrible accident 可怕的事故', 'terrible weather 糟糕的天气']),
      createWord('terrify', '/ˈterɪfaɪ/', 'v.', '使恐惧', 'terr恐惧 + -ify动词 → 使恐惧', 'terr', '/ter/', '土地/恐惧', ['territory of ...的领土', 'terrible accident 可怕的事故', 'terrify sb 使某人恐惧', 'terrestrial planet 类地行星'], ['terrify sb 使某人恐惧', 'be terrified of 对...感到恐惧']),
      createWord('terrestrial', '/təˈrestriəl/', 'adj.', '陆地的', 'terr土地 + -estrial形容词 → 土地的 → 陆地的', 'terr', '/ter/', '土地/恐惧', ['territory of ...的领土', 'terrible accident 可怕的事故', 'terrify sb 使某人恐惧', 'terrestrial planet 类地行星'], ['terrestrial planet 类地行星', 'terrestrial animal 陆生动物'])
    ],
    phrases: ['territory of ...的领土', 'terrible accident 可怕的事故', 'terrify sb 使某人恐惧', 'terrestrial planet 类地行星'],
    mnemonic: 'terr（土地/恐惧）→ 大地之母 → 土地/恐惧'
  },
  {
    id: 11053, root: 'test', phonetic: '/test/', partOfSpeech: 'n./v.', meaning: '测试/证明', frequency: 103,
    words: [
      createWord('test', '/test/', 'n./v.', '测试', 'test本身是词根，表示测试/证明', 'test', '/test/', '测试/证明', ['take a test 参加测试', 'testify in court 在法庭作证', 'contest the result 质疑结果', 'protest against 抗议'], ['take a test 参加测试', 'test result 测试结果']),
      createWord('testify', '/ˈtestɪfaɪ/', 'v.', '作证', 'test证明 + -ify动词 → 去证明 → 作证', 'test', '/test/', '测试/证明', ['take a test 参加测试', 'testify in court 在法庭作证', 'contest the result 质疑结果', 'protest against 抗议'], ['testify in court 在法庭作证', 'testify against 作证反对']),
      createWord('contest', '/kənˈtest/', 'v./n.', '质疑/比赛', 'con一起 + test证明 → 一起证明 → 比赛', 'test', '/test/', '测试/证明', ['take a test 参加测试', 'testify in court 在法庭作证', 'contest the result 质疑结果', 'protest against 抗议'], ['contest the result 质疑结果', 'speech contest 演讲比赛']),
      createWord('protest', '/prəˈtest/', 'v./n.', '抗议', 'pro向前 + test证明 → 向前证明 → 抗议', 'test', '/test/', '测试/证明', ['take a test 参加测试', 'testify in court 在法庭作证', 'contest the result 质疑结果', 'protest against 抗议'], ['protest against 抗议', 'mass protest 大规模抗议'])
    ],
    phrases: ['take a test 参加测试', 'testify in court 在法庭作证', 'contest the result 质疑结果', 'protest against 抗议'],
    mnemonic: 'test（测试）→ 检验证明 → 测试/证明'
  },
  {
    id: 11054, root: 'text', phonetic: '/tekst/', partOfSpeech: 'n.', meaning: '编织/文本', frequency: 104,
    words: [
      createWord('text', '/tekst/', 'n.', '文本', 'text本身是词根，表示编织/文本', 'text', '/tekst/', '编织/文本', ['text message 短信', 'context of ...的语境', 'textile industry 纺织业', 'texture of ...的质地'], ['text message 短信', 'full text 全文']),
      createWord('context', '/ˈkɒntekst/', 'n.', '语境', 'con一起 + text编织 → 编织在一起 → 语境', 'text', '/tekst/', '编织/文本', ['text message 短信', 'context of ...的语境', 'textile industry 纺织业', 'texture of ...的质地'], ['context of ...的语境', 'in context 在语境中']),
      createWord('textile', '/ˈtekstaɪl/', 'n./adj.', '纺织品', 'text编织 + -ile名词 → 编织的东西 → 纺织品', 'text', '/tekst/', '编织/文本', ['text message 短信', 'context of ...的语境', 'textile industry 纺织业', 'texture of ...的质地'], ['textile industry 纺织业', 'textile products 纺织产品']),
      createWord('texture', '/ˈtekstʃər/', 'n.', '质地', 'text编织 + -ure名词 → 编织的结构 → 质地', 'text', '/tekst/', '编织/文本', ['text message 短信', 'context of ...的语境', 'textile industry 纺织业', 'texture of ...的质地'], ['texture of ...的质地', 'smooth texture 光滑质地'])
    ],
    phrases: ['text message 短信', 'context of ...的语境', 'textile industry 纺织业', 'texture of ...的质地'],
    mnemonic: 'text（编织）→ 编织文字 → 编织/文本'
  },
  {
    id: 11055, root: 'tribut', phonetic: '/trɪbjuːt/', partOfSpeech: 'v.', meaning: '给予/分配', frequency: 105,
    words: [
      createWord('tribute', '/ˈtrɪbjuːt/', 'n.', '致敬/贡品', 'tribut给予 + e → 给予的东西 → 致敬', 'tribut', '/trɪbjuːt/', '给予/分配', ['pay tribute to 向...致敬', 'contribute to 对...做出贡献', 'distribute among 在...中分配', 'attribute to 归因于'], ['pay tribute to 向...致敬', 'silent tribute 默哀致敬']),
      createWord('contribute', '/kənˈtrɪbjuːt/', 'v.', '贡献', 'con一起 + tribut给予 + e → 一起给予 → 贡献', 'tribut', '/trɪbjuːt/', '给予/分配', ['pay tribute to 向...致敬', 'contribute to 对...做出贡献', 'distribute among 在...中分配', 'attribute to 归因于'], ['contribute to 对...做出贡献', 'contribute money 捐款']),
      createWord('distribute', '/dɪˈstrɪbjuːt/', 'v.', '分配', 'dis分开 + tribut给予 + e → 分开给 → 分配', 'tribut', '/trɪbjuːt/', '给予/分配', ['pay tribute to 向...致敬', 'contribute to 对...做出贡献', 'distribute among 在...中分配', 'attribute to 归因于'], ['distribute among 在...中分配', 'distribute resources 分配资源']),
      createWord('attribute', '/əˈtrɪbjuːt/', 'v.', '归因于', 'at(to) + tribut给予 + e → 给予原因 → 归因于', 'tribut', '/trɪbjuːt/', '给予/分配', ['pay tribute to 向...致敬', 'contribute to 对...做出贡献', 'distribute among 在...中分配', 'attribute to 归因于'], ['attribute to 归因于', 'attribute success to 把成功归因于'])
    ],
    phrases: ['pay tribute to 向...致敬', 'contribute to 对...做出贡献', 'distribute among 在...中分配', 'attribute to 归因于'],
    mnemonic: 'tribut（给予）→ 分发赠予 → 给予/分配'
  },
  {
    id: 11056, root: 'urb', phonetic: '/ɜːrb/', partOfSpeech: 'n.', meaning: '城市', frequency: 106,
    words: [
      createWord('urban', '/ˈɜːrbən/', 'adj.', '城市的', 'urb城市 + -an形容词 → 城市的', 'urb', '/ɜːrb/', '城市', ['urban area 城市地区', 'suburban life 郊区生活', 'urbanization process 城市化进程', 'suburb of ...的郊区'], ['urban area 城市地区', 'urban development 城市发展']),
      createWord('suburb', '/ˈsʌbɜːrb/', 'n.', '郊区', 'sub下面 + urb城市 → 城市下面 → 郊区', 'urb', '/ɜːrb/', '城市', ['urban area 城市地区', 'suburban life 郊区生活', 'urbanization process 城市化进程', 'suburb of ...的郊区'], ['suburb of ...的郊区', 'live in the suburbs 住在郊区']),
      createWord('suburban', '/səˈbɜːrbən/', 'adj.', '郊区的', 'suburb郊区 + -an形容词 → 郊区的', 'urb', '/ɜːrb/', '城市', ['urban area 城市地区', 'suburban life 郊区生活', 'urbanization process 城市化进程', 'suburb of ...的郊区'], ['suburban life 郊区生活', 'suburban area 郊区']),
      createWord('urbanization', '/ˌɜːrbənaɪˈzeɪʃn/', 'n.', '城市化', 'urban城市 + -ization名词 → 变成城市的过程 → 城市化', 'urb', '/ɜːrb/', '城市', ['urban area 城市地区', 'suburban life 郊区生活', 'urbanization process 城市化进程', 'suburb of ...的郊区'], ['urbanization process 城市化进程', 'rapid urbanization 快速城市化'])
    ],
    phrases: ['urban area 城市地区', 'suburban life 郊区生活', 'urbanization process 城市化进程', 'suburb of ...的郊区'],
    mnemonic: 'urb（城市）→ 繁华都市 → 城市'
  },
  {
    id: 11057, root: 'vac', phonetic: '/væk/', partOfSpeech: 'adj.', meaning: '空', frequency: 107,
    words: [
      createWord('vacant', '/ˈveɪkənt/', 'adj.', '空的/空缺的', 'vac空 + -ant形容词 → 空的', 'vac', '/væk/', '空', ['vacant position 空缺职位', 'vacation plans 假期计划', 'vacuum cleaner 吸尘器', 'evacuate from 从...撤离'], ['vacant position 空缺职位', 'vacant seat 空座位']),
      createWord('vacation', '/veɪˈkeɪʃn/', 'n.', '假期', 'vac空 + -ation名词 → 空闲时间 → 假期', 'vac', '/væk/', '空', ['vacant position 空缺职位', 'vacation plans 假期计划', 'vacuum cleaner 吸尘器', 'evacuate from 从...撤离'], ['vacation plans 假期计划', 'on vacation 在度假']),
      createWord('vacuum', '/ˈvækjuəm/', 'n.', '真空', 'vac空 + -uum名词 → 空的状态 → 真空', 'vac', '/væk/', '空', ['vacant position 空缺职位', 'vacation plans 假期计划', 'vacuum cleaner 吸尘器', 'evacuate from 从...撤离'], ['vacuum cleaner 吸尘器', 'in a vacuum 在真空中']),
      createWord('evacuate', '/ɪˈvækjueɪt/', 'v.', '撤离', 'e(out) + vac空 + -uate动词 → 使变空 → 撤离', 'vac', '/væk/', '空', ['vacant position 空缺职位', 'vacation plans 假期计划', 'vacuum cleaner 吸尘器', 'evacuate from 从...撤离'], ['evacuate from 从...撤离', 'evacuate the building 撤离大楼'])
    ],
    phrases: ['vacant position 空缺职位', 'vacation plans 假期计划', 'vacuum cleaner 吸尘器', 'evacuate from 从...撤离'],
    mnemonic: 'vac（空）→ 一无所有 → 空'
  },
  {
    id: 11058, root: 'vis', phonetic: '/vɪs/', partOfSpeech: 'v.', meaning: '看', frequency: 108,
    words: [
      createWord('vision', '/ˈvɪʒn/', 'n.', '视力/愿景', 'vis看 + -ion名词 → 看的能力 → 视力', 'vis', '/vɪs/', '看', ['vision for ...的愿景', 'visit to 访问', 'visual aids 视觉辅助', 'visible to 对...可见'], ['vision for ...的愿景', 'clear vision 清晰愿景']),
      createWord('visit', '/ˈvɪzɪt/', 'v./n.', '访问', 'vis看 + -it动词 → 去看 → 访问', 'vis', '/vɪs/', '看', ['vision for ...的愿景', 'visit to 访问', 'visual aids 视觉辅助', 'visible to 对...可见'], ['visit to 访问', 'pay a visit 参观']),
      createWord('visual', '/ˈvɪʒuəl/', 'adj.', '视觉的', 'vis看 + -ual形容词 → 看的 → 视觉的', 'vis', '/vɪs/', '看', ['vision for ...的愿景', 'visit to 访问', 'visual aids 视觉辅助', 'visible to 对...可见'], ['visual aids 视觉辅助', 'visual effect 视觉效果']),
      createWord('visible', '/ˈvɪzəbl/', 'adj.', '可见的', 'vis看 + -ible形容词 → 能看见的 → 可见的', 'vis', '/vɪs/', '看', ['vision for ...的愿景', 'visit to 访问', 'visual aids 视觉辅助', 'visible to 对...可见'], ['visible to 对...可见', 'clearly visible 清晰可见'])
    ],
    phrases: ['vision for ...的愿景', 'visit to 访问', 'visual aids 视觉辅助', 'visible to 对...可见'],
    mnemonic: 'vis（看）→ 目光所及 → 看'
  },
  {
    id: 11059, root: 'vit', phonetic: '/vɪt/', partOfSpeech: 'n.', meaning: '生命', frequency: 109,
    words: [
      createWord('vital', '/ˈvaɪtl/', 'adj.', '至关重要的', 'vit生命 + -al形容词 → 与生命有关的 → 至关重要的', 'vit', '/vɪt/', '生命', ['vital role 关键作用', 'vitamin supplement 维生素补充剂', 'vitality of ...的活力', 'revitalize the economy 振兴经济'], ['vital role 关键作用', 'vital importance 至关重要']),
      createWord('vitamin', '/ˈvɪtəmɪn/', 'n.', '维生素', 'vit生命 + amin胺 → 维持生命的物质 → 维生素', 'vit', '/vɪt/', '生命', ['vital role 关键作用', 'vitamin supplement 维生素补充剂', 'vitality of ...的活力', 'revitalize the economy 振兴经济'], ['vitamin supplement 维生素补充剂', 'take vitamins 服用维生素']),
      createWord('vitality', '/vaɪˈtæləti/', 'n.', '活力', 'vit生命 + -ality名词 → 生命的状态 → 活力', 'vit', '/vɪt/', '生命', ['vital role 关键作用', 'vitamin supplement 维生素补充剂', 'vitality of ...的活力', 'revitalize the economy 振兴经济'], ['vitality of ...的活力', 'full of vitality 充满活力']),
      createWord('revitalize', '/riːˈvaɪtəlaɪz/', 'v.', '振兴', 're再 + vit生命 + -alize动词 → 使再有生命 → 振兴', 'vit', '/vɪt/', '生命', ['vital role 关键作用', 'vitamin supplement 维生素补充剂', 'vitality of ...的活力', 'revitalize the economy 振兴经济'], ['revitalize the economy 振兴经济', 'revitalize the area 振兴该地区'])
    ],
    phrases: ['vital role 关键作用', 'vitamin supplement 维生素补充剂', 'vitality of ...的活力', 'revitalize the economy 振兴经济'],
    mnemonic: 'vit（生命）→ 生命之源 → 生命'
  },
  {
    id: 11060, root: 'viv', phonetic: '/vɪv/', partOfSpeech: 'v.', meaning: '活', frequency: 110,
    words: [
      createWord('survive', '/sərˈvaɪv/', 'v.', '生存', 'sur上面 + viv活 + e → 在上面活下来 → 生存', 'viv', '/vɪv/', '活', ['survive in 在...中生存', 'revive the economy 复苏经济', 'vivid description 生动的描述', 'survivor of ...的幸存者'], ['survive in 在...中生存', 'survive the disaster 幸存于灾难']),
      createWord('revive', '/rɪˈvaɪv/', 'v.', '复苏', 're再 + viv活 + e → 再活过来 → 复苏', 'viv', '/vɪv/', '活', ['survive in 在...中生存', 'revive the economy 复苏经济', 'vivid description 生动的描述', 'survivor of ...的幸存者'], ['revive the economy 复苏经济', 'revive memories 唤起回忆']),
      createWord('vivid', '/ˈvɪvɪd/', 'adj.', '生动的', 'viv活 + -id形容词 → 有活力的 → 生动的', 'viv', '/vɪv/', '活', ['survive in 在...中生存', 'revive the economy 复苏经济', 'vivid description 生动的描述', 'survivor of ...的幸存者'], ['vivid description 生动的描述', 'vivid memory 清晰的记忆']),
      createWord('survivor', '/sərˈvaɪvər/', 'n.', '幸存者', 'survive生存 + -or人 → 生存的人 → 幸存者', 'viv', '/vɪv/', '活', ['survive in 在...中生存', 'revive the economy 复苏经济', 'vivid description 生动的描述', 'survivor of ...的幸存者'], ['survivor of ...的幸存者', 'sole survivor 唯一幸存者'])
    ],
    phrases: ['survive in 在...中生存', 'revive the economy 复苏经济', 'vivid description 生动的描述', 'survivor of ...的幸存者'],
    mnemonic: 'viv（活）→ 生命力旺盛 → 活'
  }
];

// 读取现有文件
const filePath = 'f:/claudeanli/beidanci3/src/data/cet-4.json';
let content = fs.readFileSync(filePath, 'utf-8');
content = content.trim();

// 移除最后的 ]
if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

// 添加新数据
const newContent = rootsData.map(r => JSON.stringify(r, null, 2)).join(',\n');
content += ',\n' + newContent + '\n]';

// 写回文件
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added ' + rootsData.length + ' roots (11043-11060)');
