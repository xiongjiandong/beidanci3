#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成机械类目词根数据 (id 801-1000)
"""
import json
import re

# 机械领域词根数据 (200个)
mechanical_roots = [
    # 材料和金属
    {"root": "steel", "phonetic": "/stiːl/", "meaning": "钢", "pos": "n."},
    {"root": "iron", "phonetic": "/ˈaɪərn/", "meaning": "铁", "pos": "n."},
    {"root": "alloy", "phonetic": "/ˈælɔɪ/", "meaning": "合金", "pos": "n."},
    {"root": "brass", "phonetic": "/bræs/", "meaning": "黄铜", "pos": "n."},
    {"root": "bronze", "phonetic": "/brɑːnz/", "meaning": "青铜", "pos": "n."},
    {"root": "copper", "phonetic": "/ˈkɑːpər/", "meaning": "铜", "pos": "n."},
    {"root": "aluminum", "phonetic": "/əˈluːmɪnəm/", "meaning": "铝", "pos": "n."},
    {"root": "titanium", "phonetic": "/taɪˈteɪniəm/", "meaning": "钛", "pos": "n."},
    {"root": "carbon", "phonetic": "/ˈkɑːrbən/", "meaning": "碳", "pos": "n."},
    {"root": "chrome", "phonetic": "/kroʊm/", "meaning": "铬", "pos": "n."},
    {"root": "nickel", "phonetic": "/ˈnɪkl/", "meaning": "镍", "pos": "n."},
    {"root": "zinc", "phonetic": "/zɪŋk/", "meaning": "锌", "pos": "n."},
    {"root": "tin", "phonetic": "/tɪn/", "meaning": "锡", "pos": "n."},
    {"root": "lead", "phonetic": "/led/", "meaning": "铅", "pos": "n."},
    {"root": "platinum", "phonetic": "/ˈplætɪnəm/", "meaning": "铂", "pos": "n."},
    {"root": "silicon", "phonetic": "/ˈsɪlɪkən/", "meaning": "硅", "pos": "n."},
    {"root": "tungsten", "phonetic": "/ˈtʌŋstən/", "meaning": "钨", "pos": "n."},
    {"root": "magnesium", "phonetic": "/mæɡˈniːziəm/", "meaning": "镁", "pos": "n."},
    {"root": "manganese", "phonetic": "/ˈmæŋɡəniːz/", "meaning": "锰", "pos": "n."},
    {"root": "cobalt", "phonetic": "/ˈkoʊbɔːlt/", "meaning": "钴", "pos": "n."},

    # 机械部件 - 轴承和连接
    {"root": "bearing", "phonetic": "/ˈberɪŋ/", "meaning": "轴承", "pos": "n."},
    {"root": "bushing", "phonetic": "/ˈbʊʃɪŋ/", "meaning": "衬套", "pos": "n."},
    {"root": "coupling", "phonetic": "/ˈkʌplɪŋ/", "meaning": "联轴器", "pos": "n."},
    {"root": "clutch", "phonetic": "/klʌtʃ/", "meaning": "离合器", "pos": "n."},
    {"root": "brake", "phonetic": "/breɪk/", "meaning": "制动器", "pos": "n."},
    {"root": "fastener", "phonetic": "/ˈfæsənər/", "meaning": "紧固件", "pos": "n."},
    {"root": "rivet", "phonetic": "/ˈrɪvɪt/", "meaning": "铆钉", "pos": "n."},
    {"root": "bolt", "phonetic": "/boʊlt/", "meaning": "螺栓", "pos": "n."},
    {"root": "nut", "phonetic": "/nʌt/", "meaning": "螺母", "pos": "n."},
    {"root": "screw", "phonetic": "/skruː/", "meaning": "螺钉", "pos": "n."},
    {"root": "stud", "phonetic": "/stʌd/", "meaning": "螺柱", "pos": "n."},
    {"root": "pin", "phonetic": "/pɪn/", "meaning": "销", "pos": "n."},
    {"root": "key", "phonetic": "/kiː/", "meaning": "键", "pos": "n."},
    {"root": "snap", "phonetic": "/snæp/", "meaning": "卡扣", "pos": "n."},
    {"root": "clip", "phonetic": "/klɪp/", "meaning": "卡箍", "pos": "n."},
    {"root": "clamp", "phonetic": "/klæmp/", "meaning": "夹具", "pos": "n."},
    {"root": "gasket", "phonetic": "/ˈɡæskɪt/", "meaning": "垫片", "pos": "n."},
    {"root": "seal", "phonetic": "/siːl/", "meaning": "密封", "pos": "n."},
    {"root": "o-ring", "phonetic": "/ˈoʊ rɪŋ/", "meaning": "O型圈", "pos": "n."},
    {"root": "washer", "phonetic": "/ˈwɑːʃər/", "meaning": "垫圈", "pos": "n."},

    # 传动系统
    {"root": "trans", "phonetic": "/træns/", "meaning": "传动", "pos": "n."},
    {"root": "transmit", "phonetic": "/trænzˈmɪt/", "meaning": "传送", "pos": "v."},
    {"root": "transfer", "phonetic": "/ˈtrænsfɜːr/", "meaning": "传递", "pos": "v./n."},
    {"root": "drive", "phonetic": "/draɪv/", "meaning": "驱动", "pos": "v./n."},
    {"root": "propel", "phonetic": "/prəˈpel/", "meaning": "推进", "pos": "v."},
    {"root": "shaft", "phonetic": "/ʃæft/", "meaning": "轴", "pos": "n."},
    {"root": "axle", "phonetic": "/ˈæksl/", "meaning": "车轴", "pos": "n."},
    {"root": "spindle", "phonetic": "/ˈspɪndl/", "meaning": "主轴", "pos": "n."},
    {"root": "rotor", "phonetic": "/ˈroʊtər/", "meaning": "转子", "pos": "n."},
    {"root": "stator", "phonetic": "/ˈsteɪtər/", "meaning": "定子", "pos": "n."},
    {"root": "crank", "phonetic": "/kræŋk/", "meaning": "曲柄", "pos": "n."},
    {"root": "cam", "phonetic": "/kæm/", "meaning": "凸轮", "pos": "n."},
    {"root": "lever", "phonetic": "/ˈliːvər/", "meaning": "杠杆", "pos": "n."},
    {"root": "link", "phonetic": "/lɪŋk/", "meaning": "连杆", "pos": "n."},
    {"root": "rod", "phonetic": "/rɑːd/", "meaning": "杆", "pos": "n."},
    {"root": "arm", "phonetic": "/ɑːrm/", "meaning": "臂", "pos": "n."},
    {"root": "beam", "phonetic": "/biːm/", "meaning": "梁", "pos": "n."},
    {"root": "frame", "phonetic": "/freɪm/", "meaning": "框架", "pos": "n."},
    {"root": "chassis", "phonetic": "/ˈʃæsi/", "meaning": "底盘", "pos": "n."},
    {"root": "body", "phonetic": "/ˈbɑːdi/", "meaning": "本体", "pos": "n."},

    # 流体机械
    {"root": "pump", "phonetic": "/pʌmp/", "meaning": "泵", "pos": "n./v."},
    {"root": "compress", "phonetic": "/kəmˈpres/", "meaning": "压缩", "pos": "v."},
    {"root": "valve", "phonetic": "/vælv/", "meaning": "阀门", "pos": "n."},
    {"root": "nozzle", "phonetic": "/ˈnɑːzl/", "meaning": "喷嘴", "pos": "n."},
    {"root": "orifice", "phonetic": "/ˈɔːrɪfɪs/", "meaning": "孔口", "pos": "n."},
    {"root": "venturi", "phonetic": "/venˈtʊri/", "meaning": "文丘里", "pos": "n."},
    {"root": "diffuser", "phonetic": "/dɪˈfjuːzər/", "meaning": "扩压器", "pos": "n."},
    {"root": "impeller", "phonetic": "/ɪmˈpelər/", "meaning": "叶轮", "pos": "n."},
    {"root": "vane", "phonetic": "/veɪn/", "meaning": "叶片", "pos": "n."},
    {"root": "blade", "phonetic": "/bleɪd/", "meaning": "叶片", "pos": "n."},
    {"root": "turbine", "phonetic": "/ˈtɜːrbaɪn/", "meaning": "涡轮", "pos": "n."},
    {"root": "propeller", "phonetic": "/prəˈpelər/", "meaning": "螺旋桨", "pos": "n."},
    {"root": "fan", "phonetic": "/fæn/", "meaning": "风扇", "pos": "n."},
    {"root": "blower", "phonetic": "/ˈbloʊər/", "meaning": "鼓风机", "pos": "n."},
    {"root": "ejector", "phonetic": "/ɪˈdʒektər/", "meaning": "喷射器", "pos": "n."},
    {"root": "injector", "phonetic": "/ɪnˈdʒektər/", "meaning": "喷油器", "pos": "n."},
    {"root": "filter", "phonetic": "/ˈfɪltər/", "meaning": "过滤器", "pos": "n."},
    {"root": "strainer", "phonetic": "/ˈstreɪnər/", "meaning": "滤网", "pos": "n."},
    {"root": "separator", "phonetic": "/ˈsepəreɪtər/", "meaning": "分离器", "pos": "n."},
    {"root": "mixer", "phonetic": "/ˈmɪksər/", "meaning": "混合器", "pos": "n."},

    # 液压气动
    {"root": "hydraul", "phonetic": "/haɪˈdrɔːlɪk/", "meaning": "液压", "pos": "adj."},
    {"root": "pneumat", "phonetic": "/nuːˈmætɪk/", "meaning": "气动", "pos": "adj."},
    {"root": "cylinder", "phonetic": "/ˈsɪlɪndər/", "meaning": "缸", "pos": "n."},
    {"root": "piston", "phonetic": "/ˈpɪstən/", "meaning": "活塞", "pos": "n."},
    {"root": "plunger", "phonetic": "/ˈplʌndʒər/", "meaning": "柱塞", "pos": "n."},
    {"root": "ram", "phonetic": "/ræm/", "meaning": "柱塞", "pos": "n."},
    {"root": "actuator", "phonetic": "/ˈæktʃueɪtər/", "meaning": "执行器", "pos": "n."},
    {"root": "accumulat", "phonetic": "/əˈkjuːmjəleɪtər/", "meaning": "蓄能器", "pos": "n."},
    {"root": "reservoir", "phonetic": "/ˈrezəvwɑːr/", "meaning": "油箱", "pos": "n."},
    {"root": "manifold", "phonetic": "/ˈmænɪfoʊld/", "meaning": "歧管", "pos": "n."},
    {"root": "hose", "phonetic": "/hoʊz/", "meaning": "软管", "pos": "n."},
    {"root": "tubing", "phonetic": "/ˈtuːbɪŋ/", "meaning": "管道", "pos": "n."},
    {"root": "fitting", "phonetic": "/ˈfɪtɪŋ/", "meaning": "管件", "pos": "n."},
    {"root": "coupler", "phonetic": "/ˈkʌplər/", "meaning": "接头", "pos": "n."},
    {"root": "adapter", "phonetic": "/əˈdæptər/", "meaning": "接头", "pos": "n."},
    {"root": "union", "phonetic": "/ˈjuːniən/", "meaning": "活接头", "pos": "n."},
    {"root": "elbow", "phonetic": "/ˈelboʊ/", "meaning": "弯头", "pos": "n."},
    {"root": "tee", "phonetic": "/tiː/", "meaning": "三通", "pos": "n."},
    {"root": "cross", "phonetic": "/krɔːs/", "meaning": "四通", "pos": "n."},

    # 加工制造
    {"root": "machin", "phonetic": "/məˈʃiːn/", "meaning": "机床", "pos": "n."},
    {"root": "mill", "phonetic": "/mɪl/", "meaning": "铣床", "pos": "n./v."},
    {"root": "lathe", "phonetic": "/leɪð/", "meaning": "车床", "pos": "n."},
    {"root": "drill", "phonetic": "/drɪl/", "meaning": "钻", "pos": "n./v."},
    {"root": "bore", "phonetic": "/bɔːr/", "meaning": "镗孔", "pos": "v./n."},
    {"root": "ream", "phonetic": "/riːm/", "meaning": "铰孔", "pos": "v."},
    {"root": "tap", "phonetic": "/tæp/", "meaning": "攻丝", "pos": "v./n."},
    {"root": "die", "phonetic": "/daɪ/", "meaning": "板牙", "pos": "n."},
    {"root": "grind", "phonetic": "/ɡraɪnd/", "meaning": "磨削", "pos": "v."},
    {"root": "polish", "phonetic": "/ˈpɑːlɪʃ/", "meaning": "抛光", "pos": "v./n."},
    {"root": "hone", "phonetic": "/hoʊn/", "meaning": "珩磨", "pos": "v./n."},
    {"root": "lap", "phonetic": "/læp/", "meaning": "研磨", "pos": "v./n."},
    {"root": "broach", "phonetic": "/broʊtʃ/", "meaning": "拉削", "pos": "v./n."},
    {"root": "hob", "phonetic": "/hɑːb/", "meaning": "滚齿", "pos": "v./n."},
    {"root": "shaper", "phonetic": "/ˈʃeɪpər/", "meaning": "牛头刨", "pos": "n."},
    {"root": "planer", "phonetic": "/ˈplænər/", "meaning": "龙门刨", "pos": "n."},
    {"root": "saw", "phonetic": "/sɔː/", "meaning": "锯", "pos": "n./v."},
    {"root": "forge", "phonetic": "/fɔːrdʒ/", "meaning": "锻造", "pos": "v./n."},
    {"root": "cast", "phonetic": "/kæst/", "meaning": "铸造", "pos": "v./n."},
    {"root": "mold", "phonetic": "/moʊld/", "meaning": "模具", "pos": "n./v."},

    # 测量检测
    {"root": "gage", "phonetic": "/ɡeɪdʒ/", "meaning": "量规", "pos": "n./v."},
    {"root": "caliper", "phonetic": "/ˈkælɪpər/", "meaning": "卡尺", "pos": "n."},
    {"root": "micrometer", "phonetic": "/maɪˈkrɑːmɪtər/", "meaning": "千分尺", "pos": "n."},
    {"root": "dial", "phonetic": "/ˈdaɪəl/", "meaning": "表盘", "pos": "n."},
    {"root": "indicator", "phonetic": "/ˈɪndɪkeɪtər/", "meaning": "指示器", "pos": "n."},
    {"root": "sensor", "phonetic": "/ˈsensər/", "meaning": "传感器", "pos": "n."},
    {"root": "transducer", "phonetic": "/trænzˈduːsər/", "meaning": "换能器", "pos": "n."},
    {"root": "detector", "phonetic": "/dɪˈtektər/", "meaning": "检测器", "pos": "n."},
    {"root": "probe", "phonetic": "/proʊb/", "meaning": "探头", "pos": "n./v."},
    {"root": "scanner", "phonetic": "/ˈskænər/", "meaning": "扫描仪", "pos": "n."},
    {"root": "meter", "phonetic": "/ˈmiːtər/", "meaning": "测量仪", "pos": "n."},
    {"root": "scope", "phonetic": "/skoʊp/", "meaning": "镜/仪", "pos": "n."},
    {"root": "tester", "phonetic": "/ˈtestər/", "meaning": "测试仪", "pos": "n."},
    {"root": "analyzer", "phonetic": "/ˈænəlaɪzər/", "meaning": "分析仪", "pos": "n."},
    {"root": "balancer", "phonetic": "/ˈbælənsər/", "meaning": "平衡机", "pos": "n."},
    {"root": "dynamometer", "phonetic": "/ˌdaɪnəˈmɑːmɪtər/", "meaning": "测功机", "pos": "n."},
    {"root": "tachometer", "phonetic": "/tæˈkɑːmɪtər/", "meaning": "转速表", "pos": "n."},
    {"root": "pyrometer", "phonetic": "/paɪˈrɑːmɪtər/", "meaning": "高温计", "pos": "n."},
    {"root": "manometer", "phonetic": "/məˈnɑːmɪtər/", "meaning": "压力计", "pos": "n."},
    {"root": "thermocouple", "phonetic": "/ˈθɜːrməkʌpl/", "meaning": "热电偶", "pos": "n."},

    # 控制和自动化
    {"root": "control", "phonetic": "/kənˈtroʊl/", "meaning": "控制", "pos": "v./n."},
    {"root": "regulat", "phonetic": "/ˈreɡjuleɪtər/", "meaning": "调节", "pos": "n."},
    {"root": "modulat", "phonetic": "/ˈmɑːdʒuleɪtər/", "meaning": "调制", "pos": "n."},
    {"root": "servo", "phonetic": "/ˈsɜːrvoʊ/", "meaning": "伺服", "pos": "n."},
    {"root": "solenoid", "phonetic": "/ˈsoʊlənɔɪd/", "meaning": "电磁阀", "pos": "n."},
    {"root": "relay", "phonetic": "/ˈriːleɪ/", "meaning": "继电器", "pos": "n."},
    {"root": "contact", "phonetic": "/ˈkɑːntækt/", "meaning": "触点", "pos": "n."},
    {"root": "switch", "phonetic": "/swɪtʃ/", "meaning": "开关", "pos": "n./v."},
    {"root": "breaker", "phonetic": "/ˈbreɪkər/", "meaning": "断路器", "pos": "n."},
    {"root": "fuse", "phonetic": "/fjuːz/", "meaning": "熔断器", "pos": "n./v."},
    {"root": "resistor", "phonetic": "/rɪˈzɪstər/", "meaning": "电阻", "pos": "n."},
    {"root": "capacitor", "phonetic": "/kəˈpæsɪtər/", "meaning": "电容", "pos": "n."},
    {"root": "inductor", "phonetic": "/ɪnˈdʌktər/", "meaning": "电感", "pos": "n."},
    {"root": "diode", "phonetic": "/ˈdaɪoʊd/", "meaning": "二极管", "pos": "n."},
    {"root": "transistor", "phonetic": "/trænˈzɪstər/", "meaning": "晶体管", "pos": "n."},
    {"root": "thyristor", "phonetic": "/θaɪˈrɪstər/", "meaning": "晶闸管", "pos": "n."},
    {"root": "encoder", "phonetic": "/ɪnˈkoʊdər/", "meaning": "编码器", "pos": "n."},
    {"root": "decoder", "phonetic": "/ˈdiːkoʊdər/", "meaning": "解码器", "pos": "n."},
    {"root": "inverter", "phonetic": "/ɪnˈvɜːrtər/", "meaning": "变频器", "pos": "n."},
    {"root": "converter", "phonetic": "/kənˈvɜːrtər/", "meaning": "转换器", "pos": "n."},

    # 工程术语
    {"root": "torque", "phonetic": "/tɔːrk/", "meaning": "扭矩", "pos": "n."},
    {"root": "moment", "phonetic": "/ˈmoʊmənt/", "meaning": "力矩", "pos": "n."},
    {"root": "inertia", "phonetic": "/ɪˈnɜːrʃə/", "meaning": "惯性", "pos": "n."},
    {"root": "friction", "phonetic": "/ˈfrɪkʃn/", "meaning": "摩擦", "pos": "n."},
    {"root": "viscosity", "phonetic": "/vɪˈskɑːsəti/", "meaning": "粘度", "pos": "n."},
    {"root": "hardness", "phonetic": "/ˈhɑːrdnəs/", "meaning": "硬度", "pos": "n."},
    {"root": "toughness", "phonetic": "/ˈtʌfnəs/", "meaning": "韧性", "pos": "n."},
    {"root": "stiffness", "phonetic": "/ˈstɪfnəs/", "meaning": "刚度", "pos": "n."},
    {"root": "strength", "phonetic": "/streŋθ/", "meaning": "强度", "pos": "n."},
    {"root": "stress", "phonetic": "/stres/", "meaning": "应力", "pos": "n./v."},
    {"root": "strain", "phonetic": "/streɪn/", "meaning": "应变", "pos": "n./v."},
    {"root": "load", "phonetic": "/loʊd/", "meaning": "载荷", "pos": "n./v."},
    {"root": "pressure", "phonetic": "/ˈpreʃər/", "meaning": "压力", "pos": "n."},
    {"root": "vacuum", "phonetic": "/ˈvækjuːm/", "meaning": "真空", "pos": "n."},
    {"root": "flow", "phonetic": "/floʊ/", "meaning": "流动", "pos": "n./v."},
    {"root": "flux", "phonetic": "/flʌks/", "meaning": "通量", "pos": "n."},
    {"root": "velocity", "phonetic": "/vəˈlɑːsəti/", "meaning": "速度", "pos": "n."},
    {"root": "accelerat", "phonetic": "/əkˈseləreɪtər/", "meaning": "加速度", "pos": "n."},
    {"root": "decelerat", "phonetic": "/diːˈseləreɪt/", "meaning": "减速", "pos": "v./n."},
    {"root": "vibration", "phonetic": "/vaɪˈbreɪʃn/", "meaning": "振动", "pos": "n."},
    {"root": "oscillat", "phonetic": "/ˈɑːsɪleɪt/", "meaning": "振荡", "pos": "v."},
    {"root": "resonance", "phonetic": "/ˈrezənəns/", "meaning": "共振", "pos": "n."},
    {"root": "damp", "phonetic": "/dæmp/", "meaning": "阻尼", "pos": "v./n."},
    {"root": "shock", "phonetic": "/ʃɑːk/", "meaning": "冲击", "pos": "n./v."},
    {"root": "impact", "phonetic": "/ˈɪmpækt/", "meaning": "冲击", "pos": "n./v."},
    {"root": "collision", "phonetic": "/kəˈlɪʒn/", "meaning": "碰撞", "pos": "n."},
    {"root": "fatigue", "phonetic": "/fəˈtiːɡ/", "meaning": "疲劳", "pos": "n./v."},
    {"root": "wear", "phonetic": "/wer/", "meaning": "磨损", "pos": "n./v."},
    {"root": "corrode", "phonetic": "/kəˈroʊd/", "meaning": "腐蚀", "pos": "v."},
    {"root": "erode", "phonetic": "/ɪˈroʊd/", "meaning": "侵蚀", "pos": "v."},
    {"root": "creep", "phonetic": "/kriːp/", "meaning": "蠕变", "pos": "n./v."},
    {"root": "deflect", "phonetic": "/dɪˈflekt/", "meaning": "挠曲", "pos": "v."},
    {"root": "deform", "phonetic": "/dɪˈfɔːrm/", "meaning": "变形", "pos": "v."},
    {"root": "distort", "phonetic": "/dɪˈstɔːrt/", "meaning": "畸变", "pos": "v."},
    {"root": "twist", "phonetic": "/twɪst/", "meaning": "扭转", "pos": "v./n."},
    {"root": "bend", "phonetic": "/bend/", "meaning": "弯曲", "pos": "v./n."},
    {"root": "flex", "phonetic": "/fleks/", "meaning": "挠曲", "pos": "v./n."},
    {"root": "torsion", "phonetic": "/ˈtɔːrʃn/", "meaning": "扭转", "pos": "n."},
    {"root": "shear", "phonetic": "/ʃɪr/", "meaning": "剪切", "pos": "n./v."},
    {"root": "traction", "phonetic": "/ˈtrækʃn/", "meaning": "牵引", "pos": "n."},
]

# 生成单词数据
def generate_words(root_data, root_id):
    """为词根生成关联单词"""
    root = root_data["root"]
    phonetic = root_data["phonetic"]
    meaning = root_data["meaning"]
    words = []

    # 基础单词
    base_word = {
        "word": root,
        "phonetic": phonetic,
        "partOfSpeech": root_data.get("pos", "n."),
        "meaning": meaning,
        "memoryTip": f"{root} → {meaning}",
        "root": root,
        "rootPhonetic": phonetic,
        "rootMeaning": meaning,
        "rootPhrases": [],
        "wordPhrases": []
    }
    words.append(base_word)

    # 生成派生词
    suffixes = [
        ("er", "/ər/", "n.", "...的人/物"),
        ("or", "/ər/", "n.", "...的人/物"),
        ("ing", "/ɪŋ/", "n.", "...过程/材料"),
        ("ed", "/ɪd/", "adj.", "已...的"),
        ("ic", "/ɪk/", "adj.", "...的"),
        ("al", "/əl/", "adj.", "...的"),
        ("ly", "/li/", "adv.", "...地"),
        ("tion", "/ʃən/", "n.", "...动作/状态"),
        ("ment", "/mənt/", "n.", "...结果/手段"),
        ("less", "/ləs/", "adj.", "无...的"),
    ]

    for i, (suffix, suf_phonetic, pos, suf_meaning) in enumerate(suffixes[:3]):
        if len(words) >= 4:
            break
        derived = root + suffix
        derived_phonetic = phonetic.rstrip('/') + suf_phonetic

        word_entry = {
            "word": derived,
            "phonetic": derived_phonetic,
            "partOfSpeech": pos,
            "meaning": meaning + suf_meaning.replace("...", ""),
            "memoryTip": f"{root}{meaning} + {suffix}后缀 → {meaning}{suf_meaning.replace('...', '')}",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": [],
            "wordPhrases": []
        }
        words.append(word_entry)

    return words

# 生成短语
def generate_phrases(root_data):
    """为词根生成常用短语"""
    root = root_data["root"]
    meaning = root_data["meaning"]

    phrases = [
        f"{root} assembly (待翻译)",
        f"{root} system (待翻译)",
        f"{root} unit (待翻译)",
        f"{root} component (待翻译)"
    ]
    return phrases

# 生成记忆法
def generate_mnemonic(root_data):
    """生成记忆提示"""
    root = root_data["root"]
    meaning = root_data["meaning"]
    return f"{root} → 机械领域核心词汇 → {meaning}"

# 生成完整条目
def generate_entry(root_data, entry_id):
    """生成完整的词根条目"""
    words = generate_words(root_data, entry_id)
    phrases = generate_phrases(root_data)

    # 为单词添加短语引用
    for word in words:
        word["rootPhrases"] = phrases[:4]
        word["wordPhrases"] = phrases[:4]

    entry = {
        "id": entry_id,
        "root": root_data["root"],
        "phonetic": root_data["phonetic"],
        "partOfSpeech": "root",
        "frequency": entry_id,
        "category": "机械",
        "words": words,
        "phrases": phrases,
        "mnemonic": generate_mnemonic(root_data),
        "meaning": root_data["meaning"]
    }
    return entry

# 主函数
def main():
    # 读取现有数据
    with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 获取当前最大ID
    max_id = max(item['id'] for item in data)
    print(f"现有数据条目数: {len(data)}")
    print(f"当前最大ID: {max_id}")

    # 生成新条目 (id 801-1000)
    new_entries = []
    start_id = 801
    # 只添加从980开始的剩余条目
    existing_max = max_id
    start_idx = existing_max - 800 if existing_max >= 800 else 0
    for i, root_data in enumerate(mechanical_roots[start_idx:200]):
        entry_id = start_id + i
        entry = generate_entry(root_data, entry_id)
        new_entries.append(entry)

    # 添加到现有数据
    data.extend(new_entries)

    # 保存文件
    with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"成功添加 {len(new_entries)} 个新词根")
    print(f"新数据条目总数: {len(data)}")
    print(f"ID范围: 801 - {start_id + len(new_entries) - 1}")

if __name__ == "__main__":
    main()
