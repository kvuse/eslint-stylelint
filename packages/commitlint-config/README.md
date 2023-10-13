# commitlint-config 提交验证

## 安装使用

- 如果根目录没有`package.json` ，先添加，如果有请跳过该步骤
  
```js
pnpm init
```

- 安装依赖

```js
pnpm add @kvuse/commitlint-config @commitlint/cli -D
```

- 使用
  
> **⚠️ 仅第一次安装需要，如果已安装请跳过**

使用命令添加配置文件

```js
cd node_modules/@gt/commitlint-config

pnpm run preinstall
```

> 执行命令成功提示

```js
添加.commitlintrc.json成功
添加.husky成功
```

## 添加提交`eslint`验证

- `package.json`添加`lint`
  
  **如果有请忽略**

  ```js
    "scripts": {
      "lint": "eslint ."
    },
  ```

- `.husky` 添加 `npm run lint`命令
  
    ```js
    // .husky/commit-msg
    #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  npx --no -- commitlint --edit "$1"
  npm run lint
  ```

## 测试

```js
git add .
git commit -m 'Feat更'
```

如果出现以下报错就成功了

```js
⧗   input: Feat更
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

## 规则

```js
[
  'feat', // 新功能（feature）
  'fix', // 修补bug
  'docs', // 文档
  'style', // 格式
  'refactor', // 重构
  'test', // 增加测试
  'revert', // 回滚
  'config', // 配置
  'chore', // 其他改动
  'debug', // 调试
  'build', // 打包构建
  'release', // 发布
],
```

- 提交类型不能为空，必须包含： `[feat, fix, docs, style, refactor, test, revert, config, chore, debug]`
- 开头必须有上述字段，例如：`feat: 添加xx功能`(字段: 冒号后要加空格)
- 提交内容不能小于三个字符
- 不能连续的字符或者数字

## 问题

如果提交出现`command not found`

```js
.husky/commit-msg: line 4: npx: command not found
```

需要配置环境变量

这里用`nvs`举例

```js
export NVS_HOME="$HOME/.nvs"
[ -s "$NVS_HOME/nvs.sh" ] && . "$NVS_HOME/nvs.sh"  # 这里是判断 nvs.sh 文件是否存在并执行
```

**如果不行，请重启vscode或者重启电脑使环境变量生效**