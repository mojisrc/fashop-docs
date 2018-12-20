# 安装

## 软件包下载

下载地址：http://statics.fashop.cn/download/fashop-v1.0.0.tar.gz

或者使用命令行下载：

```bash
wget http://statics.fashop.cn/download/fashop-v1.0.0.tar.gz
```

解压：

```bash
tar -zxvf fashop-v1.0.0.tar.gz fashop
```


## 放置根目录

```bash
# 进到fashop项目根目录，fashop是你刚下载文件解压后的路径
cd fashop

# 安装
composer install

# 启动项目
php fashop start --d
```

## nginx配置站点
```bash
# 本地调试模拟域名
server{
    # gzip用来压缩前端文件体积
    gzip on;
    gzip_min_length  1024;
    gzip_buffers     4 16k;
    gzip_comp_level 9;
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/javascript;
    gzip_vary on;

    # 上传文件大小
    client_max_body_size 5m;
    listen       80;
    # 输入您的域名 t.fashop.cn 只为演示代码，如果您没有域名可以在本地的host里进行模拟，加一行 127.0.0.1 t.fashop.cn，这样就拦截了这个域名跳到本地项目，请尽可能的模拟线上环境
    server_name  t.fashop.cn;

    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;

    # 映射到swoole端口
    location / {
        proxy_pass http://127.0.0.1:9510;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
        proxy_read_timeout 300s;

    }
    # 上传资源
    location ~/Upload/.*\.(gif|jpg|jpeg|png|txt|mp3|mp4|rmvb|mkv|avi|mov|MOV|json|ico|css|js)$ {
        root /var/www/fashop/;
    }

    # 前端项目资源匹配
    location ~/manifest.json$ {
         root /var/www/fashop/a/;
    }
    # 前端项目资源匹配
    location ~/favicon.ico$ {
          root /var/www/fashop/a/;
    }
    # 前端项目资源匹配
    location ~/logo.png {
          root /var/www/fashop/a/;
    }
    # 前端项目资源匹配
    location ~/logo-black.png {
          root /var/www/fashop/a/;
    }
    # 前端项目资源匹配
    location ~/static/.*\.(gif|jpg|jpeg|png|txt|mp3|mp4|rmvb|mkv|avi|mov|MOV|json|ico|css|js)$ {
        root /var/www/fashop/a/;
    }
    # 前端项目资源匹配
    location ~(/a$|/a/) {
        root /var/www/fashop/;
        try_files $uri /a/index.html;
    }
}
```

## 安装数据库
```text
访问您的域名，如：t.fashop.cn/install 进行安装
```
> 安装完毕之后请先php fashop stop 再 php fashop start --d 
  因为1.0版本存在无法动态加载数据库配置的问题，所以先临时这么解决，官方下个版本会处理掉


## 环境要求
- PHP>=7.2
- Linux系统或MacOs
- Mysql>=5.7
- Swoole大于等于1.9.23，小于等于2.2.0
**如果还不会安装请进群**

QQ群：632466687
