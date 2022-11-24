# @kvuse/eslint-config

- 开箱即用，配置方便，引入即可使用
- 自动修复格式
- 适用于JavaScript、Vue

## 用法

### 安装

```js
pnpm add @kvuse/eslint-config -D
```

## 配置 `.eslintrc.json`  

### 根目录添加`.eslintrc.json`  

```json
{
  "extends": ["@kvuse/eslint-config"]
}
```

## `vscode` 配置自动修复

- 安装 `Vscode Eslint` 插件  
- 创建.vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 其他问题

> 如果出现没有效果, 没有eslint验证

- 安装`eslint`
  
  ```js
   pnpm install eslint -D
  ```

- `.vscode/settings.json`添加eslint工作目录  
  
  ```json
   "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
   ```

## 添加其他规则  

如果需要其他规则，请自行在`.eslintrc.json`配置

```json
{
  "extends": ["@kvuse/eslint-config"],
  "rules":{
    // ...
  }
}
```
