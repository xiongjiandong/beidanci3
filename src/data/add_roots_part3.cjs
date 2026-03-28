const fs = require('fs');

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

const rootsData = [
  // 11081-11100
  {
    id: 11081, root: 'mob', phonetic: '/məʊb/', partOfSpeech: 'v.', meaning: '移动', frequency: 131,
    words: [
      createWord('mobile', '/ˈməʊbaɪl/', 'adj./n.', '移动的/手机', 'mob移动 + -ile形容词 → 可移动的 → 移动的', 'mob', '/məʊb/', '移动', ['mobile phone 手机', 'automobile industry 汽车工业', 'mobilize resources 动员资源', 'immobile state 不动状态'], ['mobile phone 手机', 'mobile device 移动设备']),
      createWord('automobile', '/ˈɔːtəməʊbiːl/', 'n.', '汽车', 'auto自动 + mob移动 + -ile名词 → 自动物体 → 汽车', 'mob', '/məʊb/', '移动', ['mobile phone 手机', 'automobile industry 汽车工业', 'mobilize resources 动员资源', 'immobile state 不动状态'], ['automobile industry 汽车工业', 'drive an automobile 开汽车']),
      createWord('mobilize', '/ˈməʊbəlaɪz/', 'v.', '动员', 'mob移动 + -ilize动词 → 使移动 → 动员', 'mob', '/məʊb/', '移动', ['mobile phone 手机', 'automobile industry 汽车工业', 'mobilize resources 动员资源', 'immobile state 不动状态'], ['mobilize resources 动员资源', 'mobilize support 动员支持']),
      createWord('immobile', '/ɪˈməʊbaɪl/', 'adj.', '不动的', 'im不 + mob移动 + -ile形容词 → 不能移动的 → 不动的', 'mob', '/məʊb/', '移动', ['mobile phone 手机', 'automobile industry 汽车工业', 'mobilize resources 动员资源', 'immobile state 不动状态'], ['immobile state 不动状态', 'remain immobile 保持不动'])
    ],
    phrases: ['mobile phone 手机', 'automobile industry 汽车工业', 'mobilize resources 动员资源', 'immobile state 不动状态'],
    mnemonic: 'mob（移动）→ 活动自如 → 移动'
  },
  {
    id: 11082, root: 'mort', phonetic: '/mɔːrt/', partOfSpeech: 'n.', meaning: '死亡', frequency: 132,
    words: [
      createWord('mortal', '/ˈmɔːrtl/', 'adj./n.', '凡人的/凡人', 'mort死亡 + -al形容词 → 会死亡的 → 凡人的', 'mort', '/mɔːrt/', '死亡', ['mortal being 凡人', 'mortality rate 死亡率', 'immortal soul 不朽灵魂', 'mortgage payment 抵押贷款还款'], ['mortal being 凡人', 'mortal enemy 死敌']),
      createWord('mortality', '/mɔːrˈtæləti/', 'n.', '死亡率', 'mort死亡 + -ality名词 → 死亡的状态 → 死亡率', 'mort', '/mɔːrt/', '死亡', ['mortal being 凡人', 'mortality rate 死亡率', 'immortal soul 不朽灵魂', 'mortgage payment 抵押贷款还款'], ['mortality rate 死亡率', 'infant mortality 婴儿死亡率']),
      createWord('immortal', '/ɪˈmɔːrtl/', 'adj.', '不朽的', 'im不 + mort死亡 + -al形容词 → 不会死亡的 → 不朽的', 'mort', '/mɔːrt/', '死亡', ['mortal being 凡人', 'mortality rate 死亡率', 'immortal soul 不朽灵魂', 'mortgage payment 抵押贷款还款'], ['immortal soul 不朽灵魂', 'immortal fame 不朽的名声']),
      createWord('mortgage', '/ˈmɔːrɡɪdʒ/', 'n./v.', '抵押贷款', 'mort死亡 + gage誓言 → 死亡誓言 → 抵押贷款', 'mort', '/mɔːrt/', '死亡', ['mortal being 凡人', 'mortality rate 死亡率', 'immortal soul 不朽灵魂', 'mortgage payment 抵押贷款还款'], ['mortgage payment 抵押贷款还款', 'pay off mortgage 还清抵押贷款'])
    ],
    phrases: ['mortal being 凡人', 'mortality rate 死亡率', 'immortal soul 不朽灵魂', 'mortgage payment 抵押贷款还款'],
    mnemonic: 'mort（死亡）→ 生命终结 → 死亡'
  },
  {
    id: 11083, root: 'naut', phonetic: '/nɔːt/', partOfSpeech: 'n.', meaning: '航行', frequency: 133,
    words: [
      createWord('nautical', '/ˈnɔːtɪkl/', 'adj.', '航海的', 'naut航行 + -ical形容词 → 与航行有关的 → 航海的', 'naut', '/nɔːt/', '航行', ['nautical chart 航海图', 'astronaut program 宇航员计划', 'nausea feeling 恶心感', 'navigational aid 导航辅助'], ['nautical chart 航海图', 'nautical mile 海里']),
      createWord('astronaut', '/ˈæstrənɔːt/', 'n.', '宇航员', 'astr星 + -naut航行者 → 星际航行者 → 宇航员', 'naut', '/nɔːt/', '航行', ['nautical chart 航海图', 'astronaut program 宇航员计划', 'nausea feeling 恶心感', 'navigational aid 导航辅助'], ['astronaut program 宇航员计划', 'become an astronaut 成为宇航员']),
      createWord('nausea', '/ˈnɔːziə/', 'n.', '恶心', 'naut航行 + -sea → 航行时晕船 → 恶心', 'naut', '/nɔːt/', '航行', ['nautical chart 航海图', 'astronaut program 宇航员计划', 'nausea feeling 恶心感', 'navigational aid 导航辅助'], ['nausea feeling 恶心感', 'feel nausea 感到恶心']),
      createWord('navigate', '/ˈnævɪɡeɪt/', 'v.', '导航', 'nav船 + -igate动词 → 驾船 → 导航', 'naut', '/nɔːt/', '航行', ['nautical chart 航海图', 'astronaut program 宇航员计划', 'nausea feeling 恶心感', 'navigational aid 导航辅助'], ['navigational aid 导航辅助', 'navigate through 穿越导航'])
    ],
    phrases: ['nautical chart 航海图', 'astronaut program 宇航员计划', 'nausea feeling 恶心感', 'navigational aid 导航辅助'],
    mnemonic: 'naut（航行）→ 扬帆远航 → 航行'
  },
  {
    id: 11084, root: 'onym', phonetic: '/ˈɒnɪm/', partOfSpeech: 'n.', meaning: '名字', frequency: 134,
    words: [
      createWord('synonym', '/ˈsɪnənɪm/', 'n.', '同义词', 'syn相同 + onym名字 → 相同的名字 → 同义词', 'onym', '/ˈɒnɪm/', '名字', ['synonym for ...的同义词', 'antonym of ...的反义词', 'anonymous author 匿名作者', 'acronym for ...的缩写'], ['synonym for ...的同义词', 'find a synonym 找同义词']),
      createWord('antonym', '/ˈæntənɪm/', 'n.', '反义词', 'anti相反 + onym名字 → 相反的名字 → 反义词', 'onym', '/ˈɒnɪm/', '名字', ['synonym for ...的同义词', 'antonym of ...的反义词', 'anonymous author 匿名作者', 'acronym for ...的缩写'], ['antonym of ...的反义词', 'antonym pair 反义词对']),
      createWord('anonymous', '/əˈnɒnɪməs/', 'adj.', '匿名的', 'an无 + onym名字 + -ous形容词 → 无名的 → 匿名的', 'onym', '/ˈɒnɪm/', '名字', ['synonym for ...的同义词', 'antonym of ...的反义词', 'anonymous author 匿名作者', 'acronym for ...的缩写'], ['anonymous author 匿名作者', 'remain anonymous 保持匿名']),
      createWord('acronym', '/ˈækrənɪm/', 'n.', '缩写词', 'acr尖 + onym名字 → 取首字母的名字 → 缩写词', 'onym', '/ˈɒnɪm/', '名字', ['synonym for ...的同义词', 'antonym of ...的反义词', 'anonymous author 匿名作者', 'acronym for ...的缩写'], ['acronym for ...的缩写', 'form an acronym 形成缩写'])
    ],
    phrases: ['synonym for ...的同义词', 'antonym of ...的反义词', 'anonymous author 匿名作者', 'acronym for ...的缩写'],
    mnemonic: 'onym（名字）→ 名字称呼 → 名字'
  },
  {
    id: 11085, root: 'path', phonetic: '/pæθ/', partOfSpeech: 'n.', meaning: '感情/疾病', frequency: 135,
    words: [
      createWord('sympathy', '/ˈsɪmpəθi/', 'n.', '同情', 'sym相同 + path感情 + -y名词 → 相同的感情 → 同情', 'path', '/pæθ/', '感情/疾病', ['show sympathy 表示同情', 'pathetic sight 可怜的景象', 'empathy with 与...共情', 'apathy toward 对...冷漠'], ['show sympathy 表示同情', 'deep sympathy 深切同情']),
      createWord('pathetic', '/pəˈθetɪk/', 'adj.', '可怜的', 'path感情 + -etic形容词 → 引起感情的 → 可怜的', 'path', '/pæθ/', '感情/疾病', ['show sympathy 表示同情', 'pathetic sight 可怜的景象', 'empathy with 与...共情', 'apathy toward 对...冷漠'], ['pathetic sight 可怜的景象', 'look pathetic 看起来可怜']),
      createWord('empathy', '/ˈempəθi/', 'n.', '共情', 'em进入 + path感情 + -y名词 → 进入感情 → 共情', 'path', '/pæθ/', '感情/疾病', ['show sympathy 表示同情', 'pathetic sight 可怜的景象', 'empathy with 与...共情', 'apathy toward 对...冷漠'], ['empathy with 与...共情', 'feel empathy 感到共情']),
      createWord('apathy', '/ˈæpəθi/', 'n.', '冷漠', 'a无 + path感情 + -y名词 → 无感情 → 冷漠', 'path', '/pæθ/', '感情/疾病', ['show sympathy 表示同情', 'pathetic sight 可怜的景象', 'empathy with 与...共情', 'apathy toward 对...冷漠'], ['apathy toward 对...冷漠', 'political apathy 政治冷漠'])
    ],
    phrases: ['show sympathy 表示同情', 'pathetic sight 可怜的景象', 'empathy with 与...共情', 'apathy toward 对...冷漠'],
    mnemonic: 'path（感情）→ 内心感受 → 感情/疾病'
  },
  {
    id: 11086, root: 'phil', phonetic: '/fɪl/', partOfSpeech: 'v.', meaning: '爱', frequency: 136,
    words: [
      createWord('philosophy', '/fɪˈlɒsəfi/', 'n.', '哲学', 'phil爱 + soph智慧 + -y名词 → 爱智慧 → 哲学', 'phil', '/fɪl/', '爱', ['philosophy of ...的哲学', 'philanthropic work 慈善工作', 'philharmonic orchestra 爱乐乐团', 'bibliophile collection 藏书家收藏'], ['philosophy of ...的哲学', 'study philosophy 学习哲学']),
      createWord('philanthropy', '/fɪˈlænθrəpi/', 'n.', '慈善', 'phil爱 + anthrop人类 + -y名词 → 爱人类 → 慈善', 'phil', '/fɪl/', '爱', ['philosophy of ...的哲学', 'philanthropic work 慈善工作', 'philharmonic orchestra 爱乐乐团', 'bibliophile collection 藏书家收藏'], ['philanthropic work 慈善工作', 'corporate philanthropy 企业慈善']),
      createWord('philharmonic', '/ˌfɪlɑːrˈmɒnɪk/', 'adj./n.', '爱乐的/爱乐乐团', 'phil爱 + harmonic和谐的 → 爱和谐的 → 爱乐的', 'phil', '/fɪl/', '爱', ['philosophy of ...的哲学', 'philanthropic work 慈善工作', 'philharmonic orchestra 爱乐乐团', 'bibliophile collection 藏书家收藏'], ['philharmonic orchestra 爱乐乐团', 'Vienna Philharmonic 维也纳爱乐']),
      createWord('bibliophile', '/ˈbɪbliəʊfaɪl/', 'n.', '藏书家', 'biblio书 + phil爱 → 爱书的人 → 藏书家', 'phil', '/fɪl/', '爱', ['philosophy of ...的哲学', 'philanthropic work 慈善工作', 'philharmonic orchestra 爱乐乐团', 'bibliophile collection 藏书家收藏'], ['bibliophile collection 藏书家收藏', 'avid bibliophile 狂热藏书家'])
    ],
    phrases: ['philosophy of ...的哲学', 'philanthropic work 慈善工作', 'philharmonic orchestra 爱乐乐团', 'bibliophile collection 藏书家收藏'],
    mnemonic: 'phil（爱）→ 热爱追求 → 爱'
  },
  {
    id: 11087, root: 'phon', phonetic: '/fɒn/', partOfSpeech: 'n.', meaning: '声音', frequency: 137,
    words: [
      createWord('phone', '/fəʊn/', 'n./v.', '电话', 'phon声音 + e → 传递声音的工具 → 电话', 'phon', '/fɒn/', '声音', ['phone call 电话', 'symphony orchestra 交响乐团', 'microphone test 麦克风测试', 'phonetic symbol 音标'], ['phone call 电话', 'make a phone call 打电话']),
      createWord('symphony', '/ˈsɪmfəni/', 'n.', '交响乐', 'sym一起 + phon声音 + -y名词 → 声音在一起 → 交响乐', 'phon', '/fɒn/', '声音', ['phone call 电话', 'symphony orchestra 交响乐团', 'microphone test 麦克风测试', 'phonetic symbol 音标'], ['symphony orchestra 交响乐团', 'perform a symphony 演奏交响乐']),
      createWord('microphone', '/ˈmaɪkrəfəʊn/', 'n.', '麦克风', 'micro微小 + phon声音 + e → 放大微弱声音 → 麦克风', 'phon', '/fɒn/', '声音', ['phone call 电话', 'symphony orchestra 交响乐团', 'microphone test 麦克风测试', 'phonetic symbol 音标'], ['microphone test 麦克风测试', 'speak into the microphone 对着麦克风说话']),
      createWord('phonetic', '/fəˈnetɪk/', 'adj.', '语音的', 'phon声音 + -etic形容词 → 与声音有关的 → 语音的', 'phon', '/fɒn/', '声音', ['phone call 电话', 'symphony orchestra 交响乐团', 'microphone test 麦克风测试', 'phonetic symbol 音标'], ['phonetic symbol 音标', 'phonetic transcription 音标转写'])
    ],
    phrases: ['phone call 电话', 'symphony orchestra 交响乐团', 'microphone test 麦克风测试', 'phonetic symbol 音标'],
    mnemonic: 'phon（声音）→ 声音传递 → 声音'
  },
  {
    id: 11088, root: 'photo', phonetic: '/fəʊtəʊ/', partOfSpeech: 'n.', meaning: '光', frequency: 138,
    words: [
      createWord('photo', '/fəʊtəʊ/', 'n.', '照片', 'photo光 → 用光记录的图像 → 照片', 'photo', '/fəʊtəʊ/', '光', ['take a photo 拍照', 'photograph of ...的照片', 'photosynthesis process 光合作用过程', 'photocopy the document 复印文件'], ['take a photo 拍照', 'photo album 相册']),
      createWord('photograph', '/ˈfəʊtəɡrɑːf/', 'n./v.', '照片/拍照', 'photo光 + graph写 → 用光写 → 照片', 'photo', '/fəʊtəʊ/', '光', ['take a photo 拍照', 'photograph of ...的照片', 'photosynthesis process 光合作用过程', 'photocopy the document 复印文件'], ['photograph of ...的照片', 'take a photograph 拍照']),
      createWord('photosynthesis', '/ˌfəʊtəʊˈsɪnθəsɪs/', 'n.', '光合作用', 'photo光 + synthesis合成 → 用光合成的 → 光合作用', 'photo', '/fəʊtəʊ/', '光', ['take a photo 拍照', 'photograph of ...的照片', 'photosynthesis process 光合作用过程', 'photocopy the document 复印文件'], ['photosynthesis process 光合作用过程', 'plant photosynthesis 植物光合作用']),
      createWord('photocopy', '/ˈfəʊtəʊkɒpi/', 'n./v.', '复印件/复印', 'photo光 + copy复制 → 用光复制 → 复印', 'photo', '/fəʊtəʊ/', '光', ['take a photo 拍照', 'photograph of ...的照片', 'photosynthesis process 光合作用过程', 'photocopy the document 复印文件'], ['photocopy the document 复印文件', 'make a photocopy 复印'])
    ],
    phrases: ['take a photo 拍照', 'photograph of ...的照片', 'photosynthesis process 光合作用过程', 'photocopy the document 复印文件'],
    mnemonic: 'photo（光）→ 光影成像 → 光'
  },
  {
    id: 11089, root: 'psych', phonetic: '/saɪk/', partOfSpeech: 'n.', meaning: '心理', frequency: 139,
    words: [
      createWord('psychology', '/saɪˈkɒlədʒi/', 'n.', '心理学', 'psych心理 + -ology学科 → 研究心理的学科 → 心理学', 'psych', '/saɪk/', '心理', ['psychology research 心理学研究', 'psychiatric treatment 精神科治疗', 'psychic ability 通灵能力', 'psychotherapy session 心理治疗'], ['psychology research 心理学研究', 'study psychology 学习心理学']),
      createWord('psychiatry', '/saɪˈkaɪətri/', 'n.', '精神病学', 'psych心理 + iatr治疗 + -y名词 → 治疗心理的学科 → 精神病学', 'psych', '/saɪk/', '心理', ['psychology research 心理学研究', 'psychiatric treatment 精神科治疗', 'psychic ability 通灵能力', 'psychotherapy session 心理治疗'], ['psychiatric treatment 精神科治疗', 'consult psychiatry 咨询精神科']),
      createWord('psychic', '/ˈsaɪkɪk/', 'adj./n.', '心灵的/通灵者', 'psych心理 + -ic形容词 → 与心理有关的 → 心灵的', 'psych', '/saɪk/', '心理', ['psychology research 心理学研究', 'psychiatric treatment 精神科治疗', 'psychic ability 通灵能力', 'psychotherapy session 心理治疗'], ['psychic ability 通灵能力', 'psychic power 心灵力量']),
      createWord('psychotherapy', '/ˌsaɪkəʊˈθerəpi/', 'n.', '心理治疗', 'psych心理 + therapy治疗 → 心理的治疗 → 心理治疗', 'psych', '/saɪk/', '心理', ['psychology research 心理学研究', 'psychiatric treatment 精神科治疗', 'psychic ability 通灵能力', 'psychotherapy session 心理治疗'], ['psychotherapy session 心理治疗', 'undergo psychotherapy 接受心理治疗'])
    ],
    phrases: ['psychology research 心理学研究', 'psychiatric treatment 精神科治疗', 'psychic ability 通灵能力', 'psychotherapy session 心理治疗'],
    mnemonic: 'psych（心理）→ 心灵世界 → 心理'
  },
  {
    id: 11090, root: 'scop', phonetic: '/skɒp/', partOfSpeech: 'n.', meaning: '观察/镜', frequency: 140,
    words: [
      createWord('telescope', '/ˈtelɪskəʊp/', 'n.', '望远镜', 'tele远 + scop观察 + e → 观察远处 → 望远镜', 'scop', '/skɒp/', '观察/镜', ['look through telescope 用望远镜看', 'microscope image 显微镜图像', 'scope of ...的范围', 'periscope view 潜望镜视野'], ['look through telescope 用望远镜看', 'space telescope 太空望远镜']),
      createWord('microscope', '/ˈmaɪkrəskəʊp/', 'n.', '显微镜', 'micro微小 + scop观察 + e → 观察微小 → 显微镜', 'scop', '/skɒp/', '观察/镜', ['look through telescope 用望远镜看', 'microscope image 显微镜图像', 'scope of ...的范围', 'periscope view 潜望镜视野'], ['microscope image 显微镜图像', 'electron microscope 电子显微镜']),
      createWord('scope', '/skəʊp/', 'n.', '范围', 'scop观察 + e → 观察的视野 → 范围', 'scop', '/skɒp/', '观察/镜', ['look through telescope 用望远镜看', 'microscope image 显微镜图像', 'scope of ...的范围', 'periscope view 潜望镜视野'], ['scope of ...的范围', 'beyond the scope 超出范围']),
      createWord('periscope', '/ˈperɪskəʊp/', 'n.', '潜望镜', 'peri周围 + scop观察 + e → 观察周围 → 潜望镜', 'scop', '/skɒp/', '观察/镜', ['look through telescope 用望远镜看', 'microscope image 显微镜图像', 'scope of ...的范围', 'periscope view 潜望镜视野'], ['periscope view 潜望镜视野', 'submarine periscope 潜艇潜望镜'])
    ],
    phrases: ['look through telescope 用望远镜看', 'microscope image 显微镜图像', 'scope of ...的范围', 'periscope view 潜望镜视野'],
    mnemonic: 'scop（观察）→ 目光所及 → 观察/镜'
  },
  // 11091-11110
  {
    id: 11091, root: 'scope', phonetic: '/skəʊp/', partOfSpeech: 'n.', meaning: '观察', frequency: 141,
    words: [
      createWord('telescope', '/ˈtelɪskəʊp/', 'n.', '望远镜', 'tele远 + scope观察 → 观察远处 → 望远镜', 'scope', '/skəʊp/', '观察', ['telescope observation 望远镜观测', 'microscope slide 显微镜载玻片', 'endoscope procedure 内窥镜检查', 'kaleidoscope pattern 万花筒图案'], ['telescope observation 望远镜观测', 'use a telescope 使用望远镜']),
      createWord('microscope', '/ˈmaɪkrəskəʊp/', 'n.', '显微镜', 'micro微小 + scope观察 → 观察微小物体 → 显微镜', 'scope', '/skəʊp/', '观察', ['telescope observation 望远镜观测', 'microscope slide 显微镜载玻片', 'endoscope procedure 内窥镜检查', 'kaleidoscope pattern 万花筒图案'], ['microscope slide 显微镜载玻片', 'under a microscope 在显微镜下']),
      createWord('endoscope', '/ˈendəskəʊp/', 'n.', '内窥镜', 'endo内部 + scope观察 → 观察内部 → 内窥镜', 'scope', '/skəʊp/', '观察', ['telescope observation 望远镜观测', 'microscope slide 显微镜载玻片', 'endoscope procedure 内窥镜检查', 'kaleidoscope pattern 万花筒图案'], ['endoscope procedure 内窥镜检查', 'medical endoscope 医用内窥镜']),
      createWord('kaleidoscope', '/kəˈlaɪdəskəʊp/', 'n.', '万花筒', 'kal美丽 + id + scope观察 → 观察美丽的 → 万花筒', 'scope', '/skəʊp/', '观察', ['telescope observation 望远镜观测', 'microscope slide 显微镜载玻片', 'endoscope procedure 内窥镜检查', 'kaleidoscope pattern 万花筒图案'], ['kaleidoscope pattern 万花筒图案', 'like a kaleidoscope 像万花筒一样'])
    ],
    phrases: ['telescope observation 望远镜观测', 'microscope slide 显微镜载玻片', 'endoscope procedure 内窥镜检查', 'kaleidoscope pattern 万花筒图案'],
    mnemonic: 'scope（观察）→ 视野范围 → 观察'
  },
  {
    id: 11092, root: 'scrib', phonetic: '/skrɪb/', partOfSpeech: 'v.', meaning: '写', frequency: 142,
    words: [
      createWord('describe', '/dɪˈskraɪb/', 'v.', '描述', 'de向下 + scribe写 → 写下来 → 描述', 'scrib', '/skrɪb/', '写', ['describe in detail 详细描述', 'prescribe medication 开药', 'subscribe to newsletter 订阅通讯', 'transcribe notes 转录笔记'], ['describe in detail 详细描述', 'describe as 描述为']),
      createWord('prescribe', '/prɪˈskraɪb/', 'v.', '开处方', 'pre前 + scribe写 → 提前写好 → 开处方', 'scrib', '/skrɪb/', '写', ['describe in detail 详细描述', 'prescribe medication 开药', 'subscribe to newsletter 订阅通讯', 'transcribe notes 转录笔记'], ['prescribe medication 开药', 'prescribe for 为...开处方']),
      createWord('subscribe', '/səbˈskraɪb/', 'v.', '订阅', 'sub下面 + scribe写 → 在下面签名 → 订阅', 'scrib', '/skrɪb/', '写', ['describe in detail 详细描述', 'prescribe medication 开药', 'subscribe to newsletter 订阅通讯', 'transcribe notes 转录笔记'], ['subscribe to newsletter 订阅通讯', 'subscribe online 在线订阅']),
      createWord('transcribe', '/trænˈskraɪb/', 'v.', '转录', 'trans穿过 + scribe写 → 写过去 → 转录', 'scrib', '/skrɪb/', '写', ['describe in detail 详细描述', 'prescribe medication 开药', 'subscribe to newsletter 订阅通讯', 'transcribe notes 转录笔记'], ['transcribe notes 转录笔记', 'transcribe audio 转录音频'])
    ],
    phrases: ['describe in detail 详细描述', 'prescribe medication 开药', 'subscribe to newsletter 订阅通讯', 'transcribe notes 转录笔记'],
    mnemonic: 'scrib（写）→ 笔下留痕 → 写'
  },
  {
    id: 11093, root: 'soph', phonetic: '/sɒf/', partOfSpeech: 'adj.', meaning: '智慧', frequency: 143,
    words: [
      createWord('philosophy', '/fɪˈlɒsəfi/', 'n.', '哲学', 'phil爱 + soph智慧 + y → 爱智慧 → 哲学', 'soph', '/sɒf/', '智慧', ['philosophy of life 人生哲学', 'sophisticated technology 先进技术', 'sophomore year 大二学年', 'pansophic knowledge 全知'], ['philosophy of life 人生哲学', 'moral philosophy 道德哲学']),
      createWord('sophisticated', '/səˈfɪstɪkeɪtɪd/', 'adj.', '复杂的/老练的', 'sophist诡辩家 + -icated形容词 → 精于世故的 → 复杂的', 'soph', '/sɒf/', '智慧', ['philosophy of life 人生哲学', 'sophisticated technology 先进技术', 'sophomore year 大二学年', 'pansophic knowledge 全知'], ['sophisticated technology 先进技术', 'highly sophisticated 高度复杂']),
      createWord('sophomore', '/ˈsɒfəmɔːr/', 'n.', '大二学生', 'soph智慧 + moros愚蠢 → 半聪明半愚蠢 → 大二学生', 'soph', '/sɒf/', '智慧', ['philosophy of life 人生哲学', 'sophisticated technology 先进技术', 'sophomore year 大二学年', 'pansophic knowledge 全知'], ['sophomore year 大二学年', 'college sophomore 大学二年级学生']),
      createWord('sophist', '/ˈsɒfɪst/', 'n.', '诡辩家', 'soph智慧 + -ist人 → 自称有智慧的人 → 诡辩家', 'soph', '/sɒf/', '智慧', ['philosophy of life 人生哲学', 'sophisticated technology 先进技术', 'sophomore year 大二学年', 'pansophic knowledge 全知'], ['ancient sophist 古代诡辩家', 'political sophist 政治诡辩家'])
    ],
    phrases: ['philosophy of life 人生哲学', 'sophisticated technology 先进技术', 'sophomore year 大二学年', 'pansophic knowledge 全知'],
    mnemonic: 'soph（智慧）→ 睿智思辨 → 智慧'
  },
  {
    id: 11094, root: 'spect', phonetic: '/spekt/', partOfSpeech: 'v.', meaning: '看', frequency: 144,
    words: [
      createWord('inspect', '/ɪnˈspekt/', 'v.', '检查', 'in里面 + spect看 → 往里面看 → 检查', 'spect', '/spekt/', '看', ['inspect the site 检查现场', 'respect for 尊重', 'prospect for ...的前景', 'suspect in 嫌疑人'], ['inspect the site 检查现场', 'inspect goods 检查货物']),
      createWord('respect', '/rɪˈspekt/', 'n./v.', '尊重', 're再 + spect看 → 再看一眼 → 尊重', 'spect', '/spekt/', '看', ['inspect the site 检查现场', 'respect for 尊重', 'prospect for ...的前景', 'suspect in 嫌疑人'], ['respect for 尊重', 'show respect 表示尊重']),
      createWord('prospect', '/ˈprɒspekt/', 'n.', '前景', 'pro向前 + spect看 → 向前看 → 前景', 'spect', '/spekt/', '看', ['inspect the site 检查现场', 'respect for 尊重', 'prospect for ...的前景', 'suspect in 嫌疑人'], ['prospect for ...的前景', 'career prospect 职业前景']),
      createWord('suspect', '/səˈspekt/', 'v./n.', '怀疑/嫌疑人', 'su(s)下面 + spect看 → 在下面偷偷看 → 怀疑', 'spect', '/spekt/', '看', ['inspect the site 检查现场', 'respect for 尊重', 'prospect for ...的前景', 'suspect in 嫌疑人'], ['suspect in 嫌疑人', 'prime suspect 主要嫌疑人'])
    ],
    phrases: ['inspect the site 检查现场', 'respect for 尊重', 'prospect for ...的前景', 'suspect in 嫌疑人'],
    mnemonic: 'spect（看）→ 目光聚焦 → 看'
  },
  {
    id: 11095, root: 'spher', phonetic: '/sfɪər/', partOfSpeech: 'n.', meaning: '球/圈', frequency: 145,
    words: [
      createWord('sphere', '/sfɪər/', 'n.', '球体/领域', 'spher本身是词根，表示球/圈', 'spher', '/sfɪər/', '球/圈', ['sphere of influence 势力范围', 'atmosphere of ...的氛围', 'hemisphere of ...的半球', 'biosphere reserve 生物圈保护区'], ['sphere of influence 势力范围', 'influence sphere 影响范围']),
      createWord('atmosphere', '/ˈætməsfɪər/', 'n.', '大气/氛围', 'atmo蒸汽 + spher球 → 蒸汽球 → 大气', 'spher', '/sfɪər/', '球/圈', ['sphere of influence 势力范围', 'atmosphere of ...的氛围', 'hemisphere of ...的半球', 'biosphere reserve 生物圈保护区'], ['atmosphere of ...的氛围', 'friendly atmosphere 友好氛围']),
      createWord('hemisphere', '/ˈhemɪsfɪər/', 'n.', '半球', 'hemi半 + spher球 → 半个球 → 半球', 'spher', '/sfɪər/', '球/圈', ['sphere of influence 势力范围', 'atmosphere of ...的氛围', 'hemisphere of ...的半球', 'biosphere reserve 生物圈保护区'], ['hemisphere of ...的半球', 'northern hemisphere 北半球']),
      createWord('biosphere', '/ˈbaɪəʊsfɪər/', 'n.', '生物圈', 'bio生命 + spher球 → 生命之球 → 生物圈', 'spher', '/sfɪər/', '球/圈', ['sphere of influence 势力范围', 'atmosphere of ...的氛围', 'hemisphere of ...的半球', 'biosphere reserve 生物圈保护区'], ['biosphere reserve 生物圈保护区', 'protect the biosphere 保护生物圈'])
    ],
    phrases: ['sphere of influence 势力范围', 'atmosphere of ...的氛围', 'hemisphere of ...的半球', 'biosphere reserve 生物圈保护区'],
    mnemonic: 'spher（球）→ 圆球世界 → 球/圈'
  },
  {
    id: 11096, root: 'therm', phonetic: '/θɜːrm/', partOfSpeech: 'n.', meaning: '热', frequency: 146,
    words: [
      createWord('thermal', '/ˈθɜːrml/', 'adj.', '热的', 'therm热 + -al形容词 → 与热有关的 → 热的', 'therm', '/θɜːrm/', '热', ['thermal energy 热能', 'thermometer reading 温度计读数', 'hypothermia risk 低体温风险', 'thermos bottle 热水瓶'], ['thermal energy 热能', 'thermal power 火力发电']),
      createWord('thermometer', '/θərˈmɒmɪtər/', 'n.', '温度计', 'therm热 + meter测量 → 测量热的工具 → 温度计', 'therm', '/θɜːrm/', '热', ['thermal energy 热能', 'thermometer reading 温度计读数', 'hypothermia risk 低体温风险', 'thermos bottle 热水瓶'], ['thermometer reading 温度计读数', 'read the thermometer 读温度计']),
      createWord('hypothermia', '/ˌhaɪpəʊˈθɜːrmiə/', 'n.', '低体温', 'hypo低于 + therm热 + -ia病症 → 热量过低 → 低体温', 'therm', '/θɜːrm/', '热', ['thermal energy 热能', 'thermometer reading 温度计读数', 'hypothermia risk 低体温风险', 'thermos bottle 热水瓶'], ['hypothermia risk 低体温风险', 'severe hypothermia 严重低体温']),
      createWord('thermos', '/ˈθɜːrməs/', 'n.', '热水瓶', 'therm热 + -os名词 → 保持热的容器 → 热水瓶', 'therm', '/θɜːrm/', '热', ['thermal energy 热能', 'thermometer reading 温度计读数', 'hypothermia risk 低体温风险', 'thermos bottle 热水瓶'], ['thermos bottle 热水瓶', 'fill the thermos 装热水瓶'])
    ],
    phrases: ['thermal energy 热能', 'thermometer reading 温度计读数', 'hypothermia risk 低体温风险', 'thermos bottle 热水瓶'],
    mnemonic: 'therm（热）→ 温度热量 → 热'
  },
  {
    id: 11097, root: 'tor', phonetic: '/tɔːr/', partOfSpeech: 'v.', meaning: '扭转', frequency: 147,
    words: [
      createWord('torture', '/ˈtɔːrtʃər/', 'n./v.', '折磨', 'tort扭 + -ure名词 → 扭曲身心 → 折磨', 'tor', '/tɔːr/', '扭转', ['torture method 折磨方法', 'torment of ...的痛苦', 'distort the truth 歪曲真相', 'contort the body 扭曲身体'], ['torture method 折磨方法', 'undergo torture 遭受折磨']),
      createWord('torment', '/tɔːrˈment/', 'n./v.', '痛苦/折磨', 'torn扭 + -ment名词 → 扭曲的感觉 → 痛苦', 'tor', '/tɔːr/', '扭转', ['torture method 折磨方法', 'torment of ...的痛苦', 'distort the truth 歪曲真相', 'contort the body 扭曲身体'], ['torment of ...的痛苦', 'mental torment 精神折磨']),
      createWord('distort', '/dɪˈstɔːrt/', 'v.', '歪曲', 'dis离开 + tort扭 → 扭离正轨 → 歪曲', 'tor', '/tɔːr/', '扭转', ['torture method 折磨方法', 'torment of ...的痛苦', 'distort the truth 歪曲真相', 'contort the body 扭曲身体'], ['distort the truth 歪曲真相', 'distort reality 歪曲现实']),
      createWord('contort', '/kənˈtɔːrt/', 'v.', '扭曲', 'con完全 + tort扭 → 完全扭转 → 扭曲', 'tor', '/tɔːr/', '扭转', ['torture method 折磨方法', 'torment of ...的痛苦', 'distort the truth 歪曲真相', 'contort the body 扭曲身体'], ['contort the body 扭曲身体', 'contort in pain 痛苦地扭曲'])
    ],
    phrases: ['torture method 折磨方法', 'torment of ...的痛苦', 'distort the truth 歪曲真相', 'contort the body 扭曲身体'],
    mnemonic: 'tor（扭转）→ 扭曲变形 → 扭转'
  },
  {
    id: 11098, root: 'tox', phonetic: '/tɒks/', partOfSpeech: 'n.', meaning: '毒', frequency: 148,
    words: [
      createWord('toxic', '/ˈtɒksɪk/', 'adj.', '有毒的', 'tox毒 + -ic形容词 → 有毒的', 'tox', '/tɒks/', '毒', ['toxic waste 有毒废物', 'intoxicated state 醉酒状态', 'detox program 戒毒计划', 'toxin removal 毒素清除'], ['toxic waste 有毒废物', 'highly toxic 剧毒']),
      createWord('intoxicate', '/ɪnˈtɒksɪkeɪt/', 'v.', '使中毒/使醉', 'in进入 + toxic毒 + -ate动词 → 毒进入 → 使中毒', 'tox', '/tɒks/', '毒', ['toxic waste 有毒废物', 'intoxicated state 醉酒状态', 'detox program 戒毒计划', 'toxin removal 毒素清除'], ['intoxicated state 醉酒状态', 'alcohol intoxicate 酒精中毒']),
      createWord('detox', '/diːˈtɒks/', 'v./n.', '排毒', 'de去除 + tox毒 → 去除毒素 → 排毒', 'tox', '/tɒks/', '毒', ['toxic waste 有毒废物', 'intoxicated state 醉酒状态', 'detox program 戒毒计划', 'toxin removal 毒素清除'], ['detox program 戒毒计划', 'go on a detox 进行排毒']),
      createWord('toxin', '/ˈtɒksɪn/', 'n.', '毒素', 'tox毒 + -in物质 → 有毒物质 → 毒素', 'tox', '/tɒks/', '毒', ['toxic waste 有毒废物', 'intoxicated state 醉酒状态', 'detox program 戒毒计划', 'toxin removal 毒素清除'], ['toxin removal 毒素清除', 'bacterial toxin 细菌毒素'])
    ],
    phrases: ['toxic waste 有毒废物', 'intoxicated state 醉酒状态', 'detox program 戒毒计划', 'toxin removal 毒素清除'],
    mnemonic: 'tox（毒）→ 有害物质 → 毒'
  },
  {
    id: 11099, root: 'vent', phonetic: '/vent/', partOfSpeech: 'v.', meaning: '来', frequency: 149,
    words: [
      createWord('venture', '/ˈventʃər/', 'n./v.', '冒险', 'vent来 + -ure名词 → 来到未知 → 冒险', 'vent', '/vent/', '来', ['business venture 商业冒险', 'prevent from 阻止', 'convene a meeting 召开会议', 'intervene in 干预'], ['business venture 商业冒险', 'joint venture 合资企业']),
      createWord('prevent', '/prɪˈvent/', 'v.', '预防', 'pre前 + vent来 → 提前来处理 → 预防', 'vent', '/vent/', '来', ['business venture 商业冒险', 'prevent from 阻止', 'convene a meeting 召开会议', 'intervene in 干预'], ['prevent from 阻止', 'prevent disease 预防疾病']),
      createWord('convene', '/kənˈviːn/', 'v.', '召集', 'con一起 + ven来 + e → 来到一起 → 召集', 'vent', '/vent/', '来', ['business venture 商业冒险', 'prevent from 阻止', 'convene a meeting 召开会议', 'intervene in 干预'], ['convene a meeting 召开会议', 'convene parliament 召集议会']),
      createWord('intervene', '/ˌɪntərˈviːn/', 'v.', '干预', 'inter在中间 + ven来 + e → 来到中间 → 干预', 'vent', '/vent/', '来', ['business venture 商业冒险', 'prevent from 阻止', 'convene a meeting 召开会议', 'intervene in 干预'], ['intervene in 干预', 'military intervene 军事干预'])
    ],
    phrases: ['business venture 商业冒险', 'prevent from 阻止', 'convene a meeting 召开会议', 'intervene in 干预'],
    mnemonic: 'vent（来）→ 到来发生 → 来'
  },
  {
    id: 11100, root: 'verb', phonetic: '/vɜːrb/', partOfSpeech: 'n.', meaning: '词语', frequency: 150,
    words: [
      createWord('verb', '/vɜːrb/', 'n.', '动词', 'verb本身是词根，表示词语', 'verb', '/vɜːrb/', '词语', ['action verb 动作动词', 'verbal communication 口头交流', 'verbatim transcript 逐字记录', 'proverb says 谚语说'], ['action verb 动作动词', 'irregular verb 不规则动词']),
      createWord('verbal', '/ˈvɜːrbl/', 'adj.', '口头的', 'verb词语 + -al形容词 → 与词语有关的 → 口头的', 'verb', '/vɜːrb/', '词语', ['action verb 动作动词', 'verbal communication 口头交流', 'verbatim transcript 逐字记录', 'proverb says 谚语说'], ['verbal communication 口头交流', 'verbal agreement 口头协议']),
      createWord('verbatim', '/vɜːrˈbeɪtɪm/', 'adv./adj.', '逐字地', 'verb词语 + -atim → 按词语地 → 逐字地', 'verb', '/vɜːrb/', '词语', ['action verb 动作动词', 'verbal communication 口头交流', 'verbatim transcript 逐字记录', 'proverb says 谚语说'], ['verbatim transcript 逐字记录', 'report verbatim 逐字报告']),
      createWord('proverb', '/ˈprɒvɜːrb/', 'n.', '谚语', 'pro公开 + verb词语 → 公开的词语 → 谚语', 'verb', '/vɜːrb/', '词语', ['action verb 动作动词', 'verbal communication 口头交流', 'verbatim transcript 逐字记录', 'proverb says 谚语说'], ['proverb says 谚语说', 'ancient proverb 古老的谚语'])
    ],
    phrases: ['action verb 动作动词', 'verbal communication 口头交流', 'verbatim transcript 逐字记录', 'proverb says 谚语说'],
    mnemonic: 'verb（词语）→ 语言表达 → 词语'
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
console.log('Added ' + rootsData.length + ' roots (11081-11100)');
