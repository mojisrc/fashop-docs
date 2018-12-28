## 商品列表

```html
GET - /Group/list
```

| 参数 | 是否必填 | 说明 |
| ---- | -------- | ---- |
| 暂无 |          |      |

```
{
    "code":0,
    "result":{
        "info":{
            "group_id":10,
            "limit_buy_num":4
        },
        "total_number":1,
        "list":[
            {
                "id":2,
                "title":"华为",
                "images":[
                    "http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg"
                ],
                "category_ids":[
                    1
                ],
                "base_sale_num":0,
                "body":[
                    {
                        "type":"text",
                        "value":{
                            "content":"华为"
                        }
                    },
                    {
                        "type":"image",
                        "value":{
                            "url":"http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg"
                        }
                    }
                ],
                "is_on_sale":1,
                "image_spec_id":0,
                "image_spec_images":null,
                "sku_list":[
                    {
                        "price":1,
                        "stock":1000,
                        "code":"1",
                        "spec":[
                            {
                                "id":1,
                                "name":"颜色",
                                "value_id":1,
                                "value_name":"白色"
                            }
                        ],
                        "weight":null
                    },
                    {
                        "price":2,
                        "stock":1000,
                        "code":2,
                        "spec":[
                            {
                                "id":1,
                                "name":"颜色",
                                "value_id":2,
                                "value_name":"蓝色"
                            }
                        ],
                        "weight":null
                    }
                ],
                "create_time":1539856187,
                "price":"1.00",
                "update_time":null,
                "evaluation_good_star":5,
                "evaluation_count":0,
                "stock":1965,
                "sale_num":35,
                "group_sale_num":0,
                "sale_time":"1539856454",
                "delete_time":null,
                "spec_list":[
                    {
                        "id":1,
                        "name":"颜色",
                        "value_list":[
                            {
                                "id":1,
                                "name":"白色"
                            },
                            {
                                "id":2,
                                "name":"蓝色"
                            }
                        ]
                    }
                ],
                "img":"http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg",
                "pay_type":1,
                "freight_fee":"0.00",
                "freight_id":0,
                "group_price":"0.80"
            }
        ]
    },
    "msg":null
}
```



## 拼团商品信息

```html
GET - /Group/info
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```
{
    "code": 0,
    "result": {
        "info": {
            "id": 2,
            "title": "华为",
            "images": [
                "http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg"
            ],
            "category_ids": [
                1
            ],
            "base_sale_num": 0,
            "body": [
                {
                    "type": "text",
                    "value": {
                        "content": "华为"
                    }
                },
                {
                    "type": "image",
                    "value": {
                        "url": "http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg"
                    }
                }
            ],
            "is_on_sale": 1,
            "image_spec_id": 0,
            "image_spec_images": null,
            "sku_list": [
                {
                    "price": 1,
                    "stock": 1000,
                    "code": "1",
                    "spec": [
                        {
                            "id": 1,
                            "name": "颜色",
                            "value_id": 1,
                            "value_name": "白色"
                        }
                    ],
                    "weight": null
                },
                {
                    "price": 2,
                    "stock": 1000,
                    "code": 2,
                    "spec": [
                        {
                            "id": 1,
                            "name": "颜色",
                            "value_id": 2,
                            "value_name": "蓝色"
                        }
                    ],
                    "weight": null
                }
            ],
            "create_time": 1539856187,
            "price": "1.00",
            "update_time": null,
            "evaluation_good_star": 5,
            "evaluation_count": 0,
            "stock": 1965,
            "sale_num": 35,
            "group_sale_num": 0,
            "sale_time": "1539856454",
            "delete_time": null,
            "spec_list": [
                {
                    "id": 1,
                    "name": "颜色",
                    "value_list": [
                        {
                            "id": 1,
                            "name": "白色"
                        },
                        {
                            "id": 2,
                            "name": "蓝色"
                        }
                    ]
                }
            ],
            "img": "http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg",
            "pay_type": 1,
            "freight_fee": "0.00",
            "freight_id": 0,
            "skus": [
                {
                    "id": 3,
                    "goods_id": 2,
                    "spec": [
                        {
                            "id": 1,
                            "name": "颜色",
                            "value_id": 1,
                            "value_name": "白色"
                        }
                    ],
                    "price": "1.00",
                    "stock": 967,
                    "code": "1",
                    "img": "http://192.168.178.132/Upload/20181018/fcNqMZdpCgA2RSV.jpeg",
                    "weight": 0,
                    "title": "华为 白色",
                    "sale_num": 33,
                    "group_sale_num": 0,
                    "spec_value_sign": "[1]",
                    "spec_sign": "[1]",
                    "create_time": 1539856187,
                    "update_time": null,
                    "delete_time": null
                }
            ],
            "group": {
                "id": 10,
                "title": "拼团活动2-测试",
                "sn": "",
                "time_over": "24:50",
                "time_over_day": 1,
                "time_over_hour": 0,
                "time_over_minute": 50,
                "start_time": 1540170798,
                "end_time": 1543481068,
                "limit_buy_num": 4,
                "limit_group_num": 0,
                "limit_goods_num": 0,
                "is_show": 1,
                "over_type": 0,
                "create_time": 1539245315,
                "update_time": 1540195465,
                "delete_time": null
            }
        }
    },
    "msg": null
}
```



## 拼团商品sku信息

```html
GET - /Group/skuInfo
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json
{
    "code":0,
    "result":{
        "info":{
            "skus":[
                {
                    "goods_sku_id":3,
                    "group_price":"0.80",
                    "captain_price":"0.60"
                }
            ]
        }
    },
    "msg":null
}
```



## 正在拼团列表

```html
GET - /Group/groupingSearch
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json

```



## 正在拼团详情

```html
GET - /Group/groupingInfo
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| order_id | 是       | 订单id         |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json

```



## 分享过来的拼团详情

```html
GET - /Group/shareGroupingInfo
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| order_id | 是       | 订单id         |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json

```



## 允许开团

```html
GET - /Group/allowOpenGroup
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json
@return state 1可以开团  0不可以开团
```



## 允许参团

```html
GET - /Group/allowJoinGroup
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 是       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json
@return state 1可以参团  0不可以参团
```

