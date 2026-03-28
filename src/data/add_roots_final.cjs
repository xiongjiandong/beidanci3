const fs = require('fs');

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

const rootsData = [
  {
    id: 11003, root: 'form', phonetic: '/fɔːrm/', partOfSpeech: 'n./v.', meaning: '形式', frequency: 53,
    words: [
      createWord('form', '/fɔːrm/', 'n./v.', '形式/形成', 'form本身是词根，表示形式', 'form', '/fɔːrm/', '形式', ['fill in the form 填表', 'form a habit 养成习惯', 'reform plan 改革计划', 'inform of 通知'], ['fill in the form 填表', 'form a habit 养成习惯']),
      createWord('reform', '/rɪˈfɔːrm/', 'v./n.', '改革', 're再 + form形式 → 再形成 → 改革', 'form', '/fɔːrm/', '形式', ['fill in the form 填表', 'form a habit 养成习惯', 'reform plan 改革计划', 'inform of 通知'], ['reform plan 改革计划', 'educational reform 教育改革']),
      createWord('inform', '/ɪnˈfɔːrm/', 'v.', '通知', 'in里面 + form形式 → 在心里形成印象 → 通知', 'form', '/fɔːrm/', '形式', ['fill in the form 填表', 'form a habit 养成习惯', 'reform plan 改革计划', 'inform of 通知'], ['inform of 通知', 'inform about 告知']),
      createWord('perform', '/pərˈfɔːrm/', 'v.', '表演/执行', 'per完全 + form形式 → 完全形成 → 表演', 'form', '/fɔːrm/', '形式', ['fill in the form 填表', 'form a habit 养成习惯', 'reform plan 改革计划', 'inform of 通知'], ['perform a task 执行任务', 'perform well 表现良好'])
    ],
    phrases: ['fill in the form 填表', 'form a habit 养成习惯', 'reform plan 改革计划', 'inform of 通知'],
    mnemonic: 'form（形式）→ 外形轮廓 → 形式'
  },
  {
    id: 11004, root: 'port', phonetic: '/pɔːrt/', partOfSpeech: 'v./n.', meaning: '拿/运/港口', frequency: 54,
    words: [
      createWord('import', '/ɪmˈpɔːrt/', 'v./n.', '进口', 'im进入 + port运 → 运进来 → 进口', 'port', '/pɔːrt/', '拿/运/港口', ['import from 从...进口', 'export to 出口到', 'transport system 交通系统', 'report on 关于...的报告'], ['import from 从...进口', 'import duty 进口税']),
      createWord('export', '/ɪkˈspɔːrt/', 'v./n.', '出口', 'ex向外 + port运 → 运出去 → 出口', 'port', '/pɔːrt/', '拿/运/港口', ['import from 从...进口', 'export to 出口到', 'transport system 交通系统', 'report on 关于...的报告'], ['export to 出口到', 'export products 出口产品']),
      createWord('transport', '/trænˈspɔːrt/', 'v./n.', '运输', 'trans穿过 + port运 → 穿过运送 → 运输', 'port', '/pɔːrt/', '拿/运/港口', ['import from 从...进口', 'export to 出口到', 'transport system 交通系统', 'report on 关于...的报告'], ['transport system 交通系统', 'public transport 公共交通']),
      createWord('report', '/rɪˈpɔːrt/', 'v./n.', '报告', 're回 + port带 → 带回来消息 → 报告', 'port', '/pɔːrt/', '拿/运/港口', ['import from 从...进口', 'export to 出口到', 'transport system 交通系统', 'report on 关于...的报告'], ['report on 关于...的报告', 'annual report 年度报告'])
    ],
    phrases: ['import from 从...进口', 'export to 出口到', 'transport system 交通系统', 'report on 关于...的报告'],
    mnemonic: 'port（拿/运）→ 搬运东西 → 拿/运'
  },
  {
    id: 11005, root: 'dict', phonetic: '/dɪkt/', partOfSpeech: 'v.', meaning: '说', frequency: 55,
    words: [
      createWord('predict', '/prɪˈdɪkt/', 'v.', '预测', 'pre前 + dict说 → 提前说 → 预测', 'dict', '/dɪkt/', '说', ['predict the future 预测未来', 'dictionary lookup 查字典', 'contradict with 与...矛盾', 'indicate that 表明'], ['predict the future 预测未来', 'hard to predict 难以预测']),
      createWord('dictionary', '/ˈdɪkʃəneri/', 'n.', '字典', 'dict说 + -ion名词 + -ary → 说话的集合 → 字典', 'dict', '/dɪkt/', '说', ['predict the future 预测未来', 'dictionary lookup 查字典', 'contradict with 与...矛盾', 'indicate that 表明'], ['dictionary lookup 查字典', 'look up in the dictionary 查字典']),
      createWord('contradict', '/ˌkɒntrəˈdɪkt/', 'v.', '反驳', 'contra相反 + dict说 → 说相反的话 → 反驳', 'dict', '/dɪkt/', '说', ['predict the future 预测未来', 'dictionary lookup 查字典', 'contradict with 与...矛盾', 'indicate that 表明'], ['contradict with 与...矛盾', 'contradict each other 互相矛盾']),
      createWord('indicate', '/ˈɪndɪkeɪt/', 'v.', '表明', 'in里面 + dic说 + -ate → 在里面说出来 → 表明', 'dict', '/dɪkt/', '说', ['predict the future 预测未来', 'dictionary lookup 查字典', 'contradict with 与...矛盾', 'indicate that 表明'], ['indicate that 表明', 'indicate the direction 指示方向'])
    ],
    phrases: ['predict the future 预测未来', 'dictionary lookup 查字典', 'contradict with 与...矛盾', 'indicate that 表明'],
    mnemonic: 'dict（说）→ 开口说话 → 说'
  },
  {
    id: 11006, root: 'sign', phonetic: '/saɪn/', partOfSpeech: 'n./v.', meaning: '标记/签名', frequency: 56,
    words: [
      createWord('sign', '/saɪn/', 'n./v.', '标记/签名', 'sign本身是词根，表示标记', 'sign', '/saɪn/', '标记/签名', ['sign up for 报名参加', 'design a plan 设计方案', 'significant impact 重大影响', 'assign tasks 分配任务'], ['sign up for 报名参加', 'traffic sign 交通标志']),
      createWord('design', '/dɪˈzaɪn/', 'v./n.', '设计', 'de加强 + sign标记 → 加强标记 → 设计', 'sign', '/saɪn/', '标记/签名', ['sign up for 报名参加', 'design a plan 设计方案', 'significant impact 重大影响', 'assign tasks 分配任务'], ['design a plan 设计方案', 'fashion design 时装设计']),
      createWord('significant', '/sɪɡˈnɪfɪkənt/', 'adj.', '重大的', 'sign标记 + -i- + fic做 + -ant → 做标记的 → 重大的', 'sign', '/saɪn/', '标记/签名', ['sign up for 报名参加', 'design a plan 设计方案', 'significant impact 重大影响', 'assign tasks 分配任务'], ['significant impact 重大影响', 'significant change 显著变化']),
      createWord('assign', '/əˈsaɪn/', 'v.', '分配', 'as(to) + sign标记 → 标记给某人 → 分配', 'sign', '/saɪn/', '标记/签名', ['sign up for 报名参加', 'design a plan 设计方案', 'significant impact 重大影响', 'assign tasks 分配任务'], ['assign tasks 分配任务', 'assign homework 布置作业'])
    ],
    phrases: ['sign up for 报名参加', 'design a plan 设计方案', 'significant impact 重大影响', 'assign tasks 分配任务'],
    mnemonic: 'sign（标记）→ 做记号 → 标记'
  },
  {
    id: 11007, root: 'tract', phonetic: '/trækt/', partOfSpeech: 'v.', meaning: '拉/拖', frequency: 57,
    words: [
      createWord('attract', '/əˈtrækt/', 'v.', '吸引', 'at(to) + tract拉 → 拉过来 → 吸引', 'tract', '/trækt/', '拉/拖', ['attract attention 吸引注意', 'contract with 与...签订合同', 'distract from 分散注意力', 'extract from 从...提取'], ['attract attention 吸引注意', 'attract customers 吸引顾客']),
      createWord('contract', '/ˈkɒntrækt/', 'n./v.', '合同/收缩', 'con一起 + tract拉 → 拉到一起 → 合同', 'tract', '/trækt/', '拉/拖', ['attract attention 吸引注意', 'contract with 与...签订合同', 'distract from 分散注意力', 'extract from 从...提取'], ['contract with 与...签订合同', 'sign a contract 签合同']),
      createWord('distract', '/dɪˈstrækt/', 'v.', '分散', 'dis分开 + tract拉 → 拉开 → 分散', 'tract', '/trækt/', '拉/拖', ['attract attention 吸引注意', 'contract with 与...签订合同', 'distract from 分散注意力', 'extract from 从...提取'], ['distract from 分散注意力', 'distract attention 分散注意力']),
      createWord('extract', '/ɪkˈstrækt/', 'v.', '提取', 'ex向外 + tract拉 → 向外拉 → 提取', 'tract', '/trækt/', '拉/拖', ['attract attention 吸引注意', 'contract with 与...签订合同', 'distract from 分散注意力', 'extract from 从...提取'], ['extract from 从...提取', 'extract information 提取信息'])
    ],
    phrases: ['attract attention 吸引注意', 'contract with 与...签订合同', 'distract from 分散注意力', 'extract from 从...提取'],
    mnemonic: 'tract（拉）→ 用力拉扯 → 拉/拖'
  },
  {
    id: 11008, root: 'press', phonetic: '/pres/', partOfSpeech: 'v./n.', meaning: '按/压', frequency: 58,
    words: [
      createWord('press', '/pres/', 'v./n.', '按/压/新闻界', 'press本身是词根，表示按/压', 'press', '/pres/', '按/压', ['press the button 按按钮', 'express oneself 表达自己', 'impress sb 给某人留下印象', 'depress the market 压抑市场'], ['press the button 按按钮', 'press conference 新闻发布会']),
      createWord('express', '/ɪkˈspres/', 'v./adj.', '表达/快速的', 'ex向外 + press压 → 向外挤压 → 表达', 'press', '/pres/', '按/压', ['press the button 按按钮', 'express oneself 表达自己', 'impress sb 给某人留下印象', 'depress the market 压抑市场'], ['express oneself 表达自己', 'express delivery 快递']),
      createWord('impress', '/ɪmˈpres/', 'v.', '给...留下印象', 'im进入 + press压 → 压入心中 → 留下印象', 'press', '/pres/', '按/压', ['press the button 按按钮', 'express oneself 表达自己', 'impress sb 给某人留下印象', 'depress the market 压抑市场'], ['impress sb 给某人留下印象', 'be impressed by 被...打动']),
      createWord('depress', '/dɪˈpres/', 'v.', '使沮丧/压抑', 'de向下 + press压 → 向下压 → 使沮丧', 'press', '/pres/', '按/压', ['press the button 按按钮', 'express oneself 表达自己', 'impress sb 给某人留下印象', 'depress the market 压抑市场'], ['depress the market 压抑市场', 'feel depressed 感到沮丧'])
    ],
    phrases: ['press the button 按按钮', 'express oneself 表达自己', 'impress sb 给某人留下印象', 'depress the market 压抑市场'],
    mnemonic: 'press（按/压）→ 施加压力 → 按/压'
  },
  {
    id: 11009, root: 'mit', phonetic: '/mɪt/', partOfSpeech: 'v.', meaning: '送/发', frequency: 59,
    words: [
      createWord('submit', '/səbˈmɪt/', 'v.', '提交', 'sub下面 + mit送 → 从下面送上 → 提交', 'mit', '/mɪt/', '送/发', ['submit a report 提交报告', 'admit to 承认', 'permit sb to do 允许某人做', 'commit a crime 犯罪'], ['submit a report 提交报告', 'submit an application 提交申请']),
      createWord('admit', '/ədˈmɪt/', 'v.', '承认', 'ad(to) + mit送 → 送进去 → 承认', 'mit', '/mɪt/', '送/发', ['submit a report 提交报告', 'admit to 承认', 'permit sb to do 允许某人做', 'commit a crime 犯罪'], ['admit to 承认', 'admit one\'s mistake 承认错误']),
      createWord('permit', '/pərˈmɪt/', 'v./n.', '允许/许可证', 'per通过 + mit送 → 送过去 → 允许', 'mit', '/mɪt/', '送/发', ['submit a report 提交报告', 'admit to 承认', 'permit sb to do 允许某人做', 'commit a crime 犯罪'], ['permit sb to do 允许某人做', 'work permit 工作许可证']),
      createWord('commit', '/kəˈmɪt/', 'v.', '犯罪/承诺', 'com一起 + mit送 → 一起送去 → 承诺', 'mit', '/mɪt/', '送/发', ['submit a report 提交报告', 'admit to 承认', 'permit sb to do 允许某人做', 'commit a crime 犯罪'], ['commit a crime 犯罪', 'commit suicide 自杀'])
    ],
    phrases: ['submit a report 提交报告', 'admit to 承认', 'permit sb to do 允许某人做', 'commit a crime 犯罪'],
    mnemonic: 'mit（送/发）→ 派送东西 → 送/发'
  },
  {
    id: 11010, root: 'pos', phonetic: '/pɒz/', partOfSpeech: 'v.', meaning: '放置', frequency: 60,
    words: [
      createWord('pose', '/pəʊz/', 'v./n.', '摆姿势/姿势', 'pose本身是词根变体，表示放置', 'pos', '/pɒz/', '放置', ['pose a threat 构成威胁', 'propose a plan 提出计划', 'expose to 暴露于', 'oppose to 反对'], ['pose a threat 构成威胁', 'pose for a photo 摆姿势拍照']),
      createWord('propose', '/prəˈpəʊz/', 'v.', '提议', 'pro向前 + pos放置 + e → 放在前面 → 提议', 'pos', '/pɒz/', '放置', ['pose a threat 构成威胁', 'propose a plan 提出计划', 'expose to 暴露于', 'oppose to 反对'], ['propose a plan 提出计划', 'propose a toast 提议干杯']),
      createWord('expose', '/ɪkˈspəʊz/', 'v.', '暴露', 'ex向外 + pos放置 + e → 放在外面 → 暴露', 'pos', '/pɒz/', '放置', ['pose a threat 构成威胁', 'propose a plan 提出计划', 'expose to 暴露于', 'oppose to 反对'], ['expose to 暴露于', 'expose the truth 揭露真相']),
      createWord('oppose', '/əˈpəʊz/', 'v.', '反对', 'op相反 + pos放置 + e → 放在相反位置 → 反对', 'pos', '/pɒz/', '放置', ['pose a threat 构成威胁', 'propose a plan 提出计划', 'expose to 暴露于', 'oppose to 反对'], ['oppose to 反对', 'strongly oppose 强烈反对'])
    ],
    phrases: ['pose a threat 构成威胁', 'propose a plan 提出计划', 'expose to 暴露于', 'oppose to 反对'],
    mnemonic: 'pos（放置）→ 放在某处 → 放置'
  },
  {
    id: 11015, root: 'ten', phonetic: '/ten/', partOfSpeech: 'v.', meaning: '拿住/保持', frequency: 65,
    words: [
      createWord('tend', '/tend/', 'v.', '倾向于/照料', 'tend来自ten词根 → 拿住某个方向 → 倾向于', 'ten', '/ten/', '拿住/保持', ['tend to 倾向于', 'maintain order 维持秩序', 'contain within 包含在...内', 'obtain information 获取信息'], ['tend to 倾向于', 'tend to do 往往会做']),
      createWord('maintain', '/meɪnˈteɪn/', 'v.', '维持', 'main手 + ten拿住 → 用手拿住 → 维持', 'ten', '/ten/', '拿住/保持', ['tend to 倾向于', 'maintain order 维持秩序', 'contain within 包含在...内', 'obtain information 获取信息'], ['maintain order 维持秩序', 'maintain relationship 维持关系']),
      createWord('contain', '/kənˈteɪn/', 'v.', '包含', 'con一起 + ten拿住 → 拿在一起 → 包含', 'ten', '/ten/', '拿住/保持', ['tend to 倾向于', 'maintain order 维持秩序', 'contain within 包含在...内', 'obtain information 获取信息'], ['contain within 包含在...内', 'contain oneself 克制自己']),
      createWord('obtain', '/əbˈteɪn/', 'v.', '获得', 'ob加强 + ten拿住 → 拿得住 → 获得', 'ten', '/ten/', '拿住/保持', ['tend to 倾向于', 'maintain order 维持秩序', 'contain within 包含在...内', 'obtain information 获取信息'], ['obtain information 获取信息', 'obtain a degree 获得学位'])
    ],
    phrases: ['tend to 倾向于', 'maintain order 维持秩序', 'contain within 包含在...内', 'obtain information 获取信息'],
    mnemonic: 'ten（拿住）→ 紧紧抓住 → 拿住/保持'
  },
  {
    id: 11016, root: 'spir', phonetic: '/spaɪr/', partOfSpeech: 'v.', meaning: '呼吸', frequency: 66,
    words: [
      createWord('spirit', '/ˈspɪrɪt/', 'n.', '精神/灵魂', 'spir呼吸 + -it → 呼吸是生命的象征 → 精神', 'spir', '/spaɪr/', '呼吸', ['in high spirits 情绪高涨', 'inspire sb to 鼓舞某人', 'expire date 到期日', 'conspire against 密谋反对'], ['in high spirits 情绪高涨', 'team spirit 团队精神']),
      createWord('inspire', '/ɪnˈspaɪər/', 'v.', '鼓舞/启发', 'in进入 + spir呼吸 + e → 吸入灵感 → 鼓舞', 'spir', '/spaɪr/', '呼吸', ['in high spirits 情绪高涨', 'inspire sb to 鼓舞某人', 'expire date 到期日', 'conspire against 密谋反对'], ['inspire sb to 鼓舞某人', 'inspire confidence 鼓舞信心']),
      createWord('expire', '/ɪkˈspaɪər/', 'v.', '到期/断气', 'ex向外 + spir呼吸 + e → 气往外呼 → 断气/到期', 'spir', '/spaɪr/', '呼吸', ['in high spirits 情绪高涨', 'inspire sb to 鼓舞某人', 'expire date 到期日', 'conspire against 密谋反对'], ['expire date 到期日', 'about to expire 即将到期']),
      createWord('conspire', '/kənˈspaɪər/', 'v.', '密谋', 'con一起 + spir呼吸 + e → 在一起悄悄呼吸 → 密谋', 'spir', '/spaɪr/', '呼吸', ['in high spirits 情绪高涨', 'inspire sb to 鼓舞某人', 'expire date 到期日', 'conspire against 密谋反对'], ['conspire against 密谋反对', 'conspire with 与...密谋'])
    ],
    phrases: ['in high spirits 情绪高涨', 'inspire sb to 鼓舞某人', 'expire date 到期日', 'conspire against 密谋反对'],
    mnemonic: 'spir（呼吸）→ 生命的气息 → 呼吸'
  },
  {
    id: 11018, root: 'grad', phonetic: '/ɡræd/', partOfSpeech: 'v.', meaning: '走/步', frequency: 68,
    words: [
      createWord('graduate', '/ˈɡrædʒuət/', 'n./v.', '毕业生/毕业', 'grad步 + -uate → 一步步走完学业 → 毕业', 'grad', '/ɡræd/', '走/步', ['graduate from 从...毕业', 'gradual change 逐渐变化', 'grade level 年级水平', 'degrade into 降解为'], ['graduate from 从...毕业', 'high school graduate 高中毕业生']),
      createWord('gradual', '/ˈɡrædʒuəl/', 'adj.', '逐渐的', 'grad步 + -ual形容词 → 一步一步的 → 逐渐的', 'grad', '/ɡræd/', '走/步', ['graduate from 从...毕业', 'gradual change 逐渐变化', 'grade level 年级水平', 'degrade into 降解为'], ['gradual change 逐渐变化', 'gradual improvement 逐渐改善']),
      createWord('grade', '/ɡreɪd/', 'n./v.', '等级/年级', 'grad步 → 一步步上升的层级 → 等级', 'grad', '/ɡræd/', '走/步', ['graduate from 从...毕业', 'gradual change 逐渐变化', 'grade level 年级水平', 'degrade into 降解为'], ['grade level 年级水平', 'get good grades 取得好成绩']),
      createWord('degrade', '/dɪˈɡreɪd/', 'v.', '降级/降解', 'de向下 + grad步 → 向下走 → 降级', 'grad', '/ɡræd/', '走/步', ['graduate from 从...毕业', 'gradual change 逐渐变化', 'grade level 年级水平', 'degrade into 降解为'], ['degrade into 降解为', 'degrade performance 性能下降'])
    ],
    phrases: ['graduate from 从...毕业', 'gradual change 逐渐变化', 'grade level 年级水平', 'degrade into 降解为'],
    mnemonic: 'grad（走/步）→ 一步一步走 → 走/步'
  },
  {
    id: 11019, root: 'gest', phonetic: '/dʒest/', partOfSpeech: 'v.', meaning: '携带/运送', frequency: 69,
    words: [
      createWord('digest', '/daɪˈdʒest/', 'v./n.', '消化/摘要', 'di分开 + gest携带 → 分开带走 → 消化', 'gest', '/dʒest/', '携带/运送', ['digest food 消化食物', 'suggest doing 建议做', 'gesture language 手势语', 'congested traffic 交通拥堵'], ['digest food 消化食物', 'digest information 消化信息']),
      createWord('suggest', '/səˈdʒest/', 'v.', '建议', 'sug下面 + gest携带 → 从下面带上来 → 建议', 'gest', '/dʒest/', '携带/运送', ['digest food 消化食物', 'suggest doing 建议做', 'gesture language 手势语', 'congested traffic 交通拥堵'], ['suggest doing 建议做', 'suggest that 建议...']),
      createWord('gesture', '/ˈdʒestʃər/', 'n./v.', '手势/姿态', 'gest携带 + -ure名词 → 身体携带的动作 → 手势', 'gest', '/dʒest/', '携带/运送', ['digest food 消化食物', 'suggest doing 建议做', 'gesture language 手势语', 'congested traffic 交通拥堵'], ['gesture language 手势语', 'make a gesture 做手势']),
      createWord('congest', '/kənˈdʒest/', 'v.', '拥挤/充血', 'con一起 + gest携带 → 都带到一起 → 拥挤', 'gest', '/dʒest/', '携带/运送', ['digest food 消化食物', 'suggest doing 建议做', 'gesture language 手势语', 'congested traffic 交通拥堵'], ['congested traffic 交通拥堵', 'congested area 拥挤区域'])
    ],
    phrases: ['digest food 消化食物', 'suggest doing 建议做', 'gesture language 手势语', 'congested traffic 交通拥堵'],
    mnemonic: 'gest（携带）→ 带着东西走 → 携带/运送'
  },
  {
    id: 11020, root: 'rupt', phonetic: '/rʌpt/', partOfSpeech: 'v.', meaning: '断裂', frequency: 70,
    words: [
      createWord('erupt', '/ɪˈrʌpt/', 'v.', '爆发', 'e(out) + rupt断裂 → 向外断裂 → 爆发', 'rupt', '/rʌpt/', '断裂', ['erupt into 爆发成', 'interrupt the meeting 打断会议', 'bankrupt company 破产公司', 'corrupt officials 腐败官员'], ['erupt into 爆发成', 'volcano erupts 火山爆发']),
      createWord('interrupt', '/ˌɪntəˈrʌpt/', 'v.', '打断', 'inter在中间 + rupt断裂 → 在中间断裂 → 打断', 'rupt', '/rʌpt/', '断裂', ['erupt into 爆发成', 'interrupt the meeting 打断会议', 'bankrupt company 破产公司', 'corrupt officials 腐败官员'], ['interrupt the meeting 打断会议', 'interrupt sb 打断某人']),
      createWord('bankrupt', '/ˈbæŋkrʌpt/', 'adj./v.', '破产的', 'bank银行 + rupt断裂 → 银行断裂 → 破产', 'rupt', '/rʌpt/', '断裂', ['erupt into 爆发成', 'interrupt the meeting 打断会议', 'bankrupt company 破产公司', 'corrupt officials 腐败官员'], ['bankrupt company 破产公司', 'go bankrupt 破产']),
      createWord('corrupt', '/kəˈrʌpt/', 'adj./v.', '腐败的/腐蚀', 'cor完全 + rupt断裂 → 完全断裂 → 腐败', 'rupt', '/rʌpt/', '断裂', ['erupt into 爆发成', 'interrupt the meeting 打断会议', 'bankrupt company 破产公司', 'corrupt officials 腐败官员'], ['corrupt officials 腐败官员', 'corrupt data 损坏数据'])
    ],
    phrases: ['erupt into 爆发成', 'interrupt the meeting 打断会议', 'bankrupt company 破产公司', 'corrupt officials 腐败官员'],
    mnemonic: 'rupt（断裂）→ 突然断开 → 断裂'
  },
  {
    id: 11033, root: 'scend', phonetic: '/send/', partOfSpeech: 'v.', meaning: '爬/上升', frequency: 83,
    words: [
      createWord('ascend', '/əˈsend/', 'v.', '上升', 'a(to) + scend爬 → 向上爬 → 上升', 'scend', '/send/', '爬/上升', ['ascend to 上升到', 'descend from 从...下降', 'transcend limits 超越限制', 'descendant of ...的后代'], ['ascend to 上升到', 'ascend the throne 登基']),
      createWord('descend', '/dɪˈsend/', 'v.', '下降', 'de向下 + scend爬 → 向下爬 → 下降', 'scend', '/send/', '爬/上升', ['ascend to 上升到', 'descend from 从...下降', 'transcend limits 超越限制', 'descendant of ...的后代'], ['descend from 从...下降', 'descend into 沦为']),
      createWord('transcend', '/trænˈsend/', 'v.', '超越', 'trans穿过 + scend爬 → 爬过去 → 超越', 'scend', '/send/', '爬/上升', ['ascend to 上升到', 'descend from 从...下降', 'transcend limits 超越限制', 'descendant of ...的后代'], ['transcend limits 超越限制', 'transcend boundaries 跨越边界']),
      createWord('descendant', '/dɪˈsendənt/', 'n.', '后代', 'de向下 + scend爬 + -ant人 → 向下传的人 → 后代', 'scend', '/send/', '爬/上升', ['ascend to 上升到', 'descend from 从...下降', 'transcend limits 超越限制', 'descendant of ...的后代'], ['descendant of ...的后代', 'direct descendant 直系后代'])
    ],
    phrases: ['ascend to 上升到', 'descend from 从...下降', 'transcend limits 超越限制', 'descendant of ...的后代'],
    mnemonic: 'scend（爬）→ 向上攀登 → 爬/上升'
  },
  {
    id: 11034, root: 'brev', phonetic: '/brev/', partOfSpeech: 'adj.', meaning: '短', frequency: 84,
    words: [
      createWord('brief', '/briːf/', 'adj./n.', '简短的/摘要', 'brief来自brev词根 → 短的', 'brev', '/brev/', '短', ['in brief 简言之', 'abbreviate to 缩写为', 'brevity is the soul 简洁是灵魂', 'brief summary 简要总结'], ['in brief 简言之', 'brief introduction 简介']),
      createWord('abbreviate', '/əˈbriːvieɪt/', 'v.', '缩写', 'ab(to) + brev短 + -iate动词 → 使变短 → 缩写', 'brev', '/brev/', '短', ['in brief 简言之', 'abbreviate to 缩写为', 'brevity is the soul 简洁是灵魂', 'brief summary 简要总结'], ['abbreviate to 缩写为', 'abbreviate a word 缩写单词']),
      createWord('brevity', '/ˈbrevəti/', 'n.', '简洁', 'brev短 + -ity名词 → 短的特性 → 简洁', 'brev', '/brev/', '短', ['in brief 简言之', 'abbreviate to 缩写为', 'brevity is the soul 简洁是灵魂', 'brief summary 简要总结'], ['brevity is the soul 简洁是灵魂', 'admire brevity 欣赏简洁']),
      createWord('brief', '/briːf/', 'adj.', '简短的', 'brev短 → 短的', 'brev', '/brev/', '短', ['in brief 简言之', 'abbreviate to 缩写为', 'brevity is the soul 简洁是灵魂', 'brief summary 简要总结'], ['brief summary 简要总结', 'brief report 简要报告'])
    ],
    phrases: ['in brief 简言之', 'abbreviate to 缩写为', 'brevity is the soul 简洁是灵魂', 'brief summary 简要总结'],
    mnemonic: 'brev（短）→ 时间或长度短 → 短'
  },
  {
    id: 11035, root: 'sent', phonetic: '/sent/', partOfSpeech: 'v.', meaning: '感觉', frequency: 85,
    words: [
      createWord('sense', '/sens/', 'n./v.', '感觉/意识', 'sent词根变体 → 感觉', 'sent', '/sent/', '感觉', ['make sense 有道理', 'sensitive to 对...敏感', 'sentiment about 对...的情感', 'consent to 同意'], ['make sense 有道理', 'common sense 常识']),
      createWord('sensitive', '/ˈsensətɪv/', 'adj.', '敏感的', 'sens(sent)感觉 + -itive形容词 → 有感觉的 → 敏感的', 'sent', '/sent/', '感觉', ['make sense 有道理', 'sensitive to 对...敏感', 'sentiment about 对...的情感', 'consent to 同意'], ['sensitive to 对...敏感', 'highly sensitive 高度敏感']),
      createWord('sentiment', '/ˈsentɪmənt/', 'n.', '情感', 'sent感觉 + -i- + -ment名词 → 感觉的状态 → 情感', 'sent', '/sent/', '感觉', ['make sense 有道理', 'sensitive to 对...敏感', 'sentiment about 对...的情感', 'consent to 同意'], ['sentiment about 对...的情感', 'public sentiment 公众情绪']),
      createWord('consent', '/kənˈsent/', 'v./n.', '同意', 'con一起 + sent感觉 → 感觉一致 → 同意', 'sent', '/sent/', '感觉', ['make sense 有道理', 'sensitive to 对...敏感', 'sentiment about 对...的情感', 'consent to 同意'], ['consent to 同意', 'by consent 经同意'])
    ],
    phrases: ['make sense 有道理', 'sensitive to 对...敏感', 'sentiment about 对...的情感', 'consent to 同意'],
    mnemonic: 'sent（感觉）→ 心理感受 → 感觉'
  },
  {
    id: 11036, root: 'tempor', phonetic: '/tempər/', partOfSpeech: 'n.', meaning: '时间', frequency: 86,
    words: [
      createWord('temporary', '/ˈtempərəri/', 'adj.', '临时的', 'tempor时间 + -ary形容词 → 有时间限制的 → 临时的', 'tempor', '/tempər/', '时间', ['temporary solution 临时解决方案', 'contemporary art 当代艺术', 'temporal dimension 时间维度', 'tempo of the song 歌曲节奏'], ['temporary solution 临时解决方案', 'temporary work 临时工作']),
      createWord('contemporary', '/kənˈtempərəri/', 'adj./n.', '当代的/同龄人', 'con一起 + tempor时间 + -ary → 同一时间的 → 当代的', 'tempor', '/tempər/', '时间', ['temporary solution 临时解决方案', 'contemporary art 当代艺术', 'temporal dimension 时间维度', 'tempo of the song 歌曲节奏'], ['contemporary art 当代艺术', 'contemporary society 当代社会']),
      createWord('temporal', '/ˈtempərəl/', 'adj.', '时间的/暂时的', 'tempor时间 + -al形容词 → 与时间有关的 → 时间的', 'tempor', '/tempər/', '时间', ['temporary solution 临时解决方案', 'contemporary art 当代艺术', 'temporal dimension 时间维度', 'tempo of the song 歌曲节奏'], ['temporal dimension 时间维度', 'temporal limits 时间限制']),
      createWord('tempo', '/ˈtempəʊ/', 'n.', '节奏/速度', 'tempo来自tempor → 时间的节奏 → 节奏', 'tempor', '/tempər/', '时间', ['temporary solution 临时解决方案', 'contemporary art 当代艺术', 'temporal dimension 时间维度', 'tempo of the song 歌曲节奏'], ['tempo of the song 歌曲节奏', 'change tempo 改变节奏'])
    ],
    phrases: ['temporary solution 临时解决方案', 'contemporary art 当代艺术', 'temporal dimension 时间维度', 'tempo of the song 歌曲节奏'],
    mnemonic: 'tempor（时间）→ 时光流逝 → 时间'
  },
  {
    id: 11037, root: 'ten', phonetic: '/ten/', partOfSpeech: 'v.', meaning: '拉伸', frequency: 87,
    words: [
      createWord('extend', '/ɪkˈstend/', 'v.', '延伸', 'ex向外 + ten拉伸 + d → 向外拉伸 → 延伸', 'ten', '/ten/', '拉伸', ['extend to 延伸到', 'intend to do 打算做', 'attend a meeting 参加会议', 'contend with 应对'], ['extend to 延伸到', 'extend deadline 延长截止日期']),
      createWord('intend', '/ɪnˈtend/', 'v.', '打算', 'in里面 + ten拉伸 + d → 心里拉伸 → 打算', 'ten', '/ten/', '拉伸', ['extend to 延伸到', 'intend to do 打算做', 'attend a meeting 参加会议', 'contend with 应对'], ['intend to do 打算做', 'intend for 打算用于']),
      createWord('attend', '/əˈtend/', 'v.', '参加/照料', 'at(to) + ten拉伸 + d → 拉向... → 参加', 'ten', '/ten/', '拉伸', ['extend to 延伸到', 'intend to do 打算做', 'attend a meeting 参加会议', 'contend with 应对'], ['attend a meeting 参加会议', 'attend school 上学']),
      createWord('contend', '/kənˈtend/', 'v.', '竞争/主张', 'con一起 + ten拉伸 + d → 一起拉伸 → 竞争', 'ten', '/ten/', '拉伸', ['extend to 延伸到', 'intend to do 打算做', 'attend a meeting 参加会议', 'contend with 应对'], ['contend with 应对', 'contend for 争夺'])
    ],
    phrases: ['extend to 延伸到', 'intend to do 打算做', 'attend a meeting 参加会议', 'contend with 应对'],
    mnemonic: 'ten（拉伸）→ 向两端拉 → 拉伸'
  },
  {
    id: 11038, root: 'medi', phonetic: '/miːdi/', partOfSpeech: 'adj.', meaning: '中间', frequency: 88,
    words: [
      createWord('medium', '/ˈmiːdiəm/', 'n./adj.', '媒介/中等的', 'medi中间 + -um名词 → 中间的东西 → 媒介', 'medi', '/miːdi/', '中间', ['mass media 大众媒体', 'intermediate level 中级水平', 'immediate action 立即行动', 'medieval times 中世纪'], ['mass media 大众媒体', 'social media 社交媒体']),
      createWord('intermediate', '/ˌɪntəˈmiːdiət/', 'adj.', '中间的/中级的', 'inter在...之间 + medi中间 + -ate形容词 → 中间位置的 → 中级的', 'medi', '/miːdi/', '中间', ['mass media 大众媒体', 'intermediate level 中级水平', 'immediate action 立即行动', 'medieval times 中世纪'], ['intermediate level 中级水平', 'intermediate stage 中间阶段']),
      createWord('immediate', '/ɪˈmiːdiət/', 'adj.', '立即的/直接的', 'im无 + medi中间 + -ate → 无中间环节 → 立即的', 'medi', '/miːdi/', '中间', ['mass media 大众媒体', 'intermediate level 中级水平', 'immediate action 立即行动', 'medieval times 中世纪'], ['immediate action 立即行动', 'immediate family 直系亲属']),
      createWord('medieval', '/ˌmediˈiːvl/', 'adj.', '中世纪的', 'medi中间 + ev时代 + -al形容词 → 中间时代的 → 中世纪的', 'medi', '/miːdi/', '中间', ['mass media 大众媒体', 'intermediate level 中级水平', 'immediate action 立即行动', 'medieval times 中世纪'], ['medieval times 中世纪', 'medieval architecture 中世纪建筑'])
    ],
    phrases: ['mass media 大众媒体', 'intermediate level 中级水平', 'immediate action 立即行动', 'medieval times 中世纪'],
    mnemonic: 'medi（中间）→ 处于中心位置 → 中间'
  },
  {
    id: 11039, root: 'cent', phonetic: '/sent/', partOfSpeech: 'n.', meaning: '百', frequency: 89,
    words: [
      createWord('century', '/ˈsentʃəri/', 'n.', '世纪', 'cent百 + -ury名词 → 一百年 → 世纪', 'cent', '/sent/', '百', ['century ago 一个世纪前', 'percent of ...的百分比', 'centimeter in length 厘米长', 'centigrade temperature 摄氏温度'], ['century ago 一个世纪前', 'last century 上个世纪']),
      createWord('percent', '/pərˈsent/', 'n.', '百分比', 'per每 + cent百 → 每一百 → 百分比', 'cent', '/sent/', '百', ['century ago 一个世纪前', 'percent of ...的百分比', 'centimeter in length 厘米长', 'centigrade temperature 摄氏温度'], ['percent of ...的百分比', 'ten percent 百分之十']),
      createWord('centimeter', '/ˈsentɪˌmiːtər/', 'n.', '厘米', 'cent百 + meter米 → 百分之一米 → 厘米', 'cent', '/sent/', '百', ['century ago 一个世纪前', 'percent of ...的百分比', 'centimeter in length 厘米长', 'centigrade temperature 摄氏温度'], ['centimeter in length 厘米长', 'square centimeter 平方厘米']),
      createWord('centigrade', '/ˈsentɪɡreɪd/', 'adj.', '摄氏的', 'cent百 + grade等级 → 分成百级的 → 摄氏的', 'cent', '/sent/', '百', ['century ago 一个世纪前', 'percent of ...的百分比', 'centimeter in length 厘米长', 'centigrade temperature 摄氏温度'], ['centigrade temperature 摄氏温度', 'degrees centigrade 摄氏度'])
    ],
    phrases: ['century ago 一个世纪前', 'percent of ...的百分比', 'centimeter in length 厘米长', 'centigrade temperature 摄氏温度'],
    mnemonic: 'cent（百）→ 一百 → 百'
  },
  {
    id: 11040, root: 'vol', phonetic: '/vɒl/', partOfSpeech: 'v.', meaning: '滚动/卷/意志', frequency: 90,
    words: [
      createWord('volume', '/ˈvɒljuːm/', 'n.', '卷/体积/音量', 'vol卷 + -ume名词 → 卷成的东西 → 卷/体积', 'vol', '/vɒl/', '滚动/卷/意志', ['volume of ...的体积', 'voluntary work 志愿工作', 'evolution of ...的进化', 'revolution in ...的革命'], ['volume of ...的体积', 'turn up the volume 调高音量']),
      createWord('voluntary', '/ˈvɒləntri/', 'adj.', '自愿的', 'vol意志 + -untary形容词 → 出于意志的 → 自愿的', 'vol', '/vɒl/', '滚动/卷/意志', ['volume of ...的体积', 'voluntary work 志愿工作', 'evolution of ...的进化', 'revolution in ...的革命'], ['voluntary work 志愿工作', 'voluntary service 志愿服务']),
      createWord('evolution', '/ˌiːvəˈluːʃn/', 'n.', '进化', 'e(out) + vol卷 + -ution → 向外展开 → 进化', 'vol', '/vɒl/', '滚动/卷/意志', ['volume of ...的体积', 'voluntary work 志愿工作', 'evolution of ...的进化', 'revolution in ...的革命'], ['evolution of ...的进化', 'theory of evolution 进化论']),
      createWord('revolution', '/ˌrevəˈluːʃn/', 'n.', '革命', 're回 + vol卷 + -ution → 翻回去 → 革命', 'vol', '/vɒl/', '滚动/卷/意志', ['volume of ...的体积', 'voluntary work 志愿工作', 'evolution of ...的进化', 'revolution in ...的革命'], ['revolution in ...的革命', 'industrial revolution 工业革命'])
    ],
    phrases: ['volume of ...的体积', 'voluntary work 志愿工作', 'evolution of ...的进化', 'revolution in ...的革命'],
    mnemonic: 'vol（滚动）→ 翻滚卷动 → 滚动/卷/意志'
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
console.log('Added ' + rootsData.length + ' additional roots');
