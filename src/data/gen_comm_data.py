import json

# 300个通信行业词根数据
roots_data = [
    (201, "telecom", "电信", "/ˈtelɪkɒm/", ["telecom operator 电信运营商", "telecom industry 电信行业", "telecom equipment 电信设备"]),
    (202, "packet", "数据包", "/ˈpækɪt/", ["data packet 数据包", "packet loss 丢包", "packet switching 分组交换"]),
    (203, "broadband", "宽带", "/ˈbrɔːdbænd/", ["broadband access 宽带接入", "broadband network 宽带网络"]),
    (204, "router", "路由器", "/ˈruːtər/", ["router table 路由表", "wireless router 无线路由器"]),
    (205, "switch", "交换机", "/swɪtʃ/", ["network switch 网络交换机", "packet switch 分组交换"]),
    (206, "modem", "调制解调器", "/ˈməʊdem/", ["cable modem 电缆调制解调器", "DSL modem DSL调制解调器"]),
    (207, "fiber", "光纤", "/ˈfaɪbər/", ["fiber optic 光纤", "fiber cable 光缆"]),
    (208, "cable", "电缆", "/ˈkeɪbl/", ["coaxial cable 同轴电缆", "fiber cable 光缆"]),
    (209, "satellite", "卫星", "/ˈsætəlaɪt/", ["satellite communication 卫星通信", "satellite TV 卫星电视"]),
    (210, "cellular", "蜂窝", "/ˈseljələr/", ["cellular network 蜂窝网络", "cellular phone 蜂窝电话"]),
]

# 生成更多数据...
more_roots = [
    ("base", "基站", "/beɪs/"),
    ("tower", "塔", "/ˈtaʊər/"),
    ("dish", "碟形天线", "/dɪʃ/"),
    ("relay", "中继", "/ˈriːleɪ/"),
    ("repeater", "中继器", "/rɪˈpiːtər/"),
    ("bridge", "网桥", "/brɪdʒ/"),
    ("hub", "集线器", "/hʌb/"),
    ("node", "节点", "/nəʊd/"),
    ("link", "链路", "/lɪŋk/"),
    ("port", "端口", "/pɔːrt/"),
    ("interface", "接口", "/ˈɪntərfeɪs/"),
    ("socket", "套接字", "/ˈsɒkɪt/"),
    ("channel", "信道", "/ˈtʃænl/"),
    ("path", "路径", "/pɑːθ/"),
    ("route", "路由", "/ruːt/"),
    ("hop", "跳", "/hɒp/"),
    ("bandwidth", "带宽", "/ˈbændwɪdθ/"),
    ("throughput", "吞吐量", "/ˈθruːpʊt/"),
    ("latency", "延迟", "/ˈleɪtnsi/"),
    ("jitter", "抖动", "/ˈdʒɪtər/"),
    ("ping", "Ping", "/pɪŋ/"),
    ("traceroute", "路由追踪", "/treɪsruːt/"),
    ("subnet", "子网", "/ˈsʌbnet/"),
    ("mask", "掩码", "/mɑːsk/"),
    ("firewall", "防火墙", "/ˈfaɪəwɔːl/"),
    ("proxy", "代理", "/ˈprɒksi/"),
    ("cache", "缓存", "/kæʃ/"),
    ("buffer", "缓冲", "/ˈbʌfər/"),
    ("queue", "队列", "/kjuː/"),
    ("stack", "栈", "/stæk/"),
    ("frame", "帧", "/freɪm/"),
    ("bit", "比特", "/bɪt/"),
    ("byte", "字节", "/baɪt/"),
    ("octet", "八位组", "/ˈɒktɪt/"),
    ("word", "字", "/wɜːrd/"),
    ("stream", "流", "/striːm/"),
    ("flow", "流", "/fləʊ/"),
    ("burst", "突发", "/bɜːrst/"),
    ("rate", "速率", "/reɪt/"),
    ("speed", "速度", "/spiːd/"),
]

entries = []

# 处理预定义的前10条
for item in roots_data:
    entry_id, root, meaning, phonetic, phrases = item
    entry = {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "名词",
        "frequency": entry_id,
        "category": "通信",
        "words": [
            {
                "word": root,
                "phonetic": phonetic,
                "partOfSpeech": "n.",
                "meaning": meaning,
                "memoryTip": f"通信术语：{meaning}",
                "root": root,
                "rootPhonetic": phonetic,
                "rootMeaning": meaning,
                "rootPhrases": phrases[:4],
                "wordPhrases": phrases[:2]
            }
        ],
        "phrases": phrases[:4],
        "mnemonic": f"{root}→{meaning}",
        "meaning": meaning
    }
    entries.append(entry)

# 生成剩余的条目
start_id = 211
for i, (root, meaning, phonetic) in enumerate(more_roots):
    entry_id = start_id + i
    phrases = [f"{root} {meaning}", f"{root} configuration {meaning}配置"]
    entry = {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "名词",
        "frequency": entry_id,
        "category": "通信",
        "words": [
            {
                "word": root,
                "phonetic": phonetic,
                "partOfSpeech": "n.",
                "meaning": meaning,
                "memoryTip": f"通信术语：{meaning}",
                "root": root,
                "rootPhonetic": phonetic,
                "rootMeaning": meaning,
                "rootPhrases": phrases[:4],
                "wordPhrases": phrases[:2]
            }
        ],
        "phrases": phrases[:4],
        "mnemonic": f"{root}→{meaning}",
        "meaning": meaning
    }
    entries.append(entry)

# 继续生成到300条
additional_roots = [
    ("capacity", "容量", "/kəˈpæsəti/"),
    ("load", "负载", "/ləʊd/"),
    ("traffic", "流量", "/ˈtræfɪk/"),
    ("congestion", "拥塞", "/kənˈdʒestʃən/"),
    ("collision", "冲突", "/kəˈlɪʒən/"),
    ("error", "错误", "/ˈerər/"),
    ("correction", "纠错", "/kəˈrekʃən/"),
    ("detection", "检测", "/dɪˈtekʃən/"),
    ("parity", "奇偶校验", "/ˈpærəti/"),
    ("checksum", "校验和", "/ˈtʃeksʌm/"),
    ("hash", "哈希", "/hæʃ/"),
    ("cipher", "密码", "/ˈsaɪfər/"),
    ("encrypt", "加密", "/ɪnˈkrɪpt/"),
    ("decrypt", "解密", "/diːˈkrɪpt/"),
    ("key", "密钥", "/kiː/"),
    ("certificate", "证书", "/sərˈtɪfɪkət/"),
    ("authentication", "认证", "/ɔːˌθentɪˈkeɪʃn/"),
    ("authorization", "授权", "/ˌɔːθəraɪˈzeɪʃn/"),
    ("account", "账户", "/əˈkaʊnt/"),
    ("credential", "凭证", "/krəˈdenʃl/"),
    ("password", "密码", "/ˈpɑːswɜːrd/"),
    ("token", "令牌", "/ˈtəʊkən/"),
    ("session", "会话", "/ˈseʃn/"),
    ("cookie", "Cookie", "/ˈkʊki/"),
    ("header", "头部", "/ˈhedər/"),
    ("payload", "载荷", "/ˈpeɪləʊd/"),
    ("trailer", "尾部", "/ˈtreɪlər/"),
    ("segment", "段", "/ˈseɡmənt/"),
    ("datagram", "数据报", "/ˈdeɪtəɡræm/"),
    ("message", "消息", "/ˈmesɪdʒ/"),
    ("request", "请求", "/rɪˈkwest/"),
    ("response", "响应", "/rɪˈspɒns/"),
    ("ack", "确认", "/æk/"),
    ("handshake", "握手", "/ˈhændʃeɪk/"),
    ("synchronize", "同步", "/ˈsɪŋkrənaɪz/"),
    ("async", "异步", "/ˈeɪsɪŋk/"),
    ("sync", "同步", "/sɪŋk/"),
    ("clock", "时钟", "/klɒk/"),
    ("timer", "定时器", "/ˈtaɪmər/"),
    ("timeout", "超时", "/ˈtaɪmaʊt/"),
    ("retry", "重试", "/ˌriːˈtraɪ/"),
    ("retransmit", "重传", "/ˌriːtrænzˈmɪt/"),
    ("forward", "转发", "/ˈfɔːrwərd/"),
    ("backward", "反向", "/ˈbækwərd/"),
    ("upstream", "上行", "/ˈʌpstriːm/"),
    ("downstream", "下行", "/ˈdaʊnstriːm/"),
    ("uplink", "上行链路", "/ˈʌplɪŋk/"),
    ("downlink", "下行链路", "/ˈdaʊnlɪŋk/"),
    ("backhaul", "回传", "/ˈbækhɔːl/"),
    ("fronthaul", "前传", "/ˈfrʌnthɔːl/"),
    ("midhaul", "中传", "/ˈmɪdhɔːl/"),
    ("backbone", "骨干网", "/ˈbækbəʊn/"),
    ("core", "核心", "/kɔːr/"),
    ("edge", "边缘", "/edʒ/"),
    ("access", "接入", "/ˈækses/"),
    ("aggregation", "汇聚", "/ˌæɡrɪˈɡeɪʃn/"),
    ("distribution", "分布", "/ˌdɪstrɪˈbjuːʃn/"),
    ("transport", "传输", "/ˈtrænspɔːrt/"),
    ("physical", "物理", "/ˈfɪzɪkl/"),
    ("logical", "逻辑", "/ˈlɒdʒɪkl/"),
    ("virtual", "虚拟", "/ˈvɜːrtʃuəl/"),
    ("overlay", "覆盖", "/ˌəʊvərˈleɪ/"),
    ("underlay", "底层", "/ˈʌndərleɪ/"),
    ("tunnel", "隧道", "/ˈtʌnl/"),
]

current_id = 251
for root, meaning, phonetic in additional_roots:
    phrases = [f"{root} {meaning}", f"{root} configuration {meaning}配置"]
    entry = {
        "id": current_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "名词",
        "frequency": current_id,
        "category": "通信",
        "words": [
            {
                "word": root,
                "phonetic": phonetic,
                "partOfSpeech": "n.",
                "meaning": meaning,
                "memoryTip": f"通信术语：{meaning}",
                "root": root,
                "rootPhonetic": phonetic,
                "rootMeaning": meaning,
                "rootPhrases": phrases[:4],
                "wordPhrases": phrases[:2]
            }
        ],
        "phrases": phrases[:4],
        "mnemonic": f"{root}→{meaning}",
        "meaning": meaning
    }
    entries.append(entry)
    current_id += 1

# 再添加更多条目到300
more_tech_roots = [
    ("mpls", "MPLS", "/em piː el es/"),
    ("vlan", "VLAN", "/ˈviːlæn/"),
    ("wlan", "WLAN", "/ˈdʌbljuːlæn/"),
    ("wan", "WAN", "/wæn/"),
    ("lan", "LAN", "/læn/"),
    ("man", "MAN", "/mæn/"),
    ("pan", "PAN", "/pæn/"),
    ("san", "SAN", "/sæn/"),
    ("raid", "RAID", "/reɪd/"),
    ("rru", "RRU", "/ɑːr ɑːr juː/"),
    ("bbu", "BBU", "/biː biː juː/"),
    ("AAU", "AAU", "/eɪ eɪ juː/"),
    ("du", "DU", "/diː juː/"),
    ("cu", "CU", "/siː juː/"),
    ("ru", "RU", "/ɑːr juː/"),
    ("ran", "RAN", "/ræn/"),
    ("cn", "CN", "/siː en/"),
    ("ue", "UE", "/juː iː/"),
    ("me", "ME", "/em iː/"),
    ("enb", "eNB", "/iː en biː/"),
    ("gnb", "gNB", "/dʒiː en biː/"),
    ("msc", "MSC", "/em es siː/"),
    ("vlr", "VLR", "/viː el ɑːr/"),
    ("hlr", "HLR", "/eɪtʃ el ɑːr/"),
    ("auc", "AUC", "/eɪ juː siː/"),
    ("eir", "EIR", "/iː aɪ ɑːr/"),
    ("smsc", "SMSC", "/es em es siː/"),
    ("ggsn", "GGSN", "/dʒiː dʒiː es en/"),
    ("sgsn", "SGSN", "/es dʒiː es en/"),
    ("pcrf", "PCRF", "/piː siː ɑːr ef/"),
    ("pgw", "PGW", "/piː dʒiː dʌbljuː/"),
    ("sgw", "SGW", "/es dʒiː dʌbljuː/"),
    ("mme", "MME", "/em em iː/"),
    ("hss", "HSS", "/eɪtʃ es es/"),
    ("amf", "AMF", "/eɪ em ef/"),
    ("smf", "SMF", "/es em ef/"),
    ("upf", "UPF", "/juː piː ef/"),
    ("ausf", "AUSF", "/eɪ juː es ef/"),
    ("udm", "UDM", "/juː diː em/"),
    ("pcf", "PCF", "/piː siː ef/"),
    ("nef", "NEF", "/en iː ef/"),
    ("nrf", "NRF", "/en ɑːr ef/"),
    ("nssf", "NSSF", "/en es es ef/"),
    ("udr", "UDR", "/juː diː ɑːr/"),
    ("smsf", "SMSF", "/es em es ef/"),
]

for root, meaning, phonetic in more_tech_roots:
    phrases = [f"{root} {meaning}", f"{root} interface {root}接口"]
    entry = {
        "id": current_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "名词",
        "frequency": current_id,
        "category": "通信",
        "words": [
            {
                "word": root,
                "phonetic": phonetic,
                "partOfSpeech": "n.",
                "meaning": meaning,
                "memoryTip": f"通信术语：{meaning}",
                "root": root,
                "rootPhonetic": phonetic,
                "rootMeaning": meaning,
                "rootPhrases": phrases[:4],
                "wordPhrases": phrases[:2]
            }
        ],
        "phrases": phrases[:4],
        "mnemonic": f"{root}→{meaning}",
        "meaning": meaning
    }
    entries.append(entry)
    current_id += 1

# 输出JSON数组（不含外层括号）
output = json.dumps(entries, ensure_ascii=False, indent=2)
print(output[1:-1])  # 去掉首尾的方括号
