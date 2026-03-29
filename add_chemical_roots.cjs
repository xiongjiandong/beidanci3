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

// 定义300个化工词根（按使用频率从高到低）
const roots = [
    // 201-210
    {root: "oxid", phonetic: "/ˈɒksɪd/", meaning: "氧化", words: [{w: "oxide", m: "氧化物"}, {w: "oxidation", m: "氧化"}, {w: "oxidizer", m: "氧化剂"}, {w: "oxidize", m: "使氧化"}]},
    {root: "reduc", phonetic: "/rɪˈdjuːs/", meaning: "还原", words: [{w: "reduce", m: "还原"}, {w: "reduction", m: "还原"}, {w: "reducing", m: "还原的"}, {w: "reductant", m: "还原剂"}]},
    {root: "neutral", phonetic: "/ˈnjuːtrəl/", meaning: "中和", words: [{w: "neutral", m: "中性的"}, {w: "neutralize", m: "中和"}, {w: "neutralization", m: "中和作用"}, {w: "neutrality", m: "中性"}]},
    {root: "ion", phonetic: "/ˈaɪən/", meaning: "离子", words: [{w: "ion", m: "离子"}, {w: "ionic", m: "离子的"}, {w: "ionization", m: "电离"}, {w: "cation", m: "阳离子"}]},
    {root: "molecul", phonetic: "/ˈmɒlɪkjuːl/", meaning: "分子", words: [{w: "molecule", m: "分子"}, {w: "molecular", m: "分子的"}, {w: "molecular weight", m: "分子量"}, {w: "macromolecule", m: "大分子"}]},
    {root: "atom", phonetic: "/ˈætəm/", meaning: "原子", words: [{w: "atom", m: "原子"}, {w: "atomic", m: "原子的"}, {w: "atomic mass", m: "原子质量"}, {w: "atomization", m: "雾化"}]},
    {root: "valenc", phonetic: "/ˈveɪləns/", meaning: "价", words: [{w: "valence", m: "价"}, {w: "valency", m: "化合价"}, {w: "valent", m: "价的"}, {w: "bivalent", m: "二价的"}]},
    {root: "bond", phonetic: "/bɒnd/", meaning: "键", words: [{w: "bond", m: "键"}, {w: "bonding", m: "键合"}, {w: "covalent bond", m: "共价键"}, {w: "ionic bond", m: "离子键"}]},
    {root: "radic", phonetic: "/ˈrædɪkl/", meaning: "基", words: [{w: "radical", m: "基"}, {w: "free radical", m: "自由基"}, {w: "alkyl radical", m: "烷基"}, {w: "radical reaction", m: "自由基反应"}]},
    {root: "isomer", phonetic: "/ˈaɪsəmə/", meaning: "异构体", words: [{w: "isomer", m: "异构体"}, {w: "isomerism", m: "异构现象"}, {w: "isomeric", m: "异构的"}, {w: "stereoisomer", m: "立体异构体"}]},
    // 211-220
    {root: "stere", phonetic: "/ˈsteriəʊ/", meaning: "立体", words: [{w: "stereo", m: "立体的"}, {w: "stereochemistry", m: "立体化学"}, {w: "stereospecific", m: "立体专一的"}, {w: "stereoselective", m: "立体选择性的"}]},
    {root: "chir", phonetic: "/ˈkaɪərəl/", meaning: "手性", words: [{w: "chiral", m: "手性的"}, {w: "chirality", m: "手性"}, {w: "enantiomer", m: "对映体"}, {w: "optical activity", m: "旋光性"}]},
    {root: "racem", phonetic: "/rəˈsiːmɪk/", meaning: "外消旋", words: [{w: "racemic", m: "外消旋的"}, {w: "racemization", m: "外消旋化"}, {w: "racemate", m: "外消旋体"}, {w: "resolution", m: "拆分"}]},
    {root: "tautom", phonetic: "/ˈtɔːtəmə/", meaning: "互变异构", words: [{w: "tautomer", m: "互变异构体"}, {w: "tautomerism", m: "互变异构现象"}, {w: "tautomeric", m: "互变异构的"}, {w: "keto-enol", m: "酮烯醇"}]},
    {root: "metam", phonetic: "/ˈmetəmə/", meaning: "位变异构", words: [{w: "metamer", m: "位变异构体"}, {w: "metamerism", m: "位变异构现象"}, {w: "metameric", m: "位变异构的"}, {w: "positional isomer", m: "位置异构体"}]},
    {root: "electro", phonetic: "/ɪˈlektrəʊ/", meaning: "电", words: [{w: "electrode", m: "电极"}, {w: "electrolysis", m: "电解"}, {w: "electrochemical", m: "电化学的"}, {w: "electrophile", m: "亲电试剂"}]},
    {root: "phot", phonetic: "/ˈfəʊtəʊ/", meaning: "光", words: [{w: "photochemical", m: "光化学的"}, {w: "photolysis", m: "光解"}, {w: "photosynthesis", m: "光合作用"}, {w: "photocatalysis", m: "光催化"}]},
    {root: "therm", phonetic: "/ˈθɜːməl/", meaning: "热", words: [{w: "thermal", m: "热的"}, {w: "thermodynamics", m: "热力学"}, {w: "thermochemistry", m: "热化学"}, {w: "thermostable", m: "耐热的"}]},
    {root: "kinet", phonetic: "/kɪˈnetɪk/", meaning: "动力", words: [{w: "kinetics", m: "动力学"}, {w: "kinetic energy", m: "动能"}, {w: "reaction kinetics", m: "反应动力学"}, {w: "kinetic control", m: "动力学控制"}]},
    {root: "equilibri", phonetic: "/ˌiːkwɪˈlɪbriəm/", meaning: "平衡", words: [{w: "equilibrium", m: "平衡"}, {w: "equilibrium constant", m: "平衡常数"}, {w: "dynamic equilibrium", m: "动态平衡"}, {w: "equilibria", m: "平衡状态"}]},
    // 221-230
    {root: "stochiometr", phonetic: "/ˌstɒkɪˈɒmɪtri/", meaning: "化学计量", words: [{w: "stoichiometry", m: "化学计量学"}, {w: "stoichiometric", m: "化学计量的"}, {w: "stoichiometric ratio", m: "化学计量比"}, {w: "limiting reagent", m: "限量试剂"}]},
    {root: "yield", phonetic: "/jiːld/", meaning: "产率", words: [{w: "yield", m: "产率"}, {w: "percent yield", m: "百分产率"}, {w: "theoretical yield", m: "理论产率"}, {w: "actual yield", m: "实际产率"}]},
    {root: "convers", phonetic: "/kənˈvɜːʃən/", meaning: "转化率", words: [{w: "conversion", m: "转化"}, {w: "conversion rate", m: "转化率"}, {w: "degree of conversion", m: "转化程度"}, {w: "total conversion", m: "完全转化"}]},
    {root: "selectiv", phonetic: "/sɪˈlektɪv/", meaning: "选择性", words: [{w: "selective", m: "选择性的"}, {w: "selectivity", m: "选择性"}, {w: "chemoselective", m: "化学选择性的"}, {w: "regioselective", m: "区域选择性的"}]},
    {root: "specif", phonetic: "/spəˈsɪfɪk/", meaning: "比", words: [{w: "specific", m: "比"}, {w: "specific heat", m: "比热"}, {w: "specific gravity", m: "比重"}, {w: "specific surface", m: "比表面积"}]},
    {root: "purif", phonetic: "/pjʊərɪˈfaɪ/", meaning: "纯化", words: [{w: "purify", m: "纯化"}, {w: "purification", m: "纯化"}, {w: "purified", m: "纯化的"}, {w: "purity", m: "纯度"}]},
    {root: "refin", phonetic: "/rɪˈfaɪn/", meaning: "精炼", words: [{w: "refine", m: "精炼"}, {w: "refinery", m: "炼油厂"}, {w: "refining", m: "精炼"}, {w: "refined", m: "精炼的"}]},
    {root: "extract", phonetic: "/ɪkˈstrækt/", meaning: "萃取", words: [{w: "extract", m: "萃取"}, {w: "extraction", m: "萃取"}, {w: "extractant", m: "萃取剂"}, {w: "solvent extraction", m: "溶剂萃取"}]},
    {root: "adsorb", phonetic: "/ədˈzɔːb/", meaning: "吸附", words: [{w: "adsorb", m: "吸附"}, {w: "adsorption", m: "吸附"}, {w: "adsorbent", m: "吸附剂"}, {w: "adsorbate", m: "被吸附物"}]},
    {root: "absorb", phonetic: "/əbˈzɔːb/", meaning: "吸收", words: [{w: "absorb", m: "吸收"}, {w: "absorption", m: "吸收"}, {w: "absorbent", m: "吸收剂"}, {w: "absorptivity", m: "吸收率"}]},
    // 231-240
    {root: "desorb", phonetic: "/dɪˈzɔːb/", meaning: "解吸", words: [{w: "desorb", m: "解吸"}, {w: "desorption", m: "解吸"}, {w: "desorber", m: "解吸塔"}, {w: "thermal desorption", m: "热解吸"}]},
    {root: "chromatogr", phonetic: "/ˌkrəʊməˈtɒɡrəfi/", meaning: "色谱", words: [{w: "chromatography", m: "色谱法"}, {w: "chromatograph", m: "色谱仪"}, {w: "chromatogram", m: "色谱图"}, {w: "gas chromatography", m: "气相色谱"}]},
    {root: "spectr", phonetic: "/ˈspektrəm/", meaning: "光谱", words: [{w: "spectrum", m: "光谱"}, {w: "spectroscopy", m: "光谱学"}, {w: "spectrometer", m: "光谱仪"}, {w: "mass spectrometry", m: "质谱"}]},
    {root: "titr", phonetic: "/ˈtaɪtreɪt/", meaning: "滴定", words: [{w: "titration", m: "滴定"}, {w: "titrate", m: "滴定"}, {w: "titrant", m: "滴定剂"}, {w: "endpoint", m: "终点"}]},
    {root: "gravimetr", phonetic: "/ɡræˈvɪmɪtri/", meaning: "重量分析", words: [{w: "gravimetric", m: "重量分析的"}, {w: "gravimetry", m: "重量分析法"}, {w: "gravimetric analysis", m: "重量分析"}, {w: "precipitation", m: "沉淀"}]},
    {root: "potentiometr", phonetic: "/pəʊˌtenʃiˈɒmɪtri/", meaning: "电位滴定", words: [{w: "potentiometry", m: "电位分析法"}, {w: "potentiometric", m: "电位滴定的"}, {w: "potentiometer", m: "电位计"}, {w: "redox potential", m: "氧化还原电位"}]},
    {root: "conductometr", phonetic: "/kənˌdʌktəˈmɒmɪtri/", meaning: "电导", words: [{w: "conductometry", m: "电导法"}, {w: "conductometric", m: "电导的"}, {w: "conductivity", m: "电导率"}, {w: "conductometer", m: "电导仪"}]},
    {root: "polarogr", phonetic: "/ˌpɒləˈrɒɡrəfi/", meaning: "极谱", words: [{w: "polarography", m: "极谱法"}, {w: "polarographic", m: "极谱的"}, {w: "polarogram", m: "极谱图"}, {w: "dropping electrode", m: "滴汞电极"}]},
    {root: "calorimetr", phonetic: "/ˌkæləˈrɪmɪtri/", meaning: "量热", words: [{w: "calorimetry", m: "量热法"}, {w: "calorimeter", m: "量热计"}, {w: "calorimetric", m: "量热的"}, {w: "differential scanning", m: "差示扫描量热"}]},
    {root: "diffract", phonetic: "/dɪˈfrækt/", meaning: "衍射", words: [{w: "diffraction", m: "衍射"}, {w: "diffractometer", m: "衍射仪"}, {w: "X-ray diffraction", m: "X射线衍射"}, {w: "electron diffraction", m: "电子衍射"}]},
    // 241-250
    {root: "crystallogr", phonetic: "/ˌkrɪstəˈlɒɡrəfi/", meaning: "晶体学", words: [{w: "crystallography", m: "晶体学"}, {w: "crystallographic", m: "晶体学的"}, {w: "crystallographer", m: "晶体学家"}, {w: "X-ray crystallography", m: "X射线晶体学"}]},
    {root: "microscop", phonetic: "/ˈmaɪkrəskəʊp/", meaning: "显微镜", words: [{w: "microscope", m: "显微镜"}, {w: "microscopy", m: "显微术"}, {w: "electron microscope", m: "电子显微镜"}, {w: "scanning electron", m: "扫描电子显微镜"}]},
    {root: "electrophores", phonetic: "/ɪˌlektrəʊfəˈriːsɪs/", meaning: "电泳", words: [{w: "electrophoresis", m: "电泳"}, {w: "electrophoretic", m: "电泳的"}, {w: "gel electrophoresis", m: "凝胶电泳"}, {w: "capillary electrophoresis", m: "毛细管电泳"}]},
    {root: "centrifug", phonetic: "/ˈsentrɪfjuːdʒ/", meaning: "离心", words: [{w: "centrifuge", m: "离心机"}, {w: "centrifugal", m: "离心的"}, {w: "centrifugation", m: "离心分离"}, {w: "ultracentrifuge", m: "超速离心机"}]},
    {root: "precipit", phonetic: "/prɪˈsɪpɪteɪt/", meaning: "沉淀", words: [{w: "precipitate", m: "沉淀"}, {w: "precipitation", m: "沉淀"}, {w: "precipitant", m: "沉淀剂"}, {w: "coprecipitation", m: "共沉淀"}]},
    {root: "coagul", phonetic: "/kəʊˈæɡjuleɪt/", meaning: "凝聚", words: [{w: "coagulate", m: "凝聚"}, {w: "coagulation", m: "凝聚作用"}, {w: "coagulant", m: "凝聚剂"}, {w: "flocculation", m: "絮凝"}]},
    {root: "sediment", phonetic: "/ˈsedɪmənt/", meaning: "沉降", words: [{w: "sediment", m: "沉淀物"}, {w: "sedimentation", m: "沉降"}, {w: "sedimentary", m: "沉积的"}, {w: "sedimentation rate", m: "沉降速率"}]},
    {root: "crystalliz", phonetic: "/ˈkrɪstəlaɪz/", meaning: "结晶", words: [{w: "crystallize", m: "结晶"}, {w: "crystallization", m: "结晶"}, {w: "crystallizer", m: "结晶器"}, {w: "recrystallization", m: "重结晶"}]},
    {root: "sublim", phonetic: "/ˈsʌblɪm/", meaning: "升华", words: [{w: "sublime", m: "升华"}, {w: "sublimation", m: "升华"}, {w: "sublimate", m: "升华物"}, {w: "resublimation", m: "再升华"}]},
    {root: "evapor", phonetic: "/ɪˈvæpəreɪt/", meaning: "蒸发", words: [{w: "evaporate", m: "蒸发"}, {w: "evaporation", m: "蒸发"}, {w: "evaporator", m: "蒸发器"}, {w: "flash evaporation", m: "闪蒸"}]},
    // 251-260
    {root: "condens", phonetic: "/kənˈdens/", meaning: "冷凝", words: [{w: "condense", m: "冷凝"}, {w: "condensation", m: "冷凝"}, {w: "condenser", m: "冷凝器"}, {w: "condensate", m: "冷凝液"}]},
    {root: "boil", phonetic: "/bɔɪl/", meaning: "沸腾", words: [{w: "boil", m: "沸腾"}, {w: "boiling point", m: "沸点"}, {w: "boiler", m: "锅炉"}, {w: "boiling", m: "沸腾的"}]},
    {root: "freez", phonetic: "/friːz/", meaning: "凝固", words: [{w: "freeze", m: "凝固"}, {w: "freezing point", m: "凝固点"}, {w: "freezer", m: "冷冻机"}, {w: "freezing", m: "冷冻"}]},
    {root: "melt", phonetic: "/melt/", meaning: "熔化", words: [{w: "melt", m: "熔化"}, {w: "melting point", m: "熔点"}, {w: "melting", m: "熔化"}, {w: "remelt", m: "再熔化"}]},
    {root: "dissolv", phonetic: "/dɪˈzɒlv/", meaning: "溶解", words: [{w: "dissolve", m: "溶解"}, {w: "dissolution", m: "溶解"}, {w: "dissolved", m: "溶解的"}, {w: "solubility", m: "溶解度"}]},
    {root: "satur", phonetic: "/ˈsætʃəreɪt/", meaning: "饱和", words: [{w: "saturate", m: "使饱和"}, {w: "saturation", m: "饱和"}, {w: "saturated", m: "饱和的"}, {w: "unsaturated", m: "不饱和的"}]},
    {root: "supersatur", phonetic: "/ˌsuːpəˈsætʃəreɪt/", meaning: "过饱和", words: [{w: "supersaturate", m: "使过饱和"}, {w: "supersaturation", m: "过饱和"}, {w: "supersaturated", m: "过饱和的"}, {w: "supersaturated solution", m: "过饱和溶液"}]},
    {root: "miscibl", phonetic: "/ˈmɪsəbl/", meaning: "混溶", words: [{w: "miscible", m: "可混溶的"}, {w: "miscibility", m: "混溶性"}, {w: "immiscible", m: "不混溶的"}, {w: "partially miscible", m: "部分混溶"}]},
    {root: "immiscibl", phonetic: "/ɪˈmɪsəbl/", meaning: "不混溶", words: [{w: "immiscible", m: "不混溶的"}, {w: "immiscibility", m: "不混溶性"}, {w: "immiscible liquid", m: "不混溶液体"}, {w: "mutually immiscible", m: "互不混溶"}]},
    {root: "emulsif", phonetic: "/ɪˈmʌlsɪfaɪ/", meaning: "乳化", words: [{w: "emulsify", m: "乳化"}, {w: "emulsification", m: "乳化"}, {w: "emulsifier", m: "乳化剂"}, {w: "emulsion", m: "乳液"}]},
    // 261-270
    {root: "dispers", phonetic: "/dɪˈspɜːs/", meaning: "分散", words: [{w: "disperse", m: "分散"}, {w: "dispersion", m: "分散"}, {w: "dispersant", m: "分散剂"}, {w: "dispersity", m: "分散度"}]},
    {root: "suspens", phonetic: "/səˈspenʃən/", meaning: "悬浮", words: [{w: "suspension", m: "悬浮液"}, {w: "suspend", m: "悬浮"}, {w: "suspended", m: "悬浮的"}, {w: "suspending agent", m: "悬浮剂"}]},
    {root: "colloid", phonetic: "/ˈkɒlɔɪd/", meaning: "胶体", words: [{w: "colloid", m: "胶体"}, {w: "colloidal", m: "胶体的"}, {w: "colloidal solution", m: "胶体溶液"}, {w: "colloid chemistry", m: "胶体化学"}]},
    {root: "gel", phonetic: "/dʒel/", meaning: "凝胶", words: [{w: "gel", m: "凝胶"}, {w: "gelation", m: "胶凝"}, {w: "gelling agent", m: "胶凝剂"}, {w: "hydrogel", m: "水凝胶"}]},
    {root: "aerosol", phonetic: "/ˈeərəsɒl/", meaning: "气溶胶", words: [{w: "aerosol", m: "气溶胶"}, {w: "aerosol spray", m: "气雾剂"}, {w: "aerosol particle", m: "气溶胶颗粒"}, {w: "aerosol formation", m: "气溶胶形成"}]},
    {root: "foam", phonetic: "/fəʊm/", meaning: "泡沫", words: [{w: "foam", m: "泡沫"}, {w: "foaming", m: "起泡"}, {w: "foaming agent", m: "起泡剂"}, {w: "foam stabilizer", m: "泡沫稳定剂"}]},
    {root: "surfact", phonetic: "/sɜːˈfæktənt/", meaning: "表面活性剂", words: [{w: "surfactant", m: "表面活性剂"}, {w: "surface active agent", m: "表面活性剂"}, {w: "anionic surfactant", m: "阴离子表面活性剂"}, {w: "nonionic surfactant", m: "非离子表面活性剂"}]},
    {root: "deterg", phonetic: "/dɪˈtɜːdʒənt/", meaning: "洗涤剂", words: [{w: "detergent", m: "洗涤剂"}, {w: "detergency", m: "去垢力"}, {w: "synthetic detergent", m: "合成洗涤剂"}, {w: "liquid detergent", m: "液体洗涤剂"}]},
    {root: "wett", phonetic: "/ˈwetɪŋ/", meaning: "润湿", words: [{w: "wetting", m: "润湿"}, {w: "wetting agent", m: "润湿剂"}, {w: "wettability", m: "润湿性"}, {w: "contact angle", m: "接触角"}]},
    {root: "interfac", phonetic: "/ˈɪntəfeɪs/", meaning: "界面", words: [{w: "interface", m: "界面"}, {w: "interfacial", m: "界面的"}, {w: "interfacial tension", m: "界面张力"}, {w: "oil-water interface", m: "油水界面"}]},
    // 271-280
    {root: "tens", phonetic: "/ˈtenʃən/", meaning: "张力", words: [{w: "tension", m: "张力"}, {w: "surface tension", m: "表面张力"}, {w: "interfacial tension", m: "界面张力"}, {w: "tensiometer", m: "张力计"}]},
    {root: "viscos", phonetic: "/ˈvɪskəs/", meaning: "粘度", words: [{w: "viscosity", m: "粘度"}, {w: "viscous", m: "粘的"}, {w: "viscometer", m: "粘度计"}, {w: "kinematic viscosity", m: "运动粘度"}]},
    {root: "rheolog", phonetic: "/rɪˈɒlədʒi/", meaning: "流变学", words: [{w: "rheology", m: "流变学"}, {w: "rheological", m: "流变的"}, {w: "rheometer", m: "流变仪"}, {w: "non-Newtonian", m: "非牛顿流体"}]},
    {root: "plastic", phonetic: "/ˈplæstɪk/", meaning: "塑性", words: [{w: "plastic", m: "塑料"}, {w: "plasticity", m: "塑性"}, {w: "plasticizer", m: "增塑剂"}, {w: "thermoplastic", m: "热塑性塑料"}]},
    {root: "elastomer", phonetic: "/ɪˈlæstəmə/", meaning: "弹性体", words: [{w: "elastomer", m: "弹性体"}, {w: "elastic", m: "弹性的"}, {w: "elasticity", m: "弹性"}, {w: "thermoset", m: "热固性塑料"}]},
    {root: "fiber", phonetic: "/ˈfaɪbə/", meaning: "纤维", words: [{w: "fiber", m: "纤维"}, {w: "fibrous", m: "纤维状的"}, {w: "synthetic fiber", m: "合成纤维"}, {w: "carbon fiber", m: "碳纤维"}]},
    {root: "resin", phonetic: "/ˈrezɪn/", meaning: "树脂", words: [{w: "resin", m: "树脂"}, {w: "resinous", m: "树脂的"}, {w: "epoxy resin", m: "环氧树脂"}, {w: "ion exchange resin", m: "离子交换树脂"}]},
    {root: "adhes", phonetic: "/ədˈhiːsɪv/", meaning: "粘合剂", words: [{w: "adhesive", m: "粘合剂"}, {w: "adhesion", m: "粘附"}, {w: "cohesive", m: "内聚的"}, {w: "adhesive tape", m: "胶带"}]},
    {root: "coating", phonetic: "/ˈkəʊtɪŋ/", meaning: "涂料", words: [{w: "coating", m: "涂料"}, {w: "coat", m: "涂层"}, {w: "protective coating", m: "保护涂层"}, {w: "powder coating", m: "粉末涂料"}]},
    {root: "paint", phonetic: "/peɪnt/", meaning: "油漆", words: [{w: "paint", m: "油漆"}, {w: "painting", m: "涂装"}, {w: "paint thinner", m: "稀释剂"}, {w: "anti-corrosive paint", m: "防腐漆"}]},
    // 281-290
    {root: "pigment", phonetic: "/ˈpɪɡmənt/", meaning: "颜料", words: [{w: "pigment", m: "颜料"}, {w: "pigmentation", m: "着色"}, {w: "inorganic pigment", m: "无机颜料"}, {w: "organic pigment", m: "有机颜料"}]},
    {root: "dye", phonetic: "/daɪ/", meaning: "染料", words: [{w: "dye", m: "染料"}, {w: "dyeing", m: "染色"}, {w: "dyestuff", m: "染料"}, {w: "reactive dye", m: "活性染料"}]},
    {root: "ink", phonetic: "/ɪŋk/", meaning: "油墨", words: [{w: "ink", m: "油墨"}, {w: "printing ink", m: "印刷油墨"}, {w: "inkjet", m: "喷墨"}, {w: "ink formulation", m: "油墨配方"}]},
    {root: "lacquer", phonetic: "/ˈlækə/", meaning: "清漆", words: [{w: "lacquer", m: "清漆"}, {w: "lacquering", m: "涂漆"}, {w: "nitrocellulose lacquer", m: "硝基清漆"}, {w: "acrylic lacquer", m: "丙烯酸清漆"}]},
    {root: "varnish", phonetic: "/ˈvɑːnɪʃ/", meaning: "清漆", words: [{w: "varnish", m: "清漆"}, {w: "varnishing", m: "上清漆"}, {w: "oil varnish", m: "油性清漆"}, {w: "spirit varnish", m: "醇溶性清漆"}]},
    {root: "enamel", phonetic: "/ɪˈnæməl/", meaning: "搪瓷", words: [{w: "enamel", m: "搪瓷"}, {w: "enameling", m: "搪瓷加工"}, {w: "porcelain enamel", m: "搪瓷"}, {w: "enamel paint", m: "瓷漆"}]},
    {root: "glaz", phonetic: "/ɡleɪz/", meaning: "釉", words: [{w: "glaze", m: "釉"}, {w: "glazing", m: "上釉"}, {w: "ceramic glaze", m: "陶瓷釉"}, {w: "glazed", m: "上釉的"}]},
    {root: "polish", phonetic: "/ˈpɒlɪʃ/", meaning: "抛光", words: [{w: "polish", m: "抛光"}, {w: "polishing", m: "抛光"}, {w: "polishing agent", m: "抛光剂"}, {w: "metal polish", m: "金属抛光剂"}]},
    {root: "wax", phonetic: "/wæks/", meaning: "蜡", words: [{w: "wax", m: "蜡"}, {w: "waxing", m: "上蜡"}, {w: "paraffin wax", m: "石蜡"}, {w: "microcrystalline wax", m: "微晶蜡"}]},
    {root: "greas", phonetic: "/ɡriːs/", meaning: "润滑脂", words: [{w: "grease", m: "润滑脂"}, {w: "greasing", m: "涂脂"}, {w: "lithium grease", m: "锂基脂"}, {w: "silicone grease", m: "硅脂"}]},
    // 291-300
    {root: "lubric", phonetic: "/ˈluːbrɪkənt/", meaning: "润滑剂", words: [{w: "lubricant", m: "润滑剂"}, {w: "lubricate", m: "润滑"}, {w: "lubrication", m: "润滑"}, {w: "lubricating oil", m: "润滑油"}]},
    {root: "oil", phonetic: "/ɔɪl/", meaning: "油", words: [{w: "oil", m: "油"}, {w: "oily", m: "油状的"}, {w: "crude oil", m: "原油"}, {w: "essential oil", m: "精油"}]},
    {root: "fat", phonetic: "/fæt/", meaning: "脂肪", words: [{w: "fat", m: "脂肪"}, {w: "fatty", m: "脂肪的"}, {w: "fatty acid", m: "脂肪酸"}, {w: "fatty alcohol", m: "脂肪醇"}]},
    {root: "lipid", phonetic: "/ˈlɪpɪd/", meaning: "脂质", words: [{w: "lipid", m: "脂质"}, {w: "lipids", m: "脂类"}, {w: "polar lipid", m: "极性脂质"}, {w: "neutral lipid", m: "中性脂质"}]},
    {root: "glycer", phonetic: "/ˈɡlɪsərɒl/", meaning: "甘油", words: [{w: "glycerol", m: "甘油"}, {w: "glycerin", m: "甘油"}, {w: "glyceride", m: "甘油酯"}, {w: "triglyceride", m: "甘油三酯"}]},
    {root: "ester", phonetic: "/ˈestə/", meaning: "酯", words: [{w: "ester", m: "酯"}, {w: "esterification", m: "酯化"}, {w: "esterify", m: "酯化"}, {w: "polyester", m: "聚酯"}]},
    {root: "ether", phonetic: "/ˈiːθə/", meaning: "醚", words: [{w: "ether", m: "醚"}, {w: "etherification", m: "醚化"}, {w: "crown ether", m: "冠醚"}, {w: "diethyl ether", m: "乙醚"}]},
    {root: "ketone", phonetic: "/ˈkiːtəʊn/", meaning: "酮", words: [{w: "ketone", m: "酮"}, {w: "ketonic", m: "酮的"}, {w: "acetone", m: "丙酮"}, {w: "methyl ethyl ketone", m: "甲乙酮"}]},
    {root: "aldehyd", phonetic: "/ˈældɪhaɪd/", meaning: "醛", words: [{w: "aldehyde", m: "醛"}, {w: "aldehydic", m: "醛的"}, {w: "formaldehyde", m: "甲醛"}, {w: "acetaldehyde", m: "乙醛"}]},
    {root: "carboxyl", phonetic: "/kɑːˈbɒksɪl/", meaning: "羧基", words: [{w: "carboxyl", m: "羧基"}, {w: "carboxylic acid", m: "羧酸"}, {w: "carboxylate", m: "羧酸盐"}, {w: "carboxylation", m: "羧化"}]}
];

// 生成新记录
let newRecords = [];
for (let i = 0; i < roots.length; i++) {
    const idx = i + 201;
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
