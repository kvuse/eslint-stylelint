# @kvuse/stylelint-config

- 开箱即用，配置方便，引入即可使用
- 自动修复样式格式, 自动修复Vue组件style样式
- 适用于Scss, Css, Less, Vue, Sass

## 用法

### 安装

```js
pnpm add @kvuse/stylelint-config -D
```

## 配置 `.stylelintrc.json`  

### 根目录添加`.stylelintrc.json`

```json
{
  "extends": ["@kvuse/stylelint-config"]
}
```

## `vscode` 配置自动修复

- 安装 `Vscode Stylelint` 插件  
- 创建.vscode/settings.json

```json
{
  "stylelint.validate": ["css", "less", "scss", "vue", "sass"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## 其他问题

> 如果出现没有效果, 没有stylelint验证

**⚠️ 安装15版本以下**

- 安装`stylelint`
  
  ```js
   pnpm install stylelint@^15.11.0 -D
  ```

## 添加其他规则  

如果需要其他规则，请自行在`.stylelintrc.json`配置

```json
{
  "extends": ["@kvuse/stylelint-config"],
  "rules":{
    // ...
  }
}
```
