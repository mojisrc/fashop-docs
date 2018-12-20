# 物流地址
## 新增物流地址

```html
POST - /shipper/add
```

| 参数           | 是否必填 | 说明     |
| -------------- | -------- | -------- |
| name           | 是       | 发货人   |
| area_id        | 是       | 区县ID   |
| address        | 是       | 详细地址 |
| contact_number | 是       | 联系电话 |

> 后端注意：
>
> - 地区的数据从高德接口抓取回来 http://lbs.amap.com/api/webservice/guide/api/district

## 修改物流地址

```html
POST - /shipper/edit
```

| 参数           | 是否必填 | 说明       |
| -------------- | -------- | ---------- |
| id             | 是       | 物流地址id |
| name           | 是       | 发货人     |
| area_id        | 是       | 区县ID     |
| address        | 是       | 详细地址   |
| contact_number | 是       | 联系电话   |

## 物流地址列表

```html
GET - /shipper/list
```

```json
[
  {
    id : 1,
    name : '韩文博',
    province_id : 120000,
    city_id : 120100,
    district_id : 120103,
    street_id : 220204002,
    area_info : '天津 天津市 河西区 南京路',
    address : '某某大厦 x门',
    contact_number : 13502176003,
    is_default : 1, // 默认地址
  }
]
```

## 删除可配送区域模板

```html
POST - /shipper/del
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| id   | 是    | 物流地址id |

> 注意：后端为假删除，真删除了关联的数据恐怕有bug，后台所有删除为假删除（tinkphp5 软删除）

## 设置默认地址

```html
POST - /shipper/setDefault
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 物流id |

