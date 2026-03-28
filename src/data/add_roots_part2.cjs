const fs = require('fs');

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

const rootsData = [
  // 11061-11080
  {
    id: 11061, root: 'voc', phonetic: '/vəʊk/', partOfSpeech: 'v.', meaning: '声音/叫喊', frequency: 111,
    words: [
      createWord('vocal', '/ˈvəʊkl/', 'adj.', '声音的', 'voc声音 + -al形容词 → 声音的', 'voc', '/vəʊk/', '声音/叫喊', ['vocal cords 声带', 'vocal music 声乐', 'advocate for 倡导', 'vocabulary building 词汇积累'], ['vocal cords 声带', 'vocal performance 声乐表演']),
      createWord('advocate', '/ˈædvəkeɪt/', 'v.', '倡导', 'ad(to) + voc声音 + -ate动词 → 发声支持 → 倡导', 'voc', '/vəʊk/', '声音/叫喊', ['vocal cords 声带', 'vocal music 声乐', 'advocate for 倡导', 'vocabulary building 词汇积累'], ['advocate for 倡导', 'strong advocate 坚定支持者']),
      createWord('vocabulary', '/vəˈkæbjələri/', 'n.', '词汇', 'voc声音 + abul + -ary集合 → 声音的集合 → 词汇', 'voc', '/vəʊk/', '声音/叫喊', ['vocal cords 声带', 'vocal music 声乐', 'advocate for 倡导', 'vocabulary building 词汇积累'], ['vocabulary building 词汇积累', 'enrich vocabulary 丰富词汇']),
      createWord('evoke', '/ɪˈvəʊk/', 'v.', '唤起', 'e(out) + voke(voc)叫喊 → 喊出来 → 唤起', 'voc', '/vəʊk/', '声音/叫喊', ['vocal cords 声带', 'vocal music 声乐', 'advocate for 倡导', 'vocabulary building 词汇积累'], ['evoke memories 唤起回忆', 'evoke emotion 唤起情感'])
    ],
    phrases: ['vocal cords 声带', 'vocal music 声乐', 'advocate for 倡导', 'vocabulary building 词汇积累'],
    mnemonic: 'voc（声音）→ 发声 → 声音/叫喊'
  },
  {
    id: 11062, root: 'volv', phonetic: '/vɒlv/', partOfSpeech: 'v.', meaning: '滚动/转', frequency: 112,
    words: [
      createWord('evolve', '/ɪˈvɒlv/', 'v.', '进化', 'e(out) + volv滚动 + e → 向外展开 → 进化', 'volv', '/vɒlv/', '滚动/转', ['evolve from 从...进化', 'revolution in ...的革命', 'involve in 参与', 'volume of ...的体积'], ['evolve from 从...进化', 'evolve into 进化成']),
      createWord('revolution', '/ˌrevəˈluːʃn/', 'n.', '革命', 're回 + volut(volv)滚动 + -ion名词 → 翻转 → 革命', 'volv', '/vɒlv/', '滚动/转', ['evolve from 从...进化', 'revolution in ...的革命', 'involve in 参与', 'volume of ...的体积'], ['revolution in ...的革命', 'industrial revolution 工业革命']),
      createWord('involve', '/ɪnˈvɒlv/', 'v.', '涉及', 'in进入 + volv滚动 + e → 卷入 → 涉及', 'volv', '/vɒlv/', '滚动/转', ['evolve from 从...进化', 'revolution in ...的革命', 'involve in 参与', 'volume of ...的体积'], ['involve in 参与', 'get involved 卷入其中']),
      createWord('volume', '/ˈvɒljuːm/', 'n.', '体积/卷', 'volum(volv)卷 + e → 卷起来的东西 → 卷', 'volv', '/vɒlv/', '滚动/转', ['evolve from 从...进化', 'revolution in ...的革命', 'involve in 参与', 'volume of ...的体积'], ['volume of ...的体积', 'turn up the volume 调高音量'])
    ],
    phrases: ['evolve from 从...进化', 'revolution in ...的革命', 'involve in 参与', 'volume of ...的体积'],
    mnemonic: 'volv（滚动）→ 翻滚转动 → 滚动/转'
  },
  {
    id: 11063, root: 'wis', phonetic: '/waɪz/', partOfSpeech: 'adj.', meaning: '智慧', frequency: 113,
    words: [
      createWord('wise', '/waɪz/', 'adj.', '明智的', 'wis智慧 + e → 明智的', 'wis', '/waɪz/', '智慧', ['wise decision 明智的决定', 'wisdom of ...的智慧', 'otherwise known as 否则称为', 'likewise 同样地'], ['wise decision 明智的决定', 'it is wise to 明智的是']),
      createWord('wisdom', '/ˈwɪzdəm/', 'n.', '智慧', 'wis智慧 + -dom名词 → 智慧的状态 → 智慧', 'wis', '/waɪz/', '智慧', ['wise decision 明智的决定', 'wisdom of ...的智慧', 'otherwise known as 否则称为', 'likewise 同样地'], ['wisdom of ...的智慧', 'conventional wisdom 普遍观点']),
      createWord('otherwise', '/ˈʌðərwaɪz/', 'adv.', '否则', 'other其他 + wise方式 → 其他方式 → 否则', 'wis', '/waɪz/', '智慧', ['wise decision 明智的决定', 'wisdom of ...的智慧', 'otherwise known as 否则称为', 'likewise 同样地'], ['otherwise known as 否则称为', 'or otherwise 或其他']),
      createWord('likewise', '/ˈlaɪkwaɪz/', 'adv.', '同样地', 'like相似 + wise方式 → 相似的方式 → 同样地', 'wis', '/waɪz/', '智慧', ['wise decision 明智的决定', 'wisdom of ...的智慧', 'otherwise known as 否则称为', 'likewise 同样地'], ['likewise 同样地', 'think likewise 有同样的想法'])
    ],
    phrases: ['wise decision 明智的决定', 'wisdom of ...的智慧', 'otherwise known as 否则称为', 'likewise 同样地'],
    mnemonic: 'wis（智慧）→ 聪明才智 → 智慧'
  },
  {
    id: 11064, root: 'art', phonetic: '/ɑːrt/', partOfSpeech: 'n.', meaning: '艺术/技巧', frequency: 114,
    words: [
      createWord('art', '/ɑːrt/', 'n.', '艺术', 'art本身是词根，表示艺术/技巧', 'art', '/ɑːrt/', '艺术/技巧', ['work of art 艺术品', 'artist of ...的艺术家', 'artificial intelligence 人工智能', 'artistic talent 艺术天赋'], ['work of art 艺术品', 'modern art 现代艺术']),
      createWord('artist', '/ˈɑːrtɪst/', 'n.', '艺术家', 'art艺术 + -ist人 → 从事艺术的人 → 艺术家', 'art', '/ɑːrt/', '艺术/技巧', ['work of art 艺术品', 'artist of ...的艺术家', 'artificial intelligence 人工智能', 'artistic talent 艺术天赋'], ['artist of ...的艺术家', 'great artist 伟大的艺术家']),
      createWord('artificial', '/ˌɑːrtɪˈfɪʃl/', 'adj.', '人工的', 'art技巧 + fic做 + -ial形容词 → 用技巧做出来的 → 人工的', 'art', '/ɑːrt/', '艺术/技巧', ['work of art 艺术品', 'artist of ...的艺术家', 'artificial intelligence 人工智能', 'artistic talent 艺术天赋'], ['artificial intelligence 人工智能', 'artificial light 人造光']),
      createWord('artistic', '/ɑːrˈtɪstɪk/', 'adj.', '艺术的', 'art艺术 + -istic形容词 → 艺术的', 'art', '/ɑːrt/', '艺术/技巧', ['work of art 艺术品', 'artist of ...的艺术家', 'artificial intelligence 人工智能', 'artistic talent 艺术天赋'], ['artistic talent 艺术天赋', 'artistic creation 艺术创作'])
    ],
    phrases: ['work of art 艺术品', 'artist of ...的艺术家', 'artificial intelligence 人工智能', 'artistic talent 艺术天赋'],
    mnemonic: 'art（艺术）→ 技艺创造 → 艺术/技巧'
  },
  {
    id: 11065, root: 'astr', phonetic: '/æstr/', partOfSpeech: 'n.', meaning: '星', frequency: 115,
    words: [
      createWord('astronomy', '/əˈstrɒnəmi/', 'n.', '天文学', 'astr星 + -onomy学科 → 研究星星的学科 → 天文学', 'astr', '/æstr/', '星', ['astronomy research 天文学研究', 'astronaut training 宇航员训练', 'astral projection 星体投射', 'disaster relief 灾难救援'], ['astronomy research 天文学研究', 'study astronomy 研究天文学']),
      createWord('astronaut', '/ˈæstrənɔːt/', 'n.', '宇航员', 'astr星 + -naut航行者 → 星际航行者 → 宇航员', 'astr', '/æstr/', '星', ['astronomy research 天文学研究', 'astronaut training 宇航员训练', 'astral projection 星体投射', 'disaster relief 灾难救援'], ['astronaut training 宇航员训练', 'become an astronaut 成为宇航员']),
      createWord('astral', '/ˈæstrəl/', 'adj.', '星的/星体的', 'astr星 + -al形容词 → 星的', 'astr', '/æstr/', '星', ['astronomy research 天文学研究', 'astronaut training 宇航员训练', 'astral projection 星体投射', 'disaster relief 灾难救援'], ['astral projection 星体投射', 'astral body 星体']),
      createWord('disaster', '/dɪˈzɑːstər/', 'n.', '灾难', 'dis坏 + aster星 → 星位不正 → 灾难', 'astr', '/æstr/', '星', ['astronomy research 天文学研究', 'astronaut training 宇航员训练', 'astral projection 星体投射', 'disaster relief 灾难救援'], ['disaster relief 灾难救援', 'natural disaster 自然灾害'])
    ],
    phrases: ['astronomy research 天文学研究', 'astronaut training 宇航员训练', 'astral projection 星体投射', 'disaster relief 灾难救援'],
    mnemonic: 'astr（星）→ 星辰大海 → 星'
  },
  {
    id: 11066, root: 'bio', phonetic: '/baɪəʊ/', partOfSpeech: 'n.', meaning: '生命', frequency: 116,
    words: [
      createWord('biology', '/baɪˈɒlədʒi/', 'n.', '生物学', 'bio生命 + -logy学科 → 研究生命的学科 → 生物学', 'bio', '/baɪəʊ/', '生命', ['biology class 生物课', 'biography of ...的传记', 'biodegradable material 可降解材料', 'antibiotic resistance 抗生素耐药性'], ['biology class 生物课', 'study biology 学习生物学']),
      createWord('biography', '/baɪˈɒɡrəfi/', 'n.', '传记', 'bio生命 + graph写 + -y名词 → 记录生命的文字 → 传记', 'bio', '/baɪəʊ/', '生命', ['biology class 生物课', 'biography of ...的传记', 'biodegradable material 可降解材料', 'antibiotic resistance 抗生素耐药性'], ['biography of ...的传记', 'write a biography 写传记']),
      createWord('biodegradable', '/ˌbaɪəʊdɪˈɡreɪdəbl/', 'adj.', '可降解的', 'bio生命 + degrad降解 + -able形容词 → 能被生命降解的 → 可降解的', 'bio', '/baɪəʊ/', '生命', ['biology class 生物课', 'biography of ...的传记', 'biodegradable material 可降解材料', 'antibiotic resistance 抗生素耐药性'], ['biodegradable material 可降解材料', 'biodegradable plastic 可降解塑料']),
      createWord('antibiotic', '/ˌæntibaɪˈɒtɪk/', 'n.', '抗生素', 'anti抗 + bio生命 + -tic名词 → 抗生命的物质 → 抗生素', 'bio', '/baɪəʊ/', '生命', ['biology class 生物课', 'biography of ...的传记', 'biodegradable material 可降解材料', 'antibiotic resistance 抗生素耐药性'], ['antibiotic resistance 抗生素耐药性', 'take antibiotics 服用抗生素'])
    ],
    phrases: ['biology class 生物课', 'biography of ...的传记', 'biodegradable material 可降解材料', 'antibiotic resistance 抗生素耐药性'],
    mnemonic: 'bio（生命）→ 生物之源 → 生命'
  },
  {
    id: 11067, root: 'chron', phonetic: '/krɒn/', partOfSpeech: 'n.', meaning: '时间', frequency: 117,
    words: [
      createWord('chronic', '/ˈkrɒnɪk/', 'adj.', '慢性的', 'chron时间 + -ic形容词 → 长时间的 → 慢性的', 'chron', '/krɒn/', '时间', ['chronic disease 慢性病', 'chronological order 时间顺序', 'synchronize with 与...同步', 'chronicle of ...的编年史'], ['chronic disease 慢性病', 'chronic problem 慢性问题']),
      createWord('chronological', '/ˌkrɒnəˈlɒdʒɪkl/', 'adj.', '按时间顺序的', 'chron时间 + -ological形容词 → 关于时间的 → 按时间顺序的', 'chron', '/krɒn/', '时间', ['chronic disease 慢性病', 'chronological order 时间顺序', 'synchronize with 与...同步', 'chronicle of ...的编年史'], ['chronological order 时间顺序', 'chronological age 实际年龄']),
      createWord('synchronize', '/ˈsɪŋkrənaɪz/', 'v.', '同步', 'syn相同 + chron时间 + -ize动词 → 使时间相同 → 同步', 'chron', '/krɒn/', '时间', ['chronic disease 慢性病', 'chronological order 时间顺序', 'synchronize with 与...同步', 'chronicle of ...的编年史'], ['synchronize with 与...同步', 'synchronize data 同步数据']),
      createWord('chronicle', '/ˈkrɒnɪkl/', 'n.', '编年史', 'chron时间 + -icle名词 → 时间记录 → 编年史', 'chron', '/krɒn/', '时间', ['chronic disease 慢性病', 'chronological order 时间顺序', 'synchronize with 与...同步', 'chronicle of ...的编年史'], ['chronicle of ...的编年史', 'historical chronicle 历史编年史'])
    ],
    phrases: ['chronic disease 慢性病', 'chronological order 时间顺序', 'synchronize with 与...同步', 'chronicle of ...的编年史'],
    mnemonic: 'chron（时间）→ 时光流逝 → 时间'
  },
  {
    id: 11068, root: 'cycl', phonetic: '/saɪkl/', partOfSpeech: 'n.', meaning: '圆/循环', frequency: 118,
    words: [
      createWord('cycle', '/ˈsaɪkl/', 'n./v.', '循环/骑自行车', 'cycl圆 + e → 圆圈运动 → 循环', 'cycl', '/saɪkl/', '圆/循环', ['life cycle 生命周期', 'bicycle ride 骑自行车', 'recycle waste 回收废物', 'cyclone warning 飓风预警'], ['life cycle 生命周期', 'break the cycle 打破循环']),
      createWord('bicycle', '/ˈbaɪsɪkl/', 'n.', '自行车', 'bi二 + cycl圆 + e → 两个轮子的车 → 自行车', 'cycl', '/saɪkl/', '圆/循环', ['life cycle 生命周期', 'bicycle ride 骑自行车', 'recycle waste 回收废物', 'cyclone warning 飓风预警'], ['bicycle ride 骑自行车', 'ride a bicycle 骑自行车']),
      createWord('recycle', '/riːˈsaɪkl/', 'v.', '回收', 're再 + cycl循环 + e → 再次循环 → 回收', 'cycl', '/saɪkl/', '圆/循环', ['life cycle 生命周期', 'bicycle ride 骑自行车', 'recycle waste 回收废物', 'cyclone warning 飓风预警'], ['recycle waste 回收废物', 'recycle plastic 回收塑料']),
      createWord('cyclone', '/ˈsaɪkləʊn/', 'n.', '飓风', 'cycl圆 + -one名词 → 圆形旋转的风 → 飓风', 'cycl', '/saɪkl/', '圆/循环', ['life cycle 生命周期', 'bicycle ride 骑自行车', 'recycle waste 回收废物', 'cyclone warning 飓风预警'], ['cyclone warning 飓风预警', 'tropical cyclone 热带气旋'])
    ],
    phrases: ['life cycle 生命周期', 'bicycle ride 骑自行车', 'recycle waste 回收废物', 'cyclone warning 飓风预警'],
    mnemonic: 'cycl（圆）→ 圆周运动 → 圆/循环'
  },
  {
    id: 11069, root: 'dem', phonetic: '/dem/', partOfSpeech: 'n.', meaning: '人民', frequency: 119,
    words: [
      createWord('democracy', '/dɪˈmɒkrəsi/', 'n.', '民主', 'dem人民 + -ocracy统治 → 人民统治 → 民主', 'dem', '/dem/', '人民', ['democracy system 民主制度', 'demographic change 人口变化', 'epidemic disease 流行病', 'pandemic crisis 全球疫情危机'], ['democracy system 民主制度', 'liberal democracy 自由民主']),
      createWord('demographic', '/ˌdeməˈɡræfɪk/', 'adj.', '人口的', 'dem人民 + graph写 + -ic形容词 → 描述人民的 → 人口的', 'dem', '/dem/', '人民', ['democracy system 民主制度', 'demographic change 人口变化', 'epidemic disease 流行病', 'pandemic crisis 全球疫情危机'], ['demographic change 人口变化', 'demographic data 人口数据']),
      createWord('epidemic', '/ˌepɪˈdemɪk/', 'n./adj.', '流行病/流行的', 'epi在...之中 + dem人民 + -ic形容词 → 在人民中的 → 流行的', 'dem', '/dem/', '人民', ['democracy system 民主制度', 'demographic change 人口变化', 'epidemic disease 流行病', 'pandemic crisis 全球疫情危机'], ['epidemic disease 流行病', 'flu epidemic 流感流行']),
      createWord('pandemic', '/pænˈdemɪk/', 'n./adj.', '全球流行病', 'pan全 + dem人民 + -ic形容词 → 全人民的 → 全球流行病', 'dem', '/dem/', '人民', ['democracy system 民主制度', 'demographic change 人口变化', 'epidemic disease 流行病', 'pandemic crisis 全球疫情危机'], ['pandemic crisis 全球疫情危机', 'COVID-19 pandemic 新冠疫情'])
    ],
    phrases: ['democracy system 民主制度', 'demographic change 人口变化', 'epidemic disease 流行病', 'pandemic crisis 全球疫情危机'],
    mnemonic: 'dem（人民）→ 大众百姓 → 人民'
  },
  {
    id: 11070, root: 'doc', phonetic: '/dɒk/', partOfSpeech: 'v.', meaning: '教导', frequency: 120,
    words: [
      createWord('doctor', '/ˈdɒktər/', 'n.', '医生/博士', 'doc教导 + -tor人 → 教导的人 → 医生/博士', 'doc', '/dɒk/', '教导', ['see a doctor 看医生', 'document the process 记录过程', 'doctrine of ...的教义', 'documentary film 纪录片'], ['see a doctor 看医生', 'family doctor 家庭医生']),
      createWord('document', '/ˈdɒkjumənt/', 'n./v.', '文件/记录', 'doc教导 + -ument名词 → 教导的材料 → 文件', 'doc', '/dɒk/', '教导', ['see a doctor 看医生', 'document the process 记录过程', 'doctrine of ...的教义', 'documentary film 纪录片'], ['document the process 记录过程', 'official document 官方文件']),
      createWord('doctrine', '/ˈdɒktrɪn/', 'n.', '教义/学说', 'doc教导 + -trine名词 → 教导的内容 → 教义', 'doc', '/dɒk/', '教导', ['see a doctor 看医生', 'document the process 记录过程', 'doctrine of ...的教义', 'documentary film 纪录片'], ['doctrine of ...的教义', 'religious doctrine 宗教教义']),
      createWord('documentary', '/ˌdɒkjuˈmentri/', 'n./adj.', '纪录片/纪实的', 'document文件 + -ary名词/形容词 → 记录真实 → 纪录片', 'doc', '/dɒk/', '教导', ['see a doctor 看医生', 'document the process 记录过程', 'doctrine of ...的教义', 'documentary film 纪录片'], ['documentary film 纪录片', 'watch a documentary 看纪录片'])
    ],
    phrases: ['see a doctor 看医生', 'document the process 记录过程', 'doctrine of ...的教义', 'documentary film 纪录片'],
    mnemonic: 'doc（教导）→ 传授知识 → 教导'
  },
  // 11071-11080
  {
    id: 11071, root: 'fac', phonetic: '/fæk/', partOfSpeech: 'v.', meaning: '做/制作', frequency: 121,
    words: [
      createWord('factory', '/ˈfæktri/', 'n.', '工厂', 'fac做 + -tory场所 → 做东西的地方 → 工厂', 'fac', '/fæk/', '做/制作', ['factory worker 工厂工人', 'facilitate the process 促进过程', 'faculty member 教职员', 'factor in 考虑因素'], ['factory worker 工厂工人', 'work in a factory 在工厂工作']),
      createWord('facilitate', '/fəˈsɪlɪteɪt/', 'v.', '促进', 'fac做 + -ile容易 + -ate动词 → 容易做 → 促进', 'fac', '/fæk/', '做/制作', ['factory worker 工厂工人', 'facilitate the process 促进过程', 'faculty member 教职员', 'factor in 考虑因素'], ['facilitate the process 促进过程', 'facilitate communication 促进交流']),
      createWord('faculty', '/ˈfæklti/', 'n.', '教职员/能力', 'fac做 + -ulty名词 → 做事的能力 → 能力/教职员', 'fac', '/fæk/', '做/制作', ['factory worker 工厂工人', 'facilitate the process 促进过程', 'faculty member 教职员', 'factor in 考虑因素'], ['faculty member 教职员', 'faculty of law 法学院']),
      createWord('factor', '/ˈfæktər/', 'n.', '因素', 'fac做 + -tor名词 → 做事的原因 → 因素', 'fac', '/fæk/', '做/制作', ['factory worker 工厂工人', 'facilitate the process 促进过程', 'faculty member 教职员', 'factor in 考虑因素'], ['factor in 考虑因素', 'key factor 关键因素'])
    ],
    phrases: ['factory worker 工厂工人', 'facilitate the process 促进过程', 'faculty member 教职员', 'factor in 考虑因素'],
    mnemonic: 'fac（做）→ 动手制作 → 做/制作'
  },
  {
    id: 11072, root: 'geo', phonetic: '/dʒiːəʊ/', partOfSpeech: 'n.', meaning: '地球/土地', frequency: 122,
    words: [
      createWord('geography', '/dʒiˈɒɡrəfi/', 'n.', '地理', 'geo地球 + graph写 + -y名词 → 描述地球 → 地理', 'geo', '/dʒiːəʊ/', '地球/土地', ['geography class 地理课', 'geology research 地质研究', 'geometry problem 几何问题', 'geopolitical situation 地缘政治形势'], ['geography class 地理课', 'human geography 人文地理']),
      createWord('geology', '/dʒiˈɒlədʒi/', 'n.', '地质学', 'geo地球 + -logy学科 → 研究地球的学科 → 地质学', 'geo', '/dʒiːəʊ/', '地球/土地', ['geography class 地理课', 'geology research 地质研究', 'geometry problem 几何问题', 'geopolitical situation 地缘政治形势'], ['geology research 地质研究', 'study geology 学习地质学']),
      createWord('geometry', '/dʒiˈɒmətri/', 'n.', '几何', 'geo土地 + metr测量 + -y名词 → 测量土地 → 几何', 'geo', '/dʒiːəʊ/', '地球/土地', ['geography class 地理课', 'geology research 地质研究', 'geometry problem 几何问题', 'geopolitical situation 地缘政治形势'], ['geometry problem 几何问题', 'study geometry 学习几何']),
      createWord('geopolitical', '/ˌdʒiːəʊpəˈlɪtɪkl/', 'adj.', '地缘政治的', 'geo土地 + political政治的 → 与土地政治相关的 → 地缘政治的', 'geo', '/dʒiːəʊ/', '地球/土地', ['geography class 地理课', 'geology research 地质研究', 'geometry problem 几何问题', 'geopolitical situation 地缘政治形势'], ['geopolitical situation 地缘政治形势', 'geopolitical importance 地缘政治重要性'])
    ],
    phrases: ['geography class 地理课', 'geology research 地质研究', 'geometry problem 几何问题', 'geopolitical situation 地缘政治形势'],
    mnemonic: 'geo（地球）→ 大地母亲 → 地球/土地'
  },
  {
    id: 11073, root: 'graph', phonetic: '/ɡræf/', partOfSpeech: 'n./v.', meaning: '写/画', frequency: 123,
    words: [
      createWord('graph', '/ɡræf/', 'n.', '图表', 'graph本身是词根，表示写/画', 'graph', '/ɡræf/', '写/画', ['bar graph 柱状图', 'photograph of ...的照片', 'autograph signing 签名', 'paragraph in 在...段落'], ['bar graph 柱状图', 'line graph 折线图']),
      createWord('photograph', '/ˈfəʊtəɡrɑːf/', 'n./v.', '照片/拍照', 'photo光 + graph画 → 用光画出来的 → 照片', 'graph', '/ɡræf/', '写/画', ['bar graph 柱状图', 'photograph of ...的照片', 'autograph signing 签名', 'paragraph in 在...段落'], ['photograph of ...的照片', 'take a photograph 拍照']),
      createWord('autograph', '/ˈɔːtəɡrɑːf/', 'n./v.', '签名', 'auto自己 + graph写 → 自己写的 → 签名', 'graph', '/ɡræf/', '写/画', ['bar graph 柱状图', 'photograph of ...的照片', 'autograph signing 签名', 'paragraph in 在...段落'], ['autograph signing 签名', 'ask for an autograph 索要签名']),
      createWord('paragraph', '/ˈpærəɡrɑːf/', 'n.', '段落', 'para旁边 + graph写 → 写在旁边 → 段落', 'graph', '/ɡræf/', '写/画', ['bar graph 柱状图', 'photograph of ...的照片', 'autograph signing 签名', 'paragraph in 在...段落'], ['paragraph in 在...段落', 'write a paragraph 写一段'])
    ],
    phrases: ['bar graph 柱状图', 'photograph of ...的照片', 'autograph signing 签名', 'paragraph in 在...段落'],
    mnemonic: 'graph（写/画）→ 书写绘制 → 写/画'
  },
  {
    id: 11074, root: 'hydr', phonetic: '/haɪdr/', partOfSpeech: 'n.', meaning: '水', frequency: 124,
    words: [
      createWord('hydrate', '/ˈhaɪdreɪt/', 'v.', '补水', 'hydr水 + -ate动词 → 补充水 → 补水', 'hydr', '/haɪdr/', '水', ['stay hydrated 保持水分', 'hydroelectric power 水力发电', 'hydrogen fuel 氢燃料', 'dehydrated food 脱水食品'], ['stay hydrated 保持水分', 'hydrate the skin 给皮肤补水']),
      createWord('hydroelectric', '/ˌhaɪdrəʊɪˈlektrɪk/', 'adj.', '水力发电的', 'hydr水 + electric电 → 用水发电的 → 水力发电的', 'hydr', '/haɪdr/', '水', ['stay hydrated 保持水分', 'hydroelectric power 水力发电', 'hydrogen fuel 氢燃料', 'dehydrated food 脱水食品'], ['hydroelectric power 水力发电', 'hydroelectric dam 水电站大坝']),
      createWord('hydrogen', '/ˈhaɪdrədʒən/', 'n.', '氢', 'hydr水 + -gen产生 → 产生水的元素 → 氢', 'hydr', '/haɪdr/', '水', ['stay hydrated 保持水分', 'hydroelectric power 水力发电', 'hydrogen fuel 氢燃料', 'dehydrated food 脱水食品'], ['hydrogen fuel 氢燃料', 'hydrogen bomb 氢弹']),
      createWord('dehydrate', '/diːˈhaɪdreɪt/', 'v.', '脱水', 'de去除 + hydr水 + -ate动词 → 去除水 → 脱水', 'hydr', '/haɪdr/', '水', ['stay hydrated 保持水分', 'hydroelectric power 水力发电', 'hydrogen fuel 氢燃料', 'dehydrated food 脱水食品'], ['dehydrated food 脱水食品', 'dehydrate quickly 快速脱水'])
    ],
    phrases: ['stay hydrated 保持水分', 'hydroelectric power 水力发电', 'hydrogen fuel 氢燃料', 'dehydrated food 脱水食品'],
    mnemonic: 'hydr（水）→ 水源之本 → 水'
  },
  {
    id: 11075, root: 'ject', phonetic: '/dʒekt/', partOfSpeech: 'v.', meaning: '投掷', frequency: 125,
    words: [
      createWord('project', '/ˈprɒdʒekt/', 'n./v.', '项目/投射', 'pro向前 + ject投掷 → 向前投 → 项目', 'ject', '/dʒekt/', '投掷', ['project plan 项目计划', 'object to 反对', 'reject the proposal 拒绝提议', 'subject to 受...约束'], ['project plan 项目计划', 'manage a project 管理项目']),
      createWord('object', '/ˈɒbdʒekt/', 'n./v.', '物体/反对', 'ob相反 + ject投掷 → 投向相反方向 → 反对', 'ject', '/dʒekt/', '投掷', ['project plan 项目计划', 'object to 反对', 'reject the proposal 拒绝提议', 'subject to 受...约束'], ['object to 反对', 'material object 物质对象']),
      createWord('reject', '/rɪˈdʒekt/', 'v.', '拒绝', 're回 + ject投掷 → 投回去 → 拒绝', 'ject', '/dʒekt/', '投掷', ['project plan 项目计划', 'object to 反对', 'reject the proposal 拒绝提议', 'subject to 受...约束'], ['reject the proposal 拒绝提议', 'reject an application 拒绝申请']),
      createWord('subject', '/ˈsʌbdʒekt/', 'n./adj.', '主题/受...支配的', 'sub下面 + ject投掷 → 投在下面 → 受支配的', 'ject', '/dʒekt/', '投掷', ['project plan 项目计划', 'object to 反对', 'reject the proposal 拒绝提议', 'subject to 受...约束'], ['subject to 受...约束', 'subject matter 主题内容'])
    ],
    phrases: ['project plan 项目计划', 'object to 反对', 'reject the proposal 拒绝提议', 'subject to 受...约束'],
    mnemonic: 'ject（投掷）→ 用力抛出 → 投掷'
  },
  {
    id: 11076, root: 'leg', phonetic: '/leɡ/', partOfSpeech: 'n./v.', meaning: '法律', frequency: 126,
    words: [
      createWord('legal', '/ˈliːɡl/', 'adj.', '合法的', 'leg法律 + -al形容词 → 与法律有关的 → 合法的', 'leg', '/leɡ/', '法律', ['legal system 法律制度', 'legislation on 关于...的立法', 'legitimate reason 正当理由', 'illegal activity 非法活动'], ['legal system 法律制度', 'legal advice 法律建议']),
      createWord('legislation', '/ˌledʒɪsˈleɪʃn/', 'n.', '立法', 'leg法律 + -islation名词 → 制定法律 → 立法', 'leg', '/leɡ/', '法律', ['legal system 法律制度', 'legislation on 关于...的立法', 'legitimate reason 正当理由', 'illegal activity 非法活动'], ['legislation on 关于...的立法', 'pass legislation 通过立法']),
      createWord('legitimate', '/lɪˈdʒɪtɪmət/', 'adj.', '合法的/正当的', 'leg法律 + -itim + -ate形容词 → 符合法律的 → 合法的', 'leg', '/leɡ/', '法律', ['legal system 法律制度', 'legislation on 关于...的立法', 'legitimate reason 正当理由', 'illegal activity 非法活动'], ['legitimate reason 正当理由', 'legitimate business 合法生意']),
      createWord('illegal', '/ɪˈliːɡl/', 'adj.', '非法的', 'il不 + leg法律 + -al形容词 → 不合法的 → 非法的', 'leg', '/leɡ/', '法律', ['legal system 法律制度', 'legislation on 关于...的立法', 'legitimate reason 正当理由', 'illegal activity 非法活动'], ['illegal activity 非法活动', 'illegal immigration 非法移民'])
    ],
    phrases: ['legal system 法律制度', 'legislation on 关于...的立法', 'legitimate reason 正当理由', 'illegal activity 非法活动'],
    mnemonic: 'leg（法律）→ 法治根基 → 法律'
  },
  {
    id: 11077, root: 'luc', phonetic: '/luːk/', partOfSpeech: 'v.', meaning: '光/亮', frequency: 127,
    words: [
      createWord('lucid', '/ˈluːsɪd/', 'adj.', '清晰的/清醒的', 'luc光 + -id形容词 → 光亮的 → 清晰的', 'luc', '/luːk/', '光/亮', ['lucid explanation 清晰解释', 'elucidate the meaning 阐明含义', 'translucent material 半透明材料', 'lack of clarity 缺乏清晰度'], ['lucid explanation 清晰解释', 'lucid mind 清醒的头脑']),
      createWord('elucidate', '/ɪˈluːsɪdeɪt/', 'v.', '阐明', 'e(out) + luc光 + -idate动词 → 使光照出来 → 阐明', 'luc', '/luːk/', '光/亮', ['lucid explanation 清晰解释', 'elucidate the meaning 阐明含义', 'translucent material 半透明材料', 'lack of clarity 缺乏清晰度'], ['elucidate the meaning 阐明含义', 'elucidate a point 阐明观点']),
      createWord('translucent', '/trænzˈluːsnt/', 'adj.', '半透明的', 'trans穿过 + luc光 + -ent形容词 → 光能穿过的 → 半透明的', 'luc', '/luːk/', '光/亮', ['lucid explanation 清晰解释', 'elucidate the meaning 阐明含义', 'translucent material 半透明材料', 'lack of clarity 缺乏清晰度'], ['translucent material 半透明材料', 'translucent glass 半透明玻璃']),
      createWord('clarity', '/ˈklærəti/', 'n.', '清晰', 'clar(clear)清晰 + -ity名词 → 清晰的状态 → 清晰', 'luc', '/luːk/', '光/亮', ['lucid explanation 清晰解释', 'elucidate the meaning 阐明含义', 'translucent material 半透明材料', 'lack of clarity 缺乏清晰度'], ['lack of clarity 缺乏清晰度', 'provide clarity 提供清晰度'])
    ],
    phrases: ['lucid explanation 清晰解释', 'elucidate the meaning 阐明含义', 'translucent material 半透明材料', 'lack of clarity 缺乏清晰度'],
    mnemonic: 'luc（光）→ 光明照耀 → 光/亮'
  },
  {
    id: 11078, root: 'magn', phonetic: '/mæɡn/', partOfSpeech: 'adj.', meaning: '大', frequency: 128,
    words: [
      createWord('magnificent', '/mæɡˈnɪfɪsnt/', 'adj.', '壮丽的', 'magn大 + -ific做 + -ent形容词 → 做得大的 → 壮丽的', 'magn', '/mæɡn/', '大', ['magnificent view 壮丽景色', 'magnify the image 放大图像', 'magnitude of ...的规模', 'magnet for ...的磁铁'], ['magnificent view 壮丽景色', 'truly magnificent 真正壮丽']),
      createWord('magnify', '/ˈmæɡnɪfaɪ/', 'v.', '放大', 'magn大 + -ify动词 → 使变大 → 放大', 'magn', '/mæɡn/', '大', ['magnificent view 壮丽景色', 'magnify the image 放大图像', 'magnitude of ...的规模', 'magnet for ...的磁铁'], ['magnify the image 放大图像', 'magnifying glass 放大镜']),
      createWord('magnitude', '/ˈmæɡnɪtjuːd/', 'n.', '规模/大小', 'magn大 + -itude名词 → 大的程度 → 规模', 'magn', '/mæɡn/', '大', ['magnificent view 壮丽景色', 'magnify the image 放大图像', 'magnitude of ...的规模', 'magnet for ...的磁铁'], ['magnitude of ...的规模', 'great magnitude 巨大规模']),
      createWord('magnet', '/ˈmæɡnɪt/', 'n.', '磁铁', 'magn大 + -et名词 → 吸引力大的东西 → 磁铁', 'magn', '/mæɡn/', '大', ['magnificent view 壮丽景色', 'magnify the image 放大图像', 'magnitude of ...的规模', 'magnet for ...的磁铁'], ['magnet for ...的磁铁', 'like a magnet 像磁铁一样'])
    ],
    phrases: ['magnificent view 壮丽景色', 'magnify the image 放大图像', 'magnitude of ...的规模', 'magnet for ...的磁铁'],
    mnemonic: 'magn（大）→ 宏大壮观 → 大'
  },
  {
    id: 11079, root: 'mar', phonetic: '/mɑːr/', partOfSpeech: 'n.', meaning: '海', frequency: 129,
    words: [
      createWord('marine', '/məˈriːn/', 'adj./n.', '海洋的/海军陆战队', 'mar海 + -ine形容词 → 与海有关的 → 海洋的', 'mar', '/mɑːr/', '海', ['marine life 海洋生物', 'submarine vessel 潜水艇', 'maritime law 海商法', 'marinate the meat 腌制肉'], ['marine life 海洋生物', 'marine ecosystem 海洋生态系统']),
      createWord('submarine', '/ˌsʌbməˈriːn/', 'n./adj.', '潜水艇/海底的', 'sub下面 + mar海 + -ine名词 → 海面下的 → 潜水艇', 'mar', '/mɑːr/', '海', ['marine life 海洋生物', 'submarine vessel 潜水艇', 'maritime law 海商法', 'marinate the meat 腌制肉'], ['submarine vessel 潜水艇', 'nuclear submarine 核潜艇']),
      createWord('maritime', '/ˈmærɪtaɪm/', 'adj.', '海事的', 'mar海 + -itime形容词 → 与海有关的 → 海事的', 'mar', '/mɑːr/', '海', ['marine life 海洋生物', 'submarine vessel 潜水艇', 'maritime law 海商法', 'marinate the meat 腌制肉'], ['maritime law 海商法', 'maritime industry 海事产业']),
      createWord('marinate', '/ˈmærɪneɪt/', 'v.', '腌制', 'mar海 + -inate动词 → 放入海水中 → 腌制', 'mar', '/mɑːr/', '海', ['marine life 海洋生物', 'submarine vessel 潜水艇', 'maritime law 海商法', 'marinate the meat 腌制肉'], ['marinate the meat 腌制肉', 'marinate overnight 腌制过夜'])
    ],
    phrases: ['marine life 海洋生物', 'submarine vessel 潜水艇', 'maritime law 海商法', 'marinate the meat 腌制肉'],
    mnemonic: 'mar（海）→ 海洋世界 → 海'
  },
  {
    id: 11080, root: 'mit', phonetic: '/mɪt/', partOfSpeech: 'v.', meaning: '送', frequency: 130,
    words: [
      createWord('emit', '/ɪˈmɪt/', 'v.', '发射', 'e(out) + mit送 → 送出去 → 发射', 'mit', '/mɪt/', '送', ['emit light 发光', 'transmit data 传输数据', 'admit to 承认', 'permit to do 允许做'], ['emit light 发光', 'emit radiation 发射辐射']),
      createWord('transmit', '/trænzˈmɪt/', 'v.', '传输', 'trans穿过 + mit送 → 穿过送去 → 传输', 'mit', '/mɪt/', '送', ['emit light 发光', 'transmit data 传输数据', 'admit to 承认', 'permit to do 允许做'], ['transmit data 传输数据', 'transmit disease 传播疾病']),
      createWord('admit', '/ədˈmɪt/', 'v.', '承认', 'ad(to) + mit送 → 送进去 → 承认', 'mit', '/mɪt/', '送', ['emit light 发光', 'transmit data 传输数据', 'admit to 承认', 'permit to do 允许做'], ['admit to 承认', 'admit mistake 承认错误']),
      createWord('permit', '/pərˈmɪt/', 'v./n.', '允许/许可证', 'per通过 + mit送 → 送过去 → 允许', 'mit', '/mɪt/', '送', ['emit light 发光', 'transmit data 传输数据', 'admit to 承认', 'permit to do 允许做'], ['permit to do 允许做', 'work permit 工作许可证'])
    ],
    phrases: ['emit light 发光', 'transmit data 传输数据', 'admit to 承认', 'permit to do 允许做'],
    mnemonic: 'mit（送）→ 发送传递 → 送'
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
console.log('Added ' + rootsData.length + ' roots (11061-11080)');
