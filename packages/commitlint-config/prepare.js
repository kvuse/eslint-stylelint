const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const copyFiles = ({
  readFile, writeFile, finishText, errorText,
}) => {
  const sourceStream = fs.createReadStream(readFile);
  const destStream = fs.createWriteStream(writeFile);

  sourceStream.pipe(destStream)
    .on('finish', () => {
      console.log(finishText);
    })
    .on('error', () => {
      console.log(errorText);
      console.error('请在根目录创建.commitlintrc.json');
    });
};

const resolveDir = path.dirname(require.resolve('./'));

const currentDirArr = resolveDir.split('/node_modules/');
const currentDir = currentDirArr.length > 1 ? currentDirArr[0] : resolveDir.split('/packages/')[0];
const command = `cd ${currentDir} && husky install .husky`;

exec(command, async (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错：${error}`);
    return;
  }
  if (stderr) {
    console.error(`命令错误：${stderr}`);
    return;
  }

  const existFile = fs.existsSync(`${currentDir}/.husky/commit-msg`);
  if (!existFile) {
    exec(`cd ${currentDir} && npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`, (err) => {
      if (err) {
        console.error('添加commit-msg失败，请手动添加');
      } else {
        console.error('添加.husky成功');
      }
    });
    // 添加postinstall命令
    exec(`cd ${currentDir} && npm pkg set scripts.postinstall="cd node_modules/@kvuse/commitlint-config && npm run preinstall"`, (err) => {
      if (err) {
        console.error('添加scripts失败，请在package.json添加postinstall命令');
      } else {
        console.error('添加scripts成功');
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
