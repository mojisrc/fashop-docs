# 数据分析

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
        "share_visit_num":200
    }
}
```

该数据表字段应该有

id

action:行为的标识 用数字的 标识说明用文档描述 不用建表，比如1是商品，2是页面

create_time:创建时间

user_id : 当前触发行为的用户id

relation_user_id:关联用户id，比如分享行为，a分享出去，b点击的，那么b是user_id(当前行为id),

link_pk:链接的主键值，比如商品链接，那就是商品的id

link_route:链接路由地址，如，1代表 /pages/page/detail，用数字

link_pathinfo:链接的参数了，格式是为id=1&category_id=xxxx&keywords=xxxx

ip

from_soure:来源，1微信小程序 2app  3 微信手机站 4 手机站 5pc站

user_agent：如：Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; R8007 Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30  

待思考：

坐标，省市区

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





## 商品趋势分析

图标返回的数据参考每日流量



## 整体概况

一个接口返回多个字段，可以通过create_time    field传给接口要什么



## 客户概览



## 交易概览