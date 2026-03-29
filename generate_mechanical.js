const fs = require('fs');

// 300个机械词根数据
const rootsData = [
  // 201-220: 核心机械运动类
  ["rotat", "/ˈroʊteɪt/", "旋转", ["rotate", "rotation", "rotary", "rotor"]],
  ["frict", "/ˈfrɪkʃn/", "摩擦", ["friction", "frictional", "frictionless", "frictional resistance"]],
  ["tors", "/ˈtɔːrʃn/", "扭转", ["torsion", "torsional", "torque", "torque wrench"]],
  ["vibr", "/ˈvaɪbreɪt/", "振动", ["vibrate", "vibration", "vibrator", "vibrational"]],
  ["compress", "/kəmˈpres/", "压缩", ["compress", "compression", "compressor", "compressed"]],
  ["tens", "/ˈtenʃn/", "张力", ["tension", "tensile", "tensometer", "tensioner"]],
  ["deform", "/dɪˈfɔːrm/", "变形", ["deform", "deformation", "deformable", "deformed"]],
  ["elast", "/ɪˈlæstɪk/", "弹性", ["elastic", "elasticity", "elastomer", "elastic limit"]],
  ["plastic", "/ˈplæstɪk/", "塑性", ["plastic", "plasticity", "plastics", "plastic deformation"]],
  ["strain", "/streɪn/", "应变", ["strain", "strain gauge", "straining", "strain hardening"]],
  ["stress", "/stres/", "应力", ["stress", "stress analysis", "stress relief", "stress concentration"]],
  ["load", "/loʊd/", "载荷", ["load", "loading", "loaded", "load bearing"]],
  ["bear", "/ber/", "承受", ["bear", "bearing", "load bearing", "bearing capacity"]],
  ["lubric", "/ˈluːbrɪkeɪt/", "润滑", ["lubricate", "lubrication", "lubricant", "lubricator"]],
  ["cool", "/kuːl/", "冷却", ["cool", "cooling", "coolant", "cooler"]],
  ["heat", "/hiːt/", "加热", ["heat", "heating", "heater", "heat treatment"]],
  ["weld", "/weld/", "焊接", ["weld", "welding", "welder", "welded"]],
  ["cast", "/kæst/", "铸造", ["cast", "casting", "caster", "cast iron"]],
  ["machin", "/məˈʃiːn/", "加工", ["machine", "machining", "machined", "machine tool"]],
  ["grind", "/ɡraɪnd/", "磨削", ["grind", "grinding", "grinder", "ground"]],
  // 221-240: 零部件类
  ["ax", "/æks/", "轴", ["axle", "axis", "axial", "coaxial"]],
  ["bear", "/ˈberɪŋ/", "轴承", ["bearing", "ball bearing", "roller bearing", "bearing housing"]],
  ["gear", "/ɡɪr/", "齿轮", ["gear", "gearing", "gearbox", "geared"]],
  ["belt", "/belt/", "带", ["belt", "belt drive", "conveyor belt", "timing belt"]],
  ["chain", "/tʃeɪn/", "链", ["chain", "chain drive", "roller chain", "chain sprocket"]],
  ["pulley", "/ˈpʊli/", "滑轮", ["pulley", "pulley block", "belt pulley", "pulley system"]],
  ["cam", "/kæm/", "凸轮", ["cam", "camshaft", "cam profile", "cam mechanism"]],
  ["valv", "/vælv/", "阀", ["valve", "valve stem", "valve seat", "solenoid valve"]],
  ["pump", "/pʌmp/", "泵", ["pump", "pumping", "centrifugal pump", "hydraulic pump"]],
  ["cylind", "/ˈsɪlɪndər/", "气缸", ["cylinder", "cylindrical", "cylinder block", "cylinder head"]],
  ["piston", "/ˈpɪstən/", "活塞", ["piston", "piston ring", "piston rod", "piston pin"]],
  ["crank", "/kræŋk/", "曲柄", ["crank", "crankshaft", "crank mechanism", "crank arm"]],
  ["rod", "/rɑːd/", "杆", ["rod", "connecting rod", "push rod", "tie rod"]],
  ["spring", "/sprɪŋ/", "弹簧", ["spring", "coil spring", "leaf spring", "torsion spring"]],
  ["seal", "/siːl/", "密封", ["seal", "sealing", "sealer", "oil seal"]],
  ["gasket", "/ˈɡæskɪt/", "垫片", ["gasket", "sealing gasket", "gasket seal", "gasket material"]],
  ["bolt", "/boʊlt/", "螺栓", ["bolt", "bolting", "bolt head", "anchor bolt"]],
  ["nut", "/nʌt/", "螺母", ["nut", "nut bolt", "hex nut", "lock nut"]],
  ["screw", "/skruː/", "螺钉", ["screw", "screwdriver", "screw thread", "machine screw"]],
  ["rivet", "/ˈrɪvɪt/", "铆钉", ["rivet", "riveting", "riveted joint", "blind rivet"]],
  // 241-260: 材料与制造
  ["steel", "/stiːl/", "钢", ["steel", "stainless steel", "carbon steel", "alloy steel"]],
  ["iron", "/ˈaɪərn/", "铁", ["iron", "cast iron", "wrought iron", "iron ore"]],
  ["alloy", "/ˈælɔɪ/", "合金", ["alloy", "alloying", "aluminum alloy", "copper alloy"]],
  ["metall", "/ˈmetl/", "金属", ["metal", "metallic", "metallurgy", "metalworking"]],
  ["ceram", "/səˈræmɪk/", "陶瓷", ["ceramic", "ceramics", "ceramic coating", "advanced ceramics"]],
  ["compos", "/kəmˈpɑːzɪt/", "复合材料", ["composite", "composition", "fiber composite", "composite material"]],
  ["polymer", "/ˈpɑːlɪmər/", "聚合物", ["polymer", "polymeric", "polymerization", "synthetic polymer"]],
  ["elast", "/ɪˈlæstəmər/", "弹性体", ["elastomer", "elastomeric", "rubber elastomer", "seal elastomer"]],
  ["rubber", "/ˈrʌbər/", "橡胶", ["rubber", "rubber seal", "synthetic rubber", "rubber gasket"]],
  ["fiber", "/ˈfaɪbər/", "纤维", ["fiber", "fiber optic", "carbon fiber", "glass fiber"]],
  ["coat", "/koʊt/", "涂层", ["coat", "coating", "coated", "protective coating"]],
  ["plat", "/pleɪt/", "镀层", ["plate", "plating", "electroplating", "chrome plating"]],
  ["harden", "/ˈhɑːrdn/", "硬化", ["harden", "hardening", "hardened", "case hardening"]],
  ["temper", "/ˈtempər/", "回火", ["temper", "tempering", "tempered", "tempered steel"]],
  ["quench", "/kwentʃ/", "淬火", ["quench", "quenching", "quenched", "oil quench"]],
  ["anneal", "/əˈniːl/", "退火", ["anneal", "annealing", "annealed", "stress relief annealing"]],
  ["forge", "/fɔːrdʒ/", "锻造", ["forge", "forging", "forged", "drop forging"]],
  ["mill", "/mɪl/", "铣削", ["mill", "milling", "milling cutter", "end mill"]],
  ["turn", "/tɜːrn/", "车削", ["turn", "turning", "lathe turning", "turning tool"]],
  ["drill", "/drɪl/", "钻孔", ["drill", "drilling", "drill bit", "drill press"]],
  // 261-280: 动力与传动
  ["motor", "/ˈmoʊtər/", "电机", ["motor", "motor drive", "electric motor", "servo motor"]],
  ["engin", "/ˈendʒɪn/", "发动机", ["engine", "engineer", "engineering", "combustion engine"]],
  ["turb", "/ˈtɜːrbaɪn/", "涡轮", ["turbine", "turbine blade", "gas turbine", "steam turbine"]],
  ["turbo", "/ˈtɜːrboʊ/", "涡轮增压", ["turbo", "turbocharger", "turbocharged", "twin turbo"]],
  ["combust", "/kəmˈbʌst/", "燃烧", ["combust", "combustion", "combustor", "combustion chamber"]],
  ["ignit", "/ɪɡˈnaɪt/", "点火", ["ignite", "ignition", "igniter", "ignition system"]],
  ["inject", "/ɪnˈdʒekt/", "喷射", ["inject", "injection", "injector", "fuel injection"]],
  ["carbur", "/ˈkɑːrbjʊr/", "化油器", ["carburetor", "carburetion", "carb", "fuel carburetor"]],
  ["exhaust", "/ɪɡˈzɔːst/", "排气", ["exhaust", "exhaust pipe", "exhaust gas", "exhaust valve"]],
  ["intake", "/ˈɪnteɪk/", "进气", ["intake", "intake valve", "air intake", "intake manifold"]],
  ["manifold", "/ˈmænɪfoʊld/", "歧管", ["manifold", "exhaust manifold", "intake manifold", "manifold pressure"]],
  ["transmiss", "/trænzˈmɪʃn/", "传动", ["transmission", "transmit", "gear transmission", "automatic transmission"]],
  ["clutch", "/klʌtʃ/", "离合器", ["clutch", "clutch plate", "clutch pedal", "clutch mechanism"]],
  ["brak", "/breɪk/", "制动", ["brake", "braking", "disc brake", "hydraulic brake"]],
  ["differ", "/ˈdɪfrəntʃl/", "差速器", ["differential", "differentiation", "differential gear", "limited slip differential"]],
  ["driv", "/draɪv/", "驱动", ["drive", "driving", "driven", "drive shaft"]],
  ["propel", "/prəˈpel/", "推进", ["propel", "propeller", "propulsion", "propulsion system"]],
  ["hydraul", "/haɪˈdrɔːlɪk/", "液压", ["hydraulic", "hydraulics", "hydraulic pump", "hydraulic cylinder"]],
  ["pneumat", "/nuːˈmætɪk/", "气动", ["pneumatic", "pneumatics", "pneumatic cylinder", "pneumatic valve"]],
  ["actuat", "/ˈæktʃueɪt/", "驱动器", ["actuate", "actuator", "actuation", "linear actuator"]],
  // 281-300: 控制与测量
  ["sens", "/sens/", "传感器", ["sensor", "sense", "sensing", "pressure sensor"]],
  ["actuat", "/ˈæktʃueɪtər/", "执行器", ["actuator", "actuation", "actuate", "electric actuator"]],
  ["servo", "/ˈsɜːrvoʊ/", "伺服", ["servo", "servomotor", "servo system", "servo valve"]],
  ["feedbak", "/ˈfiːdbæk/", "反馈", ["feedback", "feedback loop", "feedback control", "negative feedback"]],
  ["control", "/kənˈtroʊl/", "控制", ["control", "controller", "controlling", "control system"]],
  ["automat", "/ˈɔːtəmət/", "自动", ["automatic", "automation", "automate", "automatic control"]],
  ["regul", "/ˈreɡjuleɪt/", "调节", ["regulate", "regulator", "regulation", "pressure regulator"]],
  ["valv", "/vælv/", "阀门", ["valve", "valve control", "solenoid valve", "control valve"]],
  ["gaug", "/ɡeɪdʒ/", "量规", ["gauge", "pressure gauge", "strain gauge", "thickness gauge"]],
  ["meter", "/ˈmiːtər/", "仪表", ["meter", "flow meter", "speed meter", "pressure meter"]],
  ["monitor", "/ˈmɑːnɪtər/", "监控", ["monitor", "monitoring", "condition monitoring", "vibration monitor"]],
  ["measur", "/ˈmeʒər/", "测量", ["measure", "measurement", "measuring", "precision measurement"]],
  ["calibr", "/ˈkælɪbreɪt/", "校准", ["calibrate", "calibration", "calibrated", "calibration tool"]],
  ["align", "/əˈlaɪn/", "对准", ["align", "alignment", "aligned", "shaft alignment"]],
  ["balanc", "/ˈbæləns/", "平衡", ["balance", "balancing", "balanced", "dynamic balance"]],
  ["calcul", "/ˈkælkjuleɪt/", "计算", ["calculate", "calculation", "calculator", "computer aided design"]],
  ["simul", "/ˈsɪmjuleɪt/", "模拟", ["simulate", "simulation", "simulator", "computer simulation"]],
  ["optim", "/ˈɑːptɪmaɪz/", "优化", ["optimize", "optimization", "optimal", "design optimization"]],
  ["analyz", "/ˈænəlaɪz/", "分析", ["analyze", "analysis", "analyzer", "finite element analysis"]],
  ["diagnos", "/ˌdaɪəɡˈnoʊs/", "诊断", ["diagnose", "diagnosis", "diagnostic", "fault diagnosis"]]
];

// 生成条目
const entries = [];
for (let i = 0; i < rootsData.length; i++) {
  const [root, phonetic, meaning, wordsList] = rootsData[i];
  const id = 201 + i;

  const entry = {
    id: id,
    root: root,
    phonetic: phonetic,
    partOfSpeech: "root",
    meaning: meaning,
    frequency: id,
    category: "机械",
    words: [],
    phrases: [],
    mnemonic: `${root}→${meaning}`
  };

  // 为每个词根生成单词
  for (const word of wordsList) {
    entry.words.push({
      word: word,
      phonetic: phonetic,
      partOfSpeech: "n.",
      meaning: meaning,
      memoryTip: `词根 ${root}`,
      root: root,
      rootPhonetic: phonetic,
      rootMeaning: meaning,
      rootPhrases: wordsList.slice(0, 4),
      wordPhrases: wordsList.slice(0, 4)
    });
  }

  // 添加短语
  entry.phrases = wordsList.slice(0, 4).map(w => `${w} (待翻译)`);

  entries.push(entry);
}

// 读取原文件
let content = fs.readFileSync('src/data/mechanical.json', 'utf8');

// 移除最后的 ]
content = content.trim();
if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

// 添加逗号
if (content.trim().endsWith('}')) {
  content = content + ',\n';
}

// 添加新条目
const newEntriesJson = JSON.stringify(entries, null, 2);
content = content + newEntriesJson.slice(1, -1) + '\n]';

// 写入文件
fs.writeFileSync('src/data/mechanical.json', content, 'utf8');

console.log(`成功添加 ${entries.length} 个新词根到 mechanical.json`);
