# 商品分类
## 添加商品分类

```html
POST - /goodscategory/add
```

| 参数   | 是否必填 | 说明              |
| ---- | ---- | --------------- |
| name | 是    | 分类名称            |
| pid  | 否    | 父级id，如果不填为一级    |
| icon | 否    | 商品分类图标，图片地址     |
| sort | 否    | 排序数字，越小越靠前，默认为0 |

## 修改商品分类

```html
POST - /goodscategory/edit
```

| 参数   | 是否必填 | 说明              |
| ---- | ---- | --------------- |
| id   | 是    | 商品分类id          |
| name | 否    | 分类名称            |
| pid  | 否    | 父级id，如果不填为一级    |
| icon | 否    | 商品分类图标，图片地址     |
| sort | 否    | 排序数字，越小越靠前，默认为0 |

## 商品分类列表

```html
GET - /goodscategory/list
```

```json
[
  {
    id : 1,
    name : '母婴用品',
    pid : 0,
    icon : 'http://xxxxxxxxxx.jpg',
    sort : 100,
    _child : [
      {
        id : 2,
        name : '奶粉',
        pid : 1,
        icon : 'http://xxxx.jpg',
        sort : 200,
        _child : []
      }
    ]
  }
]
```

> 排序顺序：sort 越小越靠前，order by sort asc , id asc

## 删除商品分类

```html
POST - /goodscategory/del
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| id   | 是    | 商品分类id |

> 注意：后端为假删除，真删除了关联的数据恐怕有bug，后台所有删除为假删除（不懂可以搜索 thinkphp5 软删除）

## 商品分类详情

```html
GET - /goodscategory/info
```

| 参数   | 是否必填 | 说明     |
| ---- | ---- | ------ |
| id   | 是    | 商品分类id |

## 排序商品分类

```html
POST - /goodscategory/sort
```
| 参数          | 是否必填 | 说明       |
| ----------- | ---- | -------- |
| sorts       | 是    | 排序数集合，数组 |
| sorts.id    | 是    | 排序id     |
| sorts.index | 是    | 排序数      |

