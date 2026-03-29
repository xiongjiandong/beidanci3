import json

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    existing_data = json.load(f)

print(f"现有条目数: {len(existing_data)}")

# 修复现有数据的ID (1-200)
fixed_existing = []
for i, item in enumerate(existing_data[:200], 1):
    item['id'] = i
    item['frequency'] = i
    item['category'] = '半导体'
    fixed_existing.append(item)

print(f"修复后现有条目数: {len(fixed_existing)}")

# 辅助函数：创建完整条目结构
def create_entry(entry_id, root, phonetic, pos, meaning, words):
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

# 定义300个新词根（201-500）- 按半导体行业使用频率排序
new_definitions = [
    # 201-250: 基础物理与电学（高频）
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

    # 251-300: 工艺技术
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
    (278, "strip", "/strɪp/", "v.", "剥离", ["strip", "stripping", "photoresist strip", "ashing strip"]),
    (279, "ash", "/æʃ/", "v.", "灰化", ["ash", "ashing", "plasma ash", "photoresist ash"]),
    (280, "descum", "/diːˈskʌm/", "v.", "去渣", ["descum", "descumming", "plasma descum", "O2 descum"]),
    (281, "seed", "/siːd/", "n.", "种子层", ["seed", "seed layer", "copper seed", "barrier seed"]),
    (282, "plating", "/ˈpleɪtɪŋ/", "n.", "电镀", ["plating", "electroplating", "electroless plating", "copper plating"]),
    (283, "fill", "/fɪl/", "v.", "填充", ["fill", "filling", "gap fill", "trench fill"]),
    (284, "gapfill", "/ɡæp fɪl/", "n.", "间隙填充", ["gapfill", "gap filling", "high aspect ratio"]),
    (285, "conform", "/kənˈfɔːrm/", "v.", "共形", ["conform", "conformal", "conformal coating", "conformal deposition"]),
    (286, "collimat", "/ˈkɒlɪmeɪt/", "v.", "准直", ["collimate", "collimation", "collimated beam", "long throw"]),
    (287, "replenis", "/rɪˈplenɪʃ/", "v.", "补充", ["replenish", "replenishment", "chemical replenish"]),
    (288, "agitat", "/ˈædʒɪteɪt/", "v.", "搅拌", ["agitate", "agitation", "megasonic agitation"]),
    (289, "rinse", "/rɪns/", "v.", "冲洗", ["rinse", "rinsing", "DI water rinse", "spin rinse"]),
    (290, "dry", "/draɪ/", "v.", "干燥", ["dry", "drying", "spin dry", "IPA dry"]),
    (291, "purge", "/pɜːrdʒ/", "v.", "吹扫", ["purge", "purging", "N2 purge", "purge gas"]),
    (292, "vent", "/vent/", "v.", "排气", ["vent", "venting", "slow vent", "fast vent"]),
    (293, "pumpdown", "/ˈpʌmp daʊn/", "n.", "抽真空", ["pumpdown", "pump down", "rough pump"]),
    (294, "venting", "/ˈventɪŋ/", "n.", "通气", ["venting", "slow venting", "venting process"]),
    (295, "outgas", "/ˈaʊtɡæs/", "v.", "除气", ["outgas", "outgassing", "vacuum outgas"]),
    (296, "dehydrat", "/diːhaɪˈdreɪt/", "v.", "脱水", ["dehydrate", "dehydration", "bake dehydration"]),
    (297, "prim", "/praɪm/", "v.", "打底", ["prime", "priming", "HMDS prime", "adhesion prime"]),
    (298, "promot", "/prəˈməʊt/", "v.", "促进", ["promote", "promoter", "adhesion promoter"]),
    (299, "adhes", "/ədˈhiːs/", "n.", "粘附", ["adhesion", "adhesive", "adhesion layer", "adhesion test"]),
    (300, "primer", "/ˈpraɪmər/", "n.", "底漆", ["primer", "HMDS primer", "adhesion primer"]),
]

print(f"第1批新词根定义数量: {len(new_definitions)}")

# 添加更多定义 (301-400)
new_definitions_part2 = [
    # 301-350: 测量与表征设备
    (301, "metrolog", "/məˈtrɒlədʒi/", "n.", "计量学", ["metrology", "semiconductor metrology", "optical metrology"]),
    (302, "ellipsometr", "/ɪˈlɪpsɒmɪtri/", "n.", "椭偏测量", ["ellipsometry", "spectroscopic ellipsometry", "in-situ ellipsometry"]),
    (303, "profilometr", "/prəˈfɪlɒmɪtri/", "n.", "轮廓测量", ["profilometry", "optical profilometry", "stylus profilometry"]),
    (304, "scatterometr", "/ˌskætəˈrɒmɪtri/", "n.", "散射测量", ["scatterometry", "optical scatterometry", "X-ray scatterometry"]),
    (305, "reflectometr", "/ˌriːflekˈtɒmɪtri/", "n.", "反射测量", ["reflectometry", "optical reflectometry", "thin film reflectometry"]),
    (306, "interferometr", "/ˌɪntərˈfɪrɒmɪtri/", "n.", "干涉测量", ["interferometry", "white light interferometry", "laser interferometry"]),
    (307, "microscop", "/ˈmaɪkrəskəʊp/", "n.", "显微镜", ["microscope", "microscopy", "electron microscope", "optical microscope"]),
    (308, "spectroscop", "/ˈspektrəskəʊp/", "n.", "光谱仪", ["spectroscope", "spectroscopy", "mass spectroscopy", "Raman spectroscopy"]),
    (309, "chromatograph", "/ˌkrəʊməˈtɒɡrəf/", "n.", "色谱仪", ["chromatograph", "chromatography", "gas chromatography", "liquid chromatography"]),
    (310, "Auger", "/əʊˈʒeɪ/", "n.", "俄歇", ["Auger", "Auger electron", "Auger spectroscopy", "Auger analysis"]),
    (311, "XPS", "/eks piː es/", "n.", "X射线光电子能谱", ["XPS", "X-ray photoelectron", "photoelectron spectroscopy"]),
    (312, "SIMS", "/sɪmz/", "n.", "二次离子质谱", ["SIMS", "dynamic SIMS", "static SIMS", "TOF-SIMS"]),
    (313, "RBS", "/ɑːr biː es/", "n.", "卢瑟福背散射", ["RBS", "Rutherford backscattering", "ion channeling"]),
    (314, "TEM", "/tiː iː em/", "n.", "透射电镜", ["TEM", "transmission electron", "TEM imaging", "HR-TEM"]),
    (315, "SEM", "/es iː em/", "n.", "扫描电镜", ["SEM", "scanning electron", "SEM microscopy", "SEM imaging"]),
    (316, "AFM", "/eɪ ef em/", "n.", "原子力显微镜", ["AFM", "atomic force", "AFM probe", "AFM imaging"]),
    (317, "STM", "/es tiː em/", "n.", "扫描隧道显微镜", ["STM", "scanning tunneling", "STM tip", "STM imaging"]),
    (318, "SPM", "/es piː em/", "n.", "扫描探针显微镜", ["SPM", "scanning probe", "SPM techniques"]),
    (319, "KPM", "/keɪ piː em/", "n.", "开尔文探针显微镜", ["KPM", "Kelvin probe", "KPM measurement"]),
    (320, "EDS", "/iː diː es/", "n.", "能谱分析", ["EDS", "energy dispersive", "EDS analysis", "EDS mapping"]),
    (321, "XRD", "/eks ɑːr diː/", "n.", "X射线衍射", ["XRD", "X-ray diffraction", "XRD analysis"]),
    (322, "FTIR", "/ef tiː aɪ ɑːr/", "n.", "傅里叶红外光谱", ["FTIR", "Fourier transform", "infrared spectroscopy"]),
    (323, "Raman", "/ˈrɑːmən/", "n.", "拉曼光谱", ["Raman", "Raman spectroscopy", "Raman shift"]),
    (324, "PL", "/piː el/", "n.", "光致发光", ["PL", "photoluminescence", "PL spectroscopy"]),
    (325, "CL", "/siː el/", "n.", "阴极发光", ["CL", "cathodoluminescence", "CL imaging"]),
    (326, "DLTS", "/diː el tiː es/", "n.", "深能级瞬态谱", ["DLTS", "deep level", "transient spectroscopy"]),
    (327, "CV", "/siː viː/", "n.", "电容电压", ["CV", "capacitance voltage", "CV measurement"]),
    (328, "IV", "/aɪ viː/", "n.", "电流电压", ["IV", "current voltage", "IV curve", "IV characteristic"]),
    (329, "Hall", "/hɔːl/", "n.", "霍尔效应", ["Hall", "Hall effect", "Hall measurement", "Hall mobility"]),
    (330, "SRP", "/es ɑːr piː/", "n.", "扩展电阻探针", ["SRP", "spreading resistance", "SRP profiling"]),
    (331, "SSRM", "/es es ɑːr em/", "n.", "扫描扩展电阻显微镜", ["SSRM", "scanning spreading", "resistance microscopy"]),
    (332, "SCM", "/es siː em/", "n.", "扫描电容显微镜", ["SCM", "scanning capacitance", "microscopy"]),
    (333, "KLA", "/keɪ el eɪ/", "n.", "KLA检测", ["KLA", "KLA inspection", "KLA tool"]),
    (334, "AMAT", "/eɪ em eɪ tiː/", "n.", "应用材料", ["AMAT", "Applied Materials", "AMAT equipment"]),
    (335, "ASML", "/eɪ es em el/", "n.", "阿斯麦", ["ASML", "ASML lithography", "ASML scanner"]),
    (336, "TEL", "/tiː iː el/", "n.", "东京电子", ["TEL", "Tokyo Electron", "TEL equipment"]),
    (337, "LAM", "/læm/", "n.", "泛林", ["LAM", "Lam Research", "LAM etcher"]),
    (338, "KLA-Tencor", "/keɪ el eɪ tenkɔːr/", "n.", "KLA-Tencor", ["KLA-Tencor", "KLA inspection"]),
    (339, "Hitachi", "/hɪˈtætʃi/", "n.", "日立", ["Hitachi", "Hitachi SEM", "Hitachi tool"]),
    (340, "JEOL", "/dʒiː iː əʊ el/", "n.", "日本电子", ["JEOL", "JEOL microscope", "JEOL TEM"]),
    (341, "Nova", "/ˈnəʊvə/", "n.", "Nova测量", ["Nova", "Nova measuring", "Nova tool"]),
    (342, "Nanometrics", "/ˌnænəʊˈmetrɪks/", "n.", "纳米测量", ["Nanometrics", "thin film measurement"]),
    (343, "Rudolph", "/ˈruːdɒlf/", "n.", "鲁道夫", ["Rudolph", "Rudolph metrology", "film thickness"]),
    (344, "Thermawave", "/ˈθɜːməweɪv/", "n.", "热波", ["Thermawave", "optical measurement", "film metrology"]),
    (345, "Acoustic", "/əˈkuːstɪk/", "adj.", "声学", ["acoustic", "acoustic measurement", "acoustic microscopy"]),
    (346, "Ultrason", "/ˈʌltrəsɒn/", "n.", "超声", ["ultrasonic", "ultrasonic microscopy", "ultrasonic inspection"]),
    (347, "XRF", "/eks ɑːr ef/", "n.", "X射线荧光", ["XRF", "X-ray fluorescence", "XRF analysis"]),
    (348, "TXRF", "/tiː eks ɑːr ef/", "n.", "全反射X射线荧光", ["TXRF", "total reflection", "surface contamination"]),
    (349, "ICPMS", "/aɪ siː piː em es/", "n.", "电感耦合等离子体质谱", ["ICP-MS", "ICPMS", "trace analysis"]),
    (350, "GCMS", "/dʒiː siː em es/", "n.", "气相色谱质谱", ["GC-MS", "GCMS", "gas analysis"]),

    # 351-400: 封装与测试
    (351, "mold", "/məʊld/", "v.", "塑封", ["mold", "molding", "mold compound", "transfer molding"]),
    (352, "encapsul", "/ɪnˈkæpsjuleɪt/", "v.", "封装", ["encapsulate", "encapsulation", "mold encapsulation"]),
    "underfill", "/ˈʌndəfɪl/", "n.", "底部填充", ["underfill", "underfilling", "capillary underfill"]),
    (354, "flipchip", "/flɪp tʃɪp/", "n.", "倒装芯片", ["flip chip", "flip-chip", "C4 bump"]),
    (355, "bump", "/bʌmp/", "n.", "凸点", ["bump", "solder bump", "copper bump", "gold bump"]),
    (356, "ball", "/bɔːl/", "n.", "焊球", ["ball", "solder ball", "ball grid", "BGA ball"]),
    (357, "wire", "/waɪər/", "n.", "引线", ["wire", "wire bond", "bonding wire", "gold wire"]),
    (358, "ribbon", "/ˈrɪbən/", "n.", "带状线", ["ribbon", "copper ribbon", "aluminum ribbon"]),
    (359, "clip", "/klɪp/", "n.", "夹片", ["clip", "copper clip", "clip bond"]),
    (360, "lead", "/liːd/", "n.", "引脚", ["lead", "lead frame", "lead count", "lead pitch"]),
    (361, "frame", "/freɪm/", "n.", "框架", ["frame", "lead frame", "substrate frame"]),
    (362, "substrate", "/ˈsʌbstreɪt/", "n.", "基板", ["substrate", "package substrate", "laminate substrate"]),
    (363, "laminate", "/ˈlæmɪneɪt/", "n.", "层压板", ["laminate", "lamination", "build-up laminate"]),
    (364, "buildup", "/bɪld ʌp/", "n.", "积层", ["buildup", "build-up", "build-up layer"]),
    (365, "core", "/kɔːr/", "n.", "芯板", ["core", "core layer", "core substrate"]),
    (366, "prepreg", "/ˈpriːpreɡ/", "n.", "预浸料", ["prepreg", "resin prepreg", "glass prepreg"]),
    (367, "solder", "/ˈsəʊldər/", "n.", "焊料", ["solder", "solder paste", "solder ball", "solder joint"]),
    (368, "flux", "/flʌks/", "n.", "助焊剂", ["flux", "solder flux", "no-clean flux"]),
    (369, "paste", "/peɪst/", "n.", "焊膏", ["paste", "solder paste", "conductive paste"]),
    (370, "reflow", "/ˈriːfləʊ/", "n.", "回流焊", ["reflow", "reflow oven", "reflow profile"]),
    (371, "wave", "/weɪv/", "n.", "波峰焊", ["wave", "wave soldering", "wave solder"]),
    (372, "paste", "/peɪst/", "n.", "焊膏", ["paste", "printing paste", "stencil printing"]),
    (373, "stencil", "/ˈstensl/", "n.", "钢网", ["stencil", "stencil printing", "stencil aperture"]),
    (374, "apertur", "/ˈæpərtʃər/", "n.", "开口", ["aperture", "stencil aperture", "aperture ratio"]),
    (375, "squeege", "/ˈskwiːdʒi/", "n.", "刮刀", ["squeegee", "squeegee blade", "squeegee pressure"]),
    (376, "inspection", "/ɪnˈspekʃn/", "n.", "检测", ["inspection", "visual inspection", "AOI inspection"]),
    (377, "AOI", "/eɪ əʊ aɪ/", "n.", "自动光学检测", ["AOI", "automatic optical", "AOI inspection"]),
    (378, "AXI", "/eɪ eks aɪ/", "n.", "自动X射线检测", ["AXI", "automated X-ray", "X-ray inspection"]),
    (379, "ICT", "/aɪ siː tiː/", "n.", "在线测试", ["ICT", "in-circuit test", "ICT fixture"]),
    (380, "FCT", "/ef siː tiː/", "n.", "功能测试", ["FCT", "functional test", "FCT testing"]),
    (381, "burnin", "/bɜːrn ɪn/", "n.", "老化", ["burn-in", "burnin", "high temperature burn-in"]),
    (382, "HAST", "/heɪst/", "n.", "高加速应力测试", ["HAST", "highly accelerated", "stress test"]),
    (383, "TCT", "/tiː siː tiː/", "n.", "温度循环测试", ["TCT", "temperature cycle", "thermal cycling"]),
    (384, "PCT", "/piː siː tiː/", "n.", "压力 cooker测试", ["PCT", "pressure cooker", "autoclave test"]),
    (385, "TST", "/tiː es tiː/", "n.", "热冲击测试", ["TST", "thermal shock", "shock test"]),
    (386, "Vibration", "/vaɪˈbreɪʃn/", "n.", "振动", ["vibration", "vibration test", "random vibration"]),
    (387, "drop", "/drɒp/", "v.", "跌落", ["drop", "drop test", "drop shock"]),
    (388, "shear", "/ʃɪər/", "n.", "剪切", ["shear", "shear test", "ball shear", "die shear"]),
    (389, "pull", "/pʊl/", "v.", "拉拔", ["pull", "pull test", "wire pull", "bond pull"]),
    (390, "push", "/pʊʃ/", "v.", "推压", ["push", "push test", "column push"]),
    (391, "creep", "/kriːp/", "n.", "蠕变", ["creep", "creep test", "thermal creep"]),
    (392, "fatigue", "/fəˈtiːɡ/", "n.", "疲劳", ["fatigue", "fatigue test", "thermal fatigue"]),
    (393, "fracture", "/ˈfræktʃər/", "n.", "断裂", ["fracture", "fracture test", "fracture toughness"]),
    (394, "delamin", "/diːˈlæmɪneɪt/", "v.", "分层", ["delaminate", "delamination", "interface delamination"]),
    (395, "crack", "/kræk/", "n.", "裂纹", ["crack", "cracking", "crack propagation"]),
    (396, "void", "/vɔɪd/", "n.", "空洞", ["void", "voiding", "solder void", "Kirkendall void"]),
    (397, " Kirkendall", "/ˈkɜːrkəndɔːl/", "n.", "柯肯达尔", ["Kirkendall", "Kirkendall void", "Kirkendall effect"]),
    (398, "intermetallic", "/ˌɪntərmeˈtælɪk/", "n.", "金属间化合物", ["intermetallic", "IMC", "Cu-Sn IMC"]),
    (399, "IMC", "/aɪ em siː/", "n.", "金属间化合物", ["IMC", "intermetallic compound", "IMC growth"]),
    (400, "whisker", "/ˈwɪskər/", "n.", "晶须", ["whisker", "tin whisker", "whisker growth"]),
]

print(f"第2批新词根定义数量: {len(new_definitions_part2)}")
new_definitions.extend(new_definitions_part2)

# 添加最后一批定义 (401-500)
new_definitions_part3 = [
    # 401-450: 先进封装技术
    (401, "TSV", "/tiː es viː/", "n.", "硅通孔", ["TSV", "through silicon via", "TSV process"]),
    (402, "TGV", "/tiː dʒiː viː/", "n.", "玻璃通孔", ["TGV", "through glass via", "glass TSV"]),
    (403, "RDL", "/ɑːr diː el/", "n.", "重布线层", ["RDL", "redistribution layer", "RDL process"]),
    (404, "ubump", "/juː bʌmp/", "n.", "微凸点", ["ubump", "micro bump", "copper pillar"]),
    (405, "pillar", "/ˈpɪlər/", "n.", "铜柱", ["pillar", "copper pillar", "solder cap"]),
    (406, "microbump", "/ˈmaɪkrəʊbʌmp/", "n.", "微凸点", ["microbump", "micro bump", "fine pitch bump"]),
    (407, "hybrid", "/ˈhaɪbrɪd/", "adj.", "混合", ["hybrid", "hybrid bonding", "hybrid integration"]),
    (408, "bonding", "/ˈbɒndɪŋ/", "n.", "键合", ["bonding", "die bonding", "wafer bonding", "hybrid bonding"]),
    (409, "fusion", "/ˈfjuːʒən/", "n.", "融合", ["fusion", "fusion bonding", "direct fusion"]),
    (410, "anodic", "/əˈnɒdɪk/", "adj.", "阳极", ["anodic", "anodic bonding", "anodic oxide"]),
    (411, "eutectic", "/juːˈtektɪk/", "n.", "共晶", ["eutectic", "eutectic bonding", "Au-Sn eutectic"]),
    (412, "transient", "/ˈtrænziənt/", "adj.", "瞬态", ["transient", "transient liquid", "TLP bonding"]),
    (413, "TLP", "/tiː el piː/", "n.", "瞬态液相键合", ["TLP", "transient liquid phase", "TLP bonding"]),
    (414, "thermocompress", "/ˌθɜːməʊkəmˈpres/", "v.", "热压", ["thermocompression", "thermocompression bonding", "TC bonding"]),
    (415, "ultrasonic", "/ˌʌltrəˈsɒnɪk/", "adj.", "超声", ["ultrasonic", "ultrasonic bonding", "US bonding"]),
    (416, "wedge", "/wedʒ/", "n.", "楔形键合", ["wedge", "wedge bonding", "wedge tool"]),
    (417, "ballbond", "/bɔːl bɒnd/", "n.", "球焊", ["ball bond", "ball bonding", "ball bonder"]),
    (418, "stitch", "/stɪtʃ/", "n.", "针脚", ["stitch", "stitch bond", "stitch bonding"]),
    (419, "loop", "/luːp/", "n.", "线弧", ["loop", "loop height", "loop shape"]),
    (420, "sweep", "/swiːp/", "v.", "扫掠", ["sweep", "sweep test", "wire sweep"]),
    (421, "sag", "/sæɡ/", "v.", "下垂", ["sag", "sagging", "wire sag"]),
    (422, "FOWLP", "/ef əʊ dʌbəljuː el piː/", "n.", "扇出晶圆级封装", ["FOWLP", "fan-out WLP", "fan-out"]),
    (423, "FOPLP", "/ef əʊ piː el piː/", "n.", "扇出面板级封装", ["FOPLP", "fan-out PLP", "panel level"]),
    (424, "WLP", "/dʌbəljuː el piː/", "n.", "晶圆级封装", ["WLP", "wafer level package", "WLP process"]),
    (425, "CSP", "/siː es piː/", "n.", "芯片级封装", ["CSP", "chip scale package", "CSP package"]),
    (426, "BGA", "/biː dʒiː eɪ/", "n.", "球栅阵列", ["BGA", "ball grid array", "BGA package"]),
    (427, "QFN", "/kjuː ef en/", "n.", "方形扁平无引脚", ["QFN", "quad flat no-lead", "QFN package"]),
    (428, "QFP", "/kjuː ef piː/", "n.", "方形扁平封装", ["QFP", "quad flat package", "LQFP"]),
    (429, "SOP", "/es əʊ piː/", "n.", "小外形封装", ["SOP", "small outline package", "SOP package"]),
    (430, "SIP", "/es aɪ piː/", "n.", "系统级封装", ["SiP", "system in package", "SIP module"]),
    (431, "POP", "/piː əʊ piː/", "n.", "堆叠封装", ["PoP", "package on package", "POP stack"]),
    (432, "MCP", "/em siː piː/", "n.", "多芯片封装", ["MCP", "multi-chip package", "MCP stack"]),
    (433, "COB", "/siː əʊ biː/", "n.", "板上芯片", ["COB", "chip on board", "COB assembly"]),
    (434, "COF", "/siː əʊ ef/", "n.", "薄膜上芯片", ["COF", "chip on film", "COF package"]),
    (435, "COG", "/siː əʊ dʒiː/", "n.", "玻璃上芯片", ["COG", "chip on glass", "COG assembly"]),
    (436, "DCA", "/diː siː eɪ/", "n.", "直接芯片贴装", ["DCA", "direct chip attach", "DCA assembly"]),
    (437, "FCBGA", "/ef siː biː dʒiː eɪ/", "n.", "倒装芯片BGA", ["FCBGA", "flip chip BGA", "FCBGA package"]),
    (438, "WLCSP", "/dʌbəljuː el siː es piː/", "n.", "晶圆级CSP", ["WLCSP", "wafer level CSP", "WLCSP process"]),
    (439, "eWLB", "/iː dʌbəljuː el biː/", "n.", "嵌入式晶圆级BGA", ["eWLB", "embedded WLB", "eWLB fan-out"]),
    (440, "SWIFT", "/swɪft/", "n.", "TSMC扇出技术", ["SWIFT", "TSMC", "fan-out"]),
    (441, "InFO", "/ɪnfoʊ/", "n.", "集成扇出", ["InFO", "integrated fan-out", "InFO WLP"]),
    (442, "CoWoS", "/koʊwɒs/", "n.", "基板上晶圆上芯片", ["CoWoS", "chip on wafer", "TSMC CoWoS"]),
    (443, "SoIC", "/sɔɪk/", "n.", "集成芯片系统", ["SoIC", "system on IC", "TSMC SoIC"]),
    (444, "WoW", "/dʌbəljuː əʊ dʌbəljuː/", "n.", "晶圆堆叠", ["WoW", "wafer on wafer", "wafer stacking"]),
    (445, "CoW", "/siː əʊ dʌbəljuː/", "n.", "晶圆上芯片", ["CoW", "chip on wafer", "CoW stacking"]),
    (446, "HBM2", "/eɪtʃ biː em tuː/", "n.", "高带宽内存2", ["HBM2", "high bandwidth memory", "HBM2E"]),
    (447, "HBM3", "/eɪtʃ biː em θriː/", "n.", "高带宽内存3", ["HBM3", "high bandwidth memory", "HBM3E"]),
    (448, "HBM4", "/eɪtʃ biː em fɔːr/", "n.", "高带宽内存4", ["HBM4", "high bandwidth memory", "next-gen HBM"]),
    (449, "DDR5", "/diː diː ɑːr faɪv/", "n.", "DDR5内存", ["DDR5", "double data rate", "DDR5 SDRAM"]),
    (450, "LPDDR", "/el piː diː diː ɑːr/", "n.", "低功耗DDR", ["LPDDR", "low power DDR", "LPDDR5"]),

    # 451-500: 新兴技术与产业
    (451, "chiplets", "/ˈtʃɪplɪts/", "n.", "芯粒", ["chiplet", "chiplets", "chiplet design", "chiplet integration"]),
    (452, "UCIe", "/juː siː aɪ iː/", "n.", "芯粒互连", ["UCIe", "universal chiplet", "interconnect express"]),
    (453, "interposer", "/ˈɪntərpəʊzər/", "n.", "中介层", ["interposer", "silicon interposer", "organic interposer"]),
    (454, "bridge", "/brɪdʒ/", "n.", "桥接", ["bridge", "EMIB", "silicon bridge", "LSI"]),
    (455, "EMIB", "/iː em aɪ biː/", "n.", "嵌入式多芯片桥接", ["EMIB", "embedded multi-die", "Intel EMIB"]),
    (456, "AIB", "/eɪ aɪ biː/", "n.", "高级接口总线", ["AIB", "advanced interface", "Intel AIB"]),
    (457, "BoW", "/biː əʊ dʌbəljuː/", "n.", "基板上晶圆", ["BoW", "bonding on wafer", "wafer bonding"]),
    (458, "Co-Packaged", "/kəʊ ˈpækɪdʒd/", "adj.", "共封装", ["co-packaged", "co-packaged optics", "CPO"]),
    (459, "CPO", "/siː piː əʊ/", "n.", "共封装光学", ["CPO", "co-packaged optics", "optical I/O"]),
    (460, "photonic", "/fəʊˈtɒnɪk/", "adj.", "光子", ["photonic", "photonic chip", "photonic IC"]),
    (461, "PIC", "/piː aɪ siː/", "n.", "光子集成电路", ["PIC", "photonic IC", "silicon photonics"]),
    (462, "siliconphoton", "/ˈsɪlɪkən fəʊˈtɒnɪks/", "n.", "硅光子", ["silicon photonics", "SiPh", "photonic device"]),
    (463, "optoelectron", "/ˌɒptəʊɪlekˈtrɒnɪk/", "n.", "光电子", ["optoelectronic", "optoelectronics", "optical device"]),
    (464, "optoelectronic", "/ˌɒptəʊɪlekˈtrɒnɪk/", "adj.", "光电子的", ["optoelectronic", "optoelectronic device", "OEIC"]),
    (465, "modulator", "/ˈmɒdjuleɪtər/", "n.", "调制器", ["modulator", "optical modulator", "Mach-Zehnder"]),
    (466, "detector", "/dɪˈtektər/", "n.", "探测器", ["detector", "photodetector", "optical detector"]),
    (467, "waveguide", "/ˈweɪvɡaɪd/", "n.", "波导", ["waveguide", "optical waveguide", "silicon waveguide"]),
    (468, "coupler", "/ˈkʌplər/", "n.", "耦合器", ["coupler", "directional coupler", "grating coupler"]),
    (469, "splitter", "/ˈsplɪtər/", "n.", "分光器", ["splitter", "power splitter", "Y-splitter"]),
    (470, "multiplex", "/ˈmʌltɪpleks/", "v.", "复用", ["multiplex", "multiplexer", "demultiplexer", "WDM"]),
    (471, "demultiplex", "/diːˈmʌltɪpleks/", "v.", "解复用", ["demultiplex", "demultiplexer", "WDM demux"]),
    (472, "transceiver", "/trænˈsiːvər/", "n.", "收发器", ["transceiver", "optical transceiver", "silicon transceiver"]),
    (473, "neuromorphic", "/ˌnjʊərəʊˈmɔːfɪk/", "adj.", "神经形态", ["neuromorphic", "neuromorphic computing", "neuromorphic chip"]),
    (474, "memristor", "/ˈmemrɪstər/", "n.", "忆阻器", ["memristor", "memristive", "RRAM memristor"]),
    (475, "RRAM", "/ɑːr ræm/", "n.", "阻变存储器", ["RRAM", "resistive RAM", "ReRAM"]),
    (476, "MRAM", "/em ræm/", "n.", "磁性随机存储器", ["MRAM", "magnetic RAM", "STT-MRAM"]),
    (477, "STTMRAM", "/es tiː tiː em ræm/", "n.", "自旋转移矩MRAM", ["STT-MRAM", "spin transfer torque", "STT"]),
    (478, "PCRAM", "/piː siː ɑːr ræm/", "n.", "相变存储器", ["PCRAM", "phase change RAM", "PCM"]),
    (479, "PCM", "/piː siː em/", "n.", "相变存储器", ["PCM", "phase change memory", "GeSbTe"]),
    (480, "FeFET", "/ef iː ef iː tiː/", "n.", "铁电场效应晶体管", ["FeFET", "ferroelectric FET", "ferroelectric"]),
    (481, "ferroelectric", "/ˌferəʊɪˈlektrɪk/", "adj.", "铁电", ["ferroelectric", "ferroelectric memory", "FeRAM"]),
    (482, "FeRAM", "/ef iː ræm/", "n.", "铁电存储器", ["FeRAM", "ferroelectric RAM", "FRAM"]),
    (483, "quantumdot", "/ˈkwɒntəm dɒt/", "n.", "量子点", ["quantum dot", "QD", "quantum dot laser"]),
    (484, "QD", "/kjuː diː/", "n.", "量子点", ["QD", "quantum dot", "QD display"]),
    (485, "nanowire", "/ˈnænəʊwaɪər/", "n.", "纳米线", ["nanowire", "silicon nanowire", "nanowire FET"]),
    (486, "nanosheet", "/ˈnænəʊʃiːt/", "n.", "纳米片", ["nanosheet", "GAA nanosheet", "stacked nanosheet"]),
    (487, "CFET", "/siː ef iː tiː/", "n.", "互补场效应晶体管", ["CFET", "complementary FET", "CFET stacking"]),
    (488, "Forksheet", "/ˈfɔːrkʃiːt/", "n.", "叉片", ["forksheet", "forksheet FET", "IMEC forksheet"]),
    (489, "2Dmaterial", "/tuː diː məˈtɪəriəl/", "n.", "二维材料", ["2D material", "TMD", "graphene", "MoS2"]),
    (490, "TMD", "/tiː em diː/", "n.", "过渡金属二硫属化物", ["TMD", "transition metal", "dichalcogenide"]),
    (491, "CNT", "/siː en tiː/", "n.", "碳纳米管", ["CNT", "carbon nanotube", "nanotube FET"]),
    (492, "graphene", "/ˈɡræfiːn/", "n.", "石墨烯", ["graphene", "graphene FET", "bilayer graphene"]),
    (493, "MoS2", "/em əʊ es tuː/", "n.", "二硫化钼", ["MoS2", "molybdenum disulfide", "TMD"]),
    (494, "WS2", "/dʌbəljuː es tuː/", "n.", "二硫化钨", ["WS2", "tungsten disulfide", "TMD material"]),
    (495, "blackphosphor", "/blæk ˈfɒsfərəs/", "n.", "黑磷", ["black phosphorus", "phosphorene", "BP"]),
    (496, "Ga2O3", "/dʒiː eɪ tuː əʊ θriː/", "n.", "氧化镓", ["Ga2O3", "gallium oxide", "ultra-wide bandgap"]),
    (497, "Diamond", "/ˈdaɪəmənd/", "n.", "金刚石", ["diamond", "diamond semiconductor", "CVD diamond"]),
    (498, "SiC", "/es aɪ siː/", "n.", "碳化硅", ["SiC", "silicon carbide", "SiC power"]),
    (499, "GaN", "/dʒiː eɪ en/", "n.", "氮化镓", ["GaN", "gallium nitride", "GaN HEMT"]),
    (500, "AlN", "/eɪ el en/", "n.", "氮化铝", ["AlN", "aluminum nitride", "AlN substrate"]),
]

print(f"第3批新词根定义数量: {len(new_definitions_part3)}")
new_definitions.extend(new_definitions_part3)

print(f"总新词根定义数量: {len(new_definitions)}")

# 创建新条目
new_entries = []
for entry_data in new_definitions:
    entry = create_entry(*entry_data)
    new_entries.append(entry)

print(f"新条目数量: {len(new_entries)}")

# 合并所有条目
all_entries = fixed_existing + new_entries
print(f"总条目数量: {len(all_entries)}")

# 保存到文件
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'w', encoding='utf-8') as f:
    json.dump(all_entries, f, ensure_ascii=False, indent=2)

print("文件保存成功！")

