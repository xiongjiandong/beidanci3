const fs = require('fs');

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

const rootsData = [
  // 11121-11140
  {
    id: 11121, root: 'micro', phonetic: '/maɪkrəʊ/', partOfSpeech: 'adj.', meaning: '微小', frequency: 171,
    words: [
      createWord('microphone', '/ˈmaɪkrəfəʊn/', 'n.', '麦克风', 'micro微小 + phon声音 + e → 放大微弱声音 → 麦克风', 'micro', '/maɪkrəʊ/', '微小', ['microphone test 麦克风测试', 'microscope image 显微镜图像', 'microorganism study 微生物研究', 'microwave oven 微波炉'], ['microphone test 麦克风测试', 'wireless microphone 无线麦克风']),
      createWord('microscope', '/ˈmaɪkrəskəʊp/', 'n.', '显微镜', 'micro微小 + scop观察 + e → 观察微小物体 → 显微镜', 'micro', '/maɪkrəʊ/', '微小', ['microphone test 麦克风测试', 'microscope image 显微镜图像', 'microorganism study 微生物研究', 'microwave oven 微波炉'], ['microscope image 显微镜图像', 'electron microscope 电子显微镜']),
      createWord('microorganism', '/ˌmaɪkrəʊˈɔːrɡənɪzəm/', 'n.', '微生物', 'micro微小 + organism生物 → 微小的生物 → 微生物', 'micro', '/maɪkrəʊ/', '微小', ['microphone test 麦克风测试', 'microscope image 显微镜图像', 'microorganism study 微生物研究', 'microwave oven 微波炉'], ['microorganism study 微生物研究', 'beneficial microorganism 有益微生物']),
      createWord('microwave', '/ˈmaɪkrəweɪv/', 'n.', '微波', 'micro微小 + wave波 → 微小的波 → 微波', 'micro', '/maɪkrəʊ/', '微小', ['microphone test 麦克风测试', 'microscope image 显微镜图像', 'microorganism study 微生物研究', 'microwave oven 微波炉'], ['microwave oven 微波炉', 'heat in microwave 在微波炉中加热'])
    ],
    phrases: ['microphone test 麦克风测试', 'microscope image 显微镜图像', 'microorganism study 微生物研究', 'microwave oven 微波炉'],
    mnemonic: 'micro（微小）→ 微观世界 → 微小'
  },
  {
    id: 11122, root: 'mis', phonetic: '/mɪs/', partOfSpeech: 'adv.', meaning: '错误', frequency: 172,
    words: [
      createWord('mistake', '/mɪˈsteɪk/', 'n./v.', '错误/弄错', 'mis错误 + take拿 → 错误地拿 → 错误', 'mis', '/mɪs/', '错误', ['make a mistake 犯错误', 'misunderstand the meaning 误解意思', 'mislead the public 误导公众', 'misfortune strikes 不幸降临'], ['make a mistake 犯错误', 'by mistake 错误地']),
      createWord('misunderstand', '/ˌmɪsʌndərˈstænd/', 'v.', '误解', 'mis错误 + understand理解 → 错误地理解 → 误解', 'mis', '/mɪs/', '错误', ['make a mistake 犯错误', 'misunderstand the meaning 误解意思', 'mislead the public 误导公众', 'misfortune strikes 不幸降临'], ['misunderstand the meaning 误解意思', 'completely misunderstand 完全误解']),
      createWord('mislead', '/mɪsˈliːd/', 'v.', '误导', 'mis错误 + lead引导 → 错误地引导 → 误导', 'mis', '/mɪs/', '错误', ['make a mistake 犯错误', 'misunderstand the meaning 误解意思', 'mislead the public 误导公众', 'misfortune strikes 不幸降临'], ['mislead the public 误导公众', 'intentionally mislead 故意误导']),
      createWord('misfortune', '/mɪsˈfɔːrtʃuːn/', 'n.', '不幸', 'mis错误 + fortune运气 → 错误的运气 → 不幸', 'mis', '/mɪs/', '错误', ['make a mistake 犯错误', 'misunderstand the meaning 误解意思', 'mislead the public 误导公众', 'misfortune strikes 不幸降临'], ['misfortune strikes 不幸降临', 'suffer misfortune 遭受不幸'])
    ],
    phrases: ['make a mistake 犯错误', 'misunderstand the meaning 误解意思', 'mislead the public 误导公众', 'misfortune strikes 不幸降临'],
    mnemonic: 'mis（错误）→ 错误行为 → 错误'
  },
  {
    id: 11123, root: 'mono', phonetic: '/mɒnəʊ/', partOfSpeech: 'adj.', meaning: '单一', frequency: 173,
    words: [
      createWord('monopoly', '/məˈnɒpəli/', 'n.', '垄断', 'mono单一 + poly卖 → 独家销售 → 垄断', 'mono', '/mɒnəʊ/', '单一', ['monopoly power 垄断力量', 'monotonous voice 单调的声音', 'monogamous relationship 一夫一妻关系', 'monologue performance 独白表演'], ['monopoly power 垄断力量', 'break monopoly 打破垄断']),
      createWord('monotonous', '/məˈnɒtənəs/', 'adj.', '单调的', 'mono单一 + ton声音 + -ous形容词 → 单一声音的 → 单调的', 'mono', '/mɒnəʊ/', '单一', ['monopoly power 垄断力量', 'monotonous voice 单调的声音', 'monogamous relationship 一夫一妻关系', 'monologue performance 独白表演'], ['monotonous voice 单调的声音', 'become monotonous 变得单调']),
      createWord('monogamous', '/məˈnɒɡəməs/', 'adj.', '一夫一妻的', 'mono单一 + gam婚姻 + -ous形容词 → 单一婚姻的 → 一夫一妻的', 'mono', '/mɒnəʊ/', '单一', ['monopoly power 垄断力量', 'monotonous voice 单调的声音', 'monogamous relationship 一夫一妻关系', 'monologue performance 独白表演'], ['monogamous relationship 一夫一妻关系', 'strictly monogamous 严格一夫一妻']),
      createWord('monologue', '/ˈmɒnəlɒɡ/', 'n.', '独白', 'mono单一 + logue说话 → 一个人说话 → 独白', 'mono', '/mɒnəʊ/', '单一', ['monopoly power 垄断力量', 'monotonous voice 单调的声音', 'monogamous relationship 一夫一妻关系', 'monologue performance 独白表演'], ['monologue performance 独白表演', 'deliver a monologue 发表独白'])
    ],
    phrases: ['monopoly power 垄断力量', 'monotonous voice 单调的声音', 'monogamous relationship 一夫一妻关系', 'monologue performance 独白表演'],
    mnemonic: 'mono（单一）→ 独一无二 → 单一'
  },
  {
    id: 11124, root: 'multi', phonetic: '/mʌlti/', partOfSpeech: 'adj.', meaning: '多', frequency: 174,
    words: [
      createWord('multiple', '/ˈmʌltɪpl/', 'adj./n.', '多个的/倍数', 'multi多 + -ple形容词 → 多的 → 多个的', 'multi', '/mʌlti/', '多', ['multiple choice 多选题', 'multinational company 跨国公司', 'multicultural society 多元文化社会', 'multimedia presentation 多媒体演示'], ['multiple choice 多选题', 'multiple times 多次']),
      createWord('multinational', '/ˌmʌltiˈnæʃnəl/', 'adj.', '跨国的', 'multi多 + nation国家 + -al形容词 → 多个国家的 → 跨国的', 'multi', '/mʌlti/', '多', ['multiple choice 多选题', 'multinational company 跨国公司', 'multicultural society 多元文化社会', 'multimedia presentation 多媒体演示'], ['multinational company 跨国公司', 'work for a multinational 为跨国公司工作']),
      createWord('multicultural', '/ˌmʌltiˈkʌltʃərəl/', 'adj.', '多元文化的', 'multi多 + cultural文化的 → 多种文化的 → 多元文化的', 'multi', '/mʌlti/', '多', ['multiple choice 多选题', 'multinational company 跨国公司', 'multicultural society 多元文化社会', 'multimedia presentation 多媒体演示'], ['multicultural society 多元文化社会', 'multicultural education 多元文化教育']),
      createWord('multimedia', '/ˌmʌltiˈmiːdiə/', 'n./adj.', '多媒体', 'multi多 + media媒体 → 多种媒体 → 多媒体', 'multi', '/mʌlti/', '多', ['multiple choice 多选题', 'multinational company 跨国公司', 'multicultural society 多元文化社会', 'multimedia presentation 多媒体演示'], ['multimedia presentation 多媒体演示', 'use multimedia 使用多媒体'])
    ],
    phrases: ['multiple choice 多选题', 'multinational company 跨国公司', 'multicultural society 多元文化社会', 'multimedia presentation 多媒体演示'],
    mnemonic: 'multi（多）→ 丰富多彩 → 多'
  },
  {
    id: 11125, root: 'neo', phonetic: '/niːəʊ/', partOfSpeech: 'adj.', meaning: '新', frequency: 175,
    words: [
      createWord('neon', '/ˈniːɒn/', 'n.', '霓虹灯', 'neo新 + on元素 → 新发现的元素 → 霓虹', 'neo', '/niːəʊ/', '新', ['neon light 霓虹灯', 'neoclassical architecture 新古典主义建筑', 'neologism list 新词列表', 'neolithic period 新石器时代'], ['neon light 霓虹灯', 'neon sign 霓虹招牌']),
      createWord('neoclassical', '/ˌniːəʊˈklæsɪkl/', 'adj.', '新古典主义的', 'neo新 + classical古典的 → 新的古典 → 新古典主义的', 'neo', '/niːəʊ/', '新', ['neon light 霓虹灯', 'neoclassical architecture 新古典主义建筑', 'neologism list 新词列表', 'neolithic period 新石器时代'], ['neoclassical architecture 新古典主义建筑', 'neoclassical style 新古典主义风格']),
      createWord('neologism', '/niːˈɒlədʒɪzəm/', 'n.', '新词', 'neo新 + log词语 + -ism名词 → 新的词语 → 新词', 'neo', '/niːəʊ/', '新', ['neon light 霓虹灯', 'neoclassical architecture 新古典主义建筑', 'neologism list 新词列表', 'neolithic period 新石器时代'], ['neologism list 新词列表', 'create a neologism 创造新词']),
      createWord('neolithic', '/ˌniːəʊˈlɪθɪk/', 'adj.', '新石器时代的', 'neo新 + lith石头 + -ic形容词 → 新石头的 → 新石器时代的', 'neo', '/niːəʊ/', '新', ['neon light 霓虹灯', 'neoclassical architecture 新古典主义建筑', 'neologism list 新词列表', 'neolithic period 新石器时代'], ['neolithic period 新石器时代', 'neolithic revolution 新石器革命'])
    ],
    phrases: ['neon light 霓虹灯', 'neoclassical architecture 新古典主义建筑', 'neologism list 新词列表', 'neolithic period 新石器时代'],
    mnemonic: 'neo（新）→ 推陈出新 → 新'
  },
  {
    id: 11126, root: 'non', phonetic: '/nɒn/', partOfSpeech: 'adv.', meaning: '不/非', frequency: 176,
    words: [
      createWord('nonstop', '/nɒnˈstɒp/', 'adj./adv.', '不停的', 'non不 + stop停 → 不停 → 不停的', 'non', '/nɒn/', '不/非', ['nonstop flight 直飞航班', 'nonexistent thing 不存在的事物', 'nonprofit organization 非营利组织', 'nonsense talk 胡说八道'], ['nonstop flight 直飞航班', 'nonstop service 直达服务']),
      createWord('nonexistent', '/ˌnɒnɪɡˈzɪstənt/', 'adj.', '不存在的', 'non不 + existent存在的 → 不存在的', 'non', '/nɒn/', '不/非', ['nonstop flight 直飞航班', 'nonexistent thing 不存在的事物', 'nonprofit organization 非营利组织', 'nonsense talk 胡说八道'], ['nonexistent thing 不存在的事物', 'virtually nonexistent 几乎不存在']),
      createWord('nonprofit', '/nɒnˈprɒfɪt/', 'adj.', '非营利的', 'non非 + profit利润 → 不求利润 → 非营利的', 'non', '/nɒn/', '不/非', ['nonstop flight 直飞航班', 'nonexistent thing 不存在的事物', 'nonprofit organization 非营利组织', 'nonsense talk 胡说八道'], ['nonprofit organization 非营利组织', 'work for nonprofit 为非营利组织工作']),
      createWord('nonsense', '/ˈnɒnsns/', 'n.', '胡说', 'non不 + sense意义 → 没有意义的 → 胡说', 'non', '/nɒn/', '不/非', ['nonstop flight 直飞航班', 'nonexistent thing 不存在的事物', 'nonprofit organization 非营利组织', 'nonsense talk 胡说八道'], ['nonsense talk 胡说八道', 'make no sense 毫无意义'])
    ],
    phrases: ['nonstop flight 直飞航班', 'nonexistent thing 不存在的事物', 'nonprofit organization 非营利组织', 'nonsense talk 胡说八道'],
    mnemonic: 'non（不）→ 否定拒绝 → 不/非'
  },
  {
    id: 11127, root: 'pan', phonetic: '/pæn/', partOfSpeech: 'adj.', meaning: '全/泛', frequency: 177,
    words: [
      createWord('panorama', '/ˌpænəˈrɑːmə/', 'n.', '全景', 'pan全 + orama看 → 全部看到 → 全景', 'pan', '/pæn/', '全/泛', ['panorama view 全景视野', 'pandemic crisis 全球疫情危机', 'pantheon of ...的神殿', 'panacea for ...的万灵药'], ['panorama view 全景视野', 'enjoy the panorama 欣赏全景']),
      createWord('pandemic', '/pænˈdemɪk/', 'n./adj.', '全球流行病', 'pan全 + dem人民 + -ic形容词 → 全体人民的 → 全球流行病', 'pan', '/pæn/', '全/泛', ['panorama view 全景视野', 'pandemic crisis 全球疫情危机', 'pantheon of ...的神殿', 'panacea for ...的万灵药'], ['pandemic crisis 全球疫情危机', 'COVID-19 pandemic 新冠疫情']),
      createWord('pantheon', '/ˈpænθiən/', 'n.', '万神殿', 'pan全 + the神 + on场所 → 所有神的场所 → 万神殿', 'pan', '/pæn/', '全/泛', ['panorama view 全景视野', 'pandemic crisis 全球疫情危机', 'pantheon of ...的神殿', 'panacea for ...的万灵药'], ['pantheon of ...的神殿', 'Roman Pantheon 罗马万神殿']),
      createWord('panacea', '/ˌpænəˈsiːə/', 'n.', '万灵药', 'pan全 + acea治疗 → 治疗全部 → 万灵药', 'pan', '/pæn/', '全/泛', ['panorama view 全景视野', 'pandemic crisis 全球疫情危机', 'pantheon of ...的神殿', 'panacea for ...的万灵药'], ['panacea for ...的万灵药', 'no panacea 没有万灵药'])
    ],
    phrases: ['panorama view 全景视野', 'pandemic crisis 全球疫情危机', 'pantheon of ...的神殿', 'panacea for ...的万灵药'],
    mnemonic: 'pan（全）→ 无所不包 → 全/泛'
  },
  {
    id: 11128, root: 'poly', phonetic: '/pɒli/', partOfSpeech: 'adj.', meaning: '多', frequency: 178,
    words: [
      createWord('polygon', '/ˈpɒlɪɡɒn/', 'n.', '多边形', 'poly多 + gon角 → 多个角 → 多边形', 'poly', '/pɒli/', '多', ['regular polygon 正多边形', 'polysyllabic word 多音节词', 'polygamous society 多配偶社会', 'polynomial function 多项式函数'], ['regular polygon 正多边形', 'draw a polygon 画多边形']),
      createWord('polysyllabic', '/ˌpɒlɪsɪˈlæbɪk/', 'adj.', '多音节的', 'poly多 + syllable音节 + -ic形容词 → 多个音节的 → 多音节的', 'poly', '/pɒli/', '多', ['regular polygon 正多边形', 'polysyllabic word 多音节词', 'polygamous society 多配偶社会', 'polynomial function 多项式函数'], ['polysyllabic word 多音节词', 'polysyllabic adjective 多音节形容词']),
      createWord('polygamous', '/pəˈlɪɡəməs/', 'adj.', '多配偶的', 'poly多 + gam婚姻 + -ous形容词 → 多次婚姻的 → 多配偶的', 'poly', '/pɒli/', '多', ['regular polygon 正多边形', 'polysyllabic word 多音节词', 'polygamous society 多配偶社会', 'polynomial function 多项式函数'], ['polygamous society 多配偶社会', 'polygamous marriage 多配偶婚姻']),
      createWord('polynomial', '/ˌpɒlɪˈnəʊmiəl/', 'n./adj.', '多项式', 'poly多 + nom名称 + -ial名词/形容词 → 多个名称 → 多项式', 'poly', '/pɒli/', '多', ['regular polygon 正多边形', 'polysyllabic word 多音节词', 'polygamous society 多配偶社会', 'polynomial function 多项式函数'], ['polynomial function 多项式函数', 'solve polynomial 解多项式'])
    ],
    phrases: ['regular polygon 正多边形', 'polysyllabic word 多音节词', 'polygamous society 多配偶社会', 'polynomial function 多项式函数'],
    mnemonic: 'poly（多）→ 多样丰富 → 多'
  },
  {
    id: 11129, root: 'post', phonetic: '/pəʊst/', partOfSpeech: 'adv.', meaning: '后', frequency: 179,
    words: [
      createWord('postpone', '/pəʊstˈpəʊn/', 'v.', '推迟', 'post后 + pon放置 → 放在后面 → 推迟', 'post', '/pəʊst/', '后', ['postpone the meeting 推迟会议', 'postwar period 战后时期', 'postgraduate study 研究生学习', 'postscript note 附言'], ['postpone the meeting 推迟会议', 'postpone until 推迟到']),
      createWord('postwar', '/ˌpəʊstˈwɔːr/', 'adj.', '战后的', 'post后 + war战争 → 战争之后 → 战后的', 'post', '/pəʊst/', '后', ['postpone the meeting 推迟会议', 'postwar period 战后时期', 'postgraduate study 研究生学习', 'postscript note 附言'], ['postwar period 战后时期', 'postwar reconstruction 战后重建']),
      createWord('postgraduate', '/ˌpəʊstˈɡrædʒuət/', 'adj./n.', '研究生的/研究生', 'post后 + graduate毕业 → 毕业之后 → 研究生', 'post', '/pəʊst/', '后', ['postpone the meeting 推迟会议', 'postwar period 战后时期', 'postgraduate study 研究生学习', 'postscript note 附言'], ['postgraduate study 研究生学习', 'postgraduate degree 研究生学位']),
      createWord('postscript', '/ˈpəʊstskrɪpt/', 'n.', '附言', 'post后 + script写 → 写在后面 → 附言', 'post', '/pəʊst/', '后', ['postpone the meeting 推迟会议', 'postwar period 战后时期', 'postgraduate study 研究生学习', 'postscript note 附言'], ['postscript note 附言', 'add a postscript 添加附言'])
    ],
    phrases: ['postpone the meeting 推迟会议', 'postwar period 战后时期', 'postgraduate study 研究生学习', 'postscript note 附言'],
    mnemonic: 'post（后）→ 时间之后 → 后'
  },
  {
    id: 11130, root: 'pre', phonetic: '/priː/', partOfSpeech: 'adv.', meaning: '前/预先', frequency: 180,
    words: [
      createWord('predict', '/prɪˈdɪkt/', 'v.', '预测', 'pre前 + dict说 → 提前说 → 预测', 'pre', '/priː/', '前/预先', ['predict the future 预测未来', 'prevent from 阻止', 'previous experience 之前的经验', 'preliminary stage 初步阶段'], ['predict the future 预测未来', 'hard to predict 难以预测']),
      createWord('prevent', '/prɪˈvent/', 'v.', '预防', 'pre前 + vent来 → 提前来处理 → 预防', 'pre', '/priː/', '前/预先', ['predict the future 预测未来', 'prevent from 阻止', 'previous experience 之前的经验', 'preliminary stage 初步阶段'], ['prevent from 阻止', 'prevent disease 预防疾病']),
      createWord('previous', '/ˈpriːviəs/', 'adj.', '先前的', 'pre前 + vi路 + -ous形容词 → 前面的路 → 先前的', 'pre', '/priː/', '前/预先', ['predict the future 预测未来', 'prevent from 阻止', 'previous experience 之前的经验', 'preliminary stage 初步阶段'], ['previous experience 之前的经验', 'in previous years 在过去几年']),
      createWord('preliminary', '/prɪˈlɪmɪnəri/', 'adj.', '初步的', 'pre前 + limin门槛 + -ary形容词 → 在门槛之前 → 初步的', 'pre', '/priː/', '前/预先', ['predict the future 预测未来', 'prevent from 阻止', 'previous experience 之前的经验', 'preliminary stage 初步阶段'], ['preliminary stage 初步阶段', 'preliminary round 预赛'])
    ],
    phrases: ['predict the future 预测未来', 'prevent from 阻止', 'previous experience 之前的经验', 'preliminary stage 初步阶段'],
    mnemonic: 'pre（前）→ 提前准备 → 前/预先'
  },
  // 11131-11150
  {
    id: 11131, root: 'pro', phonetic: '/prəʊ/', partOfSpeech: 'adv.', meaning: '向前', frequency: 181,
    words: [
      createWord('progress', '/ˈprəʊɡres/', 'n./v.', '进步', 'pro向前 + gress走 → 向前走 → 进步', 'pro', '/prəʊ/', '向前', ['make progress 取得进步', 'promote to 提升为', 'propose a plan 提出计划', 'proceed with 继续进行'], ['make progress 取得进步', 'steady progress 稳步前进']),
      createWord('promote', '/prəˈməʊt/', 'v.', '促进/提升', 'pro向前 + mot移动 + e → 向前移动 → 促进', 'pro', '/prəʊ/', '向前', ['make progress 取得进步', 'promote to 提升为', 'propose a plan 提出计划', 'proceed with 继续进行'], ['promote to 提升为', 'promote development 促进发展']),
      createWord('propose', '/prəˈpəʊz/', 'v.', '提议', 'pro向前 + pos放置 + e → 放在前面 → 提议', 'pro', '/prəʊ/', '向前', ['make progress 取得进步', 'promote to 提升为', 'propose a plan 提出计划', 'proceed with 继续进行'], ['propose a plan 提出计划', 'propose marriage 求婚']),
      createWord('proceed', '/prəˈsiːd/', 'v.', '继续进行', 'pro向前 + ceed走 → 向前走 → 继续进行', 'pro', '/prəʊ/', '向前', ['make progress 取得进步', 'promote to 提升为', 'propose a plan 提出计划', 'proceed with 继续进行'], ['proceed with 继续进行', 'proceed to 继续前往'])
    ],
    phrases: ['make progress 取得进步', 'promote to 提升为', 'propose a plan 提出计划', 'proceed with 继续进行'],
    mnemonic: 'pro（向前）→ 前进发展 → 向前'
  },
  {
    id: 11132, root: 're', phonetic: '/riː/', partOfSpeech: 'adv.', meaning: '再/回', frequency: 182,
    words: [
      createWord('return', '/rɪˈtɜːrn/', 'v.', '返回', 're回 + turn转 → 转回 → 返回', 're', '/riː/', '再/回', ['return to 返回', 'repeat the process 重复过程', 'reform the system 改革制度', 'review the lesson 复习功课'], ['return to 返回', 'safe return 安全返回']),
      createWord('repeat', '/rɪˈpiːt/', 'v.', '重复', 're再 + pet追求 + at → 再次追求 → 重复', 're', '/riː/', '再/回', ['return to 返回', 'repeat the process 重复过程', 'reform the system 改革制度', 'review the lesson 复习功课'], ['repeat the process 重复过程', 'repeat after 跟读']),
      createWord('reform', '/rɪˈfɔːrm/', 'v./n.', '改革', 're再 + form形成 → 再形成 → 改革', 're', '/riː/', '再/回', ['return to 返回', 'repeat the process 重复过程', 'reform the system 改革制度', 'review the lesson 复习功课'], ['reform the system 改革制度', 'educational reform 教育改革']),
      createWord('review', '/rɪˈvjuː/', 'v./n.', '复习/回顾', 're再 + view看 → 再次看 → 复习', 're', '/riː/', '再/回', ['return to 返回', 'repeat the process 重复过程', 'reform the system 改革制度', 'review the lesson 复习功课'], ['review the lesson 复习功课', 'book review 书评'])
    ],
    phrases: ['return to 返回', 'repeat the process 重复过程', 'reform the system 改革制度', 'review the lesson 复习功课'],
    mnemonic: 're（再）→ 再次发生 → 再/回'
  },
  {
    id: 11133, root: 'retro', phonetic: '/retrəʊ/', partOfSpeech: 'adv.', meaning: '向后', frequency: 183,
    words: [
      createWord('retrospect', '/ˈretrəspekt/', 'n.', '回顾', 'retro向后 + spect看 → 向后看 → 回顾', 'retro', '/retrəʊ/', '向后', ['in retrospect 回顾往事', 'retrograde movement 倒退运动', 'retrospective exhibition 回顾展', 'retrofit project 改造项目'], ['in retrospect 回顾往事', 'on retrospect 回想起来']),
      createWord('retrograde', '/ˈretrəɡreɪd/', 'adj./v.', '倒退的/倒退', 'retro向后 + grad步 + e → 向后走 → 倒退', 'retro', '/retrəʊ/', '向后', ['in retrospect 回顾往事', 'retrograde movement 倒退运动', 'retrospective exhibition 回顾展', 'retrofit project 改造项目'], ['retrograde movement 倒退运动', 'retrograde step 倒退的一步']),
      createWord('retrospective', '/ˌretrəˈspektɪv/', 'adj.', '回顾的', 'retro向后 + spect看 + -ive形容词 → 向后看的 → 回顾的', 'retro', '/retrəʊ/', '向后', ['in retrospect 回顾往事', 'retrograde movement 倒退运动', 'retrospective exhibition 回顾展', 'retrofit project 改造项目'], ['retrospective exhibition 回顾展', 'retrospective study 回顾性研究']),
      createWord('retrofit', '/ˈretrəʊfɪt/', 'v.', '改造', 'retro向后 + fit适合 → 使适合现在 → 改造', 'retro', '/retrəʊ/', '向后', ['in retrospect 回顾往事', 'retrograde movement 倒退运动', 'retrospective exhibition 回顾展', 'retrofit project 改造项目'], ['retrofit project 改造项目', 'retrofit equipment 改造设备'])
    ],
    phrases: ['in retrospect 回顾往事', 'retrograde movement 倒退运动', 'retrospective exhibition 回顾展', 'retrofit project 改造项目'],
    mnemonic: 'retro（向后）→ 回望过去 → 向后'
  },
  {
    id: 11134, root: 'semi', phonetic: '/semi/', partOfSpeech: 'adj.', meaning: '半', frequency: 184,
    words: [
      createWord('semicircle', '/ˈsemisɜːrkl/', 'n.', '半圆', 'semi半 + circle圆 → 一半的圆 → 半圆', 'semi', '/semi/', '半', ['semicircle shape 半圆形', 'semifinal match 半决赛', 'semiconductor industry 半导体工业', 'semiannual report 半年报'], ['semicircle shape 半圆形', 'draw a semicircle 画半圆']),
      createWord('semifinal', '/ˌsemiˈfaɪnl/', 'n.', '半决赛', 'semi半 + final决赛 → 决赛的一半 → 半决赛', 'semi', '/semi/', '半', ['semicircle shape 半圆形', 'semifinal match 半决赛', 'semiconductor industry 半导体工业', 'semiannual report 半年报'], ['semifinal match 半决赛', 'reach the semifinal 进入半决赛']),
      createWord('semiconductor', '/ˌsemikənˈdʌktər/', 'n.', '半导体', 'semi半 + conductor导体 → 半导体性质的 → 半导体', 'semi', '/semi/', '半', ['semicircle shape 半圆形', 'semifinal match 半决赛', 'semiconductor industry 半导体工业', 'semiannual report 半年报'], ['semiconductor industry 半导体工业', 'semiconductor chip 半导体芯片']),
      createWord('semiannual', '/ˌsemiˈænjuəl/', 'adj.', '半年的', 'semi半 + annual每年的 → 半年一次的 → 半年的', 'semi', '/semi/', '半', ['semicircle shape 半圆形', 'semifinal match 半决赛', 'semiconductor industry 半导体工业', 'semiannual report 半年报'], ['semiannual report 半年报', 'semiannual meeting 半年会议'])
    ],
    phrases: ['semicircle shape 半圆形', 'semifinal match 半决赛', 'semiconductor industry 半导体工业', 'semiannual report 半年报'],
    mnemonic: 'semi（半）→ 一半程度 → 半'
  },
  {
    id: 11135, root: 'sub', phonetic: '/sʌb/', partOfSpeech: 'adv.', meaning: '下面/次', frequency: 185,
    words: [
      createWord('subway', '/ˈsʌbweɪ/', 'n.', '地铁', 'sub下面 + way路 → 地下的路 → 地铁', 'sub', '/sʌb/', '下面/次', ['take the subway 乘地铁', 'submarine vessel 潜水艇', 'subscribe to 订阅', 'substitute for 替代'], ['take the subway 乘地铁', 'subway station 地铁站']),
      createWord('submarine', '/ˌsʌbməˈriːn/', 'n.', '潜水艇', 'sub下面 + mar海 + ine名词 → 海面下的 → 潜水艇', 'sub', '/sʌb/', '下面/次', ['take the subway 乘地铁', 'submarine vessel 潜水艇', 'subscribe to 订阅', 'substitute for 替代'], ['submarine vessel 潜水艇', 'nuclear submarine 核潜艇']),
      createWord('subscribe', '/səbˈskraɪb/', 'v.', '订阅', 'sub下面 + scribe写 → 在下面签名 → 订阅', 'sub', '/sʌb/', '下面/次', ['take the subway 乘地铁', 'submarine vessel 潜水艇', 'subscribe to 订阅', 'substitute for 替代'], ['subscribe to 订阅', 'subscribe online 在线订阅']),
      createWord('substitute', '/ˈsʌbstɪtjuːt/', 'n./v.', '替代品/替代', 'sub下面 + stitute放置 → 放在下面 → 替代', 'sub', '/sʌb/', '下面/次', ['take the subway 乘地铁', 'submarine vessel 潜水艇', 'subscribe to 订阅', 'substitute for 替代'], ['substitute for 替代', 'substitute teacher 代课老师'])
    ],
    phrases: ['take the subway 乘地铁', 'submarine vessel 潜水艇', 'subscribe to 订阅', 'substitute for 替代'],
    mnemonic: 'sub（下面）→ 低处位置 → 下面/次'
  },
  {
    id: 11136, root: 'super', phonetic: '/suːpər/', partOfSpeech: 'adj.', meaning: '超过/超级', frequency: 186,
    words: [
      createWord('supermarket', '/ˈsuːpərmɑːrkɪt/', 'n.', '超市', 'super超级 + market市场 → 超级市场 → 超市', 'super', '/suːpər/', '超过/超级', ['go to the supermarket 去超市', 'supernatural power 超自然力量', 'supervisor of ...的主管', 'superior quality 优质'], ['go to the supermarket 去超市', 'local supermarket 当地超市']),
      createWord('supernatural', '/ˌsuːpərˈnætʃrəl/', 'adj.', '超自然的', 'super超过 + natural自然的 → 超越自然的 → 超自然的', 'super', '/suːpər/', '超过/超级', ['go to the supermarket 去超市', 'supernatural power 超自然力量', 'supervisor of ...的主管', 'superior quality 优质'], ['supernatural power 超自然力量', 'supernatural phenomenon 超自然现象']),
      createWord('supervisor', '/ˈsuːpərvaɪzər/', 'n.', '主管', 'super上面 + vis看 + -or人 → 从上面看的人 → 主管', 'super', '/suːpər/', '超过/超级', ['go to the supermarket 去超市', 'supernatural power 超自然力量', 'supervisor of ...的主管', 'superior quality 优质'], ['supervisor of ...的主管', 'direct supervisor 直接主管']),
      createWord('superior', '/suːˈpɪriər/', 'adj./n.', '优越的/上级', 'super上面 + -ior比较级 → 在上面的 → 优越的', 'super', '/suːpər/', '超过/超级', ['go to the supermarket 去超市', 'supernatural power 超自然力量', 'supervisor of ...的主管', 'superior quality 优质'], ['superior quality 优质', 'superior to 优于'])
    ],
    phrases: ['go to the supermarket 去超市', 'supernatural power 超自然力量', 'supervisor of ...的主管', 'superior quality 优质'],
    mnemonic: 'super（超级）→ 超越极限 → 超过/超级'
  },
  {
    id: 11137, root: 'syn', phonetic: '/sɪn/', partOfSpeech: 'adv.', meaning: '相同/一起', frequency: 187,
    words: [
      createWord('synonym', '/ˈsɪnənɪm/', 'n.', '同义词', 'syn相同 + onym名字 → 相同的名字 → 同义词', 'syn', '/sɪn/', '相同/一起', ['synonym for ...的同义词', 'synchronize with 与...同步', 'synthesis method 合成方法', 'sympathy for 对...的同情'], ['synonym for ...的同义词', 'find a synonym 找同义词']),
      createWord('synchronize', '/ˈsɪŋkrənaɪz/', 'v.', '同步', 'syn相同 + chron时间 + -ize动词 → 使时间相同 → 同步', 'syn', '/sɪn/', '相同/一起', ['synonym for ...的同义词', 'synchronize with 与...同步', 'synthesis method 合成方法', 'sympathy for 对...的同情'], ['synchronize with 与...同步', 'synchronize data 同步数据']),
      createWord('synthesis', '/ˈsɪnθəsɪs/', 'n.', '合成', 'syn一起 + thesis放置 → 放在一起 → 合成', 'syn', '/sɪn/', '相同/一起', ['synonym for ...的同义词', 'synchronize with 与...同步', 'synthesis method 合成方法', 'sympathy for 对...的同情'], ['synthesis method 合成方法', 'chemical synthesis 化学合成']),
      createWord('sympathy', '/ˈsɪmpəθi/', 'n.', '同情', 'sym相同 + path感情 + y → 相同的感情 → 同情', 'syn', '/sɪn/', '相同/一起', ['synonym for ...的同义词', 'synchronize with 与...同步', 'synthesis method 合成方法', 'sympathy for 对...的同情'], ['sympathy for 对...的同情', 'express sympathy 表达同情'])
    ],
    phrases: ['synonym for ...的同义词', 'synchronize with 与...同步', 'synthesis method 合成方法', 'sympathy for 对...的同情'],
    mnemonic: 'syn（相同）→ 一致无差 → 相同/一起'
  },
  {
    id: 11138, root: 'tele', phonetic: '/teli/', partOfSpeech: 'n.', meaning: '远', frequency: 188,
    words: [
      createWord('telephone', '/ˈtelɪfəʊn/', 'n.', '电话', 'tele远 + phon声音 + e → 远距离传声 → 电话', 'tele', '/teli/', '远', ['telephone call 电话', 'television program 电视节目', 'telegraph message 电报', 'telescope observation 望远镜观测'], ['telephone call 电话', 'answer the telephone 接电话']),
      createWord('television', '/ˈtelɪvɪʒn/', 'n.', '电视', 'tele远 + vis看 + -ion名词 → 远距离观看 → 电视', 'tele', '/teli/', '远', ['telephone call 电话', 'television program 电视节目', 'telegraph message 电报', 'telescope observation 望远镜观测'], ['television program 电视节目', 'watch television 看电视']),
      createWord('telegraph', '/ˈtelɪɡrɑːf/', 'n.', '电报', 'tele远 + graph写 → 远距离书写 → 电报', 'tele', '/teli/', '远', ['telephone call 电话', 'television program 电视节目', 'telegraph message 电报', 'telescope observation 望远镜观测'], ['telegraph message 电报', 'send a telegraph 发电报']),
      createWord('telescope', '/ˈtelɪskəʊp/', 'n.', '望远镜', 'tele远 + scop观察 + e → 观察远处 → 望远镜', 'tele', '/teli/', '远', ['telephone call 电话', 'television program 电视节目', 'telegraph message 电报', 'telescope observation 望远镜观测'], ['telescope observation 望远镜观测', 'look through a telescope 用望远镜看'])
    ],
    phrases: ['telephone call 电话', 'television program 电视节目', 'telegraph message 电报', 'telescope observation 望远镜观测'],
    mnemonic: 'tele（远）→ 远距离 → 远'
  },
  {
    id: 11139, root: 'trans', phonetic: '/trænz/', partOfSpeech: 'adv.', meaning: '跨越/转移', frequency: 189,
    words: [
      createWord('transport', '/trænˈspɔːrt/', 'v./n.', '运输', 'trans跨越 + port携带 → 跨越携带 → 运输', 'trans', '/trænz/', '跨越/转移', ['transport system 交通系统', 'translate into 翻译成', 'transform into 转变为', 'transfer to 转移到'], ['transport system 交通系统', 'public transport 公共交通']),
      createWord('translate', '/trænzˈleɪt/', 'v.', '翻译', 'trans跨越 + lat携带 + e → 跨语言携带 → 翻译', 'trans', '/trænz/', '跨越/转移', ['transport system 交通系统', 'translate into 翻译成', 'transform into 转变为', 'transfer to 转移到'], ['translate into 翻译成', 'translate from 从...翻译']),
      createWord('transform', '/trænzˈfɔːrm/', 'v.', '转变', 'trans跨越 + form形式 → 跨越形式 → 转变', 'trans', '/trænz/', '跨越/转移', ['transport system 交通系统', 'translate into 翻译成', 'transform into 转变为', 'transfer to 转移到'], ['transform into 转变为', 'transform the way 改变方式']),
      createWord('transfer', '/trænzˈfɜːr/', 'v.', '转移', 'trans跨越 + fer携带 → 跨越携带 → 转移', 'trans', '/trænz/', '跨越/转移', ['transport system 交通系统', 'translate into 翻译成', 'transform into 转变为', 'transfer to 转移到'], ['transfer to 转移到', 'data transfer 数据传输'])
    ],
    phrases: ['transport system 交通系统', 'translate into 翻译成', 'transform into 转变为', 'transfer to 转移到'],
    mnemonic: 'trans（跨越）→ 穿越界限 → 跨越/转移'
  },
  {
    id: 11140, root: 'tri', phonetic: '/traɪ/', partOfSpeech: 'adj.', meaning: '三', frequency: 190,
    words: [
      createWord('triangle', '/ˈtraɪæŋɡl/', 'n.', '三角形', 'tri三 + angle角 → 三个角 → 三角形', 'tri', '/traɪ/', '三', ['triangle shape 三角形', 'tricycle for 儿童三轮车', 'triple the output 产量翻三倍', 'trilingual speaker 三语使用者'], ['triangle shape 三角形', 'equilateral triangle 等边三角形']),
      createWord('tricycle', '/ˈtraɪsɪkl/', 'n.', '三轮车', 'tri三 + cycl圆 + e → 三个轮子 → 三轮车', 'tri', '/traɪ/', '三', ['triangle shape 三角形', 'tricycle for 儿童三轮车', 'triple the output 产量翻三倍', 'trilingual speaker 三语使用者'], ['tricycle for 儿童三轮车', 'ride a tricycle 骑三轮车']),
      createWord('triple', '/ˈtrɪpl/', 'adj./v.', '三倍的/使成三倍', 'tri三 + -ple倍数 → 三倍 → 三倍的', 'tri', '/traɪ/', '三', ['triangle shape 三角形', 'tricycle for 儿童三轮车', 'triple the output 产量翻三倍', 'trilingual speaker 三语使用者'], ['triple the output 产量翻三倍', 'triple threat 三重威胁']),
      createWord('trilingual', '/traɪˈlɪŋɡwəl/', 'adj.', '三语的', 'tri三 + lingu语言 + -al形容词 → 三种语言的 → 三语的', 'tri', '/traɪ/', '三', ['triangle shape 三角形', 'tricycle for 儿童三轮车', 'triple the output 产量翻三倍', 'trilingual speaker 三语使用者'], ['trilingual speaker 三语使用者', 'trilingual education 三语教育'])
    ],
    phrases: ['triangle shape 三角形', 'tricycle for 儿童三轮车', 'triple the output 产量翻三倍', 'trilingual speaker 三语使用者'],
    mnemonic: 'tri（三）→ 三个数量 → 三'
  },
  // 11141-11150
  {
    id: 11141, root: 'un', phonetic: '/ʌn/', partOfSpeech: 'adv.', meaning: '不', frequency: 191,
    words: [
      createWord('unhappy', '/ʌnˈhæpi/', 'adj.', '不快乐的', 'un不 + happy快乐 → 不快乐的', 'un', '/ʌn/', '不', ['feel unhappy 感到不快乐', 'unfair treatment 不公平待遇', 'unusual event 不寻常事件', 'unlock the door 开门'], ['feel unhappy 感到不快乐', 'very unhappy 非常不快乐']),
      createWord('unfair', '/ʌnˈfeər/', 'adj.', '不公平的', 'un不 + fair公平 → 不公平的', 'un', '/ʌn/', '不', ['feel unhappy 感到不快乐', 'unfair treatment 不公平待遇', 'unusual event 不寻常事件', 'unlock the door 开门'], ['unfair treatment 不公平待遇', 'unfair competition 不公平竞争']),
      createWord('unusual', '/ʌnˈjuːʒuəl/', 'adj.', '不寻常的', 'un不 + usual寻常 → 不寻常的', 'un', '/ʌn/', '不', ['feel unhappy 感到不快乐', 'unfair treatment 不公平待遇', 'unusual event 不寻常事件', 'unlock the door 开门'], ['unusual event 不寻常事件', 'highly unusual 非常不寻常']),
      createWord('unlock', '/ʌnˈlɒk/', 'v.', '开锁', 'un解开 + lock锁 → 解开锁 → 开锁', 'un', '/ʌn/', '不', ['feel unhappy 感到不快乐', 'unfair treatment 不公平待遇', 'unusual event 不寻常事件', 'unlock the door 开门'], ['unlock the door 开门', 'unlock potential 解锁潜力'])
    ],
    phrases: ['feel unhappy 感到不快乐', 'unfair treatment 不公平待遇', 'unusual event 不寻常事件', 'unlock the door 开门'],
    mnemonic: 'un（不）→ 否定含义 → 不'
  },
  {
    id: 11142, root: 'under', phonetic: '/ʌndər/', partOfSpeech: 'adv.', meaning: '下面/不足', frequency: 192,
    words: [
      createWord('underground', '/ˈʌndərɡraʊnd/', 'adj./n.', '地下的/地铁', 'under下面 + ground地面 → 地面下面 → 地下的', 'under', '/ʌndər/', '下面/不足', ['underground station 地铁站', 'underestimate the cost 低估成本', 'undergraduate student 本科生', 'underdeveloped region 欠发达地区'], ['underground station 地铁站', 'go underground 转入地下']),
      createWord('underestimate', '/ˌʌndərˈestɪmeɪt/', 'v.', '低估', 'under不足 + estimate估计 → 估计不足 → 低估', 'under', '/ʌndər/', '下面/不足', ['underground station 地铁站', 'underestimate the cost 低估成本', 'undergraduate student 本科生', 'underdeveloped region 欠发达地区'], ['underestimate the cost 低估成本', 'never underestimate 永远不要低估']),
      createWord('undergraduate', '/ˌʌndərˈɡrædʒuət/', 'n.', '本科生', 'under不足 + graduate毕业 → 未完全毕业 → 本科生', 'under', '/ʌndər/', '下面/不足', ['underground station 地铁站', 'underestimate the cost 低估成本', 'undergraduate student 本科生', 'underdeveloped region 欠发达地区'], ['undergraduate student 本科生', 'undergraduate degree 本科学位']),
      createWord('underdeveloped', '/ˌʌndərdɪˈveləpt/', 'adj.', '欠发达的', 'under不足 + developed发达的 → 发育不足的 → 欠发达的', 'under', '/ʌndər/', '下面/不足', ['underground station 地铁站', 'underestimate the cost 低估成本', 'undergraduate student 本科生', 'underdeveloped region 欠发达地区'], ['underdeveloped region 欠发达地区', 'underdeveloped economy 不发达经济'])
    ],
    phrases: ['underground station 地铁站', 'underestimate the cost 低估成本', 'undergraduate student 本科生', 'underdeveloped region 欠发达地区'],
    mnemonic: 'under（下面）→ 位置低于 → 下面/不足'
  },
  {
    id: 11143, root: 'uni', phonetic: '/juːni/', partOfSpeech: 'adj.', meaning: '一/单一', frequency: 193,
    words: [
      createWord('uniform', '/ˈjuːnɪfɔːrm/', 'n./adj.', '制服/一致的', 'uni一 + form形式 → 一种形式 → 制服', 'uni', '/juːni/', '一/单一', ['school uniform 校服', 'unique to ...独有的', 'universe view 宇宙观', 'unite with 与...联合'], ['school uniform 校服', 'wear uniform 穿制服']),
      createWord('unique', '/juˈniːk/', 'adj.', '独特的', 'uni一 + -ique形容词 → 唯一的 → 独特的', 'uni', '/juːni/', '一/单一', ['school uniform 校服', 'unique to ...独有的', 'universe view 宇宙观', 'unite with 与...联合'], ['unique to ...独有的', 'truly unique 真正独特']),
      createWord('universe', '/ˈjuːnɪvɜːrs/', 'n.', '宇宙', 'uni一 + vers转 + e → 转成一体的 → 宇宙', 'uni', '/juːni/', '一/单一', ['school uniform 校服', 'unique to ...独有的', 'universe view 宇宙观', 'unite with 与...联合'], ['universe view 宇宙观', 'expand the universe 扩展宇宙']),
      createWord('unite', '/juˈnaɪt/', 'v.', '联合', 'uni一 + -ite动词 → 成为一体 → 联合', 'uni', '/juːni/', '一/单一', ['school uniform 校服', 'unique to ...独有的', 'universe view 宇宙观', 'unite with 与...联合'], ['unite with 与...联合', 'unite against 联合对抗'])
    ],
    phrases: ['school uniform 校服', 'unique to ...独有的', 'universe view 宇宙观', 'unite with 与...联合'],
    mnemonic: 'uni（一）→ 单一统一 → 一/单一'
  },
  {
    id: 11144, root: 'up', phonetic: '/ʌp/', partOfSpeech: 'adv.', meaning: '向上', frequency: 194,
    words: [
      createWord('update', '/ʌpˈdeɪt/', 'v./n.', '更新', 'up向上 + date日期 → 日期向上 → 更新', 'up', '/ʌp/', '向上', ['update information 更新信息', 'upgrade to 升级到', 'uplift spirit 提振精神', 'upright position 直立位置'], ['update information 更新信息', 'software update 软件更新']),
      createWord('upgrade', '/ʌpˈɡreɪd/', 'v./n.', '升级', 'up向上 + grade等级 → 等级向上 → 升级', 'up', '/ʌp/', '向上', ['update information 更新信息', 'upgrade to 升级到', 'uplift spirit 提振精神', 'upright position 直立位置'], ['upgrade to 升级到', 'system upgrade 系统升级']),
      createWord('uplift', '/ʌpˈlɪft/', 'v.', '提升', 'up向上 + lift举起 → 向上举起 → 提升', 'up', '/ʌp/', '向上', ['update information 更新信息', 'upgrade to 升级到', 'uplift spirit 提振精神', 'upright position 直立位置'], ['uplift spirit 提振精神', 'cultural uplift 文化提升']),
      createWord('upright', '/ˈʌpraɪt/', 'adj.', '正直的/直立的', 'up向上 + right正确 → 向上正确的 → 正直的', 'up', '/ʌp/', '向上', ['update information 更新信息', 'upgrade to 升级到', 'uplift spirit 提振精神', 'upright position 直立位置'], ['upright position 直立位置', 'upright citizen 正直公民'])
    ],
    phrases: ['update information 更新信息', 'upgrade to 升级到', 'uplift spirit 提振精神', 'upright position 直立位置'],
    mnemonic: 'up（向上）→ 方向朝上 → 向上'
  },
  {
    id: 11145, root: 'vice', phonetic: '/vaɪs/', partOfSpeech: 'adv.', meaning: '代替/副', frequency: 195,
    words: [
      createWord('vice', '/vaɪs/', 'n.', '恶习/副职', 'vice本身是词根，表示代替/副', 'vice', '/vaɪs/', '代替/副', ['vice president 副总统', 'vicious circle 恶性循环', 'vicious attack 恶毒攻击', 'vicarious experience 替代性体验'], ['vice president 副总统', 'elected vice president 当选副总统']),
      createWord('vicious', '/ˈvɪʃəs/', 'adj.', '恶毒的', 'vice恶习 + -ious形容词 → 有恶习的 → 恶毒的', 'vice', '/vaɪs/', '代替/副', ['vice president 副总统', 'vicious circle 恶性循环', 'vicious attack 恶毒攻击', 'vicarious experience 替代性体验'], ['vicious circle 恶性循环', 'vicious dog 恶犬']),
      createWord('viciously', '/ˈvɪʃəsli/', 'adv.', '恶毒地', 'vicious恶毒的 + -ly副词 → 恶毒地', 'vice', '/vaɪs/', '代替/副', ['vice president 副总统', 'vicious circle 恶性循环', 'vicious attack 恶毒攻击', 'vicarious experience 替代性体验'], ['vicious attack 恶毒攻击', 'attack viciously 恶毒攻击']),
      createWord('vicarious', '/vɪˈkeəriəs/', 'adj.', '替代的', 'vic代替 + -arious形容词 → 代替的 → 替代的', 'vice', '/vaɪs/', '代替/副', ['vice president 副总统', 'vicious circle 恶性循环', 'vicious attack 恶毒攻击', 'vicarious experience 替代性体验'], ['vicarious experience 替代性体验', 'vicarious pleasure 替代性快乐'])
    ],
    phrases: ['vice president 副总统', 'vicious circle 恶性循环', 'vicious attack 恶毒攻击', 'vicarious experience 替代性体验'],
    mnemonic: 'vice（代替）→ 次要位置 → 代替/副'
  },
  {
    id: 11146, root: 'with', phonetic: '/wɪð/', partOfSpeech: 'adv.', meaning: '向后/反对', frequency: 196,
    words: [
      createWord('withdraw', '/wɪðˈdrɔː/', 'v.', '撤回', 'with向后 + draw拉 → 向后拉 → 撤回', 'with', '/wɪð/', '向后/反对', ['withdraw money 取钱', 'withstand pressure 承受压力', 'withhold information 扣留信息', 'withdraw from 退出'], ['withdraw money 取钱', 'withdraw troops 撤军']),
      createWord('withstand', '/wɪðˈstænd/', 'v.', '承受', 'with反对 + stand站立 → 对着站立 → 承受', 'with', '/wɪð/', '向后/反对', ['withdraw money 取钱', 'withstand pressure 承受压力', 'withhold information 扣留信息', 'withdraw from 退出'], ['withstand pressure 承受压力', 'withstand test 经受考验']),
      createWord('withhold', '/wɪðˈhəʊld/', 'v.', '扣留', 'with向后 + hold持有 → 向后持有 → 扣留', 'with', '/wɪð/', '向后/反对', ['withdraw money 取钱', 'withstand pressure 承受压力', 'withhold information 扣留信息', 'withdraw from 退出'], ['withhold information 扣留信息', 'withhold tax 扣税']),
      createWord('withdrawal', '/wɪðˈdrɔːəl/', 'n.', '撤回', 'withdraw撤回 + -al名词 → 撤回的行为 → 撤回', 'with', '/wɪð/', '向后/反对', ['withdraw money 取钱', 'withstand pressure 承受压力', 'withhold information 扣留信息', 'withdraw from 退出'], ['withdraw from 退出', 'withdrawal symptoms 戒断症状'])
    ],
    phrases: ['withdraw money 取钱', 'withstand pressure 承受压力', 'withhold information 扣留信息', 'withdraw from 退出'],
    mnemonic: 'with（向后）→ 方向相反 → 向后/反对'
  },
  {
    id: 11147, root: 'aer', phonetic: '/eər/', partOfSpeech: 'n.', meaning: '空气/飞行', frequency: 197,
    words: [
      createWord('aerial', '/ˈeəriəl/', 'adj./n.', '空中的/天线', 'aer空气 + -ial形容词 → 与空气有关的 → 空中的', 'aer', '/eər/', '空气/飞行', ['aerial view 鸟瞰图', 'aeroplane flight 飞机飞行', 'aerobic exercise 有氧运动', 'aerospace industry 航空航天工业'], ['aerial view 鸟瞰图', 'aerial photography 航拍']),
      createWord('aeroplane', '/ˈeərəpleɪn/', 'n.', '飞机', 'aero空气 + plane飞机 → 空中飞行的 → 飞机', 'aer', '/eər/', '空气/飞行', ['aerial view 鸟瞰图', 'aeroplane flight 飞机飞行', 'aerobic exercise 有氧运动', 'aerospace industry 航空航天工业'], ['aeroplane flight 飞机飞行', 'by aeroplane 乘飞机']),
      createWord('aerobic', '/eəˈrəʊbɪk/', 'adj.', '有氧的', 'aer空气 + -obic形容词 → 需要空气的 → 有氧的', 'aer', '/eər/', '空气/飞行', ['aerial view 鸟瞰图', 'aeroplane flight 飞机飞行', 'aerobic exercise 有氧运动', 'aerospace industry 航空航天工业'], ['aerobic exercise 有氧运动', 'aerobic activity 有氧活动']),
      createWord('aerospace', '/ˈeərəʊspeɪs/', 'n.', '航空航天', 'aero空气 + space空间 → 空气与空间 → 航空航天', 'aer', '/eər/', '空气/飞行', ['aerial view 鸟瞰图', 'aeroplane flight 飞机飞行', 'aerobic exercise 有氧运动', 'aerospace industry 航空航天工业'], ['aerospace industry 航空航天工业', 'aerospace engineer 航空航天工程师'])
    ],
    phrases: ['aerial view 鸟瞰图', 'aeroplane flight 飞机飞行', 'aerobic exercise 有氧运动', 'aerospace industry 航空航天工业'],
    mnemonic: 'aer（空气）→ 空中飞行 → 空气/飞行'
  },
  {
    id: 11148, root: 'corp', phonetic: '/kɔːrp/', partOfSpeech: 'n.', meaning: '身体', frequency: 198,
    words: [
      createWord('corporation', '/ˌkɔːrpəˈreɪʃn/', 'n.', '公司', 'corp身体 + -oration名词 → 法人团体 → 公司', 'corp', '/kɔːrp/', '身体', ['multinational corporation 跨国公司', 'corps of ...的军团', 'corpse found 发现尸体', 'corporate identity 企业形象'], ['multinational corporation 跨国公司', 'large corporation 大公司']),
      createWord('corps', '/kɔːr/', 'n.', '军团', 'corp身体 + s → 一个团体 → 军团', 'corp', '/kɔːrp/', '身体', ['multinational corporation 跨国公司', 'corps of ...的军团', 'corpse found 发现尸体', 'corporate identity 企业形象'], ['corps of ...的军团', 'army corps 军团']),
      createWord('corpse', '/kɔːrps/', 'n.', '尸体', 'corp身体 + se → 无生命的身体 → 尸体', 'corp', '/kɔːrp/', '身体', ['multinational corporation 跨国公司', 'corps of ...的军团', 'corpse found 发现尸体', 'corporate identity 企业形象'], ['corpse found 发现尸体', 'dead corpse 尸体']),
      createWord('corporate', '/ˈkɔːrpərət/', 'adj.', '企业的', 'corp身体 + -orate形容词 → 法人的 → 企业的', 'corp', '/kɔːrp/', '身体', ['multinational corporation 跨国公司', 'corps of ...的军团', 'corpse found 发现尸体', 'corporate identity 企业形象'], ['corporate identity 企业形象', 'corporate culture 企业文化'])
    ],
    phrases: ['multinational corporation 跨国公司', 'corps of ...的军团', 'corpse found 发现尸体', 'corporate identity 企业形象'],
    mnemonic: 'corp（身体）→ 肉体躯干 → 身体'
  },
  {
    id: 11149, root: 'cred', phonetic: '/kred/', partOfSpeech: 'v.', meaning: '相信', frequency: 199,
    words: [
      createWord('credit', '/ˈkredɪt/', 'n./v.', '信用/贷方', 'cred相信 + -it名词 → 相信的状态 → 信用', 'cred', '/kred/', '相信', ['credit card 信用卡', 'credible source 可靠来源', 'incredible speed 惊人的速度', 'credibility of ...的可信度'], ['credit card 信用卡', 'credit history 信用记录']),
      createWord('credible', '/ˈkredəbl/', 'adj.', '可信的', 'cred相信 + -ible形容词 → 可相信的 → 可信的', 'cred', '/kred/', '相信', ['credit card 信用卡', 'credible source 可靠来源', 'incredible speed 惊人的速度', 'credibility of ...的可信度'], ['credible source 可靠来源', 'highly credible 高度可信']),
      createWord('incredible', '/ɪnˈkredəbl/', 'adj.', '难以置信的', 'in不 + cred相信 + -ible形容词 → 不可相信的 → 难以置信的', 'cred', '/kred/', '相信', ['credit card 信用卡', 'credible source 可靠来源', 'incredible speed 惊人的速度', 'credibility of ...的可信度'], ['incredible speed 惊人的速度', 'truly incredible 真正惊人']),
      createWord('credibility', '/ˌkredəˈbɪləti/', 'n.', '可信度', 'cred相信 + -ibility名词 → 可相信的程度 → 可信度', 'cred', '/kred/', '相信', ['credit card 信用卡', 'credible source 可靠来源', 'incredible speed 惊人的速度', 'credibility of ...的可信度'], ['credibility of ...的可信度', 'lose credibility 失去可信度'])
    ],
    phrases: ['credit card 信用卡', 'credible source 可靠来源', 'incredible speed 惊人的速度', 'credibility of ...的可信度'],
    mnemonic: 'cred（相信）→ 信任信念 → 相信'
  },
  {
    id: 11150, root: 'dict', phonetic: '/dɪkt/', partOfSpeech: 'v.', meaning: '说/断言', frequency: 200,
    words: [
      createWord('predict', '/prɪˈdɪkt/', 'v.', '预测', 'pre前 + dict说 → 提前说 → 预测', 'dict', '/dɪkt/', '说/断言', ['predict the outcome 预测结果', 'dictate terms 指定条件', 'dictionary definition 词典定义', 'verdict on 关于...的裁决'], ['predict the outcome 预测结果', 'hard to predict 难以预测']),
      createWord('dictate', '/dɪkˈteɪt/', 'v.', '命令/口述', 'dict说 + -ate动词 → 说出命令 → 命令', 'dict', '/dɪkt/', '说/断言', ['predict the outcome 预测结果', 'dictate terms 指定条件', 'dictionary definition 词典定义', 'verdict on 关于...的裁决'], ['dictate terms 指定条件', 'dictate letter 口述信件']),
      createWord('dictionary', '/ˈdɪkʃənəri/', 'n.', '词典', 'dict说 + -ion名词 + -ary集合 → 词语的集合 → 词典', 'dict', '/dɪkt/', '说/断言', ['predict the outcome 预测结果', 'dictate terms 指定条件', 'dictionary definition 词典定义', 'verdict on 关于...的裁决'], ['dictionary definition 词典定义', 'look up in dictionary 查词典']),
      createWord('verdict', '/ˈvɜːrdɪkt/', 'n.', '裁决', 'ver真实 + dict说 → 说出的真相 → 裁决', 'dict', '/dɪkt/', '说/断言', ['predict the outcome 预测结果', 'dictate terms 指定条件', 'dictionary definition 词典定义', 'verdict on 关于...的裁决'], ['verdict on 关于...的裁决', 'reach a verdict 达成裁决'])
    ],
    phrases: ['predict the outcome 预测结果', 'dictate terms 指定条件', 'dictionary definition 词典定义', 'verdict on 关于...的裁决'],
    mnemonic: 'dict（说）→ 言语表达 → 说/断言'
  }
];

const filePath = 'f:/claudeanli/beidanci3/src/data/cet-4.json';
let content = fs.readFileSync(filePath, 'utf-8');
content = content.trim();
if (content.endsWith(']')) {
  content = content.slice(0, -1);
}
const newContent = rootsData.map(r => JSON.stringify(r, null, 2)).join(',\n');
content += ',\n' + newContent + '\n]';
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added ' + rootsData.length + ' roots (11121-11150)');
