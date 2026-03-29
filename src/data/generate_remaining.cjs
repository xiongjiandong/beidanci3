const fs = require('fs');

// Read existing entries and already generated entries
const existingData = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));
const tempEntries = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/temp_entries.json', 'utf8'));

console.log('Existing entries:', existingData.length);
console.log('Temp entries:', tempEntries.length);

const newEntries = [...tempEntries];

function createEntry(id, freq, root, phonetic, pos, meaning, words, phrases, mnemonic) {
    const wordPhrases = words.map(w => [
        w[0] + ' technology',
        w[0] + ' process',
        w[0] + ' equipment',
        w[0] + ' application'
    ]);

    return {
        id: id,
        root: root,
        phonetic: phonetic,
        partOfSpeech: pos,
        frequency: freq,
        category: '半导体',
        words: words.map((w, idx) => ({
            word: w[0],
            phonetic: w[1],
            partOfSpeech: w[2] || pos,
            meaning: w[3],
            memoryTip: w[4],
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases.map(p => p.split(' (')[0]),
            wordPhrases: wordPhrases[idx]
        })),
        phrases: phrases,
        mnemonic: mnemonic,
        meaning: meaning
    };
}

function processBatch(batchData) {
    batchData.forEach(entry => {
        const [id, root, phonetic, pos, meaning, words, phrases, mnemonic] = entry;
        newEntries.push(createEntry(id, id, root, phonetic, pos, meaning, words, phrases, mnemonic));
    });
}

// Entries 231-260: 半导体材料
const entries231_260 = [
    [231, 'silicon', '/ˈsɪlɪkən/', 'n.', '硅', [['silicon','/ˈsɪlɪkən/','n.','硅','silicon硅 → 半导体基础材料'],['polysilicon','/ˌpɒliˈsɪlɪkən/','n.','多晶硅','poly多 + silicon硅 → 多晶硅'],['monocrystalline','/ˌmɒnəʊˈkrɪstəlaɪn/','adj.','单晶的','mono单 + crystalline晶体 → 单晶'],['amorphous','/əˈmɔːrfəs/','adj.','非晶的','a无 + morph形 + ous → 非晶']], ['silicon wafer (硅晶圆)', 'silicon crystal (硅晶体)', 'silicon ingot (硅锭)', 'silicon boule (硅单晶棒)'], 'silicon（硅）→ 半导体工业的基石 → 硅材料'],
    [232, 'germanium', '/dʒɜːrˈmeɪniəm/', 'n.', '锗', [['germanium','/dʒɜːrˈmeɪniəm/','n.','锗','germanium锗 → Ge元素'],['germanium wafer','/dʒɜːrˈmeɪniəm ˈweɪfər/','n.','锗晶圆','germanium + wafer → 锗晶圆'],['SiGe','/ˌes aɪ dʒiː iː/','n.','硅锗','Silicon Germanium → 硅锗'],['strained SiGe','/streɪnd ˌes aɪ dʒiː iː/','n.','应变硅锗','strained应变 + SiGe → 应变硅锗']], ['germanium substrate (锗衬底)', 'SiGe alloy (硅锗合金)', 'germanium doping (锗掺杂)', 'germanium epitaxy (锗外延)'], 'germanium（锗）→ 第一代半导体材料 → 锗'],
    [233, 'gallium', '/ˈɡæliəm/', 'n.', '镓', [['gallium','/ˈɡæliəm/','n.','镓','gallium镓 → Ga元素'],['GaAs','/ˌdʒiː eɪ ˈeɪ es/','n.','砷化镓','Gallium Arsenide → 砷化镓'],['GaN','/ˌdʒiː eɪ ˈen/','n.','氮化镓','Gallium Nitride → 氮化镓'],['gallium oxide','/ˈɡæliəm ˈɒksaɪd/','n.','氧化镓','gallium + oxide → 氧化镓']], ['gallium arsenide (砷化镓)', 'gallium nitride (氮化镓)', 'GaAs wafer (砷化镓晶圆)', 'GaN substrate (氮化镓衬底)'], 'gallium（镓）→ 化合物半导体重要元素 → 镓'],
    [234, 'arsenide', '/ˈɑːrsənaɪd/', 'n.', '砷化物', [['arsenide','/ˈɑːrsənaɪd/','n.','砷化物','arsenic砷 + ide化物 → 砷化物'],['GaAs','/ˌdʒiː eɪ ˈeɪ es/','n.','砷化镓','Gallium Arsenide → 砷化镓'],['InGaAs','/ˌɪn dʒiː eɪ ˈeɪ es/','n.','砷化铟镓','Indium Gallium Arsenide → 砷化铟镓'],['AlGaAs','/ˌæl dʒiː eɪ ˈeɪ es/','n.','砷化铝镓','Aluminum Gallium Arsenide → 砷化铝镓']], ['gallium arsenide (砷化镓)', 'indium arsenide (砷化铟)', 'aluminum arsenide (砷化铝)', 'arsenide compound (砷化合物)'], 'arsenide（砷化物）→ III-V族化合物半导体 → 砷化物'],
    [235, 'nitride', '/ˈnaɪtraɪd/', 'n.', '氮化物', [['nitride','/ˈnaɪtraɪd/','n.','氮化物','nitrogen氮 + ide化物 → 氮化物'],['GaN','/ˌdʒiː eɪ ˈen/','n.','氮化镓','Gallium Nitride → 氮化镓'],['SiN','/ˌes aɪ ˈen/','n.','氮化硅','Silicon Nitride → 氮化硅'],['AlN','/ˌeɪ el ˈen/','n.','氮化铝','Aluminum Nitride → 氮化铝']], ['gallium nitride (氮化镓)', 'silicon nitride (氮化硅)', 'aluminum nitride (氮化铝)', 'nitride film (氮化膜)'], 'nitride（氮化物）→ 宽带隙半导体材料 → 氮化物'],
    [236, 'phosphide', '/ˈfɒsfaɪd/', 'n.', '磷化物', [['phosphide','/ˈfɒsfaɪd/','n.','磷化物','phosphorus磷 + ide化物 → 磷化物'],['InP','/ˌaɪ en ˈpiː/','n.','磷化铟','Indium Phosphide → 磷化铟'],['GaP','/ˌdʒiː eɪ ˈpiː/','n.','磷化镓','Gallium Phosphide → 磷化镓'],['AlInGaP','/ˌæl ˌɪn dʒiː eɪ ˈpiː/','n.','磷化铝铟镓','Aluminum Indium Gallium Phosphide → 磷化铝铟镓']], ['indium phosphide (磷化铟)', 'gallium phosphide (磷化镓)', 'InP wafer (磷化铟晶圆)', 'phosphide LED (磷化物LED)'], 'phosphide（磷化物）→ 光电器件重要材料 → 磷化物'],
    [237, 'indium', '/ˈɪndiəm/', 'n.', '铟', [['indium','/ˈɪndiəm/','n.','铟','indium铟 → In元素'],['InP','/ˌaɪ en ˈpiː/','n.','磷化铟','Indium Phosphide → 磷化铟'],['ITO','/ˌaɪ tiː əʊ/','n.','氧化铟锡','Indium Tin Oxide → 氧化铟锡'],['InGaAs','/ˌɪn dʒiː eɪ ˈeɪ es/','n.','砷化铟镓','Indium Gallium Arsenide → 砷化铟镓']], ['indium phosphide (磷化铟)', 'indium tin oxide (氧化铟锡)', 'indium gallium arsenide (砷化铟镓)', 'indium bump (铟凸点)'], 'indium（铟）→ 化合物半导体元素 → 铟'],
    [238, 'oxide', '/ˈɒksaɪd/', 'n.', '氧化物', [['oxide','/ˈɒksaɪd/','n.','氧化物','oxid氧化 + e → 氧化物'],['SiO2','/ˌes aɪ əʊ tuː/','n.','二氧化硅','Silicon Dioxide → 二氧化硅'],['high-k','/haɪ keɪ/','n.','高介电常数','high高 + k介电常数 → 高介电常数'],['HfO2','/ˌeɪtʃ ef əʊ tuː/','n.','氧化铪','Hafnium Dioxide → 氧化铪']], ['silicon oxide (氧化硅)', 'metal oxide (金属氧化物)', 'high-k oxide (高k氧化物)', 'gate oxide (栅氧化层)'], 'oxide（氧化物）→ 绝缘介质材料 → 氧化物'],
    [239, 'carbide', '/ˈkɑːrbaɪd/', 'n.', '碳化物', [['carbide','/ˈkɑːrbaɪd/','n.','碳化物','carbon碳 + ide化物 → 碳化物'],['SiC','/ˌes aɪ ˈsiː/','n.','碳化硅','Silicon Carbide → 碳化硅'],['4H-SiC','/ˌfɔːr eɪtʃ ˌes aɪ ˈsiː/','n.','4H碳化硅','4H Silicon Carbide → 4H碳化硅'],['6H-SiC','/ˌsɪks eɪtʃ ˌes aɪ ˈsiː/','n.','6H碳化硅','6H Silicon Carbide → 6H碳化硅']], ['silicon carbide (碳化硅)', 'SiC wafer (碳化硅晶圆)', 'SiC power device (碳化硅功率器件)', 'SiC substrate (碳化硅衬底)'], 'carbide（碳化物）→ 第三代半导体材料 → 碳化物'],
    [240, 'sapphire', '/ˈsæfaɪər/', 'n.', '蓝宝石', [['sapphire','/ˈsæfaɪər/','n.','蓝宝石','sapphire蓝宝石 → Al2O3'],['Al2O3','/ˌeɪ el tuː əʊ ˈθriː/','n.','氧化铝','Aluminum Oxide → 氧化铝'],['PSS','/ˌpiː es ˈes/','n.','图案化蓝宝石衬底','Patterned Sapphire Substrate → PSS'],['sapphire wafer','/ˈsæfaɪər ˈweɪfər/','n.','蓝宝石晶圆','sapphire + wafer → 蓝宝石晶圆']], ['sapphire substrate (蓝宝石衬底)', 'patterned sapphire (图案化蓝宝石)', 'sapphire LED (蓝宝石LED衬底)', 'Al2O3 wafer (氧化铝晶圆)'], 'sapphire（蓝宝石）→ LED衬底材料 → 蓝宝石'],
    [241, 'diamond', '/ˈdaɪəmənd/', 'n.', '金刚石', [['diamond','/ˈdaɪəmənd/','n.','金刚石','diamond金刚石 → 碳晶体'],['synthetic diamond','/sɪnˈθetɪk ˈdaɪəmənd/','n.','人造金刚石','synthetic人造 + diamond → 人造金刚石'],['CVD diamond','/ˌsiː viː ˈdiː ˈdaɪəmənd/','n.','CVD金刚石','CVD + diamond → CVD金刚石'],['diamond substrate','/ˈdaɪəmənd ˈsʌbstreɪt/','n.','金刚石衬底','diamond + substrate → 金刚石衬底']], ['diamond semiconductor (金刚石半导体)', 'diamond substrate (金刚石衬底)', 'diamond heat spreader (金刚石散热片)', 'diamond wafer (金刚石晶圆)'], 'diamond（金刚石）→ 超宽禁带半导体 → 金刚石'],
    [242, 'aluminum', '/əˈluːmɪnəm/', 'n.', '铝', [['aluminum','/əˈluːmɪnəm/','n.','铝','aluminum铝 → Al元素'],['AlCu','/ˌeɪ el ˈsiː juː/','n.','铝铜','Aluminum Copper → 铝铜合金'],['Al interconnect','/ˌeɪ el ˌɪntərkəˈnekt/','n.','铝互连','Al + interconnect → 铝互连'],['aluminum pad','/əˈluːmɪnəm pæd/','n.','铝焊盘','aluminum + pad → 铝焊盘']], ['aluminum metallization (铝金属化)', 'aluminum alloy (铝合金)', 'aluminum wire (铝线)', 'aluminum electrode (铝电极)'], 'aluminum（铝）→ 传统互连材料 → 铝'],
    [243, 'copper', '/ˈkɒpər/', 'n.', '铜', [['copper','/ˈkɒpər/','n.','铜','copper铜 → Cu元素'],['Cu interconnect','/ˌsiː juː ˌɪntərkəˈnekt/','n.','铜互连','Cu + interconnect → 铜互连'],['copper dual damascene','/ˈkɒpər ˈdjuːəl ˌdæməˈsiːn/','n.','双大马士革铜','copper + dual damascene → 双大马士革铜'],['copper seed','/ˈkɒpər siːd/','n.','铜籽晶层','copper + seed → 铜籽晶层']], ['copper metallization (铜金属化)', 'copper plating (铜电镀)', 'copper CMP (铜CMP)', 'copper wire (铜线)'], 'copper（铜）→ 现代互连材料 → 铜'],
    [244, 'tungsten', '/ˈtʌŋstən/', 'n.', '钨', [['tungsten','/ˈtʌŋstən/','n.','钨','tungsten钨 → W元素'],['W plug','/ˈdʌbljuː plʌɡ/','n.','钨插塞','W + plug → 钨插塞'],['tungsten silicide','/ˈtʌŋstən ˈsɪlɪsaɪd/','n.','硅化钨','tungsten + silicide → 硅化钨'],['tungsten CMP','/ˈtʌŋstən ˌsiː em ˈpiː/','n.','钨CMP','tungsten + CMP → 钨CMP']], ['tungsten plug (钨插塞)', 'tungsten contact (钨接触)', 'tungsten film (钨膜)', 'tungsten deposition (钨沉积)'], 'tungsten（钨）→ 接触孔填充材料 → 钨'],
    [245, 'titanium', '/taɪˈteɪniəm/', 'n.', '钛', [['titanium','/taɪˈteɪniəm/','n.','钛','titanium钛 → Ti元素'],['TiN','/ˌtiː aɪ ˈen/','n.','氮化钛','Titanium Nitride → 氮化钛'],['TiSi2','/ˌtiː aɪ ˈsɪlɪkaɪd/','n.','硅化钛','Titanium Silicide → 硅化钛'],['titanium nitride','/taɪˈteɪniəm ˈnaɪtraɪd/','n.','氮化钛','titanium + nitride → 氮化钛']], ['titanium nitride (氮化钛)', 'titanium silicide (硅化钛)', 'TiN barrier (TiN阻挡层)', 'titanium liner (钛衬垫层)'], 'titanium（钛）→ 阻挡层材料 → 钛'],
    [246, 'cobalt', '/ˈkəʊbɔːlt/', 'n.', '钴', [['cobalt','/ˈkəʊbɔːlt/','n.','钴','cobalt钴 → Co元素'],['CoWP','/ˌsiː əʊ ˈdʌbljuː ˈpiː/','n.','磷化钨钴','Cobalt Tungsten Phosphide → 磷化钨钴'],['cobalt liner','/ˈkəʊbɔːlt ˈlaɪnər/','n.','钴衬垫层','cobalt + liner → 钴衬垫层'],['cobalt contact','/ˈkəʊbɔːlt ˈkɒntækt/','n.','钴接触','cobalt + contact → 钴接触']], ['cobalt liner (钴衬垫层)', 'cobalt fill (钴填充)', 'cobalt silicide (硅化钴)', 'cobalt plating (钴电镀)'], 'cobalt（钴）→ 先进接触材料 → 钴'],
    [247, 'ruthenium', '/ruːˈθiːniəm/', 'n.', '钌', [['ruthenium','/ruːˈθiːniəm/','n.','钌','ruthenium钌 → Ru元素'],['Ru liner','/ˌɑːr ˈjuː ˈlaɪnər/','n.','钌衬垫层','Ru + liner → 钌衬垫层'],['ruthenium film','/ruːˈθiːniəm fɪlm/','n.','钌薄膜','ruthenium + film → 钌薄膜'],['Ru barrier','/ˌɑːr ˈjuː ˈbæriər/','n.','钌阻挡层','Ru + barrier → 钌阻挡层']], ['ruthenium liner (钌衬垫层)', 'ruthenium barrier (钌阻挡层)', 'Ru film (钌膜)', 'ruthenium seed (钌籽晶层)'], 'ruthenium（钌）→ 先进互连材料 → 钌'],
    [248, 'hafnium', '/ˈhæfniəm/', 'n.', '铪', [['hafnium','/ˈhæfniəm/','n.','铪','hafnium铪 → Hf元素'],['HfO2','/ˌeɪtʃ ef əʊ tuː/','n.','氧化铪','Hafnium Oxide → 氧化铪'],['hafnium oxide','/ˈhæfniəm ˈɒksaɪd/','n.','氧化铪','hafnium + oxide → 氧化铪'],['high-k hafnium','/haɪ keɪ ˈhæfniəm/','n.','高k铪','high-k + hafnium → 高k铪介质']], ['hafnium oxide (氧化铪)', 'HfO2 gate (氧化铪栅极)', 'hafnium nitride (氮化铪)', 'hafnium silicate (硅酸铪)'], 'hafnium（铪）→ 高k介质材料 → 铪'],
    [249, 'zirconium', '/zɜːrˈkəʊniəm/', 'n.', '锆', [['zirconium','/zɜːrˈkəʊniəm/','n.','锆','zirconium锆 → Zr元素'],['ZrO2','/ˌzed ɑːr əʊ tuː/','n.','氧化锆','Zirconium Oxide → 氧化锆'],['zirconium oxide','/zɜːrˈkəʊniəm ˈɒksaɪd/','n.','氧化锆','zirconium + oxide → 氧化锆'],['zirconium silicate','/zɜːrˈkəʊniəm ˈsɪlɪkeɪt/','n.','硅酸锆','zirconium + silicate → 硅酸锆']], ['zirconium oxide (氧化锆)', 'ZrO2 film (氧化锆膜)', 'zirconium nitride (氮化锆)', 'zirconium barrier (锆阻挡层)'], 'zirconium（锆）→ 高k介质材料 → 锆'],
    [250, 'tantalum', '/ˈtæntələm/', 'n.', '钽', [['tantalum','/ˈtæntələm/','n.','钽','tantalum钽 → Ta元素'],['TaN','/ˌtiː eɪ ˈen/','n.','氮化钽','Tantalum Nitride → 氮化钽'],['tantalum nitride','/ˈtæntələm ˈnaɪtraɪd/','n.','氮化钽','tantalum + nitride → 氮化钽'],['Ta barrier','/ˌtiː eɪ ˈbæriər/','n.','钽阻挡层','Ta + barrier → 钽阻挡层']], ['tantalum nitride (氮化钽)', 'tantalum barrier (钽阻挡层)', 'TaN film (氮化钽膜)', 'tantalum copper (钽铜)'], 'tantalum（钽）→ 铜互连阻挡层 → 钽'],
];

processBatch(entries231_260);
console.log('Added entries 231-260. Total:', newEntries.length);

// Save progress
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/temp_entries.json', JSON.stringify(newEntries, null, 2));
console.log('Progress saved. Total entries so far:', newEntries.length);
