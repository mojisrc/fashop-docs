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
## 策略详情

```html
GET - /auth/policyInfo
```
| 参数 | 类型 | 是否必填 | 说明 |
| ---- | ---- | -------- | ---- |
| id   | Int  | 是       |      |
## 策略删除

```html
POST - /auth/policyDel
```
| 参数 | 类型 | 是否必填 | 说明 |
| ---- | ---- | -------- | ---- |
| id   | Int  | 是       |      |

## 组列表

```html
GET - /auth/groupList
```


## 组添加

```html
POST - /auth/groupAdd
```

| 参数   | 类型   | 是否必填 | 说明                  |
| ------ | ------ | -------- | --------------------- |
| name   | String | 是       | 组名字                |
| status | Int    | 是       | 是否开启，1开启 0禁止 |

## 组修改

```html
POST - /auth/groupEdit
```

| 参数   | 类型   | 是否必填 | 说明                  |
| ------ | ------ | -------- | --------------------- |
| id     | Int    | 是       | 组id                  |
| name   | String | 是       | 组名字                |
| status | Int    | 是       | 是否开启，1开启 0禁止 |

## 组详情

```html
POST - /auth/groupInfo
```

| 参数   | 类型   | 是否必填 | 说明                  |
| ------ | ------ | -------- | --------------------- |
| id     | Int    | 是       | 组id                  |

## 组删除

```html
POST - /auth/groupDel
```

| 参数 | 类型 | 是否必填 | 说明 |
| ---- | ---- | -------- | ---- |
| id   | Int  | 是       | 组id |

## 组策略列表

```html
GET - /auth/groupPolicyList
```
| 参数     | 类型 | 是否必填 | 说明 |
| -------- | ---- | -------- | ---- |
| group_id | Int  | 是       | 组id |

## 组策略添加

```html
POST - /auth/groupPolicyAdd
```

| 参数      | 类型 | 是否必填 | 说明   |
| --------- | ---- | -------- | ------ |
| policy_id | Int  | 是       | 策略id |
| group_id  | Int  | 是       | 组id   |

## 组策略删除

```html
POST - /auth/groupPolicyDel
```

| 参数      | 类型 | 是否必填 | 说明   |
| --------- | ---- | -------- | ------ |
| policy_id | Int  | 是       | 策略id |
| group_id  | Int  | 是       | 组id   |


## 组成员列表

```html
GET - /auth/groupMemberList
```
| 参数     | 类型 | 是否必填 | 说明             |
| -------- | ---- | -------- | ---------------- |
| group_id | Int  | 否       | 组id，不传是所有 |

> 返回：用户头像、昵称、账号username

## 组成员添加

```html
POST - /auth/groupMemberAdd
```

| 参数     | 类型 | 是否必填 | 说明   |
| -------- | ---- | -------- | ------ |
| user_id  | Int  | 是       | 用户id |
| group_id | Int  | 是       | 组id   |

## 组成员删除

```html
POST - /auth/groupMemberDel
```

| 参数     | 类型 | 是否必填 | 说明   |
| -------- | ---- | -------- | ------ |
| user_id  | Int  | 是       | 用户id |
| group_id | Int  | 是       | 组id   |

## 用户列表

```html
GET - /auth/userList
```

> 选择组员的时候会用到查询用户列表

| 参数     | 类型   | 是否必填 | 说明                        |
| -------- | ------ | -------- | --------------------------- |
| keywords | String | 否       | 关键词，搜索username和phone |

#### 系统权限介绍

**规范**

> 模块命名全为小写，具体方法为骆峰式，如：orderreturn/receiveSomeXx

- 全部权限

```json
{"Statement": [{"Action": ["*"], "Effect": "Allow"}]}
```

- 订单

```json
{"Statement": [{"Action": ["order/*"], "Effect": "Allow"}]}
```

- 退款退货

```json
{"Statement": [{"Action": ["orderrefund/*"], "Effect": "Allow"}]}
```

- 评价

```json
{"Statement": [{"Action": ["goodsevalute/*"], "Effect": "Allow"}]}
```

- 配置

```json
{"Statement": [{"Action": ["setting/*"], "Effect": "Allow"}]}
```

- 商家地址库

```json
{"Statement": [{"Action": ["shipper/*"], "Effect": "Allow"}]}
```

- 物流公司

```json
{"Statement": [{"Action": ["express/*"], "Effect": "Allow"}]}
```

- 运费模板

```json
{"Statement": [{"Action": ["freight/*"], "Effect": "Allow"}]}
```

- 商品

```json
{"Statement": [{"Action": ["goods/*","goodscategory/*","goodsspec/*","goodsspecvalue/*"], "Effect": "Allow"}]}
```

> 包含了商品、商品分类、商品规格、商品规格值（规格的子项）

- 客户

```json
{"Statement": [{"Action": ["user/*"], "Effect": "Allow"}]}
```

- 权限

```json
{"Statement": [{"Action": ["auth/*"], "Effect": "Allow"}]}
```

- 店铺

```json
{"Statement": [{"Action": ["shop/*"], "Effect": "Allow"}]}
```

- 店铺制作页面

```json
{"Statement": [{"Action": ["page/*"], "Effect": "Allow"}]}
```

- 数据统计（概况）

```json
{"Statement": [{"Action": ["statistics/*"], "Effect": "Allow"}]}
```

