# 商品分类
## 商品分类列表

```html
GET - /goodscategory/list
```

| 参数    | 是否必填 | 说明                                |
| ----- | ---- | --------------------------------- |
| pid   | 否    | 父级id，默认为0                         |
| level | 否    | 相对于pid的层级，默认为1，`fashop V1 版本`最多2级 |

```json
{
    "code":0,
    "result":{
        "list":[
            {
                "id":709,
                "name":"手机",
                "pid":0,
                "icon":"https://demo.fashop.cn/Upload/20180209/x6eYVwJkdbQUmET_thumb.png",
                "banner":"",
                "_child":[
                    {
                        "id":712,
                        "name":"xiaomi",
                        "pid":709,
                        "icon":"https://demo.fashop.cn/Upload/20180209/bqDKWrIPJ9pyC4R_thumb.png",
                        "banner":"",
                        "_child":[
                            
                        ]
                    },
                    {
                        "id":714,
                        "name":"iphone",
                        "pid":709,
                        "icon":"https://demo.fashop.cn/Upload/20180209/4GvMRjfJgZHUXw2_thumb.jpeg",
                        "banner":"",
                        "_child":[
                            
                        ]
                    },
                    {
                        "id":713,
                        "name":"huawei",
                        "pid":709,
                        "icon":"https://demo.fashop.cn/Upload/20180209/V4BePfWGQydhKY6_thumb.png",
                        "banner":"",
                        "_child":[
                            
                        ]
                    }
                ]
            },
            {
                "id":1,
                "name":"线上商品",
                "pid":0,
                "icon":"",
                "banner":"",
                "_child":[
                    {
                        "id":708,
                        "name":"新增分类",
                        "pid":1,
                        "icon":"",
                        "banner":"",
                        "_child":[
                            
                        ]
                    },
                    {
                        "id":686,
                        "name":"二级",
                        "pid":1,
                        "icon":"",
                        "banner":"",
                        "_child":[
                            
                        ]
                    }
                ]
            },
            {
                "id":2,
                "name":"线上卡券",
                "pid":0,
                "icon":"",
                "banner":"",
                "_child":[
                    
                ]
            },
            {
                "id":716,
                "name":"美妆",
                "pid":0,
                "icon":"https://demo.fashop.cn/Upload/20180515/RyjWih2vkDm89wb_thumb.jpeg",
                "banner":"",
                "_child":[
                    
                ]
            },
            {
                "id":717,
                "name":"果蔬",
                "pid":0,
                "icon":"https://demo.fashop.cn/Upload/20180515/rvDF3f8hWkBMwRI_thumb.jpeg",
                "banner":"",
                "_child":[
                    
                ]
            },
            {
                "id":718,
                "name":"果蔬",
                "pid":0,
                "icon":"https://demo.fashop.cn/Upload/20180515/5sRINVrCwjv3XtW_thumb.jpeg",
                "banner":"",
                "_child":[
                    
                ]
            },
            {
                "id":719,
                "name":"生鲜",
                "pid":0,
                "icon":"https://demo.fashop.cn/Upload/20180529/iWxdH3D4Cs7jPzc_thumb.png",
                "banner":"",
                "_child":[
                    
                ]
            }
        ]
    },
    "msg":null
}
```



## 商品分类详情

```html
GET - /goodscategory/info
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 分类id |

```json
{
    "code":0,
    "result":{
        "info":{
            "id":709,
            "name":"手机",
            "pid":0,
            "icon":"https://demo.fashop.cn/Upload/20180209/x6eYVwJkdbQUmET_thumb.png",
            "sort":0,
            "create_time":1513828201,
            "update_time":0,
            "keywords":"",
            "description":"",
            "grade":"",
            "img":"",
            "type_id":0,
            "banner":"",
            "delete_time":null
        }
    },
    "msg":null
}
```
