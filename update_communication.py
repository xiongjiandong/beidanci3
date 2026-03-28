import json
import os

# Read existing file
with open(r'f:\claudeanli\beidanci3\src\data\communication.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Get existing roots to avoid duplicates
existing_roots = set(entry['root'].lower() for entry in data)
print(f"Current entries: {len(data)}")
print(f"Last entry id: {data[-1]['id']}, frequency: {data[-1]['frequency']}")

# Define 99 new communication roots with their data
new_roots = [
    {"root": "spectrum", "phonetic": "/ˈspektrəm/", "partOfSpeech": "名词", "meaning": "频谱", "words": ["spectrum", "spectral", "spectrum allocation", "frequency spectrum"], "phrases": ["spectrum allocation 频谱分配", "spectrum efficiency 频谱效率", "wideband spectrum 宽带频谱"]},
    {"root": "interference", "phonetic": "/ˌɪntəˈfɪərəns/", "partOfSpeech": "名词", "meaning": "干扰", "words": ["interference", "interfere", "co-channel interference", "intersymbol interference"], "phrases": ["co-channel interference 同频干扰", "intersymbol interference 码间干扰", "interference cancellation 干扰消除"]},
    {"root": "multipath", "phonetic": "/ˈmʌltɪpæθ/", "partOfSpeech": "名词/形容词", "meaning": "多径", "words": ["multipath", "multipath fading", "multipath propagation", "multipath channel"], "phrases": ["multipath fading 多径衰落", "multipath propagation 多径传播", "multipath channel 多径信道"]},
    {"root": "diversity", "phonetic": "/daɪˈvɜːrsəti/", "partOfSpeech": "名词", "meaning": "分集", "words": ["diversity", "diversity combining", "spatial diversity", "frequency diversity"], "phrases": ["diversity combining 分集合并", "spatial diversity 空间分集", "frequency diversity 频率分集"]},
    {"root": "handover", "phonetic": "/ˈhændoʊvər/", "partOfSpeech": "名词/动词", "meaning": "切换", "words": ["handover", "handoff", "soft handover", "hard handover"], "phrases": ["soft handover 软切换", "hard handover 硬切换", "handover algorithm 切换算法"]},
    {"root": "paging", "phonetic": "/ˈpeɪdʒɪŋ/", "partOfSpeech": "名词", "meaning": "寻呼", "words": ["paging", "page", "paging channel", "paging signal"], "phrases": ["paging channel 寻呼信道", "paging signal 寻呼信号", "paging area 寻呼区域"]},
    {"root": "roaming", "phonetic": "/ˈroʊmɪŋ/", "partOfSpeech": "名词", "meaning": "漫游", "words": ["roaming", "roam", "roaming service", "international roaming"], "phrases": ["roaming service 漫游服务", "international roaming 国际漫游", "roaming agreement 漫游协议"]},
    {"root": "latency", "phonetic": "/ˈleɪtənsi/", "partOfSpeech": "名词", "meaning": "延迟", "words": ["latency", "latency time", "low latency", "network latency"], "phrases": ["low latency 低延迟", "network latency 网络延迟", "latency optimization 延迟优化"]},
    {"root": "jitter", "phonetic": "/ˈdʒɪtər/", "partOfSpeech": "名词", "meaning": "抖动", "words": ["jitter", "jitter buffer", "clock jitter", "network jitter"], "phrases": ["jitter buffer 抖动缓冲", "clock jitter 时钟抖动", "network jitter 网络抖动"]},
    {"root": "echo", "phonetic": "/ˈekoʊ/", "partOfSpeech": "名词/动词", "meaning": "回波", "words": ["echo", "echo cancellation", "echo suppressor", "acoustic echo"], "phrases": ["echo cancellation 回波消除", "echo suppressor 回波抑制器", "acoustic echo 声学回波"]},
    {"root": "gate", "phonetic": "/ɡeɪt/", "partOfSpeech": "名词/动词", "meaning": "门；门控", "words": ["gate", "gateway", "gate control", "logic gate"], "phrases": ["gateway 网关", "gate control 门控", "logic gate 逻辑门"]},
    {"root": "bridge", "phonetic": "/brɪdʒ/", "partOfSpeech": "名词/动词", "meaning": "网桥", "words": ["bridge", "network bridge", "bridge mode", "wireless bridge"], "phrases": ["network bridge 网桥", "bridge mode 桥接模式", "wireless bridge 无线网桥"]},
    {"root": "hub", "phonetic": "/hʌb/", "partOfSpeech": "名词", "meaning": "集线器", "words": ["hub", "network hub", "USB hub", "hub port"], "phrases": ["network hub 集线器", "USB hub USB集线器", "hub port 集线器端口"]},
    {"root": "repeater", "phonetic": "/rɪˈpiːtər/", "partOfSpeech": "名词", "meaning": "中继器", "words": ["repeater", "repeat", "signal repeater", "radio repeater"], "phrases": ["signal repeater 信号中继器", "radio repeater 无线电中继器", "repeater station 中继站"]},
    {"root": "multiplex", "phonetic": "/ˈmʌltɪpleks/", "partOfSpeech": "动词/名词", "meaning": "复用", "words": ["multiplex", "multiplexer", "multiplexing", "demultiplex"], "phrases": ["time division multiplexing 时分复用", "frequency division multiplexing 频分复用", "wavelength division multiplexing 波分复用"]},
    {"root": "duplex", "phonetic": "/ˈdjuːpleks/", "partOfSpeech": "名词/形容词", "meaning": "双工", "words": ["duplex", "full duplex", "half duplex", "duplex communication"], "phrases": ["full duplex 全双工", "half duplex 半双工", "duplex communication 双工通信"]},
    {"root": "simplex", "phonetic": "/ˈsɪmpleks/", "partOfSpeech": "名词/形容词", "meaning": "单工", "words": ["simplex", "simplex communication", "simplex mode", "simplex channel"], "phrases": ["simplex communication 单工通信", "simplex mode 单工模式", "simplex channel 单工信道"]},
    {"root": "queue", "phonetic": "/kjuː/", "partOfSpeech": "名词/动词", "meaning": "队列", "words": ["queue", "queuing", "queue management", "message queue"], "phrases": ["queue management 队列管理", "message queue 消息队列", "queuing delay 排队延迟"]},
    {"root": "cache", "phonetic": "/kæʃ/", "partOfSpeech": "名词/动词", "meaning": "缓存", "words": ["cache", "caching", "cache memory", "cache hit"], "phrases": ["cache memory 缓存存储器", "cache hit 缓存命中", "web cache 网页缓存"]},
    {"root": "tunnel", "phonetic": "/ˈtʌnl/", "partOfSpeech": "名词/动词", "meaning": "隧道", "words": ["tunnel", "tunneling", "tunnel protocol", "VPN tunnel"], "phrases": ["tunneling protocol 隧道协议", "VPN tunnel VPN隧道", "secure tunnel 安全隧道"]},
    {"root": "peer", "phonetic": "/pɪər/", "partOfSpeech": "名词/动词", "meaning": "对等", "words": ["peer", "peer-to-peer", "peering", "peer node"], "phrases": ["peer-to-peer 对等网络", "peering 对等互联", "peer node 对等节点"]},
    {"root": "gateway", "phonetic": "/ˈɡeɪtweɪ/", "partOfSpeech": "名词", "meaning": "网关", "words": ["gateway", "default gateway", "application gateway", "media gateway"], "phrases": ["default gateway 默认网关", "application gateway 应用网关", "media gateway 媒体网关"]},
    {"root": "proxy", "phonetic": "/ˈprɒksi/", "partOfSpeech": "名词", "meaning": "代理", "words": ["proxy", "proxy server", "proxy address", "reverse proxy"], "phrases": ["proxy server 代理服务器", "reverse proxy 反向代理", "proxy cache 代理缓存"]},
    {"root": "socket", "phonetic": "/ˈsɒkɪt/", "partOfSpeech": "名词", "meaning": "套接字", "words": ["socket", "network socket", "socket programming", "TCP socket"], "phrases": ["network socket 网络套接字", "socket programming 套接字编程", "TCP socket TCP套接字"]},
    {"root": "port", "phonetic": "/pɔːrt/", "partOfSpeech": "名词", "meaning": "端口", "words": ["port", "port number", "serial port", "network port"], "phrases": ["port number 端口号", "serial port 串口", "network port 网络端口"]},
    {"root": "address", "phonetic": "/əˈdres/", "partOfSpeech": "名词/动词", "meaning": "地址", "words": ["address", "IP address", "MAC address", "address resolution"], "phrases": ["IP address IP地址", "MAC address MAC地址", "address resolution 地址解析"]},
    {"root": "route", "phonetic": "/ruːt/", "partOfSpeech": "名词/动词", "meaning": "路由", "words": ["route", "routing", "static route", "dynamic route"], "phrases": ["static route 静态路由", "dynamic route 动态路由", "route table 路由表"]},
    {"root": "forward", "phonetic": "/ˈfɔːrwərd/", "partOfSpeech": "动词/副词", "meaning": "转发", "words": ["forward", "forwarding", "port forwarding", "forward error correction"], "phrases": ["port forwarding 端口转发", "forward error correction 前向纠错", "packet forwarding 包转发"]},
    {"root": "broadcast", "phonetic": "/ˈbrɔːdkæst/", "partOfSpeech": "名词/动词", "meaning": "广播", "words": ["broadcast", "broadcast address", "broadcast domain", "broadcast storm"], "phrases": ["broadcast address 广播地址", "broadcast domain 广播域", "broadcast storm 广播风暴"]},
    {"root": "multicast", "phonetic": "/ˈmʌltikæst/", "partOfSpeech": "名词/动词", "meaning": "组播", "words": ["multicast", "multicast address", "multicast group", "multicast routing"], "phrases": ["multicast address 组播地址", "multicast group 组播组", "multicast routing 组播路由"]},
    {"root": "unicast", "phonetic": "/ˈjuːnikæst/", "partOfSpeech": "名词/动词", "meaning": "单播", "words": ["unicast", "unicast address", "unicast transmission", "unicast routing"], "phrases": ["unicast address 单播地址", "unicast transmission 单播传输", "unicast routing 单播路由"]},
    {"root": "anycast", "phonetic": "/ˈænɪkæst/", "partOfSpeech": "名词/动词", "meaning": "任播", "words": ["anycast", "anycast address", "anycast routing", "anycast service"], "phrases": ["anycast address 任播地址", "anycast routing 任播路由", "anycast service 任播服务"]},
    {"root": "payload", "phonetic": "/ˈpeɪloʊd/", "partOfSpeech": "名词", "meaning": "有效载荷", "words": ["payload", "payload size", "payload data", "maximum payload"], "phrases": ["payload size 有效载荷大小", "payload data 有效载荷数据", "maximum payload 最大有效载荷"]},
    {"root": "header", "phonetic": "/ˈhedər/", "partOfSpeech": "名词", "meaning": "头部", "words": ["header", "packet header", "frame header", "header field"], "phrases": ["packet header 包头", "frame header 帧头", "header field 头部字段"]},
    {"root": "trailer", "phonetic": "/ˈtreɪlər/", "partOfSpeech": "名词", "meaning": "尾部", "words": ["trailer", "frame trailer", "data trailer", "packet trailer"], "phrases": ["frame trailer 帧尾", "data trailer 数据尾部", "packet trailer 包尾"]},
    {"root": "checksum", "phonetic": "/ˈtʃeksum/", "partOfSpeech": "名词", "meaning": "校验和", "words": ["checksum", "checksum error", "checksum calculation", "verify checksum"], "phrases": ["checksum error 校验和错误", "checksum calculation 校验和计算", "verify checksum 验证校验和"]},
    {"root": "parity", "phonetic": "/ˈpærəti/", "partOfSpeech": "名词", "meaning": "奇偶校验", "words": ["parity", "parity bit", "parity check", "even parity"], "phrases": ["parity bit 奇偶校验位", "parity check 奇偶校验", "even parity 偶校验"]},
    {"root": "redundancy", "phonetic": "/rɪˈdʌndənsi/", "partOfSpeech": "名词", "meaning": "冗余", "words": ["redundancy", "redundant", "redundancy check", "cyclic redundancy check"], "phrases": ["redundancy check 冗余校验", "cyclic redundancy check 循环冗余校验", "redundant system 冗余系统"]},
    {"root": "handshake", "phonetic": "/ˈhændʃeɪk/", "partOfSpeech": "名词/动词", "meaning": "握手", "words": ["handshake", "three-way handshake", "TCP handshake", "handshake protocol"], "phrases": ["three-way handshake 三次握手", "TCP handshake TCP握手", "handshake protocol 握手协议"]},
    {"root": "acknowledge", "phonetic": "/əkˈnɒlɪdʒ/", "partOfSpeech": "动词", "meaning": "确认", "words": ["acknowledge", "acknowledgment", "ACK", "negative acknowledgment"], "phrases": ["acknowledgment 确认", "negative acknowledgment 否定确认", "ACK packet 确认包"]},
    {"root": "timeout", "phonetic": "/ˈtaɪmaʊt/", "partOfSpeech": "名词", "meaning": "超时", "words": ["timeout", "timeout period", "connection timeout", "request timeout"], "phrases": ["timeout period 超时时间", "connection timeout 连接超时", "request timeout 请求超时"]},
    {"root": "retransmit", "phonetic": "/ˌriːtrænzˈmɪt/", "partOfSpeech": "动词", "meaning": "重传", "words": ["retransmit", "retransmission", "retransmit timeout", "automatic retransmission"], "phrases": ["retransmission 重传", "retransmit timeout 重传超时", "automatic retransmission 自动重传"]},
    {"root": "flow", "phonetic": "/floʊ/", "partOfSpeech": "名词/动词", "meaning": "流", "words": ["flow", "flow control", "data flow", "traffic flow"], "phrases": ["flow control 流量控制", "data flow 数据流", "traffic flow 业务流"]},
    {"root": "congestion", "phonetic": "/kənˈdʒestʃən/", "partOfSpeech": "名词", "meaning": "拥塞", "words": ["congestion", "congestion control", "congestion avoidance", "network congestion"], "phrases": ["congestion control 拥塞控制", "congestion avoidance 拥塞避免", "network congestion 网络拥塞"]},
    {"root": "traffic", "phonetic": "/ˈtræfɪk/", "partOfSpeech": "名词", "meaning": "流量", "words": ["traffic", "traffic shaping", "traffic analysis", "network traffic"], "phrases": ["traffic shaping 流量整形", "traffic analysis 流量分析", "network traffic 网络流量"]},
    {"root": "bandwidth", "phonetic": "/ˈbændwɪdθ/", "partOfSpeech": "名词", "meaning": "带宽", "words": ["bandwidth", "bandwidth allocation", "bandwidth limit", "available bandwidth"], "phrases": ["bandwidth allocation 带宽分配", "bandwidth limit 带宽限制", "available bandwidth 可用带宽"]},
    {"root": "throughput", "phonetic": "/ˈθruːpʊt/", "partOfSpeech": "名词", "meaning": "吞吐量", "words": ["throughput", "throughput rate", "maximum throughput", "throughput optimization"], "phrases": ["throughput rate 吞吐率", "maximum throughput 最大吞吐量", "throughput optimization 吞吐量优化"]},
    {"root": "delay", "phonetic": "/dɪˈleɪ/", "partOfSpeech": "名词/动词", "meaning": "延迟", "words": ["delay", "propagation delay", "processing delay", "transmission delay"], "phrases": ["propagation delay 传播延迟", "processing delay 处理延迟", "transmission delay 传输延迟"]},
    {"root": "loss", "phonetic": "/lɒs/", "partOfSpeech": "名词", "meaning": "丢失", "words": ["loss", "packet loss", "data loss", "loss rate"], "phrases": ["packet loss 丢包", "data loss 数据丢失", "loss rate 丢失率"]},
    {"root": "quality", "phonetic": "/ˈkwɒləti/", "partOfSpeech": "名词", "meaning": "质量", "words": ["quality", "quality of service", "signal quality", "video quality"], "phrases": ["quality of service 服务质量", "signal quality 信号质量", "video quality 视频质量"]},
    {"root": "service", "phonetic": "/ˈsɜːrvɪs/", "partOfSpeech": "名词", "meaning": "服务", "words": ["service", "service provider", "quality of service", "service level agreement"], "phrases": ["service provider 服务提供商", "quality of service 服务质量", "service level agreement 服务水平协议"]},
    {"root": "session", "phonetic": "/ˈseʃn/", "partOfSpeech": "名词", "meaning": "会话", "words": ["session", "session layer", "session management", "active session"], "phrases": ["session layer 会话层", "session management 会话管理", "active session 活动会话"]},
    {"root": "transaction", "phonetic": "/trænˈzækʃn/", "partOfSpeech": "名词", "meaning": "事务", "words": ["transaction", "transaction processing", "transaction ID", "database transaction"], "phrases": ["transaction processing 事务处理", "transaction ID 事务ID", "database transaction 数据库事务"]},
    {"root": "request", "phonetic": "/rɪˈkwest/", "partOfSpeech": "名词/动词", "meaning": "请求", "words": ["request", "request response", "HTTP request", "request timeout"], "phrases": ["request response 请求响应", "HTTP request HTTP请求", "request timeout 请求超时"]},
    {"root": "response", "phonetic": "/rɪˈspɒns/", "partOfSpeech": "名词", "meaning": "响应", "words": ["response", "response time", "HTTP response", "response code"], "phrases": ["response time 响应时间", "HTTP response HTTP响应", "response code 响应码"]},
    {"root": "client", "phonetic": "/ˈklaɪənt/", "partOfSpeech": "名词", "meaning": "客户端", "words": ["client", "client server", "client application", "thin client"], "phrases": ["client server 客户端服务器", "client application 客户端应用", "thin client 瘦客户端"]},
    {"root": "server", "phonetic": "/ˈsɜːrvər/", "partOfSpeech": "名词", "meaning": "服务器", "words": ["server", "server farm", "proxy server", "database server"], "phrases": ["server farm 服务器群", "proxy server 代理服务器", "database server 数据库服务器"]},
    {"root": "host", "phonetic": "/hoʊst/", "partOfSpeech": "名词/动词", "meaning": "主机", "words": ["host", "host address", "host name", "virtual host"], "phrases": ["host address 主机地址", "host name 主机名", "virtual host 虚拟主机"]},
    {"root": "node", "phonetic": "/noʊd/", "partOfSpeech": "名词", "meaning": "节点", "words": ["node", "network node", "end node", "relay node"], "phrases": ["network node 网络节点", "end node 端节点", "relay node 中继节点"]},
    {"root": "peer", "phonetic": "/pɪər/", "partOfSpeech": "名词/动词", "meaning": "对等节点", "words": ["peer", "peer node", "peer-to-peer", "peering"], "phrases": ["peer node 对等节点", "peer-to-peer 对等网络", "peering point 对等互联点"]},
    {"root": "topology", "phonetic": "/təˈpɒlədʒi/", "partOfSpeech": "名词", "meaning": "拓扑", "words": ["topology", "network topology", "star topology", "mesh topology"], "phrases": ["network topology 网络拓扑", "star topology 星型拓扑", "mesh topology 网状拓扑"]},
    {"root": "architecture", "phonetic": "/ˈɑːrkɪtektʃər/", "partOfSpeech": "名词", "meaning": "架构", "words": ["architecture", "network architecture", "system architecture", "client server architecture"], "phrases": ["network architecture 网络架构", "system architecture 系统架构", "client server architecture 客户端服务器架构"]},
    {"root": "layer", "phonetic": "/ˈleɪər/", "partOfSpeech": "名词", "meaning": "层", "words": ["layer", "OSI layer", "application layer", "physical layer"], "phrases": ["OSI layer OSI层", "application layer 应用层", "physical layer 物理层"]},
    {"root": "stack", "phonetic": "/stæk/", "partOfSpeech": "名词", "meaning": "栈", "words": ["stack", "protocol stack", "TCP IP stack", "network stack"], "phrases": ["protocol stack 协议栈", "TCP IP stack TCP/IP协议栈", "network stack 网络栈"]},
    {"root": "interface", "phonetic": "/ˈɪntərfeɪs/", "partOfSpeech": "名词", "meaning": "接口", "words": ["interface", "network interface", "user interface", "API interface"], "phrases": ["network interface 网络接口", "user interface 用户接口", "API interface API接口"]},
    {"root": "virtual", "phonetic": "/ˈvɜːrtʃuəl/", "partOfSpeech": "形容词", "meaning": "虚拟", "words": ["virtual", "virtual network", "virtual machine", "virtualization"], "phrases": ["virtual network 虚拟网络", "virtual machine 虚拟机", "virtualization technology 虚拟化技术"]},
    {"root": "physical", "phonetic": "/ˈfɪzɪkl/", "partOfSpeech": "形容词", "meaning": "物理", "words": ["physical", "physical layer", "physical address", "physical connection"], "phrases": ["physical layer 物理层", "physical address 物理地址", "physical connection 物理连接"]},
    {"root": "logical", "phonetic": "/ˈlɒdʒɪkl/", "partOfSpeech": "形容词", "meaning": "逻辑", "words": ["logical", "logical address", "logical topology", "logical connection"], "phrases": ["logical address 逻辑地址", "logical topology 逻辑拓扑", "logical connection 逻辑连接"]},
    {"root": "wireless", "phonetic": "/ˈwaɪərləs/", "partOfSpeech": "形容词", "meaning": "无线", "words": ["wireless", "wireless network", "wireless communication", "wireless LAN"], "phrases": ["wireless network 无线网络", "wireless communication 无线通信", "wireless LAN 无线局域网"]},
    {"root": "mobile", "phonetic": "/ˈmoʊbaɪl/", "partOfSpeech": "形容词/名词", "meaning": "移动", "words": ["mobile", "mobile network", "mobile communication", "mobile device"], "phrases": ["mobile network 移动网络", "mobile communication 移动通信", "mobile device 移动设备"]},
    {"root": "cellular", "phonetic": "/ˈseljələr/", "partOfSpeech": "形容词", "meaning": "蜂窝", "words": ["cellular", "cellular network", "cellular system", "cellular phone"], "phrases": ["cellular network 蜂窝网络", "cellular system 蜂窝系统", "cellular phone 蜂窝电话"]},
    {"root": "base", "phonetic": "/beɪs/", "partOfSpeech": "名词/形容词", "meaning": "基站", "words": ["base", "base station", "baseband", "database"], "phrases": ["base station 基站", "baseband signal 基带信号", "database 数据库"]},
    {"root": "sector", "phonetic": "/ˈsektər/", "partOfSpeech": "名词", "meaning": "扇区", "words": ["sector", "sector antenna", "sector coverage", "cell sector"], "phrases": ["sector antenna 扇区天线", "sector coverage 扇区覆盖", "cell sector 小区扇区"]},
    {"root": "coverage", "phonetic": "/ˈkʌvərɪdʒ/", "partOfSpeech": "名词", "meaning": "覆盖", "words": ["coverage", "coverage area", "network coverage", "signal coverage"], "phrases": ["coverage area 覆盖区域", "network coverage 网络覆盖", "signal coverage 信号覆盖"]},
    {"root": "capacity", "phonetic": "/kəˈpæsəti/", "partOfSpeech": "名词", "meaning": "容量", "words": ["capacity", "network capacity", "channel capacity", "system capacity"], "phrases": ["network capacity 网络容量", "channel capacity 信道容量", "system capacity 系统容量"]},
    {"root": "load", "phonetic": "/loʊd/", "partOfSpeech": "名词/动词", "meaning": "负载", "words": ["load", "load balancing", "load factor", "network load"], "phrases": ["load balancing 负载均衡", "load factor 负载因子", "network load 网络负载"]},
    {"root": "balance", "phonetic": "/ˈbæləns/", "partOfSpeech": "名词/动词", "meaning": "均衡", "words": ["balance", "load balancing", "balanced load", "power balance"], "phrases": ["load balancing 负载均衡", "balanced load 均衡负载", "power balance 功率均衡"]},
    {"root": "scale", "phonetic": "/skeɪl/", "partOfSpeech": "名词/动词", "meaning": "扩展", "words": ["scale", "scalability", "scale out", "scale up"], "phrases": ["scalability 可扩展性", "scale out 横向扩展", "scale up 纵向扩展"]},
    {"root": "secure", "phonetic": "/sɪˈkjʊər/", "partOfSpeech": "形容词/动词", "meaning": "安全", "words": ["secure", "security", "secure communication", "secure connection"], "phrases": ["secure communication 安全通信", "secure connection 安全连接", "network security 网络安全"]},
    {"root": "privacy", "phonetic": "/ˈprɪvəsi/", "partOfSpeech": "名词", "meaning": "隐私", "words": ["privacy", "privacy protection", "data privacy", "user privacy"], "phrases": ["privacy protection 隐私保护", "data privacy 数据隐私", "user privacy 用户隐私"]},
    {"root": "integrity", "phonetic": "/ɪnˈteɡrəti/", "partOfSpeech": "名词", "meaning": "完整性", "words": ["integrity", "data integrity", "message integrity", "system integrity"], "phrases": ["data integrity 数据完整性", "message integrity 消息完整性", "system integrity 系统完整性"]},
    {"root": "availability", "phonetic": "/əˌveɪləˈbɪləti/", "partOfSpeech": "名词", "meaning": "可用性", "words": ["availability", "high availability", "network availability", "service availability"], "phrases": ["high availability 高可用性", "network availability 网络可用性", "service availability 服务可用性"]},
    {"root": "reliability", "phonetic": "/rɪˌlaɪəˈbɪləti/", "partOfSpeech": "名词", "meaning": "可靠性", "words": ["reliability", "reliable", "network reliability", "system reliability"], "phrases": ["reliable transmission 可靠传输", "network reliability 网络可靠性", "system reliability 系统可靠性"]},
    {"root": "fault", "phonetic": "/fɔːlt/", "partOfSpeech": "名词", "meaning": "故障", "words": ["fault", "fault tolerance", "fault detection", "fault recovery"], "phrases": ["fault tolerance 容错", "fault detection 故障检测", "fault recovery 故障恢复"]},
    {"root": "recover", "phonetic": "/rɪˈkʌvər/", "partOfSpeech": "动词", "meaning": "恢复", "words": ["recover", "recovery", "disaster recovery", "error recovery"], "phrases": ["disaster recovery 灾难恢复", "error recovery 错误恢复", "system recovery 系统恢复"]},
    {"root": "backup", "phonetic": "/ˈbækʌp/", "partOfSpeech": "名词/动词", "meaning": "备份", "words": ["backup", "backup system", "data backup", "backup power"], "phrases": ["backup system 备份系统", "data backup 数据备份", "backup power 备用电源"]},
    {"root": "monitor", "phonetic": "/ˈmɒnɪtər/", "partOfSpeech": "名词/动词", "meaning": "监控", "words": ["monitor", "monitoring", "network monitor", "performance monitor"], "phrases": ["network monitoring 网络监控", "performance monitoring 性能监控", "real-time monitoring 实时监控"]},
    {"root": "alarm", "phonetic": "/əˈlɑːrm/", "partOfSpeech": "名词/动词", "meaning": "告警", "words": ["alarm", "alarm system", "alarm signal", "fault alarm"], "phrases": ["alarm system 告警系统", "alarm signal 告警信号", "fault alarm 故障告警"]},
    {"root": "log", "phonetic": "/lɒɡ/", "partOfSpeech": "名词/动词", "meaning": "日志", "words": ["log", "log file", "login", "system log"], "phrases": ["log file 日志文件", "system log 系统日志", "error log 错误日志"]},
    {"root": "diagnose", "phonetic": "/ˈdaɪəɡnoʊz/", "partOfSpeech": "动词", "meaning": "诊断", "words": ["diagnose", "diagnosis", "network diagnosis", "fault diagnosis"], "phrases": ["network diagnosis 网络诊断", "fault diagnosis 故障诊断", "diagnostic tool 诊断工具"]},
    {"root": "optimize", "phonetic": "/ˈɒptɪmaɪz/", "partOfSpeech": "动词", "meaning": "优化", "words": ["optimize", "optimization", "performance optimization", "network optimization"], "phrases": ["performance optimization 性能优化", "network optimization 网络优化", "resource optimization 资源优化"]},
    {"root": "configure", "phonetic": "/kənˈfɪɡər/", "partOfSpeech": "动词", "meaning": "配置", "words": ["configure", "configuration", "auto configuration", "manual configuration"], "phrases": ["network configuration 网络配置", "auto configuration 自动配置", "manual configuration 手动配置"]},
    {"root": "deploy", "phonetic": "/dɪˈplɔɪ/", "partOfSpeech": "动词", "meaning": "部署", "words": ["deploy", "deployment", "network deployment", "system deployment"], "phrases": ["network deployment 网络部署", "system deployment 系统部署", "deployment plan 部署计划"]},
    {"root": "upgrade", "phonetic": "/ˈʌpɡreɪd/", "partOfSpeech": "名词/动词", "meaning": "升级", "words": ["upgrade", "system upgrade", "software upgrade", "firmware upgrade"], "phrases": ["system upgrade 系统升级", "software upgrade 软件升级", "firmware upgrade 固件升级"]},
    {"root": "migrate", "phonetic": "/ˈmaɪɡreɪt/", "partOfSpeech": "动词", "meaning": "迁移", "words": ["migrate", "migration", "data migration", "system migration"], "phrases": ["data migration 数据迁移", "system migration 系统迁移", "service migration 服务迁移"]},
    {"root": "maintain", "phonetic": "/meɪnˈteɪn/", "partOfSpeech": "动词", "meaning": "维护", "words": ["maintain", "maintenance", "system maintenance", "preventive maintenance"], "phrases": ["system maintenance 系统维护", "preventive maintenance 预防性维护", "maintenance window 维护窗口"]},
    {"root": "update", "phonetic": "/ʌpˈdeɪt/", "partOfSpeech": "名词/动词", "meaning": "更新", "words": ["update", "software update", "system update", "firmware update"], "phrases": ["software update 软件更新", "system update 系统更新", "firmware update 固件更新"]},
    {"root": "patch", "phonetic": "/pætʃ/", "partOfSpeech": "名词/动词", "meaning": "补丁", "words": ["patch", "patch update", "security patch", "hot patch"], "phrases": ["patch update 补丁更新", "security patch 安全补丁", "hot patch 热补丁"]},
    {"root": "version", "phonetic": "/ˈvɜːrʒn/", "partOfSpeech": "名词", "meaning": "版本", "words": ["version", "version control", "version number", "latest version"], "phrases": ["version control 版本控制", "version number 版本号", "latest version 最新版本"]},
    {"root": "compatible", "phonetic": "/kəmˈpætəbl/", "partOfSpeech": "形容词", "meaning": "兼容", "words": ["compatible", "compatibility", "backward compatible", "forward compatible"], "phrases": ["compatibility 兼容性", "backward compatible 向后兼容", "forward compatible 向前兼容"]},
    {"root": "standard", "phonetic": "/ˈstændərd/", "partOfSpeech": "名词/形容词", "meaning": "标准", "words": ["standard", "standardization", "industry standard", "open standard"], "phrases": ["standardization 标准化", "industry standard 行业标准", "open standard 开放标准"]},
    {"root": "specification", "phonetic": "/ˌspesɪfɪˈkeɪʃn/", "partOfSpeech": "名词", "meaning": "规范", "words": ["specification", "technical specification", "system specification", "interface specification"], "phrases": ["technical specification 技术规范", "system specification 系统规范", "interface specification 接口规范"]},
    {"root": "compliance", "phonetic": "/kəmˈplaɪəns/", "partOfSpeech": "名词", "meaning": "合规", "words": ["compliance", "compliant", "regulatory compliance", "standard compliance"], "phrases": ["regulatory compliance 监管合规", "standard compliance 标准合规", "compliance requirement 合规要求"]},
]

# Filter out any roots that already exist
new_roots_to_add = [r for r in new_roots if r["root"].lower() not in existing_roots]
print(f"New roots to add: {len(new_roots_to_add)}")

# Helper function to create a word entry
def create_word_entry(word, root_info, phrases):
    return {
        "word": word,
        "phonetic": root_info["phonetic"],
        "partOfSpeech": root_info["partOfSpeech"],
        "meaning": root_info["meaning"],
        "memoryTip": f"来自词根 {root_info['root']}",
        "root": root_info["root"],
        "rootPhonetic": root_info["phonetic"],
        "rootMeaning": root_info["meaning"],
        "rootPhrases": phrases,
        "wordPhrases": phrases
    }

# Create new entries
new_entries = []
for i, root_info in enumerate(new_roots_to_add):
    entry = {
        "id": 2001 + len(data) + i,  # Temporary ID, will be reassigned later
        "root": root_info["root"],
        "phonetic": root_info["phonetic"],
        "partOfSpeech": root_info["partOfSpeech"],
        "frequency": 102 + i,  # Start from 102
        "category": "通信",
        "words": [create_word_entry(w, root_info, root_info["phrases"]) for w in root_info["words"][:4]],
        "phrases": root_info["phrases"],
        "mnemonic": f"{root_info['root'].capitalize()}→\"{root_info['root']}\"→{root_info['meaning']}"
    }
    new_entries.append(entry)

# Add new entries to existing data
data.extend(new_entries)

# Sort by frequency
data.sort(key=lambda x: x["frequency"])

# Reassign IDs based on sorted order
for i, entry in enumerate(data):
    entry["id"] = 2001 + i

print(f"Total entries after adding: {len(data)}")
print(f"New ID range: {data[0]['id']} - {data[-1]['id']}")
print(f"Frequency range: {data[0]['frequency']} - {data[-1]['frequency']}")

# Save the updated file
with open(r'f:\claudeanli\beidanci3\src\data\communication.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("File updated successfully!")
