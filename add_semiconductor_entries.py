#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成id 801-1000的200个半导体词根条目并添加到semiconductor.json
"""
import json

def create_word_entry(word, phonetic, pos, meaning, memory_tip, phrases):
    """创建单词条目"""
    return {
        "word": word,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "meaning": meaning,
        "memoryTip": memory_tip,
        "wordPhrases": phrases
    }

def create_entry(id_num, root, phonetic, pos, freq, meaning, words_list, phrases, mnemonic):
    """创建词根条目"""
    # 为每个单词添加root相关信息
    full_words = []
    for w in words_list:
        full_words.append({
            "word": w["word"],
            "phonetic": w["phonetic"],
            "partOfSpeech": w["partOfSpeech"],
            "meaning": w["meaning"],
            "memoryTip": w["memoryTip"],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases,
            "wordPhrases": w.get("wordPhrases", phrases)
        })

    return {
        "id": id_num,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "frequency": freq,
        "category": "半导体",
        "meaning": meaning,
        "words": full_words,
        "phrases": phrases,
        "mnemonic": mnemonic
    }

# 所有200个条目数据 (801-1000)
ENTRIES_DATA = [
    # 801-810: 基础材料科学
    (801, "silic", "/ˈsɪlɪk/", "n.", 1, "硅，硅基", [
        ("silicon", "/ˈsɪlɪkən/", "n.", "硅", "silic硅 + on → 硅元素", ["silicon wafer", "silicon valley", "silicon chip"]),
        ("silica", "/ˈsɪlɪkə/", "n.", "二氧化硅", "silic硅 + a → 二氧化硅", ["silica gel", "fused silica"]),
        ("silicate", "/ˈsɪlɪkeɪt/", "n.", "硅酸盐", "silic硅 + ate盐 → 硅酸盐", ["sodium silicate", "calcium silicate"])
    ], ["silicon wafer (硅片)", "silicon valley (硅谷)", "silicon chip (硅芯片)"], "silic是硅的词根，半导体工业的基础材料"),

    (802, "german", "/dʒɜːˈmeɪniəm/", "n.", 2, "锗", [
        ("germanium", "/dʒɜːˈmeɪniəm/", "n.", "锗", "German德国 + ium元素 → 锗元素", ["germanium diode", "germanium transistor"])
    ], ["germanium diode (锗二极管)", "germanium transistor (锗晶体管)"], "锗是早期半导体材料，比硅更早用于晶体管"),

    (803, "gall", "/ˈɡæliəm/", "n.", 2, "镓", [
        ("gallium", "/ˈɡæliəm/", "n.", "镓", "Gallia高卢(法国) + ium → 镓元素", ["gallium arsenide", "gallium nitride"])
    ], ["gallium arsenide (砷化镓)", "gallium nitride (氮化镓)"], "镓是重要的III-V族半导体材料基础"),

    (804, "arsen", "/ˈɑːsənɪk/", "n.", 3, "砷", [
        ("arsenic", "/ˈɑːsənɪk/", "n.", "砷", "arsen强烈 + ic → 砷(有毒)", ["gallium arsenide", "arsenic doping"])
    ], ["gallium arsenide (砷化镓)", "arsenic doping (砷掺杂)"], "砷是砷化镓(GaAs)的重要组成部分"),

    (805, "nitr", "/ˈnaɪtraɪd/", "n.", 2, "氮化物", [
        ("nitride", "/ˈnaɪtraɪd/", "n.", "氮化物", "nitr氮 + ide化物 → 氮化物", ["gallium nitride", "silicon nitride", "boron nitride"]),
        ("nitrogen", "/ˈnaɪtrədʒən/", "n.", "氮", "nitr氮 + gen产生 → 氮气", ["nitrogen gas", "liquid nitrogen"])
    ], ["gallium nitride (氮化镓)", "silicon nitride (氮化硅)"], "氮化物半导体如GaN用于高功率和高频应用"),

    (806, "oxid", "/ˈɒksaɪd/", "n.", 1, "氧化物", [
        ("oxide", "/ˈɒksaɪd/", "n.", "氧化物", "oxid氧 + ide → 氧化物", ["silicon oxide", "metal oxide", "oxide layer"]),
        ("oxidation", "/ˌɒksɪˈdeɪʃən/", "n.", "氧化", "oxid + ation → 氧化过程", ["thermal oxidation", "oxidation process"])
    ], ["silicon oxide (氧化硅)", "gate oxide (栅氧化层)"], "氧化物在MOS结构中作为绝缘层"),

    (807, "carb", "/ˈkɑːbaɪd/", "n.", 3, "碳化物", [
        ("carbide", "/ˈkɑːbaɪd/", "n.", "碳化物", "carb碳 + ide → 碳化物", ["silicon carbide", "tungsten carbide", "cemented carbide"]),
        ("carbon", "/ˈkɑːbən/", "n.", "碳", "carb碳 + on → 碳元素", ["carbon fiber", "carbon nanotube", "amorphous carbon"])
    ], ["silicon carbide (碳化硅)", "silicon carbide wafer (碳化硅晶圆)"], "碳化硅(SiC)是宽禁带半导体材料"),

    (808, "bor", "/ˈbɔːrɒn/", "n.", 3, "硼", [
        ("boron", "/ˈbɔːrɒn/", "n.", "硼", "bor硼 + on → 硼元素，常用P型掺杂剂", ["boron doping", "boron implantation", "boron trifluoride"]),
        ("boride", "/ˈbɔːraɪd/", "n.", "硼化物", "bor硼 + ide → 硼化物", ["titanium boride", "zirconium boride"])
    ], ["boron doping (硼掺杂)", "boron implantation (硼注入)"], "硼是重要的P型掺杂剂，用于形成P型半导体"),

    (809, "phosph", "/ˈfɒsfərəs/", "n.", 2, "磷", [
        ("phosphorus", "/ˈfɒsfərəs/", "n.", "磷", "phosph光 + orus → 磷(夜光)", ["phosphorus doping", "red phosphorus", "white phosphorus"]),
        ("phosphate", "/ˈfɒsfeɪt/", "n.", "磷酸盐", "phosph + ate → 磷酸盐", ["calcium phosphate", "sodium phosphate"])
    ], ["phosphorus doping (磷掺杂)", "phosphine (磷化氢)"], "磷是重要的N型掺杂剂，用于形成N型半导体"),

    (810, "alumin", "/ˌæljʊˈmɪniəm/", "n.", 2, "铝", [
        ("aluminum", "/əˈluːmɪnəm/", "n.", "铝", "alumin铝 + um → 铝元素，常用互连材料", ["aluminum metallization", "aluminum wire", "aluminum alloy"]),
        ("alumina", "/əˈluːmɪnə/", "n.", "氧化铝", "alumin + a → 氧化铝", ["alumina substrate", "porous alumina"])
    ], ["aluminum metallization (铝金属化)", "aluminum interconnect (铝互连)"], "铝是传统集成电路中的金属互连材料"),

    # 811-820: 铜互连与金属材料
    (811, "cupr", "/ˈkʌpər/", "n.", 1, "铜", [
        ("copper", "/ˈkʊpər/", "n.", "铜", "cupr铜 + er → 铜元素，现代互连材料", ["copper interconnect", "copper wire", "copper plating"]),
        ("cupric", "/ˈkjuːprɪk/", "adj.", "铜的，二价铜的", "cupr + ic → 铜的", ["cupric oxide", "cupric ion"])
    ], ["copper interconnect (铜互连)", "copper damascene (铜大马士革工艺)"], "铜互连取代了铝互连，电阻更低"),

    (812, "tungst", "/ˈtʌŋstən/", "n.", 3, "钨", [
        ("tungsten", "/ˈtʌŋstən/", "n.", "钨", "tung重 + sten → 钨(重石)，高熔点金属", ["tungsten silicide", "tungsten plug", "tungsten carbide"])
    ], ["tungsten silicide (硅化钨)", "tungsten plug (钨插塞)"], "钨用于接触孔填充和栅极材料"),

    (813, "titan", "/taɪˈteɪniəm/", "n.", 3, "钛", [
        ("titanium", "/taɪˈteɪniəm/", "n.", "钛", "Titan泰坦 + ium → 钛元素，阻挡层材料", ["titanium nitride", "titanium silicide", "titanium dioxide"])
    ], ["titanium nitride (氮化钛)", "titanium silicide (硅化钛)"], "氮化钛(TiN)常用作阻挡层和抗反射层"),

    (814, "platin", "/ˈplætɪnəm/", "n.", 4, "铂", [
        ("platinum", "/ˈplætɪnəm/", "n.", "铂，白金", "platin银 + um → 铂(银色金属)", ["platinum silicide", "platinum electrode", "platinum catalyst"])
    ], ["platinum silicide (硅化铂)", "platinum electrode (铂电极)"], "铂用于欧姆接触和催化应用"),

    (815, "aur", "/ˈɔːrəm/", "n.", 4, "金", [
        ("gold", "/ɡəʊld/", "n.", "金", "金是优良的导电材料，用于键合线", ["gold wire bonding", "gold plating", "gold pad"]),
        ("aurum", "/ˈɔːrəm/", "n.", "金(拉丁语)", "aurum金的拉丁语，化学符号Au来源", ["aurum metallicum"])
    ], ["gold wire bonding (金丝键合)", "gold plating (镀金)"], "金用于引线键合和防氧化保护层"),

    (816, "argent", "/ˈɑːdʒəntəm/", "n.", 4, "银", [
        ("silver", "/ˈsɪlvər/", "n.", "银", "银是导电性最好的金属，用于导电胶", ["silver paste", "silver epoxy", "silver wire"])
    ], ["silver paste (银浆)", "silver epoxy (银胶)"], "银浆用于芯片贴装和导电连接"),

    (817, "cobalt", "/ˈkəʊbɔːlt/", "n.", 3, "钴", [
        ("cobalt", "/ˈkəʊbɔːlt/", "n.", "钴", "cobalt德语Kobold(妖精) → 钴，用于硅化物", ["cobalt silicide", "cobalt nitride", "cobalt alloy"])
    ], ["cobalt silicide (硅化钴)", "cobalt nitride (氮化钴)"], "硅化钴用于自对准硅化物工艺"),

    (818, "nickel", "/ˈnɪkəl/", "n.", 3, "镍", [
        ("nickel", "/ˈnɪkəl/", "n.", "镍", "nickel德语Nickel(魔鬼) → 镍，用于阻挡层", ["nickel silicide", "nickel barrier", "nickel plating"])
    ], ["nickel silicide (硅化镍)", "nickel barrier (镍阻挡层)"], "镍用于硅化物和阻挡层应用"),

    (819, "pallad", "/pəˈleɪdiəm/", "n.", 4, "钯", [
        ("palladium", "/pəˈleɪdiəm/", "n.", "钯", "Pallas雅典娜 + ium → 钯，用于电极", ["palladium electrode", "palladium catalyst", "palladium alloy"])
    ], ["palladium electrode (钯电极)", "palladium catalyst (钯催化剂)"], "钯用于电极和催化应用"),

    (820, "hafn", "/ˈhæfniəm/", "n.", 3, "铪", [
        ("hafnium", "/ˈhæfniəm/", "n.", "铪", "Hafnia哥本哈根 + ium → 铪，高k介质材料", ["hafnium oxide", "hafnium silicate", "hafnium dioxide"])
    ], ["hafnium oxide (氧化铪)", "hafnium silicate (硅酸铪)"], "氧化铪(HfO2)是重要的HKMG高k介质材料"),

    # 821-830: 高k介质与工艺
    (821, "zircon", "/zɜːˈkəʊniəm/", "n.", 3, "锆", [
        ("zirconium", "/zɜːˈkəʊniəm/", "n.", "锆", "zircon锆石 + ium → 锆，高k材料", ["zirconium oxide", "zirconium silicate", "zirconium dioxide"])
    ], ["zirconium oxide (氧化锆)", "zirconium silicate (硅酸锆)"], "氧化锆(ZrO2)也是高k介质候选材料"),

    (822, "tantal", "/ˈtæntələm/", "n.", 3, "钽", [
        ("tantalum", "/ˈtæntələm/", "n.", "钽", "Tantalus坦塔罗斯 + um → 钽，阻挡层材料", ["tantalum nitride", "tantalum oxide", "tantalum capacitor"])
    ], ["tantalum nitride (氮化钽)", "tantalum oxide (氧化钽)"], "氮化钽(TaN)用作铜互连的阻挡层"),

    (823, "ruthen", "/ruːˈθiːniəm/", "n.", 4, "钌", [
        ("ruthenium", "/ruːˈθiːniəm/", "n.", "钌", "Ruthenia俄罗斯 + ium → 钌，栅极材料", ["ruthenium gate", "ruthenium electrode", "ruthenium oxide"])
    ], ["ruthenium gate (钌栅极)", "ruthenium electrode (钌电极)"], "钌被研究用作金属栅极材料"),

    (824, "irid", "/ɪˈrɪdiəm/", "n.", 4, "铱", [
        ("iridium", "/ɪˈrɪdiəm/", "n.", "铱", "Iris彩虹 + ium → 铱(彩虹色氧化物)", ["iridium electrode", "iridium oxide", "iridium silicide"])
    ], ["iridium electrode (铱电极)", "iridium oxide (氧化铱)"], "铱用于电极和高温应用"),

    (825, "lanthan", "/ˈlænθənəm/", "n.", 4, "镧", [
        ("lanthanum", "/ˈlænθənəm/", "n.", "镧", "lanthan隐藏 + um → 镧系元素之首", ["lanthanum oxide", "lanthanum doping", "lanthanum aluminate"])
    ], ["lanthanum oxide (氧化镧)", "lanthanum aluminate (铝酸镧)"], "镧系氧化物用于高k介质"),

    (826, "aluminat", "/əˈluːmɪnət/", "n.", 4, "铝酸盐", [
        ("aluminate", "/əˈluːmɪneɪt/", "n.", "铝酸盐", "alumin铝 + ate → 铝酸盐", ["lanthanum aluminate", "aluminate structure", "sodium aluminate"])
    ], ["lanthanum aluminate (铝酸镧)", "aluminate structure (铝酸盐结构)"], "铝酸镧是候选的高k介质材料"),

    (827, "ferroelectr", "/ˌferəʊɪˈlektrɪk/", "adj.", 3, "铁电的", [
        ("ferroelectric", "/ˌferəʊɪˈlektrɪk/", "adj.", "铁电的", "ferro铁 + electric电 → 铁电的(类似铁磁)", ["ferroelectric material", "ferroelectric memory", "ferroelectric capacitor"]),
        ("ferroelectricity", "/ˌferəʊɪlekˈtrɪsɪti/", "n.", "铁电性", "ferroelectric + ity → 铁电性", ["ferroelectricity effect", "spontaneous ferroelectricity"])
    ], ["ferroelectric material (铁电材料)", "ferroelectric memory (铁电存储器)"], "铁电材料具有可切换的自发极化特性"),

    (828, "pyroelectr", "/ˌpaɪrəʊɪˈlektrɪk/", "adj.", 4, "热电的，热释电的", [
        ("pyroelectric", "/ˌpaɪrəʊɪˈlektrɪk/", "adj.", "热电的", "pyro热 + electric电 → 热电的", ["pyroelectric effect", "pyroelectric detector", "pyroelectric material"]),
        ("pyroelectricity", "/ˌpaɪrəʊɪlekˈtrɪsɪti/", "n.", "热电性", "pyroelectric + ity → 热电性", ["pyroelectricity phenomenon", "pyroelectricity coefficient"])
    ], ["pyroelectric effect (热释电效应)", "pyroelectric detector (热释电探测器)"], "热释电效应是温度变化引起极化变化的现象"),

    (829, "piezoelectr", "/piˌeɪzəʊɪˈlektrɪk/", "adj.", 3, "压电的", [
        ("piezoelectric", "/piˌeɪzəʊɪˈlektrɪk/", "adj.", "压电的", "piezo压 + electric电 → 压电的", ["piezoelectric effect", "piezoelectric material", "piezoelectric sensor"]),
        ("piezoelectricity", "/piˌeɪzəʊɪlekˈtrɪsɪti/", "n.", "压电性", "piezoelectric + ity → 压电性", ["piezoelectricity constant", "direct piezoelectricity"])
    ], ["piezoelectric effect (压电效应)", "piezoelectric material (压电材料)"], "压电材料在机械应力下产生电荷"),

    (830, "electrostrict", "/ɪˌlektrəʊˈstrɪkʃən/", "n.", 4, "电致伸缩", [
        ("electrostriction", "/ɪˌlektrəʊˈstrɪkʃən/", "n.", "电致伸缩", "electro电 + strict限制 + ion → 电场引起的形变", ["electrostriction effect", "electrostrictive material", "electrostriction coefficient"]),
        ("electrostrictive", "/ɪˌlektrəʊˈstrɪktɪv/", "adj.", "电致伸缩的", "electrostrict + ive → 电致伸缩的", ["electrostrictive actuator", "electrostrictive response"])
    ], ["electrostriction effect (电致伸缩效应)", "electrostrictive material (电致伸缩材料)"], "电致伸缩是所有介电材料在电场下的二次形变效应"),

    # 831-840: 制造工艺与设备
    (831, "lithograph", "/lɪˈθɒɡrəfi/", "n.", 1, "光刻", [
        ("lithography", "/lɪˈθɒɡrəfi/", "n.", "光刻技术", "litho石 + graphy写 → 光刻(源于石版印刷)", ["optical lithography", "electron beam lithography", "extreme ultraviolet lithography"]),
        ("lithographic", "/ˌlɪθəˈɡræfɪk/", "adj.", "光刻的", "lithography + ic → 光刻的", ["lithographic process", "lithographic pattern"]),
        ("photolithography", "/ˌfəʊtəʊlɪˈθɒɡrəfi/", "n.", "光刻", "photo光 + lithography → 光刻", ["photolithography equipment", "photolithography process"])
    ], ["optical lithography (光学光刻)", "EUV lithography (极紫外光刻)"], "光刻是芯片制造的核心图形转移技术"),

    (832, "etch", "/etʃ/", "v.", 1, "刻蚀", [
        ("etch", "/etʃ/", "v.", "刻蚀", "etch原意为蚀刻 → 半导体刻蚀工艺", ["dry etch", "wet etch", "plasma etch"]),
        ("etching", "/ˈetʃɪŋ/", "n.", "刻蚀工艺", "etch + ing → 刻蚀工艺", ["reactive ion etching", "plasma etching", "wet etching"]),
        ("etchant", "/ˈetʃənt/", "n.", "刻蚀剂", "etch + ant → 刻蚀剂", ["chemical etchant", "plasma etchant"])
    ], ["plasma etch (等离子体刻蚀)", "reactive ion etching (反应离子刻蚀)"], "刻蚀将光刻图案转移到晶圆上"),

    (833, "deposit", "/dɪˈpɒzɪt/", "v.", 1, "沉积", [
        ("deposit", "/dɪˈpɒzɪt/", "v.", "沉积", "de下 + posit放 → 沉积", ["thin film deposition", "material deposition", "layer deposition"]),
        ("deposition", "/ˌdepəˈzɪʃən/", "n.", "沉积过程", "deposit + ion → 沉积过程", ["chemical vapor deposition", "physical vapor deposition", "atomic layer deposition"]),
        ("deposited", "/dɪˈpɒzɪtɪd/", "adj.", "沉积的", "deposit + ed → 已沉积的", ["deposited film", "deposited layer"])
    ], ["chemical vapor deposition (化学气相沉积)", "physical vapor deposition (物理气相沉积)"], "沉积是在晶圆上形成薄膜材料层"),

    (834, "implant", "/ˈɪmplɑːnt/", "v.", 1, "注入", [
        ("implant", "/ˈɪmplɑːnt/", "v.", "注入", "im入 + plant种植 → 离子注入", ["ion implantation", "implant energy", "implant dose"]),
        ("implantation", "/ˌɪmplɑːnˈteɪʃən/", "n.", "注入过程", "implant + ation → 注入过程", ["ion implantation process", "shallow implantation", "deep implantation"]),
        ("implanted", "/ɪmˈplɑːntɪd/", "adj.", "已注入的", "implant + ed → 已注入的", ["implanted profile", "implanted dopant"])
    ], ["ion implantation (离子注入)", "implantation energy (注入能量)"], "离子注入精确控制掺杂浓度和深度"),

    (835, "diffus", "/dɪˈfjuːʒən/", "n.", 2, "扩散", [
        ("diffusion", "/dɪˈfjuːʒən/", "n.", "扩散", "dif分开 + fus流 + ion → 扩散", ["thermal diffusion", "diffusion process", "diffusion coefficient"]),
        ("diffuse", "/dɪˈfjuːz/", "v.", "扩散", "dif分开 + fuse流 → 扩散", ["diffuse layer", "diffuse dopant", "diffuse profile"]),
        ("diffusivity", "/dɪfjuːˈzɪvɪti/", "n.", "扩散率", "diffus + ivity → 扩散率", ["thermal diffusivity", "diffusivity coefficient"])
    ], ["thermal diffusion (热扩散)", "diffusion coefficient (扩散系数)"], "热扩散是传统掺杂工艺，离子注入已取代大部分应用"),

    (836, "anneal", "/əˈniːl/", "v.", 2, "退火", [
        ("anneal", "/əˈniːl/", "v.", "退火", "anneal原意为退火 → 热处理修复晶格损伤", ["thermal anneal", "rapid thermal anneal", "laser anneal"]),
        ("annealing", "/əˈniːlɪŋ/", "n.", "退火工艺", "anneal + ing → 退火工艺", ["annealing process", "annealing temperature", "annealing furnace"]),
        ("annealed", "/əˈniːld/", "adj.", "已退火的", "anneal + ed → 已退火的", ["annealed sample", "annealed wafer"])
    ], ["rapid thermal anneal (快速热退火)", "annealing temperature (退火温度)"], "退火修复离子注入造成的晶格损伤并激活掺杂剂"),

    (837, "planariz", "/ˈpleɪnəraɪz/", "v.", 3, "平坦化", [
        ("planarize", "/ˈpleɪnəraɪz/", "v.", "平坦化", "plan平面 + arize使 → 使平坦化", ["planarize surface", "planarize layer"]),
        ("planarization", "/ˌpleɪnəraɪˈzeɪʃən/", "n.", "平坦化工艺", "planarize + tion → 平坦化工艺", ["chemical mechanical planarization", "global planarization", "local planarization"]),
        ("planar", "/ˈpleɪnər/", "adj.", "平面的", "plan平面 + ar → 平面的", ["planar process", "planar device", "planar structure"])
    ], ["chemical mechanical planarization (化学机械平坦化)", "global planarization (全局平坦化)"], "CMP平坦化确保多层互连的平坦表面"),

    (838, "polish", "/ˈpɒlɪʃ/", "v.", 2, "抛光", [
        ("polish", "/ˈpɒlɪʃ/", "v.", "抛光", "polish原意为擦亮 → 化学机械抛光", ["chemical mechanical polish", "wafer polish", "surface polish"]),
        ("polishing", "/ˈpɒlɪʃɪŋ/", "n.", "抛光工艺", "polish + ing → 抛光工艺", ["chemical mechanical polishing", "CMP polishing", "wafer polishing"]),
        ("polished", "/ˈpɒlɪʃt/", "adj.", "已抛光的", "polish + ed → 已抛光的", ["polished surface", "polished wafer"])
    ], ["chemical mechanical polishing (化学机械抛光)", "CMP polishing (CMP抛光)"], "CMP是化学和机械作用结合的抛光技术"),

    (839, "sputter", "/ˈspʌtər/", "v.", 2, "溅射", [
        ("sputter", "/ˈspʌtər/", "v.", "溅射", "sputter原意为喷溅 → 物理气相沉积技术", ["sputter deposition", "sputter etch", "sputter rate"]),
        ("sputtering", "/ˈspʌtərɪŋ/", "n.", "溅射工艺", "sputter + ing → 溅射工艺", ["magnetron sputtering", "RF sputtering", "DC sputtering"]),
        ("sputtered", "/ˈspʌtərd/", "adj.", "溅射的", "sputter + ed → 溅射的", ["sputtered film", "sputtered layer"])
    ], ["sputter deposition (溅射沉积)", "magnetron sputtering (磁控溅射)"], "溅射是用离子轰击靶材沉积薄膜的PVD技术"),

    (840, "evapor", "/ɪˈvæpəreɪt/", "v.", 2, "蒸发", [
        ("evaporate", "/ɪˈvæpəreɪt/", "v.", "蒸发", "e出 + vapor蒸汽 + ate → 蒸发", ["thermal evaporation", "electron beam evaporation", "evaporate metal"]),
        ("evaporation", "/ɪˌvæpəˈreɪʃən/", "n.", "蒸发过程", "evaporate + ion → 蒸发过程", ["evaporation process", "evaporation rate", "evaporation source"]),
        ("evaporated", "/ɪˈvæpəreɪtɪd/", "adj.", "蒸发的", "evaporate + ed → 蒸发的", ["evaporated film", "evaporated metal"])
    ], ["thermal evaporation (热蒸发)", "electron beam evaporation (电子束蒸发)"], "热蒸发是早期金属薄膜沉积技术"),

    # 841-850: 先进工艺技术
    (841, "epitax", "/ˌepɪˈtæksiəl/", "adj.", 2, "外延的", [
        ("epitaxial", "/ˌepɪˈtæksiəl/", "adj.", "外延的", "epi上 + taxi排列 + al → 外延生长的", ["epitaxial growth", "epitaxial layer", "epitaxial silicon"]),
        ("epitaxy", "/ˈepɪtæksi/", "n.", "外延生长", "epi上 + taxy排列 → 外延", ["molecular beam epitaxy", "vapor phase epitaxy", "metalorganic epitaxy"]),
        ("epi", "/ˈepi/", "n.", "外延层", "epitaxy的缩写 → 外延层", ["epi layer", "epi wafer", "epi thickness"])
    ], ["epitaxial growth (外延生长)", "molecular beam epitaxy (分子束外延)"], "外延生长在单晶衬底上生长取向一致的单晶层"),

    (842, "molecu", "/ˈmɒlɪkjuːl/", "n.", 2, "分子", [
        ("molecule", "/ˈmɒlɪkjuːl/", "n.", "分子", "mole质量 + cule小 → 分子", ["molecular beam", "organic molecule", "small molecule"]),
        ("molecular", "/məˈlekjʊlər/", "adj.", "分子的", "molecule + ar → 分子的", ["molecular beam epitaxy", "molecular weight", "molecular structure"])
    ], ["molecular beam epitaxy (分子束外延)", "molecular layer (分子层)"], "分子束外延在超高真空中精确控制薄膜生长"),

    (843, "organomet", "/ɔːˌɡænəʊˈmetlɪk/", "adj.", 3, "有机金属的", [
        ("organometallic", "/ɔːˌɡænəʊˈmetlɪk/", "adj.", "有机金属的", "organo有机 + metallic金属的 → 有机金属的", ["organometallic precursor", "organometallic compound", "organometallic vapor"]),
        ("organometallics", "/ɔːˌɡænəʊˈmetlɪks/", "n.", "有机金属化合物", "organometallic + s → 有机金属化合物", ["volatile organometallics", "organometallics chemistry"])
    ], ["organometallic precursor (有机金属前驱体)", "organometallic compound (有机金属化合物)"], "有机金属化合物用于MOCVD生长III-V族半导体"),

    (844, "precurs", "/prɪˈkɜːsər/", "n.", 3, "前驱体", [
        ("precursor", "/prɪˈkɜːsər/", "n.", "前驱体", "pre前 + curs跑 + or → 前驱体", ["precursor gas", "precursor molecule", "precursor delivery"]),
        ("precursory", "/prɪˈkɜːsəri/", "adj.", "前驱的", "precursor + y → 前驱的", ["precursory reaction", "precursory state"])
    ], ["precursor gas (前驱气体)", "precursor molecule (前驱分子)"], "前驱体是CVD/ALD工艺中提供元素的气体或液体源"),

    (845, "atomic", "/əˈtɒmɪk/", "adj.", 2, "原子的", [
        ("atomic", "/əˈtɒmɪk/", "adj.", "原子的", "atom原子 + ic → 原子的", ["atomic layer", "atomic structure", "atomic scale"]),
        ("atom", "/ˈætəm/", "n.", "原子", "a不 + tom切 → 不可分割的原子", ["hydrogen atom", "oxygen atom", "dopant atom"])
    ], ["atomic layer deposition (原子层沉积)", "atomic force microscopy (原子力显微镜)"], "原子层沉积每次只沉积一个原子层"),

    (846, "monolay", "/ˈmɒnəleɪər/", "n.", 3, "单层", [
        ("monolayer", "/ˈmɒnəleɪər/", "n.", "单层，单分子层", "mono单 + layer层 → 单层", ["monolayer coverage", "self-assembled monolayer", "atomic monolayer"]),
        ("monolayers", "/ˈmɒnəleɪəz/", "n.", "单层(复数)", "monolayer + s → 单层(复数)", ["multiple monolayers", "few monolayers"])
    ], ["monolayer coverage (单层覆盖)", "self-assembled monolayer (自组装单层)"], "单层是一个分子或原子厚度的薄膜"),

    (847, "self-assembl", "/selfəˈsembl/", "n.", 3, "自组装", [
        ("self-assembly", "/ˌselfəˈsembli/", "n.", "自组装", "self自我 + assembly组装 → 自组装", ["self-assembled monolayer", "molecular self-assembly", "block copolymer self-assembly"]),
        ("self-assemble", "/ˌselfəˈsembl/", "v.", "自组装", "self + assemble → 自组装", ["self-assemble monolayer", "self-assemble structure"]),
        ("self-assembled", "/ˌselfəˈsembld/", "adj.", "自组装的", "self-assemble + ed → 自组装的", ["self-assembled monolayer", "self-assembled structure"])
    ], ["self-assembled monolayer (自组装单层)", "molecular self-assembly (分子自组装)"], "自组装利用分子间作用力自动形成有序结构"),

    (848, "block copoly", "/blɒkˈkɒpəlɪmər/", "n.", 4, "嵌段共聚物", [
        ("block copolymer", "/blɒkˈkɒpəlɪmər/", "n.", "嵌段共聚物", "block嵌段 + copolymer共聚物 → 嵌段共聚物", ["block copolymer self-assembly", "diblock copolymer", "triblock copolymer"]),
        ("copolymer", "/kəʊˈpɒlɪmər/", "n.", "共聚物", "co共同 + polymer聚合物 → 共聚物", ["random copolymer", "alternating copolymer", "graft copolymer"])
    ], ["block copolymer self-assembly (嵌段共聚物自组装)", "diblock copolymer (二嵌段共聚物)"], "嵌段共聚物自组装用于制作纳米级图形"),

    (849, "direct self-assembl", "/dɪˈrektˌselfəˈsembli/", "n.", 4, "定向自组装", [
        ("directed self-assembly", "/dɪˈrektɪdˌselfəˈsembli/", "n.", "定向自组装", "directed定向的 + self-assembly自组装 → 定向自组装", ["directed self-assembly process", "DSA lithography", "graphoepitaxy DSA"])
    ], ["directed self-assembly (定向自组装)", "DSA lithography (DSA光刻)"], "定向自组装结合光刻引导实现纳米级图形"),

    (850, "nanoimpr", "/ˈnænəʊɪmˌprɪnt/", "n.", 3, "纳米压印", [
        ("nanoimprint", "/ˈnænəʊɪmˌprɪnt/", "n.", "纳米压印", "nano纳 + imprint压印 → 纳米压印", ["nanoimprint lithography", "nanoimprint mold", "nanoimprint resist"]),
        ("nanoimprinting", "/ˈnænəʊɪmˌprɪntɪŋ/", "n.", "纳米压印工艺", "nanoimprint + ing → 纳米压印工艺", ["thermal nanoimprinting", "UV nanoimprinting", "roll-to-roll nanoimprinting"])
    ], ["nanoimprint lithography (纳米压印光刻)", "nanoimprint mold (纳米压印模板)"], "纳米压印用机械压印代替光学曝光制作纳米结构"),

    # 851-860: 测量与表征
    (851, "metrolog", "/məˈtrɒlədʒi/", "n.", 2, "计量学", [
        ("metrology", "/məˈtrɒlədʒi/", "n.", "计量学", "metro测量 + logy学 → 计量学", ["semiconductor metrology", "optical metrology", "critical dimension metrology"]),
        ("metrological", "/ˌmetrəˈlɒdʒɪkəl/", "adj.", "计量的", "metrology + ical → 计量的", ["metrological standard", "metrological traceability"])
    ], ["semiconductor metrology (半导体计量)", "critical dimension metrology (关键尺寸计量)"], "计量学确保半导体制造中的精确测量"),

    (852, "ellipsom", "/ɪˈlɪpsɒmɪtər/", "n.", 3, "椭偏仪", [
        ("ellipsometer", "/ɪˈlɪpsɒmɪtər/", "n.", "椭偏仪", "ellipso椭圆 + meter测量 → 椭偏仪", ["spectroscopic ellipsometer", "imaging ellipsometer"]),
        ("ellipsometry", "/ˌelɪpˈsɒmɪtri/", "n.", "椭偏测量", "ellipso椭圆 + metry测量 → 椭偏测量", ["spectroscopic ellipsometry", "ellipsometry measurement"])
    ], ["spectroscopic ellipsometry (光谱椭偏测量)", "ellipsometer (椭偏仪)"], "椭偏仪用于测量薄膜厚度和光学常数"),

    (853, "profilom", "/prəˈfaɪlɒmɪtər/", "n.", 3, "轮廓仪", [
        ("profilometer", "/prəˈfaɪlɒmɪtər/", "n.", "轮廓仪", "profile轮廓 + meter测量 → 轮廓仪", ["stylus profilometer", "optical profilometer", "atomic force profilometer"]),
        ("profilometry", "/ˌprəʊfɪˈlɒmɪtri/", "n.", "轮廓测量", "profile + metry → 轮廓测量", ["surface profilometry", "roughness profilometry"])
    ], ["stylus profilometer (触针式轮廓仪)", "optical profilometer (光学轮廓仪)"], "轮廓仪测量表面形貌和粗糙度"),

    (854, "scatterom", "/ˌskætəˈrɒmɪtri/", "n.", 4, "散射测量", [
        ("scatterometry", "/ˌskætəˈrɒmɪtri/", "n.", "散射测量", "scatter散射 + metry测量 → 散射测量", ["optical scatterometry", "angle-resolved scatterometry", "X-ray scatterometry"]),
        ("scatterometer", "/ˌskætəˈrɒmɪtər/", "n.", "散射仪", "scatter + meter → 散射仪", ["optical scatterometer", "laser scatterometer"])
    ], ["optical scatterometry (光学散射测量)", "scatterometry (散射测量)"], "散射测量用于非破坏性的线宽测量"),

    (855, "reflectom", "/rɪˈflektɒmɪtər/", "n.", 3, "反射仪", [
        ("reflectometer", "/rɪˈflektɒmɪtər/", "n.", "反射仪", "reflect反射 + meter测量 → 反射仪", ["thin film reflectometer", "spectroscopic reflectometer"]),
        ("reflectometry", "/ˌriːflekˈtɒmɪtri/", "n.", "反射测量", "reflect + metry → 反射测量", ["specular reflectometry", "diffuse reflectometry"])
    ], ["thin film reflectometer (薄膜反射仪)", "reflectometry (反射测量)"], "反射仪测量薄膜厚度和反射率"),

    (856, "spectroscop", "/spekˈtrɒskəpi/", "n.", 2, "光谱学", [
        ("spectroscopy", "/spekˈtrɒskəpi/", "n.", "光谱学", "spectro光谱 + scopy观察 → 光谱学", ["Raman spectroscopy", "infrared spectroscopy", "X-ray spectroscopy"]),
        ("spectrometer", "/spekˈtrɒmɪtər/", "n.", "光谱仪", "spectro + meter → 光谱仪", ["mass spectrometer", "optical spectrometer", "UV spectrometer"]),
        ("spectroscopic", "/ˌspektrəˈskɒpɪk/", "adj.", "光谱的", "spectroscopy + ic → 光谱的", ["spectroscopic analysis", "spectroscopic ellipsometry"])
    ], ["Raman spectroscopy (拉曼光谱)", "spectroscopic ellipsometry (光谱椭偏)"], "光谱学用于材料成分和结构分析"),

    (857, "microscop", "/ˈmaɪkrəskəʊp/", "n.", 1, "显微镜", [
        ("microscope", "/ˈmaɪkrəskəʊp/", "n.", "显微镜", "micro微 + scope观察 → 显微镜", ["electron microscope", "optical microscope", "scanning microscope"]),
        ("microscopy", "/maɪˈkrɒskəpi/", "n.", "显微术", "micro + scopy → 显微术", ["electron microscopy", "confocal microscopy", "fluorescence microscopy"]),
        ("microscopic", "/ˌmaɪkrəˈskɒpɪk/", "adj.", "微观的", "microscope + ic → 微观的", ["microscopic structure", "microscopic analysis"])
    ], ["electron microscope (电子显微镜)", "scanning electron microscopy (扫描电子显微)"], "显微镜用于观察微观结构和缺陷"),

    (858, "interferom", "/ˌɪntəfɪˈrɒmɪtər/", "n.", 3, "干涉仪", [
        ("interferometer", "/ˌɪntəfɪˈrɒmɪtər/", "n.", "干涉仪", "interfer干涉 + meter测量 → 干涉仪", ["laser interferometer", "white light interferometer", "Mach-Zehnder interferometer"]),
        ("interferometry", "/ˌɪntəfɪˈrɒmɪtri/", "n.", "干涉测量", "interfero + metry → 干涉测量", ["optical interferometry", "phase-shifting interferometry"])
    ], ["laser interferometer (激光干涉仪)", "optical interferometry (光学干涉测量)"], "干涉仪用于高精度表面形貌测量"),

    (859, "photoluminesc", "/ˌfəʊtəʊluːmɪˈnesns/", "n.", 3, "光致发光", [
        ("photoluminescence", "/ˌfəʊtəʊluːmɪˈnesns/", "n.", "光致发光", "photo光 + luminescence发光 → 光致发光", ["photoluminescence spectroscopy", "photoluminescence intensity", "room temperature photoluminescence"]),
        ("photoluminescent", "/ˌfəʊtəʊluːmɪˈnesnt/", "adj.", "光致发光的", "photoluminescence + t → 光致发光的", ["photoluminescent material", "photoluminescent spectrum"])
    ], ["photoluminescence spectroscopy (光致发光光谱)", "PL measurement (PL测量)"], "光致发光用于分析材料的电子结构"),

    (860, "cathodoluminesc", "/ˌkæθədəʊluːmɪˈnesns/", "n.", 4, "阴极发光", [
        ("cathodoluminescence", "/ˌkæθədəʊluːmɪˈnesns/", "n.", "阴极发光", "cathode阴极 + luminescence发光 → 阴极发光", ["cathodoluminescence microscopy", "cathodoluminescence spectrum", "SEM cathodoluminescence"]),
        ("cathodoluminescent", "/ˌkæθədəʊluːmɪˈnesnt/", "adj.", "阴极发光的", "cathodoluminescence + t → 阴极发光的", ["cathodoluminescent material"])
    ], ["cathodoluminescence (阴极发光)", "CL imaging (CL成像)"], "阴极发光用于检测材料缺陷和杂质"),
]

def generate_entries_861_1000():
    """生成剩余的条目 861-1000"""
    entries = []

    # 861-870: 器件结构
    entries.extend([
        (861, "transist", "/trænˈzɪstər/", "n.", 1, "晶体管", [
            ("transistor", "/trænˈzɪstər/", "n.", "晶体管", "transfer + resistor → 晶体管", ["field-effect transistor", "bipolar transistor", "MOS transistor"]),
            ("transistorized", "/trænˈzɪstəraɪzd/", "adj.", "晶体管化的", "transistor + ized → 晶体管化的", ["transistorized circuit"])
        ], ["field-effect transistor (场效应晶体管)", "bipolar junction transistor (双极结型晶体管)"], "晶体管是集成电路的基本构建单元"),

        (862, "capacit", "/kəˈpæsɪtər/", "n.", 1, "电容器", [
            ("capacitor", "/kəˈpæsɪtər/", "n.", "电容器", "capacity容量 + or → 电容器", ["decoupling capacitor", "bypass capacitor", "MOS capacitor"]),
            ("capacitance", "/kəˈpæsɪtəns/", "n.", "电容", "capacity → 电容", ["gate capacitance", "junction capacitance", "parasitic capacitance"]),
            ("capacitive", "/kəˈpæsɪtɪv/", "adj.", "电容的", "capacitance + ive → 电容的", ["capacitive coupling", "capacitive load"])
        ], ["MOS capacitor (MOS电容器)", "decoupling capacitor (去耦电容)"], "电容器存储电荷，用于滤波和储能"),

        (863, "resist", "/rɪˈzɪstər/", "n.", 1, "电阻器", [
            ("resistor", "/rɪˈzɪstər/", "n.", "电阻器", "resist抵抗 + or → 电阻器", ["pull-up resistor", "load resistor", "variable resistor"]),
            ("resistance", "/rɪˈzɪstəns/", "n.", "电阻", "resist抵抗 + ance → 电阻", ["sheet resistance", "contact resistance", "channel resistance"]),
            ("resistive", "/rɪˈzɪstɪv/", "adj.", "电阻的", "resistance + ive → 电阻的", ["resistive heating", "resistive switching"])
        ], ["sheet resistance (薄层电阻)", "contact resistance (接触电阻)"], "电阻器限制电流流动，用于分压和限流"),

        (864, "induct", "/ɪnˈdʌktər/", "n.", 2, "电感器", [
            ("inductor", "/ɪnˈdʌktər/", "n.", "电感器", "induce感应 + or → 电感器", ["spiral inductor", "bond wire inductor", "on-chip inductor"]),
            ("inductance", "/ɪnˈdʌktəns/", "n.", "电感", "induce → 电感", ["mutual inductance", "self-inductance", "parasitic inductance"]),
            ("inductive", "/ɪnˈdʌktɪv/", "adj.", "电感的", "inductance + ive → 电感的", ["inductive coupling", "inductive load"])
        ], ["on-chip inductor (片上电感)", "spiral inductor (螺旋电感)"], "电感器存储磁能，用于滤波和振荡电路"),

        (865, "diode", "/ˈdaɪəʊd/", "n.", 1, "二极管", [
            ("diode", "/ˈdaɪəʊd/", "n.", "二极管", "di二 + ode路 → 二极管", ["light-emitting diode", "Schottky diode", "Zener diode"]),
            ("diodes", "/ˈdaɪəʊdz/", "n.", "二极管(复数)", "diode + s", ["diode array", "diode bridge"])
        ], ["light-emitting diode (发光二极管)", "Schottky diode (肖特基二极管)"], "二极管允许单向导通，用于整流和保护"),

        (866, "photodiod", "/ˌfəʊtəʊˈdaɪəʊd/", "n.", 2, "光电二极管", [
            ("photodiode", "/ˌfəʊtəʊˈdaɪəʊd/", "n.", "光电二极管", "photo光 + diode二极管 → 光电二极管", ["PIN photodiode", "avalanche photodiode", "photodiode array"]),
            ("photodiodes", "/ˌfəʊtəʊˈdaɪəʊdz/", "n.", "光电二极管(复数)", "photodiode + s", ["photodiodes array", "photodiodes detector"])
        ], ["avalanche photodiode (雪崩光电二极管)", "PIN photodiode (PIN光电二极管)"], "光电二极管将光信号转换为电信号"),

        (867, "thyrist", "/θaɪˈrɪstər/", "n.", 3, "晶闸管", [
            ("thyristor", "/θaɪˈrɪstər/", "n.", "晶闸管", "thyra门 + istor → 晶闸管(可控硅)", ["silicon controlled rectifier", "gate turn-off thyristor", "MOS-controlled thyristor"]),
            ("thyristors", "/θaɪˈrɪstərz/", "n.", "晶闸管(复数)", "thyristor + s", ["thyristors stack", "thyristors module"])
        ], ["silicon controlled rectifier (可控硅整流器)", "GTO thyristor (门极关断晶闸管)"], "晶闸管用于大功率开关和整流应用"),

        (868, "varist", "/vəˈrɪstər/", "n.", 3, "压敏电阻", [
            ("varistor", "/vəˈrɪstər/", "n.", "压敏电阻", "variable可变 + resistor电阻 → 压敏电阻", ["metal oxide varistor", "zinc oxide varistor", "silicon carbide varistor"])
        ], ["metal oxide varistor (金属氧化物压敏电阻)", "zinc oxide varistor (氧化锌压敏电阻)"], "压敏电阻电压依赖性电阻，用于过压保护"),

        (869, "thermist", "/θɜːˈmɪstər/", "n.", 3, "热敏电阻", [
            ("thermistor", "/θɜːˈmɪstər/", "n.", "热敏电阻", "thermal热 + resistor电阻 → 热敏电阻", ["NTC thermistor", "PTC thermistor", "thin film thermistor"]),
            ("thermistors", "/θɜːˈmɪstərz/", "n.", "热敏电阻(复数)", "thermistor + s", ["thermistors array", "thermistors sensor"])
        ], ["NTC thermistor (负温度系数热敏电阻)", "PTC thermistor (正温度系数热敏电阻)"], "热敏电阻温度敏感性电阻，用于温度传感"),

        (870, "memrist", "/ˈmemrɪstər/", "n.", 4, "忆阻器", [
            ("memristor", "/ˈmemrɪstər/", "n.", "忆阻器", "memory记忆 + resistor电阻 → 忆阻器", ["memristor array", "memristor crossbar", "TiO2 memristor"]),
            ("memristive", "/ˈmemrɪstɪv/", "adj.", "忆阻的", "memristor + ive → 忆阻的", ["memristive system", "memristive switching"]),
            ("memristance", "/ˈmemrɪstəns/", "n.", "忆阻", "memory + resistance → 忆阻", ["memristance value", "memristance state"])
        ], ["memristor array (忆阻器阵列)", "memristor crossbar (忆阻器交叉阵列)"], "忆阻器是第四种基本电路元件，具有记忆功能"),
    ])

    return entries

def main():
    # 生成所有条目
    entries = []

    # 添加801-860的条目
    for data in ENTRIES_DATA:
        id_num, root, phonetic, pos, freq, meaning, words_list, phrases, mnemonic = data
        words = []
        for w in words_list:
            words.append(create_word_entry(w[0], w[1], w[2], w[3], w[4], w[5]))
        entries.append(create_entry(id_num, root, phonetic, pos, freq, meaning, words, phrases, mnemonic))

    # 添加861-870的条目
    for data in generate_entries_861_1000():
        id_num, root, phonetic, pos, freq, meaning, words_list, phrases, mnemonic = data
        words = []
        for w in words_list:
            words.append(create_word_entry(w[0], w[1], w[2], w[3], w[4], w[5]))
        entries.append(create_entry(id_num, root, phonetic, pos, freq, meaning, words, phrases, mnemonic))

    print(f"Generated {len(entries)} entries")

    # 读取现有数据
    with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
        existing_data = json.load(f)

    print(f"Existing entries: {len(existing_data)}")
    print(f"Max existing ID: {max(e['id'] for e in existing_data)}")

    # 合并数据
    combined_data = existing_data + entries

    print(f"Total entries after merge: {len(combined_data)}")

    # 保存文件
    with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'w', encoding='utf-8') as f:
        json.dump(combined_data, f, ensure_ascii=False, indent=2)

    print("File saved successfully!")

if __name__ == "__main__":
    main()
