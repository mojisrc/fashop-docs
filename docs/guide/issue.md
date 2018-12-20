# 常见问题

## 如何安装swoole

1.编译安装

`Swoole`扩展是按照`PHP`标准扩展构建的。使用`phpize`来生成编译检测脚本，`./configure`来做编译配置检测，`make`进行编译，`make install`进行安装。

- **请下载releases版本的swoole，直接从github主干上拉取最新代码可能会编译不过**
- 如果当前用户不是`root`，可能没有`PHP`安装目录的写权限，安装时需要`sudo`或者`su`
- 如果是在`git`分支上直接`git pull`更新代码，重新编译前务必要执行`make clean`

2.安装准备

安装swoole前必须保证系统已经安装了下列软件

>php-5.3.10 或更高版本，FaShop 要求的php版本是>=7.2
>gcc-4.4 或更高版本
>make
>autoconf
>pcre (centos系统可以执行命令：yum install pcre-devel)

3.下载地址，注意了请下载安装`1.10.x`版本的发行包，FaShop是基于`1.10.x`版本开发的，推荐使用1.10.5版本。

- https://github.com/swoole/swoole-src/releases
- http://pecl.php.net/package/swoole
- http://git.oschina.net/swoole/swoole

下载源代码包后，在终端进入源码目录，执行下面的命令进行编译和安装

```bash
cd swoole
sudo phpize (ubuntu 没有安装phpize可执行命令：sudo apt-get install php-dev来安装phpize)
sudo ./configure
sudo make
sudo make install
强烈希望： /usr/local/php/bin/php -v 可以查看php版本：[/usr/local/php/bin/php 根据自己linux系统php安装目录决定]
所以第二步sudo phpize 最好使用：[root@fashop fashop] /usr/local/php/bin/phpize 命令
同理第三步sudo ./configure最好使用：
[root@fashop fashop]./configure  --with-php-config=/usr/local/php/bin/php-config 命令[/usr/local/php/bin/ 根据自己Linux php目录决定，同第二步路径]
这样swoole 就会被安装在 /usr/local/php/lib/php/extensions/no-debug-non-zts-20170718/ 下[no-debug-non-zts-20170718文件夹不是一模一样的] ，否则则会被安装在/usr/lib64/php/modules/ 下。
以上会能帮助你减少一些安装出现的问题 假如你对Linux不是很熟的话，一定要仔细阅读强烈希望的内容。
```

4.完整编译示例

以下脚本会下载并编译master分支的swoole源码

```bash
mkdir -p ~/build && \
cd ~/build && \
rm -rf ./swoole-src && \
curl -o ./tmp/swoole.tar.gz https://github.com/swoole/swoole-src/archive/master.tar.gz -L && \
tar zxvf ./tmp/swoole.tar.gz && \
mv swoole-src* swoole-src && \
cd swoole-src && \
phpize && \
./configure \
--enable-coroutine \
--enable-openssl  \
--enable-http2  \
--enable-async-redis \
--enable-sockets \
--enable-mysqlnd && \
make clean && make && sudo make install
```

5.PECL，不建议这么安装因为总能遇到一些问题

swoole项目已收录到PHP官方扩展库，除了手工下载编译外，还可以通过PHP官方提供的pecl命令，一键下载安装swoole

```bash
pecl install swoole
```

6.配置php.ini

编译安装成功后，修改php.ini加入

```bash
extension=swoole.so
```

通过`php -m`或`phpinfo()`来查看是否成功加载了swoole，如果没有可能是`php.ini`的路径不对，可以使用`php --ini`来定位到`php.ini`的绝对路径。

[Swoole文档](https://wiki.swoole.com/wiki/page/6.html)



## 如何安装ImageMagick

1.安装编译工具：

   ```
   [root@fashop fashop] yum install wget  make gcc gcc-c++ gtk+-devel zlib-devel openssl openssl-devel pcre-devel kernel keyutils  patch perl
   ```

2.安装ImageMagick

   ```bash
   [注释：下载ImageMagick]
   [root@fashop fashop] wget http://www.imagemagick.org/download/ImageMagick.tar.gz

   [注释：解压]
   [root@fashop fashop] tar zxvf ImageMagick.tar.gz

   [注释：进入安装目录]
   [root@fashop fashop] cd ImageMagick-7.0.8-11

   [注释：配置。 强烈希望：使用命令 ./configure  --with-php-config=/usr/local/php/bin/php-config 具体原因参考：如何安装swoole第三步的强烈希望]
   [root@fashop fashop] ./configure [强烈希望使用命令：./configure  --with-php-config=/usr/local/php/bin/php-config]

   [注释：编译]
   [root@fashop fashop] make

   [注释：安装]
   [root@fashop fashop] make install
   ```

3.安装imagick

   ```
   [注释：下载imagick]
   [root@fashop fashop] wget http://pecl.php.net/get/imagick-3.4.3.tgz

   [注释：解压]
   [root@fashop fashop] tar zxvf imagick-3.4.3.tgz

   [注释：进入安装目录]
   [root@fashop fashop] cd imagick-3.4.3

   [注释：用phpize生成configure配置文件。这是多次强调的强烈希望的命令行代码 一般是 phpize 命令 具体原因参考：如何安装swoole第三步的强烈希望]
   [root@fashop fashop] /usr/local/php/bin/phpize

   [注释：配置。这是多次强调的强烈希望的命令行代码 一般是 ./configure 命令 具体原因参考：如何安装swoole第三步的强烈希望]
   [root@fashop fashop] ./configure  --with-php-config=/usr/local/php/bin/php-config

   [注释：编译]
   [root@fashop fashop] make

   [注释：安装]
   [root@fashop fashop] make install

   备注：在安装过程中出现错误，一般是由于缺少编译工具包导致，可根据提示参照第一步安装相应的工具包即可
   安装完成之后，出现下面的界面，记住以下路径，后面会用到
   Installing shared extensions:     /usr/local/php/lib/php/extensions/no-debug-non-zts-20170718/ #imagick模块路径
   ```

4.配置php支持imagick， 编辑配置文件/etc/php.ini，在最后一行添加以下内容：extension=imagick.so

5.测试：可以使用phpinfo(); 或者php -m查看是否加载了 imagick。如果没有 重启php服务试试。

6.命令行注释：

   ```
   service php-fpm restart  	#重启php服务
   service nginx restart  		#重启nginx
   ```



## 如何安装Composer

Composer 需要 PHP 5.3.2+ 才能运行。

```bash
curl -sS https://getcomposer.org/installer | php
```

这个命令会将 `composer.phar` 下载到当前目录。PHAR（PHP 压缩包）是一个压缩格式，可以在命令行下直接运行。

你可以使用 `--install-dir` 选项将 Composer 安装到指定的目录，例如：

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=bin
```

当然也可以进行全局安装：

```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

在 Mac OS X 下也可以使用 homebrew 安装：

```bash
brew install composer
```

注释：如果composer install或者update慢的情况，可以切换镜像到国内：

```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```



## 如何配置Linux服务器及安装php环境

首先更新系统软件$ yum update

安装nginx

1.安装nginx源

```bash
yum localinstall http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

2.安装nginx

```bash
yum install nginx
```

3.启动nginx

```bash
service nginx start
```

Redirecting to /bin/systemctl start  nginx.service

4.访问http://你的ip/

如果成功安装会出来nginx默认的欢迎界面

安装MySQL5.7.*

1.安装mysql源

```bash
yum localinstall  http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm
```

2.安装mysql

```bash
yum install mysql-community-server
```

确认一下mysql的版本，有时可能会提示mysql5.6

3.安装mysql的开发包，以后会有用

```bash
yum install mysql-community-devel
```

4.启动mysql

```bash
service mysqld start
```

Redirecting to /bin/systemctl start  mysqld.service

5.查看mysql启动状态

```bash
service mysqld status
```

出现pid

证明启动成功

6.获取mysql默认生成的密码

```bash
grep 'temporary password' /var/log/mysqld.log
```

2018-08-28T16:32:09.104758Z 1 [Note] A temporary password is generated for root@localhost: **%G1Rgns!dD!v**

加粗的就是生成的密码

7.换成自己的密码

```bash
mysql -uroot -p
```

Enter password:输入上面的密码

成功输入后进入一下步，这里你估计会输入 好几次才进去

8.更换密码

```bash
mysql>  ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';
```

这个密码一定要足够复杂，不然会不让你改，提示密码不合法;

9.退出mysql;

```bash
mysql> quit;
```

10.用新密码再登录，试一下新密码

```bash
mysql -uroot -p
```

Enter password:输入你的新密码

11.确认密码正确后，退出mysql;

```bash
mysql> quit;
```

编译安装php7.2.0

1.下载php72源码包

```bash
cd /root & wget -O php72.tar.gz http://cn2.php.net/get/php-7.2.0.tar.gz/from/this/mirror
```

2.解压源码包

```bash
tar -xvf php72.tar.gz
```

3.进入解压的目录

```bash
cd php72.tar.gz
```

如果这个目录名字不对，以你当时解压的名字稳准

4.安装php依赖包

```bash
yum install libxml2 libxml2-devel openssl openssl-devel bzip2 bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel libmcrypt libmcrypt-devel readline readline-devel libxslt libxslt-devel
```

5.编译配置，这一步我们会遇到很多configure error，我们一一解决，基本都是相关软件开发包没有安装导致

```bash
./configure \
--prefix=/usr/local/php \
--with-config-file-path=/etc \
--enable-fpm \
--with-fpm-user=nginx  \
--with-fpm-group=nginx \
--enable-inline-optimization \
--disable-debug \
--disable-rpath \
--enable-shared  \
--enable-soap \
--with-libxml-dir \
--with-xmlrpc \
--with-openssl \
--with-mcrypt \
--with-mhash \
--with-pcre-regex \
--with-sqlite3 \
--with-zlib \
--enable-bcmath \
--with-iconv \
--with-bz2 \
--enable-calendar \
--with-curl \
--with-cdb \
--enable-dom \
--enable-exif \
--enable-fileinfo \
--enable-filter \
--with-pcre-dir \
--enable-ftp \
--with-gd \
--with-openssl-dir \
--with-jpeg-dir \
--with-png-dir \
--with-zlib-dir  \
--with-freetype-dir \
--enable-gd-native-ttf \
--enable-gd-jis-conv \
--with-gettext \
--with-gmp \
--with-mhash \
--enable-json \
--enable-mbstring \
--enable-mbregex \
--enable-mbregex-backtrack \
--with-libmbfl \
--with-onig \
--enable-pdo \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-zlib-dir \
--with-pdo-sqlite \
--with-readline \
--enable-session \
--enable-shmop \
--enable-simplexml \
--enable-sockets  \
--enable-sysvmsg \
--enable-sysvsem \
--enable-sysvshm \
--enable-wddx \
--with-libxml-dir \
--with-xsl \
--enable-zip \
--enable-mysqlnd-compression-support \
--with-pear \
--enable-opcache
```

下面列取一些错误解决方案，如果没遇见错误请忽略：

configure error:

错误1.configure: error: xml2-config not found. Please check your libxml2 installation.

解决：

```bash
yum install libxml2 libxml2-devel
```

错误2.configure: error: Cannot find OpenSSL's `<evp.h>`

解决：

```bash
yum install openssl openssl-devel
```

错误3.configure: error: Please reinstall the BZip2 distribution

解决：

```bash
yum install bzip2 bzip2-devel
```

错误4.configure: error: Please reinstall the libcurl distribution - easy.h should be in `<curl-dir>`/include/curl/

解决：

```bash
yum install libcurl libcurl-devel
```

错误5.If configure fails try --with-webp-dir=`<DIR>` configure: error: jpeglib.h not found.

解决：

```bash
yum install libjpeg libjpeg-devel
```

错误6.If configure fails try --with-webp-dir=`<DIR>`

checking for jpeg_read_header in -ljpeg... yes

configure: error: png.h not found.

解决：

```bash
yum install libpng libpng-devel
```

错误7.If configure fails try --with-webp-dir=`<DIR>`

checking for jpeg_read_header in -ljpeg... yes

checking for png_write_image in -lpng... yes

If configure fails try --with-xpm-dir=`<DIR>`

configure: error: freetype-config not found.

解决：

```bash
yum install freetype freetype-devel
```

错误8.configure: error: Unable to locate gmp.h

```bash
$ yum install gmp gmp-devel
```

错误9.configure: error: mcrypt.h not found. Please reinstall libmcrypt.

解决：

```bash
yum install libmcrypt libmcrypt-devel
```

错误10.configure: error: Please reinstall readline - I cannot find readline.h

解决：

```bash
yum install readline readline-devel
```

错误11.configure: error: xslt-config not found. Please reinstall the libxslt >= 1.1.0 distribution

解决：

```bash
yum install libxslt libxslt-devel
```



6.继续安装php，编译与安装

```
make && make install
```

这里要make好久，要耐心一下

7.添加 PHP 命令到环境变量

```bash
vim /etc/profile
```

在末尾加入

```bash
PATH=$PATH:/usr/local/php/bin

export PATH
```

要使改动立即生效执行

```bash
./etc/profile
```

或

```bash
source /etc/profile
```

查看环境变量

```bash
echo $PATH
```

查看php版本

```bash
php -v
```

8.配置`php-fpm`，使用`FaShop`的话`php-fpm`实际是用不到的，考虑到服务器会有其他`php-fpm`的项目，如果需要可以一起配置了吧

```bash
cp php.ini-production /etc/php.ini
cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
chmod +x /etc/init.d/php-fpm
```

9.启动php-fpm

```bash
/etc/init.d/php-fpm start
```

配置nginx虚拟机,绑定域名

1.注意：FaShop不是这么配置，请参考安装部分的介绍

```bash
vim /etc/nginx/conf.d/你的项目.conf
```

这里可以把`你的项目.conf`改成自己的域名

把下面的内容复制到`你的项目.conf`里


2.重启nginx

```bash
service nginx reload
```

完事！访问您刚才配置的域名试试。
