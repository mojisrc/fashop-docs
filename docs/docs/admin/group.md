## 拼团活动列表

```html
GET - /Group/list
```

| 参数     | 是否必填 | 说明                                    |
| -------- | -------- | --------------------------------------- |
| keywords | 否       | 关键词 活动名称                         |
| state    | 否       | 状态 0未开始 10进行中 20已结束 30已失效 |



## 拼团活动详情

```html
GET /Group/info
```

| 参数 | 是否必填 | 说明   |
| ---- | -------- | ------ |
| id   | 是       | 数据id |



## 添加拼团活动

```html
POST /Group/add
```

```json
     * @param string title              名称
     * @param string time_over_day      时限天数
     * @param string time_over_hour     时限小时
     * @param string time_over_minute   时限分钟
     * @param string start_time         开始时间
     * @param string end_time           结束时间
     * @param string limit_buy_num      拼团人数
     * @param string limit_group_num    每位用户可进行的团数
     * @param string limit_goods_num    用户每次参团时可购买件数
     * @param array  group_goods        数组 格式 [ ['goods_id'=>1,'goods_sku_id'=>1,'group_price'=>1,'captain_price'=>1],['goods_id'=>2,'goods_sku_id'=>2,'group_price'=>2,'captain_price'=>2...] ] 商品选择数组 
     * 注释：
     * goods_id         商品主表id 只能选择一个商品 group_goods里goods_id必须为一
     * goods_sku_id     商品id
     * group_price      拼团价格
     * captain_price    团长价格
```



## 编辑拼团活动

```html
POST /Group/edit
```

```json
     * @param int    id                 数据id
     * @param string title              名称
     * @param string time_over_day      时限天数
     * @param string time_over_hour     时限小时
     * @param string time_over_minute   时限分钟
     * @param string start_time         开始时间
     * @param string end_time           结束时间
     * @param string limit_buy_num      拼团人数
     * @param string limit_group_num    每位用户可进行的团数
     * @param string limit_goods_num    用户每次参团时可购买件数
     * @param array  group_goods        数组 格式 [ ['goods_id'=>1,'goods_sku_id'=>1,'group_price'=>1,'captain_price'=>1],['goods_id'=>2,'goods_sku_id'=>2,'group_price'=>2,'captain_price'=>2...] ] 商品选择数组 
     * 注释：
     * goods_id         商品主表id 只能选择一个商品 group_goods里goods_id必须为一样
     * goods_sku_id     商品id
     * group_price      拼团价格
     * captain_price    团长价格
     * 备注：正在进行不可以修改规格 所以用不上group_goods
```



## 拼团活动可选择商品列表

```html
GET /Group/selectableGoods
```

| 参数         | 是否必填 | 说明            |
| ------------ | -------- | --------------- |
| title        | 否       | 商品名称        |
| category_ids | 否       | 分类id 数组格式 |



## 拼团活动已选择商品列表 废弃

```html
GET /Group/selectedGoods
```

| 参数     | 是否必填 | 说明       |
| -------- | -------- | ---------- |
| group_id | 是       | 拼团活动id |



## 拼团活动已选择商品sku列表

```html
GET /Group/goodsSkuList
```

| 参数     | 是否必填 | 说明       |
| -------- | -------- | ---------- |
| group_id | 是       | 拼团活动id |

```
{
    "code": 0,
    "result": {
        "total_number": 2,
        "list": [
            {
                "id": 1,
                "goods_id": 1,
                "spec": [
                    {
                        "id": 1,
                        "name": "颜色",
                        "value_id": 1,
                        "value_name": "白色"
                    }
                ],
                "price": "0.01",
                "stock": 3333,
                "code": "1",
                "img": "http://192.168.178.134/Upload/20190103/F795chaYJIiwxES.jpeg",
                "weight": 0,
                "title": "iphone 白色",
                "sale_num": 0,
                "group_sale_num": 0,
                "spec_value_sign": "[1]",
                "spec_sign": "[1]",
                "create_time": 1546497554,
                "update_time": null,
                "delete_time": null,
                "group_id": 4,
                "group_price": "0.10",
                "captain_price": "0.01"
            },
            {
                "id": 2,
                "goods_id": 1,
                "spec": [
                    {
                        "id": 1,
                        "name": "颜色",
                        "value_id": 2,
                        "value_name": "蓝色"
                    }
                ],
                "price": "0.01",
                "stock": 3333,
                "code": "2",
                "img": "http://192.168.178.134/Upload/20190103/F795chaYJIiwxES.jpeg",
                "weight": 0,
                "title": "iphone 蓝色",
                "sale_num": 0,
                "group_sale_num": 0,
                "spec_value_sign": "[2]",
                "spec_sign": "[1]",
                "create_time": 1546497554,
                "update_time": null,
                "delete_time": null,
                "group_id": 4,
                "group_price": "0.20",
                "captain_price": "0.02"
            }
        ]
    },
    "msg": null
}
```





## 拼团活动设置

```html
POST /Group/showSet
```

| 参数 | 是否必填 | 说明       |
| ---- | -------- | ---------- |
| id   | 是       | 拼团活动id |



## 删除拼团活动

```html
POST /Group/del
```

| 参数 | 是否必填 | 说明       |
| ---- | -------- | ---------- |
| id   | 是       | 拼团活动id |



## 店铺拼团活动商品

```html
GET /Group/pageGoods
```

查询的是未结束[未开始和进行中并且是正在执行]的活动下的所有拼团商品