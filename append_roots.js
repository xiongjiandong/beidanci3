const fs = require('fs');

// 读取现有文件
const filePath = 'f:/claudeanli/beidanci3/src/data/civil-engineering.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log('现有条目数:', data.length);
console.log('最后一条ID:', data[data.length - 1].id);

// 定义300个新的土木词根 (id 201-500)
const newRoots = [
    // 201-220: 结构力学核心
    { id: 201, root: "moment", phonetic: "/ˈməʊmənt/", partOfSpeech: "名词", meaning: "弯矩；力矩", mnemonic: "Moment→\"摸门特\"→摸门框时产生的旋转力→弯矩", phrases: ["bending moment 弯矩", "moment of inertia 惯性矩", "resisting moment 抵抗矩", "overturning moment 倾覆力矩"] },
    { id: 202, root: "shear", phonetic: "/ʃɪər/", partOfSpeech: "名词/动词", meaning: "剪切；剪力", mnemonic: "Shear→\"希尔\"→希尔用剪刀剪切材料→剪切", phrases: ["shear force 剪力", "shear stress 剪应力", "shear wall 剪力墙", "shear strength 抗剪强度"] },
    { id: 203, root: "axial", phonetic: "/ˈæksiəl/", partOfSpeech: "形容词", meaning: "轴向的", mnemonic: "Axial→axis(轴)+al→轴向的", phrases: ["axial force 轴向力", "axial load 轴向荷载", "axial compression 轴向压力", "axial tension 轴向拉力"] },
    { id: 204, root: "torsional", phonetic: "/ˈtɔːʃənl/", partOfSpeech: "形容词", meaning: "扭转的", mnemonic: "Torsional→tors(扭)+ional→扭转的", phrases: ["torsional moment 扭矩", "torsional stress 扭转应力", "torsional rigidity 抗扭刚度", "torsional deformation 扭转变形"] },
    { id: 205, root: "deflection", phonetic: "/dɪˈflekʃn/", partOfSpeech: "名词", meaning: "挠度；偏转", mnemonic: "Deflection→de(向下)+flect(弯曲)+ion→向下弯曲→挠度", phrases: ["deflection limit 挠度限值", "lateral deflection 侧向挠度", "maximum deflection 最大挠度", "deflection calculation 挠度计算"] },
    { id: 206, root: "rotation", phonetic: "/rəʊˈteɪʃn/", partOfSpeech: "名词", meaning: "旋转；转角", mnemonic: "Rotation→rot(转)+ation→旋转", phrases: ["rotation angle 转角", "rigid body rotation 刚体转动", "rotation restraint 转动约束", "allowable rotation 允许转角"] },
    { id: 207, root: "stiffness", phonetic: "/ˈstɪfnəs/", partOfSpeech: "名词", meaning: "刚度", mnemonic: "Stiffness→stiff(硬的)+ness→刚度", phrases: ["flexural stiffness 抗弯刚度", "lateral stiffness 侧向刚度", "stiffness matrix 刚度矩阵", "relative stiffness 相对刚度"] },
    { id: 208, root: "rigidity", phonetic: "/rɪˈdʒɪdəti/", partOfSpeech: "名词", meaning: "刚性", mnemonic: "Rigidity→rigid(刚性的)+ity→刚性", phrases: ["torsional rigidity 抗扭刚度", "bending rigidity 抗弯刚度", "flexural rigidity 弯曲刚度", "rigidity modulus 刚性模量"] },
    { id: 209, root: "flexibility", phonetic: "/ˌfleksəˈbɪləti/", partOfSpeech: "名词", meaning: "柔度", mnemonic: "Flexibility→flex(弯曲)+ibility→柔度", phrases: ["flexibility coefficient 柔度系数", "flexibility matrix 柔度矩阵", "member flexibility 构件柔度", "flexibility method 柔度法"] },
    { id: 210, root: "elasticity", phonetic: "/ˌiːlæˈstɪsəti/", partOfSpeech: "名词", meaning: "弹性", mnemonic: "Elasticity→elastic(弹性的)+ity→弹性", phrases: ["modulus of elasticity 弹性模量", "elasticity theory 弹性理论", "elasticity limit 弹性极限", "elasticity coefficient 弹性系数"] },
    { id: 211, root: "ductility", phonetic: "/dʌkˈtɪləti/", partOfSpeech: "名词", meaning: "延性", mnemonic: "Ductility→duct(引导)+ility→可引导变形→延性", phrases: ["ductility ratio 延性比", "ductility demand 延性需求", "ductility capacity 延性能力", "ductile design 延性设计"] },
    { id: 212, root: "brittle", phonetic: "/ˈbrɪtl/", partOfSpeech: "形容词", meaning: "脆性的", mnemonic: "Brittle→音似\"不韧透\"→不韧→脆性的", phrases: ["brittle fracture 脆性断裂", "brittle material 脆性材料", "brittle failure 脆性破坏", "brittle zone 脆化区"] },
    { id: 213, root: "plasticity", phonetic: "/plæˈstɪsəti/", partOfSpeech: "名词", meaning: "塑性", mnemonic: "Plasticity→plastic(塑料的)+ity→塑性", phrases: ["plasticity index 塑性指数", "theory of plasticity 塑性理论", "plasticity analysis 塑性分析", "plasticity condition 塑性条件"] },
    { id: 214, root: "viscosity", phonetic: "/vɪˈskɒsəti/", partOfSpeech: "名词", meaning: "黏度；黏性", mnemonic: "Viscosity→visc(黏)+osity→黏度", phrases: ["coefficient of viscosity 黏度系数", "dynamic viscosity 动力黏度", "kinematic viscosity 运动黏度", "viscosity ratio 黏度比"] },
    { id: 215, root: "porosity", phonetic: "/pɔːˈrɒsəti/", partOfSpeech: "名词", meaning: "孔隙率", mnemonic: "Porosity→pore(孔)+osity→孔隙率", phrases: ["porosity ratio 孔隙比", "effective porosity 有效孔隙率", "soil porosity 土孔隙率", "porosity distribution 孔隙分布"] },
    { id: 216, root: "permeability", phonetic: "/ˌpɜːmiəˈbɪləti/", partOfSpeech: "名词", meaning: "渗透性", mnemonic: "Permeability→perme(穿过)+ability→渗透性", phrases: ["coefficient of permeability 渗透系数", "permeability test 渗透试验", "hydraulic permeability 水力渗透性", "air permeability 透气性"] },
    { id: 217, root: "cohesion", phonetic: "/kəʊˈhiːʒn/", partOfSpeech: "名词", meaning: "黏聚力", mnemonic: "Cohesion→co(共同)+hes(黏)+ion→黏聚力", phrases: ["cohesion intercept 黏聚力截距", "apparent cohesion 表观黏聚力", "cohesionless soil 无黏性土", "cohesive soil 黏性土"] },
    { id: 218, root: "friction", phonetic: "/ˈfrɪkʃn/", partOfSpeech: "名词", meaning: "摩擦", mnemonic: "Friction→frict(摩擦)+ion→摩擦", phrases: ["friction angle 摩擦角", "friction coefficient 摩擦系数", "skin friction 侧摩阻力", "friction pile 摩擦桩"] },
    { id: 219, root: "adhesion", phonetic: "/ədˈhiːʒn/", partOfSpeech: "名词", meaning: "黏附力", mnemonic: "Adhesion→ad(向)+hes(黏)+ion→黏附力", phrases: ["adhesion factor 黏附系数", "adhesive bond 黏结", "adhesion strength 黏附强度", "adhesion test 黏附试验"] },
    { id: 220, root: "shrinkage", phonetic: "/ˈʃrɪŋkɪdʒ/", partOfSpeech: "名词", meaning: "收缩", mnemonic: "Shrinkage→shrink(收缩)+age→收缩", phrases: ["shrinkage strain 收缩应变", "drying shrinkage 干缩", "shrinkage crack 收缩裂缝", "shrinkage coefficient 收缩系数"] },

    // 221-240: 结构类型
    { id: 221, root: "truss", phonetic: "/trʌs/", partOfSpeech: "名词", meaning: "桁架", mnemonic: "Truss→音似\"踹死\"→踹也踹不坏的桁架结构", phrases: ["truss bridge 桁架桥", "space truss 空间桁架", "truss member 桁架构件", "truss joint 桁架节点"] },
    { id: 222, root: "frame", phonetic: "/freɪm/", partOfSpeech: "名词/动词", meaning: "框架", mnemonic: "Frame→音似\"福瑞母\"→框架", phrases: ["rigid frame 刚架", "frame structure 框架结构", "portal frame 门式刚架", "frame analysis 框架分析"] },
    { id: 223, root: "arch", phonetic: "/ɑːtʃ/", partOfSpeech: "名词", meaning: "拱", mnemonic: "Arch→音似\"阿尺\"→拱形如尺→拱", phrases: ["arch bridge 拱桥", "three-hinged arch 三铰拱", "arch rib 拱肋", "parabolic arch 抛物线拱"] },
    { id: 224, root: "cable", phonetic: "/ˈkeɪbl/", partOfSpeech: "名词", meaning: "缆索；钢索", mnemonic: "Cable→音似\"开包\"→开包取出缆索", phrases: ["cable stayed bridge 斜拉桥", "suspension cable 悬索", "cable structure 索结构", "cable tension 索力"] },
    { id: 225, root: "dome", phonetic: "/dəʊm/", partOfSpeech: "名词", meaning: "穹顶；圆顶", mnemonic: "Dome→音似\" dome\"→圆顶", phrases: ["spherical dome 球面穹顶", "dome structure 穹顶结构", "ribbed dome 肋穹顶", "dome roof 穹顶屋面"] },
    { id: 226, root: "shell", phonetic: "/ʃel/", partOfSpeech: "名词", meaning: "壳体", mnemonic: "Shell→贝壳→壳体", phrases: ["shell structure 壳体结构", "thin shell 薄壳", "concrete shell 混凝土壳", "cylindrical shell 圆柱壳"] },
    { id: 227, root: "membrane", phonetic: "/ˈmembreɪn/", partOfSpeech: "名词", meaning: "膜；薄膜", mnemonic: "Membrane→member(构件)+ane→膜", phrases: ["membrane structure 膜结构", "membrane stress 薄膜应力", "membrane theory 薄膜理论", "tensile membrane 张拉膜"] },
    { id: 228, root: "plate", phonetic: "/pleɪt/", partOfSpeech: "名词", meaning: "板", mnemonic: "Plate→盘子→板", phrases: ["plate element 板单元", "flat plate 平板", "stiffened plate 加劲板", "plate theory 板理论"] },
    { id: 229, root: "lattice", phonetic: "/ˈlætɪs/", partOfSpeech: "名词", meaning: "格构；网格", mnemonic: "Lattice→latt(网格)+ice→格构", phrases: ["lattice girder 格构梁", "lattice tower 格构塔", "lattice structure 格构结构", "space lattice 空间格构"] },
    { id: 230, root: "space", phonetic: "/speɪs/", partOfSpeech: "名词", meaning: "空间", mnemonic: "Space→空间→空间结构", phrases: ["space frame 空间框架", "space structure 空间结构", "space truss 空间桁架", "clear space 净空间"] },
    { id: 231, root: "catenary", phonetic: "/kəˈtiːnəri/", partOfSpeech: "名词", meaning: "悬链线", mnemonic: "Catenary→cat(猫)+enary→猫爬的曲线→悬链线", phrases: ["catenary curve 悬链线", "catenary arch 悬链拱", "catenary cable 悬链索", "inverted catenary 倒悬链线"] },
    { id: 232, root: "grid", phonetic: "/ɡrɪd/", partOfSpeech: "名词", meaning: "网格", mnemonic: "Grid→格子→网格", phrases: ["grid structure 网格结构", "grid beam 网格梁", "column grid 柱网", "structural grid 结构网格"] },
    { id: 233, root: "diaphragm", phonetic: "/ˈdaɪəfræm/", partOfSpeech: "名词", meaning: "横隔板", mnemonic: "Diaphragm→dia(横)+phragm(隔)→横隔板", phrases: ["floor diaphragm 楼层横隔板", "diaphragm action 横隔板作用", "rigid diaphragm 刚性横隔板", "flexible diaphragm 柔性横隔板"] },
    { id: 234, root: "bracing", phonetic: "/ˈbreɪsɪŋ/", partOfSpeech: "名词", meaning: "支撑", mnemonic: "Bracing→brace(支撑)+ing→支撑系统", phrases: ["lateral bracing 侧向支撑", "cross bracing 交叉支撑", "bracing system 支撑系统", "diagonal bracing 斜撑"] },
    { id: 235, root: "gusset", phonetic: "/ˈɡʌsɪt/", partOfSpeech: "名词", meaning: "节点板", mnemonic: "Gusset→音似\"嘎塞特\"→节点板", phrases: ["gusset plate 节点板", "gusset connection 节点板连接", "gusset joint 节点板连接", "gusset angle 节点角钢"] },
    { id: 236, root: "haunch", phonetic: "/hɔːntʃ/", partOfSpeech: "名词", meaning: "腋；加腋", mnemonic: "Haunch→音似\"厚区\"→加腋加厚区", phrases: ["haunch reinforcement 腋部钢筋", "haunch beam 加腋梁", "column haunch 柱腋", "haunch depth 腋高"] },
    { id: 237, root: "corbel", phonetic: "/ˈkɔːbl/", partOfSpeech: "名词", meaning: "牛腿", mnemonic: "Corbel→音似\"考博\"→牛腿", phrases: ["corbel support 牛腿支承", "corbel bracket 牛腿托架", "corbelled arch 悬挑拱", "corbel course 悬挑层"] },
    { id: 238, root: "cantilever", phonetic: "/ˈkæntɪliːvə/", partOfSpeech: "名词", meaning: "悬臂", mnemonic: "Cantilever→canti(唱)+lever(杠杆)→悬臂如杠杆", phrases: ["cantilever beam 悬臂梁", "cantilever slab 悬臂板", "cantilever bridge 悬臂桥", "cantilever length 悬臂长度"] },
    { id: 239, root: "pendant", phonetic: "/ˈpendənt/", partOfSpeech: "名词", meaning: "吊杆", mnemonic: "Pendant→pend(悬挂)+ant→吊杆", phrases: ["pendant post 吊杆", "pendant cable 吊索", "vertical pendant 竖向吊杆", "pendant support 吊杆支撑"] },
    { id: 240, root: "portal", phonetic: "/ˈpɔːtl/", partOfSpeech: "名词", meaning: "门式框架", mnemonic: "Portal→port(门)+al→门式框架", phrases: ["portal frame 门式刚架", "portal method 门架法", "portal structure 门式结构", "portal bracing 门式支撑"] },

    // 241-260: 基础工程
    { id: 241, root: "footing", phonetic: "/ˈfʊtɪŋ/", partOfSpeech: "名词", meaning: "基础；基脚", mnemonic: "Footing→foot(脚)+ing→基础", phrases: ["spread footing 扩展基础", "isolated footing 独立基础", "combined footing 联合基础", "strip footing 条形基础"] },
    { id: 242, root: "raft", phonetic: "/rɑːft/", partOfSpeech: "名词", meaning: "筏板", mnemonic: "Raft→筏子→筏板基础", phrases: ["raft foundation 筏板基础", "mat foundation 满堂基础", "raft slab 筏板", "buoyant raft 浮筏基础"] },
    { id: 243, root: "caisson", phonetic: "/ˈkeɪsən/", partOfSpeech: "名词", meaning: "沉箱", mnemonic: "Caisson→音似\"凯森\"→凯森沉箱", phrases: ["pneumatic caisson 气压沉箱", "open caisson 开口沉箱", "caisson foundation 沉箱基础", "caisson disease 沉箱病"] },
    { id: 244, root: "micropile", phonetic: "/ˈmaɪkrəʊpaɪl/", partOfSpeech: "名词", meaning: "微型桩", mnemonic: "Micropile→micro(微)+pile(桩)→微型桩", phrases: ["micropile foundation 微型桩基础", "micropile group 微型桩群", "root pile 树根桩", "micropile installation 微型桩施工"] },
    { id: 245, root: "compensated", phonetic: "/ˈkɒmpenseɪtɪd/", partOfSpeech: "形容词", meaning: "补偿的", mnemonic: "Compensated→compensate(补偿)+d→补偿的", phrases: ["compensated foundation 补偿基础", "fully compensated foundation 全补偿基础", "compensated raft 补偿筏板", "compensation grouting 补偿注浆"] },
    { id: 246, root: "floating", phonetic: "/ˈfləʊtɪŋ/", partOfSpeech: "形容词", meaning: "浮式的", mnemonic: "Floating→float(漂浮)+ing→浮式的", phrases: ["floating foundation 浮式基础", "floating slab 浮板", "floating structure 浮动结构", "semi-floating foundation 半浮式基础"] },
    { id: 247, root: "pilecap", phonetic: "/paɪl kæp/", partOfSpeech: "名词", meaning: "承台", mnemonic: "Pilecap→pile(桩)+cap(帽)→桩帽承台", phrases: ["pile cap 承台", "pile cap beam 承台梁", "group pile cap 群桩承台", "pile cap design 承台设计"] },
    { id: 248, root: "pileshaft", phonetic: "/paɪl ʃɑːft/", partOfSpeech: "名词", meaning: "桩身", mnemonic: "Pileshaft→pile(桩)+shaft(杆)→桩身", phrases: ["pile shaft 桩身", "shaft resistance 桩侧阻力", "pile shaft concrete 桩身混凝土", "enlarged pile shaft 扩底桩身"] },
    { id: 249, root: "piletoe", phonetic: "/paɪl təʊ/", partOfSpeech: "名词", meaning: "桩端", mnemonic: "Piletoe→pile(桩)+toe(脚尖)→桩端", phrases: ["pile toe 桩端", "toe resistance 端阻力", "pile toe bearing 桩端承载", "enlarged pile toe 扩底桩端"] },
    { id: 250, root: "underreamed", phonetic: "/ˌʌndəˈriːmd/", partOfSpeech: "形容词", meaning: "扩底的", mnemonic: "Underreamed→under(下)+ream(扩孔)+ed→扩底的", phrases: ["underreamed pile 扩底桩", "underreamed base 扩底基础", "underreaming 扩底施工", "underreamed caisson 扩底沉箱"] },
    { id: 251, root: "mat", phonetic: "/mæt/", partOfSpeech: "名词", meaning: "满堂基础", mnemonic: "Mat→垫子→满堂基础如垫子", phrases: ["mat foundation 满堂基础", "flat mat 平板式满堂基础", "cellular mat 格构式满堂基础", "rigid mat 刚性满堂基础"] },
    { id: 252, root: "pier", phonetic: "/pɪər/", partOfSpeech: "名词", meaning: "墩；码头", mnemonic: "Pier→码头→桥墩", phrases: ["bridge pier 桥墩", "pier foundation 墩基础", "pier cap 墩帽", "solid pier 实体墩"] },
    { id: 253, root: "abutment", phonetic: "/əˈbʌtmənt/", partOfSpeech: "名词", meaning: "桥台", mnemonic: "Abutment→abut(邻接)+ment→邻接桥跨的构造→桥台", phrases: ["abutment wall 桥台墙", "wing wall 翼墙", "abutment foundation 桥台基础", "abutment seat 桥台支座"] },
    { id: 254, root: "stemwall", phonetic: "/stem wɔːl/", partOfSpeech: "名词", meaning: "墙式基础", mnemonic: "Stemwall→stem(茎)+wall(墙)→墙式基础", phrases: ["stem wall 墙式基础", "foundation stem wall 基础墙", "stem wall footing 墙式基础基脚", "concrete stem wall 混凝土墙式基础"] },
    { id: 255, root: "gradebeam", phonetic: "/ɡreɪd biːm/", partOfSpeech: "名词", meaning: "地梁", mnemonic: "Gradebeam→grade(地面)+beam(梁)→地梁", phrases: ["grade beam 地梁", "foundation grade beam 基础地梁", "concrete grade beam 混凝土地梁", "grade beam foundation 地梁基础"] },
    { id: 256, root: "piledriver", phonetic: "/paɪl ˈdraɪvə/", partOfSpeech: "名词", meaning: "打桩机", mnemonic: "Piledriver→pile(桩)+driver(驱动器)→打桩机", phrases: ["pile driver 打桩机", "hydraulic pile driver 液压打桩机", "diesel pile driver 柴油打桩机", "pile driver hammer 打桩锤"] },
    { id: 257, root: "auger", phonetic: "/ˈɔːɡə/", partOfSpeech: "名词", meaning: "螺旋钻", mnemonic: "Auger→音似\"奥格\"→螺旋钻", phrases: ["auger pile 螺旋钻孔桩", "auger boring 螺旋钻探", "continuous flight auger 连续螺旋钻", "auger cast pile 螺旋灌注桩"] },
    { id: 258, root: "vibroflot", phonetic: "/ˈvaɪbrəʊflɒt/", partOfSpeech: "名词", meaning: "振冲器", mnemonic: "Vibroflot→vibro(振动)+float(浮)→振冲器", phrases: ["vibroflotation 振冲法", "vibroflot stone column 振冲碎石桩", "vibro replacement 振冲置换", "vibro compaction 振冲密实"] },
    { id: 259, root: "geogrid", phonetic: "/ˈdʒiːəʊɡrɪd/", partOfSpeech: "名词", meaning: "土工格栅", mnemonic: "Geogrid→geo(土)+grid(网格)→土工格栅", phrases: ["geogrid reinforcement 土工格栅加筋", "biaxial geogrid 双向土工格栅", "geogrid base 格栅基础", "geogrid mattress 格栅垫层"] },
    { id: 260, root: "geotextile", phonetic: "/ˈdʒiːəʊtekstaɪl/", partOfSpeech: "名词", meaning: "土工织物", mnemonic: "Geotextile→geo(土)+textile(织物)→土工织物", phrases: ["geotextile filter 土工织物滤层", "woven geotextile 编织土工布", "non-woven geotextile 无纺土工布", "geotextile separator 土工织物隔离层"] }
];

console.log('新词根数量:', newRoots.length);

// 为每个词根生成完整条目
function generateFullEntry(rootInfo) {
    const posMap = {
        "名词": "n.",
        "动词": "v.",
        "形容词": "adj.",
        "副词": "adv.",
        "缩写": "abbr."
    };

    const entry = {
        id: rootInfo.id,
        root: rootInfo.root,
        phonetic: rootInfo.phonetic,
        partOfSpeech: rootInfo.partOfSpeech,
        frequency: rootInfo.id,
        category: "土木",
        words: [{
            word: rootInfo.root,
            phonetic: rootInfo.phonetic,
            partOfSpeech: posMap[rootInfo.partOfSpeech] || "n.",
            meaning: rootInfo.meaning,
            memoryTip: rootInfo.mnemonic.split('→')[1] || rootInfo.root,
            root: rootInfo.root,
            rootPhonetic: rootInfo.phonetic,
            rootMeaning: rootInfo.meaning,
            rootPhrases: rootInfo.phrases,
            wordPhrases: rootInfo.phrases
        }],
        phrases: rootInfo.phrases,
        mnemonic: rootInfo.mnemonic,
        meaning: rootInfo.meaning
    };

    // 添加更多单词
    for (let i = 1; i < 4 && i < rootInfo.phrases.length; i++) {
        const phrase = rootInfo.phrases[i];
        const parts = phrase.split(' ');
        const wordText = parts[0];
        const meaningText = parts.slice(1).join(' ');

        entry.words.push({
            word: wordText,
            phonetic: rootInfo.phonetic,
            partOfSpeech: "n.",
            meaning: meaningText || rootInfo.meaning,
            memoryTip: `${rootInfo.root} + ${wordText}`,
            root: rootInfo.root,
            rootPhonetic: rootInfo.phonetic,
            rootMeaning: rootInfo.meaning,
            rootPhrases: rootInfo.phrases,
            wordPhrases: rootInfo.phrases
        });
    }

    return entry;
}

// 生成完整条目
const fullEntries = newRoots.map(generateFullEntry);
console.log('生成完整条目数:', fullEntries.length);

// 追加到现有数据
data.push(...fullEntries);

console.log('合并后总条目数:', data.length);

// 保存回文件
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('数据已保存到文件');
