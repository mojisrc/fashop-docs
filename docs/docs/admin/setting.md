# 配置

本模块为了解决日益增多的配置项，增接口帮助前端开发者在官方无约定的情况下先行配置开发

## 配置修改

```html
POST - /setting/edit
```

| 参数   | 类型   | 是否必填 | 说明                             |
| ------ | ------ | -------- | -------------------------------- |
| key    | String | 是       | 类型，`wechat`微信，唯一不可修改 |
| name   | String | 否       | 用途名字                         |
| config | Object | 是       | 配置详情                         |
| status | Int    | 否       | 是否开启，`1` 开启 `0` 关闭      |
| remark | String | 否       | 备注                             |

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

| 参数   | 类型   | 是否必填 | 说明                                                       |
| ------ | ------ | -------- | ---------------------------------------------------------- |
| key    | String | 是       | 类型，`wechat`微信公众平台支付，唯一，数据库里不允许有重复 |
| name   | String | 否       | 用途名字                                                   |
| config | Object | 是       | 配置详情                                                   |
| status | Int    | 否       | 是否开启，`1` 开启 `0` 关闭                                |
| remark | String | 否       | 备注                                                       |

## config介绍

- `wechat` 微信

| 参数            | 类型   | 是否必填                         | 说明                                                       |
| --------------- | ------ | -------------------------------- | ---------------------------------------------------------- |
| appid           | String | 否                               | APP APPID                                                  |
| app_id          | String | 否                               | 公众号 APPID                                               |
| app_secret      | String | 否                               | 微信AppSecret                                              |
| mini_app_id     | String | 否                               | 小程序 APPID                                               |
| mini_app_secret | String | 否                               | 小程序秘钥                                                 |
| mch_id          | String | 否                               | 微信商户ID                                                 |
| callback_domain | String | 否                               | 交易异步通知的域名                                         |
| key             | String | 否                               | 微信商户API密钥                                            |
| apiclient_cert  | String | 否（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_cert.pem 文件 |
| apiclient_key   | String | 否（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 apiclient_key.pem 文件  |
| apiclient_cert  | String | 否（用到原路返回退款功能时需要） | 微信商户平台下载证书 cert.zip 中的 rootca.pem 文件         |

> 证书的上传会用到admin/upload/addCert接口，这儿传入的是服务器的相对路径地址，因为证书不支持远程地址


- `alipay` 支付宝

| 参数            | 类型   | 是否必填 | 说明               |
| --------------- | ------ | -------- | ------------------ |
| app_id          | String | 否       | 支付宝的APPID      |
| public_key      | String | 否       | 支付宝公钥         |
| private_key     | String | 否       | 支付宝私钥         |
| callback_domain | String | 否       | 交易异步通知的域名 |

- `wechat_mini_template` 小程序模板消息


| 参数          | 类型                    | 是否必填 | 说明     |
| ------------- | ----------------------- | -------- | -------- |
| template_list | TemplateListObjectModel | 是       | 模板列表 |

template_list ( TemplateListObjectModel ) 是个对象，并非数组，数据格式示例：

```json
{
    "order_pay_success":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单支付成功",
        "template_status":1
    },
    "order_pay_fail":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单支付失败",
        "template_status":1
    },
    "order_cancel":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单取消",
        "template_status":1
    },
    "order_refund_apply":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单退款申请",
        "template_status":1
    }
}
```


| 参数               | 类型                        | 是否必填 | 说明         |
| ------------------ | --------------------------- | -------- | ------------ |
| order_pay_success  | TemplateObjectModel，见下文 | 是       | 订单支付成功 |
| order_pay_fail     | TemplateObjectModel         | 是       | 订单支付失败 |
| order_cancel       | TemplateObjectModel         | 是       | 订单取消     |
| order_refund_apply | TemplateObjectModel         | 是       | 订单退款申请 |

TemplateObjectModel

| 参数            | 类型   | 是否必填 | 说明                                                  |
| --------------- | ------ | -------- | ----------------------------------------------------- |
| template_id     | String | 是       | 模板id                                                |
| template_status | Int    | 是       | 模板开关，预留，默认为1，未来可能需要开关某个模板消息 |
| template_name   | String | 是       | 属于备注，帮助前端方便输出显示                        |

Todo 这儿还需要细化，先占位记录，设计稿只是参考，因为没有要求用户选择哪个 是对不上的

1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量

1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量

1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量 6.取消时间

1.充值号码 2.充值时间 3.退款金额 4.退款原因 5.退款时间 6.酒店名称 7.酒店房型

8.间数 9.车次



- `alidayu_template` 阿里云短信（阿里大鱼）

| 参数              | 类型                                                   | 是否必填 | 说明             |
| ----------------- | ------------------------------------------------------ | -------- | ---------------- |
| access_key_id     | String                                                 | 是       | Access KeyID     |
| access_key_secret | String                                                 | 是       | Access KeySecret |
| signature         | String                                                 | 是       | 短信签名         |
| template_list     | TemplateListObjectModel[{string: TemplateObjectModel}] | 是       | 模板列表         |

template_list ( TemplateListObjectMode l) 是个对象，并非数组，数据格式示例：

```json
{
    "register":{
        "template_id":"SMS_xxxxx",
        "template_name":"注册验证码",
        "template_variable":"code",
        "template_status":1
    },
    "find_password":{
        "template_id":"SMS_xxxxx",
        "template_name":"找回密码验证码",
        "template_variable":"code",
        "template_status":1
    }
}
```

TemplateObjectModel

键：自定义，值：如下


| 参数              | 类型                    | 是否必填 | 说明                                                         |
| ----------------- | ----------------------- | -------- | ------------------------------------------------------------ |
| template_id       | String                  | 是   | 模板id                                                       |
| template_status   | Int                     | 是 | 模板开关，预留，默认为1，未来可能需要开关某个模板消息        |
| template_variable | String \| Array[String] | 是 | 模板里包含的${变量}，某些场景会存在多个，所以类型分两种，String和数组String |
| template_name   | String | 是 | 属于备注，帮助前端方便输出显示                        |

