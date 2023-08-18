module.exports = [
  {
    rules: {
      'type-empty': (parsed, when) => {
        const { type } = parsed;
        return [
          when && type,
          'type may not be empty: 提交类型不能为空',
        ];
      },
      'subject-empty': (parsed, when) => {
        const { type } = parsed;
        return [
          when && type,
          'subject may not be empty: 提交内容不能为空',
        ];
      },
      'subject-min-length': (parsed, when) => {
        const { subject = '' } = parsed;
        console.log('subject: ', subject);
        return [
          when && subject.length >= 3,
          'subject must not be shorter than 3 characters: 提交内容不能小于3个字符',
        ];
      },
      'subject-no-number-sequence': (parsed, when) => {
        const { subject } = parsed;
        const regex = /^[A-Za-z0-9]+$/;
        const hasNumberSequence = !regex.test(subject);
        return [
          when && hasNumberSequence,
          '不能使用连续的数字或者字母',
        ];
      },
    },
  },
];
