# 接口、前端分离
## nginx 如何配置
当您想二次开发更自由或者前后端分离，请参考一下配置。
- 无证书情况的接口配置
```bash
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
    # 输入您的域名 api.fashop.cn 只为演示代码，如果您没有域名可以在本地的host里进行模拟，加一行 127.0.0.1 api.fashop.cn，这样就拦截了这个域名跳到本地项目，请尽可能的模拟线上环境
    server_name  api.fashop.cn;

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
}



```
- 有证书的接口配置
```bash
server{
    listen 443;
    server_name api.fashop.cn;
    ssl on;
    root /var/www/fashop/;
    index index.html index.htm;
    ssl_certificate   /etc/nginx/cert/fashop.pem;
    ssl_certificate_key  /etc/nginx/cert/fashop.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    
    # gzip用来压缩前端文件体积
    gzip on;
    gzip_min_length  1024;
    gzip_buffers     4 16k;
    gzip_comp_level 9;
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/javascript;
    gzip_vary on;

    # 上传文件大小
    client_max_body_size 5m;
    # 输入您的域名 api.fashop.cn 只为演示代码，如果您没有域名可以在本地的host里进行模拟，加一行 127.0.0.1 api.fashop.cn，这样就拦截了这个域名跳到本地项目，请尽可能的模拟线上环境

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
}


```
- 无证书前端配置
```bash
server{
    gzip on;
    gzip_min_length  1024;
    gzip_buffers     4 16k;
    gzip_comp_level 9;
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/javascript;
    gzip_vary on;

    listen 80;
    server_name  admin.fashop.cn;
    root /var/www/fashop-admin/;
    index index.html;

    location ~.*\.(gif|jpg|jpeg|png|txt|mp3|mp4|rmvb|mkv|avi|mov|MOV)$ {
        root /var/www/fashop-admin/前端build的目录/;
        # 什么是build ? node 编译过的后台前端文件夹目录
    } 
    location / {
        root /var/www/fashop-admin/前端build的目录/;
        try_files $uri /index.html;
    }
}

```
- 有证书前端配置
```bash
server{
    listen 443;
    server_name admin.fashop.cn;
    root /var/www/fashop-admin/;
    index index.html;
    
    ssl on;
    ssl_certificate   /etc/nginx/cert/fashop.pem;
    ssl_certificate_key  /etc/nginx/cert/fashop.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    
    gzip on;
    gzip_min_length  1024;
    gzip_buffers     4 16k;
    gzip_comp_level 9;
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/javascript;
    gzip_vary on;

    location ~.*\.(gif|jpg|jpeg|png|txt|mp3|mp4|rmvb|mkv|avi|mov|MOV)$ {
        root /var/www/fashop-admin/前端build的目录/;
        # 什么是build ? node 编译过的后台前端文件夹目录
    } 
    location / {
        root /var/www/fashop-admin/前端build的目录/;
        try_files $uri /index.html;
    }
}

```
