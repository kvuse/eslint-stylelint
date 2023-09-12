const plugins = require('./plugins');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（
        'style', // 格式
        'refactor', // 重构
        'test', // 增加测试
        'revert', // 回滚
        'config', // 配置
        'chore', // 其他改动
        'debug', // 调试
        'build', // 打包
      ],
    ],
    'type-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    // 'subject-full-stop': [0, 'never'],
    'subject-min-length': [2, 'always', 3], // 至少3个字符
    'subject-no-number-sequence': [2, 'never'], // 禁止使用连续数字或字母
  },
  plugins,
};
