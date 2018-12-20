# 会员
## 会员列表

```html
GET - /user/list
```

| 参数             | 是否必填 | 说明                          |
| -------------- | ---- | --------------------------- |
| keywords_type  | 否    | 关键词类型，如：`nickname` 、`phone` |
| keywords       | 否    | 关键词                         |
| buy_times      | 否    | 购买次数                        |
| cost_total     | 否    | 消费累                         |
| cost_average   | 否    | 客单价                         |
| register_time  | 否    | 注册时间戳区间                     |
| last_cost_time | 否    | 最后消费时间戳区间                   |

## 会员详情

```html
GET - /user/info
```

| 参数    | 是否必填 | 说明                                       |
| ----- | ---- | ---------------------------------------- |
| id    | 是    | 会员id                                     |
| extra | 否    | 拓展字段，数组，可包含：退款次数`refound_times`、退款金额`refound_total_amount`、购买次数`buy_times`、客单价`cost_average`、累计消费`cost_total_amount`、 |

```json
{
  id : 1,
  nickname : '韩文博',
  sex : 1,
  phone : 13502176003,
  birthday : 608169600,
  register_time : 1513584840,
}
```

## 新增客户 [废弃，没用]

```html
POST - /user/add
```

| 参数     | 是否必填 | 说明        |
| -------- | -------- | ----------- |
| name     | 是       | 姓名        |
| password | 是       | 密码        |
| phone    | 是       | 手机号      |
| sex      | 是       | 性别 1男0女 |
| birthday | 否       | 生日        |

## 删除客户(禁用+软删除)

```html
POST - /user/del
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| ids  | 是    | 用户id数组 |


## 客户详情-交易概况-统计

```html
GET - /user/statistics
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 用户id |


## 客户详情-交易概况-用户订单

```html
GET - /user/order
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 用户id |


## 客户详情-交易概况-收货信息

```html
GET - /user/address
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 用户id |


## 修改用户

```html
POST - /user/edit
```

| 参数         | 是否必填 | 说明     |
| ---------- | ---- | ------ |
| id         | 是    | 用户id   |
| avatar     | 否    | 用户头像   |
| name       | 否    | 用户姓名   |
| password   | 否    | 用户密码   |
| repassword | 否    | 用户确认密码 |

