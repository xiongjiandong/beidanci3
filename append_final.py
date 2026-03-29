#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Append final 140 civil engineering roots (id 361-500) to the existing JSON file.
"""

import json

# Read existing file
file_path = 'f:/claudeanli/beidanci3/src/data/civil-engineering.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Current entries: {len(data)}")
print(f"Last entry ID: {data[-1]['id']}")
print(f"Last entry root: {data[-1]['root']}")

# Define final 140 civil engineering roots (id 361-500)
new_roots_raw = [
    # ===== 361-380: Structural Analysis =====
    {"id": 361, "root": "modeling", "phonetic": "/ˈmɒdəlɪŋ/", "pos": "名词", "meaning": "建模", "mnemonic": "Modeling→model(模型)+ing→建模", "phrases": ["structural modeling 结构建模", "finite element modeling 有限元建模", "numerical modeling 数值建模", "3D modeling 三维建模"]},
    {"id": 362, "root": "simulation", "phonetic": "/ˌsɪmjuˈleɪʃn/", "pos": "名词", "meaning": "仿真", "mnemonic": "Simulation→simul(相似)+ation→仿真", "phrases": ["numerical simulation 数值仿真", "dynamic simulation 动力仿真", "seismic simulation 地震仿真", "computer simulation 计算机仿真"]},
    {"id": 363, "root": "optimization", "phonetic": "/ˌɒptɪmaɪˈzeɪʃn/", "pos": "名词", "meaning": "优化", "mnemonic": "Optimization→optim(最优)+ization→优化", "phrases": ["structural optimization 结构优化", "design optimization 设计优化", "optimization method 优化方法", "topology optimization 拓扑优化"]},
    {"id": 364, "root": "iteration", "phonetic": "/ˌɪtəˈreɪʃn/", "pos": "名词", "meaning": "迭代", "mnemonic": "Iteration→iter(重复)+ation→迭代", "phrases": ["iteration method 迭代法", "iteration process 迭代过程", "convergence iteration 收敛迭代", "iteration number 迭代次数"]},
    {"id": 365, "root": "convergence", "phonetic": "/kənˈvɜːdʒəns/", "pos": "名词", "meaning": "收敛", "mnemonic": "Convergence→con(共同)+verg(转)+ence→收敛", "phrases": ["convergence criteria 收敛准则", "convergence rate 收敛速度", "convergence analysis 收敛分析", "convergence solution 收敛解"]},
    {"id": 366, "root": "matrix", "phonetic": "/ˈmeɪtrɪks/", "pos": "名词", "meaning": "矩阵", "mnemonic": "Matrix→母体的→矩阵", "phrases": ["stiffness matrix 刚度矩阵", "mass matrix 质量矩阵", "matrix analysis 矩阵分析", "matrix method 矩阵法"]},
    {"id": 367, "root": "vector", "phonetic": "/ˈvektə/", "pos": "名词", "meaning": "向量", "mnemonic": "Vector→vect(携带)+or→向量", "phrases": ["force vector 力向量", "displacement vector 位移向量", "eigenvector 特征向量", "vector analysis 向量分析"]},
    {"id": 368, "root": "eigenvalue", "phonetic": "/ˈaɪɡənvæljuː/", "pos": "名词", "meaning": "特征值", "mnemonic": "Eigenvalue→eigen(自己的)+value(值)→特征值", "phrases": ["eigenvalue analysis 特征值分析", "eigenvalue problem 特征值问题", "dominant eigenvalue 主导特征值", "eigenvalue equation 特征值方程"]},
    {"id": 369, "root": "modal", "phonetic": "/ˈməʊdl/", "pos": "形容词", "meaning": "模态的", "mnemonic": "Modal→mode(模式)+al→模态的", "phrases": ["modal analysis 模态分析", "modal shape 振型", "modal frequency 模态频率", "modal mass 模态质量"]},
    {"id": 370, "root": "damping", "phonetic": "/ˈdæmpɪŋ/", "pos": "名词", "meaning": "阻尼", "mnemonic": "Damping→damp(阻尼)+ing→阻尼", "phrases": ["damping ratio 阻尼比", "damping coefficient 阻尼系数", "modal damping 模态阻尼", "critical damping 临界阻尼"]},
    {"id": 371, "root": "resonance", "phonetic": "/ˈrezənəns/", "pos": "名词", "meaning": "共振", "mnemonic": "Resonance→re(再)+son(声音)+ance→共振", "phrases": ["resonance frequency 共振频率", "resonance peak 共振峰", "resonance response 共振响应", "avoid resonance 避免共振"]},
    {"id": 372, "root": "harmonic", "phonetic": "/hɑːˈmɒnɪk/", "pos": "形容词", "meaning": "谐波的", "mnemonic": "Harmonic→harmony(和谐)+ic→谐波的", "phrases": ["harmonic analysis 谐波分析", "harmonic load 谐波荷载", "harmonic response 谐波响应", "harmonic vibration 谐波振动"]},
    {"id": 373, "root": "transient", "phonetic": "/ˈtrænziənt/", "pos": "形容词", "meaning": "瞬态的", "mnemonic": "Transient→trans(穿过)+ient→瞬态的", "phrases": ["transient analysis 瞬态分析", "transient response 瞬态响应", "transient load 瞬态荷载", "transient vibration 瞬态振动"]},
    {"id": 374, "root": "steady", "phonetic": "/ˈstedi/", "pos": "形容词", "meaning": "稳态的", "mnemonic": "Steady→stead(位置)+y→稳定的→稳态的", "phrases": ["steady state 稳态", "steady response 稳态响应", "steady vibration 稳态振动", "steady flow 稳态流"]},
    {"id": 375, "root": "buckling", "phonetic": "/ˈbʌklɪŋ/", "pos": "名词", "meaning": "屈曲", "mnemonic": "Buckling→buck(弯曲)+ling→屈曲", "phrases": ["buckling analysis 屈曲分析", "buckling load 屈曲荷载", "buckling mode 屈曲模态", "elastic buckling 弹性屈曲"]},
    {"id": 376, "root": "instability", "phonetic": "/ˌɪnstəˈbɪləti/", "pos": "名词", "meaning": "失稳", "mnemonic": "Instability→in(不)+stability(稳定)→失稳", "phrases": ["structural instability 结构失稳", "instability mode 失稳模态", "lateral instability 侧向失稳", "torsional instability 扭转失稳"]},
    {"id": 377, "root": "perturbation", "phonetic": "/ˌpɜːtəˈbeɪʃn/", "pos": "名词", "meaning": "扰动", "mnemonic": "Perturbation→perturb(扰乱)+ation→扰动", "phrases": ["perturbation method 扰动法", "perturbation analysis 扰动分析", "structural perturbation 结构扰动", "perturbation theory 扰动理论"]},
    {"id": 378, "root": "linearity", "phonetic": "/ˌlɪniˈærəti/", "pos": "名词", "meaning": "线性", "mnemonic": "Linearity→linear(线性的)+ity→线性", "phrases": ["linearity assumption 线性假设", "linearity range 线性范围", "geometric linearity 几何线性", "material linearity 材料线性"]},
    {"id": 379, "root": "nonlinearity", "phonetic": "/ˌnɒnlɪniˈærəti/", "pos": "名词", "meaning": "非线性", "mnemonic": "Nonlinearity→non(非)+linearity(线性)→非线性", "phrases": ["geometric nonlinearity 几何非线性", "material nonlinearity 材料非线性", "nonlinearity analysis 非线性分析", "nonlinearity effect 非线性效应"]},
    {"id": 380, "root": "superposition", "phonetic": "/ˌsuːpəpəˈzɪʃn/", "pos": "名词", "meaning": "叠加", "mnemonic": "Superposition→super(超)+position(位置)→叠加", "phrases": ["superposition principle 叠加原理", "superposition method 叠加法", "load superposition 荷载叠加", "effect superposition 效应叠加"]},

    # ===== 381-400: Geotechnical Engineering =====
    {"id": 381, "root": "soil", "phonetic": "/sɔɪl/", "pos": "名词", "meaning": "土；土壤", "mnemonic": "Soil→音似\"烧油\"→烧油化验土", "phrases": ["soil mechanics 土力学", "soil classification 土的分类", "cohesive soil 黏性土", "granular soil 粒状土"]},
    {"id": 382, "root": "rock", "phonetic": "/rɒk/", "pos": "名词", "meaning": "岩石", "mnemonic": "Rock→岩石→岩石", "phrases": ["rock mechanics 岩石力学", "igneous rock 火成岩", "sedimentary rock 沉积岩", "metamorphic rock 变质岩"]},
    {"id": 383, "root": "stratum", "phonetic": "/ˈstrɑːtəm/", "pos": "名词", "meaning": "地层", "mnemonic": "Stratum→strat(层)+um→地层", "phrases": ["soil stratum 土层", "rock stratum 岩层", "bearing stratum 持力层", "soft stratum 软土层"]},
    {"id": 384, "root": "groundwater", "phonetic": "/ˈɡraʊndwɔːtə/", "pos": "名词", "meaning": "地下水", "mnemonic": "Groundwater→ground(地面)+water(水)→地下水", "phrases": ["groundwater level 地下水位", "groundwater table 地下水面", "groundwater flow 地下水流动", "groundwater pressure 地下水压力"]},
    {"id": 385, "root": "settlement", "phonetic": "/ˈsetlmənt/", "pos": "名词", "meaning": "沉降", "mnemonic": "Settlement→settle(沉淀)+ment→沉降", "phrases": ["foundation settlement 地基沉降", "differential settlement 差异沉降", "consolidation settlement 固结沉降", "immediate settlement 瞬时沉降"]},
    {"id": 386, "root": "consolidation", "phonetic": "/kənˌsɒlɪˈdeɪʃn/", "pos": "名词", "meaning": "固结", "mnemonic": "Consolidation→con(共同)+solid(固)+ation→固结", "phrases": ["primary consolidation 主固结", "secondary consolidation 次固结", "consolidation test 固结试验", "consolidation coefficient 固结系数"]},
    {"id": 387, "root": "liquefaction", "phonetic": "/ˌlɪkwɪˈfækʃn/", "pos": "名词", "meaning": "液化", "mnemonic": "Liquefaction→liqu(液)+fact(做)+ion→液化", "phrases": ["soil liquefaction 土壤液化", "liquefaction potential 液化势", "liquefaction analysis 液化分析", "liquefaction resistance 抗液化能力"]},
    {"id": 388, "root": "earthquake", "phonetic": "/ˈɜːθkweɪk/", "pos": "名词", "meaning": "地震", "mnemonic": "Earthquake→earth(地)+quake(震动)→地震", "phrases": ["earthquake load 地震荷载", "earthquake resistant 抗震", "earthquake zone 地震区", "design earthquake 设计地震"]},
    {"id": 389, "root": "subsidence", "phonetic": "/səbˈsaɪdns/", "pos": "名词", "meaning": "沉陷", "mnemonic": "Subsidence→sub(下)+sid(坐)+ence→下沉→沉陷", "phrases": ["ground subsidence 地面沉陷", "mining subsidence 采矿沉陷", "subsidence basin 沉陷盆地", "subsidence monitoring 沉陷监测"]},
    {"id": 390, "root": "heave", "phonetic": "/hiːv/", "pos": "名词", "meaning": "隆起", "mnemonic": "Heave→举起→隆起", "phrases": ["ground heave 地面隆起", "base heave 基底隆起", "heave pressure 隆起压力", "frost heave 冻胀"]},
    {"id": 391, "root": "swelling", "phonetic": "/ˈswelɪŋ/", "pos": "名词", "meaning": "膨胀", "mnemonic": "Swelling→swell(膨胀)+ing→膨胀", "phrases": ["soil swelling 土膨胀", "swelling pressure 膨胀压力", "swelling index 膨胀指数", "swelling potential 膨胀势"]},
    {"id": 392, "root": "collapsibility", "phonetic": "/kəˈlæpsəˈbɪləti/", "pos": "名词", "meaning": "湿陷性", "mnemonic": "Collapsibility→collapse(塌陷)+ibility→湿陷性", "phrases": ["collapsible soil 湿陷性土", "collapsibility coefficient 湿陷系数", "collapsibility test 湿陷试验", "self-weight collapsibility 自重湿陷性"]},
    {"id": 393, "root": "slope", "phonetic": "/sləʊp/", "pos": "名词", "meaning": "边坡", "mnemonic": "Slope→斜坡→边坡", "phrases": ["slope stability 边坡稳定性", "slope angle 边坡角", "slope protection 边坡防护", "slope failure 边坡破坏"]},
    {"id": 394, "root": "landslide", "phonetic": "/ˈlændslaɪd/", "pos": "名词", "meaning": "滑坡", "mnemonic": "Landslide→land(地)+slide(滑动)→滑坡", "phrases": ["landslide hazard 滑坡灾害", "landslide mass 滑坡体", "landslide zone 滑坡区", "landslide prevention 滑坡防治"]},
    {"id": 395, "root": "retaining", "phonetic": "/rɪˈteɪnɪŋ/", "pos": "形容词", "meaning": "挡土的", "mnemonic": "Retaining→retain(保持)+ing→挡土的", "phrases": ["retaining wall 挡土墙", "retaining structure 挡土结构", "retaining system 挡土系统", "earth retaining 挡土"]},
    {"id": 396, "root": "anchor", "phonetic": "/ˈæŋkə/", "pos": "名词", "meaning": "锚固", "mnemonic": "Anchor→音似\"安可\"→安全可靠地固定", "phrases": ["ground anchor 土锚", "rock anchor 岩锚", "anchor bolt 锚栓", "anchor cable 锚索"]},
    {"id": 397, "root": "tieback", "phonetic": "/ˈtaɪbæk/", "pos": "名词", "meaning": "锚杆", "mnemonic": "Tieback→tie(绑)+back(回)→拉回的锚杆", "phrases": ["tieback wall 锚杆墙", "tieback anchor 锚杆锚固", "tieback installation 锚杆安装", "temporary tieback 临时锚杆"]},
    {"id": 398, "root": "nailing", "phonetic": "/ˈneɪlɪŋ/", "pos": "名词", "meaning": "土钉", "mnemonic": "Nailing→nail(钉)+ing→土钉", "phrases": ["soil nailing 土钉墙", "nailing wall 土钉墙", "nailing system 土钉系统", "nailing construction 土钉施工"]},
    {"id": 399, "root": "grouting", "phonetic": "/ˈɡraʊtɪŋ/", "pos": "名词", "meaning": "灌浆", "mnemonic": "Grouting→grout(灌浆)+ing→灌浆", "phrases": ["jet grouting 旋喷灌浆", "compaction grouting 压实灌浆", "grouting pressure 灌浆压力", "grouting hole 灌浆孔"]},
    {"id": 400, "root": "stabilization", "phonetic": "/ˌsteɪbəlaɪˈzeɪʃn/", "pos": "名词", "meaning": "加固", "mnemonic": "Stabilization→stabil(稳定)+ization→加固", "phrases": ["ground stabilization 地基加固", "slope stabilization 边坡加固", "soil stabilization 土体加固", "stabilization method 加固方法"]},

    # ===== 401-420: Building Materials =====
    {"id": 401, "root": "concrete", "phonetic": "/ˈkɒŋkriːt/", "pos": "名词", "meaning": "混凝土", "mnemonic": "Concrete→con(一起)+crete(生长)→混凝土", "phrases": ["reinforced concrete 钢筋混凝土", "concrete strength 混凝土强度", "concrete mix 混凝土配合比", "ready-mixed concrete 预拌混凝土"]},
    {"id": 402, "root": "cement", "phonetic": "/sɪˈment/", "pos": "名词", "meaning": "水泥", "mnemonic": "Cement→音似\"色门特\"→水泥", "phrases": ["Portland cement 硅酸盐水泥", "cement mortar 水泥砂浆", "cement paste 水泥浆", "cement content 水泥含量"]},
    {"id": 403, "root": "aggregate", "phonetic": "/ˈæɡrɪɡət/", "pos": "名词", "meaning": "骨料", "mnemonic": "Aggregate→ag(聚集)+greg(群)+ate→骨料", "phrases": ["coarse aggregate 粗骨料", "fine aggregate 细骨料", "lightweight aggregate 轻骨料", "aggregate grading 骨料级配"]},
    {"id": 404, "root": "admixture", "phonetic": "/ədˈmɪkstʃə/", "pos": "名词", "meaning": "外加剂", "mnemonic": "Admixture→ad(加)+mix(混合)+ture→外加剂", "phrases": ["chemical admixture 化学外加剂", "concrete admixture 混凝土外加剂", "water reducer 减水剂", "accelerating admixture 早强剂"]},
    {"id": 405, "root": "reinforcement", "phonetic": "/ˌriːɪnˈfɔːsmənt/", "pos": "名词", "meaning": "钢筋", "mnemonic": "Reinforcement→re(再)+inforce(加强)+ment→钢筋", "phrases": ["steel reinforcement 钢筋", "reinforcement bar 钢筋", "main reinforcement 主筋", "distribution reinforcement 分布筋"]},
    {"id": 406, "root": "rebar", "phonetic": "/ˈriːbɑː/", "pos": "名词", "meaning": "钢筋", "mnemonic": "Rebar→reinforcing bar→钢筋", "phrases": ["rebar cage 钢筋笼", "rebar spacing 钢筋间距", "rebar lap 钢筋搭接", "deformed rebar 带肋钢筋"]},
    {"id": 407, "root": "prestressed", "phonetic": "/ˌpriːˈstrest/", "pos": "形容词", "meaning": "预应力的", "mnemonic": "Prestressed→pre(先)+stressed(受力)→预应力的", "phrases": ["prestressed concrete 预应力混凝土", "prestressed steel 预应力钢材", "prestressed beam 预应力梁", "prestressed tendon 预应力筋"]},
    {"id": 408, "root": "tendon", "phonetic": "/ˈtendən/", "pos": "名词", "meaning": "预应力筋", "mnemonic": "Tendon→音似\"探等\"→预应力筋探索等待", "phrases": ["prestressing tendon 预应力筋", "tendon duct 预应力孔道", "tendon anchorage 预应力筋锚固", "tendon profile 预应力筋线型"]},
    {"id": 409, "root": "strand", "phonetic": "/strænd/", "pos": "名词", "meaning": "钢绞线", "mnemonic": "Strand→股；绞→钢绞线", "phrases": ["prestressing strand 预应力钢绞线", "seven-wire strand 七股钢绞线", "strand anchor 钢绞线锚具", "strand duct 钢绞线管道"]},
    {"id": 410, "root": "anchor", "phonetic": "/ˈæŋkə/", "pos": "名词", "meaning": "锚具", "mnemonic": "Anchor→锚→锚具", "phrases": ["anchor head 锚头", "anchor plate 锚板", "wedge anchor 楔形锚具", "bonded anchor 黏结锚具"]},
    {"id": 411, "root": "duct", "phonetic": "/dʌkt/", "pos": "名词", "meaning": "孔道", "mnemonic": "Duct→管道→孔道", "phrases": ["prestressing duct 预应力孔道", "corrugated duct 波纹管", "duct grouting 孔道灌浆", "flat duct 扁孔"]},
    {"id": 412, "root": "grout", "phonetic": "/ɡraʊt/", "pos": "名词", "meaning": "灌浆料", "mnemonic": "Grout→音似\"格劳特\"→灌浆料", "phrases": ["cement grout 水泥浆", "grout injection 灌浆", "grout strength 浆体强度", "grout mix 浆液配比"]},
    {"id": 413, "root": "mortar", "phonetic": "/ˈmɔːtə/", "pos": "名词", "meaning": "砂浆", "mnemonic": "Mortar→音似\"莫塔\"→砂浆", "phrases": ["cement mortar 水泥砂浆", "masonry mortar 砌筑砂浆", "mortar mix 砂浆配合比", "mortar strength 砂浆强度"]},
    {"id": 414, "root": "timber", "phonetic": "/ˈtɪmbə/", "pos": "名词", "meaning": "木材", "mnemonic": "Timber→音似\"天伯\"→天伯木材", "phrases": ["structural timber 结构木材", "timber beam 木梁", "timber column 木柱", "timber frame 木框架"]},
    {"id": 415, "root": "masonry", "phonetic": "/ˈmeɪsənri/", "pos": "名词", "meaning": "砌体", "mnemonic": "Masonry→mason(石匠)+ry→砌体", "phrases": ["masonry wall 砌体墙", "masonry structure 砌体结构", "brick masonry 砖砌体", "stone masonry 石砌体"]},
    {"id": 416, "root": "brick", "phonetic": "/brɪk/", "pos": "名词", "meaning": "砖", "mnemonic": "Brick→砖→砖块", "phrases": ["fired brick 烧结砖", "concrete brick 混凝土砖", "brick wall 砖墙", "brick masonry 砖砌体"]},
    {"id": 417, "root": "block", "phonetic": "/blɒk/", "pos": "名词", "meaning": "砌块", "mnemonic": "Block→块→砌块", "phrases": ["concrete block 混凝土砌块", "hollow block 空心砌块", "block wall 砌块墙", "aerated block 加气砌块"]},
    {"id": 418, "root": "glass", "phonetic": "/ɡlɑːs/", "pos": "名词", "meaning": "玻璃", "mnemonic": "Glass→玻璃→玻璃", "phrases": ["structural glass 结构玻璃", "tempered glass 钢化玻璃", "laminated glass 夹层玻璃", "insulated glass 中空玻璃"]},
    {"id": 419, "root": "aluminum", "phonetic": "/əˈluːmɪnəm/", "pos": "名词", "meaning": "铝", "mnemonic": "Aluminum→音似\"阿鲁米农\"→铝", "phrases": ["aluminum alloy 铝合金", "aluminum panel 铝板", "aluminum frame 铝框", "aluminum profile 铝型材"]},
    {"id": 420, "root": "sealant", "phonetic": "/ˈsiːlənt/", "pos": "名词", "meaning": "密封胶", "mnemonic": "Sealant→seal(密封)+ant→密封胶", "phrases": ["structural sealant 结构密封胶", "weatherproof sealant 耐候密封胶", "joint sealant 接缝密封胶", "silicone sealant 硅酮密封胶"]},

    # ===== 421-440: Seismic Engineering =====
    {"id": 421, "root": "seismic", "phonetic": "/ˈsaɪzmɪk/", "pos": "形容词", "meaning": "地震的", "mnemonic": "Seismic→seism(地震)+ic→地震的", "phrases": ["seismic design 抗震设计", "seismic load 地震荷载", "seismic zone 地震区", "seismic analysis 地震分析"]},
    {"id": 422, "root": "earthquake", "phonetic": "/ˈɜːθkweɪk/", "pos": "名词", "meaning": "地震", "mnemonic": "Earthquake→earth(地)+quake(震动)→地震", "phrases": ["earthquake resistant 抗震", "earthquake force 地震力", "earthquake magnitude 震级", "earthquake intensity 烈度"]},
    {"id": 423, "root": "magnitude", "phonetic": "/ˈmæɡnɪtjuːd/", "pos": "名词", "meaning": "震级", "mnemonic": "Magnitude→magn(大)+itude→震级", "phrases": ["Richter magnitude 里氏震级", "moment magnitude 矩震级", "magnitude scale 震级标度", "earthquake magnitude 地震震级"]},
    {"id": 424, "root": "intensity", "phonetic": "/ɪnˈtensəti/", "pos": "名词", "meaning": "烈度", "mnemonic": "Intensity→intens(强烈)+ity→烈度", "phrases": ["seismic intensity 地震烈度", "intensity scale 烈度表", "modified Mercalli intensity 修正麦卡利烈度", "design intensity 设计烈度"]},
    {"id": 425, "root": "epicenter", "phonetic": "/ˈepɪsentə/", "pos": "名词", "meaning": "震中", "mnemonic": "Epicenter→epi(上)+center(中心)→震中", "phrases": ["epicenter distance 震中距", "epicenter location 震中位置", "near epicenter 近震中", "epicenter intensity 震中烈度"]},
    {"id": 426, "root": "hypocenter", "phonetic": "/ˈhaɪpəʊsentə/", "pos": "名词", "meaning": "震源", "mnemonic": "Hypocenter→hypo(下)+center(中心)→震源", "phrases": ["hypocenter depth 震源深度", "focal depth 震源深度", "shallow hypocenter 浅源", "deep hypocenter 深源"]},
    {"id": 427, "root": "fault", "phonetic": "/fɔːlt/", "pos": "名词", "meaning": "断层", "mnemonic": "Fault→缺陷→断层", "phrases": ["active fault 活动断层", "fault line 断层线", "fault plane 断层面", "fault zone 断层带"]},
    {"id": 428, "root": "tsunami", "phonetic": "/tsuːˈnɑːmi/", "pos": "名词", "meaning": "海啸", "mnemonic": "Tsunami→音似\"次纳米\"→海啸", "phrases": ["tsunami hazard 海啸灾害", "tsunami warning 海啸预警", "tsunami wave 海啸波", "tsunami run-up 海啸爬高"]},
    {"id": 429, "root": "liquefaction", "phonetic": "/ˌlɪkwɪˈfækʃn/", "pos": "名词", "meaning": "液化", "mnemonic": "Liquefaction→liqu(液)+fact(做)+ion→液化", "phrases": ["soil liquefaction 土液化", "liquefaction potential 液化势", "liquefaction analysis 液化分析", "cyclic liquefaction 循环液化"]},
    {"id": 430, "root": "response", "phonetic": "/rɪˈspɒns/", "pos": "名词", "meaning": "响应", "mnemonic": "Response→re(回)+spons(答应)→响应", "phrases": ["seismic response 地震响应", "response spectrum 反应谱", "dynamic response 动力响应", "response analysis 响应分析"]},
    {"id": 431, "root": "spectrum", "phonetic": "/ˈspektrəm/", "pos": "名词", "meaning": "谱", "mnemonic": "Spectrum→spect(看)+rum→谱", "phrases": ["response spectrum 反应谱", "design spectrum 设计谱", "acceleration spectrum 加速度谱", "velocity spectrum 速度谱"]},
    {"id": 432, "root": "period", "phonetic": "/ˈpɪəriəd/", "pos": "名词", "meaning": "周期", "mnemonic": "Period→时期→周期", "phrases": ["natural period 自振周期", "fundamental period 基本周期", "vibration period 振动周期", "long period 长周期"]},
    {"id": 433, "root": "frequency", "phonetic": "/ˈfriːkwənsi/", "pos": "名词", "meaning": "频率", "mnemonic": "Frequency→frequ(频繁)+ency→频率", "phrases": ["natural frequency 自振频率", "fundamental frequency 基频", "frequency domain 频域", "frequency analysis 频率分析"]},
    {"id": 434, "root": "acceleration", "phonetic": "/əkˌseləˈreɪʃn/", "pos": "名词", "meaning": "加速度", "mnemonic": "Acceleration→ac(向)+celer(快)+ation→加速度", "phrases": ["peak acceleration 峰值加速度", "ground acceleration 地面加速度", "acceleration spectrum 加速度谱", "design acceleration 设计加速度"]},
    {"id": 435, "root": "displacement", "phonetic": "/dɪsˈpleɪsmənt/", "pos": "名词", "meaning": "位移", "mnemonic": "Displacement→dis(分开)+place(位置)+ment→位移", "phrases": ["seismic displacement 地震位移", "relative displacement 相对位移", "displacement spectrum 位移谱", "lateral displacement 侧向位移"]},
    {"id": 436, "root": "velocity", "phonetic": "/vəˈlɒsəti/", "pos": "名词", "meaning": "速度", "mnemonic": "Velocity→veloc(快)+ity→速度", "phrases": ["seismic velocity 地震波速", "wave velocity 波速", "velocity spectrum 速度谱", "ground velocity 地面速度"]},
    {"id": 437, "root": "isolation", "phonetic": "/ˌaɪsəˈleɪʃn/", "pos": "名词", "meaning": "隔震", "mnemonic": "Isolation→isol(隔离)+ation→隔震", "phrases": ["base isolation 基础隔震", "seismic isolation 隔震", "isolation bearing 隔震支座", "isolation system 隔震系统"]},
    {"id": 438, "root": "dissipator", "phonetic": "/ˈdɪsɪpeɪtə/", "pos": "名词", "meaning": "消能器", "mnemonic": "Dissipator→dissip(消散)+ator→消能器", "phrases": ["energy dissipator 消能器", "damping dissipator 阻尼消能器", "friction dissipator 摩擦消能器", "viscous dissipator 黏滞消能器"]},
    {"id": 439, "root": "ductility", "phonetic": "/dʌkˈtɪləti/", "pos": "名词", "meaning": "延性", "mnemonic": "Ductility→duct(引导)+ility→延性", "phrases": ["ductility demand 延性需求", "ductility capacity 延性能力", "ductility ratio 延性比", "ductility factor 延性系数"]},
    {"id": 440, "root": "redundancy", "phonetic": "/rɪˈdʌndənsi/", "pos": "名词", "meaning": "冗余度", "mnemonic": "Redundancy→red(回)+und(波浪)+ancy→冗余度", "phrases": ["structural redundancy 结构冗余度", "redundancy factor 冗余系数", "system redundancy 系统冗余", "redundancy requirement 冗余度要求"]},

    # ===== 441-460: Prestressed Structures =====
    {"id": 441, "root": "prestress", "phonetic": "/ˌpriːˈstres/", "pos": "名词", "meaning": "预应力", "mnemonic": "Prestress→pre(先)+stress(应力)→预应力", "phrases": ["prestress force 预应力", "prestress loss 预应力损失", "effective prestress 有效预应力", "prestress tendon 预应力筋"]},
    {"id": 442, "root": "tensioning", "phonetic": "/ˈtenʃənɪŋ/", "pos": "名词", "meaning": "张拉", "mnemonic": "Tensioning→tension(张力)+ing→张拉", "phrases": ["post-tensioning 后张法", "pre-tensioning 先张法", "tensioning force 张拉力", "tensioning sequence 张拉顺序"]},
    {"id": 443, "root": "anchorage", "phonetic": "/ˈæŋkərɪdʒ/", "pos": "名词", "meaning": "锚固区", "mnemonic": "Anchorage→anchor(锚)+age→锚固区", "phrases": ["anchorage zone 锚固区", "anchorage length 锚固长度", "anchorage device 锚具", "anchorage slip 锚具回缩"]},
    {"id": 444, "root": "deviation", "phonetic": "/ˌdiːviˈeɪʃn/", "pos": "名词", "meaning": "偏差", "mnemonic": "Deviation→de(偏离)+vi(路)+ation→偏差", "phrases": ["friction deviation 摩擦偏差", "angular deviation 角度偏差", "wobble deviation 偏差效应", "deviation coefficient 偏差系数"]},
    {"id": 445, "root": "curvature", "phonetic": "/ˈkɜːvətʃə/", "pos": "名词", "meaning": "曲率", "mnemonic": "Curvature→curv(弯曲)+ature→曲率", "phrases": ["tendon curvature 预应力筋曲率", "curvature friction 曲率摩擦", "curvature radius 曲率半径", "local curvature 局部曲率"]},
    {"id": 446, "root": "wobble", "phonetic": "/ˈwɒbl/", "pos": "名词", "meaning": "摆动", "mnemonic": "Wobble→音似\"沃布\"→摆动", "phrases": ["wobble friction 摆动摩擦", "wobble coefficient 摆动系数", "wobble effect 摆动效应", "wobble angle 摆动角"]},
    {"id": 447, "root": "elongation", "phonetic": "/ˌiːlɒŋˈɡeɪʃn/", "pos": "名词", "meaning": "伸长", "mnemonic": "Elongation→e(出)+long(长)+ation→伸长", "phrases": ["tendon elongation 预应力筋伸长", "elastic elongation 弹性伸长", "elongation calculation 伸长计算", "measured elongation 实测伸长"]},
    {"id": 448, "root": "slippage", "phonetic": "/ˈslɪpɪdʒ/", "pos": "名词", "meaning": "滑移", "mnemonic": "Slippage→slip(滑)+page→滑移", "phrases": ["anchorage slippage 锚具滑移", "tendon slippage 预应力筋滑移", "slippage loss 滑移损失", "allowable slippage 允许滑移"]},
    {"id": 449, "root": "relaxation", "phonetic": "/ˌriːlækˈseɪʃn/", "pos": "名词", "meaning": "松弛", "mnemonic": "Relaxation→re(再)+lax(松)+ation→松弛", "phrases": ["stress relaxation 应力松弛", "steel relaxation 钢材松弛", "relaxation loss 松弛损失", "relaxation coefficient 松弛系数"]},
    {"id": 450, "root": "creep", "phonetic": "/kriːp/", "pos": "名词", "meaning": "徐变", "mnemonic": "Creep→爬行→徐变", "phrases": ["concrete creep 混凝土徐变", "creep coefficient 徐变系数", "creep strain 徐变应变", "long-term creep 长期徐变"]},
    {"id": 451, "root": "shrinkage", "phonetic": "/ˈʃrɪŋkɪdʒ/", "pos": "名词", "meaning": "收缩", "mnemonic": "Shrinkage→shrink(收缩)+age→收缩", "phrases": ["concrete shrinkage 混凝土收缩", "shrinkage strain 收缩应变", "drying shrinkage 干缩", "autogenous shrinkage 自收缩"]},
    {"id": 452, "root": "transfer", "phonetic": "/ˈtrænsfɜː/", "pos": "名词", "meaning": "传递", "mnemonic": "Transfer→trans(跨越)+fer(携带)→传递", "phrases": ["prestress transfer 预应力传递", "transfer length 传递长度", "transfer bond 传递黏结", "force transfer 力传递"]},
    {"id": 453, "root": "balanced", "phonetic": "/ˈbælənst/", "pos": "形容词", "meaning": "平衡的", "mnemonic": "Balanced→balance(平衡)+d→平衡的", "phrases": ["balanced design 平衡设计", "balanced section 平衡截面", "balanced load 平衡荷载", "balanced cable 平衡索"]},
    {"id": 454, "root": "unbonded", "phonetic": "/ʌnˈbɒndɪd/", "pos": "形容词", "meaning": "无黏结的", "mnemonic": "Unbonded→un(无)+bond(黏结)+ed→无黏结的", "phrases": ["unbonded tendon 无黏结预应力筋", "unbonded post-tensioning 无黏结后张", "unbonded system 无黏结体系", "unbonded slab 无黏结板"]},
    {"id": 455, "root": "bonded", "phonetic": "/ˈbɒndɪd/", "pos": "形容词", "meaning": "有黏结的", "mnemonic": "Bonded→bond(黏结)+ed→有黏结的", "phrases": ["bonded tendon 有黏结预应力筋", "bonded post-tensioning 有黏结后张", "bonded construction 有黏结施工", "fully bonded 全黏结"]},
    {"id": 456, "root": "external", "phonetic": "/ɪkˈstɜːnl/", "pos": "形容词", "meaning": "体外", "mnemonic": "External→extern(外部)+al→体外", "phrases": ["external tendon 体外预应力筋", "external prestressing 体外预应力", "external cable 体外索", "external reinforcement 体外加固"]},
    {"id": 457, "root": "internal", "phonetic": "/ɪnˈtɜːnl/", "pos": "形容词", "meaning": "体内", "mnemonic": "Internal→intern(内部)+al→体内", "phrases": ["internal tendon 体内预应力筋", "internal prestressing 体内预应力", "internal cable 体内索", "internal reinforcement 体内钢筋"]},
    {"id": 458, "root": "segmental", "phonetic": "/seɡˈmentl/", "pos": "形容词", "meaning": "节段的", "mnemonic": "Segmental→segment(节段)+al→节段的", "phrases": ["segmental construction 节段施工", "segmental bridge 节段桥", "segmental lining 节段衬砌", "segmental erection 节段架设"]},
    {"id": 459, "root": "span", "phonetic": "/spæn/", "pos": "动词", "meaning": "跨越", "mnemonic": "Span→跨距→跨越", "phrases": ["long-span 大跨度", "multi-span 多跨", "single span 单跨", "clear span 净跨"]},
    {"id": 460, "root": "cable-stayed", "phonetic": "/ˈkeɪbl steɪd/", "pos": "形容词", "meaning": "斜拉的", "mnemonic": "Cable-stayed→cable(索)+stayed(撑)→斜拉的", "phrases": ["cable-stayed bridge 斜拉桥", "cable-stayed system 斜拉体系", "cable-stayed deck 斜拉桥面", "cable-stayed pylon 斜拉桥塔"]},

    # ===== 461-480: Steel Structures =====
    {"id": 461, "root": "steel", "phonetic": "/stiːl/", "pos": "名词", "meaning": "钢", "mnemonic": "Steel→音似\"斯提尔\"→钢", "phrases": ["structural steel 结构钢", "steel beam 钢梁", "steel column 钢柱", "steel frame 钢框架"]},
    {"id": 462, "root": "column", "phonetic": "/ˈkɒləm/", "pos": "名词", "meaning": "柱", "mnemonic": "Column→音似\"考乐母\"→柱", "phrases": ["steel column 钢柱", "concrete column 混凝土柱", "column base 柱脚", "column capital 柱头"]},
    {"id": 463, "root": "beam", "phonetic": "/biːm/", "pos": "名词", "meaning": "梁", "mnemonic": "Beam→音似\"比母\"→梁", "phrases": ["steel beam 钢梁", "concrete beam 混凝土梁", "main beam 主梁", "secondary beam 次梁"]},
    {"id": 464, "root": "connection", "phonetic": "/kəˈnekʃn/", "pos": "名词", "meaning": "连接", "mnemonic": "Connection→con(一起)+nect(绑)+ion→连接", "phrases": ["beam-column connection 梁柱连接", "rigid connection 刚性连接", "pinned connection 铰接", "moment connection 刚接"]},
    {"id": 465, "root": "joint", "phonetic": "/dʒɔɪnt/", "pos": "名词", "meaning": "节点", "mnemonic": "Joint→连接→节点", "phrases": ["rigid joint 刚节点", "pinned joint 铰节点", "joint panel 节点板", "moment-resisting joint 抗弯节点"]},
    {"id": 466, "root": "weld", "phonetic": "/weld/", "pos": "名词", "meaning": "焊缝", "mnemonic": "Weld→音似\"外欧德\"→焊缝", "phrases": ["fillet weld 角焊缝", "butt weld 对接焊缝", "weld joint 焊接接头", "weld seam 焊缝"]},
    {"id": 467, "root": "bolt", "phonetic": "/bəʊlt/", "pos": "名词", "meaning": "螺栓", "mnemonic": "Bolt→音似\"包特\"→螺栓", "phrases": ["high-strength bolt 高强螺栓", "anchor bolt 锚栓", "bolt connection 螺栓连接", "bolt hole 螺栓孔"]},
    {"id": 468, "root": "rivet", "phonetic": "/ˈrɪvɪt/", "pos": "名词", "meaning": "铆钉", "mnemonic": "Rivet→音似\"瑞维特\"→铆钉", "phrases": ["steel rivet 钢铆钉", "rivet connection 铆接", "rivet line 铆钉线", "hot rivet 热铆钉"]},
    {"id": 469, "root": "flange", "phonetic": "/flændʒ/", "pos": "名词", "meaning": "翼缘", "mnemonic": "Flange→音似\"弗兰齐\"→翼缘", "phrases": ["flange plate 翼缘板", "flange width 翼缘宽度", "flange thickness 翼缘厚度", "flange connection 翼缘连接"]},
    {"id": 470, "root": "web", "phonetic": "/web/", "pos": "名词", "meaning": "腹板", "mnemonic": "Web→网→腹板如网", "phrases": ["web plate 腹板", "web depth 腹板高度", "web thickness 腹板厚度", "web stiffener 腹板加劲肋"]},
    {"id": 471, "root": "stiffener", "phonetic": "/ˈstɪfənə/", "pos": "名词", "meaning": "加劲肋", "mnemonic": "Stiffener→stiffen(加劲)+er→加劲肋", "phrases": ["transverse stiffener 横向加劲肋", "longitudinal stiffener 纵向加劲肋", "bearing stiffener 支承加劲肋", "intermediate stiffener 中间加劲肋"]},
    {"id": 472, "root": "gusset", "phonetic": "/ˈɡʌsɪt/", "pos": "名词", "meaning": "节点板", "mnemonic": "Gusset→音似\"嘎塞特\"→节点板", "phrases": ["gusset plate 节点板", "gusset connection 节点板连接", "gusset angle 节点角钢", "gusset joint 节点连接"]},
    {"id": 473, "root": "bracing", "phonetic": "/ˈbreɪsɪŋ/", "pos": "名词", "meaning": "支撑", "mnemonic": "Bracing→brace(支撑)+ing→支撑", "phrases": ["lateral bracing 侧向支撑", "cross bracing 交叉支撑", "diagonal bracing 斜撑", "knee bracing 膝撑"]},
    {"id": 474, "root": "purlin", "phonetic": "/ˈpɜːlɪn/", "pos": "名词", "meaning": "檩条", "mnemonic": "Purlin→音似\"坡林\"→坡上的檩条", "phrases": ["roof purlin 屋面檩条", "wall purlin 墙檩", "steel purlin 钢檩条", "purlin spacing 檩条间距"]},
    {"id": 475, "root": "sagrod", "phonetic": "/ˈsæɡrɒd/", "pos": "名词", "meaning": "拉条", "mnemonic": "Sagrod→sag(下垂)+rod(杆)→防止下垂的杆→拉条", "phrases": ["sag rod 拉条", "purlin sag rod 檩条拉条", "roof sag rod 屋面拉条", "sag rod spacing 拉条间距"]},
    {"id": 476, "root": "tension", "phonetic": "/ˈtenʃn/", "pos": "名词", "meaning": "张力", "mnemonic": "Tension→tens(拉)+ion→张力", "phrases": ["tension member 受拉构件", "tension force 拉力", "tension rod 拉杆", "pure tension 纯拉"]},
    {"id": 477, "root": "compression", "phonetic": "/kəmˈpreʃn/", "pos": "名词", "meaning": "压力", "mnemonic": "Compression→com(一起)+press(压)+ion→压力", "phrases": ["compression member 受压构件", "compression force 压力", "compression flange 受压翼缘", "axial compression 轴压"]},
    {"id": 478, "root": "buckling", "phonetic": "/ˈbʌklɪŋ/", "pos": "名词", "meaning": "屈曲", "mnemonic": "Buckling→buck(弯曲)+ling→屈曲", "phrases": ["local buckling 局部屈曲", "lateral buckling 侧向屈曲", "torsional buckling 扭转屈曲", "flexural buckling 弯曲屈曲"]},
    {"id": 479, "root": "slenderness", "phonetic": "/ˈslendənəs/", "pos": "名词", "meaning": "长细比", "mnemonic": "Slenderness→slender(细长)+ness→长细比", "phrases": ["slenderness ratio 长细比", "column slenderness 柱长细比", "effective slenderness 有效长细比", "slenderness limit 长细比限值"]},
    {"id": 480, "root": "plastic", "phonetic": "/ˈplæstɪk/", "pos": "形容词", "meaning": "塑性的", "mnemonic": "Plastic→塑料→塑性的", "phrases": ["plastic hinge 塑性铰", "plastic moment 塑性弯矩", "plastic analysis 塑性分析", "plastic capacity 塑性承载力"]},

    # ===== 481-500: Project Management =====
    {"id": 481, "root": "contract", "phonetic": "/ˈkɒntrækt/", "pos": "名词", "meaning": "合同", "mnemonic": "Contract→con(一起)+tract(拉)→合同", "phrases": ["construction contract 施工合同", "contractor 承包商", "contract sum 合同金额", "contract period 合同工期"]},
    {"id": 482, "root": "tender", "phonetic": "/ˈtendə/", "pos": "名词", "meaning": "投标", "mnemonic": "Tender→音似\"探德\"→投标", "phrases": ["tender document 招标文件", "tender price 投标价", "tender submission 投标提交", "tender evaluation 评标"]},
    {"id": 483, "root": "bid", "phonetic": "/bɪd/", "pos": "名词", "meaning": "报价", "mnemonic": "Bid→音似\"必得\"→报价必得", "phrases": ["bid price 报价", "bid bond 投标保函", "bid opening 开标", "winning bid 中标价"]},
    {"id": 484, "root": "schedule", "phonetic": "/ˈʃedjuːl/", "pos": "名词", "meaning": "进度计划", "mnemonic": "Schedule→音似\"谢丢\"→进度计划", "phrases": ["construction schedule 施工进度", "master schedule 总进度计划", "schedule control 进度控制", "behind schedule 进度落后"]},
    {"id": 485, "root": "milestone", "phonetic": "/ˈmaɪlstəʊn/", "pos": "名词", "meaning": "里程碑", "mnemonic": "Milestone→mile(英里)+stone(石)→里程碑", "phrases": ["project milestone 项目里程碑", "milestone schedule 里程碑计划", "milestone date 里程碑日期", "milestone payment 里程碑付款"]},
    {"id": 486, "root": "deadline", "phonetic": "/ˈdedlaɪn/", "pos": "名词", "meaning": "截止日期", "mnemonic": "Deadline→dead(死)+line(线)→截止日期", "phrases": ["project deadline 项目截止日期", "completion deadline 竣工期限", "meet deadline 按期完成", "deadline extension 延期"]},
    {"id": 487, "root": "supervision", "phonetic": "/ˌsuːpəˈvɪʒn/", "pos": "名词", "meaning": "监理", "mnemonic": "Supervision→super(上)+vis(看)+ion→监理", "phrases": ["construction supervision 施工监理", "supervision engineer 监理工程师", "quality supervision 质量监督", "site supervision 现场监理"]},
    {"id": 488, "root": "inspection", "phonetic": "/ɪnˈspekʃn/", "pos": "名词", "meaning": "检查", "mnemonic": "Inspection→in(内)+spect(看)+ion→检查", "phrases": ["quality inspection 质量检查", "site inspection 现场检查", "inspection report 检查报告", "final inspection 竣工验收"]},
    {"id": 489, "root": "acceptance", "phonetic": "/əkˈseptəns/", "pos": "名词", "meaning": "验收", "mnemonic": "Acceptance→accept(接受)+ance→验收", "phrases": ["final acceptance 竣工验收", "acceptance criteria 验收标准", "acceptance test 验收试验", "provisional acceptance 初步验收"]},
    {"id": 490, "root": "commissioning", "phonetic": "/kəˈmɪʃənɪŋ/", "pos": "名词", "meaning": "试运行", "mnemonic": "Commissioning→commission(委任)+ing→试运行", "phrases": ["commissioning test 试运行试验", "commissioning procedure 试运行程序", "pre-commissioning 预试运行", "commissioning report 试运行报告"]},
    {"id": 491, "root": "handover", "phonetic": "/ˈhændəʊvə/", "pos": "名词", "meaning": "移交", "mnemonic": "Handover→hand(手)+over(过)→移交", "phrases": ["project handover 项目移交", "handover certificate 移交证书", "handover document 移交文件", "handover procedure 移交程序"]},
    {"id": 492, "root": "warranty", "phonetic": "/ˈwɒrənti/", "pos": "名词", "meaning": "保修", "mnemonic": "Warranty→音似\"沃润提\"→保修", "phrases": ["defects warranty 缺陷保修", "warranty period 保修期", "warranty bond 保修保函", "extended warranty 延长保修"]},
    {"id": 493, "root": "liability", "phonetic": "/ˌlaɪəˈbɪləti/", "pos": "名词", "meaning": "责任", "mnemonic": "Liability→liab(有责任的)+ility→责任", "phrases": ["contractor liability 承包商责任", "liability insurance 责任保险", "limited liability 有限责任", "liability period 责任期"]},
    {"id": 494, "root": "penalty", "phonetic": "/ˈpenəlti/", "pos": "名词", "meaning": "违约金", "mnemonic": "Penalty→penal(惩罚的)+ty→违约金", "phrases": ["liquidated penalty 违约金", "penalty clause 违约条款", "delay penalty 延期罚款", "penalty amount 罚金数额"]},
    {"id": 495, "root": "claim", "phonetic": "/kleɪm/", "pos": "名词", "meaning": "索赔", "mnemonic": "Claim→声称→索赔", "phrases": ["variation claim 变更索赔", "extension of time claim 工期索赔", "cost claim 费用索赔", "claim document 索赔文件"]},
    {"id": 496, "root": "dispute", "phonetic": "/dɪˈspjuːt/", "pos": "名词", "meaning": "争议", "mnemonic": "Dispute→dis(分开)+pute(想)→争议", "phrases": ["contract dispute 合同争议", "dispute resolution 争议解决", "dispute board 争议评审委员会", "arbitration 仲裁"]},
    {"id": 497, "root": "variation", "phonetic": "/ˌveəriˈeɪʃn/", "pos": "名词", "meaning": "变更", "mnemonic": "Variation→vari(变化)+ation→变更", "phrases": ["contract variation 合同变更", "variation order 变更指令", "variation claim 变更索赔", "approved variation 批准变更"]},
    {"id": 498, "root": "delay", "phonetic": "/dɪˈleɪ/", "pos": "名词", "meaning": "延期", "mnemonic": "Delay→de(下)+lay(放)→延期", "phrases": ["construction delay 施工延期", "delay damages 延期损害赔偿", "excusable delay 可原谅延期", "compensable delay 可补偿延期"]},
    {"id": 499, "root": "interim", "phonetic": "/ˈɪntərɪm/", "pos": "形容词", "meaning": "临时的", "mnemonic": "Interim→inter(之间)+im→临时的", "phrases": ["interim payment 期中付款", "interim certificate 期中证书", "interim report 期中报告", "interim stage 中间阶段"]},
    {"id": 500, "root": "final", "phonetic": "/ˈfaɪnl/", "pos": "形容词", "meaning": "最终的", "mnemonic": "Final→fin(结束)+al→最终的", "phrases": ["final account 最终结算", "final certificate 最终证书", "final payment 最终付款", "final completion 最终竣工"]},
]

print(f"Defined {len(new_roots_raw)} new roots")

# Generate full entries
def generate_full_entry(root_info):
    pos_map = {"名词": "n.", "动词": "v.", "形容词": "adj.", "副词": "adv.", "缩写": "abbr.", "名词/动词": "n./v."}

    entry = {
        "id": root_info["id"],
        "root": root_info["root"],
        "phonetic": root_info["phonetic"],
        "partOfSpeech": root_info["pos"],
        "frequency": root_info["id"],
        "category": "土木",
        "words": [{
            "word": root_info["root"],
            "phonetic": root_info["phonetic"],
            "partOfSpeech": pos_map.get(root_info["pos"], "n."),
            "meaning": root_info["meaning"],
            "memoryTip": root_info["mnemonic"].split("→")[1] if "→" in root_info["mnemonic"] else root_info["root"],
            "root": root_info["root"],
            "rootPhonetic": root_info["phonetic"],
            "rootMeaning": root_info["meaning"],
            "rootPhrases": root_info["phrases"],
            "wordPhrases": root_info["phrases"]
        }],
        "phrases": root_info["phrases"],
        "mnemonic": root_info["mnemonic"],
        "meaning": root_info["meaning"]
    }

    # Add more words from phrases
    for i in range(1, min(4, len(root_info["phrases"]))):
        phrase = root_info["phrases"][i]
        parts = phrase.split(" ", 1)
        word_text = parts[0]
        meaning_text = parts[1] if len(parts) > 1 else root_info["meaning"]

        entry["words"].append({
            "word": word_text,
            "phonetic": root_info["phonetic"],
            "partOfSpeech": "n.",
            "meaning": meaning_text,
            "memoryTip": f"{root_info['root']} + {word_text}",
            "root": root_info["root"],
            "rootPhonetic": root_info["phonetic"],
            "rootMeaning": root_info["meaning"],
            "rootPhrases": root_info["phrases"],
            "wordPhrases": root_info["phrases"]
        })

    return entry

# Generate all entries
new_entries = [generate_full_entry(root) for root in new_roots_raw]
print(f"Generated {len(new_entries)} full entries")

# Append to existing data
data.extend(new_entries)
print(f"Total entries after append: {len(data)}")

# Save back to file
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Data saved successfully!")
print(f"ID range: {data[0]['id']} - {data[-1]['id']}")
