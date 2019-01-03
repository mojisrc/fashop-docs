# 编辑器

Webstorm的话在根目录下创建webpack.config.js，可以索引到别名指向的文件目录

```
module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src/'),
        }
    }
};

```