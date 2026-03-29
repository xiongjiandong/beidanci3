import json

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    existing_data = json.load(f)

print(f"现有条目数: {len(existing_data)}")

# 提取现有的词根列表
existing_roots = set()
for item in existing_data:
    existing_roots.add(item['root'])

print(f"现有词根数: {len(existing_roots)}")

# 定义300个新的半导体词根（201-500）
new_roots_data = [
    # 201-250: 基础材料与物理
    {"root": "crystall", "phonetic": "/ˈkrɪstl/", "pos": "n.", "meaning": "晶体", "words": ["crystal", "crystalline", "crystallization"]},
    {"root": "lattic", "phonetic": "/ˈlætɪs/", "pos": "n.", "meaning": "晶格", "words": ["lattice", "lattice constant", "superlattice"]},
    {"root": "atom", "phonetic": "/ˈætəm/", "pos": "n.", "meaning": "原子", "words": ["atom", "atomic", "atomic layer"]},
    {"root": "molecul", "phonetic": "/ˈmɒlɪkjuːl/", "pos": "n.", "meaning": "分子", "words": ["molecule", "molecular", "molecular beam"]},
    {"root": "ion", "phonetic": "/ˈaɪən/", "pos": "n.", "meaning": "离子", "words": ["ion", "ionic", "ion implantation"]},
    {"root": "electron", "phonetic": "/ɪˈlektrɒn/", "pos": "n.", "meaning": "电子", "words": ["electron", "electronic", "electron hole"]},
    {"root": "hole", "phonetic": "/həʊl/", "pos": "n.", "meaning": "空穴", "words": ["hole", "hole mobility", "hole concentration"]},
    {"root": "carrier", "phonetic": "/ˈkæriər/", "pos": "n.", "meaning": "载流子", "words": ["carrier", "carrier mobility", "carrier density"]},
    {"root": "band", "phonetic": "/bænd/", "pos": "n.", "meaning": "能带", "words": ["bandgap", "bandwidth", "conduction band"]},
    {"root": "gap", "phonetic": "/ɡæp/", "pos": "n.", "meaning": "带隙", "words": ["bandgap", "energy gap", "gap engineering"]},
    {"root": "energ", "phonetic": "/ˈenədʒi/", "pos": "n.", "meaning": "能量", "words": ["energy", "energy band", "kinetic energy"]},
    {"root": "valenc", "phonetic": "/ˈveɪləns/", "pos": "n.", "meaning": "价带", "words": ["valence", "valence band", "valence electron"]},
    {"root": "conductor", "phonetic": "/kənˈdʌktə/", "pos": "n.", "meaning": "导体", "words": ["conductor", "conduction", "conductivity"]},
    {"root": "insulat", "phonetic": "/ˈɪnsjuleɪt/", "pos": "v.", "meaning": "绝缘", "words": ["insulate", "insulator", "insulation"]},
    {"root": "dielectr", "phonetic": "/ˌdaɪɪˈlektrɪk/", "pos": "n.", "meaning": "电介质", "words": ["dielectric", "dielectric constant", "high-k dielectric"]},
    {"root": "fermi", "phonetic": "/ˈfɜːmi/", "pos": "n.", "meaning": "费米", "words": ["Fermi", "Fermi level", "Fermi energy"]},
    {"root": "quantum", "phonetic": "/ˈkwɒntəm/", "pos": "n.", "meaning": "量子", "words": ["quantum", "quantum dot", "quantum well"]},
    {"root": "tunnel", "phonetic": "/ˈtʌnl/", "pos": "v.", "meaning": "隧穿", "words": ["tunnel", "tunneling", "quantum tunneling"]},
    {"root": "scatter", "phonetic": "/ˈskætər/", "pos": "v.", "meaning": "散射", "words": ["scatter", "scattering", "phonon scattering"]},
    {"root": "phonon", "phonetic": "/ˈfəʊnɒn/", "pos": "n.", "meaning": "声子", "words": ["phonon", "phonon scattering", "optical phonon"]},
    {"root": "exciton", "phonetic": "/ˈeksɪtɒn/", "pos": "n.", "meaning": "激子", "words": ["exciton", "exciton binding", "excitonic"]},
    {"root": "polaron", "phonetic": "/ˈpəʊlərɒn/", "pos": "n.", "meaning": "极化子", "words": ["polaron", "polaron effect", "large polaron"]},
    {"root": "plasmon", "phonetic": "/ˈplæzmɒn/", "pos": "n.", "meaning": "等离激元", "words": ["plasmon", "plasmonic", "surface plasmon"]},
    {"root": "excit", "phonetic": "/ɪkˈsaɪt/", "pos": "v.", "meaning": "激发", "words": ["excite", "excitation", "excited state"]},
    {"root": "recombin", "phonetic": "/ˌriːkəmˈbaɪn/", "pos": "v.", "meaning": "复合", "words": ["recombine", "recombination", "recombination center"]},
    {"root": "generat", "phonetic": "/ˈdʒenəreɪt/", "pos": "v.", "meaning": "产生", "words": ["generate", "generation", "carrier generation"]},
    {"root": "trapp", "phonetic": "/træp/", "pos": "v.", "meaning": "俘获", "words": ["trap", "trapping", "charge trap"]},
    {"root": "leakag", "phonetic": "/ˈliːkɪdʒ/", "pos": "n.", "meaning": "漏电流", "words": ["leakage", "leakage current", "gate leakage"]},
    {"root": "invers", "phonetic": "/ɪnˈvɜːs/", "pos": "v.", "meaning": "反型", "words": ["inversion", "inverse", "inversion layer"]},
    {"root": "accumul", "phonetic": "/əˈkjuːmjuleɪt/", "pos": "v.", "meaning": "积累", "words": ["accumulate", "accumulation", "accumulation mode"]},
    {"root": "deplet", "phonetic": "/dɪˈpliːt/", "pos": "v.", "meaning": "耗尽", "words": ["deplete", "depletion", "depletion region"]},
    {"root": "intrins", "phonetic": "/ɪnˈtrɪnsɪk/", "pos": "adj.", "meaning": "本征", "words": ["intrinsic", "intrinsic carrier", "intrinsic silicon"]},
    {"root": "extrins", "phonetic": "/ɪkˈstrɪnsɪk/", "pos": "adj.", "meaning": "非本征", "words": ["extrinsic", "extrinsic semiconductor", "extrinsic region"]},
    {"root": "mobil", "phonetic": "/məʊˈbɪl/", "pos": "adj.", "meaning": "迁移率", "words": ["mobility", "electron mobility", "hole mobility"]},
    {"root": "satur", "phonetic": "/ˈsætʃəreɪt/", "pos": "v.", "meaning": "饱和", "words": ["saturate", "saturation", "saturation velocity"]},
    {"root": "drift", "phonetic": "/drɪft/", "pos": "n.", "meaning": "漂移", "words": ["drift", "drift velocity", "drift current"]},
    {"root": "diffus", "phonetic": "/dɪˈfjuːz/", "pos": "v.", "meaning": "扩散", "words": ["diffuse", "diffusion", "diffusion coefficient"]},
    {"root": "conduct", "phonetic": "/kənˈdʌkt/", "pos": "v.", "meaning": "电导", "words": ["conduct", "conduction", "conductivity"]},
    {"root": "resist", "phonetic": "/rɪˈzɪst/", "pos": "v.", "meaning": "电阻", "words": ["resist", "resistance", "resistivity"]},
    {"root": "capacit", "phonetic": "/kəˈpæsɪt/", "pos": "n.", "meaning": "电容", "words": ["capacitor", "capacitance", "parasitic capacitance"]},
    {"root": "induct", "phonetic": "/ɪnˈdʌkt/", "pos": "v.", "meaning": "电感", "words": ["induct", "inductance", "mutual inductance"]},
    {"root": "imped", "phonetic": "/ɪmˈpiːd/", "pos": "v.", "meaning": "阻抗", "words": ["impedance", "impedance matching", "input impedance"]},
    {"root": "admitt", "phonetic": "/ədˈmɪt/", "pos": "v.", "meaning": "导纳", "words": ["admittance", "input admittance", "mutual admittance"]},
    {"root": "react", "phonetic": "/riˈækt/", "pos": "v.", "meaning": "电抗", "words": ["reactance", "capacitive reactance", "inductive reactance"]},
    {"root": "bias", "phonetic": "/ˈbaɪəs/", "pos": "n.", "meaning": "偏置", "words": ["bias", "biased", "forward bias"]},
    {"root": "potenti", "phonetic": "/pəˈtenʃl/", "pos": "n.", "meaning": "电位", "words": ["potential", "potential barrier", "potential well"]},
    {"root": "field", "phonetic": "/fiːld/", "pos": "n.", "meaning": "电场", "words": ["field", "electric field", "magnetic field"]},
    {"root": "barrier", "phonetic": "/ˈbæriər/", "pos": "n.", "meaning": "势垒", "words": ["barrier", "potential barrier", "Schottky barrier"]},
    {"root": "workfunct", "phonetic": "/wɜːrk ˈfʌŋkʃn/", "pos": "n.", "meaning": "功函数", "words": ["workfunction", "work function", "effective workfunction"]},
    {"root": "affinit", "phonetic": "/əˈfɪnəti/", "pos": "n.", "meaning": "亲和能", "words": ["affinity", "electron affinity", "affinity level"]},
]

print(f"新词根定义数量: {len(new_roots_data)}")

# 还需要更多词根，继续添加...
# 251-300: 工艺与设备
process_equipment_roots = [
    {"root": "sputter", "phonetic": "/ˈspʌtər/", "pos": "v.", "meaning": "溅射", "words": ["sputter", "sputtering", "sputter deposition"]},
    {"root": "evapor", "phonetic": "/ɪˈvæpəreɪt/", "pos": "v.", "meaning": "蒸发", "words": ["evaporate", "evaporation", "evaporation rate"]},
    {"root": "sublim", "phonetic": "/ˈsʌblɪmeɪt/", "pos": "v.", "meaning": "升华", "words": ["sublimate", "sublimation", "sublimation pump"]},
    {"root": "adsorb", "phonetic": "/ədˈzɔːrb/", "pos": "v.", "meaning": "吸附", "words": ["adsorb", "adsorption", "physical adsorption"]},
    {"root": "desorb", "phonetic": "/dɪˈzɔːrb/", "pos": "v.", "meaning": "脱附", "words": ["desorb", "desorption", "thermal desorption"]},
    {"root": "absorb", "phonetic": "/əbˈzɔːrb/", "pos": "v.", "meaning": "吸收", "words": ["absorb", "absorption", "absorption coefficient"]},
    {"root": "reflect", "phonetic": "/rɪˈflekt/", "pos": "v.", "meaning": "反射", "words": ["reflect", "reflection", "reflectivity"]},
    {"root": "refract", "phonetic": "/rɪˈfrækt/", "pos": "v.", "meaning": "折射", "words": ["refract", "refraction", "refractive index"]},
    {"root": "diffract", "phonetic": "/dɪˈfrækt/", "pos": "v.", "meaning": "衍射", "words": ["diffract", "diffraction", "X-ray diffraction"]},
    {"root": "interfer", "phonetic": "/ˌɪntərˈfɪər/", "pos": "v.", "meaning": "干涉", "words": ["interfere", "interference", "interferometer"]},
    {"root": "scatterometr", "phonetic": "/ˌskætəˈrɒmɪtri/", "pos": "n.", "meaning": "散射测量", "words": ["scatterometry", "optical scatterometry", "X-ray scatterometry"]},
    {"root": "ellipsometr", "phonetic": "/ɪˈlɪpsɒmɪtri/", "pos": "n.", "meaning": "椭偏测量", "words": ["ellipsometry", "spectroscopic ellipsometry", "in-situ ellipsometry"]},
    {"root": "profilometr", "phonetic": "/prəˈfɪlɒmɪtri/", "pos": "n.", "meaning": "轮廓测量", "words": ["profilometry", "optical profilometry", "stylus profilometry"]},
    {"root": "interferometr", "phonetic": "/ˌɪntərˈfɪrɒmɪtri/", "pos": "n.", "meaning": "干涉测量", "words": ["interferometry", "white light interferometry", "laser interferometry"]},
    {"root": "microscop", "phonetic": "/ˈmaɪkrəskəʊp/", "pos": "n.", "meaning": "显微镜", "words": ["microscope", "microscopy", "electron microscope"]},
    {"root": "spectroscop", "phonetic": "/ˈspektrəskəʊp/", "pos": "n.", "meaning": "光谱仪", "words": ["spectroscope", "spectroscopy", "mass spectroscopy"]},
    {"root": "chromatograph", "phonetic": "/ˌkrəʊməˈtɒɡrəf/", "pos": "n.", "meaning": "色谱仪", "words": ["chromatograph", "chromatography", "gas chromatography"]},
    {"root": "massspectrometr", "phonetic": "/mæs spekˈtrɒmɪtri/", "pos": "n.", "meaning": "质谱仪", "words": ["mass spectrometry", "secondary ion mass spectrometry", "time-of-flight"]},
    {"root": "Auger", "phonetic": "/əʊˈʒeɪ/", "pos": "n.", "meaning": "俄歇", "words": ["Auger", "Auger electron", "Auger spectroscopy"]},
    {"root": "XPS", "phonetic": "/eks piː es/", "pos": "n.", "meaning": "X射线光电子能谱", "words": ["XPS", "X-ray photoelectron", "photoelectron spectroscopy"]},
    {"root": "SIMS", "phonetic": "/sɪmz/", "pos": "n.", "meaning": "二次离子质谱", "words": ["SIMS", "dynamic SIMS", "static SIMS"]},
    {"root": "RBS", "phonetic": "/ɑːr biː es/", "pos": "n.", "meaning": "卢瑟福背散射", "words": ["RBS", "Rutherford backscattering", "ion channeling"]},
    {"root": "TEM", "phonetic": "/tiː iː em/", "pos": "n.", "meaning": "透射电镜", "words": ["TEM", "transmission electron", "TEM imaging"]},
    {"root": "SEM", "phonetic": "/es iː em/", "pos": "n.", "meaning": "扫描电镜", "words": ["SEM", "scanning electron", "SEM microscopy"]},
    {"root": "AFM", "phonetic": "/eɪ ef em/", "pos": "n.", "meaning": "原子力显微镜", "words": ["AFM", "atomic force", "AFM probe"]},
    {"root": "STM", "phonetic": "/es tiː em/", "pos": "n.", "meaning": "扫描隧道显微镜", "words": ["STM", "scanning tunneling", "STM tip"]},
    {"root": "spindl", "phonetic": "/ˈspɪndl/", "pos": "n.", "meaning": "主轴", "words": ["spindle", "spindle motor", "air spindle"]},
    {"root": "chuck", "phonetic": "/tʃʌk/", "pos": "n.", "meaning": "卡盘", "words": ["chuck", "wafer chuck", "electrostatic chuck"]},
    {"root": "stage", "phonetic": "/steɪdʒ/", "pos": "n.", "meaning": "工作台", "words": ["stage", "xy stage", "wafer stage"]},
    {"root": "robot", "phonetic": "/ˈrəʊbɒt/", "pos": "n.", "meaning": "机械手", "words": ["robot", "robotic arm", "wafer handling robot"]},
    {"root": "loadlock", "phonetic": "/ləʊd lɒk/", "pos": "n.", "meaning": "传片室", "words": ["loadlock", "load lock", "vacuum loadlock"]},
    {"root": "pump", "phonetic": "/pʌmp/", "pos": "n.", "meaning": "泵", "words": ["pump", "vacuum pump", "turbo pump"]},
    {"root": "compress", "phonetic": "/kəmˈpres/", "pos": "v.", "meaning": "压缩", "words": ["compress", "compressor", "air compressor"]},
    {"root": "valv", "phonetic": "/vælv/", "pos": "n.", "meaning": "阀门", "words": ["valve", "control valve", "isolation valve"]},
    {"root": "manifold", "phonetic": "/ˈmænɪfəʊld/", "pos": "n.", "meaning": "歧管", "words": ["manifold", "gas manifold", "vacuum manifold"]},
    {"root": "regulat", "phonetic": "/ˈreɡjuleɪt/", "pos": "v.", "meaning": "调节", "words": ["regulate", "regulator", "pressure regulator"]},
    {"root": "flowmet", "phonetic": "/ˈfləʊmiːtər/", "pos": "n.", "meaning": "流量计", "words": ["flowmeter", "mass flowmeter", "gas flowmeter"]},
    {"root": "pressur", "phonetic": "/ˈpreʃər/", "pos": "n.", "meaning": "压力", "words": ["pressure", "high pressure", "low pressure"]},
    {"root": "vacuum", "phonetic": "/ˈvækjuːm/", "pos": "n.", "meaning": "真空", "words": ["vacuum", "vacuum chamber", "ultra-high vacuum"]},
    {"root": "plasma", "phonetic": "/ˈplæzmə/", "pos": "n.", "meaning": "等离子体", "words": ["plasma", "plasma etching", "plasma enhanced"]},
    {"root": "ioniz", "phonetic": "/ˈaɪənaɪz/", "pos": "v.", "meaning": "电离", "words": ["ionize", "ionization", "impact ionization"]},
    {"root": "excit", "phonetic": "/ɪkˈsaɪt/", "pos": "v.", "meaning": "激发", "words": ["excite", "excitation", "plasma excitation"]},
    {"root": "dissoci", "phonetic": "/dɪˈsəʊʃieɪt/", "pos": "v.", "meaning": "解离", "words": ["dissociate", "dissociation", "plasma dissociation"]},
    {"root": "reactor", "phonetic": "/riˈæktər/", "pos": "n.", "meaning": "反应器", "words": ["reactor", "CVD reactor", "plasma reactor"]},
    {"root": "susceptor", "phonetic": "/səˈseptər/", "pos": "n.", "meaning": "基座", "words": ["susceptor", "wafer susceptor", "graphite susceptor"]},
    {"root": "showrhead", "phonetic": "/ˈʃaʊəhed/", "pos": "n.", "meaning": "喷淋头", "words": ["showerhead", "gas showerhead", "showerhead electrode"]},
    {"root": "electrod", "phonetic": "/ɪˈlektrəʊd/", "pos": "n.", "meaning": "电极", "words": ["electrode", "RF electrode", "bias electrode"]},
]

print(f"工艺设备词根数量: {len(process_equipment_roots)}")

# 合并所有新词根
all_new_roots = new_roots_data + process_equipment_roots
print(f"总新词根数量: {len(all_new_roots)}")
