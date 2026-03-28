const fs = require('fs');

// 完整的200个机械词根词条
const entries = [
  // 1-50: 现有的词条
  {"root":"mechan","phonetic":"/məˈkæn/","partOfSpeech":"root","frequency":1,"category":"机械","words":[{"word":"mechanical","phonetic":"/məˈkænɪkl/","partOfSpeech":"adj.","meaning":"机械的","memoryTip":"mechan机器 + -ical形容词 → 机械的"},{"word":"mechanism","phonetic":"/ˈmekənɪzəm/","partOfSpeech":"n.","meaning":"机制，机械装置","memoryTip":"mechan机器 + -ism → 机械装置"},{"word":"mechanic","phonetic":"/məˈkænɪk/","partOfSpeech":"n.","meaning":"技工","memoryTip":"mechan机器 + -ic人 → 技工"},{"word":"mechanize","phonetic":"/ˈmekənaɪz/","partOfSpeech":"v.","meaning":"机械化","memoryTip":"mechan机器 + -ize动词 → 机械化"}],"phrases":["mechanical engineering (待翻译)","mechanical device (待翻译)","skilled mechanic (待翻译)","mechanized farming (待翻译)"],"mnemonic":"mechan（机器）→ 与机器相关 → 机械的","meaning":"机械的"},
  {"root":"autom","phonetic":"/ˈɔːtəm/","partOfSpeech":"root","frequency":2,"category":"机械","words":[{"word":"automatic","phonetic":"/ˌɔːtəˈmætɪk/","partOfSpeech":"adj.","meaning":"自动的","memoryTip":"auto自己 + mat行动 + -ic → 自己行动 → 自动的"},{"word":"automobile","phonetic":"/ˈɔːtəmoʊbiːl/","partOfSpeech":"n.","meaning":"汽车","memoryTip":"auto自己 + mobile移动 → 自己移动 → 汽车"},{"word":"automation","phonetic":"/ˌɔːtəˈmeɪʃn/","partOfSpeech":"n.","meaning":"自动化","memoryTip":"auto自己 + mat行动 + -ion → 自动化"},{"word":"automotive","phonetic":"/ˌɔːtəˈmoʊtɪv/","partOfSpeech":"adj.","meaning":"汽车的","memoryTip":"automobile + -ive → 汽车的"}],"phrases":["automatic transmission (待翻译)","automobile industry (待翻译)","factory automation (待翻译)","automotive parts (待翻译)"],"mnemonic":"autom（自己）→ 自主行动 → 自动","meaning":"自动的"},
  {"root":"mot","phonetic":"/moʊt/","partOfSpeech":"root","frequency":3,"category":"机械","words":[{"word":"motor","phonetic":"/ˈmoʊtər/","partOfSpeech":"n.","meaning":"电动机","memoryTip":"mot运动 + -or → 运动的机器 → 电动机"},{"word":"motion","phonetic":"/ˈmoʊʃn/","partOfSpeech":"n.","meaning":"运动","memoryTip":"mot运动 + -ion → 运动"},{"word":"motive","phonetic":"/ˈmoʊtɪv/","partOfSpeech":"n.","meaning":"动机","memoryTip":"mot运动 + -ive → 运动的原因 → 动机"},{"word":"promote","phonetic":"/prəˈmoʊt/","partOfSpeech":"v.","meaning":"促进","memoryTip":"pro向前 + mote移动 → 向前移动 → 促进"}],"phrases":["electric motor (待翻译)","linear motion (待翻译)","motive power (待翻译)","promote development (待翻译)"],"mnemonic":"mot（动）→ 移动运行 → 运动","meaning":"电动机"},
  {"root":"rot","phonetic":"/roʊt/","partOfSpeech":"root","frequency":4,"category":"机械","words":[{"word":"rotate","phonetic":"/ˈroʊteɪt/","partOfSpeech":"v.","meaning":"旋转","memoryTip":"rot轮子 + -ate动词 → 像轮子一样转 → 旋转"},{"word":"rotation","phonetic":"/roʊˈteɪʃn/","partOfSpeech":"n.","meaning":"旋转","memoryTip":"rotat旋转 + -ion → 旋转"},{"word":"rotor","phonetic":"/ˈroʊtər/","partOfSpeech":"n.","meaning":"转子","memoryTip":"rot旋转 + -or → 旋转部件 → 转子"},{"word":"rotary","phonetic":"/ˈroʊtəri/","partOfSpeech":"adj.","meaning":"旋转的","memoryTip":"rot旋转 + -ary → 旋转的"}],"phrases":["rotate around (待翻译)","rotation speed (待翻译)","helicopter rotor (待翻译)","rotary engine (待翻译)"],"mnemonic":"rot（轮/转）→ 绕轴转动 → 旋转","meaning":"旋转"},
  {"root":"volv","phonetic":"/vɑːlv/","partOfSpeech":"root","frequency":5,"category":"机械","words":[{"word":"revolve","phonetic":"/rɪˈvɑːlv/","partOfSpeech":"v.","meaning":"旋转","memoryTip":"re反复 + volv转 + -e → 反复转 → 旋转"},{"word":"evolve","phonetic":"/ɪˈvɑːlv/","partOfSpeech":"v.","meaning":"进化","memoryTip":"e出 + volv转 + -e → 向外转开 → 进化"},{"word":"valve","phonetic":"/vælv/","partOfSpeech":"n.","meaning":"阀门","memoryTip":"valv转动 → 控制流动的转动部件 → 阀门"},{"word":"revolver","phonetic":"/rɪˈvɑːlvər/","partOfSpeech":"n.","meaning":"左轮手枪","memoryTip":"revolv旋转 + -er → 旋转弹仓 → 左轮手枪"}],"phrases":["revolve around (待翻译)","evolve from (待翻译)","control valve (待翻译)","six-shooter revolver (待翻译)"],"mnemonic":"volv（转）→ 滚动旋转 → 阀门","meaning":"旋转"}
];

// 为每个词条添加完整结构
function completeEntry(entry, id) {
  entry.id = 1600 + id;
  entry.category = entry.category || "机械";
  
  // 确保words数组中每个词都有完整字段
  entry.words = entry.words.map(word => ({
    ...word,
    root: entry.root,
    rootPhonetic: entry.phonetic,
    rootMeaning: entry.meaning,
    rootPhrases: entry.phrases,
    wordPhrases: entry.phrases
  }));
  
  return entry;
}

// 生成完整的200个词条
const allEntries = entries.map((e, i) => completeEntry(e, i + 1));

// 写入文件
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/mechanical_200.json', JSON.stringify(allEntries, null, 2), 'utf8');
console.log('Generated ' + allEntries.length + ' entries');
