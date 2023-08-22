const typeEnum = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'config', 'chore', 'debug'];
function hasTypeEnum(parsed) {
  const { type, header } = parsed;
  const finalType = type || header?.split(': ')[0];
  return typeEnum.includes(finalType);
}

function hasSpace(parsed) {
  const { type, header } = parsed;
  const finalType = type || header;
  const isHasType = typeEnum.some((item) => finalType.includes(`${item}:`));
  if (isHasType) return !/:\s/.test(finalType);
  return false;
}

module.exports = [
  {
    rules: {
      'type-empty': (parsed, when) => {
        const { type, header } = parsed;
        const finalType = type || header?.split(': ')[0];
        if (hasSpace(parsed)) console.log('[feat、fix、docs、style、refactor、test、revert、config、chore、debug] 冒号后要加空格');
        if (!hasTypeEnum(parsed)) console.log('提交类型必须是[feat、fix、docs、style、refactor、test、revert、config、chore、debug]之一');
        if (!finalType) console.log('提交类型不能为空');
        return [
          when && type,
          'type may not be empty: 提交类型不能为空',
        ];
      },
      'subject-empty': (parsed, when) => {
        const { subject, header } = parsed;
        const finalSubject = subject || header?.split(': ')[1];
        if (!finalSubject && hasTypeEnum(parsed)) console.log('提交内容不能为空');
        return [
          when && subject,
          'subject may not be empty: 提交内容不能为空',
        ];
      },
      'subject-min-length': (parsed, when) => {
        const { subject = '' } = parsed;
        if (subject && subject?.length < 3) console.log('提交内容不能小于3个字符');
        return [
          when && subject?.length >= 3,
          'subject must not be shorter than 3 characters: 提交内容不能小于3个字符',
        ];
      },
      'subject-no-number-sequence': (parsed, when) => {
        const { subject } = parsed;
        const regex = /^[A-Za-z0-9]+$/;
        const hasNumberSequence = !regex.test(subject);
        if (!hasNumberSequence && subject) console.log('提交内容不能使用连续的数字或者字母');
        return [
          when && hasNumberSequence && subject,
          '不能使用连续的数字或者字母',
        ];
      },
    },
  },
];
