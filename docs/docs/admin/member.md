# 成员
## 成员列表

```html
GET - /member/list
```

## 成员添加

```html
POST - /member/add
```

| 参数       | 是否必填 | 说明   |
| -------- | ---- | ---- |
| username | 是    | 账号   |
| password | 是    | 密码   |
| nickname | 否    | 昵称   |

## 成员详情

```html
GET - /member/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 成员id |

```json
{
  "code": 0,
  "result": {
    "info": {
      "id": 1,
      "nickname": "韩文博",
      "username": "admin",
      "email": "9476400@qq.com",
      "phone": "0",
      "avatar": " "
    },
    "group": [],
    "rules": [
      "area",
      "area/list",
      "area/openoperation",
    ]
  },
  "msg": null
}
```



## 成员修改

```html
POST - /member/edit
```

| 参数       | 是否必填 | 说明        |
| -------- | ---- | --------- |
| id       | 是    | 成员id      |
| avatar   | 否    | 头像，url    |
| nickname | 否    | 昵称        |
| password | 否    | 密码，当存在时判断 |

## 成员删除

```html
POST - /member/del
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 成员id |



## 成员修改自己的密码

```html
POST - /member/selfPassword
```

| 参数          | 是否需必填 | 说明                 |
| ----------- | ----- | ------------------ |
| oldpassword | 是     | 老密码，6-32位          |
| password    | 是     | 新密码，6-32位，不能与老密码相同 |


## 修改当前用户的信息

```html
POST - /member/selfEdit
```

| 参数       | 是否必填 | 说明        |
| -------- | ---- | --------- |
| avatar   | 否    | 头像，url    |
| nickname | 否    | 昵称        |

## 登陆

```html
POST - /member/login
```

| 参数          | 是否必填 | 说明   |
| ----------- | ---- | ---- |
| username    | 是    | 用户名  |
| password    | 是    | 密码   |
| verify_code | 是    | 验证码  |

```json
{
    "code":0,
    "result":{
    	"access_token":"HAiOjE1NDUzNjI5ODN9.XEEqOUR8o9QhO4Kj",
        "expires_in":604800
    },
    "msg":null
}
```



## 验证码获得

```html
GET - /member/verifyCode
```

## 刷新Token

```html
POST - /member/token
```

## 当前用户信息

```html
GET - /member/self
```

## 退出

```html
POST - /member/logout
```

## 登陆信息

```html
GET - /member/loginInfo
```

> 如果是第一次登陆 last_login_ip 和 last_login_time 等于 null，前端处理的时候注意样式判断

```json
{
  "code": 0,
  "result": {
    "current_login_ip": "127.0.0.1",
    "last_login_ip": null,
    "last_login_time": null
  },
  "msg": null
}
```

