# 店铺
## 基础信息设置

```html
POST - /shop/setBaseInfo
```

| 参数             | 是否必填 | 说明     |
| -------------- | ---- | ------ |
| name           | 是    | 店铺名称   |
| logo           | 是    | 店铺标志图片 |
| contact_number | 否    | 店铺联系电话 |
| description    | 否    | 店铺描述   |
| host           | 否    | 店铺访问地址 |

## 配色方案设置

```html
POST - /shop/setColorScheme
```

| 参数           | 是否必填 | 说明     |
| ------------ | ---- | ------ |
| color_scheme | 是    | 默认为`0` |


## 资料

```html
GET - /shop/info
```

结果：

```json
{
  name : 'FaShop 店铺', // 店铺名字
  logo : 'http://xxxxx.jpg',
  contact_number : 'string', //店铺联系电话
  description : 'FaShop 的店铺描述', // 店铺描述
  wechat_platform_qr : 'http://xxxxx.jpg', // 店铺微信公众平台二维码
  host : 'www.fashop.cn', // 店铺访问地址
  color_scheme : 1, // 店铺配色方案
  nav : {}, // 导航设置待定
  portal_template_id : 0 , // 店铺首页模板id
  goods_category_style : 1, // 店铺分类页风格，临时写法，V1版本后会拓展到模板里
}
```



## 分类页风格设置

```html
POST - /shop/setGoodsCategoryStyle
```

| 参数                   | 是否必填 | 说明                                    |
| -------------------- | ---- | ------------------------------------- |
| goods_category_style | 是    | 店铺分类页风格，临时写法，V1版本后会拓展到模板里 `0` `1` `2` |

## 设置订单相关过期时间

```html
POST - /shop/setOrderExpires
```

| 参数                               | 是否必填 | 说明                        |
| -------------------------------- | ---- | ------------------------- |
| order_auto_close_expires         | 是    | 待付款订单N秒后自动关闭订单，默认604800秒  |
| order_auto_confirm_expires       | 是    | 已发货订单后自动确认收货，默认604800秒    |
| order_auto_close_refound_expires | 是    | 已收货订单后关闭退款／退货功能，0代表确认收货后无 |

