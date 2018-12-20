# 支付
## 支付设置

```html
POST - /payment/edit
```

| 参数     | 是否必填            | 说明                     |
| ------ | --------------- | ---------------------- |
| type   | 是               | 类型，`wechat_mp`微信公众平台支付 |
| config | 否，存在status字段时失效 | 配置，数组                  |
| status | 否               | 是否开启，`1` 开启 `0` 关闭     |

`config ` 字段说明

- wechat 微信公众平台支付

| 参数           | 是否填                           | 说明                                                         |
| -------------- | -------------------------------- | ------------------------------------------------------------ |
| appid          | 是                               | APP APPID，可以为空                                          |
| app_id         | 是                               | 公众号 APPID，可以为空                                       |
| app_secret     | 是                               | 微信AppSecret，可以为空                                      |
| miniapp_id     | 是                               | 小程序 APPID，可以为空                                       |
| mch_id         | 是                               | 微信商户ID，可以为空                                         |
| notify_url     | 是                               | 交易异步通知地址，可以为空                                   |
| key            | 是                               | 微信商户API密钥，可以为空                                    |
| apiclient_cert | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_cert.pem 文件，可以为空 |
| apiclient_key  | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_key.pem 文件，可以为空 |
| rootca         | 是（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 rootca.pem 文件，可以为空 |

## 支付设置详情

```html
GET - /payment/info
```

| 参数 | 是否必填 | 说明                   |
| ---- | -------- | ---------------------- |
| type | 是       | 类型，`wechat`微信支付 |

