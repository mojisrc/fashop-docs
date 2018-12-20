# 用户
## 登陆

```html
POST - /user/login
```
| 参数                | 是否必填 | 说明                                       |
| ----------------- | ---- | ---------------------------------------- |
| login_type        | 是    | 登陆方式 `password`密码登陆   `wechat_openid`微信登陆 |
| username          | 否    | 手机号，登陆方式为`password` 必填                   |
| password          | 否    | 密码，登陆方式为`password` 必填                    |
| wechat_openid     | 否    | 微信openid ，登陆方式为`wechat_openid` 必填        |
| wechat_mini_param | 否    | 数组，必须包含code，encryptedData，iv             |

返回的信息里包含会过期的token

## 注册

```html
POST - /user/register
```

| 参数                | 是否必填 | 说明                                       |
| ----------------- | ---- | ---------------------------------------- |
| register_type     | 是    | 注册方式 `password` 密码注册    `wechat_openid` 微信注册 |
| username          | 否    | 账号（手机号），注册方式为`password` 必填               |
| password          | 否    | 密码，注册方式为`password` 必填                    |
| channel_type      | 否    | 渠道，`sms`短信 `email` 邮箱，v1版本选`sms` ，注册方式为`password` 必填 |
| verify_code       | 否    | 验证码，注册方式为`password` 必填                   |
| wechat_openid     | 否    | 微信openid，注册方式为`wechat_openid` 必填         |
| wechat            | 否    | 微信的用户信息，注册方式为`wechat_openid` 必填，字段参考《[微信文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)》 |
| wechat_mini_param | 否    | 数组，必须包含code，encryptedData，iv             |

## 退出

```html
GET - /user/logout
```

## 修改密码

```html
POST - /user/editPassword
```

| 参数          | 是否必填 | 说明   |
| ----------- | ---- | ---- |
| oldpassword | 是    | 老密码  |
| password    | 是    | 新密码  |

## 找回密码

```html
POST - /user/editPasswordByFind
```

| 参数          | 是否必填 | 说明   |
| ----------- | ---- | ---- |
| phone       | 是    | 手机号  |
| password    | 是    | 新密码  |
| verify_code | 是    | 验证码  |

## 发送验证码

```html
POST - /Verifycode/add
```

| 参数           | 是否必填 | 说明                                       |
| ------------ | ---- | ---------------------------------------- |
| behavior     | 是    | 行为标识，`register` 注册    `findPassword` 找回密码   `editPassword` 修改密码        `bindPhone` 绑定手机 |
| channel_type | 是    | 固定 传sms                                  |
| phone        | 是    | 手机号                                      |

## 用户信息

```html
GET - /user/self
```

```json
{
    "code":0,
    "result":{
        "info":{
            "id":563,
            "username":"wechat_mini_oX3Qk0RaO1SPqT-KQNKx6rjdts_I_d1e99fc9",
            "phone":null,
            "email":null,
            "state":1,
            "salt":"56ea1c760da8314aab01504529eda896",
            "is_discard":0,
            "create_time":1534994779,
            "delete_time":null,
            "profile":{
                "id":2,
                "user_id":563,
                "name":null,
                "nickname":"韩文博😊",
                "avatar":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep7piaSYcwom3S1gouQ2nMxpXm2WwJuEA15qEXtkibRBXm7bc9BEuWuABP53ibrMWkJImTTIynzGfjTQ/132",
                "sex":1,
                "birthday":0,
                "qq":null,
                "delete_time":null
            },
            "assets":{
                "id":2,
                "user_id":563,
                "points":0,
                "balance":"0.00",
                "delete_time":null
            }
        }
    },
    "msg":null
}
```



## 修改资料

```html
POST - /user/editProfile
```

| 参数          | 是否必填 | 说明            |
| ----------- | ---- | ------------- |
| province_id | 否    | 省份id          |
| city_id     | 否    | 城市id          |
| area_id     | 否    | 区域id          |
| nickname    | 否    | 昵称            |
| sex         | 否    | 性别 `1`男 `0` 女 |
| avatar      | 否    | 头像地址          |
| birthday    | 否    | 生日时间戳         |

## 刷新token

```html
POST - /user/token
```

## 绑定手机号

```html
POST - /user/bindPhone
```

| 参数          | 是否需必填 | 说明   |
| ----------- | ----- | ---- |
| phone       | 是     | 手机号  |
| password    | 是     | 密码   |
| verify_code | 是     | 验证码  |

## 绑定微信

```html
POST - /user/bindWechat
```

| 参数            | 是否必填 | 说明                                       |
| ------------- | ---- | ---------------------------------------- |
| wechat_openid | 是    | 微信openid                                 |
| wechat        | 是    | 微信的用户信息，注册方式为`wechat_openid` 必填，字段参考《[微信文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)》 |

## 手机解绑微信

```html
POST - /user/unbindWechat
```

## 微信解绑手机

```html
POST - /user/unbindPhone
```



