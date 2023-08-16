# commitlint-config

## 提交验证

## 安装

- 如果根目录没有`package.json` ，先添加，如果请跳过
  
```js
pnpm init
```

- 安装依赖

```js
pnpm add @kvuse/commitlint-config @commitlint/cli -D
```

## 使用

1. 使用命令添加配置文件

```js
cd node_modules/@kvuse/commitlint-config

pnpm run preinstall
```

2. 手动添加
  
根目录添加`.commitlintrc.json`

```json
{
  "extends": ["@kvuse/commitlint-config"]
}
```

`.husky`中添加`commit-msg`

```js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
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

如果出现一下报错就成功了

```js
⧗   input: Feat更
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```
