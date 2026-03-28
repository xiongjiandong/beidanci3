# FunWords 高考趣味背单词（产品需求文档）

## 1. 产品定位

### 目标用户
高一至高三备考学生、行业人士

### 核心目标
- 通过趣味化方式进行单词学习和测试，避免枯燥
- 轻量化、纯前端实现，无需注册、可离线使用

### 技术栈
React + shadcn/ui + Tailwind + IndexedDB（本地存储）

---

## 2. 核心功能

### 2.1 单词类目

系统支持以下12个类目的单词学习：

| 类目 | 说明 |
|------|------|
| 互联网和软件 | IT行业常用词汇 |
| Web3.0 | 区块链、加密货币、DeFi等领域词汇 |
| 通信 | 通信领域专业词汇 |
| 机械 | 机械工程相关词汇 |
| 土木 | 土木工程专业词汇 |
| 旅游 | 旅游行业常用词汇 |
| 半导体 | 半导体行业专业词汇 |
| 化工 | 化工领域词汇 |
| 电力 | 电力行业词汇 |
| 高中 | 高考3500核心词汇 |
| 四级 | 大学英语四级词汇 |
| 六级 | 大学英语六级词汇 |

每个类目包含200个常用词根，按使用频率从高到低排序学习。

### 2.2 词根学习规则

#### 学习顺序
- 词根和单词按使用频率排序，优先学习高频词
- 由易到难，循序渐进

#### 课程设置
- 每课 3~5 个单词
- 图文并茂，便于记忆

#### 学习内容
每个单词包含以下信息：
- **词根解析**：拆解单词结构，理解构词规律
- **音标**：标准国际音标标注
- **词性**：动词、名词、形容词等
- **释义**：中文含义
- **记忆技巧**：助记方法
- **常用短语**：实际应用场景
- **例句**：最常用的句子示例

### 2.3 测试题型

#### 题型说明

| 题型 | 描述 |
|------|------|
| 选择题 | 英文 → 中文释义，四选一 |
| 拼写题 | 给中文释义，用户输入英文单词 |
| 听音选词 | 播放发音，选出正确单词 |

#### 题目规则
- 每轮 10 题
- 答对 +1 分，答错扣 1 分但给提示
- 允许 2 次提示机会（例如显示首字母）

---

## 3. 数据存储（本地 IndexedDB）

### words 表（只读，内置单词数据）

```typescript
interface Word {
  id: number;
  headword: string;       // 单词
  meaning: string;        // 中文释义
  phonetic: string;       // 音标
  category: string;       // 类目
  root: string;           // 词根
  partOfSpeech: string;   // 词性
  difficulty: number;     // 难度等级 1-5
  frequency: number;      // 使用频率排名
  example?: string;       // 例句
  phrases?: string[];     // 常用短语
  audioKey?: string;      // 音频资源键
}
```

### roots 表（词根数据）

```typescript
interface Root {
  id: number;
  root: string;           // 词根
  meaning: string;        // 含义
  mnemonic: string;       // 记忆技巧
  category: string;       // 所属类目
}
```

### progress 表（学习进度）

```typescript
interface Progress {
  wordId: number;         // 单词ID
  correct: number;        // 答对次数
  wrong: number;          // 答错次数
  lastPracticeAt: Date;   // 最后练习时间
  masteryLevel: number;   // 掌握程度 0-5
}
```

### meta 表（游戏分数）

```typescript
interface Meta {
  highScore: number;      // 最高分
}
```

---

## 4. 词根学习模块

### 学习流程

1. **选择类目**：用户选择想学习的类目
2. **学习词根**：先学习该类目最常见的词根
3. **单词学习**：基于词根学习相关单词
4. **即时测试**：学习完成后进行小测验巩固

### 内容组织

- 每个词根配套 3-5 个典型单词
- 单词按难度和频率排序
- 提供词源故事和记忆联想

---

## 5. UI 设计要点

### 设计风格
现代简约风格，清晰易读

### 字体
系统字体栈，保证跨平台一致性

### 颜色方案

| 用途 | 颜色值 | 说明 |
|------|--------|------|
| 主色 | #10B981 | 绿色，成功/正确提示 |
| 错误色 | #EF4444 | 红色，错误提示 |
| 背景色 | #FFFFFF / #1F2937 | 浅色/深色模式 |
| 卡片背景 | #FFFFFF | 白色背景 |
| 文字主色 | #111827 | 深灰色 |
| 文字次色 | #6B7280 | 中灰色 |

### 布局原则
- 卡片式设计，层次分明
- 适当留白，减少视觉干扰
- 圆角设计，现代感强

### shadcn/ui 组件

| 组件 | 用途 |
|------|------|
| Button | 操作按钮 |
| Card | 内容容器 |
| Progress | 进度条、生命值 |
| Dialog | 弹窗、结算界面 |
| Toast | 答题反馈提示 |
| Tabs | 类目切换 |
| Input | 拼写题输入 |

---

## 6. 非功能性需求

### 性能要求
- 首屏加载时间 ≤ 3s
- 交互响应时间 ≤ 100ms
- 单词数据预加载，测试过程无卡顿

### 兼容性
- 浏览器：Chrome、Firefox、Safari、Edge 最新两个版本
- 操作系统：Windows、macOS、iOS、Android

### 离线支持
- PWA 支持，核心功能可离线使用
- 首次访问后缓存单词数据

### 响应式设计
- 手机端：最小宽度 375px
- 平板端：768px 及以上
- 桌面端：1024px 及以上

---

## 7. 项目结构

```
src/
├── components/
│   ├── ui/              # shadcn/ui 基础组件
│   ├── Quiz/            # 测试相关组件
│   │   ├── ChoiceQuiz.tsx
│   │   ├── SpellingQuiz.tsx
│   │   └── ListeningQuiz.tsx
│   ├── Learn/           # 学习相关组件
│   │   ├── WordCard.tsx
│   │   └── RootLesson.tsx
│   └── Layout/          # 布局组件
│       ├── Header.tsx
│       └── Sidebar.tsx
├── hooks/
│   ├── useWordData.ts   # 单词数据钩子
│   ├── useProgress.ts   # 进度管理钩子
│   └── useQuiz.ts       # 测试逻辑钩子
├── lib/
│   ├── db.ts            # IndexedDB 操作
│   ├── audio.ts         # 音频播放
│   └── utils.ts         # 工具函数
├── data/
│   ├── words.json       # 单词数据
│   └── roots.json       # 词根数据
└── types/
    └── index.ts         # TypeScript 类型定义
```

---

## 8. 开发步骤

1. 初始化 React + shadcn/ui 项目
2. 导入单词数据到 IndexedDB
3. 实现词根学习模块
4. 编写题目生成逻辑
5. 实现三种测试题型
6. 添加分数、进度逻辑
7. 集成现代简约主题
8. 完成结算界面
9. 测试 PWA 离线可用性

---

## 9. 上线目标（KPI）

| 指标 | 目标值 |
|------|--------|
| 首屏加载 | ≤ 3s |
| 平均答题时长 | ≥ 5 分钟 |
| 次日留存率 | ≥ 25% |
