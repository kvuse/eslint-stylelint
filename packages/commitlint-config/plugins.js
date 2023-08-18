module.exports = [
  {
    rules: {
      'subject-no-number-sequence': (parsed, when) => {
        const subject = parsed.header;
        const regex = /^\s*([A-Za-z0-9])+$/;
        const hasNumberSequence = !regex.test(subject);
        console.log('hasNumberSequence: ', hasNumberSequence);

        return [
          when && hasNumberSequence,
          '不能使用连续的数字或者字母',
        ];
      },
      'type-empty': (parsed, when) => {
        const { type } = parsed;
        return [
          when && type,
          'type may not be empty: 提交类型不能为空',
        ];
      },
      // 'subject-empty': (parsed, when) => {
      //   const { type } = parsed;
      //   return [
      //     when && type,
      //     'subject may not be empty: 提交内容不能为空',
      //   ];
      // },
    },
  },
];
