# commitlint-config 提交验证

## 安装

- 如果根目录没有`package.json` ，先添加，如果有请跳过该步骤
  
```js
pnpm init
```

- 安装依赖

```js
pnpm add @kvuse/commitlint-config @commitlint/cli -D
```

## 使用

使用命令添加配置文件

```js
cd node_modules/@kvuse/commitlint-config

pnpm run preinstall
```

> 执行命令成功提示

```js
> @kvuse/commitlint-config@1.1.0 preinstall
> node prepare

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
  'docs', // 文档（documentation）
  'style', // 格式
  'refactor', // 重构
  'test', // 增加测试
  'revert', // 回滚
  'config', // 构建过程或辅助工具的变动
  'chore', // 其他改动
  'debug', // 调试
],
```

- 开头必须有上述字段，例如：`feat: 添加xx功能`(字段: 冒号后要加空格)
- 提交内容不能小于三个字符
