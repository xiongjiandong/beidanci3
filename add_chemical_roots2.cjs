const fs = require('fs');
const path = require('path');

// 读取现有文件
const filePath = path.join(__dirname, 'src', 'data', 'chemical.json');
let content = fs.readFileSync(filePath, 'utf-8');

// 移除文件末尾的 ]
content = content.trim();
if (content.endsWith(']')) {
    content = content.slice(0, -1);
}

// 确保最后一个对象后有逗号
if (!content.trim().endsWith(',')) {
    content = content.trim() + ',';
}

// 定义第2批100个化工词根（301-400）
const roots = [
    // 301-310
    {root: "amin", phonetic: "/ˈæmiːn/", meaning: "胺", words: [{w: "amine", m: "胺"}, {w: "amino", m: "氨基"}, {w: "ammonia", m: "氨"}, {w: "ammonium", m: "铵"}]},
    {root: "amid", phonetic: "/ˈæmaɪd/", meaning: "酰胺", words: [{w: "amide", m: "酰胺"}, {w: "amidation", m: "酰胺化"}, {w: "peptide bond", m: "肽键"}, {w: "polyamide", m: "聚酰胺"}]},
    {root: "imid", phonetic: "/ˈɪmɪd/", meaning: "酰亚胺", words: [{w: "imide", m: "酰亚胺"}, {w: "imidization", m: "酰亚胺化"}, {w: "polyimide", m: "聚酰亚胺"}, {w: "phthalimide", m: "邻苯二甲酰亚胺"}]},
    {root: "nitro", phonetic: "/ˈnaɪtrəʊ/", meaning: "硝基", words: [{w: "nitro", m: "硝基"}, {w: "nitro group", m: "硝基"}, {w: "nitrobenzene", m: "硝基苯"}, {w: "nitromethane", m: "硝基甲烷"}]},
    {root: "nitril", phonetic: "/ˈnaɪtraɪl/", meaning: "腈", words: [{w: "nitrile", m: "腈"}, {w: "cyanide", m: "氰化物"}, {w: "acrylonitrile", m: "丙烯腈"}, {w: "hydrogen cyanide", m: "氰化氢"}]},
    {root: "isonitril", phonetic: "/ˈaɪsəʊnaɪtraɪl/", meaning: "异腈", words: [{w: "isonitrile", m: "异腈"}, {w: "isocyanide", m: "异氰化物"}, {w: "methyl isocyanide", m: "异氰基甲烷"}, {w: "phenyl isocyanide", m: "异氰基苯"}]},
    {root: "az", phonetic: "/æz/", meaning: "氮", words: [{w: "azo", m: "偶氮"}, {w: "azide", m: "叠氮化物"}, {w: "azobenzene", m: "偶氮苯"}, {w: "hydrazine", m: "肼"}]},
    {root: "diaz", phonetic: "/daɪˈæzəʊ/", meaning: "重氮", words: [{w: "diazo", m: "重氮"}, {w: "diazonium", m: "重氮盐"}, {w: "diazomethane", m: "重氮甲烷"}, {w: "diazotization", m: "重氮化"}]},
    {root: "hydraz", phonetic: "/ˈhaɪdrəziːn/", meaning: "肼", words: [{w: "hydrazine", m: "肼"}, {w: "hydrazide", m: "酰肼"}, {w: "phenylhydrazine", m: "苯肼"}, {w: "hydrazone", m: "腙"}]},
    {root: "sulf", phonetic: "/sʌlf/", meaning: "硫", words: [{w: "sulfur", m: "硫"}, {w: "sulfide", m: "硫化物"}, {w: "sulfate", m: "硫酸盐"}, {w: "sulfite", m: "亚硫酸盐"}]},
    // 311-320
    {root: "thi", phonetic: "/θaɪ/", meaning: "硫代", words: [{w: "thiol", m: "硫醇"}, {w: "thioether", m: "硫醚"}, {w: "thiourea", m: "硫脲"}, {w: "thioacid", m: "硫代酸"}]},
    {root: "mercapt", phonetic: "/məˈkæptən/", meaning: "巯基", words: [{w: "mercaptan", m: "硫醇"}, {w: "mercapto", m: "巯基"}, {w: "mercaptide", m: "硫醇盐"}, {w: "ethyl mercaptan", m: "乙硫醇"}]},
    {root: "sulfon", phonetic: "/ˈsʌlfəʊn/", meaning: "砜", words: [{w: "sulfone", m: "砜"}, {w: "sulfonic acid", m: "磺酸"}, {w: "sulfonyl", m: "磺酰基"}, {w: "sulfonation", m: "磺化"}]},
    {root: "sulfoxid", phonetic: "/sʌlˈfɒksaɪd/", meaning: "亚砜", words: [{w: "sulfoxide", m: "亚砜"}, {w: "dimethyl sulfoxide", m: "二甲基亚砜"}, {w: "sulfinyl", m: "亚磺酰基"}, {w: "sulfoxidation", m: "亚砜化"}]},
    {root: "phosph", phonetic: "/ˈfɒsfə/", meaning: "磷", words: [{w: "phosphorus", m: "磷"}, {w: "phosphate", m: "磷酸盐"}, {w: "phosphite", m: "亚磷酸盐"}, {w: "phosphide", m: "磷化物"}]},
    {root: "phosphat", phonetic: "/ˈfɒsfeɪt/", meaning: "磷酸酯", words: [{w: "phosphate", m: "磷酸酯"}, {w: "phosphatide", m: "磷脂"}, {w: "phosphorylation", m: "磷酸化"}, {w: "organophosphate", m: "有机磷酸酯"}]},
    {root: "phosphon", phonetic: "/ˈfɒsfən/", meaning: "膦", words: [{w: "phosphine", m: "膦"}, {w: "phosphonium", m: "鏻"}, {w: "phosphonic acid", m: "膦酸"}, {w: "triphenylphosphine", m: "三苯基膦"}]},
    {root: "phosphor", phonetic: "/ˈfɒsfər/", meaning: "磷光", words: [{w: "phosphor", m: "磷光体"}, {w: "phosphorescence", m: "磷光"}, {w: "phosphorescent", m: "磷光的"}, {w: "phosphoryl", m: "磷酰基"}]},
    {root: "arsen", phonetic: "/ˈɑːsənɪk/", meaning: "砷", words: [{w: "arsenic", m: "砷"}, {w: "arsenate", m: "砷酸盐"}, {w: "arsenite", m: "亚砷酸盐"}, {w: "arsine", m: "胂"}]},
    {root: "silic", phonetic: "/ˈsɪlɪkən/", meaning: "硅", words: [{w: "silicon", m: "硅"}, {w: "silica", m: "二氧化硅"}, {w: "silicate", m: "硅酸盐"}, {w: "silicone", m: "硅酮"}]},
    // 321-330
    {root: "silan", phonetic: "/ˈsɪleɪn/", meaning: "硅烷", words: [{w: "silane", m: "硅烷"}, {w: "silanol", m: "硅醇"}, {w: "siloxane", m: "硅氧烷"}, {w: "organosilicon", m: "有机硅"}]},
    {root: "germani", phonetic: "/dʒɜːˈmeɪniəm/", meaning: "锗", words: [{w: "germanium", m: "锗"}, {w: "germane", m: "锗烷"}, {w: "organogermanium", m: "有机锗"}, {w: "germanate", m: "锗酸盐"}]},
    {root: "stann", phonetic: "/stæn/", meaning: "锡", words: [{w: "tin", m: "锡"}, {w: "stannous", m: "亚锡的"}, {w: "stannic", m: "锡的"}, {w: "organotin", m: "有机锡"}]},
    {root: "plumb", phonetic: "/plʌm/", meaning: "铅", words: [{w: "lead", m: "铅"}, {w: "plumbous", m: "亚铅的"}, {w: "plumbic", m: "铅的"}, {w: "tetraethyl lead", m: "四乙基铅"}]},
    {root: "bor", phonetic: "/bɔːr/", meaning: "硼", words: [{w: "boron", m: "硼"}, {w: "borate", m: "硼酸盐"}, {w: "borane", m: "硼烷"}, {w: "boric acid", m: "硼酸"}]},
    {root: "alumin", phonetic: "/əˈluːmɪniəm/", meaning: "铝", words: [{w: "aluminum", m: "铝"}, {w: "alumina", m: "氧化铝"}, {w: "aluminate", m: "铝酸盐"}, {w: "aluminosilicate", m: "铝硅酸盐"}]},
    {root: "titan", phonetic: "/ˈtaɪtəniəm/", meaning: "钛", words: [{w: "titanium", m: "钛"}, {w: "titania", m: "氧化钛"}, {w: "titanate", m: "钛酸盐"}, {w: "organotitanium", m: "有机钛"}]},
    {root: "zirconi", phonetic: "/zɜːˈkəʊniəm/", meaning: "锆", words: [{w: "zirconium", m: "锆"}, {w: "zirconia", m: "氧化锆"}, {w: "zirconate", m: "锆酸盐"}, {w: "zircon", m: "锆石"}]},
    {root: "vanad", phonetic: "/vəˈneɪdiəm/", meaning: "钒", words: [{w: "vanadium", m: "钒"}, {w: "vanadate", m: "钒酸盐"}, {w: "vanadyl", m: "钒酰基"}, {w: "vanadic acid", m: "钒酸"}]},
    {root: "chrom", phonetic: "/ˈkrəʊmiəm/", meaning: "铬", words: [{w: "chromium", m: "铬"}, {w: "chromate", m: "铬酸盐"}, {w: "dichromate", m: "重铬酸盐"}, {w: "chromic acid", m: "铬酸"}]},
    // 331-340
    {root: "molybd", phonetic: "/məˈlɪbdənəm/", meaning: "钼", words: [{w: "molybdenum", m: "钼"}, {w: "molybdate", m: "钼酸盐"}, {w: "molybdic acid", m: "钼酸"}, {w: "molybdenite", m: "辉钼矿"}]},
    {root: "wolfram", phonetic: "/ˈwʊlfrəm/", meaning: "钨", words: [{w: "tungsten", m: "钨"}, {w: "wolfram", m: "钨"}, {w: "tungstate", m: "钨酸盐"}, {w: "tungstic acid", m: "钨酸"}]},
    {root: "manganes", phonetic: "/ˌmæŋɡəˈniːz/", meaning: "锰", words: [{w: "manganese", m: "锰"}, {w: "manganate", m: "锰酸盐"}, {w: "permanganate", m: "高锰酸盐"}, {w: "manganous", m: "亚锰的"}]},
    {root: "ferr", phonetic: "/ˈferəs/", meaning: "铁", words: [{w: "iron", m: "铁"}, {w: "ferrous", m: "亚铁的"}, {w: "ferric", m: "铁的"}, {w: "ferrite", m: "铁素体"}]},
    {root: "cobalt", phonetic: "/ˈkəʊbɔːlt/", meaning: "钴", words: [{w: "cobalt", m: "钴"}, {w: "cobaltous", m: "亚钴的"}, {w: "cobaltic", m: "钴的"}, {w: "cobaltite", m: "辉钴矿"}]},
    {root: "nickel", phonetic: "/ˈnɪkəl/", meaning: "镍", words: [{w: "nickel", m: "镍"}, {w: "nickelous", m: "亚镍的"}, {w: "nickelic", m: "镍的"}, {w: "Raney nickel", m: "兰尼镍"}]},
    {root: "cupr", phonetic: "/ˈkjuːprəs/", meaning: "铜", words: [{w: "copper", m: "铜"}, {w: "cuprous", m: "亚铜的"}, {w: "cupric", m: "铜的"}, {w: "cuprite", m: "赤铜矿"}]},
    {root: "argent", phonetic: "/ˈɑːdʒəntəm/", meaning: "银", words: [{w: "silver", m: "银"}, {w: "argentous", m: "亚银的"}, {w: "argentic", m: "银的"}, {w: "argentite", m: "辉银矿"}]},
    {root: "aur", phonetic: "/ˈɔːrəm/", meaning: "金", words: [{w: "gold", m: "金"}, {w: "aurous", m: "亚金的"}, {w: "auric", m: "金的"}, {w: "aurate", m: "金酸盐"}]},
    {root: "zinc", phonetic: "/zɪŋk/", meaning: "锌", words: [{w: "zinc", m: "锌"}, {w: "zincate", m: "锌酸盐"}, {w: "zinc oxide", m: "氧化锌"}, {w: "zinc sulfide", m: "硫化锌"}]},
    // 341-350
    {root: "platin", phonetic: "/ˈplætɪnəm/", meaning: "铂", words: [{w: "platinum", m: "铂"}, {w: "platinous", m: "亚铂的"}, {w: "platinic", m: "铂的"}, {w: "platinize", m: "镀铂"}]},
    {root: "pallad", phonetic: "/pəˈleɪdiəm/", meaning: "钯", words: [{w: "palladium", m: "钯"}, {w: "palladous", m: "亚钯的"}, {w: "palladic", m: "钯的"}, {w: "palladized", m: "钯化的"}]},
    {root: "iridi", phonetic: "/ɪˈrɪdiəm/", meaning: "铱", words: [{w: "iridium", m: "铱"}, {w: "iridic", m: "铱的"}, {w: "iridosmine", m: "铱锇矿"}, {w: "iridite", m: "铱酸盐"}]},
    {root: "rhodi", phonetic: "/ˈrəʊdiəm/", meaning: "铑", words: [{w: "rhodium", m: "铑"}, {w: "rhodous", m: "亚铑的"}, {w: "rhodic", m: "铑的"}, {w: "rhodium plating", m: "镀铑"}]},
    {root: "rutheni", phonetic: "/ruːˈθiːniəm/", meaning: "钌", words: [{w: "ruthenium", m: "钌"}, {w: "ruthenous", m: "亚钌的"}, {w: "ruthenic", m: "钌的"}, {w: "ruthenate", m: "钌酸盐"}]},
    {root: "osmi", phonetic: "/ˈɒzmiəm/", meaning: "锇", words: [{w: "osmium", m: "锇"}, {w: "osmous", m: "亚锇的"}, {w: "osmic", m: "锇的"}, {w: "osmium tetroxide", m: "四氧化锇"}]},
    {root: "urani", phonetic: "/jʊˈreɪniəm/", meaning: "铀", words: [{w: "uranium", m: "铀"}, {w: "uranyl", m: "铀酰基"}, {w: "uranate", m: "铀酸盐"}, {w: "uranium dioxide", m: "二氧化铀"}]},
    {root: "plutoni", phonetic: "/pluːˈtəʊniəm/", meaning: "钚", words: [{w: "plutonium", m: "钚"}, {w: "plutonyl", m: "钚酰基"}, {w: "plutonate", m: "钚酸盐"}, {w: "plutonic", m: "钚的"}]},
    {root: "thor", phonetic: "/ˈθɔːriəm/", meaning: "钍", words: [{w: "thorium", m: "钍"}, {w: "thorium dioxide", m: "二氧化钍"}, {w: "thorite", m: "钍石"}, {w: "thorianite", m: "方钍石"}]},
    {root: "actini", phonetic: "/ækˈtɪniəm/", meaning: "锕", words: [{w: "actinium", m: "锕"}, {w: "actinide", m: "锕系元素"}, {w: "actinoid", m: "锕系元素"}, {w: "actinic", m: "光化的"}]},
    // 351-360
    {root: "lanthan", phonetic: "/ˈlænθənəm/", meaning: "镧", words: [{w: "lanthanum", m: "镧"}, {w: "lanthanide", m: "镧系元素"}, {w: "lanthanoid", m: "镧系元素"}, {w: "lanthanide contraction", m: "镧系收缩"}]},
    {root: "ceri", phonetic: "/ˈsɪəriəm/", meaning: "铈", words: [{w: "cerium", m: "铈"}, {w: "cerous", m: "亚铈的"}, {w: "ceric", m: "铈的"}, {w: "ceria", m: "氧化铈"}]},
    {root: "neodymi", phonetic: "/ˌniːəʊˈdɪmiəm/", meaning: "钕", words: [{w: "neodymium", m: "钕"}, {w: "neodymium oxide", m: "氧化钕"}, {w: "neodymium magnet", m: "钕磁铁"}, {w: "neodymous", m: "钕的"}]},
    {root: "samar", phonetic: "/səˈmɑːriəm/", meaning: "钐", words: [{w: "samarium", m: "钐"}, {w: "samarous", m: "亚钐的"}, {w: "samaric", m: "钐的"}, {w: "samarium cobalt", m: "钐钴"}]},
    {root: "europi", phonetic: "/jʊˈrəʊpiəm/", meaning: "铕", words: [{w: "europium", m: "铕"}, {w: "europous", m: "亚铕的"}, {w: "europic", m: "铕的"}, {w: "europium oxide", m: "氧化铕"}]},
    {root: "gadolini", phonetic: "/ˌɡædəˈlɪniəm/", meaning: "钆", words: [{w: "gadolinium", m: "钆"}, {w: "gadolinia", m: "氧化钆"}, {w: "gadolinic", m: "钆的"}, {w: "gadolinate", m: "钆酸盐"}]},
    {root: "terbi", phonetic: "/ˈtɜːbiəm/", meaning: "铽", words: [{w: "terbium", m: "铽"}, {w: "terbous", m: "亚铽的"}, {w: "terbic", m: "铽的"}, {w: "terbia", m: "氧化铽"}]},
    {root: "dysprosi", phonetic: "/dɪsˈprəʊziəm/", meaning: "镝", words: [{w: "dysprosium", m: "镝"}, {w: "dysprosia", m: "氧化镝"}, {w: "dysprosous", m: "亚镝的"}, {w: "dysprosic", m: "镝的"}]},
    {root: "holm", phonetic: "/ˈhəʊlmiəm/", meaning: "钬", words: [{w: "holmium", m: "钬"}, {w: "holmia", m: "氧化钬"}, {w: "holmous", m: "亚钬的"}, {w: "holic", m: "钬的"}]},
    {root: "erbi", phonetic: "/ˈɜːbiəm/", meaning: "铒", words: [{w: "erbium", m: "铒"}, {w: "erbia", m: "氧化铒"}, {w: "erbous", m: "亚铒的"}, {w: "erbic", m: "铒的"}]},
    // 361-370
    {root: "thuli", phonetic: "/ˈθjuːliəm/", meaning: "铥", words: [{w: "thulium", m: "铥"}, {w: "thulia", m: "氧化铥"}, {w: "thulic", m: "铥的"}, {w: "thulite", m: "锰黝帘石"}]},
    {root: "ytterbi", phonetic: "/ɪˈtɜːbiəm/", meaning: "镱", words: [{w: "ytterbium", m: "镱"}, {w: "ytterbia", m: "氧化镱"}, {w: "ytterbic", m: "镱的"}, {w: "ytterbous", m: "亚镱的"}]},
    {root: "luteti", phonetic: "/luːˈtiːʃiəm/", meaning: "镥", words: [{w: "lutetium", m: "镥"}, {w: "lutecia", m: "氧化镥"}, {w: "lutetic", m: "镥的"}, {w: "lutetate", m: "镥酸盐"}]},
    {root: "yttri", phonetic: "/ˈɪtriəm/", meaning: "钇", words: [{w: "yttrium", m: "钇"}, {w: "yttria", m: "氧化钇"}, {w: "yttrious", m: "含钇的"}, {w: "yttrium oxide", m: "氧化钇"}]},
    {root: "scandi", phonetic: "/ˈskændiəm/", meaning: "钪", words: [{w: "scandium", m: "钪"}, {w: "scandia", m: "氧化钪"}, {w: "scandic", m: "钪的"}, {w: "scandate", m: "钪酸盐"}]},
    {root: "hafni", phonetic: "/ˈhæfniəm/", meaning: "铪", words: [{w: "hafnium", m: "铪"}, {w: "hafnia", m: "氧化铪"}, {w: "hafnic", m: "铪的"}, {w: "hafnate", m: "铪酸盐"}]},
    {root: "tantal", phonetic: "/ˈtæntələm/", meaning: "钽", words: [{w: "tantalum", m: "钽"}, {w: "tantalate", m: "钽酸盐"}, {w: "tantalic", m: "钽的"}, {w: "tantalite", m: "钽铁矿"}]},
    {root: "niobi", phonetic: "/naɪˈəʊbiəm/", meaning: "铌", words: [{w: "niobium", m: "铌"}, {w: "niobate", m: "铌酸盐"}, {w: "niobic", m: "铌的"}, {w: "columbium", m: "铌（旧名）"}]},
    {root: "rheni", phonetic: "/ˈriːniəm/", meaning: "铼", words: [{w: "rhenium", m: "铼"}, {w: "rhenate", m: "铼酸盐"}, {w: "rhenic", m: "铼的"}, {w: "rhenide", m: "铼化物"}]},
    {root: "techneti", phonetic: "/tekˈniːʃiəm/", meaning: "锝", words: [{w: "technetium", m: "锝"}, {w: "technetate", m: "锝酸盐"}, {w: "technetic", m: "锝的"}, {w: "pertechnetate", m: "高锝酸盐"}]},
    // 371-380
    {root: "cadmi", phonetic: "/ˈkædmiəm/", meaning: "镉", words: [{w: "cadmium", m: "镉"}, {w: "cadmium sulfide", m: "硫化镉"}, {w: "cadmium oxide", m: "氧化镉"}, {w: "cadmium plating", m: "镀镉"}]},
    {root: "mercur", phonetic: "/ˈmɜːkjʊri/", meaning: "汞", words: [{w: "mercury", m: "汞"}, {w: "mercurous", m: "亚汞的"}, {w: "mercuric", m: "汞的"}, {w: "amalgam", m: "汞齐"}]},
    {root: "thalli", phonetic: "/ˈθæliəm/", meaning: "铊", words: [{w: "thallium", m: "铊"}, {w: "thallous", m: "亚铊的"}, {w: "thallic", m: "铊的"}, {w: "thallate", m: "铊酸盐"}]},
    {root: "indi", phonetic: "/ˈɪndiəm/", meaning: "铟", words: [{w: "indium", m: "铟"}, {w: "indate", m: "铟酸盐"}, {w: "indic", m: "铟的"}, {w: "indium phosphide", m: "磷化铟"}]},
    {root: "galli", phonetic: "/ˈɡæliəm/", meaning: "镓", words: [{w: "gallium", m: "镓"}, {w: "gallate", m: "镓酸盐"}, {w: "gallic", m: "镓的"}, {w: "gallium arsenide", m: "砷化镓"}]},
    {root: "thalli", phonetic: "/ˈθæliəm/", meaning: "铊", words: [{w: "thallium", m: "铊"}, {w: "thallous", m: "亚铊的"}, {w: "thallic", m: "铊的"}, {w: "thallate", m: "铊酸盐"}]},
    {root: "bismuth", phonetic: "/ˈbɪzməθ/", meaning: "铋", words: [{w: "bismuth", m: "铋"}, {w: "bismuthate", m: "铋酸盐"}, {w: "bismuthic", m: "铋的"}, {w: "bismuthinite", m: "辉铋矿"}]},
    {root: "antimon", phonetic: "/ˈæntɪməni/", meaning: "锑", words: [{w: "antimony", m: "锑"}, {w: "stibine", m: "锑化氢"}, {w: "antimonate", m: "锑酸盐"}, {w: "antimonial", m: "锑的"}]},
    {root: "selen", phonetic: "/sɪˈliːniəm/", meaning: "硒", words: [{w: "selenium", m: "硒"}, {w: "selenide", m: "硒化物"}, {w: "selenate", m: "硒酸盐"}, {w: "selenous acid", m: "亚硒酸"}]},
    {root: "tellur", phonetic: "/teˈljʊəriəm/", meaning: "碲", words: [{w: "tellurium", m: "碲"}, {w: "telluride", m: "碲化物"}, {w: "tellurate", m: "碲酸盐"}, {w: "tellurous acid", m: "亚碲酸"}]},
    // 381-390
    {root: "poloni", phonetic: "/pəˈləʊniəm/", meaning: "钋", words: [{w: "polonium", m: "钋"}, {w: "polonide", m: "钋化物"}, {w: "polonic", m: "钋的"}, {w: "polonate", m: "钋酸盐"}]},
    {root: "astat", phonetic: "/ˈæstətiːn/", meaning: "砹", words: [{w: "astatine", m: "砹"}, {w: "astatide", m: "砹化物"}, {w: "astatic acid", m: "砹酸"}, {w: "astatate", m: "砹酸盐"}]},
    {root: "franci", phonetic: "/ˈfrænsiəm/", meaning: "钫", words: [{w: "francium", m: "钫"}, {w: "francide", m: "钫化物"}, {w: "franic", m: "钫的"}, {w: "francate", m: "钫酸盐"}]},
    {root: "radi", phonetic: "/ˈreɪdiəm/", meaning: "镭", words: [{w: "radium", m: "镭"}, {w: "radium chloride", m: "氯化镭"}, {w: "radium bromide", m: "溴化镭"}, {w: "radium emanation", m: "镭射气"}]},
    {root: "radon", phonetic: "/ˈreɪdɒn/", meaning: "氡", words: [{w: "radon", m: "氡"}, {w: "radon fluoride", m: "氟化氡"}, {w: "radon water", m: "氡水"}, {w: "radon therapy", m: "氡疗法"}]},
    {root: "heli", phonetic: "/ˈhiːliəm/", meaning: "氦", words: [{w: "helium", m: "氦"}, {w: "helium-3", m: "氦-3"}, {w: "helium-4", m: "氦-4"}, {w: "liquid helium", m: "液氦"}]},
    {root: "neon", phonetic: "/ˈniːɒn/", meaning: "氖", words: [{w: "neon", m: "氖"}, {w: "neon lamp", m: "氖灯"}, {w: "neon sign", m: "霓虹灯"}, {w: "neon lighting", m: "氖照明"}]},
    {root: "argon", phonetic: "/ˈɑːɡɒn/", meaning: "氩", words: [{w: "argon", m: "氩"}, {w: "argon laser", m: "氩激光器"}, {w: "argon atmosphere", m: "氩气氛"}, {w: "liquid argon", m: "液氩"}]},
    {root: "krypton", phonetic: "/ˈkrɪptɒn/", meaning: "氪", words: [{w: "krypton", m: "氪"}, {w: "krypton fluoride", m: "氟化氪"}, {w: "krypton lamp", m: "氪灯"}, {w: "krypton-85", m: "氪-85"}]},
    {root: "xenon", phonetic: "/ˈzenɒn/", meaning: "氙", words: [{w: "xenon", m: "氙"}, {w: "xenon lamp", m: "氙灯"}, {w: "xenon fluoride", m: "氟化氙"}, {w: "xenon arc lamp", m: "氙弧灯"}]},
    // 391-400
    {root: "reactor", phonetic: "/riˈæktə/", meaning: "反应器", words: [{w: "reactor", m: "反应器"}, {w: "chemical reactor", m: "化学反应器"}, {w: "batch reactor", m: "间歇反应器"}, {w: "continuous reactor", m: "连续反应器"}]},
    {root: "stirrer", phonetic: "/ˈstɜːrə/", meaning: "搅拌器", words: [{w: "stirrer", m: "搅拌器"}, {w: "magnetic stirrer", m: "磁力搅拌器"}, {w: "mechanical stirrer", m: "机械搅拌器"}, {w: "anchor stirrer", m: "锚式搅拌器"}]},
    {root: "agitator", phonetic: "/ˈædʒɪteɪtə/", meaning: "搅拌器", words: [{w: "agitator", m: "搅拌器"}, {w: "agitation", m: "搅拌"}, {w: "paddle agitator", m: "桨式搅拌器"}, {w: "turbine agitator", m: "涡轮搅拌器"}]},
    {root: "mixer", phonetic: "/ˈmɪksə/", meaning: "混合器", words: [{w: "mixer", m: "混合器"}, {w: "static mixer", m: "静态混合器"}, {w: "kneader", m: "捏合机"}, {w: "blender", m: "搅拌机"}]},
    {root: "pump", phonetic: "/pʌmp/", meaning: "泵", words: [{w: "pump", m: "泵"}, {w: "centrifugal pump", m: "离心泵"}, {w: "diaphragm pump", m: "隔膜泵"}, {w: "gear pump", m: "齿轮泵"}]},
    {root: "compressor", phonetic: "/kəmˈpresə/", meaning: "压缩机", words: [{w: "compressor", m: "压缩机"}, {w: "air compressor", m: "空气压缩机"}, {w: "reciprocating compressor", m: "往复式压缩机"}, {w: "rotary compressor", m: "旋转式压缩机"}]},
    {root: "valve", phonetic: "/vælv/", meaning: "阀门", words: [{w: "valve", m: "阀门"}, {w: "control valve", m: "控制阀"}, {w: "safety valve", m: "安全阀"}, {w: "check valve", m: "止回阀"}]},
    {root: "pip", phonetic: "/paɪp/", meaning: "管道", words: [{w: "pipe", m: "管道"}, {w: "pipeline", m: "管线"}, {w: "piping", m: "管路"}, {w: "piping system", m: "管路系统"}]},
    {root: "nozzl", phonetic: "/ˈnɒzl/", meaning: "喷嘴", words: [{w: "nozzle", m: "喷嘴"}, {w: "spray nozzle", m: "喷雾喷嘴"}, {w: "jet nozzle", m: "射流喷嘴"}, {w: "injector nozzle", m: "喷射喷嘴"}]},
    {root: "spray", phonetic: "/spreɪ/", meaning: "喷雾", words: [{w: "spray", m: "喷雾"}, {w: "spraying", m: "喷雾"}, {w: "spray dryer", m: "喷雾干燥器"}, {w: "atomization", m: "雾化"}]}
];

// 生成新记录 (frequency 301-400, id 1701-1800)
let newRecords = [];
for (let i = 0; i < roots.length; i++) {
    const idx = i + 301;
    const rootData = roots[i];

    const record = {
        id: 1400 + idx,
        root: rootData.root,
        phonetic: rootData.phonetic,
        partOfSpeech: "词根",
        meaning: rootData.meaning,
        frequency: idx,
        category: "化工",
        words: rootData.words.map(w => ({
            word: w.w,
            phonetic: rootData.phonetic,
            partOfSpeech: "n.",
            meaning: w.m,
            memoryTip: `词根 ${rootData.root} 表示 ${rootData.meaning}`,
            root: rootData.root,
            rootPhonetic: rootData.phonetic,
            rootMeaning: rootData.meaning,
            rootPhrases: rootData.words.map(x => `${x.w} ${x.m}`),
            wordPhrases: rootData.words.map(x => `${x.w} ${x.m}`)
        })),
        phrases: rootData.words.map(x => `${x.w} ${x.m}`),
        mnemonic: `${rootData.root}→${rootData.meaning}`
    };

    newRecords.push(record);
}

// 追加新记录
const newContent = newRecords.map(r => JSON.stringify(r, null, 2)).join(',\n');
content = content + '\n' + newContent + '\n]';

// 写回文件
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`成功添加了 ${newRecords.length} 条词根记录`);
console.log(`ID范围: ${newRecords[0].id} - ${newRecords[newRecords.length-1].id}`);
console.log(`Frequency范围: ${newRecords[0].frequency} - ${newRecords[newRecords.length-1].frequency}`);
