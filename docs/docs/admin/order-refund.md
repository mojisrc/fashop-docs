# 退款售后
## 	退款售后列表

```html
GET - /Orderrefund/list
```

| 参数          | 是否必填 | 说明                                                         |
| ------------- | -------- | ------------------------------------------------------------ |
| keywords_type | 否       | 搜索条件：商品名称`goods_name` 、订单号`order_no`、收货人姓名 `receiver_name`、收货人电话 `receiver_phone`、 快递单号`courier_number` |
| keywords      | 否       | 关键词                                                       |
| create_time   | 否       | 时间区间[开始时间戳,结束时间戳]                              |
| refund_type   | 否       | 申请类型:1为仅退款,2为退货退款                               |
| handle_state  | 否       | 1申请退款，等待商家确认 2同意申请，等待买家退货 3买家已发货，等待收货  4已收货，确认退款 5退款成功 6退款关闭 |
| order_type    | 否       | 排序 1申请时间早到晚  2申请时间晚到早                        |
| page          | 是       | 分页数                                                       |
| rows          | 是       | 条数                                                         |

## 退款详情

```html
GET - /Orderrefund/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 退款id |

```json
{
	"code": 0,
	"result": {
		"info": {
			"id": 11,
			"order_id": 28,
			"order_sn": "1000000000003101",
			"order_state": 20,
			"order_goods_id": 28,
			"refund_sn": "943111180610235214",
			"user_id": 559,
			"user_name": "wechat_oX3Qk0WeBKvrXvpHN8sSMdZ0H_T0_3d7f1b18",
			"goods_id": 100846,
			"goods_sku_id": 2535,
			"goods_title": "这是一件衣服规格",
			"goods_spec": [{
				"id": 5,
				"name": "尺寸",
				"value_id": 189,
				"value_name": "66"
			}, {
				"id": 4,
				"name": "码号",
				"value_id": 197,
				"value_name": "666"
			}, {
				"id": 1,
				"name": "颜色",
				"value_id": 215,
				"value_name": "蓝色"
			}],
			"goods_img": "https://demo.fashop.cn/Upload/20180515/As4VbciJEea6xu8.jpeg",
			"goods_pay_price": "0.01",
			"goods_num": 1,
			"goods_freight_fee": "0.00",
			"refund_type": 1,
			"refund_amount": "0.01",
			"order_amount": "0.01",
			"order_lock": 2,
			"create_time": 1528645934,
			"user_reason": "多拍/拍错/不想要",
			"user_explain": "我现在",
			"tracking_no": null,
			"tracking_phone": null,
			"tracking_company": null,
			"tracking_explain": null,
			"tracking_images": "[\"https://img.alicdn.com/bao/uploaded/i4/TB2GbSCmLiSBuNkSnhJXXbDcpXa_!!0-rate.jpg_400x400.jpg\", \"https://img.alicdn.com/bao/uploaded/i1/TB2MVb9s7SWBuNjSszdXXbeSpXa_!!0-rate.jpg_400x400.jpg\"]",
			"tracking_time": 0,
			"receive": 1,
			"receive_time": 0,
			"receive_message": null,
			"payment_code": "wechat_mini",
			"trade_no": "4200000117201806101884685552",
			"handle_state": 0,
			"handle_message": null,
			"handle_time": 0,
			"batch_no": null,
			"success_time": 0,
			"user_receive": 0,
			"user_images": "[\"https://img.alicdn.com/bao/uploaded/i4/TB2GbSCmLiSBuNkSnhJXXbDcpXa_!!0-rate.jpg_400x400.jpg\", \"https://img.alicdn.com/bao/uploaded/i1/TB2MVb9s7SWBuNjSszdXXbeSpXa_!!0-rate.jpg_400x400.jpg\"]",
			"is_close": 0,
			"handle_expiry_time": 1528732334,
			"send_expiry_time": 1528905134,
			"state_desc": ""
		}
	},
	"msg": null
}
```



## 处理退款

```html
POST - /Orderrefund/handle
```

| 参数           | 是否必填 | 说明                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| id             | 是       | 退款id                                                       |
| handle_state   | 是       | 处理状态，默认处理中(未处理)`0`  、拒绝(驳回)`10`、 同意`20`、 成功(已完成) `30` |
| handle_message | 是       | 处理信息                                                     |

> 金额不填是为了不影响正串业务逻辑，如果金额买家填的和商议的最终金额不一致，请先拒绝退款再让用户提交一份。（未来版本需要拓展管理员改金额的业务逻辑）

## 卖家确认收货

> 收到买家退回来的订单以后才能退款)

```html
POST - /Orderrefund/receive
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 退款id |

### 订单退款规则说明

卖家主动退款

a）卖家可主动对任意已收到货款的订单，主动操作退款，请先自行到微信公众平台退款，再使用标记退款功能关闭订单；
b）当该笔订单可退金额大于0时，订单状态不发生变化，依旧按照原有订单流程进行；
c）当该笔订单可退金额等于0时，订单关闭，卖家无需再发货；

注意：

- 商家可以点击同意退款，系统显示退款成功，这只是一个标记作用


- 分销订单、扫码收款订单、拼团未成团订单，不支持商家主动退款。



买家退款

- 锁定总订单，锁定订单商品表里的该条记录
- 退款成功保持记录
- 拒绝：1.
- 考虑退
