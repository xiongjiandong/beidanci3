import fs from 'fs';

// 额外200个机械词根数据 (301-500)
const rootsData = [
  // 301-320: 结构与设计
  ["struct", "/ˈstrʌktʃər/", "结构", ["structure", "structural", "structure design", "load bearing structure"]],
  ["fram", "/freɪm/", "框架", ["frame", "framing", "framework", "chassis frame"]],
  ["chassis", "/ˈʃæsi/", "底盘", ["chassis", "chassis frame", "vehicle chassis", "chassis design"]],
  ["bodi", "/ˈbɑːdi/", "车身", ["body", "bodywork", "car body", "body structure"]],
  ["hous", "/haʊz/", "壳体", ["housing", "house", "gear housing", "bearing housing"]],
  ["cas", "/kæs/", "箱体", ["case", "casing", "gear case", "crankcase"]],
  ["cov", "/kʌvər/", "罩盖", ["cover", "covering", "end cover", "protective cover"]],
  ["support", "/səˈpɔːrt/", "支撑", ["support", "supporting", "supported", "structural support"]],
  ["mount", "/maʊnt/", "安装", ["mount", "mounting", "mounted", "engine mount"]],
  ["fixtur", "/ˈfɪkstʃər/", "夹具", ["fixture", "fixturing", "workpiece fixture", "welding fixture"]],
  ["tool", "/tuːl/", "工具", ["tool", "tooling", "machine tool", "cutting tool"]],
  ["dies", "/daɪ/", "模具", ["die", "dies", "punch die", "casting die"]],
  ["mold", "/moʊld/", "铸模", ["mold", "molding", "molded", "injection mold"]],
  ["assembl", "/əˈsembl/", "装配", ["assemble", "assembly", "assembling", "assembly line"]],
  ["fit", "/fɪt/", "配合", ["fit", "fitting", "fitted", "interference fit"]],
  ["toler", "/ˈtɑːlərəns/", "公差", ["tolerance", "tolerant", "dimensional tolerance", "tolerance fit"]],
  ["clear", "/ˈklɪərəns/", "间隙", ["clearance", "clear", "radial clearance", "axial clearance"]],
  ["interfer", "/ˌɪntərˈfɪr/", "干涉", ["interference", "interfere", "interference fit", "wave interference"]],
  ["draft", "/dræft/", "拔模", ["draft", "draft angle", "draft design", "pattern draft"]],
  ["taper", "/ˈteɪpər/", "锥度", ["taper", "tapered", "taper pin", "taper angle"]],
  // 321-340: 连接与紧固
  ["join", "/dʒɔɪn/", "连接", ["join", "joint", "joining", "welded joint"]],
  ["fasten", "/ˈfæsn/", "紧固", ["fasten", "fastener", "fastening", "threaded fastener"]],
  ["connect", "/kəˈnekt/", "连接", ["connect", "connection", "connector", "pipe connection"]],
  ["coupl", "/ˈkʌplɪŋ/", "联轴器", ["coupling", "couple", "shaft coupling", "flexible coupling"]],
  ["splin", "/splaɪn/", "花键", ["spline", "splined", "spline shaft", "involute spline"]],
  ["key", "/kiː/", "键", ["key", "keyway", "key seat", "feather key"]],
  ["pin", "/pɪn/", "销", ["pin", "pinning", "cotter pin", "dowel pin"]],
  ["thread", "/θred/", "螺纹", ["thread", "threading", "threaded", "screw thread"]],
  ["pitch", "/pɪtʃ/", "螺距", ["pitch", "thread pitch", "pitch diameter", "circular pitch"]],
  ["helix", "/ˈhiːlɪks/", "螺旋", ["helix", "helical", "helical gear", "helix angle"]],
  ["slot", "/slɑːt/", "槽", ["slot", "slotted", "key slot", "t-slot"]],
  ["groov", "/ɡruːv/", "沟槽", ["groove", "grooved", "o-ring groove", "seal groove"]],
  ["recess", "/rɪˈses/", "凹槽", ["recess", "recessed", "recessed area", "recess design"]],
  ["flang", "/flændʒ/", "法兰", ["flange", "flanged", "pipe flange", "flange connection"]],
  ["hub", "/hʌb/", "轮毂", ["hub", "wheel hub", "hub assembly", "hub bearing"]],
  ["collar", "/ˈkɑːlər/", "轴环", ["collar", "collared", "shaft collar", "set collar"]],
  ["sleeve", "/sliːv/", "套筒", ["sleeve", "sleeve bearing", "coupling sleeve", "protective sleeve"]],
  ["bush", "/bʊʃ/", "衬套", ["bush", "bushing", "bronze bushing", "rubber bushing"]],
  ["spac", "/speɪsər/", "垫片", ["spacer", "spacing", "spaced", "bearing spacer"]],
  ["wash", "/ˈwɑːʃər/", "垫圈", ["washer", "wash", "lock washer", "plain washer"]],
  // 341-360: 表面处理
  ["surfac", "/ˈsɜːrfɪs/", "表面", ["surface", "surfacing", "surface finish", "surface treatment"]],
  ["finish", "/ˈfɪnɪʃ/", "表面粗糙度", ["finish", "finishing", "surface finish", "finish machining"]],
  ["polish", "/ˈpɑːlɪʃ/", "抛光", ["polish", "polishing", "polished", "mirror polish"]],
  ["buff", "/bʌf/", "打磨", ["buff", "buffing", "buffer", "polishing buff"]],
  ["sand", "/sænd/", "喷砂", ["sand", "sanding", "sandblast", "sandblasting"]],
  ["shot", "/ʃɑːt/", "喷丸", ["shot", "shot peening", "shot blasting", "peening shot"]],
  ["etch", "/etʃ/", "蚀刻", ["etch", "etching", "etched", "chemical etching"]],
  ["anod", "/ˈænəʊdaɪz/", "阳极氧化", ["anodize", "anodizing", "anodized", "hard anodized"]],
  ["galvan", "/ˈɡælvənaɪz/", "镀锌", ["galvanize", "galvanizing", "galvanized", "hot dip galvanized"]],
  ["chrom", "/ˈkroʊmiəm/", "镀铬", ["chrome", "chromium", "chrome plating", "hard chrome"]],
  ["nickel", "/ˈnɪkl/", "镀镍", ["nickel", "nickel plating", "electroless nickel", "nickel alloy"]],
  ["phosphat", "/ˈfɑːsfət/", "磷化", ["phosphate", "phosphating", "phosphate coating", "zinc phosphate"]],
  ["oxid", "/ˈɑːksaɪd/", "氧化", ["oxide", "oxidation", "oxidize", "oxide layer"]],
  ["corros", "/kəˈroʊʒn/", "腐蚀", ["corrosion", "corrode", "corrosive", "anti-corrosion"]],
  ["rust", "/rʌst/", "锈蚀", ["rust", "rusting", "rusty", "anti-rust"]],
  ["patin", "/pəˈtiːnə/", "铜绿", ["patina", "patination", "copper patina", "surface patina"]],
  ["paint", "/peɪnt/", "涂装", ["paint", "painting", "painted", "spray painting"]],
  ["powder", "/ˈpaʊdər/", "粉末", ["powder", "powder coating", "powder metal", "powder metallurgy"]],
  ["coat", "/koʊt/", "涂层", ["coating", "coat", "protective coating", "wear resistant coating"]],
  ["varnish", "/ˈvɑːrnɪʃ/", "清漆", ["varnish", "varnishing", "varnished", "protective varnish"]],
  // 361-380: 特种加工
  ["edm", "/iː diː em/", "电火花", ["EDM", "electrical discharge", "wire EDM", "EDM machining"]],
  ["laser", "/ˈleɪzər/", "激光", ["laser", "laser cutting", "laser welding", "laser marking"]],
  ["plasma", "/ˈplæzmə/", "等离子", ["plasma", "plasma cutting", "plasma arc", "plasma spraying"]],
  ["waterjet", "/ˈwɔːtərdʒet/", "水射流", ["waterjet", "water jet cutting", "abrasive waterjet", "waterjet machining"]],
  ["ultrason", "/ˌʌltrəˈsɑːnɪk/", "超声", ["ultrasonic", "ultrasonics", "ultrasonic welding", "ultrasonic cleaning"]],
  ["electrochem", "/ɪˌlektroʊˈkemɪkl/", "电化学", ["electrochemical", "electrochemistry", "electrochemical machining", "electrochemical grinding"]],
  ["ion", "/ˈaɪɑːn/", "离子", ["ion", "ionic", "ion beam", "ion implantation"]],
  ["electron", "/ɪˈlektrɑːn/", "电子", ["electron", "electronic", "electron beam", "electron microscope"]],
  ["cnc", "/siː en siː/", "数控", ["CNC", "computer numerical control", "CNC machine", "CNC milling"]],
  ["cam", "/kæm/", "计算机辅助制造", ["CAM", "computer aided manufacturing", "CAM software", "CAD/CAM"]],
  ["cad", "/kæd/", "计算机辅助设计", ["CAD", "computer aided design", "CAD software", "3D CAD"]],
  ["rapid", "/ˈræpɪd/", "快速", ["rapid", "rapidity", "rapid prototyping", "rapid manufacturing"]],
  ["prototyp", "/ˈproʊtətaɪp/", "原型", ["prototype", "prototyping", "rapid prototype", "functional prototype"]],
  ["addit", "/ˈædɪtɪv/", "增材", ["additive", "addition", "additive manufacturing", "additive process"]],
  ["sinter", "/ˈsɪntər/", "烧结", ["sinter", "sintering", "sintered", "powder sintering"]],
  ["melt", "/melt/", "熔化", ["melt", "melting", "molten", "selective laser melting"]],
  ["deposit", "/dɪˈpɑːzɪt/", "沉积", ["deposit", "deposition", "deposited", "chemical vapor deposition"]],
  ["layer", "/ˈleɪər/", "层", ["layer", "layering", "layered", "layer by layer"]],
  ["build", "/bɪld/", "构建", ["build", "building", "build up", "build plate"]],
  ["support", "/səˈpɔːrt/", "支撑结构", ["support", "supporting", "support structure", "removable support"]],
  // 381-400: 流体与热力学
  ["fluid", "/ˈfluːɪd/", "流体", ["fluid", "fluidic", "fluid mechanics", "working fluid"]],
  ["liquid", "/ˈlɪkwɪd/", "液体", ["liquid", "liquidity", "liquid cooling", "hydraulic liquid"]],
  ["gas", "/ɡæs/", "气体", ["gas", "gaseous", "gas turbine", "compressed gas"]],
  ["vapor", "/ˈveɪpər/", "蒸汽", ["vapor", "vaporize", "vaporization", "water vapor"]],
  ["steam", "/stiːm/", "蒸汽", ["steam", "steaming", "steam engine", "steam turbine"]],
  ["air", "/er/", "空气", ["air", "airflow", "compressed air", "air pressure"]],
  ["oil", "/ɔɪl/", "油", ["oil", "oiling", "oil pump", "lubricating oil"]],
  ["fuel", "/ˈfjuːəl/", "燃料", ["fuel", "fueling", "fossil fuel", "fuel injection"]],
  ["flow", "/floʊ/", "流动", ["flow", "flowing", "flow rate", "fluid flow"]],
  ["pressur", "/ˈpreʃər/", "压力", ["pressure", "pressurize", "pressurized", "atmospheric pressure"]],
  ["vacuum", "/ˈvækjuːm/", "真空", ["vacuum", "vacuum pump", "vacuum chamber", "high vacuum"]],
  ["turbul", "/ˈtɜːrbjələnt/", "湍流", ["turbulent", "turbulence", "turbulent flow", "turbulent boundary"]],
  ["laminar", "/ˈlæmɪnər/", "层流", ["laminar", "laminar flow", "laminar boundary", "laminar separation"]],
  ["viscos", "/vɪsˈkɑːsɪti/", "粘度", ["viscosity", "viscous", "high viscosity", "kinematic viscosity"]],
  ["densit", "/ˈdensɪti/", "密度", ["density", "dense", "power density", "energy density"]],
  ["buoy", "/ˈbuːiənsi/", "浮力", ["buoyancy", "buoyant", "buoyant force", "buoyancy effect"]],
  ["drag", "/dræɡ/", "阻力", ["drag", "dragging", "drag force", "aerodynamic drag"]],
  ["lift", "/lɪft/", "升力", ["lift", "lifting", "lift force", "aerodynamic lift"]],
  ["thrust", "/θrʌst/", "推力", ["thrust", "thrusting", "thrust bearing", "axial thrust"]],
  ["mom", "/ˈmoʊməntəm/", "动量", ["momentum", "moment", "angular momentum", "linear momentum"]],
  // 401-420: 机械设计
  ["design", "/dɪˈzaɪn/", "设计", ["design", "designing", "designer", "mechanical design"]],
  ["draft", "/dræft/", "制图", ["draft", "drafting", "drafter", "technical draft"]],
  ["sketch", "/sketʃ/", "草图", ["sketch", "sketching", "sketched", "conceptual sketch"]],
  ["draw", "/drɔː/", "绘图", ["draw", "drawing", "drawn", "technical drawing"]],
  ["blueprint", "/ˈbluːprɪnt/", "蓝图", ["blueprint", "blueprinting", "construction blueprint", "design blueprint"]],
  ["schemat", "/ˈskiːmætɪk/", "示意图", ["schematic", "schematics", "schematic diagram", "circuit schematic"]],
  ["diagram", "/ˈdaɪəɡræm/", "图表", ["diagram", "diagrammatic", "flow diagram", "block diagram"]],
  ["layout", "/ˈleɪaʊt/", "布局", ["layout", "layout design", "plant layout", "assembly layout"]],
  ["section", "/ˈsekʃn/", "剖面", ["section", "sectional", "cross section", "longitudinal section"]],
  ["elevat", "/ˈelɪveɪt/", "正视图", ["elevation", "elevated", "front elevation", "side elevation"]],
  ["plan", "/plæn/", "平面图", ["plan", "planning", "floor plan", "site plan"]],
  ["detail", "/ˈdiːteɪl/", "详图", ["detail", "detailing", "detailed", "detail drawing"]],
  ["assembl", "/əˈsembli/", "装配图", ["assembly", "assemble", "assembly drawing", "exploded assembly"]],
  ["explod", "/ɪkˈsploʊd/", "爆炸图", ["exploded", "explode", "exploded view", "exploded drawing"]],
  ["bill", "/bɪl/", "物料清单", ["BOM", "bill of materials", "materials bill", "parts list"]],
  ["spec", "/ˈspesɪfɪkeɪʃn/", "规格", ["specification", "specify", "technical specification", "product specification"]],
  ["standard", "/ˈstændərd/", "标准", ["standard", "standardized", "industry standard", "design standard"]],
  ["cod", "/koʊd/", "规范", ["code", "coding", "design code", "building code"]],
  ["criteri", "/kraɪˈtɪriən/", "准则", ["criteria", "criterion", "design criteria", "selection criteria"]],
  ["constraint", "/kənˈstreɪnt/", "约束", ["constraint", "constrained", "design constraint", "geometric constraint"]],
  // 421-440: 强度与可靠性
  ["strength", "/streŋθ/", "强度", ["strength", "strengthen", "tensile strength", "yield strength"]],
  ["yield", "/jiːld/", "屈服", ["yield", "yielding", "yield point", "yield strength"]],
  ["ultimat", "/ˈʌltɪmət/", "极限", ["ultimate", "ultimately", "ultimate strength", "ultimate load"]],
  ["ruptur", "/ˈrʌptʃər/", "断裂", ["rupture", "ruptured", "rupture stress", "tensile rupture"]],
  ["fractur", "/ˈfræktʃər/", "断裂", ["fracture", "fractured", "fracture mechanics", "fatigue fracture"]],
  ["crack", "/kræk/", "裂纹", ["crack", "cracking", "cracked", "stress crack"]],
  ["fatigu", "/fəˈtiːɡ/", "疲劳", ["fatigue", "fatigued", "fatigue life", "fatigue strength"]],
  ["wear", "/wer/", "磨损", ["wear", "wearing", "wearable", "wear resistance"]],
  ["abrasi", "/əˈbreɪʒn/", "磨蚀", ["abrasion", "abrasive", "abrasive wear", "abrasion resistance"]],
  ["eros", "/ɪˈroʊʒn/", "冲蚀", ["erosion", "erode", "erosive", "cavitation erosion"]],
  ["creep", "/kriːp/", "蠕变", ["creep", "creeping", "creep deformation", "creep rupture"]],
  ["buckl", "/ˈbʌkl/", "屈曲", ["buckle", "buckling", "buckled", "elastic buckling"]],
  ["deflect", "/dɪˈflekt/", "挠度", ["deflect", "deflection", "deflected", "maximum deflection"]],
  ["residu", "/rɪˈzɪdjuːəl/", "残余", ["residual", "residue", "residual stress", "residual strain"]],
  ["safet", "/ˈseɪfti/", "安全系数", ["safety", "safe", "safety factor", "factor of safety"]],
  ["reliabil", "/rɪˌlaɪəˈbɪlɪti/", "可靠性", ["reliability", "reliable", "system reliability", "high reliability"]],
  ["durabil", "/ˌdjʊrəˈbɪlɪti/", "耐久性", ["durability", "durable", "long durability", "durability test"]],
  ["maint", "/meɪnˈteɪn/", "维护", ["maintain", "maintenance", "maintained", "preventive maintenance"]],
  ["lifecycl", "/ˈlaɪfˌsaɪkl/", "生命周期", ["lifecycle", "life cycle", "product lifecycle", "lifecycle cost"]],
  ["meantime", "/ˌmiːnˈtaɪm/", "平均时间", ["MTBF", "mean time between failures", "mean time", "failure time"]],
  // 441-460: 自动化与机器人
  ["robot", "/ˈroʊbɑːt/", "机器人", ["robot", "robotic", "robotics", "industrial robot"]],
  ["manipul", "/məˈnɪpjuleɪt/", "操纵器", ["manipulator", "manipulate", "manipulation", "robotic manipulator"]],
  ["grip", "/ɡrɪp/", "夹持器", ["gripper", "grip", "gripping", "robot gripper"]],
  ["end", "/end ɪˈfektər/", "末端执行器", ["end effector", "robot end effector", "end tool", "gripper end effector"]],
  ["actuat", "/ˈæktʃueɪtər/", "执行机构", ["actuator", "actuation", "actuate", "electric actuator"]],
  ["sens", "/sens/", "传感", ["sensor", "sense", "sensing", "force sensor"]],
  ["encod", "/ɪnˈkoʊdər/", "编码器", ["encoder", "encode", "encoding", "rotary encoder"]],
  ["resolv", "/rɪˈzɑːlvər/", "旋转变压器", ["resolver", "resolve", "resolving", "angle resolver"]],
  ["tachom", "/tæˈkɑːmɪtər/", "转速计", ["tachometer", "tacho", "digital tachometer", "laser tachometer"]],
  ["limit", "/ˈlɪmɪt/", "限位", ["limit", "limiting", "limit switch", "travel limit"]],
  ["proxim", "/prɑːkˈsɪmɪti/", "接近", ["proximity", "proximate", "proximity sensor", "proximity switch"]],
  ["vision", "/ˈvɪʒn/", "视觉", ["vision", "visual", "machine vision", "computer vision"]],
  ["camer", "/ˈkæmərə/", "相机", ["camera", "cameral", "industrial camera", "CCD camera"]],
  ["lidar", "/ˈlaɪdɑːr/", "激光雷达", ["LIDAR", "laser radar", "3D LIDAR", "scanning LIDAR"]],
  ["radar", "/ˈreɪdɑːr/", "雷达", ["radar", "radar sensor", "millimeter wave radar", "collision avoidance radar"]],
  ["ultrason", "/ˈʌltrəsaʊnd/", "超声波", ["ultrasound", "ultrasonic", "ultrasonic sensor", "ultrasonic ranging"]],
  ["infrar", "/ˌɪnfrəˈred/", "红外", ["infrared", "IR", "infrared sensor", "infrared detection"]],
  ["program", "/ˈproʊɡræm/", "程序", ["program", "programming", "programmed", "robot program"]],
  ["traject", "/trəˈdʒektəri/", "轨迹", ["trajectory", "traject", "motion trajectory", "trajectory planning"]],
  ["path", "/pæθ/", "路径", ["path", "pathway", "motion path", "optimal path"]],
  // 461-480: 现代制造技术
  ["industr", "/ˈɪndəstri/", "工业", ["industry", "industrial", "industrialization", "Industry 4.0"]],
  ["smart", "/smɑːrt/", "智能", ["smart", "smart factory", "smart manufacturing", "smart product"]],
  ["digit", "/ˈdɪdʒɪtl/", "数字", ["digital", "digitize", "digital twin", "digital manufacturing"]],
  ["cyber", "/ˈsaɪbər/", "网络", ["cyber", "cyber-physical", "cyber system", "cyber security"]],
  ["physic", "/ˈfɪzɪkl/", "物理", ["physical", "physics", "cyber-physical system", "physical system"]],
  ["interconn", "/ˌɪntərkəˈnekt/", "互联", ["interconnect", "interconnection", "interconnected", "interconnected system"]],
  ["cloud", "/klaʊd/", "云", ["cloud", "cloud computing", "cloud platform", "cloud manufacturing"]],
  ["big", "/bɪɡ/", "大数据", ["big data", "data analytics", "data mining", "massive data"]],
  ["artifici", "/ɑːrˈtɪfɪʃl/", "人工", ["artificial", "artificial intelligence", "AI", "machine learning"]],
  ["intellig", "/ɪnˈtelɪdʒənt/", "智能", ["intelligent", "intelligence", "intelligent system", "intelligent manufacturing"]],
  ["learn", "/lɜːrn/", "学习", ["learn", "learning", "machine learning", "deep learning"]],
  ["network", "/ˈnetwɜːrk/", "网络", ["network", "networking", "neural network", "industrial network"]],
  ["neural", "/ˈnʊrəl/", "神经", ["neural", "neuron", "neural network", "artificial neural network"]],
  ["algorithm", "/ˈælɡərɪðəm/", "算法", ["algorithm", "algorithmic", "optimization algorithm", "learning algorithm"]],
  ["predict", "/prɪˈdɪkt/", "预测", ["predict", "prediction", "predictive", "predictive maintenance"]],
  ["monitor", "/ˈmɑːnɪtər/", "监测", ["monitor", "monitoring", "condition monitoring", "remote monitoring"]],
  ["diagnos", "/ˌdaɪəɡˈnɒsɪs/", "诊断", ["diagnosis", "diagnostic", "fault diagnosis", "health diagnosis"]],
  ["prognos", "/prɑːɡˈnoʊsɪs/", "预测", ["prognosis", "prognostic", "prognostics", "remaining useful life"]],
  ["health", "/helθ/", "健康", ["health", "healthy", "system health", "health management"]],
  ["manag", "/ˈmænɪdʒ/", "管理", ["manage", "management", "manager", "asset management"]],
  // 481-500: 可持续制造
  ["green", "/ɡriːn/", "绿色", ["green", "green manufacturing", "green product", "green technology"]],
  ["sustain", "/səˈsteɪn/", "可持续", ["sustainable", "sustainability", "sustain", "sustainable manufacturing"]],
  ["renew", "/rɪˈnjuː/", "可再生", ["renewable", "renew", "renewable energy", "renewable resource"]],
  ["recycl", "/ˌriːˈsaɪkl/", "回收", ["recycle", "recycling", "recyclable", "material recycling"]],
  ["reus", "/riːˈjuːz/", "再利用", ["reuse", "reusing", "reusable", "component reuse"]],
  ["remanufactur", "/ˌriːmænjuˈfæktʃər/", "再制造", ["remanufacture", "remanufacturing", "remanufactured", "engine remanufacturing"]],
  ["refurbish", "/rɪˈfɜːrbɪʃ/", "翻新", ["refurbish", "refurbished", "refurbishment", "equipment refurbishment"]],
  ["retrofit", "/ˈretroʊfɪt/", "改造", ["retrofit", "retrofitting", "retrofitted", "system retrofit"]],
  ["energ", "/ˈenərdʒi/", "能源", ["energy", "energetic", "energy saving", "renewable energy"]],
  ["effic", "/ˈɪfɪʃnsi/", "效率", ["efficiency", "efficient", "energy efficiency", "high efficiency"]],
  ["optim", "/ˈɒptɪmaɪz/", "优化", ["optimize", "optimization", "optimal", "process optimization"]],
  ["clean", "/kliːn/", "清洁", ["clean", "cleaning", "cleaner", "clean production"]],
  ["zero", "/ˈzɪroʊ/", "零", ["zero", "zero defect", "zero waste", "zero emissions"]],
  ["wast", "/weɪst/", "废料", ["waste", "wasted", "wasteful", "waste reduction"]],
  ["emiss", "/ɪˈmɪʃn/", "排放", ["emission", "emit", "emissions", "carbon emissions"]],
  ["carbon", "/ˈkɑːrbən/", "碳", ["carbon", "carbon fiber", "carbon footprint", "carbon neutral"]],
  ["footprint", "/ˈfʊtprɪnt/", "足迹", ["footprint", "carbon footprint", "environmental footprint", "ecological footprint"]],
  ["ecolog", "/iːˈkɑːlədʒi/", "生态", ["ecology", "ecological", "eco-friendly", "ecological design"]],
  ["environ", "/ɪnˈvaɪrənmənt/", "环境", ["environment", "environmental", "environmentally", "environmental protection"]],
  ["circular", "/ˈsɜːrkjələr/", "循环", ["circular", "circle", "circular economy", "circular manufacturing"]]
];

// 生成条目
const entries = [];
for (let i = 0; i < rootsData.length; i++) {
  const [root, phonetic, meaning, wordsList] = rootsData[i];
  const id = 301 + i;

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

console.log(`成功添加 ${entries.length} 个新词根到 mechanical.json，总条目数: ${400 + entries.length}`);
