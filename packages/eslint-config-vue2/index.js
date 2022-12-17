module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
    // https://eslint.org/docs/rules/linebreak-style#enforce-consistent-linebreak-style-linebreak-style
    'linebreak-style': 'off', // 忽略检测换行风格 详情在这 ↑
    'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
    'prefer-destructuring': ['error', { object: true, array: false }], // 允许数组通过下标取值
    'no-use-before-define': ['error', { functions: false }], // 允许function声明的函数在定义前使用
    'func-names': 'off', // 允许使用function声明匿名函数
    // 'max-len': ['error', { code: 200 }], // 每一行最多200个字符
    'max-len': 'off', // 每一行最多200个字符
    'import/no-extraneous-dependencies': 'off', // 允许import开发依赖
    'vue/html-self-closing': 'off', // 允许空内容使用闭合标签
    'vue/singleline-html-element-content-newline': 'off', // 关闭单行标签的强制换行
    'no-unused-expressions': 'off', // 允许出现未使用的表达式
    'import/extensions': 'off', // 允许import时省略扩展名
    'no-restricted-syntax': 'off', // 关闭 '禁止使用指定的语法'
    eqeqeq: 'off', // 关闭强制使用全等于
    'no-plusplus': 'off', // 允许使用++
    'import/no-cycle': 'off', // 允许循环引入
    'consistent-return': 'off', // 允许任意return值
    'import/no-unresolved': [2, { ignore: ['^@/'] }], // @ 是设置的路径别名
    // 去掉store报错情况
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: 'commit' }],
    'no-underscore-dangle': 'off', // 允许使用下划线开头的变量名
    'no-return-assign': ['error', 'except-parens'], // return 后如果有赋值语句，则必须加括号
    'no-param-reassign': 'off', // 允许修改方法中的参数
    'import/prefer-default-export': 'off', // 模块只输出一个变量时，是否需要添加default
  },
  globals: {
    uni: true,
    $: true,
  },
};
