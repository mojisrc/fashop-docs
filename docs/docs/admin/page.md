# 模板
## 模板列表

```html
GET - /page/list
```

| 参数      | 是否必填 | 说明                                                         |
| --------- | -------- | ------------------------------------------------------------ |
| type      | 否       | 模板类型：主页`portal` ，v1用不到                            |
| module    | 否       | 模块类型，属于预留功能，推出小程序和app的时候有用，目前默认值为 `mobile`，小程序`wechat_mini`，App为`app` |
| is_system | 否       | 是否为系统模板 是`1`、否`0` ，默认为0                        |

## 模板添加

```html
POST - /page/add
```

| 参数             | 是否必填 | 说明                                                   |
| ---------------- | -------- | ------------------------------------------------------ |
| name             | 是       | 页面名称                                               |
| description      | 否       | 页面描述，用户通过微信分享给朋友时，会自动显示页面描述 |
| background_color | 是       | 页面背景颜色 , 如 `#fff`                               |
| body             | 是       | 模板内容，数据格式有要求，具体见《模板数据结构》       |
| module           | 是       | mobile，小程序wechat_mini，App为app                    |
| clone_from_id    | 否       | 克隆来自                                               |

> 新增页面时，要生成个不重复的标识，用于链接的访问地址标识 www.fashop.cn/wap/page/slfkf2dc ，字段为sign，

## 模板修改

```html
POST - /page/edit
```

| 参数             | 是否必填 | 说明                                                         |
| ---------------- | -------- | ------------------------------------------------------------ |
| id               | 是       | 模板id，店铺首页的id为`10001`，小于10001的模板为不可修改的模板 |
| name             | 是       | 页面名称                                                     |
| description      | 否       | 页面描述，用户通过微信分享给朋友时，会自动显示页面描述       |
| background_color | 是       | 页面背景颜色 , 如 `#fff`                                     |
| body             | 是       | 模板内容，数据格式有要求，具体见《模板数据结构》             |
| module           | 是       | mobile，小程序wechat_mini，App为app                          |

## 设为首页

```html
POST - /page/setPortal
```

| 参数 | 是否必填 | 说明   |
| ---- | -------- | ------ |
| id   | 是       | 页面id |

## 模板详情

```html
GET - /page/info
```

| 参数 | 是否必填 | 说明   |
| ---- | -------- | ------ |
| id   | 是       | 页面id |

```json
{
    "code": 0,
    "result": {
        "info": {
            "id": 32,
            "name": "店铺副本副本",
            "description": "描述",
            "body": [
                {
                    "type": "shop_window",
                    "title": "橱窗",
                    "images": [
                        {
                            "img": {
                                "url": "https://gtms04.alicdn.com/tps/i4/TB1PHw1if6H8KJjy0FjSuuXepXa.jpg"
                            },
                            "link": {
                                "param": [],
                                "action": ""
                            }
                        },
                        {
                            "img": {
                                "url": "https://gw.alicdn.com/tfs/TB1nAqli4rI8KJjy0FpXXb5hVXa-180-140.jpg"
                            },
                            "link": {
                                "param": [],
                                "action": ""
                            }
                        },
                        {
                            "img": {
                                "url": "https://gw.alicdn.com/tfs/TB1QT5ai9_I8KJjy0FoXXaFnVXa-180-140.jpg"
                            },
                            "link": {
                                "param": [],
                                "action": ""
                            }
                        }
                    ],
                    "options": {
                        "layout_style": 1
                    }
                },
                {
                    "type": "goods_search",
                    "title": "商品搜索",
                    "options": null
                }
            ],
            "is_portal": 0,
            "is_system": 0,
            "background_color": "#f1f1f1",
            "type": "",
            "create_time": 1526523512,
            "update_time": 1528078252,
            "module": "mobile",
            "delete_time": null,
            "clone_from_id": null
        }
    },
    "msg": null
}
```



# 模板数据格式说明

####前端字段说明

```json
{
  "type" : "类型[必选]",
  "options": "配置项[必选]",
}
```

####    商品

选择商品 ： +  弹出选择商品：列出所有商品（含分页）、请输入商品名称（查询）、可以选取多个，下次再点击被选中的状态依然存在

展示形式：小图 `1`、大图 `2`、一大两小 `3`、列表 `4`

标题行数：一行`1`、两行`2`    

```json
{
  "type" : "goods",
  "data" : [
    { 
      "id" : 1,
      "img" : "http://xxxx.jpg",
      "title" : "测试商品",
      "price" : 200,
      "market_price" : 300,
      "desc" : "描述"
    }
  ],
  "options" : {
    "layout_style" : 1,
     "goods_title_rows" :1
  }
}
```

#### 商品列表

商品排序：最新商品（上架从晚到早）`1`、最热商品（销量从高到低）`2`、商品排序（序号有大到小）`3`

显示数量：前6个商品`6`、前12个商品`12`、前18个商品`18`

展示形式：大图`1`、小图`2`、一大两小`3`、列表`4`

显示内容：商品名称`title`、商品销售价`price`、商品原价`market_price`

标题行数：一行`1`、两行`2`    

```json
{
  "type" : "goods_list",
  "options" : {
    "goods_sort" : 1,
    "goods_display_num" : 6,
    "goods_display_field" : ["title","price","market_price"],
    "layout_style" : 1,
    "goods_title_rows" :1
  },
  "data" : [
    { 
      "id" : 1,
      "img" : "http://xxxx.jpg",
      "title" : "测试商品",
      "price" : 200,
      "market_price" : 300,
      "desc" : "描述"
    }
  ]
}
```

#### 积分商品列表

商品排序：最新商品（上架从晚到早）`1`、最热商品（销量从高到低）`2`、商品排序（序号有大到小）`3`  `4`、积分可抵扣由高到底

加载方式：限制个数
加载数量：前6个商品`6`、前12个商品`12`、前18个商品`18` 

展示形式：大图`1`、小图`2`、一大两小`3`、列表`4`

显示内容：商品名称`title`、商品销售价`price`、商品原价`market_price`

标题行数：一行`1`、两行`2` 

#### 商品搜索

商品搜索：请输入商品关键词，提示语：商品搜索模块可以加入到页面的任何位置，可以通过拖动或者点击上下箭头改变摆放位置

```json
{
  "type" : "goods_search",
  "options" : null
}
```

#### 分割线

​   颜色：选择颜色

​   样式：虚线、实线

```json
{
  "type" : "separator",
  "options" : {
    "color" : "#xxxx",
    "style" : "dotted" // "dotted" or "solid"
  }
}
```

#### 辅助空白

​   高度：1-100

```json
{
  "type" : "auxiliary_blank",
  "options" : {
    "height" : 5 // number
  }
}
```

#### 图片广告

​   显示形式：折叠轮播`1`、上下平铺`2`

​   设置图片：+ 添加一个广告（建议图片最大宽度不要超过640px）

​           增加一行：

​               图片：选择图片（吊起【我的图库】）

​               标题：（标题可以不设置）

​               链接：【选择链接地址】

```json
{
  "type" : "image_ads",
  "options" : {
    "layout_style" : 1,
  },
  "data" : [
    {
      "img" : {
        "url" : 
      },
      "title" : "这是标题",
      "link" : {
        "action" : "[见链接说明]",
        "param" : {
          ...[见链接说明]
        }
      }
    }
  ]
}
```

#### 图片导航

（提示：每行最多4个，所选行数如果超过每行数会自动切换为左右可滑动滚动）

​   行数：1行、2行、3行、4行

​   每行数：1个、2个、3个、4个、5个

​   （默认4个图标 + 文字），默认4个可设置的行，字段包含：

​   图片：选择图片

​   标题：导航名称

​   链接：【选择链接地址】

​   （说明：可删除、添加、上下切换位置）

```json
{
  "type" : "image_nav",
  "options" : {
    "rows" : 1,
    "each_row_display" : 4,
  }
  "data" : [
    {
      "img" : {
        "url" : "http://xxxx.jpg"
      },
      "title" : "图标",
      "link" : {
        "action" : ",
        "param" : {
          ...
        }
      }
    }
  ]
}
```

#### 橱窗

​   展现形式：2列`1`，一大两小`2`、3列`3`，三小图`4`

​   设置图片：一大两小模式，左侧大图建议比例284 x 592px，小图300 x 300px

​       （默认三行）

​       行内容：

​           图片：选择图片

​           链接：选择链接地址

```json
{
  "type" : "shop_window",
  "options" : {
    "layout_style" : 1,
  },
  "data" : [
    {
      "img" : {
        "url" : "http://xxxx.jpg"
      },
      "link" : {
        "action" : "",
        "param" : {
          
        }
      }
    }
  ]
}
```



#### 视频

​   视频地址：（目前只支持腾讯视频，请填写完整的带有vid或者sid的视频地址，如：<http://v.qq.com/xxx.html?vid=xxxx>，默认用我们的广告视频） 

```json
{
  "type" : "video",
  "options" : null,
  "data" : {
    "url" : "http://v.qq.com/xxx.html?vid=xxxx"
  }
}
```

#### 顶部菜单

​   菜单格式：纯文字导航`1`、小图标导航`2`（小图标导航 V1不包含）

​   菜单间距：无间距`1`、有间距`2`

​   设置菜单：

​       （默认四行）

​       行内容：

​           标题：首页

​           链接：选择链接

​           背景颜色：选择颜色

​           文字颜色：选择颜色

​       （说明：可删除、添加、上下切换位置）

```json
{
  "type" : "top_menu",
  "options" : {
    "menu_format" : 1,
    "menu_space" : 1
  },
    "data" : [
      {
        "title" : "首页",
        "link" : {
          "action" : "",
          "param" : {
            ...
          }
        },
        "background_color" : "#fff",
        "font_color" : "#000"
      }
    ]
}
```

#### 标题

​   标题名称：标题名称

​   对齐方式：左对齐`left`、居中对齐`center`、右对齐`right`

​   背景颜色：选择颜色

​   文字颜色：选择颜色

​   前导图片：选择图片

```json
{
  "type" : "title",
  "options" : {
    "title" : "标题名称",
    "align" : "left",
    "background_color" : "#fff",
    "font_color" : "#000",
    "leading_image" : {
      "url" : "http://xxxxxx.jpg"
    }
  }
}
```

#### 文本导航

​   （默认一个，可以添加N个）

​   标题：店铺主页

​   链接：选择链接

```json
{
  "type" : "text_nav",
  "options" : null,
  "data" : [
    {
      "title" : "店铺主页",
      "link" : {
        "action" : "",
        "param" : {
          ...
        }
      }
    }
  ]
}
```
#### 拼团

数据来源`source_type`：自动`auto`、选择`choose`

商品排序`goods_sort`：销量多到少`1`、价格高到低`2`、价格低到高`3`

显示数量`goods_display_num`：`3`， 最多12件，最少1件

展示形式`layout_style`：大图`1`、小图`2`、列表`4`、轮播`5`

标题行数：一行`1`、两行`2`    

> 默认自动添加、显示数量3、排序销量多到少、列表样式
>
> "data" 后端仅使用id，其他最终返回给客户端的数据都以商品表为准
>
> 传入对象是为了拓展，如：商品封面图替换，描述替换等

```json
{
    "type" : "goods_group",
    "options":{
        "source_type": "auto", 
        "goods_display_num": 3, 
        "goods_sort":1,
        "layout_style":4,
        "goods_title_rows":1,
    },
    "data":[
        { 
          "id" : 1,
          "img" : "http://xxxx.jpg",
          "title" : "测试商品",
          "price" : 200,
          "market_price" : 300,
          "desc" : "描述"
        }
    ]
}
```
#### 秒杀

数据来源`source_type`：自动`auto`、选择`choose`

秒杀时间点`hours`：`[0,1,2…..23]`

商品排序`goods_sort`：销量多到少`1`、价格高到低`2`、价格低到高`3`

显示数量`goods_display_num`：`3`， 最多12件，最少1件

展示形式`layout_style`：大图`1`、小图`2`、列表`4`、轮播`5`

标题行数：一行`1`、两行`2`    

> 默认自动添加、显示数量3、排序销量多到少、列表样式
>
> "data" 后端仅使用id，其他最终返回给客户端的数据都以商品表为准
>
> 传入对象是为了拓展，如：商品封面图替换，描述替换等
>
> 后端返回的商品库存应该是秒杀时的商品库存

```json
{
    "type" : "goods_seckill",
    "options":{
        "source_type": "auto", 
        "goods_display_num": 3, 
        "goods_sort":1,
        "layout_style":4,
        "goods_title_rows":1,
    },
    "data":[
        { 
          "id" : 1,
          "img" : "http://xxxx.jpg",
          "title" : "测试商品",
          "price" : 200,
          "market_price" : 300,
          "desc" : "描述"
        }
    ]
}
```

#### 优惠券

数据来源`source_type`：自动`auto`、选择`choose`

```json
{
    "type" : "coupon",
    "options":{
        "source_type": "auto", 
    },
    "data":[
        { 
          "id" : 1,
        }
    ]
}
```



## 链接说明

link.action = portal 首页

link.action = goods 商品 param { "id" : 10000}

link.action = page 页面  param { "id" : "slfkf2dc"}

link.action = "url" 页面  param { "url" : "http://fashop.cn"}



```json
[
            {
                "type": "goods_search",
                "options": {
                    "background_color": "#FF0000"
                }
            },
            {
                "type": "image_ads",
                "options": {
                    "layout_style": 1
                },
                "data": [
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1776.jpg"
                        },
                        "title": "这是标题",
                        "link": {
                            "action": "page",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1776.jpg"
                        },
                        "title": "这是标题",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1776.jpg"
                        },
                        "title": "这是标题",
                        "link": {
                            "action": "page",
                            "param": {
                                "id": 100845
                            }
                        }
                    }
                ]
            },
            {
                "type": "image_nav",
                "options": {
                    "rows": 2,
                    "each_row_display": 5
                },
                "data": [
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1844.png"
                        },
                        "title": "退款退货",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    }
                ]
            },
            {
                "type": "image_ads",
                "options": {
                    "layout_style": 2
                },
                "data": [
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1776.jpg"
                        },
                        "title": "这是标题",
                        "link": {
                            "action": "portal",
                            "param": {}
                        }
                    },
                    {
                        "img": {
                            "url": "http://www.fashop.cn/mobile/images/%E7%9C%9F%E5%AE%9E%E6%A8%A1%E6%8B%9F/u1776.jpg"
                        },
                        "title": "这是标题",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        }
                    }
                ]
            },
            {
                "type": "title",
                "options": {
                    "title": "兔子在奔跑",
                    "align": "left",
                    "background_color": "#E2C964",
                    "font_color": "blue",
                    "leading_image": {
                        "url": "https://ws2.sina"img".cn/large/006tNc79ly1frjzom71jnj3026026q2s.jpg"
                    }
                }
            },
            {
                "type": "title",
                "options": {
                    "title": "哈士奇在等待",
                    "align": "center",
                    "background_color": "#F58B9B",
                    "font_color": "blue",
                    "leading_image": {
                        "url": "https://ws3.sina"img".cn/large/006tNc79ly1frjzo0brd0j3020020t8k.jpg"
                    }
                }
            },
            {
                "type": "title",
                "options": {
                    "title": "大象在散步",
                    "align": "right",
                    "background_color": "#E71D19",
                    "font_color": "#FFFFFF",
                    "leading_image": {
                        "url": "https://ws2.sinaimg.cn/large/006tNc79ly1frjzprq7f1j302k02imx0.jpg"
                    }
                }
            },
            {
                "type": "text_nav",
                "options": null,
                "data": [
                    {
                        "title": "店铺主页",
                        "link": {
                            "action": "portal",
                            "param": {}
                        }
                    },
                    {
                        "title": "店铺主页1",
                        "link": {
                            "action": "portal",
                            "param": {}
                        }
                    },
                    {
                        "title": "店铺主页2",
                        "link": {
                            "action": ",
                            "param": {}
                        }
                    }
                ]
            },
            {
                "type": "video",
                "options": null,
                "video": {
                    "url": "http://mvvideo11.meitudata.com/5b036e99acd1f197_H264_20.mp4?k=1399d584e3df44724a97019f13af0cc0&t=5b07889f"
                }
            },
            {
                "type": "top_menu",
                "options": {
                    "menu_format": 2,
                    "menu_space": 1
                },
                "data": [
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#F58B9B",
                        "font_color": "#FFFFFF"
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#E2C964",
                        "font_color": "#000"
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#E71D19",
                        "font_color": "#000"
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#F58B9B",
                        "font_color": "#000"
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#FF6633",
                        "font_color": "#000"
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "#F4C869",
                        "font_color": "#000"
                    }
                ]
            },
            {
                "type": "auxiliary_blank",
                "options": {
                    "height": "10px"
                }
            },
            {
                "type": "top_menu",
                "options": {
                    "menu_format": 1,
                    "menu_space": 2
                },
                "data": [
                    {
                        "title": "首页",
                        "link": {
                            "action": ",
                            "param": {}
                        },
                        "background_color": "red",
                        "font_color": "blue",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                        "background_color": "#B3B3B3",
                        "font_color": "#000",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                        "background_color": "#B3B3B3",
                        "font_color": "#000",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                        "background_color": "#B3B3B3",
                        "font_color": "#000",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                        "background_color": "#B3B3B3",
                        "font_color": "#000",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    },
                    {
                        "title": "首页",
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                        "background_color": "#B3B3B3",
                        "font_color": "#000",
                        "img": {
                            "url": "https://ws3.sinaimg.cn/large/006tNc79ly1frjxvwddccj301e01edfm.jpg"
                        },
                    }
                ]
            },
            {
                "type": "shop_window",
                "options": {
                    "layout_style": 1,
                },
                "data": [
                    {
                        "img": {
                            "url": "https://ws1.sinaimg.cn/large/006tNc79ly1frjxc2w1okj305805waa8.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    },
                    {
                        "img": {
                            "url": "https://ws1.sinaimg.cn/large/006tNc79ly1frjxc947yij305802yjrf.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    },
                    {
                        "img": {
                            "url": "https://ws2.sinaimg.cn/large/006tNc79ly1frjxcezbjvj305802yt8p.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    }
                ]
            },
            {
                "type": "shop_window",
                "options": {
                    "layout_style": 2,
                },
                "data": [
                    {
                        "img": {
                            "url": "https://ws4.sinaimg.cn/large/006tNc79ly1frjxlxk17gj303h03ht8m.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    },
                    {
                        "img": {
                            "url": "https://ws2.sinaimg.cn/large/006tNc79ly1frjxm25cnaj303h03hgli.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    },
                    {
                        "img": {
                            "url": "https://ws1.sinaimg.cn/large/006tNc79ly1frjxm6unbuj303h03h3ye.jpg"
                        },
                        "link": {
                            "action": "goods",
                            "param": {
                                "id": 100845
                            }
                        },
                    }
                ]
            },
            {
                "type": "separator",
                "options": {
                    "color": "red",
                    "style": "solid"
                }
            },
            {
                "type": "separator",
                "options": {
                    "color": "#000",
                    "style": "dotted"
                }
            },
            {
                "type": "goods_list",
                "options": {
                    "goods_sort": 1,
                    "goods_display_num": 6,
                    "goods_display_field": ["title", "price", "market_price"],
                    "layout_style": 3,
                },
                "data": [
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                ]
            },
            {
                "type": "goods_list",
                "options": {
                    "goods_sort": 1,
                    "goods_display_num": 6,
                    "goods_display_field": ["title", "price", "market_price"],
                    "layout_style": 1,
                },
                "data": [
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    }
                ]
            },
            {
                "type": "goods_list",
                "options": {
                    "goods_sort": 1,
                    "goods_display_num": 6,
                    "goods_display_field": ["title", "price", "market_price"],
                    "layout_style": 2,
                },
                "data": [
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                ]
            },
            {
                "type": "goods",
                "options": {
                    "layout_style": 2,
                },
                "data": [
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                    {
                        "id": 100845,
                        "img": "https://gw.alicdn.com/bao/uploaded/i4/22668250/TB24nBEa0PJ3eJjSZFLXXab3FXa_!!22668250.jpg",
                        "title": "Huawei/华为 P10 Plus6G+128G曜石黑全网通4G手机双卡双待特价",
                        "price": 200,
                        "market_price": 300,
                        "desc": "描述"
                    },
                ]
            },
        ]
```
## 


