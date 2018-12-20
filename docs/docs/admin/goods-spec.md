# 商品规格
## 添加商品规格

```html
POST - /goodsspec/add
```

| 参数   | 是否必填 | 说明              |
| ---- | ---- | --------------- |
| name | 是    | 规格名称            |
| sort | 否    | 排序数字，越小越靠前，默认为0 |

## 修改商品规格

```html
POST - /goodsspec/edit
```

| 参数   | 是否必填 | 说明              |
| ---- | ---- | --------------- |
| id   | 是    | 规格id            |
| name | 是    | 规格名称            |
| sort | 否    | 排序数字，越小越靠前，默认为0 |

## 商品规格列表

```html
GET - /goodsspec/list
```

```json
[
  {
    id : 1,
    name : '尺寸',
    sort : 100
  }
]
```

> 排序顺序：sort 越小越靠前，order by sort asc , id asc

## 删除商品规格

```html
POST - /goodsspec/del
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规格id |

> 注意：后端为加删除，真删除了关联的数据恐怕有bug，后台所有删除为假删除

## 商品规格值列表

```html
GET - /Goodsspecvalue/list
```

| 参数      | 是否必填 | 说明   |
| ------- | ---- | ---- |
| spec_id | 是    | 规格id |

```json
[
  {
    id : 1,
    name : 'L'
  },
  {
    id : 2,
    name : 'M'
  },
  {
    id : 3,
    name : 'X'
  },
  {
    id : 4,
    name : 'XL'
  },
  {
    id : 5,
    name : 'XXL'
  }
]
```

## 添加商品规格值

```html
POST - /Goodsspecvalue/add
```

| 参数      | 是否必填 | 说明   |
| ------- | ---- | ---- |
| spec_id | 是    | 规格id |
| name    | 是    | 值名字  |

## 删除商品规格值

```html
POST - /Goodsspecvalue/del
```

| 参数   | 是否必填 | 说明    |
| ---- | ---- | ----- |
| id   | 是    | 规格值id |

## TODO LIST

- 商品详情里都保存规格的哪些数据？规格值是否可以真删除？
- 记得写seed数据，默认在数据库里 需要有基础的数据
