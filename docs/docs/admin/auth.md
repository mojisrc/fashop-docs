# 权限管理

## 策略列表

```
GET - /auth/policyList
```

## 策略添加

```html
POST - /auth/policyAdd
```

| 参数      | 类型   | 是否必填 | 说明         |
| --------- | ------ | -------- | ------------ |
| name      | String | 是       |              |
| structure | Object | 是       | 策略数据结构 |

`structure` 示例:

```json
{
    "Statement":[
        {
            "Effect": "Allow",
            "Action": ["goods/*", "order/*"]
    	}
    ]
}
```

以上策略意思为：goods/后的所有接口，order/后的所有接口

## 策略修改

```html
POST - /auth/policyEdit
```

| 参数      | 类型   | 是否必填 | 说明         |
| --------- | ------ | -------- | ------------ |
| id        | Int    | 是       |              |
| name      | String | 是       |              |
| structure | Object | 是       | 策略数据结构 |
## 策略删除

```html
POST - /auth/policyDel
```
| 参数 | 类型 | 是否必填 | 说明 |
| ---- | ---- | -------- | ---- |
| id   | Int  | 是       |      |

## 角色组列表

```html
GET - /auth/groupList
```

## 角色组添加

```html
POST - /auth/groupAdd
```

| 参数   | 类型   | 是否必填 | 说明                  |
| ------ | ------ | -------- | --------------------- |
| name   | String | 是       | 组名字                |
| status | Int    | 是       | 是否开启，1开启 0禁止 |

## 角色组修改
```html
POST - /auth/groupEdit
```

| 参数   | 类型   | 是否必填 | 说明                  |
| ------ | ------ | -------- | --------------------- |
| id     | Int    | 是       | 组id                  |
| name   | String | 是       | 组名字                |
| status | Int    | 是       | 是否开启，1开启 0禁止 |
## 角色组删除

```html
POST - /auth/groupDel
```

| 参数 | 类型 | 是否必填 | 说明 |
| ---- | ---- | -------- | ---- |
| id   | Int  | 是       | 组id |

## 组成员列表

```html
GET - /auth/memberList
```

## 组成员添加

```html
POST - /auth/memberAdd
```

| 参数     | 类型 | 是否必填 | 说明   |
| -------- | ---- | -------- | ------ |
| user_id  | Int  | 是       | 用户id |
| group_id | Int  | 是       | 组id   |

## 组成员删除

```html
POST - /auth/memberDel
```

| 参数     | 类型 | 是否必填 | 说明   |
| -------- | ---- | -------- | ------ |
| user_id  | Int  | 是       | 用户id |
| group_id | Int  | 是       | 组id   |

