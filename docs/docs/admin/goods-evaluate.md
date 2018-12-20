# 商品评价
## 评价列表

```html
GET - /goodsevaluate/list
```

| 参数            | 是否必填 | 说明                                       |
| ------------- | ---- | ---------------------------------------- |
| keywords_type | 否    | 关键词类型：商品名称 `goods_name` 、用户昵称 `user_nicknname` 、用户手机号 `user_phone` |
| keywords      | 否    | 关键词                                      |
| create_time   | 否    | 时间区间[开始时间戳,结束时间戳]                        |
| type          | 否    | 默认为全部评价，好评`positive` 、中评 `moderate`、差评`negative` |

todo 评价列表的数据结构

## 评价回复

```html
POST - /goodsevaluate/reply
```

| 参数            | 是否必填 | 说明   |
| ------------- | ---- | ---- |
| id            | 是    | 评价id |
| reply_content | 是    | 回复内容 |

## 评价显示状态

```html
POST - /goodsevaluate/display
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 评价id |
