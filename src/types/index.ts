// 核心词汇
export interface WordItem {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  memoryTip: string;
  // 单词的词根信息
  root?: string;           // 词根
  rootPhonetic?: string;   // 词根音标
  rootMeaning?: string;    // 词根意思
  rootPhrases?: string[];  // 词根常用短语
  // 单词自身的常用短语
  wordPhrases?: string[];  // 该单词的常用短语
}

// 词根课程
export interface RootLesson {
  id: number;
  root: string;           // 词根
  phonetic: string;       // 音标
  partOfSpeech: string;   // 词性
  meaning: string;        // 词根意思
  frequency: number;      // 频率等级 1-200，1最高频
  category: Category;     // 类目
  words: WordItem[];      // 核心词汇（3-5个）
  phrases: string[];      // 常用短语
  mnemonic: string;       // 记忆口诀
}

// 类目类型
export type Category =
  | '互联网和软件'
  | 'Web3.0'
  | '通信'
  | '机械'
  | '土木'
  | '旅游'
  | '半导体'
  | '化工'
  | '电力'
  | '高中'
  | '四级'
  | '六级';

// 学习进度类型
export interface Progress {
  rootId: number;
  category: Category;
  studied: boolean;
  masteryLevel: number;   // 掌握程度 0-5
  lastPracticeAt: string; // ISO string format for IndexedDB serialization
}

// 元数据类型
export interface Meta {
  highScore?: number;
  dataVersion?: number;
}

// 题型类型
export type QuizType = 'choice' | 'spelling' | 'listening';

// 题目中的单词信息
export interface QuizWordInfo {
  word: string;
  meaning: string;
  phonetic: string;
  partOfSpeech?: string;
  memoryTip?: string;
}

// 题目类型
export interface QuizQuestion {
  wordItem: QuizWordInfo;
  rootLesson: RootLesson;
  type: QuizType;
  options?: string[];
  hintUsed: number;
}

// 测试结果类型
export interface QuizResult {
  correct: number;
  wrong: number;
  score: number;
  questions: {
    wordId: string;
    isCorrect: boolean;
  }[];
}
