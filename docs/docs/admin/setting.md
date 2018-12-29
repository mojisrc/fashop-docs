# 配置

本模块为了解决日益增多的配置项，增接口帮助前端开发者在官方无约定的情况下先行配置开发

## 配置修改

```html
POST - /setting/edit
```

| 参数   | 类型   | 是否必填                 | 说明                                            |
| ------ | ------ | ------------------------ | ----------------------------------------------- |
| key    | String | 是                       | 类型，`wechat_mp`微信公众平台支付，唯一不可修改 |
| name   | String | 否                       | 用途名字                                        |
| config | Json   | 否，存在status字段时失效 | 配置，数组                                      |
| status | Int    | 否                       | 是否开启，`1` 开启 `0` 关闭                     |
| remark | String | 否                       | 备注                                            |

`config ` 字段说明

- wechat 微信公众平台

| 参数            | 类型   | 是否填                           | 说明                                                       |
| --------------- | ------ | -------------------------------- | ---------------------------------------------------------- |
| appid           | String | 否                               | APP APPID                                                  |
| app_id          | String | 否                               | 公众号 APPID                                               |
| app_secret      | String | 否                               | 微信AppSecret                                              |
| mini_app_id     | String | 否                               | 小程序 APPID                                               |
| mini_app_secret | String | 否                               | 小程序秘钥                                                 |
| mch_id          | String | 否                               | 微信商户ID                                                 |
| callback_domain | String | 否                               | 交易异步通知的域名                                         |
| key             | String | 是                               | 微信商户API密钥                                            |
| apiclient_cert  | String | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_cert.pem 文件 |
| apiclient_key   | String | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_key.pem 文件  |
| apiclient_cert  | String | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 rootca.pem 文件         |

> 证书的上传会用到admin/upload/addCert接口，这儿传入的是服务器的相对路径地址，因为证书不支持远程地址

- 支付宝
| 参数            | 类型   | 是否填 | 说明               |
| --------------- | ------ | ------ | ------------------ |
| app_id          | String | 否     | 支付宝的APPID      |
| public_key      | String | 否     | 支付宝公钥         |
| private_key     | String | 否     | 支付宝私钥         |
| callback_domain | String | 否     | 交易异步通知的域名 |

## 配置详情

```html
GET - /setting/info
```

| 参数 | 类型   | 是否必填 | 说明                             |
| ---- | ------ | -------- | -------------------------------- |
| key  | String | 是       | 类型，`wechat`微信支付，唯一键值 |

## 配置添加
```html
POST - /setting/add
```

| 参数   | 类型   | 是否必填                 | 说明                                                         |
| ------ | ------ | ------------------------ | ------------------------------------------------------------ |
| key    | String | 是                       | 类型，`wechat_mp`微信公众平台支付，唯一，数据库里不允许有重复 |
| name   | String | 否                       | 用途名字                                                     |
| config | Json   | 否，存在status字段时失效 | 配置，数组                                                   |
| status | Int    | 否                       | 是否开启，`1` 开启 `0` 关闭                                  |
| remark | String | 否                       | 备注                                                         |
