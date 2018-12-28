## 计算购买项

```html
POST - /GroupBuy/calculate
```

```json
     * @param int  goods_sku_id 商品sku id
     * @param int  goods_id     商品id
     * @param int  group_id     拼团活动id
     * @param int  goods_number 商品数量
     * @param int  buy_way      购买方式 single_buy[单独购买] open_group[自己开团] join_group[参与他人团]
     * 目前单独购买走之前的商品直接购买接口 不走此团购接口 所以不要传递single_buy给此接口
     * @param int  order_id     订单id 参与别人的团时使用 ，他人的团的订单id
     * @param int  address_id   地址id
```

```json
{
    "code":0,
    "result":{
        "goods_amount":3,
        "goods_group_amount":1.8,
        "pay_amount":1.8,
        "goods_freight_list":[
            {
                "goods_sku_id":3,
                "freight_fee":0,
                "freight_way":"goods_freight_unified"
            }
        ],
        "freight_unified_fee":0,
        "freight_template_fee":0,
        "pay_freight_fee":0
    },
    "msg":null
}
```



## 创建购买订单

```html
POST - /GroupBuy/create
```

```json
     * @param int  goods_sku_id 商品sku id
     * @param int  goods_id     商品id
     * @param int  group_id     拼团活动id
     * @param int  goods_number 商品数量
     * @param int  buy_way      购买方式 single_buy[单独购买] open_group[自己开团] join_group[参与他人团]
     * 目前单独购买走之前的商品直接购买接口 不走此团购接口 所以不要传递single_buy给此接口
     * @param int  order_id     订单id 参与别人的团时使用 ，他人的团的订单id
     * @param int  address_id   地址id
     * @param string $message 买家留言
```

```json
{
    "code":0,
    "result":{
        "order_id":"17",
        "pay_sn":"520596831366949005"
    },
    "msg":null
}
```


