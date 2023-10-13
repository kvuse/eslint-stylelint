const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const chalklog = {
  success: (text) => console.log('\x1b[32m%s\x1b[0m', text),
  error: (text) => console.log('\x1b[41m%s\x1b[0m', text),
  warning: (text) => console.log('\x1b[31m%s\x1b[0m', text),
};

const copyFiles = ({
  readFile, writeFile, finishText, errorText,
}) => {
  const sourceStream = fs.createReadStream(readFile);
  const destStream = fs.createWriteStream(writeFile);

  sourceStream.pipe(destStream)
    .on('finish', () => {
      chalklog.success(finishText);
    })
    .on('error', () => {
      chalklog.warning(errorText);
    });
};

const resolveDir = path.dirname(require.resolve('./'));

const isMac = resolveDir.includes('/');
const currentDirArr = isMac ? resolveDir.split('/node_modules/') : resolveDir.split('\\node_modules\\');
const currentDir = currentDirArr.length > 1
  ? currentDirArr[0] : resolveDir.split(isMac ? '/packages/' : '\\packages\\')[0];
const command = `cd ${currentDir} && husky install .husky`;

exec(command, async (error) => {
  if (error) {
    chalklog.error('执行命令时出错，请执行一下命令：');
    chalklog.warning('cd node_modules/@kvuse/commitlint-config');
    chalklog.warning('npm run preinstall');
    return;
  }

  const existFile = fs.existsSync(`${currentDir}/.husky/commit-msg`);
  if (!existFile) {
    exec(`cd ${currentDir} && npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`, (err) => {
      if (err) {
        chalklog.error('添加commit-msg失败，请手动添加');
      } else {
        chalklog.success('添加.husky成功');
      }
    });
  }

  copyFiles({
    readFile: './.commitlintrc.json',
    writeFile: `${currentDir}/.commitlintrc.json`,
    finishText: '添加.commitlintrc.json成功',
    errorText: '添加.commitlintrc.json失败，请在根目录创建.commitlintrc.json',
  });
});
