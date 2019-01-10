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

> 还在思考要不要废弃

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

| 参数                 | 类型   | 是否必填 | 说明                                                         |
| -------------------- | ------ | -------- | ------------------------------------------------------------ |
| app_id               | String | 否       | 支付宝的APPID                                                |
| alipay_public_key    | String | 否       | 支付宝公钥 开放平台下的支付宝公钥                            |
| merchant_private_key | String | 否       | 私钥 使用软件生成的2048私钥 私钥工具https://docs.open.alipay.com/291/106097 |
| callback_domain      | String | 否       | 交易异步通知的域名                                           |

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
        "template_status":1,
        "template_content": "1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量"
    },
    "order_pay_fail":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单支付失败",
        "template_status":1,
        "template_content": "1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量"
    },
    "order_cancel":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单取消",
        "template_status":1,
        "template_content": "1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量"
    },
    "order_refund_apply":{
        "template_id":"Y1blRZEdiqSXSDOfiKT9rG4oEmlpfeq_rjcpuuo",
        "template_name":"订单退款申请",
        "template_status":1,
        "template_content": "1.订单号 2.订单总额 3.订单商品名称 4.下单时间 5.商品数量"
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



- `alidayu` 阿里云短信（阿里大鱼）

| 参数              | 类型                                                   | 是否必填 | 说明             |
| ----------------- | ------------------------------------------------------ | -------- | ---------------- |
| access_key_id     | String                                                 | 是       | Access KeyID     |
| access_key_secret | String                                                 | 是       | Access KeySecret |
| signature         | String                                                 | 是       | 短信签名         |
| template_list     | TemplateListObjectModel[{string: TemplateObjectModel}] | 是       | 模板列表         |

template_list ( TemplateListObjectMode l) ，数据格式示例：

```json
{
    "register":{
        "template_id":"SMS_xxxxx",
        "template_name":"注册",
        "template_variable":"code",
        "template_status":1,
        "template_content":"您的注册码：${code}，如非本人操作，请忽略本短信！"
    },
    "find_password":{
        "template_id":"SMS_xxxxx",
        "template_name":"找回密码",
        "template_variable":"code",
        "template_status":1,
        "template_content":"您的注册码：${code}，如非本人操作，请忽略本短信！"
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

> 当添加或者修改时，如template_variable是接口必须用到的，添加修改不起作用，仅为照顾版本升级



- `poster_goods` 商品海报

```json
{
    body:[
            {
                type: "background",
                options: {
                    size: {
                        width: maxWidth,
                        height: maxHeight
                    },
                    position: {
                        x: 0,
                        y: 0
                    },
                    backgroundColor: "#ffffff",
                    backgroundImage: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118722752&di=2e6b80b4d9d2bdd4c5593e86c54c98c0&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150521%2F0008020222046830_b.jpg"
                }
            },
            {
                type: "goods_img",
                options: {
                    size: {
                        width: 284,
                        height: 284
                    },
                    position: {
                        x: 20,
                        y: 20
                    }
                }

            },
            {
                type: "goods_title",
                options: {
                    size: {
                        width: 285,
                        height: 42
                    },
                    fontColor: "#333",
                    fontSize: 14,
                    position: {
                        x: 20,
                        y: 284 + 20 + 10
                    }
                }
            },
            {
                type: "goods_price",
                options: {
                    size: {
                        width: 100,
                        height: 20
                    },
                    fontColor: "#FF5127",
                    fontSize: 20,
                    position: {
                        x: 20,
                        y: maxHeight - 20 - 20
                    }
                }
            },
            {
                type: "mini_qr",
                options: {
                    size: {
                        width: 76,
                        height: 76
                    },
                    position: {
                        x: maxWidth - 76 - 20,
                        y: maxHeight - 20 - 76
                    }
                }

            }
        ]
}
```

- `poster_group_goods` 拼团海报

```json
{
    body:[
            {
                type: "background",
                options: {
                    size: {
                        width: maxWidth,
                        height: maxHeight
                    },
                    position: {
                        x: 0,
                        y: 0
                    },
                    backgroundColor: "#ffffff",
                    backgroundImage: ""
                }
            },
            {
                type: "goods_img",
                options: {
                    size: {
                        width: 284,
                        height: 284
                    },
                    position: {
                        x: 20,
                        y: 20 + 30 + 20
                    }
                }

            },
            {
                type: "avatar",
                options: {
                    size: {
                        width: 30,
                        height: 30
                    },
                    position: {
                        x: 20,
                        y: 20
                    },
                    borderRadius: 60
                }

            },
            {
                type: "nickname",
                options: {
                    size: {
                        width: 56,
                        height: 20
                    },
                    position: {
                        x: 20 + 30 + 10,
                        y: 20 + 3
                    },
                    fontSize: 14,
                    fontColor: "#1890FF"
                }

            },

            {
                type: "slogan",
                options: {
                    size: {
                        width: 116,
                        height: 20
                    },
                    position: {
                        x: 20 + 30 + 10 + 56 + 10,
                        y: 20 + 3
                    },
                    fontContent: "正在拼团 赶快加入",
                    fontSize: 14,
                    fontColor: "#999999"
                }

            },
            {
                type: "group_number",
                options: {
                    size: {
                        width: 48,
                        height: 20
                    },
                    position: {
                        x: 20 + 5,
                        y: 20 + 30 + 20 + 5
                    },
                    fontSize: 12,
                    fontColor: "#ffffff",
                    fontBackgroundColor: "#FF5127"
                }

            },
            {
                type: "goods_title",
                options: {
                    size: {
                        width: 196,
                        height: 42
                    },
                    fontColor: "#333",
                    fontSize: 14,
                    position: {
                        x: 20,
                        y: 464 - 20 - 76
                    }
                }
            },
            {
                type: "goods_group_price",
                options: {
                    size: {
                        width: 80,
                        height: 20
                    },
                    fontColor: "#FF5127",
                    fontSize: 20,
                    position: {
                        x: 20,
                        y: 464 - 20 - 20
                    }
                }
            },
            {
                type: "goods_price",
                options: {
                    size: {
                        width: 80,
                        height: 20
                    },
                    fontColor: "#999999",
                    fontSize: 14,
                    position: {
                        x: 20 + 5 + 80,
                        y: 464 - 20 - 20
                    }
                }
            },
            {
                type: "mini_qr",
                options: {
                    size: {
                        width: 76,
                        height: 76
                    },
                    position: {
                        x: 324 - 76 - 20,
                        y: 464 - 20 - 76
                    }
                }

            }
        ]
}
```

