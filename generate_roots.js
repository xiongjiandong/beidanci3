// 生成300个互联网软件词根数据 (id 201-500)
const fs = require('fs');

// 定义300个词根，按使用频率从高到低排序
const roots = [
  // 201-250: 高频核心词根
  { root: "packet", phonetic: "/ˈpækɪt/", meaning: "数据包；分组", pos: "名词" },
  { root: "router", phonetic: "/ˈruːtər/", meaning: "路由器", pos: "名词" },
  { root: "encrypt", phonetic: "/ɪnˈkrɪpt/", meaning: "加密", pos: "动词" },
  { root: "decrypt", phonetic: "/diːˈkrɪpt/", meaning: "解密", pos: "动词" },
  { root: "schema", phonetic: "/ˈskiːmə/", meaning: "模式；架构", pos: "名词" },
  { root: "query", phonetic: "/ˈkwɪəri/", meaning: "查询", pos: "名词/动词" },
  { root: "index", phonetic: "/ˈɪndeks/", meaning: "索引", pos: "名词/动词" },
  { root: "compile", phonetic: "/kəmˈpaɪl/", meaning: "编译", pos: "动词" },
  { root: "debug", phonetic: "/diːˈbʌɡ/", meaning: "调试", pos: "动词" },
  { root: "deploy", phonetic: "/dɪˈplɔɪ/", meaning: "部署", pos: "动词" },
  { root: "render", phonetic: "/ˈrendər/", meaning: "渲染", pos: "动词" },
  { root: "event", phonetic: "/ɪˈvent/", meaning: "事件", pos: "名词" },
  { root: "state", phonetic: "/steɪt/", meaning: "状态", pos: "名词" },
  { root: "props", phonetic: "/prɒps/", meaning: "属性；道具", pos: "名词" },
  { root: "hook", phonetic: "/hʊk/", meaning: "钩子", pos: "名词" },
  { root: "endpoint", phonetic: "/ˈendpɔɪnt/", meaning: "端点", pos: "名词" },
  { root: "middleware", phonetic: "/ˈmɪdlwer/", meaning: "中间件", pos: "名词" },
  { root: "handler", phonetic: "/ˈhændlər/", meaning: "处理器；处理程序", pos: "名词" },
  { root: "container", phonetic: "/kənˈteɪnər/", meaning: "容器", pos: "名词" },
  { root: "image", phonetic: "/ˈɪmɪdʒ/", meaning: "镜像；图像", pos: "名词" },
  { root: "pod", phonetic: "/pɒd/", meaning: "容器组", pos: "名词" },
  { root: "cluster", phonetic: "/ˈklʌstər/", meaning: "集群", pos: "名词" },
  { root: "node", phonetic: "/nəʊd/", meaning: "节点", pos: "名词" },
  { root: "gateway", phonetic: "/ˈɡeɪtweɪ/", meaning: "网关", pos: "名词" },
  { root: "subnet", phonetic: "/ˈsʌbnet/", meaning: "子网", pos: "名词" },
  { root: "bandwidth", phonetic: "/ˈbændwɪdθ/", meaning: "带宽", pos: "名词" },
  { root: "latency", phonetic: "/ˈleɪtnsi/", meaning: "延迟", pos: "名词" },
  { root: "throughput", phonetic: "/ˈθruːpʊt/", meaning: "吞吐量", pos: "名词" },
  { root: "cipher", phonetic: "/ˈsaɪfər/", meaning: "密码；密文", pos: "名词" },
  { root: "firewall", phonetic: "/ˈfaɪərwɔːl/", meaning: "防火墙", pos: "名词" },
  { root: "virus", phonetic: "/ˈvaɪrəs/", meaning: "病毒", pos: "名词" },
  { root: "malware", phonetic: "/ˈmælwer/", meaning: "恶意软件", pos: "名词" },
  { root: "phishing", phonetic: "/ˈfɪʃɪŋ/", meaning: "钓鱼攻击", pos: "名词" },
  { root: "auth", phonetic: "/ɔːθ/", meaning: "认证", pos: "名词" },
  { root: "join", phonetic: "/dʒɔɪn/", meaning: "连接；联接", pos: "动词" },
  { root: "backup", phonetic: "/ˈbækʌp/", meaning: "备份", pos: "名词/动词" },
  { root: "restore", phonetic: "/rɪˈstɔːr/", meaning: "恢复", pos: "动词" },
  { root: "migrate", phonetic: "/ˈmaɪɡreɪt/", meaning: "迁移", pos: "动词" },
  { root: "sync", phonetic: "/sɪŋk/", meaning: "同步", pos: "动词/名词" },
  { root: "build", phonetic: "/bɪld/", meaning: "构建；编译", pos: "动词" },
  { root: "release", phonetic: "/rɪˈliːs/", meaning: "发布；版本", pos: "动词/名词" },
  { root: "version", phonetic: "/ˈvɜːrʒn/", meaning: "版本", pos: "名词" },
  { root: "branch", phonetic: "/brɑːntʃ/", meaning: "分支", pos: "名词" },
  { root: "merge", phonetic: "/mɜːrdʒ/", meaning: "合并", pos: "动词" },
  { root: "commit", phonetic: "/kəˈmɪt/", meaning: "提交", pos: "动词/名词" },
  { root: "repository", phonetic: "/rɪˈpɒzətri/", meaning: "仓库", pos: "名词" },
  { root: "clone", phonetic: "/kləʊn/", meaning: "克隆", pos: "动词/名词" },
  { root: "fork", phonetic: "/fɔːrk/", meaning: "分叉；复刻", pos: "动词/名词" },
  { root: "pull", phonetic: "/pʊl/", meaning: "拉取", pos: "动词" },
  { root: "push", phonetic: "/pʊʃ/", meaning: "推送", pos: "动词" },
  // 251-300: 中高频词根
  { root: "DOM", phonetic: "/diː əʊ ˈem/", meaning: "文档对象模型", pos: "名词" },
  { root: "component", phonetic: "/kəmˈpəʊnənt/", meaning: "组件", pos: "名词" },
  { root: "service", phonetic: "/ˈsɜːrvɪs/", meaning: "服务", pos: "名词" },
  { root: "model", phonetic: "/ˈmɒdl/", meaning: "模型", pos: "名词" },
  { root: "controller", phonetic: "/kənˈtrəʊlər/", meaning: "控制器", pos: "名词" },
  { root: "view", phonetic: "/vjuː/", meaning: "视图", pos: "名词" },
  { root: "template", phonetic: "/ˈtempleɪt/", meaning: "模板", pos: "名词" },
  { root: "binding", phonetic: "/ˈbaɪndɪŋ/", meaning: "绑定", pos: "名词" },
  { root: "directive", phonetic: "/dəˈrektɪv/", meaning: "指令", pos: "名词" },
  { root: "pipeline", phonetic: "/ˈpaɪplaɪn/", meaning: "管道；流水线", pos: "名词" },
  { root: "stage", phonetic: "/steɪdʒ/", meaning: "阶段", pos: "名词" },
  { root: "artifact", phonetic: "/ˈɑːrtɪfækt/", meaning: "构建产物", pos: "名词" },
  { root: "trigger", phonetic: "/ˈtrɪɡər/", meaning: "触发器", pos: "名词/动词" },
  { root: "schedule", phonetic: "/ˈʃedjuːl/", meaning: "调度；计划", pos: "名词/动词" },
  { root: "cron", phonetic: "/krɒn/", meaning: "定时任务", pos: "名词" },
  { root: "job", phonetic: "/dʒɒb/", meaning: "任务；作业", pos: "名词" },
  { root: "worker", phonetic: "/ˈwɜːrkər/", meaning: "工作者；工作进程", pos: "名词" },
  { root: "queue", phonetic: "/kjuː/", meaning: "队列", pos: "名词" },
  { root: "stack", phonetic: "/stæk/", meaning: "栈；堆栈", pos: "名词" },
  { root: "heap", phonetic: "/hiːp/", meaning: "堆", pos: "名词" },
  { root: "cache", phonetic: "/kæʃ/", meaning: "缓存", pos: "名词/动词" },
  { root: "buffer", phonetic: "/ˈbʌfər/", meaning: "缓冲区", pos: "名词" },
  { root: "stream", phonetic: "/striːm/", meaning: "流", pos: "名词" },
  { root: "pipe", phonetic: "/paɪp/", meaning: "管道", pos: "名词" },
  { root: "socket", phonetic: "/ˈsɒkɪt/", meaning: "套接字", pos: "名词" },
  { root: "port", phonetic: "/pɔːrt/", meaning: "端口", pos: "名词" },
  { root: "protocol", phonetic: "/ˈprəʊtəkɒl/", meaning: "协议", pos: "名词" },
  { root: "session", phonetic: "/ˈseʃn/", meaning: "会话", pos: "名词" },
  { root: "cookie", phonetic: "/ˈkʊki/", meaning: "Cookie；小饼干", pos: "名词" },
  { root: "token", phonetic: "/ˈtəʊkən/", meaning: "令牌；凭证", pos: "名词" },
  { root: "header", phonetic: "/ˈhedər/", meaning: "头部；报头", pos: "名词" },
  { root: "payload", phonetic: "/ˈpeɪləʊd/", meaning: "载荷；有效负载", pos: "名词" },
  { root: "frame", phonetic: "/freɪm/", meaning: "帧；框架", pos: "名词" },
  { root: "segment", phonetic: "/ˈseɡmənt/", meaning: "段；片段", pos: "名词" },
  { root: "datagram", phonetic: "/ˈdeɪtəɡræm/", meaning: "数据报", pos: "名词" },
  { root: "broadcast", phonetic: "/ˈbrɔːdkɑːst/", meaning: "广播", pos: "动词/名词" },
  { root: "multicast", phonetic: "/ˈmʌltikɑːst/", meaning: "组播", pos: "动词/名词" },
  { root: "unicast", phonetic: "/ˈjuːnikɑːst/", meaning: "单播", pos: "动词/名词" },
  { root: "anycast", phonetic: "/ˈenikɑːst/", meaning: "任播", pos: "动词/名词" },
  { root: "topology", phonetic: "/təˈpɒlədʒi/", meaning: "拓扑结构", pos: "名词" },
  { root: "mesh", phonetic: "/meʃ/", meaning: "网状结构", pos: "名词" },
  { root: "proxy", phonetic: "/ˈprɒksi/", meaning: "代理", pos: "名词" },
  { root: "tunnel", phonetic: "/ˈtʌnl/", meaning: "隧道", pos: "名词" },
  { root: "VPN", phonetic: "/ˌviː piː ˈen/", meaning: "虚拟专用网络", pos: "名词" },
  { root: "NAT", phonetic: "/en eɪ tiː/", meaning: "网络地址转换", pos: "名词" },
  { root: "DNS", phonetic: "/diː en ˈes/", meaning: "域名系统", pos: "名词" },
  { root: "DHCP", phonetic: "/diː eɪtʃ siː piː/", meaning: "动态主机配置协议", pos: "名词" },
  { root: "ARP", phonetic: "/eɪ ɑːr piː/", meaning: "地址解析协议", pos: "名词" },
  { root: "MAC", phonetic: "/em eɪ siː/", meaning: "媒体访问控制地址", pos: "名词" },
  // 301-350: 中频词根
  { root: "ingress", phonetic: "/ˈɪnɡres/", meaning: "入口；流入", pos: "名词" },
  { root: "egress", phonetic: "/ˈiːɡres/", meaning: "出口；流出", pos: "名词" },
  { root: "loadbalancer", phonetic: "/ˈləʊd bælənsər/", meaning: "负载均衡器", pos: "名词" },
  { root: "resolver", phonetic: "/rɪˈzɒlvər/", meaning: "解析器", pos: "名词" },
  { root: "registry", phonetic: "/ˈredʒɪstri/", meaning: "注册表；注册中心", pos: "名词" },
  { root: "discovery", phonetic: "/dɪˈskʌvəri/", meaning: "发现；服务发现", pos: "名词" },
  { root: "config", phonetic: "/ˈkɒnfɪɡ/", meaning: "配置", pos: "名词" },
  { root: "secret", phonetic: "/ˈsiːkrət/", meaning: "密钥；秘密", pos: "名词" },
  { root: "volume", phonetic: "/ˈvɒljuːm/", meaning: "卷；存储卷", pos: "名词" },
  { root: "namespace", phonetic: "/ˈneɪmspeɪs/", meaning: "命名空间", pos: "名词" },
  { root: "label", phonetic: "/ˈleɪbl/", meaning: "标签", pos: "名词" },
  { root: "annotation", phonetic: "/ˌænəʊˈteɪʃn/", meaning: "注解；注释", pos: "名词" },
  { root: "selector", phonetic: "/sɪˈlektər/", meaning: "选择器", pos: "名词" },
  { root: "affinity", phonetic: "/əˈfɪnəti/", meaning: "亲和性", pos: "名词" },
  { root: "taint", phonetic: "/teɪnt/", meaning: "污点", pos: "名词" },
  { root: "toleration", phonetic: "/ˌtɒləˈreɪʃn/", meaning: "容忍", pos: "名词" },
  { root: "helm", phonetic: "/helm/", meaning: "舵；Helm包管理器", pos: "名词" },
  { root: "chart", phonetic: "/tʃɑːrt/", meaning: "图表；Helm图表", pos: "名词" },
  { root: "swarm", phonetic: "/swɔːrm/", meaning: "群；Swarm集群", pos: "名词" },
  { root: "compose", phonetic: "/kəmˈpəʊz/", meaning: "组合；编排", pos: "动词" },
  { root: "dockerfile", phonetic: "/ˈdɒkəfaɪl/", meaning: "Dockerfile", pos: "名词" },
  { root: "layer", phonetic: "/ˈleɪər/", meaning: "层", pos: "名词" },
  { root: "manifest", phonetic: "/ˈmænɪfest/", meaning: "清单", pos: "名词" },
  { root: "spec", phonetic: "/spek/", meaning: "规格；规范", pos: "名词" },
  { root: "status", phonetic: "/ˈsteɪtəs/", meaning: "状态", pos: "名词" },
  { root: "condition", phonetic: "/kənˈdɪʃn/", meaning: "条件；状况", pos: "名词" },
  { root: "eventual", phonetic: "/ɪˈventʃuəl/", meaning: "最终的", pos: "形容词" },
  { root: "consistency", phonetic: "/kənˈsɪstənsi/", meaning: "一致性", pos: "名词" },
  { root: "availability", phonetic: "/əˌveɪləˈbɪləti/", meaning: "可用性", pos: "名词" },
  { root: "partition", phonetic: "/pɑːrˈtɪʃn/", meaning: "分区", pos: "名词" },
  { root: "replication", phonetic: "/ˌreplɪˈkeɪʃn/", meaning: "复制", pos: "名词" },
  { root: "shard", phonetic: "/ʃɑːrd/", meaning: "分片", pos: "名词" },
  { root: "failover", phonetic: "/ˈfeɪləʊvər/", meaning: "故障转移", pos: "名词" },
  { root: "fallback", phonetic: "/ˈfɔːlbæk/", meaning: "回退", pos: "名词" },
  { root: "retry", phonetic: "/ˌriːˈtraɪ/", meaning: "重试", pos: "动词" },
  { root: "timeout", phonetic: "/ˈtaɪmaʊt/", meaning: "超时", pos: "名词" },
  { root: "circuit", phonetic: "/ˈsɜːrkɪt/", meaning: "电路；断路器", pos: "名词" },
  { root: "breaker", phonetic: "/ˈbreɪkər/", meaning: "断路器", pos: "名词" },
  { root: "throttle", phonetic: "/ˈθrɒtl/", meaning: "限流；节流", pos: "动词/名词" },
  { root: "rate", phonetic: "/reɪt/", meaning: "速率；比率", pos: "名词" },
  { root: "quota", phonetic: "/ˈkwəʊtə/", meaning: "配额", pos: "名词" },
  { root: "limit", phonetic: "/ˈlɪmɪt/", meaning: "限制", pos: "名词/动词" },
  { root: "concurrency", phonetic: "/kənˈkʌrənsi/", meaning: "并发", pos: "名词" },
  { root: "parallel", phonetic: "/ˈpærəlel/", meaning: "并行", pos: "形容词" },
  { root: "mutex", phonetic: "/ˈmjuːteks/", meaning: "互斥锁", pos: "名词" },
  { root: "semaphore", phonetic: "/ˈseməfɔːr/", meaning: "信号量", pos: "名词" },
  { root: "deadlock", phonetic: "/ˈdedlɒk/", meaning: "死锁", pos: "名词" },
  { root: "race", phonetic: "/reɪs/", meaning: "竞争", pos: "名词" },
  { root: "atomic", phonetic: "/əˈtɒmɪk/", meaning: "原子的", pos: "形容词" },
  // 351-400: 中低频词根
  { root: "transaction", phonetic: "/trænˈzækʃn/", meaning: "事务", pos: "名词" },
  { root: "isolation", phonetic: "/ˌaɪsəˈleɪʃn/", meaning: "隔离", pos: "名词" },
  { root: "durability", phonetic: "/ˌdjʊərəˈbɪləti/", meaning: "持久性", pos: "名词" },
  { root: "rollback", phonetic: "/ˈrəʊlbæk/", meaning: "回滚", pos: "名词/动词" },
  { root: "commitment", phonetic: "/kəˈmɪtmənt/", meaning: "提交；承诺", pos: "名词" },
  { root: "compensate", phonetic: "/ˈkɒmpenseɪt/", meaning: "补偿", pos: "动词" },
  { root: "saga", phonetic: "/ˈsɑːɡə/", meaning: "传奇；长事务", pos: "名词" },
  { root: "orchestrate", phonetic: "/ˈɔːrkɪstreɪt/", meaning: "编排；协调", pos: "动词" },
  { root: "choreography", phonetic: "/ˌkɔːriˈɒɡrəfi/", meaning: "编排；舞蹈", pos: "名词" },
  { root: "aggregate", phonetic: "/ˈæɡrɪɡət/", meaning: "聚合；集合", pos: "名词/动词" },
  { root: "projection", phonetic: "/prəˈdʒekʃn/", meaning: "投影；预测", pos: "名词" },
  { root: "snapshot", phonetic: "/ˈsnæpʃɒt/", meaning: "快照", pos: "名词" },
  { root: "delta", phonetic: "/ˈdeltə/", meaning: "增量；差量", pos: "名词" },
  { root: "diff", phonetic: "/dɪf/", meaning: "差异；比较", pos: "名词" },
  { root: "patch", phonetic: "/pætʃ/", meaning: "补丁", pos: "名词" },
  { root: "revision", phonetic": "/rɪˈvɪʒn/", "meaning": "修订；版本", "pos": "名词" },
  { root: "baseline", phonetic: "/ˈbeɪslaɪn/", meaning: "基线", pos: "名词" },
  { root: "milestone", phonetic: "/ˈmaɪlstəʊn/", meaning: "里程碑", pos: "名词" },
  { root: "backlog", phonetic: "/ˈbæklɒɡ/", meaning: "待办列表；积压", pos: "名词" },
  { root: "sprint", phonetic: "/sprɪnt/", meaning: "冲刺；迭代", pos: "名词" },
  { root: "epic", phonetic: "/ˈepɪk/", meaning: "史诗；大型需求", pos: "名词" },
  { root: "story", phonetic: "/ˈstɔːri/", meaning: "故事；用户故事", pos: "名词" },
  { root: "task", phonetic: "/tɑːsk/", meaning: "任务", pos: "名词" },
  { root: "subtask", phonetic: "/ˈsʌbtɑːsk/", meaning: "子任务", pos: "名词" },
  { root: "burndown", phonetic: "/ˈbɜːrndaʊn/", meaning: "燃尽", pos: "名词" },
  { root: "velocity", phonetic: "/vəˈlɒsəti/", meaning: "速度；速率", pos: "名词" },
  { root: "capacity", phonetic: "/kəˈpæsəti/", meaning: "容量；能力", pos: "名词" },
  { root: "estimation", phonetic: "/ˌestɪˈmeɪʃn/", meaning: "估算", pos: "名词" },
  { root: "planning", phonetic: "/ˈplænɪŋ/", meaning: "规划", pos: "名词" },
  { root: "refinement", phonetic: "/rɪˈfaɪnmənt/", meaning: "梳理；完善", pos: "名词" },
  { root: "retrospective", phonetic: "/ˌretrəˈspektɪv/", meaning: "回顾", pos: "名词" },
  { root: "standup", phonetic: "/ˈstændʌp/", meaning: "站会", pos: "名词" },
  { root: "scrum", phonetic: "/skrʌm/", meaning: "敏捷框架", pos: "名词" },
  { root: "kanban", phonetic: "/ˈkɑːnbɑːn/", meaning: "看板", pos: "名词" },
  { root: "lean", phonetic: "/liːn/", meaning: "精益", pos: "形容词" },
  { root: "agile", phonetic: "/ˈædʒaɪl/", meaning: "敏捷", pos: "形容词" },
  { root: "waterfall", phonetic: "/ˈwɔːtərfɔːl/", meaning: "瀑布流", pos: "名词" },
  { root: "iteration", phonetic: "/ˌɪtəˈreɪʃn/", meaning: "迭代", pos: "名词" },
  { root: "increment", phonetic: "/ˈɪnkrəmənt/", meaning: "增量", pos: "名词" },
  { root: "feedback", phonetic: "/ˈfiːdbæk/", meaning: "反馈", pos: "名词" },
  { root: "review", phonetic: "/rɪˈvjuː/", meaning: "评审；审查", pos: "名词/动词" },
  { root: "demo", phonetic: "/ˈdeməʊ/", meaning: "演示", pos: "名词" },
  { root: "prototype", phonetic: "/ˈprəʊtətaɪp/", meaning: "原型", pos: "名词" },
  { root: "mockup", phonetic: "/ˈmɒkʌp/", meaning: "模型；原型", pos: "名词" },
  { root: "wireframe", phonetic: "/ˈwaɪəfreɪm/", meaning: "线框图", pos: "名词" },
  { root: "stakeholder", phonetic: "/ˈsteɪkhəʊldər/", meaning: "利益相关者", pos: "名词" },
  { root: "silo", phonetic: "/ˈsaɪləʊ/", meaning: "筒仓；孤岛", pos: "名词" },
  // 401-450: 低频词根
  { root: "normalize", phonetic: "/ˈnɔːrməlaɪz/", meaning: "规范化；标准化", pos: "动词" },
  { root: "denormalize", phonetic: "/diːˈnɔːrməlaɪz/", meaning: "反规范化", pos: "动词" },
  { root: "marshal", phonetic: "/ˈmɑːrʃl/", meaning: "序列化；编组", pos: "动词" },
  { root: "unmarshal", phonetic: "/ʌnˈmɑːrʃl/", meaning: "反序列化", pos: "动词" },
  { root: "serialize", phonetic: "/ˈsɪəriəlaɪz/", meaning: "序列化", pos: "动词" },
  { root: "deserialize", phonetic: "/diːˈsɪəriəlaɪz/", meaning: "反序列化", pos: "动词" },
  { root: "parse", phonetic: "/pɑːrz/", meaning: "解析", pos: "动词" },
  { root: "tokenize", phonetic: "/ˈtəʊkənaɪz/", meaning: "分词；标记化", pos: "动词" },
  { root: "lexical", phonetic: "/ˈleksɪkl/", meaning: "词法的", pos: "形容词" },
  { root: "syntax", phonetic: "/ˈsɪntæks/", meaning: "语法", pos: "名词" },
  { root: "semantic", phonetic: "/sɪˈmæntɪk/", meaning: "语义的", pos: "形容词" },
  { root: "grammar", phonetic: "/ˈɡræmər/", meaning: "文法；语法", pos: "名词" },
  { root: "parser", phonetic: "/ˈpɑːrsər/", meaning: "解析器", pos: "名词" },
  { root: "lexer", phonetic: "/ˈleksər/", meaning: "词法分析器", pos: "名词" },
  { root: "interpreter", phonetic: "/ɪnˈtɜːrprɪtər/", meaning: "解释器", pos: "名词" },
  { root: "compiler", phonetic: "/kəmˈpaɪlər/", meaning: "编译器", pos: "名词" },
  { root: "transpiler", phonetic: "/trænsˈpaɪlər/", meaning: "转译器", pos: "名词" },
  { root: "linker", phonetic: "/ˈlɪŋkər/", meaning: "链接器", pos: "名词" },
  { root: "loader", phonetic: "/ˈləʊdər/", meaning: "加载器", pos: "名词" },
  { root: "bundler", phonetic: "/ˈbʌndlər/", meaning: "打包工具", pos: "名词" },
  { root: "minifier", phonetic: "/ˈmɪnɪfaɪər/", meaning: "压缩工具", pos: "名词" },
  { root: "obfuscate", phonetic: "/ˈɒbfəskeɪt/", meaning: "混淆", pos: "动词" },
  { root: "optimize", phonetic: "/ˈɒptɪmaɪz/", meaning: "优化", pos: "动词" },
  { root: "inline", phonetic: "/ˌɪnˈlaɪn/", meaning: "内联", pos: "形容词" },
  { root: "tree-shake", phonetic: "/ˈtriː ʃeɪk/", meaning: "树摇优化", pos: "动词" },
  { root: "polyfill", phonetic: "/ˈpɒlifɪl/", meaning: "垫片；兼容代码", pos: "名词" },
  { root: "shim", phonetic: "/ʃɪm/", meaning: "垫片", pos: "名词" },
  { root: "adapter", phonetic: "/əˈdæptər/", meaning: "适配器", pos: "名词" },
  { root: "wrapper", phonetic: "/ˈræpər/", meaning: "包装器", pos: "名词" },
  { root: "facade", phonetic: "/fəˈsɑːd/", meaning: "外观；门面", pos: "名词" },
  { root: "decorator", phonetic: "/ˈdekəreɪtər/", meaning: "装饰器", pos: "名词" },
  { root: "interceptor", phonetic: "/ˌɪntərˈseptər/", meaning: "拦截器", pos: "名词" },
  { root: "filter", phonetic: "/ˈfɪltər/", meaning: "过滤器", pos: "名词" },
  { root: "validator", phonetic: "/ˈvælɪdeɪtər/", meaning: "验证器", pos: "名词" },
  { root: "sanitizer", phonetic: "/ˈsænɪtaɪzər/", meaning: "净化器", pos: "名词" },
  { root: "transformer", phonetic: "/trænsˈfɔːrmər/", meaning: "转换器", pos: "名词" },
  { root: "converter", phonetic: "/kənˈvɜːrtər/", meaning: "转换器", pos: "名词" },
  { root: "encoder", phonetic: "/ɪnˈkəʊdər/", meaning: "编码器", pos: "名词" },
  { root: "decoder", phonetic: "/diːˈkəʊdər/", meaning: "解码器", pos: "名词" },
  { root: "compressor", phonetic: "/kəmˈpresər/", meaning: "压缩器", pos: "名词" },
  { root: "decompressor", phonetic: "/diːkəmˈpresər/", meaning: "解压器", pos: "名词" },
  { root: "archiver", phonetic: "/ˈɑːrkaɪvər/", meaning: "归档器", pos: "名词" },
  { root: "extractor", phonetic: "/ɪkˈstræktər/", meaning: "提取器", pos: "名词" },
  { root: "generator", phonetic: "/ˈdʒenəreɪtər/", meaning: "生成器", pos: "名词" },
  { root: "iterator", phonetic: "/ˈɪtəreɪtər/", meaning: "迭代器", pos: "名词" },
  { root: "enumerator", phonetic: "/ɪˈnjuːməreɪtər/", meaning: "枚举器", pos: "名词" },
  { root: "comparator", phonetic: "/kəmˈpærətər/", meaning: "比较器", pos: "名词" },
  { root: "accumulator", phonetic: "/əˈkjuːmjəleɪtər/", meaning: "累加器", pos: "名词" },
  // 451-500: 专业低频词根
  { root: "memoize", phonetic: "/ˈmeməʊaɪz/", meaning: "记忆化", pos: "动词" },
  { root: "curry", phonetic: "/ˈkʌri/", meaning: "柯里化", pos: "动词" },
  { root: "thunk", phonetic: "/θʌŋk/", meaning: "延迟计算", pos: "名词" },
  { root: "functor", phonetic: "/ˈfʌŋktər/", meaning: "函子", pos: "名词" },
  { root: "monad", phonetic: "/ˈmɒnæd/", meaning: "单子", pos: "名词" },
  { root: "monoid", phonetic: "/ˈmɒnɔɪd/", meaning: "幺半群", pos: "名词" },
  { root: "applicative", phonetic: "/əˈplɪkətɪv/", meaning: "应用式", pos: "形容词" },
  { root: "combinator", phonetic: "/ˈkɒmbɪneɪtər/", meaning: "组合子", pos: "名词" },
  { root: "recursion", phonetic: "/rɪˈkɜːrʒn/", meaning: "递归", pos: "名词" },
  { root: "tail-call", phonetic: "/ˈteɪl kɔːl/", meaning: "尾调用", pos: "名词" },
  { root: "continuation", phonetic: "/kənˌtɪnjuˈeɪʃn/", meaning: "延续", pos: "名词" },
  { root: "coroutine", phonetic: "/ˌkəʊruːˈtiːn/", meaning: "协程", pos: "名词" },
  { root: "fiber", phonetic: "/ˈfaɪbər/", meaning: "纤程", pos: "名词" },
  { root: "green-thread", phonetic: "/ɡriːn θred/", meaning: "绿色线程", pos: "名词" },
  { root: "actor", phonetic: "/ˈæktər/", meaning: "Actor模型", pos: "名词" },
  { root: "agent", phonetic: "/ˈeɪdʒənt/", meaning: "代理；智能体", pos: "名词" },
  { root: "supervisor", phonetic: "/ˈsuːpərvaɪzər/", meaning: "监督者", pos: "名词" },
  { root: "watchdog", phonetic: "/ˈwɒtʃdɒɡ/", meaning: "看门狗", pos: "名词" },
  { root: "heartbeat", phonetic: "/ˈhɑːrtbiːt/", meaning: "心跳", pos: "名词" },
  { root: "ping", phonetic: "/pɪŋ/", meaning: "网络探测", pos: "动词/名词" },
  { root: "traceroute", phonetic: "/ˈtreɪsruːt/", meaning: "路由追踪", pos: "名词" },
  { root: "handshake", phonetic: "/ˈhændʃeɪk/", meaning: "握手", pos: "名词" },
  { root: "negotiate", phonetic: "/nɪˈɡəʊʃieɪt/", meaning: "协商", pos: "动词" },
  { root: "acknowledge", phonetic: "/əkˈnɒlɪdʒ/", meaning: "确认", pos: "动词" },
  { root: "retransmit", phonetic: "/ˌriːtrænsˈmɪt/", meaning: "重传", pos: "动词" },
  { root: "flow-control", phonetic: "/ˈfləʊ kənˌtrəʊl/", meaning: "流控", pos: "名词" },
  { root: "congestion", phonetic: "/kənˈdʒestʃən/", meaning: "拥塞", pos: "名词" },
  { root: "collision", phonetic: "/kəˈlɪʒn/", meaning: "冲突；碰撞", pos: "名词" },
  { root: "checksum", phonetic: "/ˈtʃekˌsʌm/", meaning: "校验和", pos: "名词" },
  { root: "hash", phonetic: "/hæʃ/", meaning: "哈希；散列", pos: "名词/动词" },
  { root: "digest", phonetic: "/ˈdaɪdʒest/", meaning: "摘要", pos: "名词" },
  { root: "fingerprint", phonetic: "/ˈfɪŋɡərprɪnt/", meaning: "指纹；特征码", pos: "名词" },
  { root: "salt", phonetic: "/sɔːlt/", meaning: "盐值", pos: "名词" },
  { root: "pepper", phonetic: "/ˈpepər/", meaning: "胡椒；额外盐值", pos: "名词" },
  { root: "nonce", phonetic: "/nɒns/", meaning: "随机数", pos: "名词" },
  { root: "entropy", phonetic: "/ˈentrəpi/", meaning: "熵", pos: "名词" },
  { root: "seed", phonetic: "/siːd/", meaning: "种子", pos: "名词" },
  { root: "deterministic", phonetic: "/dɪˌtɜːrmɪˈnɪstɪk/", meaning: "确定性的", pos: "形容词" },
  { root: "idempotent", phonetic: "/aɪˈdemˈpəʊtənt/", meaning: "幂等的", pos: "形容词" },
  { root: "nullipotent", phonetic: "/nʌˈlɪpətənt/", meaning: "零副作用的", pos: "形容词" },
  { root: "referential", phonetic: "/ˌrefəˈrenʃl/", meaning: "引用的", pos: "形容词" },
  { root: "transitive", phonetic: "/ˈtrænsɪtɪv/", meaning: "传递的", pos: "形容词" },
  { root: "commutative", phonetic: "/kəˈmjuːtətɪv/", meaning: "交换的", pos: "形容词" },
  { root: "associative", phonetic: "/əˈsəʊʃiətɪv/", meaning: "结合的", pos: "形容词" },
  { root: "distributive", phonetic: "/dɪˈstrɪbjətɪv/", meaning: "分配的", pos: "形容词" }
];

// 生成衍生词函数
function generateWords(rootData, id) {
  const words = [];
  const root = rootData.root;
  const phonetic = rootData.phonetic;
  const meaning = rootData.meaning;

  // 基础词
  words.push({
    word: root.toLowerCase(),
    phonetic: phonetic,
    partOfSpeech: rootData.pos === "名词" ? "n." : (rootData.pos === "动词" ? "v." : "adj."),
    meaning: meaning.split("；")[0],
    memoryTip: `本身是词根，${meaning}`,
    root: root.toLowerCase(),
    rootPhonetic: phonetic,
    rootMeaning: meaning,
    rootPhrases: [],
    wordPhrases: []
  });

  // 根据词根类型生成衍生词
  if (rootData.pos === "名词" || root === "DOM" || root === "VPN" || root === "NAT" || root === "DNS" || root === "DHCP" || root === "ARP" || root === "MAC") {
    // 名词类：生成相关复合词
    const suffixes = [
      { s: "ing", m: "进行中" },
      { s: "er", m: "器/者" },
      { s: "able", m: "可...的" },
      { s: "ation", m: "行为/状态" }
    ];

    for (let i = 1; i < 4 && i < suffixes.length; i++) {
      const suffix = suffixes[i-1];
      const newWord = root.toLowerCase() + suffix.s;
      words.push({
        word: newWord,
        phonetic: phonetic.replace(/\/$/, '') + suffix.s.replace(/e$/, '') + '/',
        partOfSpeech: "n.",
        meaning: `${meaning.split("；")[0]}${suffix.m}`,
        memoryTip: `${root} + ${suffix.s}(${suffix.m})`,
        root: root.toLowerCase(),
        rootPhonetic: phonetic,
        rootMeaning: meaning,
        rootPhrases: [],
        wordPhrases: []
      });
    }
  } else if (rootData.pos === "动词") {
    // 动词类：生成名词/形容词形式
    const forms = [
      { s: "ing", m: "进行中" },
      { s: "ed", m: "已..." },
      { s: "er", m: "器/者" }
    ];

    for (let i = 1; i < 4 && i <= forms.length; i++) {
      const form = forms[i-1];
      const newWord = root.toLowerCase() + form.s;
      words.push({
        word: newWord,
        phonetic: phonetic.replace(/\/$/, '') + form.s.replace(/e$/, '') + '/',
        partOfSpeech: form.s === "ed" ? "adj." : "n.",
        meaning: `${meaning}${form.m}`,
        memoryTip: `${root} + ${form.s}(${form.m})`,
        root: root.toLowerCase(),
        rootPhonetic: phonetic,
        rootMeaning: meaning,
        rootPhrases: [],
        wordPhrases: []
      });
    }
  } else {
    // 形容词类
    const forms = [
      { s: "ness", m: "...性" },
      { s: "ly", m: "...地" },
      { s: "ify", m: "使...化" }
    ];

    for (let i = 1; i < 4 && i <= forms.length; i++) {
      const form = forms[i-1];
      const newWord = root.toLowerCase().replace(/ic$/, '') + form.s;
      words.push({
        word: newWord,
        phonetic: phonetic.replace(/\/$/, '') + form.s + '/',
        partOfSpeech: form.s === "ly" ? "adv." : "n.",
        meaning: `${meaning}${form.m}`,
        memoryTip: `${root} + ${form.s}(${form.m})`,
        root: root.toLowerCase(),
        rootPhonetic: phonetic,
        rootMeaning: meaning,
        rootPhrases: [],
        wordPhrases: []
      });
    }
  }

  return words.slice(0, 4);
}

// 生成助记法
function generateMnemonic(rootData) {
  const root = rootData.root;
  const meaning = rootData.meaning;
  return `${root} → ${meaning.split("；")[0]} → 联想记忆帮助理解`;
}

// 生成短语
function generatePhrases(rootData) {
  const root = rootData.root.toLowerCase();
  const meaning = rootData.meaning;
  return [
    `${root} ${meaning.split("；")[0]}`,
    `${root} configuration ${root}配置`,
    `${root} management ${root}管理`,
    `${root} service ${root}服务`
  ];
}

// 生成完整的300个词根数据
const fullData = roots.map((r, idx) => {
  const id = 201 + idx;
  const words = generateWords(r, id);
  const phrases = generatePhrases(r);
  const mnemonic = generateMnemonic(r);

  // 更新wordPhrases
  words.forEach(w => {
    w.rootPhrases = phrases.slice(0, 3);
    w.wordPhrases = [`${w.word} example ${w.word}示例`];
  });

  return {
    id: id,
    root: r.root.toLowerCase(),
    phonetic: r.phonetic,
    partOfSpeech: r.pos,
    meaning: r.meaning,
    frequency: id,
    category: "互联网和软件",
    words: words,
    phrases: phrases,
    mnemonic: mnemonic
  };
});

// 输出JSON
console.log(JSON.stringify(fullData, null, 2));
