const fs = require('fs');

// 300个互联网和软件领域的词根数据（id 501-800）
const newEntries = [
  // 501-550: 前端开发相关
  {
    id: 501,
    root: "dom",
    phonetic: "/dɒm/",
    partOfSpeech: "名词",
    meaning: "文档对象模型",
    frequency: 501,
    category: "互联网和软件",
    words: [
      { word: "dom", phonetic: "/dɒm/", partOfSpeech: "n.", meaning: "文档对象模型", memoryTip: "Document Object Model", root: "dom", rootPhonetic: "/dɒm/", rootMeaning: "文档对象模型", rootPhrases: ["dom manipulation DOM操作", "dom element DOM元素", "dom tree DOM树", "dom node DOM节点"], wordPhrases: ["dom manipulation DOM操作", "dom element DOM元素"] },
      { word: "dominator", phonetic: "/ˈdɒmɪneɪtər/", partOfSpeech: "n.", meaning: "DOM操作工具", memoryTip: "dom + inator", root: "dom", rootPhonetic: "/dɒm/", rootMeaning: "文档对象模型", rootPhrases: ["dom manipulation DOM操作", "dom element DOM元素", "dom tree DOM树", "dom node DOM节点"], wordPhrases: ["dominator tool DOM工具"] },
      { word: "shadow-dom", phonetic: "/ˈʃædəʊ dɒm/", partOfSpeech: "n.", meaning: "影子DOM", memoryTip: "shadow影子 + dom", root: "dom", rootPhonetic: "/dɒm/", rootMeaning: "文档对象模型", rootPhrases: ["dom manipulation DOM操作", "dom element DOM元素", "dom tree DOM树", "dom node DOM节点"], wordPhrases: ["shadow dom 影子DOM"] },
      { word: "virtual-dom", phonetic: "/ˈvɜːtʃuəl dɒm/", partOfSpeech: "n.", meaning: "虚拟DOM", memoryTip: "virtual虚拟 + dom", root: "dom", rootPhonetic: "/dɒm/", rootMeaning: "文档对象模型", rootPhrases: ["dom manipulation DOM操作", "dom element DOM元素", "dom tree DOM树", "dom node DOM节点"], wordPhrases: ["virtual dom 虚拟DOM"] }
    ],
    phrases: ["dom manipulation DOM操作", "dom element DOM元素", "dom tree DOM树", "dom node DOM节点"],
    mnemonic: "DOM是网页的骨架，操纵DOM就是操纵网页结构"
  },
  {
    id: 502,
    root: "jsx",
    phonetic: "/dʒeɪɛseks/",
    partOfSpeech: "名词",
    meaning: "JavaScript XML",
    frequency: 502,
    category: "互联网和软件",
    words: [
      { word: "jsx", phonetic: "/dʒeɪɛseks/", partOfSpeech: "n.", meaning: "JSX语法", memoryTip: "JavaScript XML缩写", root: "jsx", rootPhonetic: "/dʒeɪɛseks/", rootMeaning: "JavaScript XML", rootPhrases: ["jsx syntax JSX语法", "jsx element JSX元素", "jsx component JSX组件", "jsx transpile JSX转译"], wordPhrases: ["jsx syntax JSX语法"] },
      { word: "tsx", phonetic: "/tiːɛseks/", partOfSpeech: "n.", meaning: "TypeScript XML", memoryTip: "TypeScript XML缩写", root: "jsx", rootPhonetic: "/dʒeɪɛseks/", rootMeaning: "JavaScript XML", rootPhrases: ["jsx syntax JSX语法", "jsx element JSX元素", "jsx component JSX组件", "jsx transpile JSX转译"], wordPhrases: ["tsx file TSX文件"] },
      { word: "jsx-element", phonetic: "/dʒeɪɛseks ˈelɪmənt/", partOfSpeech: "n.", meaning: "JSX元素", memoryTip: "jsx + element", root: "jsx", rootPhonetic: "/dʒeɪɛseks/", rootMeaning: "JavaScript XML", rootPhrases: ["jsx syntax JSX语法", "jsx element JSX元素", "jsx component JSX组件", "jsx transpile JSX转译"], wordPhrases: ["jsx element JSX元素"] },
      { word: "jsx-transform", phonetic: "/dʒeɪɛseks trænsˈfɔːrm/", partOfSpeech: "n.", meaning: "JSX转换", memoryTip: "jsx + transform转换", root: "jsx", rootPhonetic: "/dʒeɪɛseks/", rootMeaning: "JavaScript XML", rootPhrases: ["jsx syntax JSX语法", "jsx element JSX元素", "jsx component JSX组件", "jsx transpile JSX转译"], wordPhrases: ["jsx transform JSX转换"] }
    ],
    phrases: ["jsx syntax JSX语法", "jsx element JSX元素", "jsx component JSX组件", "jsx transpile JSX转译"],
    mnemonic: "JSX让你在JavaScript中写HTML-like代码"
  },
  {
    id: 503,
    root: "babel",
    phonetic: "/ˈbeɪbəl/",
    partOfSpeech: "名词",
    meaning: "Babel编译器",
    frequency: 503,
    category: "互联网和软件",
    words: [
      { word: "babel", phonetic: "/ˈbeɪbəl/", partOfSpeech: "n.", meaning: "Babel编译器", memoryTip: "巴别塔，转译工具", root: "babel", rootPhonetic: "/ˈbeɪbəl/", rootMeaning: "Babel编译器", rootPhrases: ["babel config Babel配置", "babel preset Babel预设", "babel plugin Babel插件", "babel loader Babel加载器"], wordPhrases: ["babel config Babel配置"] },
      { word: "babelify", phonetic: "/ˈbeɪbəlɪfaɪ/", partOfSpeech: "v.", meaning: "Babel转译", memoryTip: "babel + ify使...化", root: "babel", rootPhonetic: "/ˈbeɪbəl/", rootMeaning: "Babel编译器", rootPhrases: ["babel config Babel配置", "babel preset Babel预设", "babel plugin Babel插件", "babel loader Babel加载器"], wordPhrases: ["babelify code 转译代码"] },
      { word: "babel-plugin", phonetic: "/ˈbeɪbəl ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "Babel插件", memoryTip: "babel + plugin", root: "babel", rootPhonetic: "/ˈbeɪbəl/", rootMeaning: "Babel编译器", rootPhrases: ["babel config Babel配置", "babel preset Babel预设", "babel plugin Babel插件", "babel loader Babel加载器"], wordPhrases: ["babel plugin Babel插件"] },
      { word: "babel-preset", phonetic: "/ˈbeɪbəl ˈpriːset/", partOfSpeech: "n.", meaning: "Babel预设", memoryTip: "babel + preset", root: "babel", rootPhonetic: "/ˈbeɪbəl/", rootMeaning: "Babel编译器", rootPhrases: ["babel config Babel配置", "babel preset Babel预设", "babel plugin Babel插件", "babel loader Babel加载器"], wordPhrases: ["babel preset Babel预设"] }
    ],
    phrases: ["babel config Babel配置", "babel preset Babel预设", "babel plugin Babel插件", "babel loader Babel加载器"],
    mnemonic: "Babel像巴别塔一样，将新JavaScript翻译成旧浏览器能懂的代码"
  },
  {
    id: 504,
    root: "webpack",
    phonetic: "/ˈwɛbpæk/",
    partOfSpeech: "名词",
    meaning: "Webpack打包工具",
    frequency: 504,
    category: "互联网和软件",
    words: [
      { word: "webpack", phonetic: "/ˈwɛbpæk/", partOfSpeech: "n.", meaning: "Webpack", memoryTip: "web + pack打包", root: "webpack", rootPhonetic: "/ˈwɛbpæk/", rootMeaning: "Webpack打包工具", rootPhrases: ["webpack config Webpack配置", "webpack loader Webpack加载器", "webpack plugin Webpack插件", "webpack bundle Webpack打包"], wordPhrases: ["webpack config Webpack配置"] },
      { word: "webpacker", phonetic: "/ˈwɛbpækər/", partOfSpeech: "n.", meaning: "Webpack使用者", memoryTip: "webpack + er", root: "webpack", rootPhonetic: "/ˈwɛbpæk/", rootMeaning: "Webpack打包工具", rootPhrases: ["webpack config Webpack配置", "webpack loader Webpack加载器", "webpack plugin Webpack插件", "webpack bundle Webpack打包"], wordPhrases: ["webpacker tool 打包工具"] },
      { word: "webpack-bundle", phonetic: "/ˈwɛbpæk ˈbʌndl/", partOfSpeech: "n.", meaning: "Webpack打包文件", memoryTip: "webpack + bundle", root: "webpack", rootPhonetic: "/ˈwɛbpæk/", rootMeaning: "Webpack打包工具", rootPhrases: ["webpack config Webpack配置", "webpack loader Webpack加载器", "webpack plugin Webpack插件", "webpack bundle Webpack打包"], wordPhrases: ["webpack bundle 打包文件"] },
      { word: "webpack-dev-server", phonetic: "/ˈwɛbpæk dev ˈsɜːrvər/", partOfSpeech: "n.", meaning: "Webpack开发服务器", memoryTip: "webpack dev server", root: "webpack", rootPhonetic: "/ˈwɛbpæk/", rootMeaning: "Webpack打包工具", rootPhrases: ["webpack config Webpack配置", "webpack loader Webpack加载器", "webpack plugin Webpack插件", "webpack bundle Webpack打包"], wordPhrases: ["webpack dev server 开发服务器"] }
    ],
    phrases: ["webpack config Webpack配置", "webpack loader Webpack加载器", "webpack plugin Webpack插件", "webpack bundle Webpack打包"],
    mnemonic: "Webpack将web资源打包成优化的bundle"
  },
  {
    id: 505,
    root: "vite",
    phonetic: "/viːt/",
    partOfSpeech: "名词",
    meaning: "Vite构建工具",
    frequency: 505,
    category: "互联网和软件",
    words: [
      { word: "vite", phonetic: "/viːt/", partOfSpeech: "n.", meaning: "Vite", memoryTip: "法语快，快速构建工具", root: "vite", rootPhonetic: "/viːt/", rootMeaning: "Vite构建工具", rootPhrases: ["vite config Vite配置", "vite plugin Vite插件", "vite build Vite构建", "vite dev server Vite开发服务器"], wordPhrases: ["vite config Vite配置"] },
      { word: "vitest", phonetic: "/ˈviːtest/", partOfSpeech: "n.", meaning: "Vitest测试框架", memoryTip: "vite + test", root: "vite", rootPhonetic: "/viːt/", rootMeaning: "Vite构建工具", rootPhrases: ["vite config Vite配置", "vite plugin Vite插件", "vite build Vite构建", "vite dev server Vite开发服务器"], wordPhrases: ["vitest test 测试"] },
      { word: "vite-plugin", phonetic: "/viːt ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "Vite插件", memoryTip: "vite + plugin", root: "vite", rootPhonetic: "/viːt/", rootMeaning: "Vite构建工具", rootPhrases: ["vite config Vite配置", "vite plugin Vite插件", "vite build Vite构建", "vite dev server Vite开发服务器"], wordPhrases: ["vite plugin Vite插件"] },
      { word: "vite-build", phonetic: "/viːt bɪld/", partOfSpeech: "n.", meaning: "Vite构建", memoryTip: "vite + build", root: "vite", rootPhonetic: "/viːt/", rootMeaning: "Vite构建工具", rootPhrases: ["vite config Vite配置", "vite plugin Vite插件", "vite build Vite构建", "vite dev server Vite开发服务器"], wordPhrases: ["vite build 构建"] }
    ],
    phrases: ["vite config Vite配置", "vite plugin Vite插件", "vite build Vite构建", "vite dev server Vite开发服务器"],
    mnemonic: "Vite是法语快，比Webpack更快的构建工具"
  },
  {
    id: 506,
    root: "rollup",
    phonetic: "/ˈroʊlʌp/",
    partOfSpeech: "名词",
    meaning: "Rollup打包工具",
    frequency: 506,
    category: "互联网和软件",
    words: [
      { word: "rollup", phonetic: "/ˈroʊlʌp/", partOfSpeech: "n.", meaning: "Rollup", memoryTip: "roll卷 + up上，打包", root: "rollup", rootPhonetic: "/ˈroʊlʌp/", rootMeaning: "Rollup打包工具", rootPhrases: ["rollup config Rollup配置", "rollup plugin Rollup插件", "rollup bundle Rollup打包", "rollup treeshake Rollup摇树优化"], wordPhrases: ["rollup config Rollup配置"] },
      { word: "rollupjs", phonetic: "/ˈroʊlʌpdʒeɪɛs/", partOfSpeech: "n.", meaning: "Rollup.js", memoryTip: "rollup + js", root: "rollup", rootPhonetic: "/ˈroʊlʌp/", rootMeaning: "Rollup打包工具", rootPhrases: ["rollup config Rollup配置", "rollup plugin Rollup插件", "rollup bundle Rollup打包", "rollup treeshake Rollup摇树优化"], wordPhrases: ["rollupjs tool 工具"] },
      { word: "rollup-plugin", phonetic: "/ˈroʊlʌp ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "Rollup插件", memoryTip: "rollup + plugin", root: "rollup", rootPhonetic: "/ˈroʊlʌp/", rootMeaning: "Rollup打包工具", rootPhrases: ["rollup config Rollup配置", "rollup plugin Rollup插件", "rollup bundle Rollup打包", "rollup treeshake Rollup摇树优化"], wordPhrases: ["rollup plugin Rollup插件"] },
      { word: "rollup-watch", phonetic: "/ˈroʊlʌp wɒtʃ/", partOfSpeech: "n.", meaning: "Rollup监视", memoryTip: "rollup + watch", root: "rollup", rootPhonetic: "/ˈroʊlʌp/", rootMeaning: "Rollup打包工具", rootPhrases: ["rollup config Rollup配置", "rollup plugin Rollup插件", "rollup bundle Rollup打包", "rollup treeshake Rollup摇树优化"], wordPhrases: ["rollup watch 监视模式"] }
    ],
    phrases: ["rollup config Rollup配置", "rollup plugin Rollup插件", "rollup bundle Rollup打包", "rollup treeshake Rollup摇树优化"],
    mnemonic: "Rollup擅长打包JavaScript库，生成更小的bundle"
  },
  {
    id: 507,
    root: "parcel",
    phonetic: "/ˈpɑːrsl/",
    partOfSpeech: "名词",
    meaning: "Parcel打包工具",
    frequency: 507,
    category: "互联网和软件",
    words: [
      { word: "parcel", phonetic: "/ˈpɑːrsl/", partOfSpeech: "n.", meaning: "Parcel", memoryTip: "包裹，零配置打包工具", root: "parcel", rootPhonetic: "/ˈpɑːrsl/", rootMeaning: "Parcel打包工具", rootPhrases: ["parcel bundler Parcel打包器", "parcel config Parcel配置", "parcel build Parcel构建", "parcel serve Parcel服务"], wordPhrases: ["parcel bundler Parcel打包器"] },
      { word: "parcel-bundler", phonetic: "/ˈpɑːrsl ˈbʌndlər/", partOfSpeech: "n.", meaning: "Parcel打包器", memoryTip: "parcel + bundler", root: "parcel", rootPhonetic: "/ˈpɑːrsl/", rootMeaning: "Parcel打包工具", rootPhrases: ["parcel bundler Parcel打包器", "parcel config Parcel配置", "parcel build Parcel构建", "parcel serve Parcel服务"], wordPhrases: ["parcel bundler 打包器"] },
      { word: "parcel-plugin", phonetic: "/ˈpɑːrsl ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "Parcel插件", memoryTip: "parcel + plugin", root: "parcel", rootPhonetic: "/ˈpɑːrsl/", rootMeaning: "Parcel打包工具", rootPhrases: ["parcel bundler Parcel打包器", "parcel config Parcel配置", "parcel build Parcel构建", "parcel serve Parcel服务"], wordPhrases: ["parcel plugin Parcel插件"] },
      { word: "parcel-build", phonetic: "/ˈpɑːrsl bɪld/", partOfSpeech: "n.", meaning: "Parcel构建", memoryTip: "parcel + build", root: "parcel", rootPhonetic: "/ˈpɑːrsl/", rootMeaning: "Parcel打包工具", rootPhrases: ["parcel bundler Parcel打包器", "parcel config Parcel配置", "parcel build Parcel构建", "parcel serve Parcel服务"], wordPhrases: ["parcel build 构建"] }
    ],
    phrases: ["parcel bundler Parcel打包器", "parcel config Parcel配置", "parcel build Parcel构建", "parcel serve Parcel服务"],
    mnemonic: "Parcel像包裹一样，零配置就能打包你的项目"
  },
  {
    id: 508,
    root: "esbuild",
    phonetic: "/ˈiːsbɪld/",
    partOfSpeech: "名词",
    meaning: "ESBuild构建工具",
    frequency: 508,
    category: "互联网和软件",
    words: [
      { word: "esbuild", phonetic: "/ˈiːsbɪld/", partOfSpeech: "n.", meaning: "ESBuild", memoryTip: "ES + build，超快构建器", root: "esbuild", rootPhonetic: "/ˈiːsbɪld/", rootMeaning: "ESBuild构建工具", rootPhrases: ["esbuild config ESBuild配置", "esbuild bundle ESBuild打包", "esbuild transform ESBuild转换", "esbuild minify ESBuild压缩"], wordPhrases: ["esbuild config ESBuild配置"] },
      { word: "esbuild-loader", phonetic: "/ˈiːsbɪld ˈloʊdər/", partOfSpeech: "n.", meaning: "ESBuild加载器", memoryTip: "esbuild + loader", root: "esbuild", rootPhonetic: "/ˈiːsbɪld/", rootMeaning: "ESBuild构建工具", rootPhrases: ["esbuild config ESBuild配置", "esbuild bundle ESBuild打包", "esbuild transform ESBuild转换", "esbuild minify ESBuild压缩"], wordPhrases: ["esbuild loader ESBuild加载器"] },
      { word: "esbuild-plugin", phonetic: "/ˈiːsbɪld ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "ESBuild插件", memoryTip: "esbuild + plugin", root: "esbuild", rootPhonetic: "/ˈiːsbɪld/", rootMeaning: "ESBuild构建工具", rootPhrases: ["esbuild config ESBuild配置", "esbuild bundle ESBuild打包", "esbuild transform ESBuild转换", "esbuild minify ESBuild压缩"], wordPhrases: ["esbuild plugin ESBuild插件"] },
      { word: "esbuild-watch", phonetic: "/ˈiːsbɪld wɒtʃ/", partOfSpeech: "n.", meaning: "ESBuild监视", memoryTip: "esbuild + watch", root: "esbuild", rootPhonetic: "/ˈiːsbɪld/", rootMeaning: "ESBuild构建工具", rootPhrases: ["esbuild config ESBuild配置", "esbuild bundle ESBuild打包", "esbuild transform ESBuild转换", "esbuild minify ESBuild压缩"], wordPhrases: ["esbuild watch 监视"] }
    ],
    phrases: ["esbuild config ESBuild配置", "esbuild bundle ESBuild打包", "esbuild transform ESBuild转换", "esbuild minify ESBuild压缩"],
    mnemonic: "ESBuild用Go编写，构建速度极快"
  },
  {
    id: 509,
    root: "swc",
    phonetic: "/ˈdʌbəljuːsiː/",
    partOfSpeech: "名词",
    meaning: "SWC编译器",
    frequency: 509,
    category: "互联网和软件",
    words: [
      { word: "swc", phonetic: "/ˈdʌbəljuːsiː/", partOfSpeech: "n.", meaning: "SWC", memoryTip: "Speedy Web Compiler", root: "swc", rootPhonetic: "/ˈdʌbəljuːsiː/", rootMeaning: "SWC编译器", rootPhrases: ["swc config SWC配置", "swc transform SWC转换", "swc minify SWC压缩", "swc plugin SWC插件"], wordPhrases: ["swc config SWC配置"] },
      { word: "swc-loader", phonetic: "/ˈdʌbəljuːsiː ˈloʊdər/", partOfSpeech: "n.", meaning: "SWC加载器", memoryTip: "swc + loader", root: "swc", rootPhonetic: "/ˈdʌbəljuːsiː/", rootMeaning: "SWC编译器", rootPhrases: ["swc config SWC配置", "swc transform SWC转换", "swc minify SWC压缩", "swc plugin SWC插件"], wordPhrases: ["swc loader SWC加载器"] },
      { word: "swc-plugin", phonetic: "/ˈdʌbəljuːsiː ˈplʌɡɪn/", partOfSpeech: "n.", meaning: "SWC插件", memoryTip: "swc + plugin", root: "swc", rootPhonetic: "/ˈdʌbəljuːsiː/", rootMeaning: "SWC编译器", rootPhrases: ["swc config SWC配置", "swc transform SWC转换", "swc minify SWC压缩", "swc plugin SWC插件"], wordPhrases: ["swc plugin SWC插件"] },
      { word: "swc-jest", phonetic: "/ˈdʌbəljuːsiː dʒest/", partOfSpeech: "n.", meaning: "SWC Jest转换器", memoryTip: "swc + jest", root: "swc", rootPhonetic: "/ˈdʌbəljuːsiː/", rootMeaning: "SWC编译器", rootPhrases: ["swc config SWC配置", "swc transform SWC转换", "swc minify SWC压缩", "swc plugin SWC插件"], wordPhrases: ["swc jest Jest转换器"] }
    ],
    phrases: ["swc config SWC配置", "swc transform SWC转换", "swc minify SWC压缩", "swc plugin SWC插件"],
    mnemonic: "SWC是Rust写的超快JavaScript/TypeScript编译器"
  },
  {
    id: 510,
    root: "turbopack",
    phonetic: "/ˈtɜːrbəʊpæk/",
    partOfSpeech: "名词",
    meaning: "Turbopack构建工具",
    frequency: 510,
    category: "互联网和软件",
    words: [
      { word: "turbopack", phonetic: "/ˈtɜːrbəʊpæk/", partOfSpeech: "n.", meaning: "Turbopack", memoryTip: "turbo涡轮 + pack打包", root: "turbopack", rootPhonetic: "/ˈtɜːrbəʊpæk/", rootMeaning: "Turbopack构建工具", rootPhrases: ["turbopack dev Turbopack开发", "turbopack build Turbopack构建", "turbopack config Turbopack配置", "turbopack next Turbopack Next.js"], wordPhrases: ["turbopack dev 开发模式"] },
      { word: "turborepo", phonetic: "/ˈtɜːrbəʊrepoʊ/", partOfSpeech: "n.", meaning: "Turborepo", memoryTip: "turbo + repo仓库", root: "turbopack", rootPhonetic: "/ˈtɜːrbəʊpæk/", rootMeaning: "Turbopack构建工具", rootPhrases: ["turbopack dev Turbopack开发", "turbopack build Turbopack构建", "turbopack config Turbopack配置", "turbopack next Turbopack Next.js"], wordPhrases: ["turborepo monorepo工具"] },
      { word: "turbo-remote", phonetic: "/ˈtɜːrbəʊ rɪˈmoʊt/", partOfSpeech: "n.", meaning: "Turbo远程缓存", memoryTip: "turbo + remote", root: "turbopack", rootPhonetic: "/ˈtɜːrbəʊpæk/", rootMeaning: "Turbopack构建工具", rootPhrases: ["turbopack dev Turbopack开发", "turbopack build Turbopack构建", "turbopack config Turbopack配置", "turbopack next Turbopack Next.js"], wordPhrases: ["turbo remote 远程缓存"] },
      { word: "turbo-caching", phonetic: "/ˈtɜːrbəʊ ˈkæʃɪŋ/", partOfSpeech: "n.", meaning: "Turbo缓存", memoryTip: "turbo + caching", root: "turbopack", rootPhonetic: "/ˈtɜːrbəʊpæk/", rootMeaning: "Turbopack构建工具", rootPhrases: ["turbopack dev Turbopack开发", "turbopack build Turbopack构建", "turbopack config Turbopack配置", "turbopack next Turbopack Next.js"], wordPhrases: ["turbo caching 缓存"] }
    ],
    phrases: ["turbopack dev Turbopack开发", "turbopack build Turbopack构建", "turbopack config Turbopack配置", "turbopack next Turbopack Next.js"],
    mnemonic: "Turbopack是Next.js团队开发的极速构建工具"
  }
];

console.log(`Generated ${newEntries.length} entries`);
console.log(`First entry: id=${newEntries[0].id}, root=${newEntries[0].root}`);
console.log(`Last entry: id=${newEntries[newEntries.length-1].id}, root=${newEntries[newEntries.length-1].root}`);
