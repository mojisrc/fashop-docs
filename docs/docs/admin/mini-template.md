# 小程序模板消息

![image](https://ws4.sinaimg.cn/large/006tNbRwgy1fykiyaiawdj317t0u07bt.jpg)

首先选择要创建的模板消息

![image](https://ws3.sinaimg.cn/large/006tNbRwgy1fykiz6rhfbj31410u0dq7.jpg)

然后在后台设置模板消息，并且对应上要显示的数据，微信小程序接口https://developers.weixin.qq.com/miniprogram/dev/api/getTemplateLibraryById.html 会返回要展示关键词列表，展示在左侧，右侧用来选择要对应的FaShop系统的关键词

每次用户触发按钮才能有一次发送模板消息的权限，有效期为7天，所以发货通知暂时不处理是因为无法确定是7天发货，而且在订单支付成功通知的时候用了一次，不作弊的情况下不能确保正常获得多条发送的权利





### 涉及接口

- 小程序模板消息列表接口
  - 请求的时候如果发现用户没配置小程序，提供一个错误码，前端拿去先做特殊提示
- 小程序模板消息详情接口
- fashop后台通知修改接口
- 前端收集formid的接口，这个收集要不要规划一下
- fashop后台通知列表

```
订单支付成功通知     order_pay_success
付款失败通知     order_pay_fail
订单取消通知     order_cancel
退款申请通知     order_refund_apply
```

- fashop后台通知详情接口

  > 需要返回该接口能返回字段的信息
  >
  > 跳转链接挂/pages/order/detail?id=xxxx
  >
  > 小程序的id判断在payment表里 那个支付设置是公用的配置信息

order_pay_success 当订单支付成功时触发

```json
[
    {
        "field" : "order_sn",
        "name" : "订单号"
    },
    {
        "field" : "order_amount",
        "name" : "订单总金额"
    },
    {
        "field" : "order_total_goods_name",
        "name" : "订单商品名称集合"
    },
    {
        "field" : "order_create_time",
        "name" : "下单时间"
    },
    {
        "field" : "order_total_goods_num",
        "name" : "商品总数量"
    }
]
```

order_pay_fail，当支付失败时触发

```json
[
    {
        "field" : "order_sn",
        "name" : "订单号"
    },
    {
        "field" : "order_amount",
        "name" : "订单总金额"
    },
    {
        "field" : "order_total_goods_name",
        "name" : "订单商品名称集合"
    },
    {
        "field" : "order_create_time",
        "name" : "下单时间"
    },
    {
        "field" : "order_total_goods_num",
        "name" : "商品总数量"
    }
]
```

order_cancel，取消订单时触发，需要沟通 取消是用来干嘛的？

```json
[
    {
        "field" : "order_sn",
        "name" : "订单号"
    },
    {
        "field" : "order_amount",
        "name" : "订单总金额"
    },
    {
        "field" : "order_total_goods_name",
        "name" : "订单商品名称集合"
    },
    {
        "field" : "order_create_time",
        "name" : "下单时间"
    },
    {
        "field" : "order_total_goods_num",
        "name" : "商品总数量"
    },
    {
        "field" : "order_cancel_time",
        "name" : "取消时间"
    }
]
```

order_refund_apply 订单申请退款时触发

```json
孙泉补下
```



