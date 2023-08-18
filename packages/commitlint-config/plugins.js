module.exports = [
  {
    rules: {
      'type-empty': (parsed, when) => {
        const { type } = parsed;
        const typeEnum = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'config', 'chore', 'debug'];
        if (!type) console.log('提交类型不能为空');
        else if (!typeEnum.includes(type)) console.log('类型必须是[feat、fix、docs、style、refactor、test、revert、config、chore、debug]之一');
        return [
          when && type,
          'type may not be empty: 提交类型不能为空',
        ];
      },
      'subject-empty': (parsed, when) => {
        const { type } = parsed;
        if (!type) console.log('提交内容不能为空');
        return [
          when && type,
          'subject may not be empty: 提交内容不能为空',
        ];
      },
      'subject-min-length': (parsed, when) => {
        const { subject = '' } = parsed;
        if (subject.length < 3) console.log('提交内容不能小于3个字符');
        return [
          when && subject.length >= 3,
          'subject must not be shorter than 3 characters: 提交内容不能小于3个字符',
        ];
      },
      'subject-no-number-sequence': (parsed, when) => {
        const { subject } = parsed;
        const regex = /^[A-Za-z0-9]+$/;
        const hasNumberSequence = !regex.test(subject);
        if (!hasNumberSequence) console.log('提交内容不能使用连续的数字或者字母');
        return [
          when && hasNumberSequence,
          '不能使用连续的数字或者字母',
        ];
      },
    },
  },
];
