# 安装配置

## 安装

```bash
npm install
npm start
```
- 如果没安装umi 请先安装
```bash
npm install umi -g
```

## 配置

修改接口域名，根目录下 config/config.js 文件

```
proxy: {
      '/admin/': {
         target: 'https://demo.fashop.cn',
         changeOrigin: true,
      },
    },
```
