# 商品
## 商品列表

```html
GET /goods/list
```

| 参数           | 是否必填 | 说明                                       |
| ------------ | ---- | ---------------------------------------- |
| sale_state   | 否    | 售卖状态  1出售中 2已售完 3已下架                     |
| title        | 否    | 商品名称                                     |
| category_ids | 否    | 分类id 数组格式                                |
| order_type   | 否    | 1商品价格低到高 2商品价格高到低 3销量多到少 4销量少到多 5库存多到少 6库存少到多 7创建时间早到晚 8创建时间晚到早 9排序高到低 10排序低到高 |

## 商品信息

```html
GET /goods/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 商品id |

> 后端注意：
>
> - 查询的goods_common表
> - goods表可以理解为sku

返回数据结构如下：

```json
{
  id : 1,
  title : 'fashop 撞色休闲假两件连帽外套女2017秋装长袖外套',
  images : [
    {
      id : 1,
      url : 'http://xxx.jpg',
    },
    {
      id : 2,
      url : 'http://xxx.jpg',
    },
    {
      id : 3,
      url : 'http://xxx.jpg',
    }
  ],
  category_ids : [1,23,6,335,],
  base_sale_num  : 367,
  freight_template_id : 1,
  send_area_id  : 1,
  body : [],
  is_on_sale : 1,
  use_image_spec_id  : 1,
  skus : [
      {
        "spec": [
          {
          "id": 20509,
          "value_id": 28313,
          "name": "尺码",
          "value_name": "XS",
          },
          {
          "id": 20509,
          "value_id": 28213,
          "name": "颜色",
          "value_name": "墨绿色",
          },
        ],
        "price": 23,
        "stock": 23,
        "code": "商品编号",
        "weight": 0, // 重量，当选择按重量计算的运费模板时才出现
      },
      {
        "spec_list": [
          {
          "id": 20509,
          "value_id": 28313,
          "name": "尺码",
          "value_name": "XS",
          },
          {
          "id": 20509,
          "value_id": 28212,
          "name": "颜色",
          "value_name": "红色",
          },
        ],
        "price": 23,
        "stock": 23,
        "code": "商品编号",
        "weight": 0, // 重量，当选择按重量计算的运费模板时才出现
      },
    ]
}
```

## 添加商品

```html
POST - /goods/add
```

| 参数                | 是否必填 | 说明                                 |
| ------------------- | -------- | ------------------------------------ |
| title               | 是       | 商品标题                             |
| images              | 是       | 商品图片，数组，默认第一个为封面图片 |
| category_ids        | 是       | 商品分类id集合，数组                 |
| base_sale_num       | 是       | 基础销量，为空请输入`0`              |
| freight_id | 是       | 运费模板id                           |
| freight_fee      | 否    | 统一运费，默认为0           |
| sale_time           | 是    | 开售时间，立即开始传当前时间   |
| body                | 是       | 商品详情，json                       |
| is_on_sale          | 是       | 是否需上架出售 `0` 否 `1` 是         |
| image_spec_id       | 否       | 使用图片的规格id                     |
| skus                | 是       | sku商品集合，数组                    |
| skus.spec           | 否       | sku规格                              |
| skus.spec.id        | 否       | sku规格id                            |
| skus.spec.name      | 否       | sku规格值id                          |
| skus.spec.value_id  | 否       | sku规格名                            |
| skus.spec.value_name | 否       | sku规格值名                          |
| skus.spec.value_image | 否 | sku规格图片 |
| skus.price          | 否       | sku价格                              |
| skus.stock          | 否       | sku库存                              |
| skus.code           | 否       | sku商家编号                          |
| skus.img            | 否       | sku图片                              |
| skus.weight         | 否       | sku重量(kg)                          |

sku商品集合数据格式如下：

> 如果就一个商品，传一条即可

无规格商品：

```json
[
  {
    "spec": [
      {
      "id": 0,
      "name": null,
      "value_id": 0,
      "value_name": null,
      }
    ],
    "price": 23,
    "stock": 23,
    "code": "商品编号",
    "weight": 0, // 重量，当选择按重量计算的运费模板时才出现
  }
]
```

有规格商品：

```json
[
  {
    "spec": [
      {
      "id": 20509,
      "value_id": 28313,
      "name": "尺码",
      "value_name": "XS",
      "value_img": "http://xxxxxxxxxxxxx.jpg", // 如果规格设置了图片才有该字段
      },
      {
      "id": 20509,
      "value_id": 28213,
      "name": "颜色",
      "value_name": "墨绿色",
      },
    ],
    "price": 23,
    "stock": 23,
    "code": "商品编号",
    "weight": 0, // 重量，当选择按重量计算的运费模板时才出现
  },
  {
    "spec": [
      {
      "id": 20509,
      "value_id": 28313,
      "name": "尺码",
      "value_name": "XS",
      "value_img": "http://xxxxxxxxxxxxx.jpg", // 如果规格设置了图片才有该字段
      },
      {
      "id": 20509,
      "value_id": 28212,
      "name": "颜色",
      "value_name": "红色",
      "value_img": "http://xxxxxxxxxxxxx.jpg", // 如果规格设置了图片才有该字段
      },
    ],
    "price": 23,
    "stock": 23,
    "code": "商品编号",
    "weight": 0, // 重量，当选择按重量计算的运费模板时才出现
  },
]
```

body字段说明：

```json
{
    "type" : "text",
    "value" : {
        "content" : "文字"
    }
},
{
    "type" : "image",
    "value" : {
        "url" : "http://xxxx.jpg"
     }
},
{
    "type" : "video",
    "value" : {
        "url" : "http://xxxx.xxx"
     }
},
{
    "type" : "goods",
    "value" : 
        { 
          "id" : 1,
          "img" : {
            "url" : "http://xxxx.jpg"
          },
          "title" : "测试商品",
          "price" : 200,
          "desc" : "描述"
        }
    
},
{
    "type" : "separator"
}
```



## 修改商品

```html
POST - /goods/edit
```
| 参数                 | 是否必填 | 说明                         |
| -------------------- | -------- | ---------------------------- |
| id                   | 是       | 商品id                       |
| title                | 是       | 商品标题                     |
| images               | 是       | 商品封面图片                 |
| category_ids         | 是       | 商品分类id集合，数组         |
| base_sale_num        | 否       | 基础销量，为空请输入`0`      |
| freight_template_id  | 否       | 运费模板id                   |
| freight              | 否       | 统一运费，默认为0            |
| sale_time            | 是       | 开售时间，立即开始传当前时间 |
| body                 | 是       | 商品详情，json               |
| is_on_sale           | 是       | 是否需上架出售 `0` 否 `1` 是 |
| use_image_spec_id    | 否       | 使用图片的规格id             |
| skus                 | 是       | sku商品集合，数组            |
| skus.spec            | 否       | sku规格                      |
| skus.spec.id         | 否       | sku规格id                    |
| skus.spec.name       | 否       | sku规格值id                  |
| skus.spec.value_id   | 否       | sku规格名                    |
| skus.spec.value_name | 否       | sku规格值名                  |
| skus.id              | 否       | sku id                       |
| skus.price           | 否       | sku价格                      |
| skus.stock           | 否       | sku库存                      |
| skus.code            | 否       | sku商家编号                  |
| skus.weight          | 否       | sku重量(kg)                  |

## 商品删除

```html
POST - /goods/del
```

| 参数      | 是否必填 | 说明                |
| --------- | -------- | ------------------- |
| goods_ids | 是       | 商品id集合 数组形式 |

> 注意：后端为加删除，真删除了关联的数据恐怕有bug，后台所有删除为假删除

##  商品下架

```html
POST - /goods/offSale
```

| 参数      | 是否必填 | 说明                |
| --------- | -------- | ------------------- |
| goods_ids | 是       | 商品id集合 数组形式 |

##  商品上架

```html
POST - /goods/onSale
```

| 参数      | 是否必填 | 说明                |
| --------- | -------- | ------------------- |
| goods_ids | 是       | 商品id集合 数组形式 |

