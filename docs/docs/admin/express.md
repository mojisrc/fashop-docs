# 物流公司
## 添加物流公司

```html
POST - /express/add
```

| 参数             | 是否必填      | 说明        |
| -------------- | --------- | --------- |
| company_name   | 是         | 公司名称      |
| kuaidi100_code | 是         | 快递100Code |
| taobao_code    | 否（这个先废弃 ） | 淘宝100Code |

## 编辑物流公司

```html
POST - /express/edit
```

| 参数             | 是否必填      | 说明        |
| -------------- | --------- | --------- |
| id             | 是         | 物流id      |
| company_name   | 是         | 公司名称      |
| kuaidi100_code | 是         | 快递100Code |
| taobao_code    | 否（这个先废弃 ） | 淘宝100Code |

> 后端注意：
>
> - 默认为非常用物流

## 设置为常用物流状态

```html
POST - /express/setCommonlyUse
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 物流id |

## 物流公司列表

```html
GET - /express/list
```
| 参数            | 是否必填 | 说明                                       |
| ------------- | ---- | ---------------------------------------- |
| keywords_type | 否    | 关键词类型 company_name kuaidi100_code taobao_code（taobao_code这个先废弃 ） |
| keywords      | 否    | 关键词


## 物流公司列表（这个设计图没有  顺手就给写了）

```html
POST - /express/del
```
| 参数   | 是否必填 | 说明         |
| ---- | ---- | ---------- |
| id   | 是    | express表ID |


