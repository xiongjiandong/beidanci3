const fs = require('fs');

// 定义300个土木工程专业词根数据 (id 201-500)
const civilRoots = [
  // ===== 201-220: 结构力学核心术语 =====
  { id: 201, root: "moment", phonetic: "/ˈməʊmənt/", pos: "名词", meaning: "弯矩；力矩", mnemonic: "Moment→\"摸门特\"→摸门框时产生的旋转力→弯矩", phrases: ["bending moment 弯矩", "moment of inertia 惯性矩", "resisting moment 抵抗矩", "overturning moment 倾覆力矩"] },
  { id: 202, root: "shear", phonetic: "/ʃɪər/", pos: "名词/动词", meaning: "剪切；剪力", mnemonic: "Shear→\"希尔\"→希尔用剪刀剪切材料→剪切", phrases: ["shear force 剪力", "shear stress 剪应力", "shear wall 剪力墙", "shear strength 抗剪强度"] },
  { id: 203, root: "axial", phonetic: "/ˈæksiəl/", pos: "形容词", meaning: "轴向的", mnemonic: "Axial→axis(轴)+al→轴向的", phrases: ["axial force 轴向力", "axial load 轴向荷载", "axial compression 轴向压力", "axial tension 轴向拉力"] },
  { id: 204, root: "torsional", phonetic: "/ˈtɔːʃənl/", pos: "形容词", meaning: "扭转的", mnemonic: "Torsional→tors(扭)+ional→扭转的", phrases: ["torsional moment 扭矩", "torsional stress 扭转应力", "torsional rigidity 抗扭刚度", "torsional deformation 扭转变形"] },
  { id: 205, root: "deflection", phonetic: "/dɪˈflekʃn/", pos: "名词", meaning: "挠度；偏转", mnemonic: "Deflection→de(向下)+flect(弯曲)+ion→向下弯曲→挠度", phrases: ["deflection limit 挠度限值", "lateral deflection 侧向挠度", "maximum deflection 最大挠度", "deflection calculation 挠度计算"] },
  { id: 206, root: "rotation", phonetic: "/rəʊˈteɪʃn/", pos: "名词", meaning: "旋转；转角", mnemonic: "Rotation→rot(转)+ation→旋转", phrases: ["rotation angle 转角", "rigid body rotation 刚体转动", "rotation restraint 转动约束", "allowable rotation 允许转角"] },
  { id: 207, root: "stiffness", phonetic: "/ˈstɪfnəs/", pos: "名词", meaning: "刚度", mnemonic: "Stiffness→stiff(硬的)+ness→刚度", phrases: ["flexural stiffness 抗弯刚度", "lateral stiffness 侧向刚度", "stiffness matrix 刚度矩阵", "relative stiffness 相对刚度"] },
  { id: 208, root: "rigidity", phonetic: "/rɪˈdʒɪdəti/", pos: "名词", meaning: "刚性", mnemonic: "Rigidity→rigid(刚性的)+ity→刚性", phrases: ["torsional rigidity 抗扭刚度", "bending rigidity 抗弯刚度", "flexural rigidity 弯曲刚度", "rigidity modulus 刚性模量"] },
  { id: 209, root: "flexibility", phonetic: "/ˌfleksəˈbɪləti/", pos: "名词", meaning: "柔度", mnemonic: "Flexibility→flex(弯曲)+ibility→柔度", phrases: ["flexibility coefficient 柔度系数", "flexibility matrix 柔度矩阵", "member flexibility 构件柔度", "flexibility method 柔度法"] },
  { id: 210, root: "elasticity", phonetic: "/ˌiːlæˈstɪsəti/", pos: "名词", meaning: "弹性", mnemonic: "Elasticity→elastic(弹性的)+ity→弹性", phrases: ["modulus of elasticity 弹性模量", "elasticity theory 弹性理论", "elasticity limit 弹性极限", "elasticity coefficient 弹性系数"] },
  { id: 211, root: "ductility", phonetic: "/dʌkˈtɪləti/", pos: "名词", meaning: "延性", mnemonic: "Ductility→duct(引导)+ility→可引导变形→延性", phrases: ["ductility ratio 延性比", "ductility demand 延性需求", "ductility capacity 延性能力", "ductile design 延性设计"] },
  { id: 212, root: "brittle", phonetic: "/ˈbrɪtl/", pos: "形容词", meaning: "脆性的", mnemonic: "Brittle→音似\"不韧透\"→不韧→脆性的", phrases: ["brittle fracture 脆性断裂", "brittle material 脆性材料", "brittle failure 脆性破坏", "brittle zone 脆化区"] },
  { id: 213, root: "plasticity", phonetic: "/plæˈstɪsəti/", pos: "名词", meaning: "塑性", mnemonic: "Plasticity→plastic(塑料的)+ity→塑性", phrases: ["plasticity index 塑性指数", "theory of plasticity 塑性理论", "plasticity analysis 塑性分析", "plasticity condition 塑性条件"] },
  { id: 214, root: "viscosity", phonetic: "/vɪˈskɒsəti/", pos: "名词", meaning: "黏度；黏性", mnemonic: "Viscosity→visc(黏)+osity→黏度", phrases: ["coefficient of viscosity 黏度系数", "dynamic viscosity 动力黏度", "kinematic viscosity 运动黏度", "viscosity ratio 黏度比"] },
  { id: 215, root: "porosity", phonetic: "/pɔːˈrɒsəti/", pos: "名词", meaning: "孔隙率", mnemonic: "Porosity→pore(孔)+osity→孔隙率", phrases: ["porosity ratio 孔隙比", "effective porosity 有效孔隙率", "soil porosity 土孔隙率", "porosity distribution 孔隙分布"] },
  { id: 216, root: "permeability", phonetic: "/ˌpɜːmiəˈbɪləti/", pos: "名词", meaning: "渗透性", mnemonic: "Permeability→perme(穿过)+ability→渗透性", phrases: ["coefficient of permeability 渗透系数", "permeability test 渗透试验", "hydraulic permeability 水力渗透性", "air permeability 透气性"] },
  { id: 217, root: "cohesion", phonetic: "/kəʊˈhiːʒn/", pos: "名词", meaning: "黏聚力", mnemonic: "Cohesion→co(共同)+hes(黏)+ion→黏聚力", phrases: ["cohesion intercept 黏聚力截距", "apparent cohesion 表观黏聚力", "cohesionless soil 无黏性土", "cohesive soil 黏性土"] },
  { id: 218, root: "friction", phonetic: "/ˈfrɪkʃn/", pos: "名词", meaning: "摩擦", mnemonic: "Friction→frict(摩擦)+ion→摩擦", phrases: ["friction angle 摩擦角", "friction coefficient 摩擦系数", "skin friction 侧摩阻力", "friction pile 摩擦桩"] },
  { id: 219, root: "adhesion", phonetic: "/ədˈhiːʒn/", pos: "名词", meaning: "黏附力", mnemonic: "Adhesion→ad(向)+hes(黏)+ion→黏附力", phrases: ["adhesion factor 黏附系数", "adhesive bond 黏结", "adhesion strength 黏附强度", "adhesion test 黏附试验"] },
  { id: 220, root: "shrinkage", phonetic: "/ˈʃrɪŋkɪdʒ/", pos: "名词", meaning: "收缩", mnemonic: "Shrinkage→shrink(收缩)+age→收缩", phrases: ["shrinkage strain 收缩应变", "drying shrinkage 干缩", "shrinkage crack 收缩裂缝", "shrinkage coefficient 收缩系数"] },

  // ===== 221-240: 结构类型与体系 =====
  { id: 221, root: "truss", phonetic: "/trʌs/", pos: "名词", meaning: "桁架", mnemonic: "Truss→音似\"踹死\"→踹也踹不坏的桁架结构", phrases: ["truss bridge 桁架桥", "space truss 空间桁架", "truss member 桁架构件", "truss joint 桁架节点"] },
  { id: 222, root: "frame", phonetic: "/freɪm/", pos: "名词/动词", meaning: "框架", mnemonic: "Frame→音似\"福瑞母\"→框架", phrases: ["rigid frame 刚架", "frame structure 框架结构", "portal frame 门式刚架", "frame analysis 框架分析"] },
  { id: 223, root: "arch", phonetic: "/ɑːtʃ/", pos: "名词", meaning: "拱", mnemonic: "Arch→音似\"阿尺\"→拱形如尺→拱", phrases: ["arch bridge 拱桥", "three-hinged arch 三铰拱", "arch rib 拱肋", "parabolic arch 抛物线拱"] },
  { id: 224, root: "cable", phonetic: "/ˈkeɪbl/", pos: "名词", meaning: "缆索；钢索", mnemonic: "Cable→音似\"开包\"→开包取出缆索", phrases: ["cable stayed bridge 斜拉桥", "suspension cable 悬索", "cable structure 索结构", "cable tension 索力"] },
  { id: 225, root: "dome", phonetic: "/dəʊm/", pos: "名词", meaning: "穹顶；圆顶", mnemonic: "Dome→音似\" dome\"→圆顶", phrases: ["spherical dome 球面穹顶", "dome structure 穹顶结构", "ribbed dome 肋穹顶", "dome roof 穹顶屋面"] },
  { id: 226, root: "shell", phonetic: "/ʃel/", pos: "名词", meaning: "壳体", mnemonic: "Shell→贝壳→壳体", phrases: ["shell structure 壳体结构", "thin shell 薄壳", "concrete shell 混凝土壳", "cylindrical shell 圆柱壳"] },
  { id: 227, root: "membrane", phonetic: "/ˈmembreɪn/", pos: "名词", meaning: "膜；薄膜", mnemonic: "Membrane→member(构件)+ane→膜", phrases: ["membrane structure 膜结构", "membrane stress 薄膜应力", "membrane theory 薄膜理论", "tensile membrane 张拉膜"] },
  { id: 228, root: "plate", phonetic: "/pleɪt/", pos: "名词", meaning: "板", mnemonic: "Plate→盘子→板", phrases: ["plate element 板单元", "flat plate 平板", "stiffened plate 加劲板", "plate theory 板理论"] },
  { id: 229, root: "lattice", phonetic: "/ˈlætɪs/", pos: "名词", meaning: "格构；网格", mnemonic: "Lattice→latt(网格)+ice→格构", phrases: ["lattice girder 格构梁", "lattice tower 格构塔", "lattice structure 格构结构", "space lattice 空间格构"] },
  { id: 230, root: "space", phonetic: "/speɪs/", pos: "名词", meaning: "空间", mnemonic: "Space→空间→空间结构", phrases: ["space frame 空间框架", "space structure 空间结构", "space truss 空间桁架", "clear space 净空间"] },
  { id: 231, root: "catenary", phonetic: "/kəˈtiːnəri/", pos: "名词", meaning: "悬链线", mnemonic: "Catenary→cat(猫)+enary→猫爬的曲线→悬链线", phrases: ["catenary curve 悬链线", "catenary arch 悬链拱", "catenary cable 悬链索", "inverted catenary 倒悬链线"] },
  { id: 232, root: "grid", phonetic: "/ɡrɪd/", pos: "名词", meaning: "网格", mnemonic: "Grid→格子→网格", phrases: ["grid structure 网格结构", "grid beam 网格梁", "column grid 柱网", "structural grid 结构网格"] },
  { id: 233, root: "diaphragm", phonetic: "/ˈdaɪəfræm/", pos: "名词", meaning: "横隔板", mnemonic: "Diaphragm→dia(横)+phragm(隔)→横隔板", phrases: ["floor diaphragm 楼层横隔板", "diaphragm action 横隔板作用", "rigid diaphragm 刚性横隔板", "flexible diaphragm 柔性横隔板"] },
  { id: 234, root: "bracing", phonetic: "/ˈbreɪsɪŋ/", pos: "名词", meaning: "支撑", mnemonic: "Bracing→brace(支撑)+ing→支撑系统", phrases: ["lateral bracing 侧向支撑", "cross bracing 交叉支撑", "bracing system 支撑系统", "diagonal bracing 斜撑"] },
  { id: 235, root: "gusset", phonetic: "/ˈɡʌsɪt/", pos: "名词", meaning: "节点板", mnemonic: "Gusset→音似\"嘎塞特\"→节点板", phrases: ["gusset plate 节点板", "gusset connection 节点板连接", "gusset joint 节点板连接", "gusset angle 节点角钢"] },
  { id: 236, root: "haunch", phonetic: "/hɔːntʃ/", pos: "名词", meaning: "腋；加腋", mnemonic: "Haunch→音似\"厚区\"→加腋加厚区", phrases: ["haunch reinforcement 腋部钢筋", "haunch beam 加腋梁", "column haunch 柱腋", "haunch depth 腋高"] },
  { id: 237, root: "corbel", phonetic: "/ˈkɔːbl/", pos: "名词", meaning: "牛腿", mnemonic: "Corbel→音似\"考博\"→牛腿", phrases: ["corbel support 牛腿支承", "corbel bracket 牛腿托架", "corbelled arch 悬挑拱", "corbel course 悬挑层"] },
  { id: 238, root: "cantilever", phonetic: "/ˈkæntɪliːvə/", pos: "名词", meaning: "悬臂", mnemonic: "Cantilever→canti(唱)+lever(杠杆)→悬臂如杠杆", phrases: ["cantilever beam 悬臂梁", "cantilever slab 悬臂板", "cantilever bridge 悬臂桥", "cantilever length 悬臂长度"] },
  { id: 239, root: "pendant", phonetic: "/ˈpendənt/", pos: "名词", meaning: "吊杆", mnemonic: "Pendant→pend(悬挂)+ant→吊杆", phrases: ["pendant post 吊杆", "pendant cable 吊索", "vertical pendant 竖向吊杆", "pendant support 吊杆支撑"] },
  { id: 240, root: "portal", phonetic: "/ˈpɔːtl/", pos: "名词", meaning: "门式框架", mnemonic: "Portal→port(门)+al→门式框架", phrases: ["portal frame 门式刚架", "portal method 门架法", "portal structure 门式结构", "portal bracing 门式支撑"] }
];

console.log(`Total roots defined: ${civilRoots.length}`);
console.log(`ID range: ${civilRoots[0].id} - ${civilRoots[civilRoots.length - 1].id}`);
