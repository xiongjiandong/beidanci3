import json
import re

# 半导体领域相关的词根数据（id 801-1000）
new_roots = [
    # 801-810: 基础材料科学
    {"id": 801, "root": "silic", "phonetic": "/ˈsɪlɪk/", "partOfSpeech": "n.", "frequency": 1, "category": "半导体", "meaning": "硅，硅基", "words": [
        {"word": "silicon", "phonetic": "/ˈsɪlɪkən/", "partOfSpeech": "n.", "meaning": "硅", "memoryTip": "silic硅 + on → 硅元素", "rootPhrases": ["silicon wafer", "silicon valley", "silicon chip"], "wordPhrases": ["silicon wafer", "silicon valley", "silicon chip"]},
        {"word": "silica", "phonetic": "/ˈsɪlɪkə/", "partOfSpeech": "n.", "meaning": "二氧化硅", "memoryTip": "silic硅 + a → 二氧化硅", "rootPhrases": ["silicon wafer", "silicon valley", "silicon chip"], "wordPhrases": ["silica gel", "fused silica"]},
        {"word": "silicate", "phonetic": "/ˈsɪlɪkeɪt/", "partOfSpeech": "n.", "meaning": "硅酸盐", "memoryTip": "silic硅 + ate盐 → 硅酸盐", "rootPhrases": ["silicon wafer", "silicon valley", "silicon chip"], "wordPhrases": ["sodium silicate", "calcium silicate"]}
    ], "phrases": ["silicon wafer (硅片)", "silicon valley (硅谷)", "silicon chip (硅芯片)"], "mnemonic": "silic是硅的词根，半导体工业的基础材料"},

    {"id": 802, "root": "german", "phonetic": "/dʒɜːˈmeɪniəm/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "锗", "words": [
        {"word": "germanium", "phonetic": "/dʒɜːˈmeɪniəm/", "partOfSpeech": "n.", "meaning": "锗", "memoryTip": "German德国 + ium元素 → 锗元素", "rootPhrases": ["germanium diode", "germanium transistor"], "wordPhrases": ["germanium diode", "germanium transistor"]}
    ], "phrases": ["germanium diode (锗二极管)", "germanium transistor (锗晶体管)"], "mnemonic": "锗是早期半导体材料，比硅更早用于晶体管"},

    {"id": 803, "root": "gall", "phonetic": "/ˈɡæliəm/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "镓", "words": [
        {"word": "gallium", "phonetic": "/ˈɡæliəm/", "partOfSpeech": "n.", "meaning": "镓", "memoryTip": "Gallia高卢(法国) + ium → 镓元素", "rootPhrases": ["gallium arsenide", "gallium nitride"], "wordPhrases": ["gallium arsenide", "gallium nitride"]}
    ], "phrases": ["gallium arsenide (砷化镓)", "gallium nitride (氮化镓)"], "mnemonic": "镓是重要的III-V族半导体材料基础"},

    {"id": 804, "root": "arsen", "phonetic": "/ˈɑːsənɪk/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "砷", "words": [
        {"word": "arsenic", "phonetic": "/ˈɑːsənɪk/", "partOfSpeech": "n.", "meaning": "砷", "memoryTip": "arsen强烈 + ic → 砷(有毒)", "rootPhrases": ["gallium arsenide", "arsenic doping"], "wordPhrases": ["gallium arsenide", "arsenic doping"]}
    ], "phrases": ["gallium arsenide (砷化镓)", "arsenic doping (砷掺杂)"], "mnemonic": "砷是砷化镓(GaAs)的重要组成部分"},

    {"id": 805, "root": "nitr", "phonetic": "/ˈnaɪtraɪd/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "氮化物", "words": [
        {"word": "nitride", "phonetic": "/ˈnaɪtraɪd/", "partOfSpeech": "n.", "meaning": "氮化物", "memoryTip": "nitr氮 + ide化物 → 氮化物", "rootPhrases": ["gallium nitride", "silicon nitride"], "wordPhrases": ["gallium nitride", "silicon nitride", "boron nitride"]},
        {"word": "nitrogen", "phonetic": "/ˈnaɪtrədʒən/", "partOfSpeech": "n.", "meaning": "氮", "memoryTip": "nitr氮 + gen产生 → 氮气", "rootPhrases": ["gallium nitride", "silicon nitride"], "wordPhrases": ["nitrogen gas", "liquid nitrogen"]}
    ], "phrases": ["gallium nitride (氮化镓)", "silicon nitride (氮化硅)"], "mnemonic": "氮化物半导体如GaN用于高功率和高频应用"},

    {"id": 806, "root": "oxid", "phonetic": "/ˈɒksaɪd/", "partOfSpeech": "n.", "frequency": 1, "category": "半导体", "meaning": "氧化物", "words": [
        {"word": "oxide", "phonetic": "/ˈɒksaɪd/", "partOfSpeech": "n.", "meaning": "氧化物", "memoryTip": "oxid氧 + ide → 氧化物", "rootPhrases": ["silicon oxide", "metal oxide"], "wordPhrases": ["silicon oxide", "metal oxide", "oxide layer"]},
        {"word": "oxidation", "phonetic": "/ˌɒksɪˈdeɪʃən/", "partOfSpeech": "n.", "meaning": "氧化", "memoryTip": "oxid + ation → 氧化过程", "rootPhrases": ["silicon oxide", "metal oxide"], "wordPhrases": ["thermal oxidation", "oxidation process"]}
    ], "phrases": ["silicon oxide (氧化硅)", "gate oxide (栅氧化层)"], "mnemonic": "氧化物在MOS结构中作为绝缘层"},

    {"id": 807, "root": "carb", "phonetic": "/ˈkɑːbaɪd/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "碳化物", "words": [
        {"word": "carbide", "phonetic": "/ˈkɑːbaɪd/", "partOfSpeech": "n.", "meaning": "碳化物", "memoryTip": "carb碳 + ide → 碳化物", "rootPhrases": ["silicon carbide", "tungsten carbide"], "wordPhrases": ["silicon carbide", "tungsten carbide", "cemented carbide"]},
        {"word": "carbon", "phonetic": "/ˈkɑːbən/", "partOfSpeech": "n.", "meaning": "碳", "memoryTip": "carb碳 + on → 碳元素", "rootPhrases": ["silicon carbide", "carbon nanotube"], "wordPhrases": ["carbon fiber", "carbon nanotube", "amorphous carbon"]}
    ], "phrases": ["silicon carbide (碳化硅)", "silicon carbide wafer (碳化硅晶圆)"], "mnemonic": "碳化硅(SiC)是宽禁带半导体材料"},

    {"id": 808, "root": "bor", "phonetic": "/ˈbɔːrɒn/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "硼", "words": [
        {"word": "boron", "phonetic": "/ˈbɔːrɒn/", "partOfSpeech": "n.", "meaning": "硼", "memoryTip": "bor硼 + on → 硼元素，常用P型掺杂剂", "rootPhrases": ["boron doping", "boron implantation"], "wordPhrases": ["boron doping", "boron implantation", "boron trifluoride"]},
        {"word": "boride", "phonetic": "/ˈbɔːraɪd/", "partOfSpeech": "n.", "meaning": "硼化物", "memoryTip": "bor硼 + ide → 硼化物", "rootPhrases": ["boron doping", "boron implantation"], "wordPhrases": ["titanium boride", "zirconium boride"]}
    ], "phrases": ["boron doping (硼掺杂)", "boron implantation (硼注入)"], "mnemonic": "硼是重要的P型掺杂剂，用于形成P型半导体"},

    {"id": 809, "root": "phosph", "phonetic": "/ˈfɒsfərəs/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "磷", "words": [
        {"word": "phosphorus", "phonetic": "/ˈfɒsfərəs/", "partOfSpeech": "n.", "meaning": "磷", "memoryTip": "phosph光 + orus → 磷(夜光)", "rootPhrases": ["phosphorus doping", "phosphine"], "wordPhrases": ["phosphorus doping", "red phosphorus", "white phosphorus"]},
        {"word": "phosphate", "phonetic": "/ˈfɒsfeɪt/", "partOfSpeech": "n.", "meaning": "磷酸盐", "memoryTip": "phosph + ate → 磷酸盐", "rootPhrases": ["phosphorus doping", "phosphine"], "wordPhrases": ["calcium phosphate", "sodium phosphate"]}
    ], "phrases": ["phosphorus doping (磷掺杂)", "phosphine (磷化氢)"], "mnemonic": "磷是重要的N型掺杂剂，用于形成N型半导体"},

    {"id": 810, "root": "alumin", "phonetic": "/ˌæljʊˈmɪniəm/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "铝", "words": [
        {"word": "aluminum", "phonetic": "/əˈluːmɪnəm/", "partOfSpeech": "n.", "meaning": "铝", "memoryTip": "alumin铝 + um → 铝元素，常用互连材料", "rootPhrases": ["aluminum metallization", "aluminum wire"], "wordPhrases": ["aluminum metallization", "aluminum wire", "aluminum alloy"]},
        {"word": "alumina", "phonetic": "/əˈluːmɪnə/", "partOfSpeech": "n.", "meaning": "氧化铝", "memoryTip": "alumin + a → 氧化铝", "rootPhrases": ["aluminum metallization", "aluminum wire"], "wordPhrases": ["alumina substrate", "porous alumina"]}
    ], "phrases": ["aluminum metallization (铝金属化)", "aluminum interconnect (铝互连)"], "mnemonic": "铝是传统集成电路中的金属互连材料"},

    # 811-820: 铜互连与金属材料
    {"id": 811, "root": "cupr", "phonetic": "/ˈkʌpər/", "partOfSpeech": "n.", "frequency": 1, "category": "半导体", "meaning": "铜", "words": [
        {"word": "copper", "phonetic": "/ˈkʊpər/", "partOfSpeech": "n.", "meaning": "铜", "memoryTip": "cupr铜 + er → 铜元素，现代互连材料", "rootPhrases": ["copper interconnect", "copper damascene"], "wordPhrases": ["copper interconnect", "copper wire", "copper plating"]},
        {"word": "cupric", "phonetic": "/ˈkjuːprɪk/", "partOfSpeech": "adj.", "meaning": "铜的，二价铜的", "memoryTip": "cupr + ic → 铜的", "rootPhrases": ["copper interconnect", "copper damascene"], "wordPhrases": ["cupric oxide", "cupric ion"]}
    ], "phrases": ["copper interconnect (铜互连)", "copper damascene (铜大马士革工艺)"], "mnemonic": "铜互连取代了铝互连，电阻更低"},

    {"id": 812, "root": "tungst", "phonetic": "/ˈtʌŋstən/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "钨", "words": [
        {"word": "tungsten", "phonetic": "/ˈtʌŋstən/", "partOfSpeech": "n.", "meaning": "钨", "memoryTip": "tung重 + sten → 钨(重石)，高熔点金属", "rootPhrases": ["tungsten silicide", "tungsten plug"], "wordPhrases": ["tungsten silicide", "tungsten plug", "tungsten carbide"]}
    ], "phrases": ["tungsten silicide (硅化钨)", "tungsten plug (钨插塞)"], "mnemonic": "钨用于接触孔填充和栅极材料"},

    {"id": 813, "root": "titan", "phonetic": "/taɪˈteɪniəm/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "钛", "words": [
        {"word": "titanium", "phonetic": "/taɪˈteɪniəm/", "partOfSpeech": "n.", "meaning": "钛", "memoryTip": "Titan泰坦 + ium → 钛元素，阻挡层材料", "rootPhrases": ["titanium nitride", "titanium silicide"], "wordPhrases": ["titanium nitride", "titanium silicide", "titanium dioxide"]}
    ], "phrases": ["titanium nitride (氮化钛)", "titanium silicide (硅化钛)"], "mnemonic": "氮化钛(TiN)常用作阻挡层和抗反射层"},

    {"id": 814, "root": "platin", "phonetic": "/ˈplætɪnəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "铂", "words": [
        {"word": "platinum", "phonetic": "/ˈplætɪnəm/", "partOfSpeech": "n.", "meaning": "铂，白金", "memoryTip": "platin银 + um → 铂(银色金属)", "rootPhrases": ["platinum silicide", "platinum electrode"], "wordPhrases": ["platinum silicide", "platinum electrode", "platinum catalyst"]}
    ], "phrases": ["platinum silicide (硅化铂)", "platinum electrode (铂电极)"], "mnemonic": "铂用于欧姆接触和催化应用"},

    {"id": 815, "root": "aur", "phonetic": "/ˈɔːrəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "金", "words": [
        {"word": "gold", "phonetic": "/ɡəʊld/", "partOfSpeech": "n.", "meaning": "金", "memoryTip": "金是优良的导电材料，用于键合线", "rootPhrases": ["gold wire", "gold plating"], "wordPhrases": ["gold wire bonding", "gold plating", "gold pad"]},
        {"word": "aurum", "phonetic": "/ˈɔːrəm/", "partOfSpeech": "n.", "meaning": "金(拉丁语)", "memoryTip": "aurum金的拉丁语，化学符号Au来源", "rootPhrases": ["gold wire", "gold plating"], "wordPhrases": ["aurum metallicum"]}
    ], "phrases": ["gold wire bonding (金丝键合)", "gold plating (镀金)"], "mnemonic": "金用于引线键合和防氧化保护层"},

    {"id": 816, "root": "argent", "phonetic": "/ˈɑːdʒəntəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "银", "words": [
        {"word": "silver", "phonetic": "/ˈsɪlvər/", "partOfSpeech": "n.", "meaning": "银", "memoryTip": "银是导电性最好的金属，用于导电胶", "rootPhrases": ["silver paste", "silver epoxy"], "wordPhrases": ["silver paste", "silver epoxy", "silver wire"]}
    ], "phrases": ["silver paste (银浆)", "silver epoxy (银胶)"], "mnemonic": "银浆用于芯片贴装和导电连接"},

    {"id": 817, "root": "cobalt", "phonetic": "/ˈkəʊbɔːlt/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "钴", "words": [
        {"word": "cobalt", "phonetic": "/ˈkəʊbɔːlt/", "partOfSpeech": "n.", "meaning": "钴", "memoryTip": "cobalt德语Kobold(妖精) → 钴，用于硅化物", "rootPhrases": ["cobalt silicide", "cobalt nitride"], "wordPhrases": ["cobalt silicide", "cobalt nitride", "cobalt alloy"]}
    ], "phrases": ["cobalt silicide (硅化钴)", "cobalt nitride (氮化钴)"], "mnemonic": "硅化钴用于自对准硅化物工艺"},

    {"id": 818, "root": "nickel", "phonetic": "/ˈnɪkəl/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "镍", "words": [
        {"word": "nickel", "phonetic": "/ˈnɪkəl/", "partOfSpeech": "n.", "meaning": "镍", "memoryTip": "nickel德语Nickel(魔鬼) → 镍，用于阻挡层", "rootPhrases": ["nickel silicide", "nickel barrier"], "wordPhrases": ["nickel silicide", "nickel barrier", "nickel plating"]}
    ], "phrases": ["nickel silicide (硅化镍)", "nickel barrier (镍阻挡层)"], "mnemonic": "镍用于硅化物和阻挡层应用"},

    {"id": 819, "root": "pallad", "phonetic": "/pəˈleɪdiəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "钯", "words": [
        {"word": "palladium", "phonetic": "/pəˈleɪdiəm/", "partOfSpeech": "n.", "meaning": "钯", "memoryTip": "Pallas雅典娜 + ium → 钯，用于电极", "rootPhrases": ["palladium electrode", "palladium catalyst"], "wordPhrases": ["palladium electrode", "palladium catalyst", "palladium alloy"]}
    ], "phrases": ["palladium electrode (钯电极)", "palladium catalyst (钯催化剂)"], "mnemonic": "钯用于电极和催化应用"},

    {"id": 820, "root": "hafn", "phonetic": "/ˈhæfniəm/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "铪", "words": [
        {"word": "hafnium", "phonetic": "/ˈhæfniəm/", "partOfSpeech": "n.", "meaning": "铪", "memoryTip": "Hafnia哥本哈根 + ium → 铪，高k介质材料", "rootPhrases": ["hafnium oxide", "hafnium silicate"], "wordPhrases": ["hafnium oxide", "hafnium silicate", "hafnium dioxide"]}
    ], "phrases": ["hafnium oxide (氧化铪)", "hafnium silicate (硅酸铪)"], "mnemonic": "氧化铪(HfO2)是重要的HKMG高k介质材料"},

    # 821-830: 高k介质与工艺
    {"id": 821, "root": "zircon", "phonetic": "/zɜːˈkəʊniəm/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "锆", "words": [
        {"word": "zirconium", "phonetic": "/zɜːˈkəʊniəm/", "partOfSpeech": "n.", "meaning": "锆", "memoryTip": "zircon锆石 + ium → 锆，高k材料", "rootPhrases": ["zirconium oxide", "zirconium silicate"], "wordPhrases": ["zirconium oxide", "zirconium silicate", "zirconium dioxide"]}
    ], "phrases": ["zirconium oxide (氧化锆)", "zirconium silicate (硅酸锆)"], "mnemonic": "氧化锆(ZrO2)也是高k介质候选材料"},

    {"id": 822, "root": "tantal", "phonetic": "/ˈtæntələm/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "钽", "words": [
        {"word": "tantalum", "phonetic": "/ˈtæntələm/", "partOfSpeech": "n.", "meaning": "钽", "memoryTip": "Tantalus坦塔罗斯 + um → 钽，阻挡层材料", "rootPhrases": ["tantalum nitride", "tantalum oxide"], "wordPhrases": ["tantalum nitride", "tantalum oxide", "tantalum capacitor"]}
    ], "phrases": ["tantalum nitride (氮化钽)", "tantalum oxide (氧化钽)"], "mnemonic": "氮化钽(TaN)用作铜互连的阻挡层"},

    {"id": 823, "root": "ruthen", "phonetic": "/ruːˈθiːniəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "钌", "words": [
        {"word": "ruthenium", "phonetic": "/ruːˈθiːniəm/", "partOfSpeech": "n.", "meaning": "钌", "memoryTip": "Ruthenia俄罗斯 + ium → 钌，栅极材料", "rootPhrases": ["ruthenium gate", "ruthenium electrode"], "wordPhrases": ["ruthenium gate", "ruthenium electrode", "ruthenium oxide"]}
    ], "phrases": ["ruthenium gate (钌栅极)", "ruthenium electrode (钌电极)"], "mnemonic": "钌被研究用作金属栅极材料"},

    {"id": 824, "root": "irid", "phonetic": "/ɪˈrɪdiəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "铱", "words": [
        {"word": "iridium", "phonetic": "/ɪˈrɪdiəm/", "partOfSpeech": "n.", "meaning": "铱", "memoryTip": "Iris彩虹 + ium → 铱(彩虹色氧化物)", "rootPhrases": ["iridium electrode", "iridium oxide"], "wordPhrases": ["iridium electrode", "iridium oxide", "iridium silicide"]}
    ], "phrases": ["iridium electrode (铱电极)", "iridium oxide (氧化铱)"], "mnemonic": "铱用于电极和高温应用"},

    {"id": 825, "root": "lanthan", "phonetic": "/ˈlænθənəm/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "镧", "words": [
        {"word": "lanthanum", "phonetic": "/ˈlænθənəm/", "partOfSpeech": "n.", "meaning": "镧", "memoryTip": "lanthan隐藏 + um → 镧系元素之首", "rootPhrases": ["lanthanum oxide", "lanthanum doping"], "wordPhrases": ["lanthanum oxide", "lanthanum doping", "lanthanum aluminate"]}
    ], "phrases": ["lanthanum oxide (氧化镧)", "lanthanum aluminate (铝酸镧)"], "mnemonic": "镧系氧化物用于高k介质"},

    {"id": 826, "root": "aluminat", "phonetic": "/əˈluːmɪnət/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "铝酸盐", "words": [
        {"word": "aluminate", "phonetic": "/əˈluːmɪneɪt/", "partOfSpeech": "n.", "meaning": "铝酸盐", "memoryTip": "alumin铝 + ate → 铝酸盐", "rootPhrases": ["lanthanum aluminate", "aluminate structure"], "wordPhrases": ["lanthanum aluminate", "aluminate structure", "sodium aluminate"]}
    ], "phrases": ["lanthanum aluminate (铝酸镧)", "aluminate structure (铝酸盐结构)"], "mnemonic": "铝酸镧是候选的高k介质材料"},

    {"id": 827, "root": "ferroelectr", "phonetic": "/ˌferəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "frequency": 3, "category": "半导体", "meaning": "铁电的", "words": [
        {"word": "ferroelectric", "phonetic": "/ˌferəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "meaning": "铁电的", "memoryTip": "ferro铁 + electric电 → 铁电的(类似铁磁)", "rootPhrases": ["ferroelectric material", "ferroelectric memory"], "wordPhrases": ["ferroelectric material", "ferroelectric memory", "ferroelectric capacitor"]},
        {"word": "ferroelectricity", "phonetic": "/ˌferəʊɪlekˈtrɪsɪti/", "partOfSpeech": "n.", "meaning": "铁电性", "memoryTip": "ferroelectric + ity → 铁电性", "rootPhrases": ["ferroelectric material", "ferroelectric memory"], "wordPhrases": ["ferroelectricity effect", "spontaneous ferroelectricity"]}
    ], "phrases": ["ferroelectric material (铁电材料)", "ferroelectric memory (铁电存储器)"], "mnemonic": "铁电材料具有可切换的自发极化特性"},

    {"id": 828, "root": "pyroelectr", "phonetic": "/ˌpaɪrəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "frequency": 4, "category": "半导体", "meaning": "热电的，热释电的", "words": [
        {"word": "pyroelectric", "phonetic": "/ˌpaɪrəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "meaning": "热电的", "memoryTip": "pyro热 + electric电 → 热电的", "rootPhrases": ["pyroelectric effect", "pyroelectric detector"], "wordPhrases": ["pyroelectric effect", "pyroelectric detector", "pyroelectric material"]},
        {"word": "pyroelectricity", "phonetic": "/ˌpaɪrəʊɪlekˈtrɪsɪti/", "partOfSpeech": "n.", "meaning": "热电性", "memoryTip": "pyroelectric + ity → 热电性", "rootPhrases": ["pyroelectric effect", "pyroelectric detector"], "wordPhrases": ["pyroelectricity phenomenon", "pyroelectricity coefficient"]}
    ], "phrases": ["pyroelectric effect (热释电效应)", "pyroelectric detector (热释电探测器)"], "mnemonic": "热释电效应是温度变化引起极化变化的现象"},

    {"id": 829, "root": "piezoelectr", "phonetic": "/piˌeɪzəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "frequency": 3, "category": "半导体", "meaning": "压电的", "words": [
        {"word": "piezoelectric", "phonetic": "/piˌeɪzəʊɪˈlektrɪk/", "partOfSpeech": "adj.", "meaning": "压电的", "memoryTip": "piezo压 + electric电 → 压电的", "rootPhrases": ["piezoelectric effect", "piezoelectric material"], "wordPhrases": ["piezoelectric effect", "piezoelectric material", "piezoelectric sensor"]},
        {"word": "piezoelectricity", "phonetic": "/piˌeɪzəʊɪlekˈtrɪsɪti/", "partOfSpeech": "n.", "meaning": "压电性", "memoryTip": "piezoelectric + ity → 压电性", "rootPhrases": ["piezoelectric effect", "piezoelectric material"], "wordPhrases": ["piezoelectricity constant", "direct piezoelectricity"]}
    ], "phrases": ["piezoelectric effect (压电效应)", "piezoelectric material (压电材料)"], "mnemonic": "压电材料在机械应力下产生电荷"},

    {"id": 830, "root": "electrostrict", "phonetic": "/ɪˌlektrəʊˈstrɪkʃən/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "电致伸缩", "words": [
        {"word": "electrostriction", "phonetic": "/ɪˌlektrəʊˈstrɪkʃən/", "partOfSpeech": "n.", "meaning": "电致伸缩", "memoryTip": "electro电 + strict限制 + ion → 电场引起的形变", "rootPhrases": ["electrostriction effect", "electrostrictive material"], "wordPhrases": ["electrostriction effect", "electrostrictive material", "electrostriction coefficient"]},
        {"word": "electrostrictive", "phonetic": "/ɪˌlektrəʊˈstrɪktɪv/", "partOfSpeech": "adj.", "meaning": "电致伸缩的", "memoryTip": "electrostrict + ive → 电致伸缩的", "rootPhrases": ["electrostriction effect", "electrostrictive material"], "wordPhrases": ["electrostrictive actuator", "electrostrictive response"]}
    ], "phrases": ["electrostriction effect (电致伸缩效应)", "electrostrictive material (电致伸缩材料)"], "mnemonic": "电致伸缩是所有介电材料在电场下的二次形变效应"},

    # 831-840: 制造工艺与设备
    {"id": 831, "root": "lithograph", "phonetic": "/lɪˈθɒɡrəfi/", "partOfSpeech": "n.", "frequency": 1, "category": "半导体", "meaning": "光刻", "words": [
        {"word": "lithography", "phonetic": "/lɪˈθɒɡrəfi/", "partOfSpeech": "n.", "meaning": "光刻技术", "memoryTip": "litho石 + graphy写 → 光刻(源于石版印刷)", "rootPhrases": ["optical lithography", "electron beam lithography"], "wordPhrases": ["optical lithography", "electron beam lithography", "extreme ultraviolet lithography"]},
        {"word": "lithographic", "phonetic": "/ˌlɪθəˈɡræfɪk/", "partOfSpeech": "adj.", "meaning": "光刻的", "memoryTip": "lithography + ic → 光刻的", "rootPhrases": ["optical lithography", "electron beam lithography"], "wordPhrases": ["lithographic process", "lithographic pattern"]},
        {"word": "photolithography", "phonetic": "/ˌfəʊtəʊlɪˈθɒɡrəfi/", "partOfSpeech": "n.", "meaning": "光刻", "memoryTip": "photo光 + lithography → 光刻", "rootPhrases": ["optical lithography", "electron beam lithography"], "wordPhrases": ["photolithography equipment", "photolithography process"]}
    ], "phrases": ["optical lithography (光学光刻)", "EUV lithography (极紫外光刻)"], "mnemonic": "光刻是芯片制造的核心图形转移技术"},

    {"id": 832, "root": "etch", "phonetic": "/etʃ/", "partOfSpeech": "v.", "frequency": 1, "category": "半导体", "meaning": "刻蚀", "words": [
        {"word": "etch", "phonetic": "/etʃ/", "partOfSpeech": "v.", "meaning": "刻蚀", "memoryTip": "etch原意为蚀刻 → 半导体刻蚀工艺", "rootPhrases": ["plasma etch", "wet etch"], "wordPhrases": ["dry etch", "wet etch", "plasma etch"]},
        {"word": "etching", "phonetic": "/ˈetʃɪŋ/", "partOfSpeech": "n.", "meaning": "刻蚀工艺", "memoryTip": "etch + ing → 刻蚀工艺", "rootPhrases": ["plasma etch", "wet etch"], "wordPhrases": ["reactive ion etching", "plasma etching", "wet etching"]},
        {"word": "etchant", "phonetic": "/ˈetʃənt/", "partOfSpeech": "n.", "meaning": "刻蚀剂", "memoryTip": "etch + ant → 刻蚀剂", "rootPhrases": ["plasma etch", "wet etch"], "wordPhrases": ["chemical etchant", "plasma etchant"]}
    ], "phrases": ["plasma etch (等离子体刻蚀)", "reactive ion etching (反应离子刻蚀)"], "mnemonic": "刻蚀将光刻图案转移到晶圆上"},

    {"id": 833, "root": "deposit", "phonetic": "/dɪˈpɒzɪt/", "partOfSpeech": "v.", "frequency": 1, "category": "半导体", "meaning": "沉积", "words": [
        {"word": "deposit", "phonetic": "/dɪˈpɒzɪt/", "partOfSpeech": "v.", "meaning": "沉积", "memoryTip": "de下 + posit放 → 沉积", "rootPhrases": ["chemical vapor deposition", "physical vapor deposition"], "wordPhrases": ["thin film deposition", "material deposition", "layer deposition"]},
        {"word": "deposition", "phonetic": "/ˌdepəˈzɪʃən/", "partOfSpeech": "n.", "meaning": "沉积过程", "memoryTip": "deposit + ion → 沉积过程", "rootPhrases": ["chemical vapor deposition", "physical vapor deposition"], "wordPhrases": ["chemical vapor deposition", "physical vapor deposition", "atomic layer deposition"]},
        {"word": "deposited", "phonetic": "/dɪˈpɒzɪtɪd/", "partOfSpeech": "adj.", "meaning": "沉积的", "memoryTip": "deposit + ed → 已沉积的", "rootPhrases": ["chemical vapor deposition", "physical vapor deposition"], "wordPhrases": ["deposited film", "deposited layer"]}
    ], "phrases": ["chemical vapor deposition (化学气相沉积)", "physical vapor deposition (物理气相沉积)"], "mnemonic": "沉积是在晶圆上形成薄膜材料层"},

    {"id": 834, "root": "implant", "phonetic": "/ˈɪmplɑːnt/", "partOfSpeech": "v.", "frequency": 1, "category": "半导体", "meaning": "注入", "words": [
        {"word": "implant", "phonetic": "/ˈɪmplɑːnt/", "partOfSpeech": "v.", "meaning": "注入", "memoryTip": "im入 + plant种植 → 离子注入", "rootPhrases": ["ion implantation", "dopant implant"], "wordPhrases": ["ion implantation", "implant energy", "implant dose"]},
        {"word": "implantation", "phonetic": "/ˌɪmplɑːnˈteɪʃən/", "partOfSpeech": "n.", "meaning": "注入过程", "memoryTip": "implant + ation → 注入过程", "rootPhrases": ["ion implantation", "dopant implant"], "wordPhrases": ["ion implantation process", "shallow implantation", "deep implantation"]},
        {"word": "implanted", "phonetic": "/ɪmˈplɑːntɪd/", "partOfSpeech": "adj.", "meaning": "已注入的", "memoryTip": "implant + ed → 已注入的", "rootPhrases": ["ion implantation", "dopant implant"], "wordPhrases": ["implanted profile", "implanted dopant"]}
    ], "phrases": ["ion implantation (离子注入)", "implantation energy (注入能量)"], "mnemonic": "离子注入精确控制掺杂浓度和深度"},

    {"id": 835, "root": "diffus", "phonetic": "/dɪˈfjuːʒən/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "扩散", "words": [
        {"word": "diffusion", "phonetic": "/dɪˈfjuːʒən/", "partOfSpeech": "n.", "meaning": "扩散", "memoryTip": "dif分开 + fus流 + ion → 扩散", "rootPhrases": ["thermal diffusion", "diffusion process"], "wordPhrases": ["thermal diffusion", "diffusion process", "diffusion coefficient"]},
        {"word": "diffuse", "phonetic": "/dɪˈfjuːz/", "partOfSpeech": "v.", "meaning": "扩散", "memoryTip": "dif分开 + fuse流 → 扩散", "rootPhrases": ["thermal diffusion", "diffusion process"], "wordPhrases": ["diffuse layer", "diffuse dopant", "diffuse profile"]},
        {"word": "diffusivity", "phonetic": "/dɪfjuːˈzɪvɪti/", "partOfSpeech": "n.", "meaning": "扩散率", "memoryTip": "diffus + ivity → 扩散率", "rootPhrases": ["thermal diffusion", "diffusion process"], "wordPhrases": ["thermal diffusivity", "diffusivity coefficient"]}
    ], "phrases": ["thermal diffusion (热扩散)", "diffusion coefficient (扩散系数)"], "mnemonic": "热扩散是传统掺杂工艺，离子注入已取代大部分应用"},

    {"id": 836, "root": "anneal", "phonetic": "/əˈniːl/", "partOfSpeech": "v.", "frequency": 2, "category": "半导体", "meaning": "退火", "words": [
        {"word": "anneal", "phonetic": "/əˈniːl/", "partOfSpeech": "v.", "meaning": "退火", "memoryTip": "anneal原意为退火 → 热处理修复晶格损伤", "rootPhrases": ["thermal anneal", "rapid thermal anneal"], "wordPhrases": ["thermal anneal", "rapid thermal anneal", "laser anneal"]},
        {"word": "annealing", "phonetic": "/əˈniːlɪŋ/", "partOfSpeech": "n.", "meaning": "退火工艺", "memoryTip": "anneal + ing → 退火工艺", "rootPhrases": ["thermal anneal", "rapid thermal anneal"], "wordPhrases": ["annealing process", "annealing temperature", "annealing furnace"]},
        {"word": "annealed", "phonetic": "/əˈniːld/", "partOfSpeech": "adj.", "meaning": "已退火的", "memoryTip": "anneal + ed → 已退火的", "rootPhrases": ["thermal anneal", "rapid thermal anneal"], "wordPhrases": ["annealed sample", "annealed wafer"]}
    ], "phrases": ["rapid thermal anneal (快速热退火)", "annealing temperature (退火温度)"], "mnemonic": "退火修复离子注入造成的晶格损伤并激活掺杂剂"},

    {"id": 837, "root": "planariz", "phonetic": "/ˈpleɪnəraɪz/", "partOfSpeech": "v.", "frequency": 3, "category": "半导体", "meaning": "平坦化", "words": [
        {"word": "planarize", "phonetic": "/ˈpleɪnəraɪz/", "partOfSpeech": "v.", "meaning": "平坦化", "memoryTip": "plan平面 + arize使 → 使平坦化", "rootPhrases": ["chemical mechanical planarization", "planarization process"], "wordPhrases": ["planarize surface", "planarize layer"]},
        {"word": "planarization", "phonetic": "/ˌpleɪnəraɪˈzeɪʃən/", "partOfSpeech": "n.", "meaning": "平坦化工艺", "memoryTip": "planarize + tion → 平坦化工艺", "rootPhrases": ["chemical mechanical planarization", "planarization process"], "wordPhrases": ["chemical mechanical planarization", "global planarization", "local planarization"]},
        {"word": "planar", "phonetic": "/ˈpleɪnər/", "partOfSpeech": "adj.", "meaning": "平面的", "memoryTip": "plan平面 + ar → 平面的", "rootPhrases": ["chemical mechanical planarization", "planarization process"], "wordPhrases": ["planar process", "planar device", "planar structure"]}
    ], "phrases": ["chemical mechanical planarization (化学机械平坦化)", "global planarization (全局平坦化)"], "mnemonic": "CMP平坦化确保多层互连的平坦表面"},

    {"id": 838, "root": "polish", "phonetic": "/ˈpɒlɪʃ/", "partOfSpeech": "v.", "frequency": 2, "category": "半导体", "meaning": "抛光", "words": [
        {"word": "polish", "phonetic": "/ˈpɒlɪʃ/", "partOfSpeech": "v.", "meaning": "抛光", "memoryTip": "polish原意为擦亮 → 化学机械抛光", "rootPhrases": ["chemical mechanical polish", "wafer polish"], "wordPhrases": ["chemical mechanical polish", "wafer polish", "surface polish"]},
        {"word": "polishing", "phonetic": "/ˈpɒlɪʃɪŋ/", "partOfSpeech": "n.", "meaning": "抛光工艺", "memoryTip": "polish + ing → 抛光工艺", "rootPhrases": ["chemical mechanical polish", "wafer polish"], "wordPhrases": ["chemical mechanical polishing", "CMP polishing", "wafer polishing"]},
        {"word": "polished", "phonetic": "/ˈpɒlɪʃt/", "partOfSpeech": "adj.", "meaning": "已抛光的", "memoryTip": "polish + ed → 已抛光的", "rootPhrases": ["chemical mechanical polish", "wafer polish"], "wordPhrases": ["polished surface", "polished wafer"]}
    ], "phrases": ["chemical mechanical polishing (化学机械抛光)", "CMP polishing (CMP抛光)"], "mnemonic": "CMP是化学和机械作用结合的抛光技术"},

    {"id": 839, "root": "sputter", "phonetic": "/ˈspʌtər/", "partOfSpeech": "v.", "frequency": 2, "category": "半导体", "meaning": "溅射", "words": [
        {"word": "sputter", "phonetic": "/ˈspʌtər/", "partOfSpeech": "v.", "meaning": "溅射", "memoryTip": "sputter原意为喷溅 → 物理气相沉积技术", "rootPhrases": ["sputter deposition", "sputtering system"], "wordPhrases": ["sputter deposition", "sputter etch", "sputter rate"]},
        {"word": "sputtering", "phonetic": "/ˈspʌtərɪŋ/", "partOfSpeech": "n.", "meaning": "溅射工艺", "memoryTip": "sputter + ing → 溅射工艺", "rootPhrases": ["sputter deposition", "sputtering system"], "wordPhrases": ["magnetron sputtering", "RF sputtering", "DC sputtering"]},
        {"word": "sputtered", "phonetic": "/ˈspʌtərd/", "partOfSpeech": "adj.", "meaning": "溅射的", "memoryTip": "sputter + ed → 溅射的", "rootPhrases": ["sputter deposition", "sputtering system"], "wordPhrases": ["sputtered film", "sputtered layer"]}
    ], "phrases": ["sputter deposition (溅射沉积)", "magnetron sputtering (磁控溅射)"], "mnemonic": "溅射是用离子轰击靶材沉积薄膜的PVD技术"},

    {"id": 840, "root": "evapor", "phonetic": "/ɪˈvæpəreɪt/", "partOfSpeech": "v.", "frequency": 2, "category": "半导体", "meaning": "蒸发", "words": [
        {"word": "evaporate", "phonetic": "/ɪˈvæpəreɪt/", "partOfSpeech": "v.", "meaning": "蒸发", "memoryTip": "e出 + vapor蒸汽 + ate → 蒸发", "rootPhrases": ["thermal evaporation", "electron beam evaporation"], "wordPhrases": ["thermal evaporation", "electron beam evaporation", "evaporate metal"]},
        {"word": "evaporation", "phonetic": "/ɪˌvæpəˈreɪʃən/", "partOfSpeech": "n.", "meaning": "蒸发过程", "memoryTip": "evaporate + ion → 蒸发过程", "rootPhrases": ["thermal evaporation", "electron beam evaporation"], "wordPhrases": ["evaporation process", "evaporation rate", "evaporation source"]},
        {"word": "evaporated", "phonetic": "/ɪˈvæpəreɪtɪd/", "partOfSpeech": "adj.", "meaning": "蒸发的", "memoryTip": "evaporate + ed → 蒸发的", "rootPhrases": ["thermal evaporation", "electron beam evaporation"], "wordPhrases": ["evaporated film", "evaporated metal"]}
    ], "phrases": ["thermal evaporation (热蒸发)", "electron beam evaporation (电子束蒸发)"], "mnemonic": "热蒸发是早期金属薄膜沉积技术"},

    # 841-850: 先进工艺技术
    {"id": 841, "root": "epitax", "phonetic": "/ˌepɪˈtæksiəl/", "partOfSpeech": "adj.", "frequency": 2, "category": "半导体", "meaning": "外延的", "words": [
        {"word": "epitaxial", "phonetic": "/ˌepɪˈtæksiəl/", "partOfSpeech": "adj.", "meaning": "外延的", "memoryTip": "epi上 + taxi排列 + al → 外延生长的", "rootPhrases": ["epitaxial growth", "epitaxial layer"], "wordPhrases": ["epitaxial growth", "epitaxial layer", "epitaxial silicon"]},
        {"word": "epitaxy", "phonetic": "/ˈepɪtæksi/", "partOfSpeech": "n.", "meaning": "外延生长", "memoryTip": "epi上 + taxy排列 → 外延", "rootPhrases": ["epitaxial growth", "epitaxial layer"], "wordPhrases": ["molecular beam epitaxy", "vapor phase epitaxy", "metalorganic epitaxy"]},
        {"word": "epi", "phonetic": "/ˈepi/", "partOfSpeech": "n.", "meaning": "外延层", "memoryTip": "epitaxy的缩写 → 外延层", "rootPhrases": ["epitaxial growth", "epitaxial layer"], "wordPhrases": ["epi layer", "epi wafer", "epi thickness"]}
    ], "phrases": ["epitaxial growth (外延生长)", "molecular beam epitaxy (分子束外延)"], "mnemonic": "外延生长在单晶衬底上生长取向一致的单晶层"},

    {"id": 842, "root": "molecu", "phonetic": "/ˈmɒlɪkjuːl/", "partOfSpeech": "n.", "frequency": 2, "category": "半导体", "meaning": "分子", "words": [
        {"word": "molecule", "phonetic": "/ˈmɒlɪkjuːl/", "partOfSpeech": "n.", "meaning": "分子", "memoryTip": "mole质量 + cule小 → 分子", "rootPhrases": ["molecular beam epitaxy", "molecular layer"], "wordPhrases": ["molecular beam", "organic molecule", "small molecule"]},
        {"word": "molecular", "phonetic": "/məˈlekjʊlər/", "partOfSpeech": "adj.", "meaning": "分子的", "memoryTip": "molecule + ar → 分子的", "rootPhrases": ["molecular beam epitaxy", "molecular layer"], "wordPhrases": ["molecular beam epitaxy", "molecular weight", "molecular structure"]}
    ], "phrases": ["molecular beam epitaxy (分子束外延)", "molecular layer (分子层)"], "mnemonic": "分子束外延在超高真空中精确控制薄膜生长"},

    {"id": 843, "root": "organomet", "phonetic": "/ɔːˌɡænəʊˈmetlɪk/", "partOfSpeech": "adj.", "frequency": 3, "category": "半导体", "meaning": "有机金属的", "words": [
        {"word": "organometallic", "phonetic": "/ɔːˌɡænəʊˈmetlɪk/", "partOfSpeech": "adj.", "meaning": "有机金属的", "memoryTip": "organo有机 + metallic金属的 → 有机金属的", "rootPhrases": ["organometallic precursor", "organometallic compound"], "wordPhrases": ["organometallic precursor", "organometallic compound", "organometallic vapor"]},
        {"word": "organometallics", "phonetic": "/ɔːˌɡænəʊˈmetlɪks/", "partOfSpeech": "n.", "meaning": "有机金属化合物", "memoryTip": "organometallic + s → 有机金属化合物", "rootPhrases": ["organometallic precursor", "organometallic compound"], "wordPhrases": ["volatile organometallics", "organometallics chemistry"]}
    ], "phrases": ["organometallic precursor (有机金属前驱体)", "organometallic compound (有机金属化合物)"], "mnemonic": "有机金属化合物用于MOCVD生长III-V族半导体"},

    {"id": 844, "root": "precurs", "phonetic": "/prɪˈkɜːsər/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "前驱体", "words": [
        {"word": "precursor", "phonetic": "/prɪˈkɜːsər/", "partOfSpeech": "n.", "meaning": "前驱体", "memoryTip": "pre前 + curs跑 + or → 前驱体", "rootPhrases": ["precursor gas", "precursor molecule"], "wordPhrases": ["precursor gas", "precursor molecule", "precursor delivery"]},
        {"word": "precursory", "phonetic": "/prɪˈkɜːsəri/", "partOfSpeech": "adj.", "meaning": "前驱的", "memoryTip": "precursor + y → 前驱的", "rootPhrases": ["precursor gas", "precursor molecule"], "wordPhrases": ["precursory reaction", "precursory state"]}
    ], "phrases": ["precursor gas (前驱气体)", "precursor molecule (前驱分子)"], "mnemonic": "前驱体是CVD/ALD工艺中提供元素的气体或液体源"},

    {"id": 845, "root": "atomic", "phonetic": "/əˈtɒmɪk/", "partOfSpeech": "adj.", "frequency": 2, "category": "半导体", "meaning": "原子的", "words": [
        {"word": "atomic", "phonetic": "/əˈtɒmɪk/", "partOfSpeech": "adj.", "meaning": "原子的", "memoryTip": "atom原子 + ic → 原子的", "rootPhrases": ["atomic layer deposition", "atomic force microscopy"], "wordPhrases": ["atomic layer", "atomic structure", "atomic scale"]},
        {"word": "atom", "phonetic": "/ˈætəm/", "partOfSpeech": "n.", "meaning": "原子", "memoryTip": "a不 + tom切 → 不可分割的原子", "rootPhrases": ["atomic layer deposition", "atomic force microscopy"], "wordPhrases": ["hydrogen atom", "oxygen atom", "dopant atom"]}
    ], "phrases": ["atomic layer deposition (原子层沉积)", "atomic force microscopy (原子力显微镜)"], "mnemonic": "原子层沉积每次只沉积一个原子层"},

    {"id": 846, "root": "monolay", "phonetic": "/ˈmɒnəleɪər/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "单层", "words": [
        {"word": "monolayer", "phonetic": "/ˈmɒnəleɪər/", "partOfSpeech": "n.", "meaning": "单层，单分子层", "memoryTip": "mono单 + layer层 → 单层", "rootPhrases": ["monolayer coverage", "self-assembled monolayer"], "wordPhrases": ["monolayer coverage", "self-assembled monolayer", "atomic monolayer"]},
        {"word": "monolayers", "phonetic": "/ˈmɒnəleɪəz/", "partOfSpeech": "n.", "meaning": "单层(复数)", "memoryTip": "monolayer + s → 单层(复数)", "rootPhrases": ["monolayer coverage", "self-assembled monolayer"], "wordPhrases": ["multiple monolayers", "few monolayers"]}
    ], "phrases": ["monolayer coverage (单层覆盖)", "self-assembled monolayer (自组装单层)"], "mnemonic": "单层是一个分子或原子厚度的薄膜"},

    {"id": 847, "root": "self-assembl", "phonetic": "/selfəˈsembl/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "自组装", "words": [
        {"word": "self-assembly", "phonetic": "/ˌselfəˈsembli/", "partOfSpeech": "n.", "meaning": "自组装", "memoryTip": "self自我 + assembly组装 → 自组装", "rootPhrases": ["self-assembled monolayer", "molecular self-assembly"], "wordPhrases": ["self-assembled monolayer", "molecular self-assembly", "block copolymer self-assembly"]},
        {"word": "self-assemble", "phonetic": "/ˌselfəˈsembl/", "partOfSpeech": "v.", "meaning": "自组装", "memoryTip": "self + assemble → 自组装", "rootPhrases": ["self-assembled monolayer", "molecular self-assembly"], "wordPhrases": ["self-assemble monolayer", "self-assemble structure"]},
        {"word": "self-assembled", "phonetic": "/ˌselfəˈsembld/", "partOfSpeech": "adj.", "meaning": "自组装的", "memoryTip": "self-assemble + ed → 自组装的", "rootPhrases": ["self-assembled monolayer", "molecular self-assembly"], "wordPhrases": ["self-assembled monolayer", "self-assembled structure"]}
    ], "phrases": ["self-assembled monolayer (自组装单层)", "molecular self-assembly (分子自组装)"], "mnemonic": "自组装利用分子间作用力自动形成有序结构"},

    {"id": 848, "root": "block copoly", "phonetic": "/blɒkˈkɒpəlɪmər/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "嵌段共聚物", "words": [
        {"word": "block copolymer", "phonetic": "/blɒkˈkɒpəlɪmər/", "partOfSpeech": "n.", "meaning": "嵌段共聚物", "memoryTip": "block嵌段 + copolymer共聚物 → 嵌段共聚物", "rootPhrases": ["block copolymer self-assembly", "diblock copolymer"], "wordPhrases": ["block copolymer self-assembly", "diblock copolymer", "triblock copolymer"]},
        {"word": "copolymer", "phonetic": "/kəʊˈpɒlɪmər/", "partOfSpeech": "n.", "meaning": "共聚物", "memoryTip": "co共同 + polymer聚合物 → 共聚物", "rootPhrases": ["block copolymer self-assembly", "diblock copolymer"], "wordPhrases": ["random copolymer", "alternating copolymer", "graft copolymer"]}
    ], "phrases": ["block copolymer self-assembly (嵌段共聚物自组装)", "diblock copolymer (二嵌段共聚物)"], "mnemonic": "嵌段共聚物自组装用于制作纳米级图形"},

    {"id": 849, "root": "direct self-assembl", "phonetic": "/dɪˈrektˌselfəˈsembli/", "partOfSpeech": "n.", "frequency": 4, "category": "半导体", "meaning": "定向自组装", "words": [
        {"word": "directed self-assembly", "phonetic": "/dɪˈrektɪdˌselfəˈsembli/", "partOfSpeech": "n.", "meaning": "定向自组装", "memoryTip": "directed定向的 + self-assembly自组装 → 定向自组装", "rootPhrases": ["directed self-assembly process", "DSA lithography"], "wordPhrases": ["directed self-assembly process", "DSA lithography", "graphoepitaxy DSA"]}
    ], "phrases": ["directed self-assembly (定向自组装)", "DSA lithography (DSA光刻)"], "mnemonic": "定向自组装结合光刻引导实现纳米级图形"},

    {"id": 850, "root": "nanoimpr", "phonetic": "/ˈnænəʊɪmˌprɪnt/", "partOfSpeech": "n.", "frequency": 3, "category": "半导体", "meaning": "纳米压印", "words": [
        {"word": "nanoimprint", "phonetic": "/ˈnænəʊɪmˌprɪnt/", "partOfSpeech": "n.", "meaning": "纳米压印", "memoryTip": "nano纳 + imprint压印 → 纳米压印", "rootPhrases": ["nanoimprint lithography", "nanoimprint mold"], "wordPhrases": ["nanoimprint lithography", "nanoimprint mold", "nanoimprint resist"]},
        {"word": "nanoimprinting", "phonetic": "/ˈnænəʊɪmˌprɪntɪŋ/", "partOfSpeech": "n.", "meaning": "纳米压印工艺", "memoryTip": "nanoimprint + ing → 纳米压印工艺", "rootPhrases": ["nanoimprint lithography", "nanoimprint mold"], "wordPhrases": ["thermal nanoimprinting", "UV nanoimprinting", "roll-to-roll nanoimprinting"]}
    ], "phrases": ["nanoimprint lithography (纳米压印光刻)", "nanoimprint mold (纳米压印模板)"], "mnemonic": "纳米压印用机械压印代替光学曝光制作纳米结构"},
]

# 保存到临时文件以便查看
with open('f:/claudeanli/beidanci3/new_roots_801_850.json', 'w', encoding='utf-8') as f:
    json.dump(new_roots, f, ensure_ascii=False, indent=2)

print(f"Generated {len(new_roots)} entries (id 801-850)")
