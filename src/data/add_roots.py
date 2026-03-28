# -*- coding: utf-8 -*-
import json

# 新增的99个词根基础数据
new_roots_basic = [
    # 5G技术词汇
    ("beam", "/biːm/", "名词/动词", "波束", "Beam→\"彼姆\"→光束方向",
     [("beamforming", "/ˈbiːmfɔːrmɪŋ/", "n.", "波束成形", "beam + forming"),
      ("beam steering", "/ˈbiːm ˈstɪrɪŋ/", "n.", "波束转向", "beam + steering"),
      ("beamwidth", "/ˈbiːmwɪdθ/", "n.", "波束宽度", "beam + width"),
      ("beam switching", "/ˈbiːm ˈswɪtʃɪŋ/", "n.", "波束切换", "beam + switching")],
     ["beamforming technology 波束成形技术", "beam steering 波束转向", "beam width 波束宽度", "beam switching 波束切换"]),

    ("massive", "/ˈmæsɪv/", "形容词", "大规模的", "Mass(质量)+ive→巨大的",
     [("massive MIMO", "/ˈmæsɪv ˈmaɪmoʊ/", "n.", "大规模MIMO", "massive + MIMO"),
      ("massive connectivity", "/ˈmæsɪv kəˈnektɪvəti/", "n.", "大规模连接", "massive + connectivity"),
      ("massive deployment", "/ˈmæsɪv dɪˈplɔɪmənt/", "n.", "大规模部署", "massive + deployment"),
      ("massive scale", "/ˈmæsɪv skeɪl/", "n.", "大规模", "massive + scale")],
     ["massive MIMO 大规模MIMO", "massive connectivity 大规模连接", "massive deployment 大规模部署", "massive scale 大规模"]),

    ("slice", "/slaɪs/", "名词/动词", "切片", "Slice→\"斯莱斯\"→网络切片",
     [("network slicing", "/ˈnetwɜːrk ˈslaɪsɪŋ/", "n.", "网络切片", "network + slicing"),
      ("slice instance", "/slaɪs ˈɪnstəns/", "n.", "切片实例", "slice + instance"),
      ("slice management", "/slaɪs ˈmænɪdʒmənt/", "n.", "切片管理", "slice + management"),
      ("slice template", "/slaɪs ˈtempleɪt/", "n.", "切片模板", "slice + template")],
     ["network slicing 网络切片", "slice instance 切片实例", "slice management 切片管理", "slice template 切片模板"]),

    ("edge", "/edʒ/", "名词", "边缘", "Edge→\"艾奇\"→边缘计算",
     [("edge computing", "/edʒ kəmˈpjuːtɪŋ/", "n.", "边缘计算", "edge + computing"),
      ("edge node", "/edʒ noʊd/", "n.", "边缘节点", "edge + node"),
      ("edge server", "/edʒ ˈsɜːrvər/", "n.", "边缘服务器", "edge + server"),
      ("edge gateway", "/edʒ ˈɡeɪtweɪ/", "n.", "边缘网关", "edge + gateway")],
     ["edge computing 边缘计算", "edge node 边缘节点", "edge server 边缘服务器", "edge gateway 边缘网关"]),

    ("ultra", "/ˈʌltrə/", "前缀", "超", "Ultra→\"奥特\"→超级",
     [("ultra-reliable", "/ˈʌltrə rɪˈlaɪəbl/", "adj.", "超高可靠的", "ultra + reliable"),
      ("ultra-low latency", "/ˈʌltrə loʊ ˈleɪtənsi/", "n.", "超低延迟", "ultra + low + latency"),
      ("ultra-dense", "/ˈʌltrə dens/", "adj.", "超密集的", "ultra + dense"),
      ("ultra-wideband", "/ˈʌltrə waɪdbænd/", "n.", "超宽带", "ultra + wideband")],
     ["ultra-reliable communication 超高可靠通信", "ultra-low latency 超低延迟", "ultra-dense network 超密集网络", "ultra-wideband 超宽带"]),

    ("reliable", "/rɪˈlaɪəbl/", "形容词", "可靠的", "Rely(依赖)+able→可靠的",
     [("reliable communication", "/rɪˈlaɪəbl kəˌmjuːnɪˈkeɪʃn/", "n.", "可靠通信", "reliable + communication"),
      ("reliable transmission", "/rɪˈlaɪəbl trænsˈmɪʃn/", "n.", "可靠传输", "reliable + transmission"),
      ("reliable delivery", "/rɪˈlaɪəbl dɪˈlɪvəri/", "n.", "可靠交付", "reliable + delivery"),
      ("reliable service", "/rɪˈlaɪəbl ˈsɜːrvɪs/", "n.", "可靠服务", "reliable + service")],
     ["reliable communication 可靠通信", "reliable transmission 可靠传输", "reliable delivery 可靠交付", "reliable service 可靠服务"]),

    ("latency", "/ˈleɪtənsi/", "名词", "延迟", "Late(迟)+ncy→延迟",
     [("low latency", "/loʊ ˈleɪtənsi/", "n.", "低延迟", "low + latency"),
      ("latency sensitive", "/ˈleɪtənsi ˈsensətɪv/", "adj.", "延迟敏感的", "latency + sensitive"),
      ("latency requirement", "/ˈleɪtənsi rɪˈkwaɪərmənt/", "n.", "延迟要求", "latency + requirement"),
      ("round-trip latency", "/raʊnd trɪp ˈleɪtənsi/", "n.", "往返延迟", "round-trip + latency")],
     ["low latency 低延迟", "latency sensitive 延迟敏感", "latency requirement 延迟要求", "round-trip latency 往返延迟"]),

    ("enhanced", "/ɪnˈhɑːnst/", "形容词", "增强的", "Enhance(增强)+d→增强的",
     [("eMBB", "/iː em biː biː/", "n.", "增强移动宽带", "enhanced Mobile Broadband"),
      ("enhanced coverage", "/ɪnˈhɑːnst ˈkʌvərɪdʒ/", "n.", "增强覆盖", "enhanced + coverage"),
      ("enhanced service", "/ɪnˈhɑːnst ˈsɜːrvɪs/", "n.", "增强服务", "enhanced + service"),
      ("enhanced capability", "/ɪnˈhɑːnst ˌkeɪpəˈbɪləti/", "n.", "增强能力", "enhanced + capability")],
     ["eMBB 增强移动宽带", "enhanced coverage 增强覆盖", "enhanced service 增强服务", "enhanced capability 增强能力"]),

    ("mobile", "/ˈmoʊbaɪl/", "形容词/名词", "移动的", "Mob(移动)+ile→移动的",
     [("mobile network", "/ˈmoʊbaɪl ˈnetwɜːrk/", "n.", "移动网络", "mobile + network"),
      ("mobile station", "/ˈmoʊbaɪl ˈsteɪʃn/", "n.", "移动台", "mobile + station"),
      ("mobile subscriber", "/ˈmoʊbaɪl səbˈskraɪbər/", "n.", "移动用户", "mobile + subscriber"),
      ("mobile device", "/ˈmoʊbaɪl dɪˈvaɪs/", "n.", "移动设备", "mobile + device")],
     ["mobile network 移动网络", "mobile station 移动台", "mobile subscriber 移动用户", "mobile device 移动设备"]),

    ("broadband", "/ˈbrɔːdbænd/", "名词/形容词", "宽带", "Broad(宽)+band(带)→宽带",
     [("broadband access", "/ˈbrɔːdbænd ˈækses/", "n.", "宽带接入", "broadband + access"),
      ("broadband network", "/ˈbrɔːdbænd ˈnetwɜːrk/", "n.", "宽带网络", "broadband + network"),
      ("broadband service", "/ˈbrɔːdbænd ˈsɜːrvɪs/", "n.", "宽带服务", "broadband + service"),
      ("broadband connection", "/ˈbrɔːdbænd kəˈnekʃn/", "n.", "宽带连接", "broadband + connection")],
     ["broadband access 宽带接入", "broadband network 宽带网络", "broadband service 宽带服务", "broadband connection 宽带连接"]),

    # 网络协议
    ("protocol", "/ˈproʊtəkɒl/", "名词", "协议", "Proto(原始)+col→协议",
     [("communication protocol", "/kəˌmjuːnɪˈkeɪʃn ˈproʊtəkɒl/", "n.", "通信协议", "communication + protocol"),
      ("signaling protocol", "/ˈsɪɡnəlɪŋ ˈproʊtəkɒl/", "n.", "信令协议", "signaling + protocol"),
      ("routing protocol", "/ˈruːtɪŋ ˈproʊtəkɒl/", "n.", "路由协议", "routing + protocol"),
      ("transport protocol", "/trænsˈpɔːrt ˈproʊtəkɒl/", "n.", "传输协议", "transport + protocol")],
     ["communication protocol 通信协议", "signaling protocol 信令协议", "routing protocol 路由协议", "transport protocol 传输协议"]),

    ("transmission", "/trænsˈmɪʃn/", "名词", "传输", "Trans(穿过)+mission→传输",
     [("transmission power", "/trænsˈmɪʃn ˈpaʊər/", "n.", "发射功率", "transmission + power"),
      ("transmission rate", "/trænsˈmɪʃn reɪt/", "n.", "传输速率", "transmission + rate"),
      ("transmission delay", "/trænsˈmɪʃn dɪˈleɪ/", "n.", "传输延迟", "transmission + delay"),
      ("data transmission", "/ˈdeɪtə trænsˈmɪʃn/", "n.", "数据传输", "data + transmission")],
     ["transmission power 发射功率", "transmission rate 传输速率", "transmission delay 传输延迟", "data transmission 数据传输"]),

    ("datagram", "/ˈdeɪtəɡræm/", "名词", "数据报", "Data(数据)+gram(图)→数据报",
     [("UDP datagram", "/juː diː piː ˈdeɪtəɡræm/", "n.", "UDP数据报", "UDP + datagram"),
      ("IP datagram", "/aɪ piː ˈdeɪtəɡræm/", "n.", "IP数据报", "IP + datagram"),
      ("datagram header", "/ˈdeɪtəɡræm ˈhedər/", "n.", "数据报头", "datagram + header"),
      ("datagram format", "/ˈdeɪtəɡræm ˈfɔːrmæt/", "n.", "数据报格式", "datagram + format")],
     ["UDP datagram UDP数据报", "IP datagram IP数据报", "datagram header 数据报头", "datagram format 数据报格式"]),

    ("segment", "/ˈseɡmənt/", "名词/动词", "段", "Seg(切)+ment→分段",
     [("TCP segment", "/tiː siː piː ˈseɡmənt/", "n.", "TCP段", "TCP + segment"),
      ("segment header", "/ˈseɡmənt ˈhedər/", "n.", "段头", "segment + header"),
      ("segment size", "/ˈseɡmənt saɪz/", "n.", "段大小", "segment + size"),
      ("maximum segment", "/ˈmæksɪməm ˈseɡmənt/", "n.", "最大段", "maximum + segment")],
     ["TCP segment TCP段", "segment header 段头", "segment size 段大小", "maximum segment 最大段"]),

    ("packet", "/ˈpækɪt/", "名词", "数据包", "Pack(包)+et(小)→小包",
     [("packet switching", "/ˈpækɪt ˈswɪtʃɪŋ/", "n.", "分组交换", "packet + switching"),
      ("packet loss", "/ˈpækɪt lɒs/", "n.", "丢包", "packet + loss"),
      ("packet header", "/ˈpækɪt ˈhedər/", "n.", "包头", "packet + header"),
      ("packet forwarding", "/ˈpækɪt ˈfɔːrwərdɪŋ/", "n.", "包转发", "packet + forwarding")],
     ["packet switching 分组交换", "packet loss 丢包", "packet header 包头", "packet forwarding 包转发"]),

    ("address", "/əˈdres/", "名词/动词", "地址", "Ad(向)+dress→指向地址",
     [("IP address", "/aɪ piː əˈdres/", "n.", "IP地址", "IP + address"),
      ("MAC address", "/mæk əˈdres/", "n.", "MAC地址", "MAC + address"),
      ("address resolution", "/əˈdres ˌrezəˈluːʃn/", "n.", "地址解析", "address + resolution"),
      ("address allocation", "/əˈdres ˌæləˈkeɪʃn/", "n.", "地址分配", "address + allocation")],
     ["IP address IP地址", "MAC address MAC地址", "address resolution 地址解析", "address allocation 地址分配"]),

    ("port", "/pɔːrt/", "名词", "端口", "Port→\"波特\"→港口端口",
     [("port number", "/pɔːrt ˈnʌmbər/", "n.", "端口号", "port + number"),
      ("source port", "/sɔːrs pɔːrt/", "n.", "源端口", "source + port"),
      ("destination port", "/ˌdestɪˈneɪʃn pɔːrt/", "n.", "目的端口", "destination + port"),
      ("port forwarding", "/pɔːrt ˈfɔːrwərdɪŋ/", "n.", "端口转发", "port + forwarding")],
     ["port number 端口号", "source port 源端口", "destination port 目的端口", "port forwarding 端口转发"]),

    ("socket", "/ˈsɒkɪt/", "名词", "套接字", "Sock(袜子)+et→套接",
     [("socket programming", "/ˈsɒkɪt ˈproʊɡræmɪŋ/", "n.", "套接字编程", "socket + programming"),
      ("socket connection", "/ˈsɒkɪt kəˈnekʃn/", "n.", "套接字连接", "socket + connection"),
      ("socket address", "/ˈsɒkɪt əˈdres/", "n.", "套接字地址", "socket + address"),
      ("raw socket", "/rɔː ˈsɒkɪt/", "n.", "原始套接字", "raw + socket")],
     ["socket programming 套接字编程", "socket connection 套接字连接", "socket address 套接字地址", "raw socket 原始套接字"]),

    ("handshake", "/ˈhændʃeɪk/", "名词/动词", "握手", "Hand(手)+shake(摇)→握手",
     [("three-way handshake", "/θriː weɪ ˈhændʃeɪk/", "n.", "三次握手", "three-way + handshake"),
      ("handshake protocol", "/ˈhændʃeɪk ˈproʊtəkɒl/", "n.", "握手协议", "handshake + protocol"),
      ("TLS handshake", "/tiː el es ˈhændʃeɪk/", "n.", "TLS握手", "TLS + handshake"),
      ("handshake failure", "/ˈhændʃeɪk ˈfeɪljər/", "n.", "握手失败", "handshake + failure")],
     ["three-way handshake 三次握手", "handshake protocol 握手协议", "TLS handshake TLS握手", "handshake failure 握手失败"]),

    ("acknowledge", "/əkˈnɒlɪdʒ/", "动词", "确认", "Ac(加强)+knowledge(知道)→确认",
     [("ACK packet", "/æk ˈpækɪt/", "n.", "确认包", "ACK + packet"),
      ("acknowledgement", "/əkˈnɒlɪdʒmənt/", "n.", "确认", "acknowledge + ment"),
      ("positive acknowledgement", "/ˈpɒzətɪv əkˈnɒlɪdʒmənt/", "n.", "肯定确认", "positive + acknowledgement"),
      ("negative acknowledgement", "/ˈneɡətɪv əkˈnɒlɪdʒmənt/", "n.", "否定确认", "negative + acknowledgement")],
     ["ACK packet 确认包", "acknowledgement 确认", "positive acknowledgement 肯定确认", "negative acknowledgement 否定确认"]),

    # 无线技术
    ("wireless", "/ˈwaɪərləs/", "形容词", "无线的", "Wire(线)+less(无)→无线",
     [("wireless network", "/ˈwaɪərləs ˈnetwɜːrk/", "n.", "无线网络", "wireless + network"),
      ("wireless communication", "/ˈwaɪərləs kəˌmjuːnɪˈkeɪʃn/", "n.", "无线通信", "wireless + communication"),
      ("wireless channel", "/ˈwaɪərləs ˈtʃænəl/", "n.", "无线信道", "wireless + channel"),
      ("wireless link", "/ˈwaɪərləs lɪŋk/", "n.", "无线链路", "wireless + link")],
     ["wireless network 无线网络", "wireless communication 无线通信", "wireless channel 无线信道", "wireless link 无线链路"]),

    ("antenna", "/ænˈtenə/", "名词", "天线", "Antenna→\"安天纳\"→天线",
     [("antenna array", "/ænˈtenə əˈreɪ/", "n.", "天线阵列", "antenna + array"),
      ("antenna gain", "/ænˈtenə ɡeɪn/", "n.", "天线增益", "antenna + gain"),
      ("antenna pattern", "/ænˈtenə ˈpætərn/", "n.", "天线方向图", "antenna + pattern"),
      ("smart antenna", "/smɑːrt ænˈtenə/", "n.", "智能天线", "smart + antenna")],
     ["antenna array 天线阵列", "antenna gain 天线增益", "antenna pattern 天线方向图", "smart antenna 智能天线"]),

    ("spectrum", "/ˈspektrəm/", "名词", "频谱", "Spect(看)+rum→频谱",
     [("spectrum allocation", "/ˈspektrəm ˌæləˈkeɪʃn/", "n.", "频谱分配", "spectrum + allocation"),
      ("spectrum efficiency", "/ˈspektrəm ɪˈfɪʃnsi/", "n.", "频谱效率", "spectrum + efficiency"),
      ("spectrum sharing", "/ˈspektrəm ˈʃerɪŋ/", "n.", "频谱共享", "spectrum + sharing"),
      ("millimeter wave spectrum", "/ˈmɪləˌmiːtər weɪv ˈspektrəm/", "n.", "毫米波频谱", "millimeter wave + spectrum")],
     ["spectrum allocation 频谱分配", "spectrum efficiency 频谱效率", "spectrum sharing 频谱共享", "millimeter wave spectrum 毫米波频谱"]),

    ("frequency", "/ˈfriːkwənsi/", "名词", "频率", "Frequent(频繁)+cy→频率",
     [("frequency band", "/ˈfriːkwənsi bænd/", "n.", "频段", "frequency + band"),
      ("carrier frequency", "/ˈkæriər ˈfriːkwənsi/", "n.", "载波频率", "carrier + frequency"),
      ("frequency division", "/ˈfriːkwənsi dɪˈvɪʒn/", "n.", "频分", "frequency + division"),
      ("frequency reuse", "/ˈfriːkwənsi riːˈjuːz/", "n.", "频率复用", "frequency + reuse")],
     ["frequency band 频段", "carrier frequency 载波频率", "frequency division 频分", "frequency reuse 频率复用"]),

    ("channel", "/ˈtʃænəl/", "名词", "信道", "Channel→\"查诺\"→信道通道",
     [("channel estimation", "/ˈtʃænəl ˌestɪˈmeɪʃn/", "n.", "信道估计", "channel + estimation"),
      ("channel state", "/ˈtʃænəl steɪt/", "n.", "信道状态", "channel + state"),
      ("channel coding", "/ˈtʃænəl ˈkoʊdɪŋ/", "n.", "信道编码", "channel + coding"),
      ("channel capacity", "/ˈtʃænəl kəˈpæsəti/", "n.", "信道容量", "channel + capacity")],
     ["channel estimation 信道估计", "channel state 信道状态", "channel coding 信道编码", "channel capacity 信道容量"]),

    ("modulation", "/ˌmɒdjʊˈleɪʃn/", "名词", "调制", "Modul(模块)+ation→调制",
     [("QAM modulation", "/kwæm ˌmɒdjʊˈleɪʃn/", "n.", "QAM调制", "QAM + modulation"),
      ("modulation scheme", "/ˌmɒdjʊˈleɪʃn skiːm/", "n.", "调制方案", "modulation + scheme"),
      ("adaptive modulation", "/əˈdæptɪv ˌmɒdjʊˈleɪʃn/", "n.", "自适应调制", "adaptive + modulation"),
      ("digital modulation", "/ˈdɪdʒɪtl ˌmɒdjʊˈleɪʃn/", "n.", "数字调制", "digital + modulation")],
     ["QAM modulation QAM调制", "modulation scheme 调制方案", "adaptive modulation 自适应调制", "digital modulation 数字调制"]),

    ("demodulation", "/diːˌmɒdjʊˈleɪʃn/", "名词", "解调", "De(解除)+modulation→解调",
     [("demodulation process", "/diːˌmɒdjʊˈleɪʃn ˈproʊses/", "n.", "解调过程", "demodulation + process"),
      ("coherent demodulation", "/koʊˈhɪərənt diːˌmɒdjʊˈleɪʃn/", "n.", "相干解调", "coherent + demodulation"),
      ("non-coherent demodulation", "/nɒn koʊˈhɪərənt diːˌmɒdjʊˈleɪʃn/", "n.", "非相干解调", "non-coherent + demodulation"),
      ("signal demodulation", "/ˈsɪɡnəl diːˌmɒdjʊˈleɪʃn/", "n.", "信号解调", "signal + demodulation")],
     ["demodulation process 解调过程", "coherent demodulation 相干解调", "non-coherent demodulation 非相干解调", "signal demodulation 信号解调"]),

    ("carrier", "/ˈkæriər/", "名词", "载波", "Carry(携带)+er→载波",
     [("carrier aggregation", "/ˈkæriər ˌæɡrɪˈɡeɪʃn/", "n.", "载波聚合", "carrier + aggregation"),
      ("carrier frequency", "/ˈkæriər ˈfriːkwənsi/", "n.", "载波频率", "carrier + frequency"),
      ("carrier wave", "/ˈkæriər weɪv/", "n.", "载波", "carrier + wave"),
      ("component carrier", "/kəmˈpoʊnənt ˈkæriər/", "n.", "分量载波", "component + carrier")],
     ["carrier aggregation 载波聚合", "carrier frequency 载波频率", "carrier wave 载波", "component carrier 分量载波"]),

    ("interference", "/ˌɪntərˈfɪərəns/", "名词", "干扰", "Inter(之间)+fere(打)+ence→干扰",
     [("interference cancellation", "/ˌɪntərˈfɪərəns ˌkænsəˈleɪʃn/", "n.", "干扰消除", "interference + cancellation"),
      ("inter-cell interference", "/ˌɪntər sel ˌɪntərˈfɪərəns/", "n.", "小区间干扰", "inter-cell + interference"),
      ("co-channel interference", "/koʊ ˈtʃænəl ˌɪntərˈfɪərəns/", "n.", "同频干扰", "co-channel + interference"),
      ("interference management", "/ˌɪntərˈfɪərəns ˈmænɪdʒmənt/", "n.", "干扰管理", "interference + management")],
     ["interference cancellation 干扰消除", "inter-cell interference 小区间干扰", "co-channel interference 同频干扰", "interference management 干扰管理"]),

    ("diversity", "/daɪˈvɜːrsəti/", "名词", "分集", "Divers(多样的)+ity→分集",
     [("diversity combining", "/daɪˈvɜːrsəti kəmˈbaɪnɪŋ/", "n.", "分集合并", "diversity + combining"),
      ("spatial diversity", "/ˈspeɪʃl daɪˈvɜːrsəti/", "n.", "空间分集", "spatial + diversity"),
      ("frequency diversity", "/ˈfriːkwənsi daɪˈvɜːrsəti/", "n.", "频率分集", "frequency + diversity"),
      ("time diversity", "/taɪm daɪˈvɜːrsəti/", "n.", "时间分集", "time + diversity")],
     ["diversity combining 分集合并", "spatial diversity 空间分集", "frequency diversity 频率分集", "time diversity 时间分集"]),

    # 通信设备
    ("repeater", "/rɪˈpiːtər/", "名词", "中继器", "Repeat(重复)+er→中继器",
     [("signal repeater", "/ˈsɪɡnəl rɪˈpiːtər/", "n.", "信号中继器", "signal + repeater"),
      ("optical repeater", "/ˈɒptɪkl rɪˈpiːtər/", "n.", "光中继器", "optical + repeater"),
      ("wireless repeater", "/ˈwaɪərləs rɪˈpiːtər/", "n.", "无线中继器", "wireless + repeater"),
      ("repeater station", "/rɪˈpiːtər ˈsteɪʃn/", "n.", "中继站", "repeater + station")],
     ["signal repeater 信号中继器", "optical repeater 光中继器", "wireless repeater 无线中继器", "repeater station 中继站"]),

    ("bridge", "/brɪdʒ/", "名词", "网桥", "Bridge→\"布里奇\"→桥梁网桥",
     [("network bridge", "/ˈnetwɜːrk brɪdʒ/", "n.", "网络网桥", "network + bridge"),
      ("bridge mode", "/brɪdʒ moʊd/", "n.", "桥接模式", "bridge + mode"),
      ("bridge interface", "/brɪdʒ ˈɪntərfeɪs/", "n.", "桥接接口", "bridge + interface"),
      ("transparent bridge", "/trænsˈpærənt brɪdʒ/", "n.", "透明网桥", "transparent + bridge")],
     ["network bridge 网络网桥", "bridge mode 桥接模式", "bridge interface 桥接接口", "transparent bridge 透明网桥"]),

    ("hub", "/hʌb/", "名词", "集线器", "Hub→\"哈布\"→中心集线器",
     [("network hub", "/ˈnetwɜːrk hʌb/", "n.", "网络集线器", "network + hub"),
      ("hub port", "/hʌb pɔːrt/", "n.", "集线器端口", "hub + port"),
      ("active hub", "/ˈæktɪv hʌb/", "n.", "有源集线器", "active + hub"),
      ("passive hub", "/ˈpæsɪv hʌb/", "n.", "无源集线器", "passive + hub")],
     ["network hub 网络集线器", "hub port 集线器端口", "active hub 有源集线器", "passive hub 无源集线器"]),

    ("switch", "/swɪtʃ/", "名词/动词", "交换机", "Switch→\"斯维奇\"→交换切换",
     [("layer switch", "/ˈleɪər swɪtʃ/", "n.", "层交换机", "layer + switch"),
      ("switch port", "/swɪtʃ pɔːrt/", "n.", "交换机端口", "switch + port"),
      ("virtual switch", "/ˈvɜːrtʃuəl swɪtʃ/", "n.", "虚拟交换机", "virtual + switch"),
      ("switch fabric", "/swɪtʃ ˈfæbrɪk/", "n.", "交换架构", "switch + fabric")],
     ["layer switch 层交换机", "switch port 交换机端口", "virtual switch 虚拟交换机", "switch fabric 交换架构"]),

    ("router", "/ˈruːtər/", "名词", "路由器", "Route(路由)+er→路由器",
     [("core router", "/kɔːr ˈruːtər/", "n.", "核心路由器", "core + router"),
      ("edge router", "/edʒ ˈruːtər/", "n.", "边缘路由器", "edge + router"),
      ("virtual router", "/ˈvɜːrtʃuəl ˈruːtər/", "n.", "虚拟路由器", "virtual + router"),
      ("router protocol", "/ˈruːtər ˈproʊtəkɒl/", "n.", "路由协议", "router + protocol")],
     ["core router 核心路由器", "edge router 边缘路由器", "virtual router 虚拟路由器", "router protocol 路由协议"]),

    ("gateway", "/ˈɡeɪtweɪ/", "名词", "网关", "Gate(门)+way(路)→网关",
     [("default gateway", "/dɪˈfɔːlt ˈɡeɪtweɪ/", "n.", "默认网关", "default + gateway"),
      ("application gateway", "/ˌæplɪˈkeɪʃn ˈɡeɪtweɪ/", "n.", "应用网关", "application + gateway"),
      ("media gateway", "/ˈmiːdiə ˈɡeɪtweɪ/", "n.", "媒体网关", "media + gateway"),
      ("security gateway", "/sɪˈkjʊərəti ˈɡeɪtweɪ/", "n.", "安全网关", "security + gateway")],
     ["default gateway 默认网关", "application gateway 应用网关", "media gateway 媒体网关", "security gateway 安全网关"]),

    ("firewall", "/ˈfaɪərwɔːl/", "名词", "防火墙", "Fire(火)+wall(墙)→防火墙",
     [("firewall rule", "/ˈfaɪərwɔːl ruːl/", "n.", "防火墙规则", "firewall + rule"),
      ("next-generation firewall", "/nekst ˌdʒenəˈreɪʃn ˈfaɪərwɔːl/", "n.", "下一代防火墙", "next-generation + firewall"),
      ("firewall policy", "/ˈfaɪərwɔːl ˈpɒləsi/", "n.", "防火墙策略", "firewall + policy"),
      ("web application firewall", "/web ˌæplɪˈkeɪʃn ˈfaɪərwɔːl/", "n.", "Web应用防火墙", "web application + firewall")],
     ["firewall rule 防火墙规则", "next-generation firewall 下一代防火墙", "firewall policy 防火墙策略", "web application firewall Web应用防火墙"]),

    ("proxy", "/ˈprɒksi/", "名词", "代理", "Proxy→\"普罗西\"→代理",
     [("proxy server", "/ˈprɒksi ˈsɜːrvər/", "n.", "代理服务器", "proxy + server"),
      ("reverse proxy", "/rɪˈvɜːrs ˈprɒksi/", "n.", "反向代理", "reverse + proxy"),
      ("forward proxy", "/ˈfɔːrwərd ˈprɒksi/", "n.", "正向代理", "forward + proxy"),
      ("proxy cache", "/ˈprɒksi kæʃ/", "n.", "代理缓存", "proxy + cache")],
     ["proxy server 代理服务器", "reverse proxy 反向代理", "forward proxy 正向代理", "proxy cache 代理缓存"]),

    ("load", "/loʊd/", "名词/动词", "负载", "Load→\"洛德\"→负载加载",
     [("load balancing", "/loʊd ˈbælənsɪŋ/", "n.", "负载均衡", "load + balancing"),
      ("load distribution", "/loʊd ˌdɪstrɪˈbjuːʃn/", "n.", "负载分配", "load + distribution"),
      ("load testing", "/loʊd ˈtestɪŋ/", "n.", "负载测试", "load + testing"),
      ("heavy load", "/ˈhevi loʊd/", "n.", "重负载", "heavy + load")],
     ["load balancing 负载均衡", "load distribution 负载分配", "load testing 负载测试", "heavy load 重负载"]),

    ("balancer", "/ˈbælənsər/", "名词", "均衡器", "Balance(平衡)+er→均衡器",
     [("load balancer", "/loʊd ˈbælənsər/", "n.", "负载均衡器", "load + balancer"),
      ("software balancer", "/ˈsɒftwɛər ˈbælənsər/", "n.", "软件均衡器", "software + balancer"),
      ("hardware balancer", "/ˈhɑːrdwɛər ˈbælənsər/", "n.", "硬件均衡器", "hardware + balancer"),
      ("global balancer", "/ˈɡloʊbəl ˈbælənsər/", "n.", "全局均衡器", "global + balancer")],
     ["load balancer 负载均衡器", "software balancer 软件均衡器", "hardware balancer 硬件均衡器", "global balancer 全局均衡器"]),

    # 编码调制
    ("encode", "/ɪnˈkoʊd/", "动词", "编码", "En(进入)+code(码)→编码",
     [("encoding scheme", "/ɪnˈkoʊdɪŋ skiːm/", "n.", "编码方案", "encoding + scheme"),
      ("channel encoding", "/ˈtʃænəl ɪnˈkoʊdɪŋ/", "n.", "信道编码", "channel + encoding"),
      ("source encoding", "/sɔːrs ɪnˈkoʊdɪŋ/", "n.", "信源编码", "source + encoding"),
      ("video encoding", "/ˈvɪdioʊ ɪnˈkoʊdɪŋ/", "n.", "视频编码", "video + encoding")],
     ["encoding scheme 编码方案", "channel encoding 信道编码", "source encoding 信源编码", "video encoding 视频编码"]),

    ("decode", "/diːˈkoʊd/", "动词", "解码", "De(解除)+code(码)→解码",
     [("decoding process", "/diːˈkoʊdɪŋ ˈproʊses/", "n.", "解码过程", "decoding + process"),
      ("iterative decoding", "/ˈɪtərətɪv diːˈkoʊdɪŋ/", "n.", "迭代解码", "iterative + decoding"),
      ("soft decoding", "/sɒft diːˈkoʊdɪŋ/", "n.", "软解码", "soft + decoding"),
      ("hard decoding", "/hɑːrd diːˈkoʊdɪŋ/", "n.", "硬解码", "hard + decoding")],
     ["decoding process 解码过程", "iterative decoding 迭代解码", "soft decoding 软解码", "hard decoding 硬解码"]),

    ("quantize", "/ˈkwɒntaɪz/", "动词", "量化", "Quant(量)+ize→量化",
     [("quantization error", "/ˌkwɒntaɪˈzeɪʃn ˈerər/", "n.", "量化误差", "quantization + error"),
      ("quantization level", "/ˌkwɒntaɪˈzeɪʃn ˈlevl/", "n.", "量化电平", "quantization + level"),
      ("vector quantization", "/ˈvektər ˌkwɒntaɪˈzeɪʃn/", "n.", "矢量量化", "vector + quantization"),
      ("quantization noise", "/ˌkwɒntaɪˈzeɪʃn nɔɪz/", "n.", "量化噪声", "quantization + noise")],
     ["quantization error 量化误差", "quantization level 量化电平", "vector quantization 矢量量化", "quantization noise 量化噪声"]),

    ("sample", "/ˈsæmpl/", "名词/动词", "采样", "Sample→\"桑普\"→样本采样",
     [("sampling rate", "/ˈsæmplɪŋ reɪt/", "n.", "采样率", "sampling + rate"),
      ("sample frequency", "/ˈsæmpl ˈfriːkwənsi/", "n.", "采样频率", "sample + frequency"),
      ("Nyquist sampling", "/naɪkwɪst ˈsæmplɪŋ/", "n.", "奈奎斯特采样", "Nyquist + sampling"),
      ("sample and hold", "/ˈsæmpl ænd hoʊld/", "n.", "采样保持", "sample + hold")],
     ["sampling rate 采样率", "sample frequency 采样频率", "Nyquist sampling 奈奎斯特采样", "sample and hold 采样保持"]),

    ("bit", "/bɪt/", "名词", "比特", "Bit→\"比特\"→信息单位",
     [("bit rate", "/bɪt reɪt/", "n.", "比特率", "bit + rate"),
      ("bit error", "/bɪt ˈerər/", "n.", "误码", "bit + error"),
      ("bit stream", "/bɪt striːm/", "n.", "比特流", "bit + stream"),
      ("bit interleaving", "/bɪt ˌɪntərˈliːvɪŋ/", "n.", "比特交织", "bit + interleaving")],
     ["bit rate 比特率", "bit error 误码", "bit stream 比特流", "bit interleaving 比特交织"]),

    ("byte", "/baɪt/", "名词", "字节", "Byte→\"拜特\"→八位字节",
     [("byte stream", "/baɪt striːm/", "n.", "字节流", "byte + stream"),
      ("kilobyte", "/ˈkɪləbaɪt/", "n.", "千字节", "kilo + byte"),
      ("megabyte", "/ˈmeɡəbaɪt/", "n.", "兆字节", "mega + byte"),
      ("byte order", "/baɪt ˈɔːrdər/", "n.", "字节序", "byte + order")],
     ["byte stream 字节流", "kilobyte 千字节", "megabyte 兆字节", "byte order 字节序"]),

    ("polar", "/ˈpoʊlər/", "形容词", "极化的", "Polar→\"波拉\"→极性极化",
     [("polar code", "/ˈpoʊlər koʊd/", "n.", "极化码", "polar + code"),
      ("polar encoding", "/ˈpoʊlər ɪnˈkoʊdɪŋ/", "n.", "极化编码", "polar + encoding"),
      ("polar decoding", "/ˈpoʊlər diːˈkoʊdɪŋ/", "n.", "极化解码", "polar + decoding"),
      ("polar transformation", "/ˈpoʊlər ˌtrænsfərˈmeɪʃn/", "n.", "极化变换", "polar + transformation")],
     ["polar code 极化码", "polar encoding 极化编码", "polar decoding 极化解码", "polar transformation 极化变换"]),

    ("turbo", "/ˈtɜːrboʊ/", "形容词", "涡轮的", "Turbo→\"特波\"→涡轮加速",
     [("turbo code", "/ˈtɜːrboʊ koʊd/", "n.", "Turbo码", "turbo + code"),
      ("turbo decoding", "/ˈtɜːrboʊ diːˈkoʊdɪŋ/", "n.", "Turbo解码", "turbo + decoding"),
      ("turbo encoder", "/ˈtɜːrboʊ ɪnˈkoʊdər/", "n.", "Turbo编码器", "turbo + encoder"),
      ("turbo equalization", "/ˈtɜːrboʊ ˌiːkwəlaɪˈzeɪʃn/", "n.", "Turbo均衡", "turbo + equalization")],
     ["turbo code Turbo码", "turbo decoding Turbo解码", "turbo encoder Turbo编码器", "turbo equalization Turbo均衡"]),

    ("convolutional", "/ˌkɒnvəˈluːʃənl/", "形容词", "卷积的", "Convolve(卷)+lutional→卷积",
     [("convolutional code", "/ˌkɒnvəˈluːʃənl koʊd/", "n.", "卷积码", "convolutional + code"),
      ("convolutional encoder", "/ˌkɒnvəˈluːʃənl ɪnˈkoʊdər/", "n.", "卷积编码器", "convolutional + encoder"),
      ("convolutional neural network", "/ˌkɒnvəˈluːʃənl ˈnʊrəl ˈnetwɜːrk/", "n.", "卷积神经网络", "convolutional + neural network"),
      ("convolutional layer", "/ˌkɒnvəˈluːʃənl ˈleɪər/", "n.", "卷积层", "convolutional + layer")],
     ["convolutional code 卷积码", "convolutional encoder 卷积编码器", "convolutional neural network 卷积神经网络", "convolutional layer 卷积层"]),

    ("block", "/blɒk/", "名词/动词", "块", "Block→\"布洛克\"→块数据块",
     [("block code", "/blɒk koʊd/", "n.", "分组码", "block + code"),
      ("block size", "/blɒk saɪz/", "n.", "块大小", "block + size"),
      ("block error", "/blɒk ˈerər/", "n.", "块错误", "block + error"),
      ("block chain", "/blɒk tʃeɪn/", "n.", "区块链", "block + chain")],
     ["block code 分组码", "block size 块大小", "block error 块错误", "block chain 区块链"]),

    # 网络安全
    ("tunnel", "/ˈtʌnl/", "名词", "隧道", "Tunnel→\"坦诺\"→隧道通道",
     [("tunnel mode", "/ˈtʌnl moʊd/", "n.", "隧道模式", "tunnel + mode"),
      ("VPN tunnel", "/viː piː en ˈtʌnl/", "n.", "VPN隧道", "VPN + tunnel"),
      ("tunnel protocol", "/ˈtʌnl ˈproʊtəkɒl/", "n.", "隧道协议", "tunnel + protocol"),
      ("tunnel endpoint", "/ˈtʌnl ˈendpɔɪnt/", "n.", "隧道端点", "tunnel + endpoint")],
     ["tunnel mode 隧道模式", "VPN tunnel VPN隧道", "tunnel protocol 隧道协议", "tunnel endpoint 隧道端点"]),

    ("virtual", "/ˈvɜːrtʃuəl/", "形容词", "虚拟的", "Virt(德行)+ual→虚拟",
     [("virtual network", "/ˈvɜːrtʃuəl ˈnetwɜːrk/", "n.", "虚拟网络", "virtual + network"),
      ("virtual machine", "/ˈvɜːrtʃuəl məˈʃiːn/", "n.", "虚拟机", "virtual + machine"),
      ("virtualization technology", "/ˌvɜːrtʃuəlaɪˈzeɪʃn tekˈnɒlədʒi/", "n.", "虚拟化技术", "virtualization + technology"),
      ("virtual reality", "/ˈvɜːrtʃuəl riˈæləti/", "n.", "虚拟现实", "virtual + reality")],
     ["virtual network 虚拟网络", "virtual machine 虚拟机", "virtualization technology 虚拟化技术", "virtual reality 虚拟现实"]),

    ("private", "/ˈpraɪvət/", "形容词", "私有的", "Priv(私有)+ate→私有的",
     [("private network", "/ˈpraɪvət ˈnetwɜːrk/", "n.", "私有网络", "private + network"),
      ("private key", "/ˈpraɪvət kiː/", "n.", "私钥", "private + key"),
      ("private cloud", "/ˈpraɪvət klaʊd/", "n.", "私有云", "private + cloud"),
      ("private APN", "/ˈpraɪvət eɪ piː en/", "n.", "私有APN", "private + APN")],
     ["private network 私有网络", "private key 私钥", "private cloud 私有云", "private APN 私有APN"]),

    ("intrusion", "/ɪnˈtruːʒn/", "名词", "入侵", "In(进入)+trus(推)+ion→入侵",
     [("intrusion detection", "/ɪnˈtruːʒn dɪˈtekʃn/", "n.", "入侵检测", "intrusion + detection"),
      ("intrusion prevention", "/ɪnˈtruːʒn prɪˈvenʃn/", "n.", "入侵防护", "intrusion + prevention"),
      ("IDS", "/aɪ diː es/", "n.", "入侵检测系统", "Intrusion Detection System"),
      ("IPS", "/aɪ piː es/", "n.", "入侵防护系统", "Intrusion Prevention System")],
     ["intrusion detection 入侵检测", "intrusion prevention 入侵防护", "IDS 入侵检测系统", "IPS 入侵防护系统"]),

    ("detection", "/dɪˈtekʃn/", "名词", "检测", "Detect(发现)+ion→检测",
     [("anomaly detection", "/əˈnɒməli dɪˈtekʃn/", "n.", "异常检测", "anomaly + detection"),
      ("failure detection", "/ˈfeɪljər dɪˈtekʃn/", "n.", "故障检测", "failure + detection"),
      ("signal detection", "/ˈsɪɡnəl dɪˈtekʃn/", "n.", "信号检测", "signal + detection"),
      ("edge detection", "/edʒ dɪˈtekʃn/", "n.", "边缘检测", "edge + detection")],
     ["anomaly detection 异常检测", "failure detection 故障检测", "signal detection 信号检测", "edge detection 边缘检测"]),

    ("prevention", "/prɪˈvenʃn/", "名词", "预防", "Prevent(预防)+ion→预防",
     [("loss prevention", "/lɒs prɪˈvenʃn/", "n.", "丢包预防", "loss + prevention"),
      ("error prevention", "/ˈerər prɪˈvenʃn/", "n.", "错误预防", "error + prevention"),
      ("attack prevention", "/əˈtæk prɪˈvenʃn/", "n.", "攻击防护", "attack + prevention"),
      ("collision prevention", "/kəˈlɪʒn prɪˈvenʃn/", "n.", "碰撞预防", "collision + prevention")],
     ["loss prevention 丢包预防", "error prevention 错误预防", "attack prevention 攻击防护", "collision prevention 碰撞预防"]),

    ("malware", "/ˈmælwɛər/", "名词", "恶意软件", "Mal(坏)+ware(件)→恶意软件",
     [("malware detection", "/ˈmælwɛər dɪˈtekʃn/", "n.", "恶意软件检测", "malware + detection"),
      ("malware protection", "/ˈmælwɛər prəˈtekʃn/", "n.", "恶意软件防护", "malware + protection"),
      ("mobile malware", "/ˈmoʊbaɪl ˈmælwɛər/", "n.", "移动恶意软件", "mobile + malware"),
      ("malware analysis", "/ˈmælwɛər əˈnæləsɪs/", "n.", "恶意软件分析", "malware + analysis")],
     ["malware detection 恶意软件检测", "malware protection 恶意软件防护", "mobile malware 移动恶意软件", "malware analysis 恶意软件分析"]),

    ("spyware", "/ˈspaɪwɛər/", "名词", "间谍软件", "Spy(间谍)+ware→间谍软件",
     [("spyware removal", "/ˈspaɪwɛər rɪˈmuːvəl/", "n.", "间谍软件清除", "spyware + removal"),
      ("anti-spyware", "/ˌænti ˈspaɪwɛər/", "n.", "反间谍软件", "anti + spyware"),
      ("spyware scanner", "/ˈspaɪwɛər ˈskænər/", "n.", "间谍软件扫描器", "spyware + scanner"),
      ("spyware detection", "/ˈspaɪwɛər dɪˈtekʃn/", "n.", "间谍软件检测", "spyware + detection")],
     ["spyware removal 间谍软件清除", "anti-spyware 反间谍软件", "spyware scanner 间谍软件扫描器", "spyware detection 间谍软件检测"]),

    # 移动通信
    ("cellular", "/ˈseljələr/", "形容词", "蜂窝的", "Cell(细胞)+ular→蜂窝的",
     [("cellular network", "/ˈseljələr ˈnetwɜːrk/", "n.", "蜂窝网络", "cellular + network"),
      ("cellular system", "/ˈseljələr ˈsɪstəm/", "n.", "蜂窝系统", "cellular + system"),
      ("cellular communication", "/ˈseljələr kəˌmjuːnɪˈkeɪʃn/", "n.", "蜂窝通信", "cellular + communication"),
      ("cellular technology", "/ˈseljələr tekˈnɒlədʒi/", "n.", "蜂窝技术", "cellular + technology")],
     ["cellular network 蜂窝网络", "cellular system 蜂窝系统", "cellular communication 蜂窝通信", "cellular technology 蜂窝技术"]),

    ("handover", "/ˈhændoʊvər/", "名词", "切换", "Hand(手)+over(过)→切换",
     [("seamless handover", "/ˈsiːmləs ˈhændoʊvər/", "n.", "无缝切换", "seamless + handover"),
      ("horizontal handover", "/ˌhɒrɪˈzɒntl ˈhændoʊvər/", "n.", "水平切换", "horizontal + handover"),
      ("vertical handover", "/ˈvɜːrtɪkl ˈhændoʊvər/", "n.", "垂直切换", "vertical + handover"),
      ("handover decision", "/ˈhændoʊvər dɪˈsɪʒn/", "n.", "切换决策", "handover + decision")],
     ["seamless handover 无缝切换", "horizontal handover 水平切换", "vertical handover 垂直切换", "handover decision 切换决策"]),

    ("roaming", "/ˈroʊmɪŋ/", "名词", "漫游", "Roam(漫游)+ing→漫游",
     [("international roaming", "/ˌɪntərˈnæʃnəl ˈroʊmɪŋ/", "n.", "国际漫游", "international + roaming"),
      ("roaming agreement", "/ˈroʊmɪŋ əˈɡriːmənt/", "n.", "漫游协议", "roaming + agreement"),
      ("roaming service", "/ˈroʊmɪŋ ˈsɜːrvɪs/", "n.", "漫游服务", "roaming + service"),
      ("data roaming", "/ˈdeɪtə ˈroʊmɪŋ/", "n.", "数据漫游", "data + roaming")],
     ["international roaming 国际漫游", "roaming agreement 漫游协议", "roaming service 漫游服务", "data roaming 数据漫游"]),

    ("paging", "/ˈpeɪdʒɪŋ/", "名词", "寻呼", "Page(页/呼叫)+ing→寻呼",
     [("paging channel", "/ˈpeɪdʒɪŋ ˈtʃænəl/", "n.", "寻呼信道", "paging + channel"),
      ("paging area", "/ˈpeɪdʒɪŋ ˈeəriə/", "n.", "寻呼区", "paging + area"),
      ("paging message", "/ˈpeɪdʒɪŋ ˈmesɪdʒ/", "n.", "寻呼消息", "paging + message"),
      ("paging signal", "/ˈpeɪdʒɪŋ ˈsɪɡnəl/", "n.", "寻呼信号", "paging + signal")],
     ["paging channel 寻呼信道", "paging area 寻呼区", "paging message 寻呼消息", "paging signal 寻呼信号"]),

    ("registration", "/ˌredʒɪˈstreɪʃn/", "名词", "注册", "Register(注册)+ation→注册",
     [("user registration", "/ˈjuːzər ˌredʒɪˈstreɪʃn/", "n.", "用户注册", "user + registration"),
      ("network registration", "/ˈnetwɜːrk ˌredʒɪˈstreɪʃn/", "n.", "网络注册", "network + registration"),
      ("registration area", "/ˌredʒɪˈstreɪʃn ˈeəriə/", "n.", "注册区", "registration + area"),
      ("registration request", "/ˌredʒɪˈstreɪʃn rɪˈkwest/", "n.", "注册请求", "registration + request")],
     ["user registration 用户注册", "network registration 网络注册", "registration area 注册区", "registration request 注册请求"]),

    ("attachment", "/əˈtætʃmənt/", "名词", "附着", "Attach(附着)+ment→附着",
     [("network attachment", "/ˈnetwɜːrk əˈtætʃmənt/", "n.", "网络附着", "network + attachment"),
      ("attachment procedure", "/əˈtætʃmənt prəˈsiːdʒər/", "n.", "附着流程", "attachment + procedure"),
      ("attachment request", "/əˈtætʃmənt rɪˈkwest/", "n.", "附着请求", "attachment + request"),
      ("initial attachment", "/ɪˈnɪʃl əˈtætʃmənt/", "n.", "初始附着", "initial + attachment")],
     ["network attachment 网络附着", "attachment procedure 附着流程", "attachment request 附着请求", "initial attachment 初始附着"]),

    ("location", "/loʊˈkeɪʃn/", "名词", "位置", "Locat(定位)+ion→位置",
     [("location update", "/loʊˈkeɪʃn ˈʌpdeɪt/", "n.", "位置更新", "location + update"),
      ("location area", "/loʊˈkeɪʃn ˈeəriə/", "n.", "位置区", "location + area"),
      ("location service", "/loʊˈkeɪʃn ˈsɜːrvɪs/", "n.", "位置服务", "location + service"),
      ("location tracking", "/loʊˈkeɪʃn ˈtrækɪŋ/", "n.", "位置跟踪", "location + tracking")],
     ["location update 位置更新", "location area 位置区", "location service 位置服务", "location tracking 位置跟踪"]),

    ("tracking", "/ˈtrækɪŋ/", "名词", "跟踪", "Track(追踪)+ing→跟踪",
     [("tracking area", "/ˈtrækɪŋ ˈeəriə/", "n.", "跟踪区", "tracking + area"),
      ("tracking area update", "/ˈtrækɪŋ ˈeəriə ˈʌpdeɪt/", "n.", "跟踪区更新", "tracking + area + update"),
      ("device tracking", "/dɪˈvaɪs ˈtrækɪŋ/", "n.", "设备跟踪", "device + tracking"),
      ("signal tracking", "/ˈsɪɡnəl ˈtrækɪŋ/", "n.", "信号跟踪", "signal + tracking")],
     ["tracking area 跟踪区", "tracking area update 跟踪区更新", "device tracking 设备跟踪", "signal tracking 信号跟踪"]),

    ("coverage", "/ˈkʌvərɪdʒ/", "名词", "覆盖", "Cover(覆盖)+age→覆盖",
     [("coverage area", "/ˈkʌvərɪdʒ ˈeəriə/", "n.", "覆盖区域", "coverage + area"),
      ("network coverage", "/ˈnetwɜːrk ˈkʌvərɪdʒ/", "n.", "网络覆盖", "network + coverage"),
      ("coverage hole", "/ˈkʌvərɪdʒ hoʊl/", "n.", "覆盖盲区", "coverage + hole"),
      ("coverage optimization", "/ˈkʌvərɪdʒ ˌɒptɪmaɪˈzeɪʃn/", "n.", "覆盖优化", "coverage + optimization")],
     ["coverage area 覆盖区域", "network coverage 网络覆盖", "coverage hole 覆盖盲区", "coverage optimization 覆盖优化"]),

    # 数据通信
    ("bandwidth", "/ˈbændwɪdθ/", "名词", "带宽", "Band(带)+width(宽度)→带宽",
     [("bandwidth allocation", "/ˈbændwɪdθ ˌæləˈkeɪʃn/", "n.", "带宽分配", "bandwidth + allocation"),
      ("bandwidth efficiency", "/ˈbændwɪdθ ɪˈfɪʃnsi/", "n.", "带宽效率", "bandwidth + efficiency"),
      ("wide bandwidth", "/waɪd ˈbændwɪdθ/", "n.", "宽带宽", "wide + bandwidth"),
      ("bandwidth management", "/ˈbændwɪdθ ˈmænɪdʒmənt/", "n.", "带宽管理", "bandwidth + management")],
     ["bandwidth allocation 带宽分配", "bandwidth efficiency 带宽效率", "wide bandwidth 宽带宽", "bandwidth management 带宽管理"]),

    ("throughput", "/ˈθruːpʊt/", "名词", "吞吐量", "Through(通过)+put(放)→吞吐量",
     [("network throughput", "/ˈnetwɜːrk ˈθruːpʊt/", "n.", "网络吞吐量", "network + throughput"),
      ("maximum throughput", "/ˈmæksɪməm ˈθruːpʊt/", "n.", "最大吞吐量", "maximum + throughput"),
      ("throughput optimization", "/ˈθruːpʊt ˌɒptɪmaɪˈzeɪʃn/", "n.", "吞吐量优化", "throughput + optimization"),
      ("system throughput", "/ˈsɪstəm ˈθruːpʊt/", "n.", "系统吞吐量", "system + throughput")],
     ["network throughput 网络吞吐量", "maximum throughput 最大吞吐量", "throughput optimization 吞吐量优化", "system throughput 系统吞吐量"]),

    ("jitter", "/ˈdʒɪtər/", "名词", "抖动", "Jitter→\"吉特\"→抖动",
     [("jitter buffer", "/ˈdʒɪtər ˈbʌfər/", "n.", "抖动缓冲", "jitter + buffer"),
      ("network jitter", "/ˈnetwɜːrk ˈdʒɪtər/", "n.", "网络抖动", "network + jitter"),
      ("jitter measurement", "/ˈdʒɪtər ˈmeʒərmənt/", "n.", "抖动测量", "jitter + measurement"),
      ("jitter compensation", "/ˈdʒɪtər ˌkɒmpenˈseɪʃn/", "n.", "抖动补偿", "jitter + compensation")],
     ["jitter buffer 抖动缓冲", "network jitter 网络抖动", "jitter measurement 抖动测量", "jitter compensation 抖动补偿"]),

    ("buffer", "/ˈbʌfər/", "名词/动词", "缓冲", "Buffer→\"巴弗\"→缓冲区",
     [("buffer size", "/ˈbʌfər saɪz/", "n.", "缓冲区大小", "buffer + size"),
      ("circular buffer", "/ˈsɜːrkjələr ˈbʌfər/", "n.", "循环缓冲区", "circular + buffer"),
      ("buffer management", "/ˈbʌfər ˈmænɪdʒmənt/", "n.", "缓冲区管理", "buffer + management"),
      ("buffer overflow", "/ˈbʌfər ˈoʊvərfloʊ/", "n.", "缓冲区溢出", "buffer + overflow")],
     ["buffer size 缓冲区大小", "circular buffer 循环缓冲区", "buffer management 缓冲区管理", "buffer overflow 缓冲区溢出"]),

    ("queue", "/kjuː/", "名词/动词", "队列", "Queue→\"Q\"→排队队列",
     [("queue management", "/kjuː ˈmænɪdʒmənt/", "n.", "队列管理", "queue + management"),
      ("message queue", "/ˈmesɪdʒ kjuː/", "n.", "消息队列", "message + queue"),
      ("priority queue", "/praɪˈɒrəti kjuː/", "n.", "优先队列", "priority + queue"),
      ("queue length", "/kjuː leŋθ/", "n.", "队列长度", "queue + length")],
     ["queue management 队列管理", "message queue 消息队列", "priority queue 优先队列", "queue length 队列长度"]),

    ("flow", "/floʊ/", "名词/动词", "流", "Flow→\"弗洛\"→流量流",
     [("traffic flow", "/ˈtræfɪk floʊ/", "n.", "业务流", "traffic + flow"),
      ("flow control", "/floʊ kənˈtroʊl/", "n.", "流量控制", "flow + control"),
      ("data flow", "/ˈdeɪtə floʊ/", "n.", "数据流", "data + flow"),
      ("flow table", "/floʊ ˈteɪbl/", "n.", "流表", "flow + table")],
     ["traffic flow 业务流", "flow control 流量控制", "data flow 数据流", "flow table 流表"]),

    ("congestion", "/kənˈdʒestʃən/", "名词", "拥塞", "Congest(拥挤)+ion→拥塞",
     [("congestion control", "/kənˈdʒestʃən kənˈtroʊl/", "n.", "拥塞控制", "congestion + control"),
      ("network congestion", "/ˈnetwɜːrk kənˈdʒestʃən/", "n.", "网络拥塞", "network + congestion"),
      ("congestion avoidance", "/kənˈdʒestʃən əˈvɔɪdəns/", "n.", "拥塞避免", "congestion + avoidance"),
      ("congestion window", "/kənˈdʒestʃən ˈwɪndoʊ/", "n.", "拥塞窗口", "congestion + window")],
     ["congestion control 拥塞控制", "network congestion 网络拥塞", "congestion avoidance 拥塞避免", "congestion window 拥塞窗口"]),

    ("traffic", "/ˈtræfɪk/", "名词", "流量", "Traffic→\"崔菲克\"→交通流量",
     [("traffic shaping", "/ˈtræfɪk ˈʃeɪpɪŋ/", "n.", "流量整形", "traffic + shaping"),
      ("traffic engineering", "/ˈtræfɪk ˌendʒɪˈnɪərɪŋ/", "n.", "流量工程", "traffic + engineering"),
      ("traffic analysis", "/ˈtræfɪk əˈnæləsɪs/", "n.", "流量分析", "traffic + analysis"),
      ("traffic management", "/ˈtræfɪk ˈmænɪdʒmənt/", "n.", "流量管理", "traffic + management")],
     ["traffic shaping 流量整形", "traffic engineering 流量工程", "traffic analysis 流量分析", "traffic management 流量管理"]),

    ("quality", "/ˈkwɒləti/", "名词", "质量", "Quality→\"夸利蒂\"→品质质量",
     [("QoS", "/kjuː oʊ es/", "n.", "服务质量", "Quality of Service"),
      ("quality assurance", "/ˈkwɒləti əˈʃʊərəns/", "n.", "质量保证", "quality + assurance"),
      ("service quality", "/ˈsɜːrvɪs ˈkwɒləti/", "n.", "服务质量", "service + quality"),
      ("quality monitoring", "/ˈkwɒləti ˈmɒnɪtərɪŋ/", "n.", "质量监控", "quality + monitoring")],
     ["QoS 服务质量", "quality assurance 质量保证", "service quality 服务质量", "quality monitoring 质量监控"]),

    # 服务质量
    ("service", "/ˈsɜːrvɪs/", "名词", "服务", "Serv(服务)+ice→服务",
     [("service provider", "/ˈsɜːrvɪs prəˈvaɪdər/", "n.", "服务提供商", "service + provider"),
      ("service level", "/ˈsɜːrvɪs ˈlevl/", "n.", "服务级别", "service + level"),
      ("service architecture", "/ˈsɜːrvɪs ˈɑːrkɪtektʃər/", "n.", "服务架构", "service + architecture"),
      ("service management", "/ˈsɜːrvɪs ˈmænɪdʒmənt/", "n.", "服务管理", "service + management")],
     ["service provider 服务提供商", "service level 服务级别", "service architecture 服务架构", "service management 服务管理"]),

    ("guarantee", "/ˌɡærənˈtiː/", "名词/动词", "保证", "Guarant(担保)+ee→保证",
     [("service guarantee", "/ˈsɜːrvɪs ˌɡærənˈtiː/", "n.", "服务保证", "service + guarantee"),
      ("performance guarantee", "/pərˈfɔːrməns ˌɡærənˈtiː/", "n.", "性能保证", "performance + guarantee"),
      ("quality guarantee", "/ˈkwɒləti ˌɡærənˈtiː/", "n.", "质量保证", "quality + guarantee"),
      ("SLA guarantee", "/es el eɪ ˌɡærənˈtiː/", "n.", "SLA保证", "SLA + guarantee")],
     ["service guarantee 服务保证", "performance guarantee 性能保证", "quality guarantee 质量保证", "SLA guarantee SLA保证"]),

    ("priority", "/praɪˈɒrəti/", "名词", "优先级", "Prior(先前的)+ity→优先级",
     [("priority queue", "/praɪˈɒrəti kjuː/", "n.", "优先队列", "priority + queue"),
      ("priority scheduling", "/praɪˈɒrəti ˈskedʒuːlɪŋ/", "n.", "优先级调度", "priority + scheduling"),
      ("high priority", "/haɪ praɪˈɒrəti/", "n.", "高优先级", "high + priority"),
      ("priority level", "/praɪˈɒrəti ˈlevl/", "n.", "优先级级别", "priority + level")],
     ["priority queue 优先队列", "priority scheduling 优先级调度", "high priority 高优先级", "priority level 优先级级别"]),

    ("scheduling", "/ˈskedʒuːlɪŋ/", "名词", "调度", "Schedule(日程)+ing→调度",
     [("resource scheduling", "/ˈriːsɔːrs ˈskedʒuːlɪŋ/", "n.", "资源调度", "resource + scheduling"),
      ("packet scheduling", "/ˈpækɪt ˈskedʒuːlɪŋ/", "n.", "包调度", "packet + scheduling"),
      ("dynamic scheduling", "/daɪˈnæmɪk ˈskedʒuːlɪŋ/", "n.", "动态调度", "dynamic + scheduling"),
      ("scheduling algorithm", "/ˈskedʒuːlɪŋ ˈælɡərɪðəm/", "n.", "调度算法", "scheduling + algorithm")],
     ["resource scheduling 资源调度", "packet scheduling 包调度", "dynamic scheduling 动态调度", "scheduling algorithm 调度算法"]),

    ("policy", "/ˈpɒləsi/", "名词", "策略", "Policy→\"保利西\"→政策策略",
     [("routing policy", "/ˈruːtɪŋ ˈpɒləsi/", "n.", "路由策略", "routing + policy"),
      ("security policy", "/sɪˈkjʊərəti ˈpɒləsi/", "n.", "安全策略", "security + policy"),
      ("QoS policy", "/kjuː oʊ es ˈpɒləsi/", "n.", "QoS策略", "QoS + policy"),
      ("policy control", "/ˈpɒləsi kənˈtroʊl/", "n.", "策略控制", "policy + control")],
     ["routing policy 路由策略", "security policy 安全策略", "QoS policy QoS策略", "policy control 策略控制"]),

    ("metering", "/ˈmiːtərɪŋ/", "名词", "计量", "Meter(计量)+ing→计量",
     [("traffic metering", "/ˈtræfɪk ˈmiːtərɪŋ/", "n.", "流量计量", "traffic + metering"),
      ("metering function", "/ˈmiːtərɪŋ ˈfʌŋkʃn/", "n.", "计量功能", "metering + function"),
      ("data metering", "/ˈdeɪtə ˈmiːtərɪŋ/", "n.", "数据计量", "data + metering"),
      ("usage metering", "/ˈjuːsɪdʒ ˈmiːtərɪŋ/", "n.", "使用量计量", "usage + metering")],
     ["traffic metering 流量计量", "metering function 计量功能", "data metering 数据计量", "usage metering 使用量计量"]),

    ("shaping", "/ˈʃeɪpɪŋ/", "名词", "整形", "Shape(形状)+ing→整形",
     [("traffic shaping", "/ˈtræfɪk ˈʃeɪpɪŋ/", "n.", "流量整形", "traffic + shaping"),
      ("rate shaping", "/reɪt ˈʃeɪpɪŋ/", "n.", "速率整形", "rate + shaping"),
      ("bandwidth shaping", "/ˈbændwɪdθ ˈʃeɪpɪŋ/", "n.", "带宽整形", "bandwidth + shaping"),
      ("packet shaping", "/ˈpækɪt ˈʃeɪpɪŋ/", "n.", "包整形", "packet + shaping")],
     ["traffic shaping 流量整形", "rate shaping 速率整形", "bandwidth shaping 带宽整形", "packet shaping 包整形"]),

    ("marking", "/ˈmɑːrkɪŋ/", "名词", "标记", "Mark(标记)+ing→标记",
     [("packet marking", "/ˈpækɪt ˈmɑːrkɪŋ/", "n.", "包标记", "packet + marking"),
      ("QoS marking", "/kjuː oʊ es ˈmɑːrkɪŋ/", "n.", "QoS标记", "QoS + marking"),
      ("DSCP marking", "/diː es siː piː ˈmɑːrkɪŋ/", "n.", "DSCP标记", "DSCP + marking"),
      ("priority marking", "/praɪˈɒrəti ˈmɑːrkɪŋ/", "n.", "优先级标记", "priority + marking")],
     ["packet marking 包标记", "QoS marking QoS标记", "DSCP marking DSCP标记", "priority marking 优先级标记"]),

    ("classification", "/ˌklæsɪfɪˈkeɪʃn/", "名词", "分类", "Class(类)+ification→分类",
     [("traffic classification", "/ˈtræfɪk ˌklæsɪfɪˈkeɪʃn/", "n.", "流量分类", "traffic + classification"),
      ("packet classification", "/ˈpækɪt ˌklæsɪfɪˈkeɪʃn/", "n.", "包分类", "packet + classification"),
      ("service classification", "/ˈsɜːrvɪs ˌklæsɪfɪˈkeɪʃn/", "n.", "服务分类", "service + classification"),
      ("classification rule", "/ˌklæsɪfɪˈkeɪʃn ruːl/", "n.", "分类规则", "classification + rule")],
     ["traffic classification 流量分类", "packet classification 包分类", "service classification 服务分类", "classification rule 分类规则"]),
]

print(f"准备了 {len(new_roots_basic)} 个词根基础数据")
print("正在生成完整JSON数据...")

# 生成完整的JSON数据
def generate_word_entry(word, phonetic, pos, meaning, tip, root, root_phonetic, root_meaning, phrases):
    return {
        "word": word,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "meaning": meaning,
        "memoryTip": tip,
        "root": root,
        "rootPhonetic": root_phonetic,
        "rootMeaning": root_meaning,
        "rootPhrases": phrases,
        "wordPhrases": phrases
    }

def generate_root_entry(index, root_data, start_id):
    root, phonetic, pos, meaning, mnemonic, words, phrases = root_data
    word_entries = []
    for w in words:
        word_entries.append(generate_word_entry(
            w[0], w[1], w[2], w[3], w[4], root, phonetic, meaning, phrases
        ))

    return {
        "id": start_id + index,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "meaning": meaning,
        "frequency": 101 + index,
        "category": "通信",
        "words": word_entries,
        "phrases": phrases,
        "mnemonic": mnemonic
    }

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/communication.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

last_id = data[-1]['id']
print(f"现有词根数量: {len(data)}")
print(f"最后一个id: {last_id}")

# 生成新数据
new_entries = []
for i, root_data in enumerate(new_roots_basic):
    entry = generate_root_entry(i + 1, root_data, last_id)
    new_entries.append(entry)

# 合并数据
data.extend(new_entries)

# 保存
with open('f:/claudeanli/beidanci3/src/data/communication.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"成功添加 {len(new_entries)} 个新词根")
print(f"当前总词根数量: {len(data)}")
PYEOF