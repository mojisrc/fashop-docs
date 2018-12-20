# 订单退款
## 退款原因

```html
GET - /orderrefound/reasonList
```

| 参数          | 是否必填 | 说明                       |
| ----------- | ---- | ------------------------ |
| refund_type | 是    | refund_type 1为仅退款,2为退货退款 |

```json
{
    "code":0,
    "result":{
        "list":[
            {
                "id":1,
                "title":"多拍/拍错/不想要",
                "type":1,
                "delete_time":null
            },
            {
                "id":2,
                "title":"快递一直未到",
                "type":1,
                "delete_time":null
            },
            {
                "id":3,
                "title":"未按约定时间发货",
                "type":1,
                "delete_time":null
            },
            {
                "id":4,
                "title":"快递无跟踪记录",
                "type":1,
                "delete_time":null
            },
            {
                "id":5,
                "title":"空包裹/少货",
                "type":1,
                "delete_time":null
            },
            {
                "id":6,
                "title":"其他",
                "type":1,
                "delete_time":null
            }
        ]
    },
    "msg":null
}
```

## 申请商品退款

```html
POST - /orderrefound/apply
```

| 参数           | 是否必填 | 说明                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| order_goods_id | 是       | 订单商品表id                                                 |
| refund_type    | 是       | 退款类型，`1` 退款、`2` 退款并退货                           |
| reason         | 是       | 退款原因                                                     |
| refund_amount  | 是       | 退款金额                                                     |
| user_explain   | 否       | 买家退款解释说明                                             |
| images         | 否       | 照片凭证，数组，最多9张                                      |
| receive_state  | 否       | 用户选择是否收到货物 1未收到货 2已收到货 卖家未发货(已付款)时无需传此参数 |

## 退款列表

```html
GET - /orderrefound/list
```

| 参数            | 是否必填 | 说明                               |
| ------------- | ---- | -------------------------------- |
| keywords      | 否    | 关键字                              |
| keywords_type | 否    | 类型order_sn，refund_sn，goods_title |
| create_time   | 否    | start 开始时间 end 结束时间              |

## 退款详情

```html
GET - /orderrefound/info
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| id   | 是    | 退款记录id |

```json
{
    "code":0,
    "result":{
        "info":{
            "id":10,
            "order_id":21,
            "order_sn":"1000000000002403",
            "order_state":20,
            "order_goods_id":21,
            "refund_sn":"106110180607191400",
            "user_id":542,
            "user_name":"wechat_oX3Qk0RaO1SPqT-KQNKx6rjdts_I_892cbe3d",
            "goods_id":100846,
            "goods_sku_id":2526,
            "goods_title":"这是一件衣服规格",
            "goods_spec":[
                {
                    "id":5,
                    "name":"尺寸",
                    "value_id":189,
                    "value_name":"66"
                },
                {
                    "id":4,
                    "name":"码号",
                    "value_id":181,
                    "value_name":"大码"
                },
                {
                    "id":1,
                    "name":"颜色",
                    "value_id":217,
                    "value_name":"红色"
                }
            ],
            "goods_img":"https://demo.fashop.cn/Upload/20180515/As4VbciJEea6xu8.jpeg",
            "goods_pay_price":"0.01",
            "goods_num":1,
            "goods_freight_fee":"0.00",
            "refund_type":1,
            "refund_amount":"0.01",
            "order_amount":"0.01",
            "order_lock":2,
            "create_time":1528370040,
            "user_reason":"未按约定时间发货",
            "user_explain":"?",
            "tracking_no":null,
            "tracking_phone":null,
            "tracking_company":null,
            "tracking_explain":null,
            "tracking_images":null,
            "tracking_time":0,
            "receive":1,
            "receive_time":0,
            "receive_message":null,
            "payment_code":"wechat_mini",
            "trade_no":"4200000116201806077954130583",
            "handle_state":0,
            "handle_message":null,
            "handle_time":0,
            "batch_no":null,
            "success_time":0,
            "user_receive":0,
            "user_images":"[\"https://demo.fashop.cn/Upload/20180607/uWiSwVfjmcqTabz.jpg\"]",
            "is_close":0,
            "delete_time":null,
            "handle_expiry_time":1528456440,
            "send_expiry_time":1528629240
        }
    },
    "msg":null
}
```



## 退款物流单号设置

> 添加退货快递单号，只有管理员审核通过(handle_state为20)的退款退货才可以填写订单号

```html
POST - /orderrefound/setTrackingNo
```

| 参数               | 是否必填 | 说明     |
| ---------------- | ---- | ------ |
| id               | 是    | 退款记录id |
| tracking_no      | 是    | 物流单号   |
| tracking_phone   | 是    | 手机号    |
| tracking_explain | 否    | 说明     |
| tracking_images  | 否    | 凭证 最多6 |

## 撤销退款

```html
POST - /orderrefound/revoke
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| id   | 是    | 退款记录id |

> handle_state 平台处理状态 默认0处理中(未处理) 10拒绝(驳回) 20同意 30成功(已完成) 50取消(用户主动)



## 退款说明

**一、功能路径**

会员中心－我的订单－申请退款

**二、操作流程**

1、进入会员中心，找到订单

2、点击详情，进入订单详情页

3、点击申请退款，填写退款信息

4、提交



> 卖家已发货情况下，买家未收到货，可申请“我要退款，但不退货”；
>
> 买家已收到货，需申请“我要退款，并退货”
>
> 商家同意退款退货申请后，买家需在会员中心填写退货物流信息提交，商家确认收货后，操作退款。
>
> 注意：
>
> - 若商家未处理维权，超过7天（后台配置）会自动退款，若商家拒绝且无法协商，会员中心可查看维权处理进度。
> - 订单交易完成15天（后台配置）内，普通微商城商品，且通过微信支付、支付宝支付的订单，买家可以申请退款。
> - 由于是开源项目，本次开发不包含原路返回，后台可手动设置退款状态，卖家请去微信商户平台或支付宝平台去退款，为了安全。
