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

// 定义第3批100个化工词根（401-500）
const roots = [
    // 401-410
    {root: "heat exchanger", phonetic: "/hiːt ɪksˈtʃeɪndʒə/", meaning: "换热器", words: [{w: "heat exchanger", m: "换热器"}, {w: "shell and tube", m: "管壳式"}, {w: "plate exchanger", m: "板式换热器"}, {w: "condenser", m: "冷凝器"}]},
    {root: "cooler", phonetic: "/ˈkuːlə/", meaning: "冷却器", words: [{w: "cooler", m: "冷却器"}, {w: "air cooler", m: "空冷器"}, {w: "water cooler", m: "水冷器"}, {w: "finned cooler", m: "翅片冷却器"}]},
    {root: "heater", phonetic: "/ˈhiːtə/", meaning: "加热器", words: [{w: "heater", m: "加热器"}, {w: "fired heater", m: "火焰加热器"}, {w: "electric heater", m: "电加热器"}, {w: "steam heater", m: "蒸汽加热器"}]},
    {root: "furnace", phonetic: "/ˈfɜːnɪs/", meaning: "炉", words: [{w: "furnace", m: "炉"}, {w: "reformer furnace", m: "转化炉"}, {w: "cracker furnace", m: "裂解炉"}, {w: "rotary kiln", m: "回转窑"}]},
    {root: "kiln", phonetic: "/kɪln/", meaning: "窑", words: [{w: "kiln", m: "窑"}, {w: "cement kiln", m: "水泥窑"}, {w: "lime kiln", m: "石灰窑"}, {w: "tunnel kiln", m: "隧道窑"}]},
    {root: "oven", phonetic: "/ˈʌvən/", meaning: "烘箱", words: [{w: "oven", m: "烘箱"}, {w: "drying oven", m: "干燥箱"}, {w: "muffle furnace", m: "马弗炉"}, {w: "vacuum oven", m: "真空干燥箱"}]},
    {root: "dryer", phonetic: "/ˈdraɪə/", meaning: "干燥器", words: [{w: "dryer", m: "干燥器"}, {w: "rotary dryer", m: "回转干燥器"}, {w: "fluid bed dryer", m: "流化床干燥器"}, {w: "freeze dryer", m: "冷冻干燥器"}]},
    {root: "evaporator", phonetic: "/ɪˈvæpəreɪtə/", meaning: "蒸发器", words: [{w: "evaporator", m: "蒸发器"}, {w: "falling film", m: "降膜蒸发器"}, {w: "rising film", m: "升膜蒸发器"}, {w: "forced circulation", m: "强制循环蒸发器"}]},
    {root: "crystallizer", phonetic: "/ˈkrɪstəlaɪzə/", meaning: "结晶器", words: [{w: "crystallizer", m: "结晶器"}, {w: "cooling crystallizer", m: "冷却结晶器"}, {w: "evaporative crystallizer", m: "蒸发结晶器"}, {w: "vacuum crystallizer", m: "真空结晶器"}]},
    {root: "filter", phonetic: "/ˈfɪltə/", meaning: "过滤器", words: [{w: "filter", m: "过滤器"}, {w: "plate filter", m: "板框过滤器"}, {w: "rotary filter", m: "转鼓过滤机"}, {w: "leaf filter", m: "叶滤机"}]},
    // 411-420
    {root: "centrifuge", phonetic: "/ˈsentrɪfjuːdʒ/", meaning: "离心机", words: [{w: "centrifuge", m: "离心机"}, {w: "basket centrifuge", m: "篮式离心机"}, {w: "decanter", m: "沉降式离心机"}, {w: "disk centrifuge", m: "碟片式离心机"}]},
    {root: "settler", phonetic: "/ˈsetlə/", meaning: "沉降器", words: [{w: "settler", m: "沉降器"}, {w: "gravity settler", m: "重力沉降器"}, {w: "thickener", m: "增稠器"}, {w: "clarifier", m: "澄清器"}]},
    {root: "scrubber", phonetic: "/ˈskrʌbə/", meaning: "洗涤塔", words: [{w: "scrubber", m: "洗涤塔"}, {w: "packed scrubber", m: "填料洗涤塔"}, {w: "venturi scrubber", m: "文丘里洗涤器"}, {w: "spray scrubber", m: "喷淋洗涤塔"}]},
    {root: "absorber", phonetic: "/əbˈzɔːbə/", meaning: "吸收塔", words: [{w: "absorber", m: "吸收塔"}, {w: "packed absorber", m: "填料吸收塔"}, {w: "plate absorber", m: "板式吸收塔"}, {w: "bubble column", m: "鼓泡塔"}]},
    {root: "stripper", phonetic: "/ˈstrɪpə/", meaning: "汽提塔", words: [{w: "stripper", m: "汽提塔"}, {w: "steam stripper", m: "蒸汽汽提塔"}, {w: "air stripper", m: "空气汽提塔"}, {w: "vacuum stripper", m: "真空汽提塔"}]},
    {root: "extractor", phonetic: "/ɪkˈstræktə/", meaning: "萃取塔", words: [{w: "extractor", m: "萃取塔"}, {w: "mixer-settler", m: "混合澄清槽"}, {w: "pulsed column", m: "脉冲萃取柱"}, {w: "centrifugal extractor", m: "离心萃取器"}]},
    {root: "distillation column", phonetic: "/ˌdɪstɪˈleɪʃən ˈkɒləm/", meaning: "精馏塔", words: [{w: "distillation column", m: "精馏塔"}, {w: "tray column", m: "板式塔"}, {w: "packed column", m: "填料塔"}, {w: "reflux drum", m: "回流罐"}]},
    {root: "column tray", phonetic: "/ˈkɒləm treɪ/", meaning: "塔板", words: [{w: "sieve tray", m: "筛板"}, {w: "valve tray", m: "浮阀塔板"}, {w: "bubble cap tray", m: "泡罩塔板"}, {w: "tray efficiency", m: "塔板效率"}]},
    {root: "packing", phonetic: "/ˈpækɪŋ/", meaning: "填料", words: [{w: "packing", m: "填料"}, {w: "random packing", m: "散装填料"}, {w: "structured packing", m: "规整填料"}, {w: "Raschig ring", m: "拉西环"}]},
    {root: "reboiler", phonetic: "/riːˈbɔɪlə/", meaning: "再沸器", words: [{w: "reboiler", m: "再沸器"}, {w: "thermosyphon reboiler", m: "热虹吸再沸器"}, {w: "kettle reboiler", m: "釜式再沸器"}, {w: "forced circulation", m: "强制循环再沸器"}]},
    // 421-430
    {root: "condenser", phonetic: "/kənˈdensə/", meaning: "冷凝器", words: [{w: "condenser", m: "冷凝器"}, {w: "surface condenser", m: "表面冷凝器"}, {w: "direct contact", m: "直接接触冷凝器"}, {w: "air-cooled condenser", m: "空冷冷凝器"}]},
    {root: "separator", phonetic: "/ˈsepəreɪtə/", meaning: "分离器", words: [{w: "separator", m: "分离器"}, {w: "gas-liquid separator", m: "气液分离器"}, {w: "liquid-liquid separator", m: "液液分离器"}, {w: "cyclone separator", m: "旋风分离器"}]},
    {root: "cyclone", phonetic: "/ˈsaɪkləʊn/", meaning: "旋风分离器", words: [{w: "cyclone", m: "旋风分离器"}, {w: "hydrocyclone", m: "水力旋流器"}, {w: "cyclone dust collector", m: "旋风除尘器"}, {w: "multi-cyclone", m: "多管旋风分离器"}]},
    {root: "bag filter", phonetic: "/bæɡ ˈfɪltə/", meaning: "袋滤器", words: [{w: "bag filter", m: "袋滤器"}, {w: "fabric filter", m: "织物过滤器"}, {w: "baghouse", m: "袋滤室"}, {w: "pulse-jet filter", m: "脉冲喷吹袋滤器"}]},
    {root: "electrostatic precipitator", phonetic: "/ɪˈlektrəʊstætɪk prɪˈsɪpɪteɪtə/", meaning: "静电除尘器", words: [{w: "electrostatic precipitator", m: "静电除尘器"}, {w: "ESP", m: "电除尘器"}, {w: "wet ESP", m: "湿式电除尘器"}, {w: "dry ESP", m: "干式电除尘器"}]},
    {root: "venturi", phonetic: "/venˈtʊəri/", meaning: "文丘里", words: [{w: "venturi scrubber", m: "文丘里洗涤器"}, {w: "venturi meter", m: "文丘里流量计"}, {w: "venturi tube", m: "文丘里管"}, {w: "venturi effect", m: "文丘里效应"}]},
    {root: "ejector", phonetic: "/ɪˈdʒektə/", meaning: "喷射器", words: [{w: "ejector", m: "喷射器"}, {w: "steam ejector", m: "蒸汽喷射器"}, {w: "vacuum ejector", m: "真空喷射器"}, {w: "air ejector", m: "空气喷射器"}]},
    {root: "compressor station", phonetic: "/kəmˈpresə ˈsteɪʃən/", meaning: "压缩机站", words: [{w: "compressor station", m: "压缩机站"}, {w: "booster station", m: "增压站"}, {w: "gas compressor", m: "气体压缩机"}, {w: "reciprocating", m: "往复式"}]},
    {root: "storage tank", phonetic: "/ˈstɔːrɪdʒ tæŋk/", meaning: "储罐", words: [{w: "storage tank", m: "储罐"}, {w: "atmospheric tank", m: "常压储罐"}, {w: "pressure vessel", m: "压力容器"}, {w: "spherical tank", m: "球罐"}]},
    {root: "reactor vessel", phonetic: "/riˈæktə ˈvesəl/", meaning: "反应釜", words: [{w: "reactor vessel", m: "反应釜"}, {w: "autoclave", m: "高压釜"}, {w: "pressure reactor", m: "加压反应器"}, {w: "glass-lined reactor", m: "搪瓷反应釜"}]},
    // 431-440
    {root: "autoclave", phonetic: "/ˈɔːtəkleɪv/", meaning: "高压釜", words: [{w: "autoclave", m: "高压釜"}, {w: "high-pressure reactor", m: "高压反应器"}, {w: "steam autoclave", m: "蒸汽高压釜"}, {w: "laboratory autoclave", m: "实验室高压釜"}]},
    {root: "batch reactor", phonetic: "/bætʃ riˈæktə/", meaning: "间歇反应器", words: [{w: "batch reactor", m: "间歇反应器"}, {w: "semi-batch reactor", m: "半间歇反应器"}, {w: "fed-batch reactor", m: "补料分批反应器"}, {w: "batch process", m: "间歇过程"}]},
    {root: "CSTR", phonetic: "/siː es tiː ɑːr/", meaning: "连续搅拌釜", words: [{w: "CSTR", m: "连续搅拌釜反应器"}, {w: "continuous stirred tank", m: "连续搅拌釜"}, {w: "back-mix reactor", m: "返混反应器"}, {w: "perfectly mixed", m: "理想混合"}]},
    {root: "PFR", phonetic: "/piː ef ɑːr/", meaning: "平推流反应器", words: [{w: "PFR", m: "平推流反应器"}, {w: "plug flow reactor", m: "活塞流反应器"}, {w: "tubular reactor", m: "管式反应器"}, {w: "no axial mixing", m: "无轴向返混"}]},
    {root: "fluidized bed", phonetic: "/ˈfluːɪdaɪzd bed/", meaning: "流化床", words: [{w: "fluidized bed", m: "流化床"}, {w: "bubbling fluidized bed", m: "鼓泡流化床"}, {w: "circulating fluidized bed", m: "循环流化床"}, {w: "dense phase", m: "密相"}]},
    {root: "packed bed", phonetic: "/pækt bed/", meaning: "固定床", words: [{w: "packed bed", m: "固定床"}, {w: "trickle bed reactor", m: "滴流床反应器"}, {w: "packed column reactor", m: "填充床反应器"}, {w: "porous medium", m: "多孔介质"}]},
    {root: "trickle bed", phonetic: "/ˈtrɪkl bed/", meaning: "滴流床", words: [{w: "trickle bed", m: "滴流床"}, {w: "trickle flow", m: "滴流"}, {w: "trickling filter", m: "滴滤池"}, {w: "gas-liquid-solid", m: "气液固三相"}]},
    {root: "slurry reactor", phonetic: "/ˈslʌri riˈæktə/", meaning: "浆态反应器", words: [{w: "slurry reactor", m: "浆态反应器"}, {w: "slurry phase", m: "浆相"}, {w: "slurry bubble column", m: "浆态鼓泡塔"}, {w: "three-phase slurry", m: "三相浆态"}]},
    {root: "membrane reactor", phonetic: "/ˈmembreɪn riˈæktə/", meaning: "膜反应器", words: [{w: "membrane reactor", m: "膜反应器"}, {w: "catalytic membrane", m: "催化膜反应器"}, {w: "inorganic membrane", m: "无机膜反应器"}, {w: "dense membrane", m: "致密膜反应器"}]},
    {root: "microreactor", phonetic: "/ˈmaɪkrəʊriˈæktə/", meaning: "微反应器", words: [{w: "microreactor", m: "微反应器"}, {w: "microchannel reactor", m: "微通道反应器"}, {w: "lab-on-chip", m: "芯片实验室"}, {w: "microfluidic", m: "微流控"}]},
    // 441-450
    {root: "photoreactor", phonetic: "/ˌfəʊtəʊriˈæktə/", meaning: "光反应器", words: [{w: "photoreactor", m: "光反应器"}, {w: "photochemical reactor", m: "光化学反应器"}, {w: "UV reactor", m: "紫外反应器"}, {w: "solar reactor", m: "太阳能反应器"}]},
    {root: "electrochemical cell", phonetic: "/ɪˌlektrəʊˈkemɪkl sel/", meaning: "电化学池", words: [{w: "electrochemical cell", m: "电化学池"}, {w: "electrolytic cell", m: "电解池"}, {w: "galvanic cell", m: "原电池"}, {w: "fuel cell", m: "燃料电池"}]},
    {root: "electrolyzer", phonetic: "/ɪˈlektrəlaɪzə/", meaning: "电解槽", words: [{w: "electrolyzer", m: "电解槽"}, {w: "water electrolyzer", m: "水电解槽"}, {w: "alkaline electrolyzer", m: "碱性电解槽"}, {w: "PEM electrolyzer", m: "质子交换膜电解槽"}]},
    {root: "fuel cell", phonetic: "/fjuːəl sel/", meaning: "燃料电池", words: [{w: "fuel cell", m: "燃料电池"}, {w: "PEMFC", m: "质子交换膜燃料电池"}, {w: "SOFC", m: "固体氧化物燃料电池"}, {w: "hydrogen fuel cell", m: "氢燃料电池"}]},
    {root: "battery", phonetic: "/ˈbætəri/", meaning: "电池", words: [{w: "battery", m: "电池"}, {w: "lithium-ion battery", m: "锂离子电池"}, {w: "lead-acid battery", m: "铅酸电池"}, {w: "solid-state battery", m: "固态电池"}]},
    {root: "supercapacitor", phonetic: "/ˌsuːpəkəˈpæsɪtə/", meaning: "超级电容器", words: [{w: "supercapacitor", m: "超级电容器"}, {w: "ultracapacitor", m: "超电容器"}, {w: "EDLC", m: "双电层电容器"}, {w: "pseudocapacitor", m: "赝电容器"}]},
    {root: "sensor", phonetic: "/ˈsensə/", meaning: "传感器", words: [{w: "sensor", m: "传感器"}, {w: "gas sensor", m: "气体传感器"}, {w: "pH sensor", m: "pH传感器"}, {w: "temperature sensor", m: "温度传感器"}]},
    {root: "analyzer", phonetic: "/ˈænəlaɪzə/", meaning: "分析仪", words: [{w: "analyzer", m: "分析仪"}, {w: "gas chromatograph", m: "气相色谱仪"}, {w: "mass spectrometer", m: "质谱仪"}, {w: "online analyzer", m: "在线分析仪"}]},
    {root: "transmitter", phonetic: "/trænzˈmɪtə/", meaning: "变送器", words: [{w: "transmitter", m: "变送器"}, {w: "pressure transmitter", m: "压力变送器"}, {w: "temperature transmitter", m: "温度变送器"}, {w: "flow transmitter", m: "流量变送器"}]},
    {root: "controller", phonetic: "/kənˈtrəʊlə/", meaning: "控制器", words: [{w: "controller", m: "控制器"}, {w: "PID controller", m: "PID控制器"}, {w: "DCS", m: "分散控制系统"}, {w: "PLC", m: "可编程逻辑控制器"}]},
    // 451-460
    {root: "instrumentation", phonetic: "/ˌɪnstrəmenˈteɪʃən/", meaning: "仪表", words: [{w: "instrumentation", m: "仪表"}, {w: "process control", m: "过程控制"}, {w: "instrument panel", m: "仪表盘"}, {w: "field instrument", m: "现场仪表"}]},
    {root: "automation", phonetic: "/ˌɔːtəˈmeɪʃən/", meaning: "自动化", words: [{w: "automation", m: "自动化"}, {w: "process automation", m: "过程自动化"}, {w: "industrial automation", m: "工业自动化"}, {w: "control system", m: "控制系统"}]},
    {root: "SCADA", phonetic: "/ˈskɑːdə/", meaning: "数据采集系统", words: [{w: "SCADA", m: "数据采集与监控系统"}, {w: "HMI", m: "人机界面"}, {w: "data acquisition", m: "数据采集"}, {w: "remote monitoring", m: "远程监控"}]},
    {root: "P&ID", phonetic: "/piː ænd aɪ diː/", meaning: "管道仪表流程图", words: [{w: "P&ID", m: "管道仪表流程图"}, {w: "piping diagram", m: "管道图"}, {w: "instrument diagram", m: "仪表图"}, {w: "process flow diagram", m: "工艺流程图"}]},
    {root: "material balance", phonetic: "/məˈtɪəriəl ˈbæləns/", meaning: "物料衡算", words: [{w: "material balance", m: "物料衡算"}, {w: "mass balance", m: "质量衡算"}, {w: "steady state", m: "稳态"}, {w: "input-output", m: "输入-输出"}]},
    {root: "energy balance", phonetic: "/ˈenədʒi ˈbæləns/", meaning: "能量衡算", words: [{w: "energy balance", m: "能量衡算"}, {w: "heat balance", m: "热量衡算"}, {w: "enthalpy balance", m: "焓衡算"}, {w: "first law", m: "热力学第一定律"}]},
    {root: "unit operation", phonetic: "/ˈjuːnɪt ˌɒpəˈreɪʃən/", meaning: "单元操作", words: [{w: "unit operation", m: "单元操作"}, {w: "fluid flow", m: "流体流动"}, {w: "heat transfer", m: "传热"}, {w: "mass transfer", m: "传质"}]},
    {root: "unit process", phonetic: "/ˈjuːnɪt ˈprəʊses/", meaning: "单元过程", words: [{w: "unit process", m: "单元过程"}, {w: "chemical conversion", m: "化学转化"}, {w: "reaction step", m: "反应步骤"}, {w: "process chemistry", m: "过程化学"}]},
    {root: "process design", phonetic: "/ˈprəʊses dɪˈzaɪn/", meaning: "工艺设计", words: [{w: "process design", m: "工艺设计"}, {w: "process development", m: "工艺开发"}, {w: "process simulation", m: "工艺模拟"}, {w: "conceptual design", m: "概念设计"}]},
    {root: "scale-up", phonetic: "/skeɪl ʌp/", meaning: "放大", words: [{w: "scale-up", m: "放大"}, {w: "pilot plant", m: "中试装置"}, {w: "demonstration plant", m: "示范装置"}, {w: "commercial scale", m: "工业规模"}]},
    // 461-470
    {root: "pilot plant", phonetic: "/ˈpaɪlət plɑːnt/", meaning: "中试装置", words: [{w: "pilot plant", m: "中试装置"}, {w: "pilot scale", m: "中试规模"}, {w: "semi-works", m: "半工业装置"}, {w: "miniplant", m: "微型装置"}]},
    {root: "commissioning", phonetic: "/kəˈmɪʃənɪŋ/", meaning: "调试", words: [{w: "commissioning", m: "调试"}, {w: "start-up", m: "开车"}, {w: "trial operation", m: "试运行"}, {w: "performance test", m: "性能测试"}]},
    {root: "shutdown", phonetic: "/ˈʃʌtdaʊn/", meaning: "停车", words: [{w: "shutdown", m: "停车"}, {w: "turnaround", m: "检修"}, {w: "emergency shutdown", m: "紧急停车"}, {w: "planned shutdown", m: "计划停车"}]},
    {root: "maintenance", phonetic: "/ˈmeɪntənəns/", meaning: "维护", words: [{w: "maintenance", m: "维护"}, {w: "preventive maintenance", m: "预防性维护"}, {w: "predictive maintenance", m: "预测性维护"}, {w: "corrective maintenance", m: "纠正性维护"}]},
    {root: "reliability", phonetic: "/rɪˌlaɪəˈbɪləti/", meaning: "可靠性", words: [{w: "reliability", m: "可靠性"}, {w: "availability", m: "可用性"}, {w: "MTBF", m: "平均故障间隔时间"}, {w: "failure analysis", m: "故障分析"}]},
    {root: "integrity", phonetic: "/ɪnˈteɡrəti/", meaning: "完整性", words: [{w: "integrity", m: "完整性"}, {w: "mechanical integrity", m: "机械完整性"}, {w: "asset integrity", m: "资产完整性"}, {w: "inspection", m: "检验"}]},
    {root: "corrosion", phonetic: "/kəˈrəʊʒən/", meaning: "腐蚀", words: [{w: "corrosion", m: "腐蚀"}, {w: "corrosion rate", m: "腐蚀速率"}, {w: "corrosion inhibitor", m: "缓蚀剂"}, {w: "pitting corrosion", m: "点蚀"}]},
    {root: "erosion", phonetic: "/ɪˈrəʊʒən/", meaning: "侵蚀", words: [{w: "erosion", m: "侵蚀"}, {w: "erosion-corrosion", m: "冲蚀腐蚀"}, {w: "cavitation erosion", m: "空蚀"}, {w: "particle erosion", m: "颗粒侵蚀"}]},
    {root: "fouling", phonetic: "/ˈfaʊlɪŋ/", meaning: "结垢", words: [{w: "fouling", m: "结垢"}, {w: "scaling", m: "结垢"}, {w: "fouling factor", m: "污垢系数"}, {w: "cleaning", m: "清洗"}]},
    {root: "coking", phonetic: "/ˈkəʊkɪŋ/", meaning: "结焦", words: [{w: "coking", m: "结焦"}, {w: "coke formation", m: "焦炭形成"}, {w: "decoking", m: "除焦"}, {w: "coke drum", m: "焦炭塔"}]},
    // 471-480
    {root: "leakage", phonetic: "/ˈliːkɪdʒ/", meaning: "泄漏", words: [{w: "leakage", m: "泄漏"}, {w: "leak detection", m: "泄漏检测"}, {w: "seal failure", m: "密封失效"}, {w: "emission", m: "排放"}]},
    {root: "emission", phonetic: "/ɪˈmɪʃən/", meaning: "排放", words: [{w: "emission", m: "排放"}, {w: "emission control", m: "排放控制"}, {w: "VOC emission", m: "挥发性有机物排放"}, {w: "fugitive emission", m: "无组织排放"}]},
    {root: "effluent", phonetic: "/ˈefluənt/", meaning: "废水", words: [{w: "effluent", m: "废水"}, {w: "wastewater", m: "废水"}, {w: "treated effluent", m: "处理后废水"}, {w: "discharge", m: "排放"}]},
    {root: "waste treatment", phonetic: "/weɪst ˈtriːtmənt/", meaning: "废物处理", words: [{w: "waste treatment", m: "废物处理"}, {w: "hazardous waste", m: "危险废物"}, {w: "solid waste", m: "固体废物"}, {w: "waste disposal", m: "废物处置"}]},
    {root: "remediation", phonetic: "/rɪˌmiːdiˈeɪʃən/", meaning: "修复", words: [{w: "remediation", m: "修复"}, {w: "soil remediation", m: "土壤修复"}, {w: "groundwater remediation", m: "地下水修复"}, {w: "bioremediation", m: "生物修复"}]},
    {root: "biodegradation", phonetic: "/ˌbaɪəʊdeɪɡrəˈdeɪʃən/", meaning: "生物降解", words: [{w: "biodegradation", m: "生物降解"}, {w: "biodegradable", m: "可生物降解的"}, {w: "aerobic degradation", m: "好氧降解"}, {w: "anaerobic degradation", m: "厌氧降解"}]},
    {root: "incineration", phonetic: "/ɪnˌsɪnəˈreɪʃən/", meaning: "焚烧", words: [{w: "incineration", m: "焚烧"}, {w: "waste incineration", m: "废物焚烧"}, {w: "hazardous waste incinerator", m: "危险废物焚烧炉"}, {w: "rotary kiln incinerator", m: "回转窑焚烧炉"}]},
    {root: "landfill", phonetic: "/ˈlændfɪl/", meaning: "填埋", words: [{w: "landfill", m: "填埋"}, {w: "sanitary landfill", m: "卫生填埋"}, {w: "hazardous waste landfill", m: "危险废物填埋场"}, {w: "leachate", m: "渗滤液"}]},
    {root: "recycling", phonetic: "/ˌriːˈsaɪklɪŋ/", meaning: "回收", words: [{w: "recycling", m: "回收"}, {w: "chemical recycling", m: "化学回收"}, {w: "mechanical recycling", m: "机械回收"}, {w: "circular economy", m: "循环经济"}]},
    {root: "reuse", phonetic: "/ˌriːˈjuːs/", meaning: "再利用", words: [{w: "reuse", m: "再利用"}, {w: "water reuse", m: "水回用"}, {w: "solvent recovery", m: "溶剂回收"}, {w: "catalyst regeneration", m: "催化剂再生"}]},
    // 481-490
    {root: "green chemistry", phonetic: "/ɡriːn ˈkemɪstri/", meaning: "绿色化学", words: [{w: "green chemistry", m: "绿色化学"}, {w: "sustainable chemistry", m: "可持续化学"}, {w: "atom economy", m: "原子经济性"}, {w: "E-factor", m: "环境因子"}]},
    {root: "process intensification", phonetic: "/ˈprəʊses ɪnˌtensɪfɪˈkeɪʃən/", meaning: "过程强化", words: [{w: "process intensification", m: "过程强化"}, {w: "reactive distillation", m: "反应精馏"}, {w: "dividing wall column", m: "隔板塔"}, {w: "microreactor technology", m: "微反应器技术"}]},
    {root: "digital twin", phonetic: "/ˈdɪdʒɪtl twɪn/", meaning: "数字孪生", words: [{w: "digital twin", m: "数字孪生"}, {w: "virtual plant", m: "虚拟工厂"}, {w: "real-time simulation", m: "实时模拟"}, {w: "predictive modeling", m: "预测模型"}]},
    {root: "AI in chemical engineering", phonetic: "/eɪ aɪ ɪn ˈkemɪkl ˌendʒɪˈnɪərɪŋ/", meaning: "化工人工智能", words: [{w: "machine learning", m: "机器学习"}, {w: "neural network", m: "神经网络"}, {w: "process optimization", m: "过程优化"}, {w: "predictive maintenance", m: "预测性维护"}]},
    {root: " Industry 4.0", phonetic: "/ˈɪndəstri fɔːr pɔɪnt zəʊ/", meaning: "工业4.0", words: [{w: "Industry 4.0", m: "工业4.0"}, {w: "smart manufacturing", m: "智能制造"}, {w: "Internet of Things", m: "物联网"}, {w: "big data", m: "大数据"}]},
    {root: "carbon capture", phonetic: "/ˈkɑːbən ˈkæptʃə/", meaning: "碳捕集", words: [{w: "carbon capture", m: "碳捕集"}, {w: "CCS", m: "碳捕集与封存"}, {w: "CCUS", m: "碳捕集利用与封存"}, {w: "amine scrubbing", m: "胺吸收法"}]},
    {root: "hydrogen economy", phonetic: "/ˈhaɪdrədʒən ɪˈkɒnəmi/", meaning: "氢经济", words: [{w: "hydrogen economy", m: "氢经济"}, {w: "green hydrogen", m: "绿氢"}, {w: "blue hydrogen", m: "蓝氢"}, {w: "hydrogen storage", m: "储氢"}]},
    {root: "electrification", phonetic: "/ɪˌlektrɪfɪˈkeɪʃən/", meaning: "电气化", words: [{w: "electrification", m: "电气化"}, {w: "electrified process", m: "电气化过程"}, {w: "power-to-X", m: "电转X"}, {w: "e-fuels", m: "电子燃料"}]},
    {root: "biorefinery", phonetic: "/ˌbaɪəʊrɪˈfaɪnəri/", meaning: "生物炼制", words: [{w: "biorefinery", m: "生物炼制"}, {w: "lignocellulosic", m: "木质纤维素"}, {w: "biofuel", m: "生物燃料"}, {w: "platform chemical", m: "平台化学品"}]},
    {root: "nanotechnology", phonetic: "/ˌnænəʊtekˈnɒlədʒi/", meaning: "纳米技术", words: [{w: "nanotechnology", m: "纳米技术"}, {w: "nanomaterial", m: "纳米材料"}, {w: "nanoparticle", m: "纳米颗粒"}, {w: "nanocatalyst", m: "纳米催化剂"}]},
    // 491-500
    {root: "catalytic cracking", phonetic: "/kəˈtælɪtɪk ˈkrækɪŋ/", meaning: "催化裂化", words: [{w: "catalytic cracking", m: "催化裂化"}, {w: "FCC", m: "流化催化裂化"}, {w: "hydrocracking", m: "加氢裂化"}, {w: "cracker", m: "裂化装置"}]},
    {root: "steam reforming", phonetic: "/stiːm rɪˈfɔːmɪŋ/", meaning: "蒸汽重整", words: [{w: "steam reforming", m: "蒸汽重整"}, {w: "SMR", m: "蒸汽甲烷重整"}, {w: "partial oxidation", m: "部分氧化"}, {w: "autothermal reforming", m: "自热重整"}]},
    {root: "ammonia synthesis", phonetic: "/əˈməʊniə ˈsɪnθəsɪs/", meaning: "合成氨", words: [{w: "ammonia synthesis", m: "合成氨"}, {w: "Haber-Bosch", m: "哈伯法"}, {w: "synthesis loop", m: "合成回路"}, {w: "ammonia converter", m: "氨合成塔"}]},
    {root: "methanol synthesis", phonetic: "/ˈmeθənɒl ˈsɪnθəsɪs/", meaning: "合成甲醇", words: [{w: "methanol synthesis", m: "合成甲醇"}, {w: "methanol reactor", m: "甲醇反应器"}, {w: "syngas to methanol", m: "合成气制甲醇"}, {w: "methanol-to-olefins", m: "甲醇制烯烃"}]},
    {root: "polymerization reactor", phonetic: "/pəˌlɪməraɪˈzeɪʃən riˈæktə/", meaning: "聚合反应器", words: [{w: "polymerization reactor", m: "聚合反应器"}, {w: "batch polymerization", m: "间歇聚合"}, {w: "continuous polymerization", m: "连续聚合"}, {w: "emulsion polymerization", m: "乳液聚合"}]},
    {root: "phthalic anhydride", phonetic: "/ˈθælɪk ænˈhaɪdraɪd/", meaning: "苯酐", words: [{w: "phthalic anhydride", m: "苯酐"}, {w: "PA", m: "苯酐"}, {w: "o-xylene oxidation", m: "邻二甲苯氧化"}, {w: "naphthalene oxidation", m: "萘氧化"}]},
    {root: "maleic anhydride", phonetic: "/ˈmæliɪk ænˈhaɪdraɪd/", meaning: "顺酐", words: [{w: "maleic anhydride", m: "顺丁烯二酸酐"}, {w: "MA", m: "顺酐"}, {w: "butane oxidation", m: "正丁烷氧化"}, {w: "benzene oxidation", m: "苯氧化"}]},
    {root: "acrylic acid", phonetic: "/əˈkrɪlɪk ˈæsɪd/", meaning: "丙烯酸", words: [{w: "acrylic acid", m: "丙烯酸"}, {w: "propylene oxidation", m: "丙烯氧化"}, {w: "acrylate", m: "丙烯酸酯"}, {w: "superabsorbent", m: "高吸水性树脂"}]},
    {root: "vinyl chloride", phonetic: "/ˈvaɪnɪl ˈklɔːraɪd/", meaning: "氯乙烯", words: [{w: "vinyl chloride", m: "氯乙烯"}, {w: "VCM", m: "氯乙烯单体"}, {w: "PVC", m: "聚氯乙烯"}, {w: "ethylene oxychlorination", m: "乙烯氧氯化"}]},
    {root: "ethylene oxide", phonetic: "/ˈeθɪliːn ˈɒksaɪd/", meaning: "环氧乙烷", words: [{w: "ethylene oxide", m: "环氧乙烷"}, {w: "EO", m: "环氧乙烷"}, {w: "ethylene glycol", m: "乙二醇"}, {w: "silver catalyst", m: "银催化剂"}]}
];

// 生成新记录 (frequency 401-500, id 1801-1900)
let newRecords = [];
for (let i = 0; i < roots.length; i++) {
    const idx = i + 401;
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
