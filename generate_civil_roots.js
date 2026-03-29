const fs = require('fs');

// 定义300个土木工程专业词根数据
const civilRoots = [
  // 201-210: 结构力学核心
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

  // 211-220: 材料性能
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

  // 221-230: 结构类型
  { id: 221, root: "truss", phonetic: "/trʌs/", partOfSpeech: "名词", meaning: "桁架", mnemonic: "Truss→音似\"踹死\"→踹也踹不坏的桁架结构", phrases: ["truss bridge 桁架桥", "space truss 空间桁架", "truss member 桁架构件", "truss joint 桁架节点"] },
  { id: 222, root: "frame", phonetic: "/freɪm/", partOfSpeech: "名词/动词", meaning: "框架", mnemonic: "Frame→音似\"福瑞母\"→框架", phrases: ["rigid frame 刚架", "frame structure 框架结构", "portal frame 门式刚架", "frame analysis 框架分析"] },
  { id: 223, root: "arch", phonetic: "/ɑːtʃ/", partOfSpeech: "名词", meaning: "拱", mnemonic: "Arch→音似\"阿尺\"→拱形如尺→拱", phrases: ["arch bridge 拱桥", "three-hinged arch 三铰拱", "arch rib 拱肋", "parabolic arch 抛物线拱"] },
  { id: 224, root: "cable", phonetic: "/ˈkeɪbl/", partOfSpeech: "名词", meaning: "缆索；钢索", mnemonic: "Cable→音似\"开包\"→开包取出缆索", phrases: ["cable stayed bridge 斜拉桥", "suspension cable 悬索", "cable structure 索结构", "cable tension 索力"] },
  { id: 225, root: "dome", phonetic: "/dəʊm/", partOfSpeech: "名词", meaning: "穹顶；圆顶", mnemonic: "Dome→音似\" dome\"→圆顶", phrases: ["spherical dome 球面穹顶", "dome structure 穹顶结构", "ribbed dome 肋穹顶", "dome roof 穹顶屋面"] },
  { id: 226, root: "shell", phonetic: "/ʃel/", partOfSpeech: "名词", meaning: "壳体", mnemonic: "Shell→贝壳→壳体", phrases: ["shell structure 壳体结构", "thin shell 薄壳", "concrete shell 混凝土壳", "cylindrical shell 圆柱壳"] },
  { id: 227, root: "membrane", phonetic: "/ˈmembreɪn/", partOfSpeech: "名词", meaning: "膜；薄膜", mnemonic: "Membrane→member(构件)+ane→膜", phrases: ["membrane structure 膜结构", "membrane stress 薄膜应力", "membrane theory 薄膜理论", "tensile membrane 张拉膜"] },
  { id: 228, root: "plate", phonetic: "/pleɪt/", partOfSpeech: "名词", meaning: "板", mnemonic: "Plate→盘子→板", phrases: ["plate element 板单元", "flat plate 平板", "stiffened plate 加劲板", "plate theory 板理论"] },
  { id: 229, root: "shell", phonetic: "/ʃel/", partOfSpeech: "名词", meaning: "壳", mnemonic: "Shell→贝壳→壳体", phrases: ["thin shell 薄壳", "shell element 壳单元", "shell theory 壳理论", "cylindrical shell 圆柱壳"] },
  { id: 230, root: "lattice", phonetic: "/ˈlætɪs/", partOfSpeech: "名词", meaning: "格构；网格", mnemonic: "Lattice→latt(网格)+ice→格构", phrases: ["lattice girder 格构梁", "lattice tower 格构塔", "lattice structure 格构结构", "space lattice 空间格构"] },

  // 231-240: 基础工程
  { id: 231, root: "footing", phonetic: "/ˈfʊtɪŋ/", partOfSpeech: "名词", meaning: "基础；基脚", mnemonic: "Footing→foot(脚)+ing→基础", phrases: ["spread footing 扩展基础", "isolated footing 独立基础", "combined footing 联合基础", "strip footing 条形基础"] },
  { id: 232, root: "raft", phonetic: "/rɑːft/", partOfSpeech: "名词", meaning: "筏板", mnemonic: "Raft→筏子→筏板基础", phrases: ["raft foundation 筏板基础", "mat foundation 满堂基础", "raft slab 筏板", "buoyant raft 浮筏基础"] },
  { id: 233, root: "caisson", phonetic: "/ˈkeɪsən/", partOfSpeech: "名词", meaning: "沉箱", mnemonic: "Caisson→音似\"凯森\"→凯森沉箱", phrases: ["pneumatic caisson 气压沉箱", "open caisson 开口沉箱", "caisson foundation 沉箱基础", "caisson disease 沉箱病"] },
  { id: 234, root: "micropile", phonetic: "/ˈmaɪkrəʊpaɪl/", partOfSpeech: "名词", meaning: "微型桩", mnemonic: "Micropile→micro(微)+pile(桩)→微型桩", phrases: ["micropile foundation 微型桩基础", "micropile group 微型桩群", "root pile 树根桩", "micropile installation 微型桩施工"] },
  { id: 235, root: "compensated", phonetic: "/ˈkɒmpenseɪtɪd/", partOfSpeech: "形容词", meaning: "补偿的", mnemonic: "Compensated→compensate(补偿)+d→补偿的", phrases: ["compensated foundation 补偿基础", "fully compensated foundation 全补偿基础", "compensated raft 补偿筏板", "compensation grouting 补偿注浆"] },
  { id: 236, root: "floating", phonetic: "/ˈfləʊtɪŋ/", partOfSpeech: "形容词", meaning: "浮式的", mnemonic: "Floating→float(漂浮)+ing→浮式的", phrases: ["floating foundation 浮式基础", "floating slab 浮板", "floating structure 浮动结构", "semi-floating foundation 半浮式基础"] },
  { id: 237, root: "pile cap", phonetic: "/paɪl kæp/", partOfSpeech: "名词", meaning: "承台", mnemonic: "Pile cap→pile(桩)+cap(帽)→桩帽承台", phrases: ["pile cap 承台", "pile cap beam 承台梁", "group pile cap 群桩承台", "pile cap design 承台设计"] },
  { id: 238, root: "pile shaft", phonetic: "/paɪl ʃɑːft/", partOfSpeech: "名词", meaning: "桩身", mnemonic: "Pile shaft→pile(桩)+shaft(杆)→桩身", phrases: ["pile shaft 桩身", "shaft resistance 桩侧阻力", "pile shaft concrete 桩身混凝土", "enlarged pile shaft 扩底桩身"] },
  { id: 239, root: "pile toe", phonetic: "/paɪl təʊ/", partOfSpeech: "名词", meaning: "桩端", mnemonic: "Pile toe→pile(桩)+toe(脚尖)→桩端", phrases: ["pile toe 桩端", "toe resistance 端阻力", "pile toe bearing 桩端承载", "enlarged pile toe 扩底桩端"] },
  { id: 240, root: "underreamed", phonetic: "/ˌʌndəˈriːmd/", partOfSpeech: "形容词", meaning: "扩底的", mnemonic: "Underreamed→under(下)+ream(扩孔)+ed→扩底的", phrases: ["underreamed pile 扩底桩", "underreamed base 扩底基础", "underreaming 扩底施工", "underreamed caisson 扩底沉箱"] },

  // 241-250: 地下工程
  { id: 241, root: "tunnel", phonetic: "/ˈtʌnl/", partOfSpeech: "名词", meaning: "隧道", mnemonic: "Tunnel→音似\"塔扭\"→塔在地下扭→隧道", phrases: ["tunnel lining 隧道衬砌", "shield tunnel 盾构隧道", "tunnel boring machine 隧道掘进机", " immersed tube tunnel 沉管隧道"] },
  { id: 242, root: "shaft", phonetic: "/ʃɑːft/", partOfSpeech: "名词", meaning: "竖井", mnemonic: "Shaft→轴→竖井", phrases: ["ventilation shaft 通风竖井", "access shaft 进入竖井", "shaft sinking 竖井开挖", "drop shaft 跌水竖井"] },
  { id: 243, root: "adit", phonetic: "/ˈædɪt/", partOfSpeech: "名词", meaning: "平硐", mnemonic: "Adit→ad(向)+it→通向内部的平硐", phrases: ["exploration adit 勘探平硐", "drainage adit 排水平硐", "adit entrance 平硐口", "main adit 主平硐"] },
  { id: 244, root: "gallery", phonetic: "/ˈɡæləri/", partOfSpeech: "名词", meaning: "廊道", mnemonic: "Gallery→画廊→廊道", phrases: ["inspection gallery 检查廊道", "drainage gallery 排水廊道", "access gallery 进入廊道", "tailrace gallery 尾水廊道"] },
  { id: 245, root: "cavern", phonetic: "/ˈkævən/", partOfSpeech: "名词", meaning: "洞室", mnemonic: "Cavern→cave(洞)+rn→洞室", phrases: ["underground cavern 地下洞室", "powerhouse cavern 厂房洞室", "cavern excavation 洞室开挖", "cavern support 洞室支护"] },
  { id: 246, root: "excavation", phonetic: "/ˌekskəˈveɪʃn/", partOfSpeech: "名词", meaning: "开挖", mnemonic: "Excavation→ex(出)+cav(洞)+ation→挖出洞→开挖", phrases: ["excavation method 开挖方法", "deep excavation 深基坑", "excavation support 基坑支护", "excavation sequence 开挖顺序"] },
  { id: 247, root: "lining", phonetic: "/ˈlaɪnɪŋ/", partOfSpeech: "名词", meaning: "衬砌", mnemonic: "Lining→line(线)+ing→衬砌", phrases: ["tunnel lining 隧道衬砌", "primary lining 初期支护", "secondary lining 二次衬砌", "concrete lining 混凝土衬砌"] },
  { id: 248, root: "NATM", phonetic: "/nætm/", partOfSpeech: "缩写", meaning: "新奥法", mnemonic: "NATM→New Austrian Tunnelling Method→新奥法", phrases: ["NATM tunnel 新奥法隧道", "NATM principle 新奥法原理", "sequential excavation method 分部开挖法", "NATM support 新奥法支护"] },
  { id: 249, root: "shield", phonetic: "/ʃiːld/", partOfSpeech: "名词", meaning: "盾构", mnemonic: "Shield→盾牌→盾构如盾", phrases: ["shield machine 盾构机", "shield tunneling 盾构掘进", "earth pressure balance shield 土压平衡盾构", "slurry shield 泥水盾构"] },
  { id: 250, root: "TBM", phonetic: "/tiː biː em/", partOfSpeech: "缩写", meaning: "隧道掘进机", mnemonic: "TBM→Tunnel Boring Machine→隧道掘进机", phrases: ["TBM tunneling TBM掘进", "hard rock TBM 硬岩TBM", "TBM cutterhead TBM刀盘", "TBM advancement TBM推进"] },

  // 251-260: 道路工程
  { id: 251, root: "pavement", phonetic: "/ˈpeɪvmənt/", partOfSpeech: "名词", meaning: "路面", mnemonic: "Pavement→pave(铺设)+ment→路面", phrases: ["flexible pavement 柔性路面", "rigid pavement 刚性路面", "pavement design 路面设计", "pavement distress 路面损坏"] },
  { id: 252, root: "subgrade", phonetic: "/ˈsʌbɡreɪd/", partOfSpeech: "名词", meaning: "路基", mnemonic: "Subgrade→sub(下)+grade(级)→路基", phrases: ["subgrade soil 路基土", "subgrade modulus 路基模量", "subgrade reaction 路基反力", "subgrade improvement 路基改良"] },
  { id: 253, root: "subbase", phonetic: "/ˈsʌbbeɪs/", partOfSpeech: "名词", meaning: "底基层", mnemonic: "Subbase→sub(下)+base(基层)→底基层", phrases: ["subbase course 底基层", "granular subbase 粒料底基层", "subbase material 底基层材料", "subbase thickness 底基层厚度"] },
  { id: 254, root: "asphalt", phonetic: "/ˈæsfælt/", partOfSpeech: "名词", meaning: "沥青", mnemonic: "Asphalt→音似\"艾斯否特\"→沥青", phrases: ["asphalt concrete 沥青混凝土", "asphalt pavement 沥青路面", "asphalt binder 沥青结合料", "asphalt mixture 沥青混合料"] },
  { id: 255, root: "bitumen", phonetic: "/ˈbɪtjʊmɪn/", partOfSpeech: "名词", meaning: "沥青", mnemonic: "Bitumen→音似\"比图门\"→沥青", phrases: ["bituminous concrete 沥青混凝土", "modified bitumen 改性沥青", "bitumen emulsion 沥青乳液", "bitumen content 沥青含量"] },
  { id: 256, root: "aggregate", phonetic: "/ˈæɡrɪɡət/", partOfSpeech: "名词", meaning: "集料；骨料", mnemonic: "Aggregate→ag(聚集)+greg(群)+ate→集料", phrases: ["coarse aggregate 粗集料", "fine aggregate 细集料", "aggregate gradation 集料级配", "aggregate base 集料基层"] },
  { id: 257, root: "compaction", phonetic: "/kəmˈpækʃn/", partOfSpeech: "名词", meaning: "压实", mnemonic: "Compaction→com(一起)+pact(紧)+ion→压实", phrases: ["compaction test 压实试验", "degree of compaction 压实度", "compaction curve 压实曲线", "compaction effort 压实功"] },
  { id: 258, root: "camber", phonetic: "/ˈkæmbə/", partOfSpeech: "名词", meaning: "路拱", mnemonic: "Camber→音似\"看伯\"→看路拱", phrases: ["road camber 路拱", "camber slope 路拱坡度", "crown camber 中央路拱", "camber angle 路拱角"] },
  { id: 259, root: "superelevation", phonetic: "/ˌsuːpərɛlɪˈveɪʃn/", partOfSpeech: "名词", meaning: "超高", mnemonic: "Superelevation→super(超)+elevation(高)→超高", phrases: ["superelevation rate 超高率", "maximum superelevation 最大超高", "superelevation transition 超高过渡", "superelevation runoff 超高缓和段"] },
  { id: 260, root: "shoulder", phonetic: "/ˈʃəʊldə/", partOfSpeech: "名词", meaning: "路肩", mnemonic: "Shoulder→肩膀→路肩", phrases: ["paved shoulder 硬化路肩", "shoulder width 路肩宽度", "hard shoulder 硬路肩", "soft shoulder 软路肩"] },

  // 261-270: 桥梁工程
  { id: 261, root: "abutment", phonetic: "/əˈbʌtmənt/", partOfSpeech: "名词", meaning: "桥台", mnemonic: "Abutment→abut(邻接)+ment→邻接桥跨的构造→桥台", phrases: ["abutment wall 桥台墙", "wing wall 翼墙", "abutment foundation 桥台基础", "abutment seat 桥台支座"] },
  { id: 262, root: "pier", phonetic: "/pɪər/", partOfSpeech: "名词", meaning: "桥墩", mnemonic: "Pier→码头→桥墩", phrases: ["bridge pier 桥墩", "pier cap 墩帽", "solid pier 实体墩", "hollow pier 空心墩"] },
  { id: 263, root: "bent", phonetic: "/bent/", partOfSpeech: "名词", meaning: "排架", mnemonic: "Bent→弯曲→排架", phrases: ["bent cap 盖梁", "bent pier 排架墩", "pile bent 桩排架", "rigid frame bent 刚架排架"] },
  { id: 264, root: "deck", phonetic: "/dek/", partOfSpeech: "名词", meaning: "桥面", mnemonic: "Deck→甲板→桥面", phrases: ["bridge deck 桥面", "deck slab 桥面板", "deck wearing surface 桥面铺装", "orthotropic deck 正交异性板"] },
  { id: 265, root: "girder", phonetic: "/ˈɡɜːdə/", partOfSpeech: "名词", meaning: "大梁；主梁", mnemonic: "Girder→gird(围绕)+er→大梁", phrases: ["box girder 箱梁", "I-girder I形梁", "girder bridge 梁桥", "continuous girder 连续梁"] },
  { id: 266, root: "stringer", phonetic: "/ˈstrɪŋə/", partOfSpeech: "名词", meaning: "纵梁", mnemonic: "Stringer→string(线)+er→纵向线条→纵梁", phrases: ["floor stringer 桥面纵梁", "stringer beam 纵梁", "longitudinal stringer 纵向纵梁", "steel stringer 钢纵梁"] },
  { id: 267, root: "crossbeam", phonetic: "/ˈkrɒsbiːm/", partOfSpeech: "名词", meaning: "横梁", mnemonic: "Crossbeam→cross(横)+beam(梁)→横梁", phrases: ["diaphragm crossbeam 横隔梁", "crossbeam connection 横梁连接", "intermediate crossbeam 中间横梁", "rigid crossbeam 刚性横梁"] },
  { id: 268, root: "bearings", phonetic: "/ˈbeərɪŋz/", partOfSpeech: "名词", meaning: "支座", mnemonic: "Bearings→bearing(支撑)+s→支座", phrases: ["expansion bearing 活动支座", "fixed bearing 固定支座", "elastomeric bearing 橡胶支座", "pot bearing 盆式支座"] },
  { id: 269, root: "expansion", phonetic: "/ɪkˈspænʃn/", partOfSpeech: "名词", meaning: "伸缩缝", mnemonic: "Expansion→expand(膨胀)+sion→伸缩缝", phrases: ["expansion joint 伸缩缝", "expansion device 伸缩装置", "expansion gap 伸缩间隙", "modular expansion joint 模数式伸缩缝"] },
  { id: 270, root: "parapet", phonetic: "/ˈpærəpɪt/", partOfSpeech: "名词", meaning: "栏杆；护墙", mnemonic: "Parapet→para(旁)+pet(墙)→护墙", phrases: ["bridge parapet 桥梁栏杆", "parapet wall 护墙", "concrete parapet 混凝土护栏", "parapet height 栏杆高度"] },

  // 271-280: 水利工程
  { id: 271, root: "dam", phonetic: "/dæm/", partOfSpeech: "名词", meaning: "坝", mnemonic: "Dam→大坝", phrases: ["concrete dam 混凝土坝", "earth dam 土坝", "arch dam 拱坝", "gravity dam 重力坝"] },
  { id: 272, root: "embankment", phonetic: "/ɪmˈbæŋkmənt/", partOfSpeech: "名词", meaning: "堤；填方", mnemonic: "Embankment→em(入)+bank(岸)+ment→堤岸", phrases: ["earth embankment 土堤", "rockfill embankment 堆石堤", "embankment fill 路堤填方", "embankment slope 堤坡"] },
  { id: 273, root: "spillway", phonetic: "/ˈspɪlweɪ/", partOfSpeech: "名词", meaning: "溢洪道", mnemonic: "Spillway→spill(溢出)+way(道)→溢洪道", phrases: ["service spillway 主溢洪道", "emergency spillway 非常溢洪道", "side channel spillway 侧槽溢洪道", "spillway capacity 溢洪能力"] },
  { id: 274, root: "outlet", phonetic: "/ˈaʊtlet/", partOfSpeech: "名词", meaning: "出水口", mnemonic: "Outlet→out(出)+let(小)→出水口", phrases: ["outlet works 泄水建筑物", "outlet structure 出水结构", "outlet conduit 出水管道", "low level outlet 底层泄水孔"] },
  { id: 275, root: "intake", phonetic: "/ˈɪnteɪk/", partOfSpeech: "名词", meaning: "进水口", mnemonic: "Intake→in(进)+take(取)→进水口", phrases: ["water intake 进水口", "intake structure 取水建筑物", "tower intake 塔式进水口", "intake gate 进水闸门"] },
  { id: 276, root: "sluice", phonetic: "/sluːs/", partOfSpeech: "名词", meaning: "水闸；泄水孔", mnemonic: "Sluice→音似\"斯鲁斯\"→水闸", phrases: ["sluice gate 闸门", "sluice way 泄水道", "sluice valve 闸阀", "bottom sluice 底孔"] },
  { id: 277, root: "culvert", phonetic: "/ˈkʌlvət/", partOfSpeech: "名词", meaning: "涵洞", mnemonic: "Culvert→culv(管)+ert→涵洞", phrases: ["box culvert 箱涵", "pipe culvert 管涵", "culvert barrel 涵身", "culvert inlet 涵洞进口"] },
  { id: 278, root: "weir", phonetic: "/wɪər/", partOfSpeech: "名词", meaning: "堰", mnemonic: "Weir→音似\"威尔\"→堰", phrases: ["overflow weir 溢流堰", "measuring weir 量水堰", "sharp-crested weir 锐缘堰", "broad-crested weir 宽顶堰"] },
  { id: 279, root: "aqueduct", phonetic: "/ˈækwɪdʌkt/", partOfSpeech: "名词", meaning: "渡槽", mnemonic: "Aqueduct→aqua(水)+duct(引导)→渡槽", phrases: ["canal aqueduct 渠渡槽", "trough aqueduct 槽式渡槽", "piped aqueduct 管道渡槽", "aqueduct bridge 渡槽桥"] },
  { id: 280, root: "siphon", phonetic: "/ˈsaɪfn/", partOfSpeech: "名词", meaning: "倒虹吸", mnemonic: "Siphon→音似\"赛芬\"→倒虹吸", phrases: ["inverted siphon 倒虹吸", "siphon spillway 虹吸式溢洪道", "siphon breaker 虹吸破坏装置", "siphon conduit 虹吸管"] },

  // 281-290: 施工技术
  { id: 281, root: "scaffolding", phonetic: "/ˈskæfəldɪŋ/", partOfSpeech: "名词", meaning: "脚手架", mnemonic: "Scaffolding→scaffold(脚手架)+ing→脚手架", phrases: ["tubular scaffolding 钢管脚手架", "scaffolding system 脚手架系统", "scaffolding plank 脚手板", "scaffolding safety 脚手架安全"] },
  { id: 282, root: "formwork", phonetic: "/ˈfɔːmwɜːk/", partOfSpeech: "名词", meaning: "模板", mnemonic: "Formwork→form(形状)+work→形成形状的工装→模板", phrases: ["concrete formwork 混凝土模板", "formwork design 模板设计", "slipform 滑模", "formwork removal 拆模"] },
  { id: 283, root: "falsework", phonetic: "/ˈfɔːlswɜːk/", partOfSpeech: "名词", meaning: "支架；临时支撑", mnemonic: "Falsework→false(假)+work→临时工程→支架", phrases: ["falsework support 支架支撑", "falsework design 支架设计", "falsework removal 拆除支架", "falsework load 支架荷载"] },
  { id: 284, root: "shoring", phonetic: "/ˈʃɔːrɪŋ/", partOfSpeech: "名词", meaning: "支撑", mnemonic: "Shoring→shore(支撑)+ing→支撑", phrases: ["earth shoring 土壁支撑", "shoring system 支撑系统", "raking shore 斜撑", "flying shore 水平支撑"] },
  { id: 285, root: "curing", phonetic: "/ˈkjʊərɪŋ/", partOfSpeech: "名词", meaning: "养护", mnemonic: "Curing→cure(治愈)+ing→养护", phrases: ["concrete curing 混凝土养护", "curing period 养护期", "curing compound 养护剂", "steam curing 蒸汽养护"] },
  { id: 286, root: "batching", phonetic: "/ˈbætʃɪŋ/", partOfSpeech: "名词", meaning: "配料", mnemonic: "Batching→batch(批量)+ing→配料", phrases: ["batching plant 配料厂", "concrete batching 混凝土配料", "batching accuracy 配料精度", "automatic batching 自动配料"] },
  { id: 287, root: "pumping", phonetic: "/ˈpʌmpɪŋ/", partOfSpeech: "名词", meaning: "泵送", mnemonic: "Pumping→pump(泵)+ing→泵送", phrases: ["concrete pumping 混凝土泵送", "pumping station 泵站", "pumping test 抽水试验", "pumping head 泵扬程"] },
  { id: 288, root: "vibrating", phonetic: "/ˈvaɪbreɪtɪŋ/", partOfSpeech: "名词", meaning: "振捣", mnemonic: "Vibrating→vibrate(振动)+ing→振捣", phrases: ["vibrating poker 振捣棒", "vibrating screed 振捣刮板", "internal vibrating 内部振捣", "vibrating table 振动台"] },
  { id: 289, root: "tremie", phonetic: "/ˈtremi/", partOfSpeech: "名词", meaning: "导管", mnemonic: "Tremie→音似\"垂密\"→垂下密实的混凝土→导管", phrases: ["tremie pipe 导管", "tremie concrete 导管混凝土", "tremie method 导管法", "tremie seal 导管封底"] },
  { id: 290, root: "prestressing", phonetic: "/priːˈstresɪŋ/", partOfSpeech: "名词", meaning: "预应力张拉", mnemonic: "Prestressing→pre(先)+stress(应力)+ing→预应力", phrases: ["prestressing tendon 预应力筋", "prestressing jack 张拉千斤顶", "prestressing force 预应力", "post-tensioning 后张法"] },

  // 291-300: 结构分析
  { id: 291, root: "modeling", phonetic: "/ˈmɒdəlɪŋ/", partOfSpeech: "名词", meaning: "建模", mnemonic: "Modeling→model(模型)+ing→建模", phrases: ["structural modeling 结构建模", "finite element modeling 有限元建模", "numerical modeling 数值建模", "3D modeling 三维建模"] },
  { id: 292, root: "simulation", phonetic: "/ˌsɪmjuˈleɪʃn/", partOfSpeech: "名词", meaning: "仿真", mnemonic: "Simulation→simul(相似)+ation→仿真", phrases: ["numerical simulation 数值仿真", "dynamic simulation 动力仿真", "seismic simulation 地震仿真", "computer simulation 计算机仿真"] },
  { id: 293, root: "optimization", phonetic: "/ˌɒptɪmaɪˈzeɪʃn/", partOfSpeech: "名词", meaning: "优化", mnemonic: "Optimization→optim(最优)+ization→优化", phrases: ["structural optimization 结构优化", "design optimization 设计优化", "optimization method 优化方法", "topology optimization 拓扑优化"] },
  { id: 294, root: "iteration", phonetic: "/ˌɪtəˈreɪʃn/", partOfSpeech: "名词", meaning: "迭代", mnemonic: "Iteration→iter(重复)+ation→迭代", phrases: ["iteration method 迭代法", "iteration process 迭代过程", "convergence iteration 收敛迭代", "iteration number 迭代次数"] },
  { id: 295, root: "convergence", phonetic: "/kənˈvɜːdʒəns/", partOfSpeech: "名词", meaning: "收敛", mnemonic: "Convergence→con(共同)+verg(转)+ence→收敛", phrases: ["convergence criteria 收敛准则", "convergence rate 收敛速度", "convergence analysis 收敛分析", "convergence solution 收敛解"] },
  { id: 296, root: "matrix", phonetic: "/ˈmeɪtrɪks/", partOfSpeech: "名词", meaning: "矩阵", mnemonic: "Matrix→母体的→矩阵", phrases: ["stiffness matrix 刚度矩阵", "mass matrix 质量矩阵", "matrix analysis 矩阵分析", "matrix method 矩阵法"] },
  { id: 297, root: "vector", phonetic: "/ˈvektə/", partOfSpeech: "名词", meaning: "向量", mnemonic: "Vector→vect(携带)+or→向量", phrases: ["force vector 力向量", "displacement vector 位移向量", "eigenvector 特征向量", "vector analysis 向量分析"] },
  { id: 298, root: "eigenvalue", phonetic: "/ˈaɪɡənvæljuː/", partOfSpeech: "名词", meaning: "特征值", mnemonic: "Eigenvalue→eigen(自己的)+value(值)→特征值", phrases: ["eigenvalue analysis 特征值分析", "eigenvalue problem 特征值问题", "dominant eigenvalue 主导特征值", "eigenvalue equation 特征值方程"] },
  { id: 299, root: "modal", phonetic: "/ˈməʊdl/", partOfSpeech: "形容词", meaning: "模态的", mnemonic: "Modal→mode(模式)+al→模态的", phrases: ["modal analysis 模态分析", "modal shape 振型", "modal frequency 模态频率", "modal mass 模态质量"] },
  { id: 300, root: "damping", phonetic: "/ˈdæmpɪŋ/", partOfSpeech: "名词", meaning: "阻尼", mnemonic: "Damping→damp(阻尼)+ing→阻尼", phrases: ["damping ratio 阻尼比", "damping coefficient 阻尼系数", "modal damping 模态阻尼", "critical damping 临界阻尼"] }
];

// 生成完整的词根数据，包括words数组
function generateFullRootData(rootInfo, index) {
  const words = [
    {
      word: rootInfo.root,
      phonetic: rootInfo.phonetic,
      partOfSpeech: rootInfo.partOfSpeech === "名词" ? "n." : rootInfo.partOfSpeech === "动词" ? "v." : rootInfo.partOfSpeech === "形容词" ? "adj." : "n.",
      meaning: rootInfo.meaning,
      memoryTip: rootInfo.mnemonic.split('→')[1] || rootInfo.root,
      root: rootInfo.root,
      rootPhonetic: rootInfo.phonetic,
      rootMeaning: rootInfo.meaning,
      rootPhrases: rootInfo.phrases,
      wordPhrases: rootInfo.phrases
    },
    {
      word: rootInfo.root + " " + rootInfo.phrases[0].split(' ')[0],
      phonetic: rootInfo.phonetic,
      partOfSpeech: "n.",
      meaning: rootInfo.phrases[0].split(' ').slice(1).join(' '),
      memoryTip: rootInfo.root + " + " + rootInfo.phrases[0].split(' ')[0],
      root: rootInfo.root,
      rootPhonetic: rootInfo.phonetic,
      rootMeaning: rootInfo.meaning,
      rootPhrases: rootInfo.phrases,
      wordPhrases: rootInfo.phrases
    },
    {
      word: rootInfo.root + " " + rootInfo.phrases[1].split(' ')[0],
      phonetic: rootInfo.phonetic,
      partOfSpeech: "n.",
      meaning: rootInfo.phrases[1].split(' ').slice(1).join(' '),
      memoryTip: rootInfo.root + " + " + rootInfo.phrases[1].split(' ')[0],
      root: rootInfo.root,
      rootPhonetic: rootInfo.phonetic,
      rootMeaning: rootInfo.meaning,
      rootPhrases: rootInfo.phrases,
      wordPhrases: rootInfo.phrases
    },
    {
      word: rootInfo.root + " " + rootInfo.phrases[2].split(' ')[0],
      phonetic: rootInfo.phonetic,
      partOfSpeech: "n.",
      meaning: rootInfo.phrases[2].split(' ').slice(1).join(' '),
      memoryTip: rootInfo.root + " + " + rootInfo.phrases[2].split(' ')[0],
      root: rootInfo.root,
      rootPhonetic: rootInfo.phonetic,
      rootMeaning: rootInfo.meaning,
      rootPhrases: rootInfo.phrases,
      wordPhrases: rootInfo.phrases
    }
  ];

  return {
    id: rootInfo.id,
    root: rootInfo.root,
    phonetic: rootInfo.phonetic,
    partOfSpeech: rootInfo.partOfSpeech,
    frequency: rootInfo.id,
    category: "土木",
    words: words,
    phrases: rootInfo.phrases,
    mnemonic: rootInfo.mnemonic,
    meaning: rootInfo.meaning
  };
}

// 生成所有300个词根数据
const allRoots = civilRoots.map((root, index) => generateFullRootData(root, index));

// 输出到文件
const outputPath = 'f:/claudeanli/beidanci3/src/data/civil_roots_201_300.json';
fs.writeFileSync(outputPath, JSON.stringify(allRoots, null, 2), 'utf8');

console.log(`Generated ${allRoots.length} civil engineering roots`);
console.log(`ID range: ${allRoots[0].id} - ${allRoots[allRoots.length - 1].id}`);
console.log(`Output saved to: ${outputPath}`);
