# 数据分析


该数据表字段应该有

id

action:行为的标识 用数字的 标识说明用文档描述 不用建表，比如1是商品，2是页面

create_time:创建时间

user_id : 当前触发行为的用户id

relation_user_id:关联用户id，比如分享行为，a分享出去，b点击的，那么b是user_id(当前行为id),

link_id:手动约束好每个链接的地址id，比如：商品1，页面2，首页3，拼团4…..根据每次需要增加，文档说明

link_pk:链接的主键值，比如商品链接，那就是商品的id

link_route:链接路由地址，如，1代表 /pages/page/detail，用数字

link_pathinfo:链接的参数了，格式是为id=1&category_id=xxxx&keywords=xxxx

ip

form_soure:来源，1微信小程序 2app  3 微信手机站 4 手机站 5pc站

user_agent：如：Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; R8007 Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30  

待思考：

坐标，省市区




邓凯：
     1.表中加了一个省份字段province，便于地域的统计
     2.考虑到一点，用户下单支付是不是也需要记录在数据统计表里面呢，这样对于支付金额这块，支付下单这块的统计会好点。
       不需要来来回回关联多个表来回组装等查询。应该会对程序好些，降低一些不必要的资源浪费
     3.page_depth：页面访问深度字段，便于流量概览的访问深度统计。(1-第一页，2-第二页，3-第三页，4-第四页，5-第五页，6-第6-10页，7-第11-20页，8-20页以后)


#### 需求场景：

1.用户a通过app分享商品给了微信用户b，用户b没登陆访问了这个商品页面，还需要记录用户的

Ip、客户端机型、时间、行为

## 商品分析-商品排行

#### 支付金额

不做其他指数的混合查询，如果能架构好 可以提议

返回

```json
[
    {
        "goods_id":1,
        "goods_img":"链接地址",
        "goods_price":1000,
        "goods_name":"小米手机",
    }
]
```



#### 访客数

```json
[
    {
        "goods_id":1,
        "goods_img":"链接地址",
        "goods_price":1000,
        "goods_name":"小米手机",
        "goods_visitor_num":200,
        // 访问-支付转化率
        "goods_visit_pay_conversion_rate"
    }
]
```




## 流量概览


> 分析：
>
> - 访客数：用户id分组
> - 分享访问人数：relation_user_id大于0，分组
> - 商品访客数：link_id=1为主以及用户user_id分组
> - 浏览量：统计记录条数
> - 分享访问次数：relation_user_id大于0
> - 商品浏览量：link_id = 1



```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：

```json
{
  visitor_num : 1,
  view_num : 1,
  share_visit_num : 1,
  share_visit_people_num  : 2,
  goods_visitor_num : 2,
  goods_view_num  : 2,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| visitor_num               | 访客数       |
| view_num              | 浏览数       |
| share_visit_num       | 分析访问次数       |
| share_visit_people_num       | 分析访问人数       | 
| goods_visitor_num       | 商品访客数       | 
| goods_view_num       | 商品浏览量       | 



页面类型：



> 分析：
>
> - 页面类型：page_type分组(1、微页面，2、商品页，临时这样，具体待商议)


```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：

```json
{
  goods_details : 1,
  shop : 1,
  other : 1,
  activity  : 2,
  order : 2,
  member  : 2,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| goods_details               | 商品详情       |
| shop              | 店铺主页       |
| other       | 其他       |
| activity       | 活动页面       | 
| order       | 查看订单       | 
| member       | 会员中心       | 






访问来源：


> 分析：
>
> - 访问来源：source = 1从扫码进来的，source = 0 其他


```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：

```json
{
  other : 1,
  sweep_code : 1,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| other       | 其他       |
| sweep_code       | 扫码       | 







单页面流量数据：

> 分析：
>
> - 页面类型：page_type分组(1、微页面，2、商品页，临时这样，具体待商议，其中访客数user_id去重)
```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：

```json

[
    {
      page_name : '页面名称',
      page_type : 1,
      page_type_title : '页面标题',
      view_num : 120,
      visitor_num : 100,
    },
    {
      page_name : '页面名称',
      page_type : 1,
      page_type_title : '商品页面',
      view_num : 120,
      visitor_num : 100,
    },
]

```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| page_name       | 页面名称       |
| page_type       |        | 
| page_type_title       | 页面类型名称       |
| view_num       | 浏览量       | 
| visitor_num       | 访客量       |




访问深度：

> 分析：
>
> - 页面深度字段：page_depth(1-第一页，2-第二页，3-第三页，4-第四页，5-第五页，6-第6-10页，7-第11-20页，8-20页以后)
> - 排序会根据page_depth从小到大排序
```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：

```json
[
    {
      visitor_num : 10,
    },
    {
      visitor_num : 20,
    },
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| num       | 访客量       |






访客地域分布：


```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |

返回数据结构如下：
```json
[
    {
        // 地区
        "address":'天津',
        // 浏览量
        "view_num":100,
        // 访客数
        "visitor_num":6000,
        // 商品浏览量
        "goods_view_num":200,
        // 商品访客数
        "goods_visitor_num":200,
    },
    {
        // 地区
        "address":'天津',
        // 浏览量
        "view_num":100,
        // 访客数
        "visitor_num":6000,
        // 商品浏览量
        "goods_view_num":200,
        // 商品访客数
        "goods_visitor_num":200,
    }
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| address       | 地区       |
| view_num       | 浏览量       | 
| visitor_num       | 访客数       | 
| goods_view_num       | 商品浏览量       | 
| goods_visitor_num       | 商品访客数       | 








## 每日流量

- mysql存储，问了如果，他说当日志量变大的时候，需要注意分割和分表
- websocket传输点击的行为，我们每个行为用数字代替，能省空间就省空间

查询参数

create_time = [开始时间戳，结束时间戳]

要的字段：fields=[view_num,visitor_num,goods_view_num,goods_visitor_num]

统计比较费资源，所有前端配合传一些要用的吧，能省就省

返回的格式为：

```json
{
    "2019-01-18" :{
        // 浏览量
        "view_num":50,
        // 访问数
        "visitor_num":100,
        // 商品浏览量
        "goods_view_num":6000,
        // 商品访客数
        "goods_visitor_num":200,
        // 分享次数
        "share_num":200,
        // 分享访问人数
        "share_visit_people_num":200
    }
}
```



## 商品分析

商品整体状况：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |


> 分析：
>
> - 在架商品数：通过商品表
> - 被访问商品数：link_id = 1
> - 动销商品数：通过商品表和订单表
> - 商品曝光数：relation_user_id用这个字段去统计曝光数
> - 商品浏览量：通过商品表(商品表应该有浏览次数)
> - 商品访客数：link_id = 1 user_id分组
> - 加购件数：add_purchase = 1 
> - 下单件数和支付件数：通过订单表

返回数据结构如下：

```json
{
  goods_sell_num : 1,
  goods_visitor_num : 1,
  goods_exposure_num : 1,
  goods_view_num  : 2,
  plus_num : 2,
  place_order_num  : 2,
  goods_movable_num  : 2,
  goods_visitor_num  : 2,
  goods_payment_num  : 2,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| goods_sell_num               | 在架商品数       |
| goods_visitor_num              | 被访问商品数       |
| goods_exposure_num       | 商品曝光数       |
| goods_view_num       | 商品浏览量       | 
| plus_num       | 加购件数       | 
| place_order_num       | 下单件数       | 
| goods_movable_num       | 动销商品数       | 
| goods_visitor_num       | 商品访客数       | 
| goods_payment_num       | 支付件数       | 



商品趋势分析：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间[123456789, 123456789] |


> 分析：
>
> - 在架商品数：通过商品表
> - 被访问商品数：link_id = 1
> - 动销商品数：通过商品表和订单表
> - 商品曝光数：relation_user_id用这个字段去统计曝光数

> - goods_sell_num、goods_visitor_num、goods_exposure_num、goods_movable_num分别对应一个接口

返回数据结构如下：

```json
[
     "2019-01-18" :{
        goods_sell_num : 1,
        goods_visitor_num : 1,
        goods_exposure_num : 1,
        goods_movable_num  : 2,
     },
     "2019-01-19" :{
         goods_sell_num : 1,
         goods_visitor_num : 1,
         goods_exposure_num : 1,
         goods_movable_num  : 2,
      }
]

```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| goods_sell_num               | 在架商品数       |
| goods_visitor_num              | 被访问商品数       |
| goods_exposure_num       | 商品曝光数       |
| goods_movable_num       | 动销商品数       | 




支付金额TOP：

> 分析：
>
> - 支付金额TOP：订单表分组查询商品统计金额排序

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间[123456789, 123456789] |
| type   | 否    | whole:全部 |


返回数据结构如下：

```json
{
  order_id : 1,
  goods_id : 2,
  goods_title : '商品标题",,
  goods_img : "https://www.xxx.com/1.png",
  total_price : 1,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| order_id               | 订单id(单品分析单品分析可能需要用到)       |
| goods_id              | 商品id(单品分析单品分析可能需要用到)       |
| goods_title       | 商品标题       |
| goods_img       | 商品图片       | 
| total_price       | 支付金额       | 



访客数TOP：

> 分析：
>
> - 访客数：link_id = 1 user_id分组  （支付转化率商品id查询付款数除以访客数）

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间[123456789, 123456789] |
| type   | 否    | whole:全部 |

返回数据结构如下：

```json
{
  goods_id : 2,
  goods_title : '商品标题",,
  goods_img : "https://www.xxx.com/1.png",
  total_price : 1,
  total_price : 30,
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| goods_id              | 商品id(单品分析单品分析可能需要用到)       |
| goods_title       | 商品标题       |
| goods_img       | 商品图片       | 
| conversion       | 支付转化率       | 



## 交易概览

交易概况：

> 分析：
>
> - 访客数：user_id分组
> - 下单人数：订单表 user_id分组
> - 下单笔数：订单表
> - 下单金额：订单金额
> - 支付人数：订单表已支付，user_id分组
> - 支付订单数：订单表已支付
> - 支付金额：订单表已支付订单金额累加
> - 支付件数：订单表商品件数累加
> - 客单价：订单总金额/订单支付人数

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |


返回数据结构如下：

```json
{
  visitor_num : 2,
  place_order_num : 12,
  place_order_pen_num : 20,
  place_order_price : 1,
  payment_people_num : 30,
  payment_order_num : 30,
  payment_price : 30,
  payment_num : 30,
  customer_price : 30,
  visitor_proportion : 30,
  place_order_proportion : 30,
  place_order_pen_proportion : 30,
  place_order_price_proportion : 30,
  payment_people_proportion : 30,
  payment_order_proportion : 30,
  payment_proportion : 30,
  customer_proportion : 30,
  "visitor_order_proportion":200,
  "place_price_proportion":200,
  "visitor_price_proportion":200
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| visitor_num              | 访客数       |
| place_order_num       | 下单数       |
| place_order_pen_num       | 下单笔数       | 
| place_order_price       | 下单金额       | 
| payment_people_num       | 支付人数       | 
| payment_order_num       | 支付订单数       |
| payment_price       | 支付金额       |
| payment_num       | 支付件数       |
| customer_price | 客单价       |
| visitor_proportion             | 访客数比例       |
| place_order_proportion       | 下单数比例        |
| place_order_pen_proportion       | 下单笔数比例       | 
| place_order_price_proportion       | 下单金额比例       | 
| payment_people_proportion       | 支付人数比例       | 
| payment_order_proportion       | 支付订单数比例       |
| payment_price_proportion       | 支付金额比例       |
| payment_proportion       | 支付件数比例       |
| customer_proportion | 客单价比例       |
| visitor_order_proportion | 访问-下单转化率       |
| place_price_proportion | 下单-付款转化率       |
| visitor_price_proportion | 访问-付款转化率       |



交易概况曲线图：


> 分析：
>
> - 支付人数：订单表已支付，user_id分组
> - 支付金额：订单表已支付订单金额累加
> - 支付件数：订单表商品件数累加
> - 访问-下单转化率：商品访客数/下单总数
> - 下单-付款转化率：已支付订单总数\下单未支付总数
> - 访问-付款转化率：商品访客数\已支付订单总数
```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |


返回数据结构如下：

```json
{
    "2019-01-18" :{
        // 支付金额
        "payment_price":12,
        // 支付人数
        "payment_people_num":100,
        // 支付件数
        "payment_num":6000,
        // 访问-下单转化率
        "visitor_order_proportion":200,
        // 下单-付款转化率
        "place_price_proportion":200,
        // 访问-付款转化率
        "visitor_price_proportion":200
    }
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| payment_price              | 支付金额       |
| payment_people_num       | 支付人数       |
| payment_num       | 支付件数       | 
| visitor_order_proportion       | 访问-下单转化率       | 
| place_price_proportion       | 下单-付款转化率       | 
| visitor_price_proportion       | 访问-付款转化率       |


交易构成：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    |  |


返回数据结构如下：

```json
{
    // 新客户
    "new" :{
        // 支付金额
        "price":12,
        // 支付金额百分比
        "price_proportion":100,
        // 支付人数
        "payment_people_num":6000,
        // 支付人数百分比
        "price_proportion":200,
    },
    // 老客户
    "old" :{
        // 支付金额
        "price":12,
        // 支付金额百分比
        "price_proportion":100,
        // 支付人数
        "payment_people_num":6000,
        // 支付人数百分比
        "price_proportion":200,
    }
}
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| price              | 支付金额       |
| price_proportion       | 支付金额百分比       |
| payment_people_num       | 支付人数       | 
| price_proportion       | price_proportion       | 







地域分布：

> 分析：
>
> - 省份：通过订单的收货地址分组查询统计省份、支付金额、支付人数。
> - 访客数：这块需要使用ez_analysis数据统计表查询，根据表中的用户id统计总数，城市分组

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |
| order_type   | 否    |排序：1、支付金额。2、支付人数。3、访客数。4、访问-支付转化率。排序都是从高到低  |


返回数据结构如下：

```json
[
   {
        // 省份
        "province":12,
        // 支付金额
        "payment_price":100,
        // 支付人数
        "payment_people_num":6000,
        // 访客数
        "visitor_num":200,
        // 访问-支付转化率
        "visitor_price_proportion":200,
    },
    {
        // 省份
        "province":12,
        // 支付金额
        "payment_price":100,
        // 支付人数
        "payment_people_num":6000,
        // 访客数
        "visitor_num":200,
        // 访问-支付转化率
        "visitor_price_proportion":200,
    },
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| province              | 省份       |
| payment_price              | 支付金额       |
| payment_people_num       | 支付人数       |
| visitor_num       | 访客数       | 
| visitor_price_proportion       | 访问-支付转化率       | 




标签成交分析：

> 分析：
>
> - 通过标签查询商品表的商品id，再进行订单表的查询统计出支付订单数，支付金额，支付人数，支付商品件数，以及有手机号的客户数

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |
| label_name   | 否    |标签  |


返回数据结构如下：

```json
[
   {
        // 标签
        "label_name":12,
        // 支付订单数
        "payment_order_num":100,
        // 支付金额
        "payment_price":6000,
        // 支付人数
        "payment_people_num":200,
        // 支付商品件数
        "payment_goods_num":200,
        // 支付微信粉丝数
        "payment_wechat_num":200,
        // 有手机号客户数
        "payment_phone_num":200,
    },
   {
       // 标签
       "label_name":12,
       // 支付订单数
       "payment_order_num":100,
       // 支付金额
       "payment_price":6000,
       // 支付人数
       "payment_people_num":200,
       // 支付商品件数
       "payment_goods_num":200,
       // 支付微信粉丝数
       "payment_wechat_num":200,
       // 有手机号客户数
       "payment_phone_num":200,
    },
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| label_name              | 标签       |
| payment_order_num              | 支付订单数       |
| payment_price       | 支付金额       |
| payment_people_num       | 支付人数       | 
| payment_goods_num       | 支付商品件数       | 
| payment_wechat_num       | 支付微信粉丝数       | 
| payment_phone_num       | 有手机号客户数       | 

## 客户概览

客户概况及趋势：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |


返回数据结构如下：

```json
[
   {
        // 访客数
        "visitor_num":12,
        // 累计粉丝数
        "fans_num":100,
        // 累计会员数
        "member_price":6000,
        // 成交客户数
        "customer_num":200,
    },
   
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| visitor_num              | 访客数       |
| fans_num              | 累计粉丝数       |
| member_price       | 累计会员数       |
| customer_num       | 成交客户数       | 




客户概况及趋势曲线图：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |


返回数据结构如下：

```json
[
    "2019-01-18" :{
        // 访客数
        "visitor_num":12,
        // 累计粉丝数
        "fans_num":100,
        // 累计会员数
        "member_price":6000,
        // 成交客户数
        "customer_num":200,
    },
    "2019-01-18" :{
        // 访客数
        "visitor_num":12,
        // 累计粉丝数
        "fans_num":100,
        // 累计会员数
        "member_price":6000,
        // 成交客户数
        "customer_num":200,
    }
   
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| visitor_num              | 访客数       |
| fans_num              | 累计粉丝数       |
| member_price       | 累计会员数       |
| customer_num       | 成交客户数       | 





会员统计：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |


返回数据结构如下：

```json
[
    {
        // 累计会员数
        "member_num":12,
        // 新增会员数
        "newly_memberr_num":100,
        // 升级会员数
        "upgrade_member_price":6000,
        // 储值会员数
        "savings_num_num":200,
        // 访客百分比
        "visitor_proportion":12,
        // 累计粉丝百分比
        "fans_proportion":100,
        // 累计会员百分比
        "member_price_proportion":6000,
        // 成交客户百分比
        "customer_proportion":200,
    }
   
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| visitor_num              | 访客数       |
| fans_num              | 累计粉丝数       |
| member_price       | 累计会员数       |
| customer_num       | 成交客户数       | 
| visitor_proportion             | 访客百分比       |
| fans_proportion             | 累计粉丝百分比      |
| member_price_proportion      | 累计会员百分比       |
| customer_proportion      | 成交客户百分比       | 




会员活跃(分布)：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |

返回数据结构如下：

```json
[
    {
        // 访问会员数
        "member_num":12,
        // 领券会员数
        "newly_memberr_num":100,
        // 加购会员数
        "upgrade_member_num":6000,
        // 成交会员数
        "savings_num_num":200,
        // 访问会员百分比
        "member_proportion":10%,
        // 领券会员百分比
        "newly_member_proportion":10%,
        // 加购会员百分比
        "upgrade_member_proportion":10%,
        // 成交会员百分比
        "savings_num_proportion":10%,
                
    }
   
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| member_num              | 访问会员数       |
| newly_memberr_num              | 领券会员数       |
| upgrade_member_price       | 加购会员数       |
| savings_num_num       | 成交会员数       | 
| member_proportion              | 访问会员百分比       |
| newly_member_proportion              | 领券会员百分比       |
| upgrade_member_proportion       | 加购会员百分比     |
| savings_num_proportion       | 成交会员百分比       | 


会员活跃(趋势)：

```html
GET 
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| create_time   | 否    | 时间 |

返回数据结构如下：

```json
[
    "2019-01-18" :{
        // 访问会员数
        "member_num":12,
        // 领券会员数
        "newly_member_num":100,
        // 加购会员数
        "upgrade_member_num":6000,
        // 成交会员数
        "savings_num_num":200,
    }
   
]
```

返回参数说明

| 参数                | 说明 |
| ------------------- | -------- |
| member_num              | 访问会员数       |
| newly_memberr_num              | 领券会员数       |
| upgrade_member_num       | 加购会员数       |
| savings_num_num       | 成交会员数       | 