## 商品列表

```html
GET - /Group/list
```

| 参数 | 是否必填 | 说明 |
| ---- | -------- | ---- |
| 暂无 |          |      |

```

```



## 拼团商品信息

```html
GET - /Group/info
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| goods_id | 是       | 拼团活动商品id |

```

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

```



## 正在拼团列表

```html
GET - /Group/groupingSearch
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
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
| goods_id | 是       | 拼团活动商品id |

```json

```



## 允许开团

```html
GET - /Group/allowOpenGroup
```

| 参数     | 是否必填 | 说明           |
| -------- | -------- | -------------- |
| group_id | 否       | 拼团活动id     |
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
| group_id | 否       | 拼团活动id     |
| goods_id | 是       | 拼团活动商品id |

```json
@return state 1可以参团  0不可以参团
```

