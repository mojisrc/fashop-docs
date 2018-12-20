# 系统
## 系统信息

```html
GET - /system/info
```

```Json
"os": "Darwin", // 服务器操作系统
"upload_max_filesize": "2M", // 文件上传限制
"post_max_size": "8M", // 最大post
"max_input_time": "-1", // 以秒为单位对通过POST/GET/PUT方式接受数据时间进行限制
"memory_limit": "128M", // PHP允许定义内存使用限额
"domain": "http://127.0.0.1", // 服务器域名
"ip": "127.0.0.1", // 服务器ip
"php_version": "7.2.1", // php版本
"zend_version": "3.2.0",// zend版本
"mysql_version": "5.7.18",// mysql版本
"datetime": "2018-03-02 13:22:07",// 当前服务器时间
"swoole_version": "1.9.23",// swoole版本
"easyswoole_version": "2.0.1",// easyswoole版本
"port": 9510,// fashop占用端口
"fashop_version",// fashop版本
```
