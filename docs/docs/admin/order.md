## 订单列表

```html
GET | POST - /order/list
```

| 参数             | 是否必填 | 说明                                                         |
| ---------------- | -------- | ------------------------------------------------------------ |
| state_type       | 否       | 订单分类：待发货 `state_new` 、待付款`state_pay`、待发货 `state_send`、 已完成 `state_success`、已取消`state_cancel` |
| keywords_type    | 否       | 搜索条件：商品名称`goods_name` 、订单号`order_no`、收货人姓名 `receiver_name`、收货人电话 `receiver_phone`、 快递单号`courier_number` |
| keywords         | 否       | 关键词                                                       |
| create_time      | 否       | 数组，订单创建的开始时间[开始时间,结束时间]                  |
| feedback_state   | 否       | 维权状态：退款处理中 ` todo`、退款结束 `closed`              |
| page             | 是       | 分页数                                                       |
| rows             | 是       | 条数                                                         |
| user_ids         | 否       | 用户id集合，数组，用于需要查询某个用户id的订单的场景         |
| group_state_type | 否       | 待付款group_state_new, 正在进行中(待开团)group_state_pay, 拼团成功group_state_success, 拼团失败group_state_fail |
| order_type       | 否       | 1默认 2拼团                                                  |

## 订单详情

```html
GET /order/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 订单id |



## 拼团订单团信息[适用于订单详情]

```html
GET /order/groupInfo
```

| 参数 | 是否必填 | 说明   |
| ---- | -------- | ------ |
| id   | 是       | 订单id |



## 设置发货

```html
POST /order/setSend
```

| 参数              | 是否必填 | 说明                  |
| --------------- | ---- | ------------------- |
| id              | 是    | 订单id                |
| deliver_name    | 是    | 发货人名称               |
| deliver_phone   | 是    | 发货人电话               |
| deliver_address | 是    | 发货人详细地址             |
| express_id      | 否    | 物流公司id，默认为0 代表不需要物流 |
| shipping_code   | 否    | 物流单号                |
| remark          | 否    | 备注信息                |

## 订单状态量

```html
GET | POST - /order/stateNum
```


| 参数             | 是否必填 | 说明                                       |
| -------------- | ---- | ---------------------------------------- |
| state_types    | 是    | 状态集合，不需要的状态统计可以不填，减少浪费，要待发货 `state_new` 、待付款`state_pay`、待发货 `state_send`、 已完成 `state_success`、已取消`state_cancel` |
| keywords_type  | 否    | 搜索条件：商品名称`goods_name` 、订单号`order_no`、收货人姓名 `receiver_name`、收货人电话 `receiver_phone`、 快递单号`courier_number` |
| keywords       | 否    | 关键词                                      |
| create_time    | 否    | 数组，订单创建的开始时间[开始时间,结束时间]                  |
| feedback_state | 否    | 维权状态：退款处理中 ` todo`、退款结束 `closed`         |
| page           | 是    | 分页数                                      |
| rows           | 是    | 条数                                       |
| user_ids       | 否    | 用户id集合，数组，用于需要查询某个用户id的订单的场景             |


```json
{
  "state_new" : 1,
  "state_send" : 1,
  "state_success" : 1,
  "state_close" : 12,
  "state_unevaluate" : 1,
  "state_refund" : 2 // 为了减少浪费不需要的state_types别填哦 ~
}
```

## 物流查询

方式一：

```html
GET /order/logisticsQuery
```

| 参数          | 是否必填 | 说明     |
| ----------- | ---- | ------ |
| express_id  | 是    | 物流公司ID |
| tracking_no | 是    | 物流单号   |

方式二：前端自行处理

手机版本：【如果需要pc端请自行查看快递100官方文档】

https://m.kuaidi100.com/index_all.html?type=[快递公司编码]&postid=[快递单号]&callbackurl=[点击"返回"跳转的地址]

callback地址，经测试填入javascript:alert(1);会生效，意味着前端开发者可以利用该特性填入js方法。

[《快递100文档》](https://www.kuaidi100.com/openapi/mobileapi.shtml)



## 修改订单价格[目前不适用于拼团]

```html
POST /order/changePrice
```

| 参数               | 是否必填 | 说明                                                         |
| ------------------ | -------- | ------------------------------------------------------------ |
| revise_goods       | 是       | 订单商品 数组 格式 [['id'=>1,'difference_price'=>8], ['id'=>1,'difference_price'=>-8].......]   id 为 order_goods表id，difference_price为差价 可正可负 |
| revise_freight_fee | 是       | 修改过的实际支付的运费 必须大于等于0                         |