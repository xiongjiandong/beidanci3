# -*- coding: utf-8 -*-
import json

# 读取现有文件
with open('f:/claudeanli/beidanci3/src/data/chemical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'现有条目数: {len(data)}')
print(f'第一个ID: {data[0]["id"]}')
print(f'最后一个ID: {data[-1]["id"]}')

def create_entry(id, root, phonetic, meaning, word_list, phrases, mnemonic):
    """创建单个条目"""
    words = []
    for w in word_list:
        words.append({
            "word": w,
            "phonetic": "/ˈfəʊnɪtɪk/",
            "partOfSpeech": "n.",
            "meaning": f"{meaning}相关",
            "memoryTip": f"{root}{meaning} → {w}",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases[:4],
            "wordPhrases": phrases[:4]
        })

    return {
        "id": id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "n.",
        "frequency": (id % 5) + 1,
        "category": "化工",
        "words": words,
        "phrases": phrases[:4],
        "mnemonic": mnemonic,
        "meaning": meaning
    }

# 定义200个化工词根数据
new_entries = []

# ID 801-820: 化学元素相关
elements = [
    (801, "oxy", "/ˈɒksi/", "氧", ["oxygen", "oxide", "oxidize", "oxidation"]),
    (802, "hydr", "/ˈhaɪdrə/", "氢", ["hydrogen", "hydride", "hydrocarbon", "dehydrate"]),
    (803, "carb", "/ˈkɑːrb/", "碳", ["carbon", "carbide", "carbohydrate", "carbonate"]),
    (804, "azot", "/ˈæzət/", "氮", ["nitrogen", "nitrate", "nitride", "nitrite"]),
    (805, "sulf", "/ˈsʌlf/", "硫", ["sulfur", "sulfide", "sulfate", "sulfite"]),
    (806, "chlor", "/ˈklɔːr/", "氯", ["chlorine", "chloride", "chloroform", "chlorophyll"]),
    (807, "phos", "/ˈfɒs/", "磷", ["phosphorus", "phosphate", "phosphide", "phospholipid"]),
    (808, "ferr", "/ˈfer/", "铁", ["iron", "ferric", "ferrous", "ferrite"]),
    (809, "sod", "/ˈsoʊd/", "钠", ["sodium", "soda", "sodiate", "disodium"]),
    (810, "calc", "/ˈkælk/", "钙", ["calcium", "calcite", "calcinate", "calciferous"]),
    (811, "alumin", "/əˈluːmɪn/", "铝", ["aluminum", "alumina", "aluminate", "aluminosilicate"]),
    (812, "cupr", "/ˈkuːpr/", "铜", ["copper", "cupric", "cuprous", "cuprite"]),
    (813, "argen", "/ˈɑːrdʒən/", "银", ["silver", "argentic", "argentous", "argentite"]),
    (814, "aur", "/ˈɔːr/", "金", ["gold", "auric", "aurous", "auriferous"]),
    (815, "plumb", "/ˈplʌm/", "铅", ["lead", "plumbic", "plumbous", "plumbing"]),
    (816, "stann", "/ˈstæn/", "锡", ["tin", "stannic", "stannous", "stannite"]),
    (817, "zinc", "/zɪŋk/", "锌", ["zinc", "zincate", "zincify", "zincky"]),
    (818, "magnes", "/mæɡˈniːs/", "镁", ["magnesium", "magnesite", "magnesia", "magnesic"]),
    (819, "brom", "/ˈbroʊm/", "溴", ["bromine", "bromide", "bromate", "brominate"]),
    (820, "iod", "/ˈaɪəd/", "碘", ["iodine", "iodide", "iodate", "iodize"]),
]

for item in elements:
    id, root, phonetic, meaning, word_list = item
    phrases = [f"{w} compound" for w in word_list[:4]]
    mnemonic = f"{root}（{meaning}）→ 与{meaning}元素有关的化学术语"
    new_entries.append(create_entry(id, root, phonetic, meaning, word_list, phrases, mnemonic))

# ID 821-860: 化合物相关
compounds = [
    (821, "meth", "/meθ/", "甲基", ["methane", "methanol", "methyl", "methoxide"]),
    (822, "eth", "/eθ/", "乙基", ["ethane", "ethanol", "ether", "ethylene"]),
    (823, "prop", "/prɒp/", "丙基", ["propane", "propanol", "propylene", "propyl"]),
    (824, "but", "/bjuːt/", "丁基", ["butane", "butanol", "butyl", "butene"]),
    (825, "pent", "/pent/", "戊基", ["pentane", "pentanol", "pentene", "pentyl"]),
    (826, "hex", "/heks/", "己基", ["hexane", "hexanol", "hexene", "hexyl"]),
    (827, "hept", "/hept/", "庚基", ["heptane", "heptanol", "heptene", "heptyl"]),
    (828, "oct", "/ɒkt/", "辛基", ["octane", "octanol", "octene", "octyl"]),
    (829, "non", "/nɒn/", "壬基", ["nonane", "nonanol", "nonene", "nonyl"]),
    (830, "dec", "/dek/", "癸基", ["decane", "decanol", "decene", "decyl"]),
    (831, "benz", "/benz/", "苯基", ["benzene", "benzoic", "benzyl", "benzaldehyde"]),
    (832, "tolu", "/ˈtɒljuː/", "甲苯基", ["toluene", "toluol", "tolyl", "toluic"]),
    (833, "phen", "/fen/", "苯基", ["phenol", "phenyl", "phenylalanine", "phenoxide"]),
    (834, "naphth", "/ˈnæfθ/", "萘基", ["naphthalene", "naphthol", "naphthyl", "naphthoic"]),
    (835, "anthrac", "/ˈænθræk/", "蒽基", ["anthracene", "anthracol", "anthranyl", "anthraquinone"]),
    (836, "form", "/fɔːrm/", "甲酰", ["formaldehyde", "formic", "formate", "formyl"]),
    (837, "acet", "/ˈæsɪt/", "乙酰", ["acetic", "acetone", "acetylene", "acetyl"]),
    (838, "aldehyd", "/ˈældɪhaɪd/", "醛", ["aldehyde", "aldehydic", "formaldehyde", "acetaldehyde"]),
    (839, "ket", "/kiːt/", "酮", ["ketone", "ketonic", "acetonide", "ketoacid"]),
    (840, "amid", "/ˈæmɪd/", "酰胺", ["amide", "amidic", "sulfonamide", "polyamide"]),
    (841, "amin", "/ˈæmɪn/", "氨基", ["amine", "amino", "diamine", "triamine"]),
    (842, "imid", "/ˈɪmɪd/", "亚胺", ["imide", "imidic", "succinimide", "phthalimide"]),
    (843, "imidaz", "/ˈɪmɪdæz/", "咪唑", ["imidazole", "imidazolyl", "imidazoline", "imidazolide"]),
    (844, "pyrid", "/ˈpɪrɪd/", "吡啶", ["pyridine", "pyridyl", "pyridoxic", "pyridoxine"]),
    (845, "pyrimid", "/ˈpaɪrɪmɪd/", "嘧啶", ["pyrimidine", "pyrimidyl", "pyrimidone", "pyrimidinyl"]),
    (846, "pur", "/pjʊər/", "嘌呤", ["purine", "purinyl", "puric", "purification"]),
    (847, "glyc", "/ɡlaɪk/", "甘氨酸", ["glycine", "glycol", "glycogen", "glycoprotein"]),
    (848, "sacchar", "/ˈsækər/", "糖", ["saccharide", "saccharin", "polysaccharide", "monosaccharide"]),
    (849, "cellul", "/ˈseljʊl/", "纤维素", ["cellulose", "celluloid", "cellulitic", "cellulase"]),
    (850, "starch", "/stɑːrtʃ/", "淀粉", ["starch", "amylose", "amylopectin", "starchy"]),
    (851, "prote", "/ˈproʊtiː/", "蛋白质", ["protein", "protease", "proteolytic", "proteomics"]),
    (852, "peptid", "/ˈpeptaɪd/", "肽", ["peptide", "peptidase", "dipeptide", "polypeptide"]),
    (853, "lipid", "/ˈlɪpɪd/", "脂质", ["lipid", "lipidic", "phospholipid", "glycolipid"]),
    (854, "nucle", "/ˈnjuːkliː/", "核", ["nucleic", "nucleotide", "nucleoside", "nucleophile"]),
    (855, "ster", "/stɪər/", "甾醇", ["sterol", "steroid", "cholesterol", "testosterone"]),
    (856, "terpen", "/ˈtɜːrpin/", "萜烯", ["terpene", "terpenoid", "monoterpene", "sesquiterpene"]),
    (857, "alkal", "/ˈælkəl/", "碱", ["alkali", "alkaline", "alkaloid", "alkalinity"]),
    (858, "acid", "/ˈæsɪd/", "酸", ["acid", "acidic", "acidity", "acidify"]),
    (859, "base", "/beɪs/", "碱", ["base", "basic", "basicity", "basify"]),
    (860, "salt", "/sɔːlt/", "盐", ["salt", "saline", "salinity", "salification"]),
]

for item in compounds:
    id, root, phonetic, meaning, word_list = item
    phrases = [f"{w} synthesis" for w in word_list[:4]]
    mnemonic = f"{root}（{meaning}）→ 化工中的{meaning}类化合物"
    new_entries.append(create_entry(id, root, phonetic, meaning, word_list, phrases, mnemonic))

print(f'已生成 {len(new_entries)} 个条目 (801-860)')

# 保存中间结果
with open('f:/claudeanli/beidanci3/src/data/chemical_new_part1.json', 'w', encoding='utf-8') as f:
    json.dump(new_entries, f, ensure_ascii=False, indent=2)

print('第一部分已保存')
