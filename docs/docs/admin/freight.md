# 运费模板
## 添加运费模板

```html
POST - /freight/add
```

| 参数                      | 是否必填 | 说明                   |
| ----------------------- | ---- | -------------------- |
| name                    | 是    | 模板名称                 |
| pay_type                | 是    | 计算方式：`1` 按件数 `2` 按重量 |
| areas                   | 是    | 配送地区及收费，数组           |
| areas.first_amount      | 是    | 首件（个、Kg）             |
| areas.first_fee         | 是    | 运费（元）                |
| areas.additional_amount | 是    | 续件（个、Kg）             |
| areas.additional_fee    | 是    | 续费（元）                |
| areas.ids               | 是    | 地区id集合               |

```json
{
  "name" : "全国配送",
  "pay_type" :  1,
  "areas" : [
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [150400,150600,150700,150800,150900,152200]
    },
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [130102]
    },
  ]
}
```

地区id说明：

如果是全省就传省id，

如果是全市就传全市id

如果某个省的多个市，就传多个市的id，

如果某个省下的多个市的多个区，就传区的id，

如果某个省下的一个市的某个几个区和其他几个全市，就传几个区的id加几个全市的id，

最后传给服务端排序又序号从小到大进行排序。

## 编辑运费模板

```html
POST - /freight/edit
```

| 参数                      | 是否必填 | 说明         |
| ----------------------- | ---- | ---------- |
| id                      | 是    | 模板id       |
| name                    | 是    | 模板名称       |
| areas                   | 是    | 配送地区及收费，数组 |
| areas.first_amount      | 是    | 首件（个、Kg）   |
| areas.first_fee         | 是    | 运费（元）      |
| areas.additional_amount | 是    | 续件（个、Kg）   |
| areas.additional_fee    | 是    | 续费（元）      |
| areas.ids               | 是    | 地区id集合     |

```json
{
  "id" : 1,
  "name" : "全国配送",
  "calculation_mode" :  "piece",
  "areas" : [
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [150400,150600,150700,150800,150900,152200]
    },
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [130102]
    },
  ]
}
```



> 后端注意：
>
> - 名字和计算方式不可修改，记得过滤
> - update_time 更新为最新

## 运费列表

```html
GET - /freight/list
```
```json
[
  {
  "id" : 1,
  "name" : "全国配送",
  "calculation_mode" :  "piece",
  "areas" : [
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [150400,150600,150700,150800,150900,152200]
    },
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [130102]
    },
  ]
},
  {
  "id" : 2,
  "name" : "全国配送",
  "calculation_mode" :  "piece",
  "areas" : [
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [150400,150600,150700,150800,150900,152200]
    },
    {
      "first_amount" : 1,
      "first_fee" : 1,
      "additional_amount" : 2,
      "additional_fee" : 3,
      "area_ids" : [130102]
    },
  ]
}
]
```

## 指定地区列表

```html
GET - /Area/list
```
| 参数    | 是否必填 | 说明              |
| ----- | ---- | --------------- |
| level | 是    | 层级 1省级 2市级 3区县级 |

## 删除运费模板

```html
POST - /freight/del
```

| 参数   | 是否必填 | 说明         |
| ---- | ---- | ---------- |
| id   | 是    | Freight表ID |
