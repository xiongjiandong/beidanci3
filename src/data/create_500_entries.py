import json

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    existing_data = json.load(f)

print(f"现有条目数: {len(existing_data)}")

# 辅助函数：创建完整条目结构
def create_entry(entry_id, root, phonetic, pos, meaning, words):
    # 构建words数组
    words_list = []
    for word in words:
        word_entry = {
            "word": word,
            "phonetic": phonetic,
            "partOfSpeech": pos,
            "meaning": meaning,
            "memoryTip": f"词根{root}衍生词: {word}",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": [f"{root} technology", f"{root} process"],
            "wordPhrases": [f"{word} application", f"{word} technology"]
        }
        words_list.append(word_entry)

    # 构建phrases数组
    phrases = [f"{root} technology", f"{root} process"]

    return {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "frequency": entry_id,
        "category": "半导体",
        "words": words_list,
        "phrases": phrases
    }

# 所有300个新词根定义（id 201-500）
new_roots_definitions = [
    # 201-220: 基础物理与材料科学（高频）
    (201, "crystall", "/ˈkrɪstl/", "n.", "晶体", ["crystal", "crystalline", "crystallization", "crystallinity"]),
    (202, "lattic", "/ˈlætɪs/", "n.", "晶格", ["lattice", "lattice constant", "superlattice", "lattice mismatch"]),
    (203, "atom", "/ˈætəm/", "n.", "原子", ["atom", "atomic", "atomic layer", "atomic scale"]),
    (204, "molecul", "/ˈmɒlɪkjuːl/", "n.", "分子", ["molecule", "molecular", "molecular beam", "molecular layer"]),
    (205, "ion", "/ˈaɪən/", "n.", "离子", ["ion", "ionic", "ion implantation", "ion beam"]),
    (206, "electron", "/ɪˈlektrɒn/", "n.", "电子", ["electron", "electronic", "electron beam", "electron mobility"]),
    (207, "hole", "/həʊl/", "n.", "空穴", ["hole", "hole mobility", "hole concentration", "hole current"]),
    (208, "carrier", "/ˈkæriər/", "n.", "载流子", ["carrier", "carrier mobility", "carrier density", "carrier lifetime"]),
    (209, "band", "/bænd/", "n.", "能带", ["bandgap", "bandwidth", "conduction band", "valence band"]),
    (210, "gap", "/ɡæp/", "n.", "带隙", ["bandgap", "energy gap", "gap engineering", "wide bandgap"]),
    (211, "energ", "/ˈenədʒi/", "n.", "能量", ["energy", "energy band", "kinetic energy", "potential energy"]),
    (212, "valenc", "/ˈveɪləns/", "n.", "价带", ["valence", "valence band", "valence electron", "valence state"]),
    (213, "fermi", "/ˈfɜːmi/", "n.", "费米", ["Fermi", "Fermi level", "Fermi energy", "Fermi surface"]),
    (214, "quantum", "/ˈkwɒntəm/", "n.", "量子", ["quantum", "quantum dot", "quantum well", "quantum tunneling"]),
    (215, "tunnel", "/ˈtʌnl/", "v.", "隧穿", ["tunnel", "tunneling", "quantum tunneling", "tunnel diode"]),
    (216, "scatter", "/ˈskætər/", "v.", "散射", ["scatter", "scattering", "phonon scattering", "impurity scattering"]),
    (217, "phonon", "/ˈfəʊnɒn/", "n.", "声子", ["phonon", "phonon scattering", "optical phonon", "acoustic phonon"]),
    (218, "exciton", "/ˈeksɪtɒn/", "n.", "激子", ["exciton", "exciton binding", "excitonic", "exciton energy"]),
    (219, "polaron", "/ˈpəʊlərɒn/", "n.", "极化子", ["polaron", "polaron effect", "large polaron", "small polaron"]),
    (220, "plasmon", "/ˈplæzmɒn/", "n.", "等离激元", ["plasmon", "plasmonic", "surface plasmon", "plasmon resonance"]),

    # 221-250: 电学特性
    (221, "excit", "/ɪkˈsaɪt/", "v.", "激发", ["excite", "excitation", "excited state", "excitation energy"]),
    (222, "recombin", "/ˌriːkəmˈbaɪn/", "v.", "复合", ["recombine", "recombination", "recombination center", "recombination rate"]),
    (223, "generat", "/ˈdʒenəreɪt/", "v.", "产生", ["generate", "generation", "carrier generation", "generation rate"]),
    (224, "trapp", "/træp/", "v.", "俘获", ["trap", "trapping", "charge trap", "trap level"]),
    (225, "leakag", "/ˈliːkɪdʒ/", "n.", "漏电流", ["leakage", "leakage current", "gate leakage", "subthreshold leakage"]),
    (226, "invers", "/ɪnˈvɜːs/", "v.", "反型", ["inversion", "inverse", "inversion layer", "strong inversion"]),
    (227, "accumul", "/əˈkjuːmjuleɪt/", "v.", "积累", ["accumulate", "accumulation", "accumulation mode", "charge accumulation"]),
    (228, "deplet", "/dɪˈpliːt/", "v.", "耗尽", ["deplete", "depletion", "depletion region", "depletion width"]),
    (229, "intrins", "/ɪnˈtrɪnsɪk/", "adj.", "本征", ["intrinsic", "intrinsic carrier", "intrinsic silicon", "intrinsic region"]),
    (230, "extrins", "/ɪkˈstrɪnsɪk/", "adj.", "非本征", ["extrinsic", "extrinsic semiconductor", "extrinsic region", "extrinsic doping"]),
    (231, "mobil", "/məʊˈbɪl/", "adj.", "迁移率", ["mobility", "electron mobility", "hole mobility", "carrier mobility"]),
    (232, "satur", "/ˈsætʃəreɪt/", "v.", "饱和", ["saturate", "saturation", "saturation velocity", "saturation current"]),
    (233, "drift", "/drɪft/", "n.", "漂移", ["drift", "drift velocity", "drift current", "drift region"]),
    (234, "conduct", "/kənˈdʌkt/", "v.", "电导", ["conduct", "conduction", "conductivity", "conductance"]),
    (235, "resist", "/rɪˈzɪst/", "v.", "电阻", ["resist", "resistance", "resistivity", "resistor"]),
    (236, "capacit", "/kəˈpæsɪt/", "n.", "电容", ["capacitor", "capacitance", "parasitic capacitance", "gate capacitance"]),
    (237, "induct", "/ɪnˈdʌkt/", "v.", "电感", ["induct", "inductance", "mutual inductance", "self inductance"]),
    (238, "imped", "/ɪmˈpiːd/", "v.", "阻抗", ["impedance", "impedance matching", "input impedance", "output impedance"]),
    (239, "admitt", "/ədˈmɪt/", "v.", "导纳", ["admittance", "input admittance", "mutual admittance", "transfer admittance"]),
    (240, "react", "/riˈækt/", "v.", "电抗", ["reactance", "capacitive reactance", "inductive reactance", "negative reactance"]),
    (241, "bias", "/ˈbaɪəs/", "n.", "偏置", ["bias", "biased", "forward bias", "reverse bias"]),
    (242, "potenti", "/pəˈtenʃl/", "n.", "电位", ["potential", "potential barrier", "potential well", "electric potential"]),
    (243, "field", "/fiːld/", "n.", "电场", ["field", "electric field", "magnetic field", "field oxide"]),
    (244, "barrier", "/ˈbæriər/", "n.", "势垒", ["barrier", "potential barrier", "Schottky barrier", "barrier height"]),
    (245, "workfunct", "/wɜːrk ˈfʌŋkʃn/", "n.", "功函数", ["workfunction", "work function", "effective workfunction", "metal workfunction"]),
    (246, "affinit", "/əˈfɪnəti/", "n.", "亲和能", ["affinity", "electron affinity", "affinity level", "negative affinity"]),
    (247, "permitt", "/pərˈmɪt/", "v.", "介电常数", ["permittivity", "relative permittivity", "dielectric permittivity"]),
    (248, "permeab", "/ˌpɜːrmiəˈbɪləti/", "n.", "磁导率", ["permeability", "magnetic permeability", "vacuum permeability"]),
    (249, "polariz", "/ˈpəʊləraɪz/", "v.", "极化", ["polarize", "polarization", "dielectric polarization", "spontaneous polarization"]),
    (250, "magnet", "/ˈmæɡnɪt/", "n.", "磁性", ["magnet", "magnetic", "magnetization", "diamagnetic"]),
]

print(f"新词根定义数量（第1批）: {len(new_roots_definitions)}")

# 继续添加更多词根
new_roots_definitions_part2 = [
    # 251-280: 工艺技术
    (251, "sputter", "/ˈspʌtər/", "v.", "溅射", ["sputter", "sputtering", "sputter deposition", "magnetron sputtering"]),
    (252, "evapor", "/ɪˈvæpəreɪt/", "v.", "蒸发", ["evaporate", "evaporation", "evaporation rate", "electron beam evaporation"]),
    (253, "sublim", "/ˈsʌblɪmeɪt/", "v.", "升华", ["sublimate", "sublimation", "sublimation pump", "molecular beam epitaxy"]),
    (254, "adsorb", "/ədˈzɔːrb/", "v.", "吸附", ["adsorb", "adsorption", "physical adsorption", "chemical adsorption"]),
    (255, "desorb", "/dɪˈzɔːrb/", "v.", "脱附", ["desorb", "desorption", "thermal desorption", "laser desorption"]),
    (256, "absorb", "/əbˈzɔːrb/", "v.", "吸收", ["absorb", "absorption", "absorption coefficient", "light absorption"]),
    (257, "reflect", "/rɪˈflekt/", "v.", "反射", ["reflect", "reflection", "reflectivity", "reflectance"]),
    (258, "refract", "/rɪˈfrækt/", "v.", "折射", ["refract", "refraction", "refractive index", "refractive"]),
    (259, "diffract", "/dɪˈfrækt/", "v.", "衍射", ["diffract", "diffraction", "X-ray diffraction", "electron diffraction"]),
    (260, "interfer", "/ˌɪntərˈfɪər/", "v.", "干涉", ["interfere", "interference", "interferometer", "interference pattern"]),
    (261, "spin", "/spɪn/", "v.", "旋转", ["spin", "spin coating", "spin-on", "spin speed"]),
    (262, "coat", "/kəʊt/", "v.", "涂覆", ["coat", "coating", "spin coating", "dip coating"]),
    (263, "bake", "/beɪk/", "v.", "烘烤", ["bake", "baking", "soft bake", "hard bake"]),
    (264, "cure", "/kjʊər/", "v.", "固化", ["cure", "curing", "UV cure", "thermal cure"]),
    (265, "harden", "/ˈhɑːrdn/", "v.", "硬化", ["harden", "hardening", "radiation hardening", "process hardening"]),
    (266, "soften", "/ˈsɔːfn/", "v.", "软化", ["soften", "softening", "thermal softening", "anneal softening"]),
    (267, "planariz", "/ˈplænəraɪz/", "v.", "平坦化", ["planarize", "planarization", "global planarization", "local planarization"]),
    (268, "polish", "/ˈpɒlɪʃ/", "v.", "抛光", ["polish", "polishing", "chemical polishing", "mechanical polishing"]),
    (269, "grind", "/ɡraɪnd/", "v.", "研磨", ["grind", "grinding", "back grinding", "wafer grinding"]),
    (270, "dice", "/daɪs/", "v.", "切割", ["dice", "dicing", "wafer dicing", "laser dicing"]),
    (271, "saw", "/sɔː/", "v.", "锯切", ["saw", "sawing", "dicing saw", "blade saw"]),
    (272, "scribe", "/skraɪb/", "v.", "划线", ["scribe", "scribing", "scribe line", "laser scribe"]),
    (273, "cleav", "/kliːv/", "v.", "解理", ["cleave", "cleavage", "cleavage plane", "wafer cleaving"]),
    (274, "singulat", "/ˈsɪŋɡjuleɪt/", "v.", "分选", ["singulate", "singulation", "die singulation", "wafer singulation"]),
    (275, "pick", "/pɪk/", "v.", "拾取", ["pick", "picking", "pick and place", "die pick"]),
    (276, "place", "/pleɪs/", "v.", "放置", ["place", "placement", "pick and place", "die placement"]),
    (277, "attach", "/əˈtætʃ/", "v.", "贴装", ["attach", "attachment", "die attach", "wafer attach"]),
    (278, "cure", "/kjʊər/", "v.", "固化", ["cure", "curing", "thermal cure", "UV cure"]),
    (279, "strip", "/strɪp/", "v.", "剥离", ["strip", "stripping", "photoresist strip", "ashing strip"]),
    (280, "ash", "/æʃ/", "v.", "灰化", ["ash", "ashing", "plasma ash", "photoresist ash"]),

    # 281-310: 测量与表征
    (281, "metrolog", "/məˈtrɒlədʒi/", "n.", "计量学", ["metrology", "semiconductor metrology", "optical metrology"]),
    (282, "ellipsometr", "/ɪˈlɪpsɒmɪtri/", "n.", "椭偏测量", ["ellipsometry", "spectroscopic ellipsometry", "in-situ ellipsometry"]),
    (283, "profilometr", "/prəˈfɪlɒmɪtri/", "n.", "轮廓测量", ["profilometry", "optical profilometry", "stylus profilometry"]),
    (284, "scatterometr", "/ˌskætəˈrɒmɪtri/", "n.", "散射测量", ["scatterometry", "optical scatterometry", "X-ray scatterometry"]),
    (285, "reflectometr", "/ˌriːflekˈtɒmɪtri/", "n.", "反射测量", ["reflectometry", "optical reflectometry", "thin film reflectometry"]),
    (286, "interferometr", "/ˌɪntərˈfɪrɒmɪtri/", "n.", "干涉测量", ["interferometry", "white light interferometry", "laser interferometry"]),
    (287, "microscop", "/ˈmaɪkrəskəʊp/", "n.", "显微镜", ["microscope", "microscopy", "electron microscope", "optical microscope"]),
    (288, "spectroscop", "/ˈspektrəskəʊp/", "n.", "光谱仪", ["spectroscope", "spectroscopy", "mass spectroscopy", "Raman spectroscopy"]),
    (289, "chromatograph", "/ˌkrəʊməˈtɒɡrəf/", "n.", "色谱仪", ["chromatograph", "chromatography", "gas chromatography", "liquid chromatography"]),
    (290, "Auger", "/əʊˈʒeɪ/", "n.", "俄歇", ["Auger", "Auger electron", "Auger spectroscopy", "Auger analysis"]),
    (291, "XPS", "/eks piː es/", "n.", "X射线光电子能谱", ["XPS", "X-ray photoelectron", "photoelectron spectroscopy"]),
    (292, "SIMS", "/sɪmz/", "n.", "二次离子质谱", ["SIMS", "dynamic SIMS", "static SIMS", "TOF-SIMS"]),
    (293, "RBS", "/ɑːr biː es/", "n.", "卢瑟福背散射", ["RBS", "Rutherford backscattering", "ion channeling"]),
    (294, "TEM", "/tiː iː em/", "n.", "透射电镜", ["TEM", "transmission electron", "TEM imaging", "HR-TEM"]),
    (295, "SEM", "/es iː em/", "n.", "扫描电镜", ["SEM", "scanning electron", "SEM microscopy", "SEM imaging"]),
    (296, "AFM", "/eɪ ef em/", "n.", "原子力显微镜", ["AFM", "atomic force", "AFM probe", "AFM imaging"]),
    (297, "STM", "/es tiː em/", "n.", "扫描隧道显微镜", ["STM", "scanning tunneling", "STM tip", "STM imaging"]),
    (298, "SPM", "/es piː em/", "n.", "扫描探针显微镜", ["SPM", "scanning probe", "SPM techniques"]),
    (299, "KPM", "/keɪ piː em/", "n.", "开尔文探针显微镜", ["KPM", "Kelvin probe", "KPM measurement"]),
    (300, "EDS", "/iː diː es/", "n.", "能谱分析", ["EDS", "energy dispersive", "EDS analysis", "EDS mapping"]),
]

print(f"新词根定义数量（第2批）: {len(new_roots_definitions_part2)}")

# 合并所有新词根
all_new_definitions = new_roots_definitions + new_roots_definitions_part2
print(f"总新词根定义数量: {len(all_new_definitions)}")
