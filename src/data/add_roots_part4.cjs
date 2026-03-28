const fs = require('fs');

function createWord(word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases) {
  return { word, phonetic, partOfSpeech, meaning, memoryTip, root, rootPhonetic, rootMeaning, rootPhrases, wordPhrases };
}

const rootsData = [
  // 11101-11120
  {
    id: 11101, root: 'vid', phonetic: '/vɪd/', partOfSpeech: 'v.', meaning: '看', frequency: 151,
    words: [
      createWord('video', '/ˈvɪdiəʊ/', 'n.', '视频', 'vid看 + -eo名词 → 可看的 → 视频', 'vid', '/vɪd/', '看', ['video game 电子游戏', 'evident that 明显的是', 'provide for 提供', 'evidence of ...的证据'], ['video game 电子游戏', 'watch video 看视频']),
      createWord('evident', '/ˈevɪdənt/', 'adj.', '明显的', 'e(out) + vid看 + -ent形容词 → 看出来的 → 明显的', 'vid', '/vɪd/', '看', ['video game 电子游戏', 'evident that 明显的是', 'provide for 提供', 'evidence of ...的证据'], ['evident that 明显的是', 'self-evident 不言而喻']),
      createWord('provide', '/prəˈvaɪd/', 'v.', '提供', 'pro向前 + vid看 + e → 向前看到需求 → 提供', 'vid', '/vɪd/', '看', ['video game 电子游戏', 'evident that 明显的是', 'provide for 提供', 'evidence of ...的证据'], ['provide for 提供', 'provide with 提供']),
      createWord('evidence', '/ˈevɪdəns/', 'n.', '证据', 'e(out) + vid看 + -ence名词 → 看出来的东西 → 证据', 'vid', '/vɪd/', '看', ['video game 电子游戏', 'evident that 明显的是', 'provide for 提供', 'evidence of ...的证据'], ['evidence of ...的证据', 'conclusive evidence 确凿证据'])
    ],
    phrases: ['video game 电子游戏', 'evident that 明显的是', 'provide for 提供', 'evidence of ...的证据'],
    mnemonic: 'vid（看）→ 视觉感知 → 看'
  },
  {
    id: 11102, root: 'viv', phonetic: '/vɪv/', partOfSpeech: 'v.', meaning: '活', frequency: 152,
    words: [
      createWord('vivid', '/ˈvɪvɪd/', 'adj.', '生动的', 'viv活 + -id形容词 → 有活力的 → 生动的', 'viv', '/vɪv/', '活', ['vivid description 生动描述', 'survive on 靠...生存', 'revive the economy 振兴经济', 'survivor story 幸存者故事'], ['vivid description 生动描述', 'vivid memory 清晰记忆']),
      createWord('survive', '/sərˈvaɪv/', 'v.', '生存', 'sur上面 + viv活 + e → 在上面活下来 → 生存', 'viv', '/vɪv/', '活', ['vivid description 生动描述', 'survive on 靠...生存', 'revive the economy 振兴经济', 'survivor story 幸存者故事'], ['survive on 靠...生存', 'survive the disaster 在灾难中幸存']),
      createWord('revive', '/rɪˈvaɪv/', 'v.', '复苏', 're再 + viv活 + e → 再活过来 → 复苏', 'viv', '/vɪv/', '活', ['vivid description 生动描述', 'survive on 靠...生存', 'revive the economy 振兴经济', 'survivor story 幸存者故事'], ['revive the economy 振兴经济', 'revive hope 重燃希望']),
      createWord('survivor', '/sərˈvaɪvər/', 'n.', '幸存者', 'surviv(e)生存 + -or人 → 生存下来的人 → 幸存者', 'viv', '/vɪv/', '活', ['vivid description 生动描述', 'survive on 靠...生存', 'revive the economy 振兴经济', 'survivor story 幸存者故事'], ['survivor story 幸存者故事', 'lone survivor 唯一幸存者'])
    ],
    phrases: ['vivid description 生动描述', 'survive on 靠...生存', 'revive the economy 振兴经济', 'survivor story 幸存者故事'],
    mnemonic: 'viv（活）→ 生命力 → 活'
  },
  {
    id: 11103, root: 'voc', phonetic: '/vəʊk/', partOfSpeech: 'v.', meaning: '声音', frequency: 153,
    words: [
      createWord('vocal', '/ˈvəʊkl/', 'adj.', '声音的', 'voc声音 + -al形容词 → 与声音有关的 → 声音的', 'voc', '/vəʊk/', '声音', ['vocal cords 声带', 'advocate for 倡导', 'provoke anger 激怒', 'evoke memories 唤起回忆'], ['vocal cords 声带', 'vocal music 声乐']),
      createWord('advocate', '/ˈædvəkeɪt/', 'v./n.', '倡导/支持者', 'ad(to) + voc声音 + -ate → 发声支持 → 倡导', 'voc', '/vəʊk/', '声音', ['vocal cords 声带', 'advocate for 倡导', 'provoke anger 激怒', 'evoke memories 唤起回忆'], ['advocate for 倡导', 'strong advocate 坚定支持者']),
      createWord('provoke', '/prəˈvəʊk/', 'v.', '激怒', 'pro向前 + voke声音 → 向前喊叫 → 激怒', 'voc', '/vəʊk/', '声音', ['vocal cords 声带', 'advocate for 倡导', 'provoke anger 激怒', 'evoke memories 唤起回忆'], ['provoke anger 激怒', 'provoke reaction 引起反应']),
      createWord('evoke', '/ɪˈvəʊk/', 'v.', '唤起', 'e(out) + voke声音 → 喊出来 → 唤起', 'voc', '/vəʊk/', '声音', ['vocal cords 声带', 'advocate for 倡导', 'provoke anger 激怒', 'evoke memories 唤起回忆'], ['evoke memories 唤起回忆', 'evoke emotion 唤起情感'])
    ],
    phrases: ['vocal cords 声带', 'advocate for 倡导', 'provoke anger 激怒', 'evoke memories 唤起回忆'],
    mnemonic: 'voc（声音）→ 发声 → 声音'
  },
  {
    id: 11104, root: 'volv', phonetic: '/vɒlv/', partOfSpeech: 'v.', meaning: '滚动', frequency: 154,
    words: [
      createWord('evolve', '/ɪˈvɒlv/', 'v.', '进化', 'e(out) + volv滚动 + e → 向外展开 → 进化', 'volv', '/vɒlv/', '滚动', ['evolve from 从...进化', 'involve in 参与', 'revolution in ...的革命', 'volume of ...的卷'], ['evolve from 从...进化', 'evolve into 进化成']),
      createWord('involve', '/ɪnˈvɒlv/', 'v.', '涉及', 'in进入 + volv滚动 + e → 卷入 → 涉及', 'volv', '/vɒlv/', '滚动', ['evolve from 从...进化', 'involve in 参与', 'revolution in ...的革命', 'volume of ...的卷'], ['involve in 参与', 'get involved 卷入其中']),
      createWord('revolution', '/ˌrevəˈluːʃn/', 'n.', '革命', 're回 + volut滚动 + -ion名词 → 翻转 → 革命', 'volv', '/vɒlv/', '滚动', ['evolve from 从...进化', 'involve in 参与', 'revolution in ...的革命', 'volume of ...的卷'], ['revolution in ...的革命', 'industrial revolution 工业革命']),
      createWord('volume', '/ˈvɒljuːm/', 'n.', '卷/音量', 'volum滚动 + e → 卷起来的 → 卷', 'volv', '/vɒlv/', '滚动', ['evolve from 从...进化', 'involve in 参与', 'revolution in ...的革命', 'volume of ...的卷'], ['volume of ...的卷', 'turn up the volume 调高音量'])
    ],
    phrases: ['evolve from 从...进化', 'involve in 参与', 'revolution in ...的革命', 'volume of ...的卷'],
    mnemonic: 'volv（滚动）→ 翻滚变化 → 滚动'
  },
  {
    id: 11105, root: 'zo', phonetic: '/zəʊ/', partOfSpeech: 'n.', meaning: '动物', frequency: 155,
    words: [
      createWord('zoo', '/zuː/', 'n.', '动物园', 'zo动物 + o → 动物的园地 → 动物园', 'zo', '/zəʊ/', '动物', ['visit the zoo 参观动物园', 'zoology department 动物学系', 'zoologist study 动物学家研究', 'protozoan organism 原生生物'], ['visit the zoo 参观动物园', 'go to the zoo 去动物园']),
      createWord('zoology', '/zəʊˈɒlədʒi/', 'n.', '动物学', 'zo动物 + -logy学科 → 研究动物的学科 → 动物学', 'zo', '/zəʊ/', '动物', ['visit the zoo 参观动物园', 'zoology department 动物学系', 'zoologist study 动物学家研究', 'protozoan organism 原生生物'], ['zoology department 动物学系', 'study zoology 学习动物学']),
      createWord('zoologist', '/zəʊˈɒlədʒɪst/', 'n.', '动物学家', 'zoolog(y)动物学 + -ist人 → 研究动物的人 → 动物学家', 'zo', '/zəʊ/', '动物', ['visit the zoo 参观动物园', 'zoology department 动物学系', 'zoologist study 动物学家研究', 'protozoan organism 原生生物'], ['zoologist study 动物学家研究', 'famous zoologist 著名动物学家']),
      createWord('protozoan', '/ˌprəʊtəˈzəʊən/', 'n.', '原生动物', 'proto原始 + zo动物 + -an名词 → 原始动物 → 原生动物', 'zo', '/zəʊ/', '动物', ['visit the zoo 参观动物园', 'zoology department 动物学系', 'zoologist study 动物学家研究', 'protozoan organism 原生生物'], ['protozoan organism 原生生物', 'single-celled protozoan 单细胞原生动物'])
    ],
    phrases: ['visit the zoo 参观动物园', 'zoology department 动物学系', 'zoologist study 动物学家研究', 'protozoan organism 原生生物'],
    mnemonic: 'zo（动物）→ 动物世界 → 动物'
  },
  {
    id: 11106, root: 'auto', phonetic: '/ɔːtəʊ/', partOfSpeech: 'n.', meaning: '自己/自动', frequency: 156,
    words: [
      createWord('automatic', '/ˌɔːtəˈmætɪk/', 'adj.', '自动的', 'auto自己 + mat行动 + -ic形容词 → 自己行动的 → 自动的', 'auto', '/ɔːtəʊ/', '自己/自动', ['automatic system 自动系统', 'automobile industry 汽车工业', 'autobiography of ...的自传', 'autonomous region 自治区'], ['automatic system 自动系统', 'fully automatic 全自动']),
      createWord('automobile', '/ˈɔːtəməʊbiːl/', 'n.', '汽车', 'auto自己 + mob移动 + ile → 自己移动的 → 汽车', 'auto', '/ɔːtəʊ/', '自己/自动', ['automatic system 自动系统', 'automobile industry 汽车工业', 'autobiography of ...的自传', 'autonomous region 自治区'], ['automobile industry 汽车工业', 'drive an automobile 开汽车']),
      createWord('autobiography', '/ˌɔːtəbaɪˈɒɡrəfi/', 'n.', '自传', 'auto自己 + bio生命 + graph写 + y → 写自己的生命 → 自传', 'auto', '/ɔːtəʊ/', '自己/自动', ['automatic system 自动系统', 'automobile industry 汽车工业', 'autobiography of ...的自传', 'autonomous region 自治区'], ['autobiography of ...的自传', 'write an autobiography 写自传']),
      createWord('autonomy', '/ɔːˈtɒnəmi/', 'n.', '自治', 'auto自己 + nom法律 + y → 自己制定法律 → 自治', 'auto', '/ɔːtəʊ/', '自己/自动', ['automatic system 自动系统', 'automobile industry 汽车工业', 'autobiography of ...的自传', 'autonomous region 自治区'], ['autonomous region 自治区', 'grant autonomy 给予自治权'])
    ],
    phrases: ['automatic system 自动系统', 'automobile industry 汽车工业', 'autobiography of ...的自传', 'autonomous region 自治区'],
    mnemonic: 'auto（自己）→ 自主独立 → 自己/自动'
  },
  {
    id: 11107, root: 'bene', phonetic: '/beni/', partOfSpeech: 'adv.', meaning: '好', frequency: 157,
    words: [
      createWord('benefit', '/ˈbenɪfɪt/', 'n./v.', '好处/受益', 'bene好 + fic做 + t → 做好事 → 好处', 'bene', '/beni/', '好', ['benefit from 从...受益', 'beneficial to 对...有益', 'benevolent organization 慈善组织', 'benefactor of ...的恩人'], ['benefit from 从...受益', 'health benefit 健康益处']),
      createWord('beneficial', '/ˌbenɪˈfɪʃl/', 'adj.', '有益的', 'bene好 + fic做 + -ial形容词 → 做好事的 → 有益的', 'bene', '/beni/', '好', ['benefit from 从...受益', 'beneficial to 对...有益', 'benevolent organization 慈善组织', 'benefactor of ...的恩人'], ['beneficial to 对...有益', 'highly beneficial 非常有益']),
      createWord('benevolent', '/bəˈnevələnt/', 'adj.', '仁慈的', 'bene好 + vol意愿 + -ent形容词 → 有好意的 → 仁慈的', 'bene', '/beni/', '好', ['benefit from 从...受益', 'beneficial to 对...有益', 'benevolent organization 慈善组织', 'benefactor of ...的恩人'], ['benevolent organization 慈善组织', 'benevolent leader 仁慈的领导者']),
      createWord('benefactor', '/ˈbenɪfæktər/', 'n.', '恩人', 'bene好 + fact做 + -or人 → 做好事的人 → 恩人', 'bene', '/beni/', '好', ['benefit from 从...受益', 'beneficial to 对...有益', 'benevolent organization 慈善组织', 'benefactor of ...的恩人'], ['benefactor of ...的恩人', 'generous benefactor 慷慨的恩人'])
    ],
    phrases: ['benefit from 从...受益', 'beneficial to 对...有益', 'benevolent organization 慈善组织', 'benefactor of ...的恩人'],
    mnemonic: 'bene（好）→ 善良美好 → 好'
  },
  {
    id: 11108, root: 'circu', phonetic: '/sɜːrkju/', partOfSpeech: 'n.', meaning: '圆/环', frequency: 158,
    words: [
      createWord('circle', '/ˈsɜːrkl/', 'n./v.', '圆圈/环绕', 'circu圆 + -le名词 → 圆形 → 圆圈', 'circu', '/sɜːrkju/', '圆/环', ['circle around 围绕', 'circuit board 电路板', 'circulate information 传播信息', 'circumstance of ...的情况'], ['circle around 围绕', 'vicious circle 恶性循环']),
      createWord('circuit', '/ˈsɜːrkɪt/', 'n.', '电路/环行', 'circu圆 + it走 → 走一圈 → 环行', 'circu', '/sɜːrkju/', '圆/环', ['circle around 围绕', 'circuit board 电路板', 'circulate information 传播信息', 'circumstance of ...的情况'], ['circuit board 电路板', 'integrated circuit 集成电路']),
      createWord('circulate', '/ˈsɜːrkjəleɪt/', 'v.', '循环/传播', 'circu圆 + -late动词 → 使成圆圈 → 循环', 'circu', '/sɜːrkju/', '圆/环', ['circle around 围绕', 'circuit board 电路板', 'circulate information 传播信息', 'circumstance of ...的情况'], ['circulate information 传播信息', 'blood circulate 血液循环']),
      createWord('circumstance', '/ˈsɜːrkəmstæns/', 'n.', '情况', 'circum周围 + stance站立 → 站在周围的事物 → 情况', 'circu', '/sɜːrkju/', '圆/环', ['circle around 围绕', 'circuit board 电路板', 'circulate information 传播信息', 'circumstance of ...的情况'], ['circumstance of ...的情况', 'under the circumstances 在此情况下'])
    ],
    phrases: ['circle around 围绕', 'circuit board 电路板', 'circulate information 传播信息', 'circumstance of ...的情况'],
    mnemonic: 'circu（圆）→ 圆周循环 → 圆/环'
  },
  {
    id: 11109, root: 'counter', phonetic: '/kaʊntər/', partOfSpeech: 'adv.', meaning: '相反/对抗', frequency: 159,
    words: [
      createWord('counter', '/ˈkaʊntər/', 'n./v./adv.', '柜台/反击/相反地', 'counter本身是词根，表示相反/对抗', 'counter', '/kaʊntər/', '相反/对抗', ['counter attack 反击', 'counteract the effect 抵消效果', 'encounter with 遭遇', 'counterargument against 反驳论点'], ['counter attack 反击', 'over the counter 非处方']),
      createWord('counteract', '/ˌkaʊntərˈækt/', 'v.', '抵消', 'counter相反 + act行动 → 相反行动 → 抵消', 'counter', '/kaʊntər/', '相反/对抗', ['counter attack 反击', 'counteract the effect 抵消效果', 'encounter with 遭遇', 'counterargument against 反驳论点'], ['counteract the effect 抵消效果', 'counteract poison 解毒']),
      createWord('encounter', '/ɪnˈkaʊntər/', 'v./n.', '遭遇', 'en使 + counter对抗 → 使对抗 → 遭遇', 'counter', '/kaʊntər/', '相反/对抗', ['counter attack 反击', 'counteract the effect 抵消效果', 'encounter with 遭遇', 'counterargument against 反驳论点'], ['encounter with 遭遇', 'unexpected encounter 意外遭遇']),
      createWord('counterargument', '/ˈkaʊntərˌɑːrɡjumənt/', 'n.', '反驳论点', 'counter相反 + argument论点 → 相反的论点 → 反驳论点', 'counter', '/kaʊntər/', '相反/对抗', ['counter attack 反击', 'counteract the effect 抵消效果', 'encounter with 遭遇', 'counterargument against 反驳论点'], ['counterargument against 反驳论点', 'strong counterargument 有力的反驳'])
    ],
    phrases: ['counter attack 反击', 'counteract the effect 抵消效果', 'encounter with 遭遇', 'counterargument against 反驳论点'],
    mnemonic: 'counter（相反）→ 对立反制 → 相反/对抗'
  },
  {
    id: 11110, root: 'de', phonetic: '/diː/', partOfSpeech: 'prefix', meaning: '向下/离开', frequency: 160,
    words: [
      createWord('decrease', '/dɪˈkriːs/', 'v.', '减少', 'de向下 + crease增长 → 向下增长 → 减少', 'de', '/diː/', '向下/离开', ['decrease in 减少', 'descend from 从...下降', 'depart from 离开', 'depress the market 压抑市场'], ['decrease in 减少', 'sharp decrease 急剧减少']),
      createWord('descend', '/dɪˈsend/', 'v.', '下降', 'de向下 + scend爬 → 向下爬 → 下降', 'de', '/diː/', '向下/离开', ['decrease in 减少', 'descend from 从...下降', 'depart from 离开', 'depress the market 压抑市场'], ['descend from 从...下降', 'descend into 沦为']),
      createWord('depart', '/dɪˈpɑːrt/', 'v.', '离开', 'de离开 + part部分 → 离开部分 → 离开', 'de', '/diː/', '向下/离开', ['decrease in 减少', 'descend from 从...下降', 'depart from 离开', 'depress the market 压抑市场'], ['depart from 离开', 'depart for 出发去']),
      createWord('depress', '/dɪˈpres/', 'v.', '压抑/沮丧', 'de向下 + press压 → 向下压 → 压抑', 'de', '/diː/', '向下/离开', ['decrease in 减少', 'descend from 从...下降', 'depart from 离开', 'depress the market 压抑市场'], ['depress the market 压抑市场', 'feel depressed 感到沮丧'])
    ],
    phrases: ['decrease in 减少', 'descend from 从...下降', 'depart from 离开', 'depress the market 压抑市场'],
    mnemonic: 'de（向下）→ 向下动作 → 向下/离开'
  },
  // 11111-11130
  {
    id: 11111, root: 'dia', phonetic: '/daɪə/', partOfSpeech: 'prefix', meaning: '穿过/之间', frequency: 161,
    words: [
      createWord('diameter', '/daɪˈæmɪtər/', 'n.', '直径', 'dia穿过 + meter测量 → 穿过测量 → 直径', 'dia', '/daɪə/', '穿过/之间', ['diameter of ...的直径', 'dialogue between ...之间的对话', 'diagnose the disease 诊断疾病', 'diagram of ...的图表'], ['diameter of ...的直径', 'inside diameter 内径']),
      createWord('dialogue', '/ˈdaɪəlɒɡ/', 'n.', '对话', 'dia之间 + logue说话 → 之间的说话 → 对话', 'dia', '/daɪə/', '穿过/之间', ['diameter of ...的直径', 'dialogue between ...之间的对话', 'diagnose the disease 诊断疾病', 'diagram of ...的图表'], ['dialogue between ...之间的对话', 'hold a dialogue 举行对话']),
      createWord('diagnose', '/ˈdaɪəɡnəʊz/', 'v.', '诊断', 'dia穿过 + gnose知道 → 穿过知道 → 诊断', 'dia', '/daɪə/', '穿过/之间', ['diameter of ...的直径', 'dialogue between ...之间的对话', 'diagnose the disease 诊断疾病', 'diagram of ...的图表'], ['diagnose the disease 诊断疾病', 'diagnose with 诊断为']),
      createWord('diagram', '/ˈdaɪəɡræm/', 'n.', '图表', 'dia穿过 + gram画 → 穿过画线 → 图表', 'dia', '/daɪə/', '穿过/之间', ['diameter of ...的直径', 'dialogue between ...之间的对话', 'diagnose the disease 诊断疾病', 'diagram of ...的图表'], ['diagram of ...的图表', 'draw a diagram 画图表'])
    ],
    phrases: ['diameter of ...的直径', 'dialogue between ...之间的对话', 'diagnose the disease 诊断疾病', 'diagram of ...的图表'],
    mnemonic: 'dia（穿过）→ 穿越之间 → 穿过/之间'
  },
  {
    id: 11112, root: 'eco', phonetic: '/iːkəʊ/', partOfSpeech: 'n.', meaning: '生态/经济', frequency: 162,
    words: [
      createWord('ecology', '/iˈkɒlədʒi/', 'n.', '生态学', 'eco生态 + -logy学科 → 研究生态的学科 → 生态学', 'eco', '/iːkəʊ/', '生态/经济', ['ecology system 生态系统', 'economic growth 经济增长', 'ecosystem balance 生态平衡', 'ecological damage 生态破坏'], ['ecology system 生态系统', 'human ecology 人类生态学']),
      createWord('economy', '/ɪˈkɒnəmi/', 'n.', '经济', 'eco家 + -nomy管理 → 家庭管理 → 经济', 'eco', '/iːkəʊ/', '生态/经济', ['ecology system 生态系统', 'economic growth 经济增长', 'ecosystem balance 生态平衡', 'ecological damage 生态破坏'], ['economic growth 经济增长', 'global economy 全球经济']),
      createWord('ecosystem', '/ˈiːkəʊsɪstəm/', 'n.', '生态系统', 'eco生态 + system系统 → 生态的系统 → 生态系统', 'eco', '/iːkəʊ/', '生态/经济', ['ecology system 生态系统', 'economic growth 经济增长', 'ecosystem balance 生态平衡', 'ecological damage 生态破坏'], ['ecosystem balance 生态平衡', 'marine ecosystem 海洋生态系统']),
      createWord('ecological', '/ˌiːkəˈlɒdʒɪkl/', 'adj.', '生态的', 'ecolog(y)生态 + -ical形容词 → 与生态有关的 → 生态的', 'eco', '/iːkəʊ/', '生态/经济', ['ecology system 生态系统', 'economic growth 经济增长', 'ecosystem balance 生态平衡', 'ecological damage 生态破坏'], ['ecological damage 生态破坏', 'ecological balance 生态平衡'])
    ],
    phrases: ['ecology system 生态系统', 'economic growth 经济增长', 'ecosystem balance 生态平衡', 'ecological damage 生态破坏'],
    mnemonic: 'eco（生态）→ 家园环境 → 生态/经济'
  },
  {
    id: 11113, root: 'extra', phonetic: '/ekstrə/', partOfSpeech: 'adv.', meaning: '超出', frequency: 163,
    words: [
      createWord('extra', '/ˈekstrə/', 'adj./adv.', '额外的', 'extra本身是词根，表示超出', 'extra', '/ekstrə/', '超出', ['extra charge 额外费用', 'extraordinary event 非凡事件', 'extravagant lifestyle 奢侈生活', 'extraterrestrial life 外星生命'], ['extra charge 额外费用', 'do extra 做额外的事']),
      createWord('extraordinary', '/ɪkˈstrɔːrdənri/', 'adj.', '非凡的', 'extra超出 + ordinary普通 → 超出普通的 → 非凡的', 'extra', '/ekstrə/', '超出', ['extra charge 额外费用', 'extraordinary event 非凡事件', 'extravagant lifestyle 奢侈生活', 'extraterrestrial life 外星生命'], ['extraordinary event 非凡事件', 'truly extraordinary 真正非凡']),
      createWord('extravagant', '/ɪkˈstrævəɡənt/', 'adj.', '奢侈的', 'extra超出 + vag漫游 + -ant形容词 → 漫游超出界限 → 奢侈的', 'extra', '/ekstrə/', '超出', ['extra charge 额外费用', 'extraordinary event 非凡事件', 'extravagant lifestyle 奢侈生活', 'extraterrestrial life 外星生命'], ['extravagant lifestyle 奢侈生活', 'extravagant spending 挥霍']),
      createWord('extraterrestrial', '/ˌekstrətəˈrestriəl/', 'adj./n.', '外星的/外星人', 'extra超出 + terrestrial地球 → 地球之外的 → 外星的', 'extra', '/ekstrə/', '超出', ['extra charge 额外费用', 'extraordinary event 非凡事件', 'extravagant lifestyle 奢侈生活', 'extraterrestrial life 外星生命'], ['extraterrestrial life 外星生命', 'search for extraterrestrial 寻找外星生命'])
    ],
    phrases: ['extra charge 额外费用', 'extraordinary event 非凡事件', 'extravagant lifestyle 奢侈生活', 'extraterrestrial life 外星生命'],
    mnemonic: 'extra（超出）→ 超越常规 → 超出'
  },
  {
    id: 11114, root: 'fore', phonetic: '/fɔːr/', partOfSpeech: 'adv.', meaning: '前面', frequency: 164,
    words: [
      createWord('forecast', '/ˈfɔːrkæst/', 'v./n.', '预测', 'fore前面 + cast投掷 → 向前投 → 预测', 'fore', '/fɔːr/', '前面', ['weather forecast 天气预报', 'foresee the future 预见未来', 'forehead injury 额头受伤', 'foreground figure 前景人物'], ['weather forecast 天气预报', 'economic forecast 经济预测']),
      createWord('foresee', '/fɔːrˈsiː/', 'v.', '预见', 'fore前面 + see看 → 向前看 → 预见', 'fore', '/fɔːr/', '前面', ['weather forecast 天气预报', 'foresee the future 预见未来', 'forehead injury 额头受伤', 'foreground figure 前景人物'], ['foresee the future 预见未来', 'hard to foresee 难以预见']),
      createWord('forehead', '/ˈfɔːrhed/', 'n.', '额头', 'fore前面 + head头 → 头的前面 → 额头', 'fore', '/fɔːr/', '前面', ['weather forecast 天气预报', 'foresee the future 预见未来', 'forehead injury 额头受伤', 'foreground figure 前景人物'], ['forehead injury 额头受伤', 'wipe forehead 擦额头']),
      createWord('foreground', '/ˈfɔːrɡraʊnd/', 'n.', '前景', 'fore前面 + ground地面 → 前面的地面 → 前景', 'fore', '/fɔːr/', '前面', ['weather forecast 天气预报', 'foresee the future 预见未来', 'forehead injury 额头受伤', 'foreground figure 前景人物'], ['foreground figure 前景人物', 'in the foreground 在前景中'])
    ],
    phrases: ['weather forecast 天气预报', 'foresee the future 预见未来', 'forehead injury 额头受伤', 'foreground figure 前景人物'],
    mnemonic: 'fore（前面）→ 向前展望 → 前面'
  },
  {
    id: 11115, root: 'gen', phonetic: '/dʒen/', partOfSpeech: 'n.', meaning: '产生/出生', frequency: 165,
    words: [
      createWord('generate', '/ˈdʒenəreɪt/', 'v.', '产生', 'gen产生 + -erate动词 → 使产生 → 产生', 'gen', '/dʒen/', '产生/出生', ['generate electricity 发电', 'general public 公众', 'gene mutation 基因突变', 'generous contribution 慷慨贡献'], ['generate electricity 发电', 'generate income 产生收入']),
      createWord('general', '/ˈdʒenərəl/', 'adj./n.', '一般的/将军', 'gen产生 + -eral形容词 → 产生全体的 → 一般的', 'gen', '/dʒen/', '产生/出生', ['generate electricity 发电', 'general public 公众', 'gene mutation 基因突变', 'generous contribution 慷慨贡献'], ['general public 公众', 'in general 总体上']),
      createWord('gene', '/dʒiːn/', 'n.', '基因', 'gen产生 + e → 产生生命的基本单位 → 基因', 'gen', '/dʒen/', '产生/出生', ['generate electricity 发电', 'general public 公众', 'gene mutation 基因突变', 'generous contribution 慷慨贡献'], ['gene mutation 基因突变', 'human gene 人类基因']),
      createWord('generous', '/ˈdʒenərəs/', 'adj.', '慷慨的', 'gen产生 + -erous形容词 → 不断产生 → 慷慨的', 'gen', '/dʒen/', '产生/出生', ['generate electricity 发电', 'general public 公众', 'gene mutation 基因突变', 'generous contribution 慷慨贡献'], ['generous contribution 慷慨贡献', 'very generous 非常慷慨'])
    ],
    phrases: ['generate electricity 发电', 'general public 公众', 'gene mutation 基因突变', 'generous contribution 慷慨贡献'],
    mnemonic: 'gen（产生）→ 创造生命 → 产生/出生'
  },
  {
    id: 11116, root: 'homo', phonetic: '/həʊməʊ/', partOfSpeech: 'adj.', meaning: '相同', frequency: 166,
    words: [
      createWord('homosexual', '/ˌhəʊməˈsekʃuəl/', 'adj./n.', '同性恋的/同性恋者', 'homo相同 + sexual性的 → 相同性别的 → 同性恋的', 'homo', '/həʊməʊ/', '相同', ['homosexual couple 同性情侣', 'homogeneous mixture 均匀混合物', 'homonym list 同音异义词列表', 'homophone pair 同音词对'], ['homosexual couple 同性情侣', 'homosexual rights 同性恋权利']),
      createWord('homogeneous', '/ˌhəʊməˈdʒiːniəs/', 'adj.', '同质的', 'homo相同 + gen产生 + -eous形容词 → 产生相同的 → 同质的', 'homo', '/həʊməʊ/', '相同', ['homosexual couple 同性情侣', 'homogeneous mixture 均匀混合物', 'homonym list 同音异义词列表', 'homophone pair 同音词对'], ['homogeneous mixture 均匀混合物', 'homogeneous group 同质群体']),
      createWord('homonym', '/ˈhɒmənɪm/', 'n.', '同音异义词', 'homo相同 + nym名字 → 相同名字 → 同音异义词', 'homo', '/həʊməʊ/', '相同', ['homosexual couple 同性情侣', 'homogeneous mixture 均匀混合物', 'homonym list 同音异义词列表', 'homophone pair 同音词对'], ['homonym list 同音异义词列表', 'English homonyms 英语同音异义词']),
      createWord('homophone', '/ˈhəʊməfəʊn/', 'n.', '同音词', 'homo相同 + phon声音 + e → 相同声音 → 同音词', 'homo', '/həʊməʊ/', '相同', ['homosexual couple 同性情侣', 'homogeneous mixture 均匀混合物', 'homonym list 同音异义词列表', 'homophone pair 同音词对'], ['homophone pair 同音词对', 'common homophone 常见同音词'])
    ],
    phrases: ['homosexual couple 同性情侣', 'homogeneous mixture 均匀混合物', 'homonym list 同音异义词列表', 'homophone pair 同音词对'],
    mnemonic: 'homo（相同）→ 一致无差 → 相同'
  },
  {
    id: 11117, root: 'hyper', phonetic: '/haɪpər/', partOfSpeech: 'adv.', meaning: '超过/过度', frequency: 167,
    words: [
      createWord('hyperactive', '/ˌhaɪpərˈæktɪv/', 'adj.', '过度活跃的', 'hyper过度 + active活跃的 → 过度活跃的', 'hyper', '/haɪpər/', '超过/过度', ['hyperactive child 多动儿童', 'hypertension patient 高血压患者', 'hypocrisy of ...的虚伪', 'hypothetical situation 假设情况'], ['hyperactive child 多动儿童', 'become hyperactive 变得多动']),
      createWord('hypertension', '/ˌhaɪpərˈtenʃn/', 'n.', '高血压', 'hyper超过 + tens压力 + -ion名词 → 压力超过 → 高血压', 'hyper', '/haɪpər/', '超过/过度', ['hyperactive child 多动儿童', 'hypertension patient 高血压患者', 'hypocrisy of ...的虚伪', 'hypothetical situation 假设情况'], ['hypertension patient 高血压患者', 'suffer from hypertension 患有高血压']),
      createWord('hypocrisy', '/hɪˈpɒkrəsi/', 'n.', '虚伪', 'hypo在...下 + crisy判断 → 表面下的判断 → 虚伪', 'hyper', '/haɪpər/', '超过/过度', ['hyperactive child 多动儿童', 'hypertension patient 高血压患者', 'hypocrisy of ...的虚伪', 'hypothetical situation 假设情况'], ['hypocrisy of ...的虚伪', 'political hypocrisy 政治虚伪']),
      createWord('hypothetical', '/ˌhaɪpəˈθetɪkl/', 'adj.', '假设的', 'hypo在...下 + thet放置 + -ical形容词 → 放在下面的 → 假设的', 'hyper', '/haɪpər/', '超过/过度', ['hyperactive child 多动儿童', 'hypertension patient 高血压患者', 'hypocrisy of ...的虚伪', 'hypothetical situation 假设情况'], ['hypothetical situation 假设情况', 'purely hypothetical 纯属假设'])
    ],
    phrases: ['hyperactive child 多动儿童', 'hypertension patient 高血压患者', 'hypocrisy of ...的虚伪', 'hypothetical situation 假设情况'],
    mnemonic: 'hyper（超过）→ 超越极限 → 超过/过度'
  },
  {
    id: 11118, root: 'hypo', phonetic: '/haɪpəʊ/', partOfSpeech: 'adv.', meaning: '下面/低于', frequency: 168,
    words: [
      createWord('hypothesis', '/haɪˈpɒθəsɪs/', 'n.', '假设', 'hypo下面 + thesis放置 → 放在下面的基础 → 假设', 'hypo', '/haɪpəʊ/', '下面/低于', ['research hypothesis 研究假设', 'hypodermic needle 皮下注射针', 'hypothermia treatment 低体温治疗', 'hypocritical behavior 虚伪行为'], ['research hypothesis 研究假设', 'test a hypothesis 验证假设']),
      createWord('hypodermic', '/ˌhaɪpəˈdɜːrmɪk/', 'adj.', '皮下的', 'hypo下面 + derm皮肤 + -ic形容词 → 皮肤下面的 → 皮下的', 'hypo', '/haɪpəʊ/', '下面/低于', ['research hypothesis 研究假设', 'hypodermic needle 皮下注射针', 'hypothermia treatment 低体温治疗', 'hypocritical behavior 虚伪行为'], ['hypodermic needle 皮下注射针', 'hypodermic injection 皮下注射']),
      createWord('hypothermia', '/ˌhaɪpəʊˈθɜːrmiə/', 'n.', '低体温', 'hypo低于 + therm热 + -ia病症 → 热量过低 → 低体温', 'hypo', '/haɪpəʊ/', '下面/低于', ['research hypothesis 研究假设', 'hypodermic needle 皮下注射针', 'hypothermia treatment 低体温治疗', 'hypocritical behavior 虚伪行为'], ['hypothermia treatment 低体温治疗', 'severe hypothermia 严重低体温']),
      createWord('hypocritical', '/ˌhɪpəˈkrɪtɪkl/', 'adj.', '虚伪的', 'hypo下面 + critic批评 + -al形容词 → 表面下批评 → 虚伪的', 'hypo', '/haɪpəʊ/', '下面/低于', ['research hypothesis 研究假设', 'hypodermic needle 皮下注射针', 'hypothermia treatment 低体温治疗', 'hypocritical behavior 虚伪行为'], ['hypocritical behavior 虚伪行为', 'sound hypocritical 听起来虚伪'])
    ],
    phrases: ['research hypothesis 研究假设', 'hypodermic needle 皮下注射针', 'hypothermia treatment 低体温治疗', 'hypocritical behavior 虚伪行为'],
    mnemonic: 'hypo（下面）→ 低处位置 → 下面/低于'
  },
  {
    id: 11119, root: 'inter', phonetic: '/ɪntər/', partOfSpeech: 'adv.', meaning: '在...之间', frequency: 169,
    words: [
      createWord('international', '/ˌɪntərˈnæʃnəl/', 'adj.', '国际的', 'inter之间 + nation国家 + -al形容词 → 国家之间的 → 国际的', 'inter', '/ɪntər/', '在...之间', ['international trade 国际贸易', 'interact with 与...互动', 'interrupt the meeting 打断会议', 'interview for ...的面试'], ['international trade 国际贸易', 'international relations 国际关系']),
      createWord('interact', '/ˌɪntərˈækt/', 'v.', '互动', 'inter之间 + act行动 → 之间的行动 → 互动', 'inter', '/ɪntər/', '在...之间', ['international trade 国际贸易', 'interact with 与...互动', 'interrupt the meeting 打断会议', 'interview for ...的面试'], ['interact with 与...互动', 'social interact 社交互动']),
      createWord('interrupt', '/ˌɪntəˈrʌpt/', 'v.', '打断', 'inter之间 + rupt断裂 → 在中间断裂 → 打断', 'inter', '/ɪntər/', '在...之间', ['international trade 国际贸易', 'interact with 与...互动', 'interrupt the meeting 打断会议', 'interview for ...的面试'], ['interrupt the meeting 打断会议', 'interrupt sb 打断某人']),
      createWord('interview', '/ˈɪntərvjuː/', 'n./v.', '面试/采访', 'inter之间 + view看 → 之间看 → 面试', 'inter', '/ɪntər/', '在...之间', ['international trade 国际贸易', 'interact with 与...互动', 'interrupt the meeting 打断会议', 'interview for ...的面试'], ['interview for ...的面试', 'job interview 求职面试'])
    ],
    phrases: ['international trade 国际贸易', 'interact with 与...互动', 'interrupt the meeting 打断会议', 'interview for ...的面试'],
    mnemonic: 'inter（之间）→ 相互关系 → 在...之间'
  },
  {
    id: 11120, root: 'macro', phonetic: '/mækrəʊ/', partOfSpeech: 'adj.', meaning: '大', frequency: 170,
    words: [
      createWord('macro', '/ˈmækrəʊ/', 'adj./n.', '宏观的/宏', 'macro本身是词根，表示大', 'macro', '/mækrəʊ/', '大', ['macro economics 宏观经济学', 'macroscopic view 宏观视角', 'macro structure 宏观结构', 'macro photography 微距摄影'], ['macro economics 宏观经济学', 'macro level 宏观层面']),
      createWord('macroscopic', '/ˌmækrəˈskɒpɪk/', 'adj.', '宏观的', 'macro大 + scop观察 + -ic形容词 → 大范围观察 → 宏观的', 'macro', '/mækrəʊ/', '大', ['macro economics 宏观经济学', 'macroscopic view 宏观视角', 'macro structure 宏观结构', 'macro photography 微距摄影'], ['macroscopic view 宏观视角', 'macroscopic scale 宏观尺度']),
      createWord('macrostructure', '/ˈmækrəʊstrʌktʃər/', 'n.', '宏观结构', 'macro大 + structure结构 → 大的结构 → 宏观结构', 'macro', '/mækrəʊ/', '大', ['macro economics 宏观经济学', 'macroscopic view 宏观视角', 'macro structure 宏观结构', 'macro photography 微距摄影'], ['macro structure 宏观结构', 'social macrostructure 社会宏观结构']),
      createWord('macro photography', '/ˈmækrəʊ fəˈtɒɡrəfi/', 'n.', '微距摄影', 'macro大 + photography摄影 → 放大摄影 → 微距摄影', 'macro', '/mækrəʊ/', '大', ['macro economics 宏观经济学', 'macroscopic view 宏观视角', 'macro structure 宏观结构', 'macro photography 微距摄影'], ['macro photography 微距摄影', 'take macro photos 拍摄微距照片'])
    ],
    phrases: ['macro economics 宏观经济学', 'macroscopic view 宏观视角', 'macro structure 宏观结构', 'macro photography 微距摄影'],
    mnemonic: 'macro（大）→ 宏观视角 → 大'
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
console.log('Added ' + rootsData.length + ' roots (11101-11120)');
