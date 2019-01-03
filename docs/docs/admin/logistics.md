# 物流接口

## 物流接口详情

```
GET - /logistics/info
```

| 参数 | 是否必填 | 类型   | 说明               |
| ---- | -------- | ------ | ------------------ |
| name | 是       | String | 快递100`kuaidi100` |

## 物流接口保存

```html
POST - /logistics/edit
```



| 参数   | 是否必填 | 类型   | 说明                 |
| ------ | -------- | ------ | -------------------- |
| name   | 是       | String | 快递100`kuaidi100`   |
| config | 是       | json   | 配置信息，格式如下： |

#### 快递100的config数据格式

分3个版本，分别为：免费版、限量免费、企业接口

- 免费版

```json
{
   "version":"free"
}
```

| 参数    | 是否必填 | 类型   | 说明         |
| ------- | -------- | ------ | ------------ |
| version | 是       | string | 值为  `free` |

- 限量免费

```json
{
  "version":"limited",
  "app_key":"xxxxxxxxxxxx",
  "cache_expire_seconds": 1000
}
```

| 参数                 | 是否必填 | 类型   | 说明                                                         |
| -------------------- | -------- | ------ | ------------------------------------------------------------ |
| version              | 是       | string | 值为 `limited`                                               |
| app_key              | 否       | String | 授权秘钥                                                     |
| cache_expire_seconds | 否       | Int    | 缓存过期秒数， 正式接口可能存在次数限制问题，设置缓存时间后在指定时间内只调取缓存并不调用接口（数据可能会延迟） |

- 企业接口

```json
{
  "version":"limited",
  "app_key":"xxxxxxxxxxxx",
  "enterprise_customer_number": "xxxxxxxxxxx",
  "cache_expire_seconds": 1000
}
```

| 参数                       | 是否必填 | 类型   | 说明                                                         |
| -------------------------- | -------- | ------ | ------------------------------------------------------------ |
| version                    | 是       | string | 值为 `enterprise`                                            |
| app_key                    | 否       | String | 授权秘钥                                                     |
| enterprise_customer_number | 否       | String | 企业编号                                                     |
| cache_expire_seconds       | 否       | Int    | 缓存过期秒数， 正式接口可能存在次数限制问题，设置缓存时间后在指定时间内只调取缓存并不调用接口（数据可能会延迟） |

完整提交示例：

```json
{
    "name":"kuaidi100",
    "config":{
      "version":"limited",
      "app_key":"xxxxxxxxxxxx",
      "enterprise_customer_number": "xxxxxxxxxxx",
      "cache_expire_seconds": 1000
    }
}
```

> 后端接口会验证每个version对应的字段是否存在，可以为空但不可以不存在

界面示例：
![image](https://ws1.sinaimg.cn/large/006tNbRwgy1fyk43on2mtj316k0dqgn1.jpg)