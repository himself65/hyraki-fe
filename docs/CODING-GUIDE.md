# Hyraki-fe 开发规范

## 基本情况

- 使用 `yarn` 进行 `node_modules` 版本管理，`yarn.lock` 文件供服务器锁定版本

- 需要遵守 ESLint 规范，使用 `yarn lint` 进行检查，
`warning` 问题可以忽略 

## 开发环境

- `node v10.x`
- `yarn @latest`
- `node-gyp @latest`

### Dev 搭建

```bash
yarn global add node-gyp && yarn install
yarn dev
# 后台挂起
```
