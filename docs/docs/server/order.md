# 订单

## 订单状态量

```html
GET - /order/stateNum
```

| 参数             | 是否必填 | 说明                                       |
| -------------- | ---- | ---------------------------------------- |
| create_time    | 否    | [开始时间,结束时间]                              |
| feedback_state | 否    | 维权状态：退款处理中 todo、退款结束 closed              |
| user_ids       | 否    | 用户id数组  个人觉得这个参数没用                       |
| is_print       | 否    | 1打印 0未打印                                 |
| keywords_type  | 否    | 商品名称goods_name 、订单号order_no、收货人姓名 receiver_name、收货人电话 receiver_phone、 快递单号courier_number |
| keywords       | 否    | 关键词                                      |
| state_types    | 否    | 状态集合，不需要的可以不填，减少浪费                       |

```json
{
    "code":0,
    "result":{
        "state_new":3,
        "state_send":0,
        "state_success":1,
        "state_close":0,
        "state_unevaluate":1,
        "state_refund":0
    },
    "msg":null
}
```

## 订单列表

```html
GET - /order/list
```

| 参数             | 是否必填 | 说明                                       |
| -------------- | ---- | ---------------------------------------- |
| state_type     | 否    | 未付款'state_new', 已付款'state_pay', 已发货'state_send', 已完成'state_success', 已取消'state_cancel' 退款'state_refund' 为评价'state_unevaluate' |
| create_time    | 否    | [开始时间,结束时间]                              |
| feedback_state | 否    | 维权状态：退款处理中 todo、退款结束 closed              |
| is_print       | 否    | 1打印 0未打印                                 |
| keywords_type  | 否    | 商品名称goods_name 、订单号order_no、收货人姓名 receiver_name、收货人电话 receiver_phone、 快递单号courier_number |
| keywords       | 否    | 关键词                                      |

```json
{
    "code":0,
    "result":{
        "total_number":6,
        "list":[
            Object{...},
            Object{...},
            Object{...},
            Object{...},
            {
                "id":19,
                "sn":"1000000000002201",
                "pay_sn":"110581710766970555",
                "user_id":555,
                "user_name":"wechat_oX3Qk0RTzOlAeYNkv8_sK1f33HBE_51af3960",
                "user_phone":"15900336745",
                "user_email":null,
                "create_time":1528366766,
                "payment_code":"wechat_mini",
                "pay_name":"online",
                "payment_time":1528366828,
                "finnshed_time":0,
                "goods_amount":"0.01",
                "goods_num":1,
                "amount":"0.01",
                "pd_amount":"0.00",
                "freight_fee":"0.00",
                "freight_unified_fee":"0.00",
                "freight_template_fee":"0.00",
                "state":20,
                "refund_amount":"0.00",
                "refund_state":0,
                "lock_state":0,
                "delay_time":0,
                "tracking_no":"",
                "points":0,
                "evaluate_state":0,
                "is_print":0,
                "trade_no":"4200000133201806075808990750",
                "wechat_openid":null,
                "from":"1",
                "delete_time":null,
                "all_agree_refound":0,
                "payable_time":0,
                "state_desc":"待发货",
                "payment_name":"wechat_mini",
                "extend_order_extend":{
                    "id":19,
                    "tracking_time":0,
                    "shipper_id":0,
                    "express_id":0,
                    "message":"",
                    "voucher_price":null,
                    "voucher_id":null,
                    "voucher_code":null,
                    "remark":"",
                    "reciver_name":"孙泉",
                    "receiver_phone":"15900336745",
                    "reciver_info":{
                        "name":"孙泉",
                        "type":"个人",
                        "phone":"15900336745",
                        "address":"北京市 北京城区 东城区"
                    },
                    "reciver_province_id":110000,
                    "reciver_city_id":110100,
                    "reciver_area_id":110101,
                    "invoice_info":null,
                    "promotion_info":"",
                    "evaluate_time":null,
                    "service_remarks":"",
                    "delete_time":null,
                    "deliver_name":"",
                    "deliver_phone":null,
                    "deliver_address":null,
                    "freight_rule":1
                },
                "extend_order_goods":[
                    {
                        "id":19,
                        "user_id":555,
                        "order_id":19,
                        "goods_id":100845,
                        "goods_sku_id":2495,
                        "goods_title":"Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retin",
                        "goods_price":"0.01",
                        "goods_pay_price":"0.01",
                        "goods_num":1,
                        "goods_img":"https://demo.fashop.cn/Upload/20180601/iwxEhVeKD4Sg3Xa.jpeg",
                        "goods_spec":[
                            {
                                "id":1,
                                "name":"颜色",
                                "value_id":209,
                                "value_name":"啦啦啦啦啦啦"
                            },
                            {
                                "id":3,
                                "name":"尺码",
                                "value_id":177,
                                "value_name":"大尺码"
                            },
                            {
                                "id":4,
                                "name":"码号",
                                "value_id":181,
                                "value_name":"大码"
                            }
                        ],
                        "goods_type":1,
                        "goods_freight_way":"goods_freight_unifie",
                        "goods_freight_fee":"0.00",
                        "evaluate_state":0,
                        "evaluate_time":null,
                        "create_time":1528366766,
                        "coupon_id":0,
                        "coupon_card_id":null,
                        "lock_state":0,
                        "refund_handle_state":0,
                        "refund_id":0,
                        "delete_time":null
                    }
                ],
                "if_cancel":false,
                "if_pay":false,
                "if_refund_cancel":false,
                "if_complain":true,
                "if_receive":false,
                "if_lock":false,
                "if_deliver":false,
                "if_evaluate":false
            },
            {
                "id":16,
                "sn":"1000000000001902",
                "pay_sn":"300581706592836555",
                "user_id":555,
                "user_name":"wechat_oX3Qk0RTzOlAeYNkv8_sK1f33HBE_51af3960",
                "user_phone":"15900336745",
                "user_email":null,
                "create_time":1528362592,
                "payment_code":"wechat_mini",
                "pay_name":"online",
                "payment_time":1528362597,
                "finnshed_time":1528440183,
                "goods_amount":"0.01",
                "goods_num":1,
                "amount":"0.01",
                "pd_amount":"0.00",
                "freight_fee":"0.00",
                "freight_unified_fee":"0.00",
                "freight_template_fee":"0.00",
                "state":40,
                "refund_amount":"0.00",
                "refund_state":0,
                "lock_state":0,
                "delay_time":1528440183,
                "tracking_no":"",
                "points":0,
                "evaluate_state":0,
                "is_print":0,
                "trade_no":"4200000125201806078848825066",
                "wechat_openid":null,
                "from":"1",
                "delete_time":null,
                "all_agree_refound":0,
                "payable_time":0,
                "state_desc":"交易完成",
                "payment_name":"wechat_mini",
                "extend_order_extend":{
                    "id":16,
                    "tracking_time":0,
                    "shipper_id":0,
                    "express_id":0,
                    "message":"",
                    "voucher_price":null,
                    "voucher_id":null,
                    "voucher_code":null,
                    "remark":"",
                    "reciver_name":"孙泉",
                    "receiver_phone":"15900336745",
                    "reciver_info":{
                        "name":"孙泉",
                        "type":"个人",
                        "phone":"15900336745",
                        "address":"北京市 北京城区 东城区"
                    },
                    "reciver_province_id":110000,
                    "reciver_city_id":110100,
                    "reciver_area_id":110101,
                    "invoice_info":null,
                    "promotion_info":"",
                    "evaluate_time":null,
                    "service_remarks":"",
                    "delete_time":null,
                    "deliver_name":"",
                    "deliver_phone":null,
                    "deliver_address":null,
                    "freight_rule":1
                },
                "extend_order_goods":[
                    {
                        "id":16,
                        "user_id":555,
                        "order_id":16,
                        "goods_id":100845,
                        "goods_sku_id":2495,
                        "goods_title":"Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retin",
                        "goods_price":"0.01",
                        "goods_pay_price":"0.01",
                        "goods_num":1,
                        "goods_img":"https://demo.fashop.cn/Upload/20180601/iwxEhVeKD4Sg3Xa.jpeg",
                        "goods_spec":[
                            {
                                "id":1,
                                "name":"颜色",
                                "value_id":209,
                                "value_name":"啦啦啦啦啦啦"
                            },
                            {
                                "id":3,
                                "name":"尺码",
                                "value_id":177,
                                "value_name":"大尺码"
                            },
                            {
                                "id":4,
                                "name":"码号",
                                "value_id":181,
                                "value_name":"大码"
                            }
                        ],
                        "goods_type":1,
                        "goods_freight_way":"goods_freight_unifie",
                        "goods_freight_fee":"0.00",
                        "evaluate_state":2,
                        "evaluate_time":1528440516,
                        "create_time":1528362592,
                        "coupon_id":0,
                        "coupon_card_id":null,
                        "lock_state":0,
                        "refund_handle_state":51,
                        "refund_id":0,
                        "delete_time":null
                    }
                ],
                "if_cancel":false,
                "if_pay":false,
                "if_refund_cancel":false,
                "if_complain":false,
                "if_receive":false,
                "if_lock":false,
                "if_deliver":false,
                "if_evaluate":true
            }
        ]
    },
    "msg":null
}
```



## 订单详情

```html
GET - /order/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 订单id |

```json
{
  //payable_time 订单可支付时间 下单时间+24小时 时间戳
  
    "code":0,
    "result":{
        "info":{
            "id":27,
            "sn":"1000000000003001",
            "pay_sn":"350581786542601555",
            "user_id":555,
            "user_name":"wechat_oX3Qk0RTzOlAeYNkv8_sK1f33HBE_51af3960",
            "user_phone":"15900336745",
            "user_email":null,
            "create_time":1528442542,
            "payment_code":"",
            "pay_name":"online",
            "payment_time":0,
            "finnshed_time":0,
            "goods_amount":"0.01",
            "goods_num":1,
            "amount":"0.01",
            "pd_amount":"0.00",
            "freight_fee":"0.00",
            "freight_unified_fee":"0.00",
            "freight_template_fee":"0.00",
            "state":10,
            "refund_amount":"0.00",
            "refund_state":0,
            "lock_state":0,
            "delay_time":0,
            "tracking_no":"",
            "points":0,
            "evaluate_state":0,
            "is_print":0,
            "trade_no":null,
            "wechat_openid":null,
            "from":"1",
            "delete_time":null,
            "all_agree_refound":0,
            "payable_time":1528528942,
            "extend_order_extend":{
                "id":27,
                "tracking_time":0,
                "shipper_id":0,
                "express_id":0,
                "message":"",
                "voucher_price":null,
                "voucher_id":null,
                "voucher_code":null,
                "remark":"",
                "reciver_name":"孙泉",
                "receiver_phone":"15900336745",
                "reciver_info":{
                    "name":"孙泉",
                    "type":"个人",
                    "phone":"15900336745",
                    "address":"建国门W酒店",
                    "combine_detail":"北京市 北京城区 东城区"
                },
                "reciver_province_id":110000,
                "reciver_city_id":110100,
                "reciver_area_id":110101,
                "invoice_info":null,
                "promotion_info":"",
                "evaluate_time":null,
                "service_remarks":"",
                "delete_time":null,
                "deliver_name":"",
                "deliver_phone":null,
                "deliver_address":null,
                "freight_rule":1
            },
            "extend_order_goods":[
                {
                    "id":27,
                    "user_id":555,
                    "order_id":27,
                    "goods_id":100845,
                    "goods_sku_id":2495,
                    "goods_title":"Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retin",
                    "goods_price":"0.01",
                    "goods_pay_price":"0.01",
                    "goods_num":1,
                    "goods_img":"https://demo.fashop.cn/Upload/20180601/iwxEhVeKD4Sg3Xa.jpeg",
                    "goods_spec":[
                        {
                            "id":1,
                            "name":"颜色",
                            "value_id":209,
                            "value_name":"啦啦啦啦啦啦"
                        },
                        {
                            "id":3,
                            "name":"尺码",
                            "value_id":177,
                            "value_name":"大尺码"
                        },
                        {
                            "id":4,
                            "name":"码号",
                            "value_id":181,
                            "value_name":"大码"
                        }
                    ],
                    "goods_type":1,
                    "goods_freight_way":"goods_freight_unifie",
                    "goods_freight_fee":"0.00",
                    "evaluate_state":0,
                    "evaluate_time":null,
                    "create_time":1528442543,
                    "coupon_id":0,
                    "coupon_card_id":null,
                    "lock_state":0,
                    "refund_handle_state":0,
                    "refund_id":0,
                    "delete_time":null,
                    "if_refund":true,
                    "refund_state":0
                }
            ],
            "if_cancel":true,
            "if_pay":true,
            "if_refund_cancel":false,
            "if_complain":false,
            "if_receive":false,
            "if_lock":false,
            "if_deliver":false,
            "if_evaluate":false
        },
        "order_log":[
            {
                "id":49,
                "order_id":27,
                "msg":"买家下单",
                "create_time":1528442543,
                "role":"buyer",
                "user":"",
                "order_state":20,
                "delete_time":null
            }
        ],
        "return_list":[

        ],
        "refund_list":[

        ]
    },
    "msg":null
}
```

## 取消未付款订单

```html
POST - /order/cancel
```

| 参数           | 是否必填 | 说明                               |
| ------------ | ---- | -------------------------------- |
| id           | 是    | 订单id                             |
| state_remark | 否    | 状态备注，如：取消原因（改买其他商品、改配送方式、其他原因等等） |

## 确认收货

```html
POST - /order/confirmReceipt
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 订单id |



## 订单商品详情

```html
GET - /order/goodsInfo
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 订单id |

```json
{
    "code":0,
    "result":{
        "info":{
            "id":23,
            "user_id":542,
            "order_id":23,
            "goods_id":100845,
            "goods_sku_id":2495,
            "goods_title":"Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retin",
            "goods_price":"0.01",
            "goods_pay_price":"0.01",
            "goods_num":1,
            "goods_img":"https://demo.fashop.cn/Upload/20180601/iwxEhVeKD4Sg3Xa.jpeg",
            "goods_spec":[
                {
                    "id":1,
                    "name":"颜色",
                    "value_id":209,
                    "value_name":"啦啦啦啦啦啦"
                },
                {
                    "id":3,
                    "name":"尺码",
                    "value_id":177,
                    "value_name":"大尺码"
                },
                {
                    "id":4,
                    "name":"码号",
                    "value_id":181,
                    "value_name":"大码"
                }
            ],
            "goods_type":1,
            "goods_freight_way":"goods_freight_unifie",
            "goods_freight_fee":"0.00",
            "evaluate_state":0,
            "evaluate_time":null,
            "create_time":1528429190,
            "coupon_id":0,
            "coupon_card_id":null,
            "lock_state":0,
            "refund_handle_state":0,
            "refund_id":0,
            "delete_time":null
        }
    },
    "msg":null
}
```



## 订单商品列表

```html
GET - /order/goodsList
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 订单id |

## 查看物流

```html
GET - /order/logistics
```

| 参数 | 是否必填 | 类型 | 说明   |
| ---- | -------- | ---- | ------ |
| id   | 是       | int  | 订单id |

返回

```json
{
    "code":0,
    "result":{
        "info":{
            "url":"https://m.kuaidi100.com/index_all.html?type=zhongtong&postid=75114886914267"
        }
    },
    "msg":null
}
```

前端开发者根据返回链接进行跳转。

目前支持的是快递100，微信小程序对域名做了验证，请去微信公众平台设置小程序的授权域名`m.kuaidi100.com`。

参考阅读：

> 快递100接口简述
>
>  https://m.kuaidi100.com/index_all.html?type=[快递公司编码]&postid=[快递单号]&callbackurl=[点击"返回"跳转的地址]
>
> callback地址，经测试填入javascript:alert(1);会生效，意味着前端开发者可以利用该特性填入js方法。
>
> [《快递100文档》](https://www.kuaidi100.com/openapi/mobileapi.shtml)



## 拼团订单团信息

> 适用于订单详情

```html
GET - /order/groupInfo
```

| 参数 | 是否必填 | 说明   |
| ---- | -------- | ------ |
| id   | 是       | 订单id |

group_identity `1` 团长 `2` 团员

```json
{
    "code":0,
    "result":{
        "list":[
            {
                "group_identity":1,
                "user_id":5,
                "user_avatar":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erVKVc0ael431rYWjXrBZup9yEnicqlJTjwJKkNYDjAordm19DLzQJxu2CiaUnKzZQmic2JAzTSRW8CA/132"
            },
            {
                "group_identity":2,
                "user_id":4,
                "user_avatar":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erZntjFe2TzRel14vWle6M8cyxjgHRPiapu0GCobaKbZTJGCicOy13ic9JahcJm5KZeQSEeOJetChJ6Q/132"
            }
        ]
    },
    "msg":null
}
```



## 拼团订单列表自动过期 设置拼团失败

```html
GET - /order/antoSetOrderGroup
```

这个没明白什么意思

