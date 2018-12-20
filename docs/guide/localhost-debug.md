# 本地调试
## nginx 如何配置
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



## 你可能会遇到的问题：

1.如果nginx也配置完了，当访问你的服务器或者虚拟机时出现无法访问，请检查你的nginx是否开启：

```shell
[注释：查询nginx状态]
[root@fashop fashop] service nginx status

[注释：启动nginx]
[root@fashop fashop] service nginx start

[注释：重新启动nginx]
[root@fashop fashop] service nginx restart

[注释：停止nginx]
[root@fashop fashop] service nginx stop

[假如你不想每次开机都启动一下nginx，可设置nginx开机自动启动]
[root@fashop fashop] chkconfig nginx on

[同理,假如你不想每次开机都启动一下php-fpm，可设置php-fpm开机自动启动]
[root@fashop fashop] chkconfig php-fpm on

```

2.假如你的nginx配置好并开启了，但是你访问你的fashop还是无法访问，那么请检查你的linux的防火墙是否关闭：

```
[查看防火墙状态]
[root@fashop fashop] firewall-cmd --state

[关闭防火墙]
[root@fashop fashop] systemctl stop firewalld.service

[开启防火墙]
[root@fashop fashop] systemctl start firewalld.service

[禁止开机启动启动防火墙]
[root@fashop fashop] systemctl disable firewalld.service
```

3.nginx和防火墙都配置好了，但是你发现 [http://xxx.xxx.xxx.xxx:9510/install](http://xxx.xxx.xxx.xxx:9510/install) 可以访问安装目录， [http://xxx.xxx.xxx.xxx/install](http://xxx.xxx.xxx.xxx/install) 不能访问，使用Nginx端口转发出现502错误，那么可能是 **SELinux** 问题：



   什么是SELinux?SELinux(Security-Enhanced Linux) 是美国国家安全局（NSA）对于强制访问控制的实现，是
    Linux历史上最杰出的新安全子系统。

   **解决办法： 关闭SELiux。**

```
[查看selinux状态]
[root@fashop fashop] sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      2

[临时关闭selinux]
[root@fashop fashop] setenforce 0

[永久关闭selinux：将SELINUX=enforcing改为SELINUX=disabled 设置后需要重启才能生效]
[root@fashop fashop] vi /etc/selinux/config
```



