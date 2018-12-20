# 购物车
## 购物车列表

```html
GET - /cart/list
```

```json
{
    "code":0,
    "result":{
        "list":[
            {
                "id":122,
                "create_time":1528429371,
                "goods_sku_id":2495,
                "goods_num":2,
                "is_check":1,
                "goods_id":100845,
                "goods_title":"Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retin",
                "goods_is_on_sale":1,
                "goods_freight_fee":"0.00",
                "goods_freight_id":0,
                "goods_pay_type":1,
                "goods_price":"0.01",
                "goods_spec":[
                    {
                        "id":1,
                        "value_id":209,
                        "name":"颜色",
                        "value_name":"啦啦啦啦啦啦"
                    },
                    {
                        "id":3,
                        "value_id":177,
                        "name":"尺码",
                        "value_name":"大尺码"
                    },
                    {
                        "id":4,
                        "value_id":181,
                        "name":"码号",
                        "value_name":"大码"
                    }
                ],
                "goods_weight":0,
                "goods_stock":60,
                "goods_sku_img":"https://demo.fashop.cn/Upload/20180601/iwxEhVeKD4Sg3Xa.jpeg",
                "goods_freight_areas":null
            },
            {
                "id":118,
                "create_time":1528376146,
                "goods_sku_id":2526,
                "goods_num":1,
                "is_check":1,
                "goods_id":100846,
                "goods_title":"这是一件衣服规格",
                "goods_is_on_sale":1,
                "goods_freight_fee":"0.00",
                "goods_freight_id":0,
                "goods_pay_type":1,
                "goods_price":"0.01",
                "goods_spec":[
                    {
                        "id":5,
                        "value_id":189,
                        "name":"尺寸",
                        "value_name":"66"
                    },
                    {
                        "id":4,
                        "value_id":181,
                        "name":"码号",
                        "value_name":"大码"
                    },
                    {
                        "id":1,
                        "value_id":217,
                        "name":"颜色",
                        "value_name":"红色"
                    }
                ],
                "goods_weight":0,
                "goods_stock":52,
                "goods_sku_img":"https://demo.fashop.cn/Upload/20180515/As4VbciJEea6xu8.jpeg",
                "goods_freight_areas":null
            }
        ]
    },
    "msg":null
}
```

参数介绍：

| 字段               | 说明        |
| ---------------- | --------- |
| id               | 购物车的id    |
| create_time      | 加入到购物车的时间 |
| goods_sku_id     | 商品SKU的id  |
| goods_num        | 购买的个数     |
| goods_title      | 商品名称      |
| goods_price      | 商品价格      |
| goods_img        | 商品图片      |
| goods_spec       | 商品规格      |
| goods_weight     | 商品重量      |
| goods_stock      | 商品库存      |
| goods_is_on_sale | 商品是否上架    |



## 购物车添加

```html
POST - /cart/add
```

| 参数           | 是否必填 | 说明       |
| ------------ | ---- | -------- |
| goods_sku_id | 是    | 商品SKU id |
| quantity     | 是    | 数量       |

## 购物车修改

```html
POST - /cart/edit
```

| 参数           | 是否必填 | 说明       |
| ------------ | ---- | -------- |
| goods_sku_id | 是    | 商品SKU id |
| quantity     | 是    | 数量       |

## 购物车是否存在

```
POST - /cart/exist
```

| 参数           | 是否必填 | 说明       |
| ------------ | ---- | -------- |
| goods_sku_id | 是    | 商品SKU id |

## 购物车删除

```html
POST - /cart/del
```

| 参数            | 是否必填 | 说明          |
| ------------- | ---- | ----------- |
| goods_sku_ids | 是    | 商品SKU id 集合 |

## 购物车清空

```html
POST - /cart/clear
```

## 购物车数量

```html
GET - /cart/totalNum
```

```json
{
    "code":0,
    "result":{
        "total_num":2
    },
    "msg":null
}
```



## 购物车商品选中

```html
POST - /cart/check
```

| 参数            | 是否必填 | 说明              |
| ------------- | ---- | --------------- |
| goods_sku_ids | 是    | 商品SKU id 集合     |
| is_check      | 是    | 选中状态 默认1选中 0未选中 |

