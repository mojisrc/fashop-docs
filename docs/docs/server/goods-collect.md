# 商品收藏
## 收藏

```html
POST - /goodscollect/add
```

| 参数         | 是否必填 | 说明       |
| ------------ | -------- | ---------- |
| goods_sku_id | 是       | 商品sku id |

## 取消收藏

```html
POST - /goodscollect/del
```

| 参数         | 是否必填 | 说明       |
| ------------ | -------- | ---------- |
| goods_sku_id | 是       | 商品sku id |

## 收藏的状态

```html
GET - /goodscollect/state
```
| 参数         | 是否必填 | 说明       |
| ------------ | -------- | ---------- |
| goods_sku_id | 是       | 商品sku id |

## 收藏列表

```html
GET - /goodscollect/mine
```

