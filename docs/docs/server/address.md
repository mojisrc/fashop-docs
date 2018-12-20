# 收货地址
## 设置默认收货地址

```html
POST - /address/setDefault
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 地址id |

## 默认收货地址

```html
GET - /address/default
```

## 地址详情

```html
GET - /address/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 地址id |

```json
{
    "code":0,
    "result":{
        "info":{
            "id":391,
            "user_id":542,
            "truename":"回家啊",
            "province_id":110000,
            "city_id":110100,
            "area_id":110101,
            "address":"1111",
            "combine_detail":"北京市 北京城区 东城区",
            "tel_phone":null,
            "mobile_phone":"13502176003",
            "zip_code":null,
            "is_default":1,
            "type":"个人",
            "street_id":0,
            "delete_time":null
        }
    },
    "msg":null
}
```



## 收货地址列表

```html
GET - /address/list
```

```json
{
    "code":0,
    "result":{
        "list":[
            {
                "id":391,
                "user_id":542,
                "truename":"回家啊",
                "province_id":110000,
                "city_id":110100,
                "area_id":110101,
                "address":"1111",
                "combine_detail":"北京市 北京城区 东城区",
                "tel_phone":null,
                "mobile_phone":"13502176003",
                "zip_code":null,
                "is_default":1,
                "type":"个人",
                "street_id":0,
                "delete_time":null
            },
            {
                "id":389,
                "user_id":542,
                "truename":"韩文博",
                "province_id":110000,
                "city_id":110100,
                "area_id":110101,
                "address":"玉水园",
                "combine_detail":"北京市 北京城区 东城区",
                "tel_phone":null,
                "mobile_phone":"13502176003",
                "zip_code":null,
                "is_default":0,
                "type":"个人",
                "street_id":0,
                "delete_time":null
            }
        ]
    },
    "msg":null
}
```



## 新增收货地址

```html
POST - /address/add
```

| 参数         | 是否必填 | 说明                     |
| ------------ | -------- | ------------------------ |
| type         | 否       | 类型，个人 、公司、 其他 |
| truename     | 是       | 真实姓名                 |
| area_id      | 是       | 地区id(县、区)           |
| mobile_phone | 是       | 联系电话                 |
| address      | 是       | 具体地址                 |
| is_default   | 是       | 是否默认  1是0否         |

## 修改收货地址
```html
POST - /address/edit
```

| 参数         | 是否必填 | 说明                     |
| ------------ | -------- | ------------------------ |
| id           | 是       | 地址id                   |
| type         | 否       | 类型，个人 、公司、 其他 |
| truename     | 是       | 真实姓名                 |
| area_id      | 是       | 地区id(县、区)           |
| mobile_phone | 是       | 联系电话                 |
| address      | 是       | 具体地址                 |
| is_default   | 是       | 是否默认  1是0否         |
## 删除收货地址

```html
POST - /address/del
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 地址id |

