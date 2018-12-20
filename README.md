## 为FaShop撰写文档的环境准备

首先得有 [node](https://nodejs.org/en/)，并确保 node 版本是 8.10 或以上。（mac 下推荐使用 [nvm](https://github.com/creationix/nvm) 来管理 node 版本）

```bash
node -v
8.1x
```

## 安装VuePress
> 如果没有装yarn，请通过搜索引擎 "yarn如何安装"
```bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

```
#### 写作
```bash
yarn docs:dev # 或者：npm run docs:dev
```
#### 要生成静态的 HTML 文件，运行：
```bash
yarn docs:build # 或者：npm run docs:build
```
