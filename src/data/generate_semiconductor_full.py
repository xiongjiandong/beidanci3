import json

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    existing_data = json.load(f)

print(f"现有条目数: {len(existing_data)}")

# 所有300个新词根定义（201-500）
# 按半导体行业使用频率排序

new_entries = []

# 辅助函数：创建完整条目结构
def create_entry(entry_id, root_data):
    root = root_data["root"]
    phonetic = root_data.get("phonetic", "")
    pos = root_data.get("pos", "n.")
    meaning = root_data.get("meaning", "")
    words = root_data.get("words", [root])

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
    phrases = [f"{root} technology (待翻译)", f"{root} process (待翻译)"]

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

# 定义300个新词根（按半导体行业使用频率排序）
# 201-500: 新词根

new_roots = [
    # 201-220: 基础物理与材料科学（高频）
    {"root": "crystall", "phonetic": "/ˈkrɪstl/", "pos": "n.", "meaning": "晶体", "words": ["crystal", "crystalline", "crystallization", "crystallinity"]},
    {"root": "lattic", "phonetic": "/ˈlætɪs/", "pos": "n.", "meaning": "晶格", "words": ["lattice", "lattice constant", "superlattice", "lattice mismatch"]},
    {"root": "atom", "phonetic": "/ˈætəm/", "pos": "n.", "meaning": "原子", "words": ["atom", "atomic", "atomic layer", "atomic scale"]},
    {"root": "molecul", "phonetic": "/ˈmɒlɪkjuːl/", "pos": "n.", "meaning": "分子", "words": ["molecule", "molecular", "molecular beam", "molecular layer"]},
    {"root": "ion", "phonetic": "/ˈaɪən/", "pos": "n.", "meaning": "离子", "words": ["ion", "ionic", "ion implantation", "ion beam"]},
    {"root": "electron", "phonetic": "/ɪˈlektrɒn/", "pos": "n.", "meaning": "电子", "words": ["electron", "electronic", "electron beam", "electron mobility"]},
    {"root": "hole", "phonetic": "/həʊl/", "pos": "n.", "meaning": "空穴", "words": ["hole", "hole mobility", "hole concentration", "hole current"]},
    {"root": "carrier", "phonetic": "/ˈkæriər/", "pos": "n.", "meaning": "载流子", "words": ["carrier", "carrier mobility", "carrier density", "carrier lifetime"]},
    {"root": "band", "phonetic": "/bænd/", "pos": "n.", "meaning": "能带", "words": ["bandgap", "bandwidth", "conduction band", "valence band"]},
    {"root": "gap", "phonetic": "/ɡæp/", "pos": "n.", "meaning": "带隙", "words": ["bandgap", "energy gap", "gap engineering", "wide bandgap"]},
    {"root": "energ", "phonetic": "/ˈenədʒi/", "pos": "n.", "meaning": "能量", "words": ["energy", "energy band", "kinetic energy", "potential energy"]},
    {"root": "valenc", "phonetic": "/ˈveɪləns/", "pos": "n.", "meaning": "价带", "words": ["valence", "valence band", "valence electron", "valence state"]},
    {"root": "fermi", "phonetic": "/ˈfɜːmi/", "pos": "n.", "meaning": "费米", "words": ["Fermi", "Fermi level", "Fermi energy", "Fermi surface"]},
    {"root": "quantum", "phonetic": "/ˈkwɒntəm/", "pos": "n.", "meaning": "量子", "words": ["quantum", "quantum dot", "quantum well", "quantum tunneling"]},
    {"root": "tunnel", "phonetic": "/ˈtʌnl/", "pos": "v.", "meaning": "隧穿", "words": ["tunnel", "tunneling", "quantum tunneling", "tunnel diode"]},
    {"root": "scatter", "phonetic": "/ˈskætər/", "pos": "v.", "meaning": "散射", "words": ["scatter", "scattering", "phonon scattering", "impurity scattering"]},
    {"root": "phonon", "phonetic": "/ˈfəʊnɒn/", "pos": "n.", "meaning": "声子", "words": ["phonon", "phonon scattering", "optical phonon", "acoustic phonon"]},
    {"root": "exciton", "phonetic": "/ˈeksɪtɒn/", "pos": "n.", "meaning": "激子", "words": ["exciton", "exciton binding", "excitonic", "exciton energy"]},
    {"root": "polaron", "phonetic": "/ˈpəʊlərɒn/", "pos": "n.", "meaning": "极化子", "words": ["polaron", "polaron effect", "large polaron", "small polaron"]},
    {"root": "plasmon", "phonetic": "/ˈplæzmɒn/", "pos": "n.", "meaning": "等离激元", "words": ["plasmon", "plasmonic", "surface plasmon", "plasmon resonance"]},

    # 221-250: 电学特性
    {"root": "excit", "phonetic": "/ɪkˈsaɪt/", "pos": "v.", "meaning": "激发", "words": ["excite", "excitation", "excited state", "excitation energy"]},
    {"root": "recombin", "phonetic": "/ˌriːkəmˈbaɪn/", "pos": "v.", "meaning": "复合", "words": ["recombine", "recombination", "recombination center", "recombination rate"]},
    {"root": "generat", "phonetic": "/ˈdʒenəreɪt/", "pos": "v.", "meaning": "产生", "words": ["generate", "generation", "carrier generation", "generation rate"]},
    {"root": "trapp", "phonetic": "/træp/", "pos": "v.", "meaning": "俘获", "words": ["trap", "trapping", "charge trap", "trap level"]},
    {"root": "leakag", "phonetic": "/ˈliːkɪdʒ/", "pos": "n.", "meaning": "漏电流", "words": ["leakage", "leakage current", "gate leakage", "subthreshold leakage"]},
    {"root": "invers", "phonetic": "/ɪnˈvɜːs/", "pos": "v.", "meaning": "反型", "words": ["inversion", "inverse", "inversion layer", "strong inversion"]},
    {"root": "accumul", "phonetic": "/əˈkjuːmjuleɪt/", "pos": "v.", "meaning": "积累", "words": ["accumulate", "accumulation", "accumulation mode", "charge accumulation"]},
    {"root": "deplet", "phonetic": "/dɪˈpliːt/", "pos": "v.", "meaning": "耗尽", "words": ["deplete", "depletion", "depletion region", "depletion width"]},
    {"root": "intrins", "phonetic": "/ɪnˈtrɪnsɪk/", "pos": "adj.", "meaning": "本征", "words": ["intrinsic", "intrinsic carrier", "intrinsic silicon", "intrinsic region"]},
    {"root": "extrins", "phonetic": "/ɪkˈstrɪnsɪk/", "pos": "adj.", "meaning": "非本征", "words": ["extrinsic", "extrinsic semiconductor", "extrinsic region", "extrinsic doping"]},
    {"root": "mobil", "phonetic": "/məʊˈbɪl/", "pos": "adj.", "meaning": "迁移率", "words": ["mobility", "electron mobility", "hole mobility", "carrier mobility"]},
    {"root": "satur", "phonetic": "/ˈsætʃəreɪt/", "pos": "v.", "meaning": "饱和", "words": ["saturate", "saturation", "saturation velocity", "saturation current"]},
    {"root": "drift", "phonetic": "/drɪft/", "pos": "n.", "meaning": "漂移", "words": ["drift", "drift velocity", "drift current", "drift region"]},
    {"root": "conduct", "phonetic": "/kənˈdʌkt/", "pos": "v.", "meaning": "电导", "words": ["conduct", "conduction", "conductivity", "conductance"]},
    {"root": "resist", "phonetic": "/rɪˈzɪst/", "pos": "v.", "meaning": "电阻", "words": ["resist", "resistance", "resistivity", "resistor"]},
    {"root": "capacit", "phonetic": "/kəˈpæsɪt/", "pos": "n.", "meaning": "电容", "words": ["capacitor", "capacitance", "parasitic capacitance", "gate capacitance"]},
    {"root": "induct", "phonetic": "/ɪnˈdʌkt/", "pos": "v.", "meaning": "电感", "words": ["induct", "inductance", "mutual inductance", "self inductance"]},
    {"root": "imped", "phonetic": "/ɪmˈpiːd/", "pos": "v.", "meaning": "阻抗", "words": ["impedance", "impedance matching", "input impedance", "output impedance"]},
    {"root": "admitt", "phonetic": "/ədˈmɪt/", "pos": "v.", "meaning": "导纳", "words": ["admittance", "input admittance", "mutual admittance", "transfer admittance"]},
    {"root": "react", "phonetic": "/riˈækt/", "pos": "v.", "meaning": "电抗", "words": ["reactance", "capacitive reactance", "inductive reactance", "negative reactance"]},
    {"root": "bias", "phonetic": "/ˈbaɪəs/", "pos": "n.", "meaning": "偏置", "words": ["bias", "biased", "forward bias", "reverse bias"]},
    {"root": "potenti", "phonetic": "/pəˈtenʃl/", "pos": "n.", "meaning": "电位", "words": ["potential", "potential barrier", "potential well", "electric potential"]},
    {"root": "field", "phonetic": "/fiːld/", "pos": "n.", "meaning": "电场", "words": ["field", "electric field", "magnetic field", "field oxide"]},
    {"root": "barrier", "phonetic": "/ˈbæriər/", "pos": "n.", "meaning": "势垒", "words": ["barrier", "potential barrier", "Schottky barrier", "barrier height"]},
    {"root": "workfunct", "phonetic": "/wɜːrk ˈfʌŋkʃn/", "pos": "n.", "meaning": "功函数", "words": ["workfunction", "work function", "effective workfunction", "metal workfunction"]},
    {"root": "affinit", "phonetic": "/əˈfɪnəti/", "pos": "n.", "meaning": "亲和能", "words": ["affinity", "electron affinity", "affinity level", "negative affinity"]},

    # 251-280: 工艺技术
    {"root": "sputter", "phonetic": "/ˈspʌtər/", "pos": "v.", "meaning": "溅射", "words": ["sputter", "sputtering", "sputter deposition", "magnetron sputtering"]},
    {"root": "evapor", "phonetic": "/ɪˈvæpəreɪt/", "pos": "v.", "meaning": "蒸发", "words": ["evaporate", "evaporation", "evaporation rate", "electron beam evaporation"]},
    {"root": "sublim", "phonetic": "/ˈsʌblɪmeɪt/", "pos": "v.", "meaning": "升华", "words": ["sublimate", "sublimation", "sublimation pump", "molecular beam epitaxy"]},
    {"root": "adsorb", "phonetic": "/ədˈzɔːrb/", "pos": "v.", "meaning": "吸附", "words": ["adsorb", "adsorption", "physical adsorption", "chemical adsorption"]},
    {"root": "desorb", "phonetic": "/dɪˈzɔːrb/", "pos": "v.", "meaning": "脱附", "words": ["desorb", "desorption", "thermal desorption", "laser desorption"]},
    {"root": "absorb", "phonetic": "/əbˈzɔːrb/", "pos": "v.", "meaning": "吸收", "words": ["absorb", "absorption", "absorption coefficient", "light absorption"]},
    {"root": "reflect", "phonetic": "/rɪˈflekt/", "pos": "v.", "meaning": "反射", "words": ["reflect", "reflection", "reflectivity", "reflectance"]},
    {"root": "refract", "phonetic": "/rɪˈfrækt/", "pos": "v.", "meaning": "折射", "words": ["refract", "refraction", "refractive index", "refractive"]},
    {"root": "diffract", "phonetic": "/dɪˈfrækt/", "pos": "v.", "meaning": "衍射", "words": ["diffract", "diffraction", "X-ray diffraction", "electron diffraction"]},
    {"root": "interfer", "phonetic": "/ˌɪntərˈfɪər/", "pos": "v.", "meaning": "干涉", "words": ["interfere", "interference", "interferometer", "interference pattern"]},
    {"root": "spin", "phonetic": "/spɪn/", "pos": "v.", "meaning": "旋转", "words": ["spin", "spin coating", "spin-on", "spin speed"]},
    {"root": "coat", "phonetic": "/kəʊt/", "pos": "v.", "meaning": "涂覆", "words": ["coat", "coating", "spin coating", "dip coating"]},
    {"root": "bake", "phonetic": "/beɪk/", "pos": "v.", "meaning": "烘烤", "words": ["bake", "baking", "soft bake", "hard bake"]},
    {"root": "cure", "phonetic": "/kjʊər/", "pos": "v.", "meaning": "固化", "words": ["cure", "curing", "UV cure", "thermal cure"]},
    {"root": "harden", "phonetic": "/ˈhɑːrdn/", "pos": "v.", "meaning": "硬化", "words": ["harden", "hardening", "radiation hardening", "process hardening"]},
    {"root": "soften", "phonetic": "/ˈsɔːfn/", "pos": "v.", "meaning": "软化", "words": ["soften", "softening", "thermal softening", "anneal softening"]},
    {"root": "planariz", "phonetic": "/ˈplænəraɪz/", "pos": "v.", "meaning": "平坦化", "words": ["planarize", "planarization", "global planarization", "local planarization"]},
    {"root": "polish", "phonetic": "/ˈpɒlɪʃ/", "pos": "v.", "meaning": "抛光", "words": ["polish", "polishing", "chemical polishing", "mechanical polishing"]},
    {"root": "grind", "phonetic": "/ɡraɪnd/", "pos": "v.", "meaning": "研磨", "words": ["grind", "grinding", "back grinding", "wafer grinding"]},
    {"root": "dice", "phonetic": "/daɪs/", "pos": "v.", "meaning": "切割", "words": ["dice", "dicing", "wafer dicing", "laser dicing"]},
    {"root": "saw", "phonetic": "/sɔː/", "pos": "v.", "meaning": "锯切", "words": ["saw", "sawing", "dicing saw", "blade saw"]},
    {"root": "scribe", "phonetic": "/skraɪb/", "pos": "v.", "meaning": "划线", "words": ["scribe", "scribing", "scribe line", "laser scribe"]},
    {"root": "cleav", "phonetic": "/kliːv/", "pos": "v.", "meaning": "解理", "words": ["cleave", "cleavage", "cleavage plane", "wafer cleaving"]},
    {"root": "singulat", "phonetic": "/ˈsɪŋɡjuleɪt/", "pos": "v.", "meaning": "分选", "words": ["singulate", "singulation", "die singulation", "wafer singulation"]},
    {"root": "pick", "phonetic": "/pɪk/", "pos": "v.", "meaning": "拾取", "words": ["pick", "picking", "pick and place", "die pick"]},
    {"root": "place", "phonetic": "/pleɪs/", "pos": "v.", "meaning": "放置", "words": ["place", "placement", "pick and place", "die placement"]},
    {"root": "attach", "phonetic": "/əˈtætʃ/", "pos": "v.", "meaning": "贴装", "words": ["attach", "attachment", "die attach", "wafer attach"]},
]

print(f"新词根定义数量（第1批）: {len(new_roots)}")
