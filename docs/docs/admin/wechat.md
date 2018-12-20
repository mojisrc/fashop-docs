# 微信
## 公众号设置

```html
POST - /wechat/confSet
```

| 参数          | 是否必填 | 说明                                       |
| ----------- | ---- | ---------------------------------------- |
| name        | 是    | 公众号名称，填写公众号的账号名称                         |
| description | 是    | 描述，用于说明此公众号的功能及用途                        |
| account     | 是    | 公众号账号， 填写公众号的账号,一般为英文账号，如：9476400@qq.com |
| original    | 是    | 原始ID，原始ID不能修改,请谨慎填写，如：gh_9468ce6ce474    |
| level       | 是    | 类型， 普通订阅号`1`、普通服务号`2`、认证订阅号`3`、认证服务号/认证媒体/政府订阅号`4` |
| app_key     | 是    | AppId                                    |
| app_secret  | 是    | AppSecret                                |
| headimg     | 是    | 头像                                       |
| qrcode      | 是    | 二维码                                      |

## 绑定信息获取

```html
GET - /wechat/getConf
```



## 查看接口状态

```html
GET - /wechat/checkApiStatus
```

## 获得token

```html
GET - /wechat/getToken
```

| 参数    | 是否必填 | 说明                                                   |
| ------- | -------- | ------------------------------------------------------ |
| refresh | 是       | bool值，为true强行刷新tokenbool值，为true强行刷新token |




## 获取所有标签

```html
GET - /wechat/userTagList
```

## 创建标签

```Html
POST - /wechat/userTagCreate
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| name | 是    | 标签名  |

## 修改标签信息

```
POST - /wechat/userTagUpdate
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 标签id |
| name | 是    | 标签名  |

## 删除标签

```
POST - /wedhat/userTagDelete
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 标签id |



## 获取指定 openid 用户所属的标签

```
GET - /wechat/userTagsByOpenid
```

| 参数     | 是否必填 | 说明       |
| ------ | ---- | -------- |
| openid | 是    | 用户openid |

## 获取标签下用户列表

```
GET - /wechat/userTagUsersOfTag
```

| 参数与         | 是否必填 | 说明                    |
| ----------- | ---- | --------------------- |
| id          | 是    | 标签id                  |
| next_openid | 否    | 从openid开始拉取，不填默认从开头拉取 |

## 批量为用户添加标签

```
POST - /wechat/userTagTagUsers
```

| 参数      | 是否必填 | 说明         |
| ------- | ---- | ---------- |
| openids | 是    | 用户openid数组 |
| id      | 是    | 标签id       |

## 批量为用户移除标签

```
POST - /wechat/userTagUntagUsers
```

| 参数      | 是否必填 | 说明         |
| ------- | ---- | ---------- |
| openids | 是    | 用户openid数组 |
| id      | 是    | 标签id       |

## 获取所有标签

```html
GET - /wechat/userTagList
```

## 创建标签

```Html
POST - /wechat/userTagCreate
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| name | 是    | 标签名  |

## 修改标签信息

```
POST - /wechat/userTagUpdate
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 标签id |
| name | 是    | 标签名  |

## 删除标签

```
POST - /wedhat/userTagDelete
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 标签id |



## 获取指定 openid 用户所属的标签

```
GET - /wechat/userTagsByOpenid
```

| 参数     | 是否必填 | 说明       |
| ------ | ---- | -------- |
| openid | 是    | 用户openid |

## 获取标签下用户列表

```
GET - /wechat/userTagUsersOfTag
```

| 参数与         | 是否必填 | 说明                    |
| ----------- | ---- | --------------------- |
| id          | 是    | 标签id                  |
| next_openid | 否    | 从openid开始拉取，不填默认从开头拉取 |

## 批量为用户添加标签

```
POST - /wechat/userTagTagUsers
```

| 参数      | 是否必填 | 说明         |
| ------- | ---- | ---------- |
| openids | 是    | 用户openid数组 |
| id      | 是    | 标签id       |

## 批量为用户移除标签

```
POST - /wechat/userTagUntagUsers
```

| 参数      | 是否必填 | 说明         |
| ------- | ---- | ---------- |
| openids | 是    | 用户openid数组 |
| id      | 是    | 标签id       |


# 新增永久素材说明

在微信里的图片，音乐，视频等等都需要先上传到微信服务器作为素材才可以在消息中使用。

对于常用的素材，开发者可通过本接口上传到微信服务器，永久使用。新增的永久素材也可以在公众平台官网素材管理模块中查询管理。

请注意：

1、**最近更新：永久图片素材新增后，将带有URL返回给开发者，开发者可以在腾讯系域名内使用（腾讯系域名外使用，图片将被屏蔽）。**

2、公众号的素材库保存总数量有上限：图文消息素材、图片素材上限为5000，其他类型为1000。

3、素材的格式大小等要求与公众平台官网一致：

图片（image）: 2M，支持bmp/png/jpeg/jpg/gif格式

语音（voice）：2M，播放长度不超过60s，mp3/wma/wav/amr格式

视频（video）：10MB，支持MP4格式

缩略图（thumb）：64KB，支持JPG格式

4、图文消息的具体内容中，微信后台将过滤外部的图片链接，图片url需通过"上传图文消息内的图片获取URL"接口上传图片获取。

5、"上传图文消息内的图片获取URL"接口所上传的图片，不占用公众号的素材库中图片数量的5000个的限制，图片仅支持jpg/png格式，大小必须在1MB以下。

6、图文消息支持正文中插入自己帐号和其他公众号已群发文章链接的能力。

## 微信永久素材图片上传

```html
POST - /wechat/materialUploadImage
```

> 注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。
>
> url 只有上传图片素材有返回值。

| 参数    | 是否必须 | 说明                                       |
| ----- | ---- | ---------------------------------------- |
| media | 是    | form-data中媒体文件标识，有filename、filelength、content-type等信息 |

返回：

```json
{
    "media_id":MEDIA_ID,
    "url":URL
}
```

> URL 新增的图片素材的图片URL（仅新增图片素材时会返回该字段）

##微信永久素材语音上传

```html
POST - /wechat/materialUploadVoice
```

| 参数    | 是否必填 | 说明                                       |
| ----- | ---- | ---------------------------------------- |
| media | 是    | form-data中媒体文件标识，有filename、filelength、content-type等信息 |

> 语音 大小不超过 5M，长度不超过 60 秒，支持 `mp3/wma/wav/amr` 格式。

返回：

```json
 {
    "media_id":MEDIA_ID,
 }
```

## 微信永久素材视频上传

```html
POST - /wechat/materialUploadVideo
```

| 参数          | 是否必填 | 说明                                       |
| ----------- | ---- | ---------------------------------------- |
| media       | 是    | form-data中媒体文件标识，有filename、filelength、content-type等信息 |
| title       | 是    | 视频标题                                     |
| description | 是    | 视频描述                                     |

返回：

```json
{
    "media_id":MEDIA_ID,
 }
```



##微信永久素材缩略图上传

```html
POST - /wechat/materialUploadThumb
```

| 参数    | 是否必填 | 说明                                       |
| ----- | ---- | ---------------------------------------- |
| media | 是    | form-data中媒体文件标识，有filename、filelength、content-type等信息 |

> 用于视频封面或者音乐封面。

返回：

```json
{
    "media_id":MEDIA_ID,
 }
```



## 微信永久素材图文消息创建

```html
POST - /wechat/materialUploadArticle
```

| 参数    | 是否必填 | 说明      |
| ----- | ---- | ------- |
| media | 是    | 数组，多组图文 |

media包含参数说明：

| 参数                 | 是否必须 | 说明                                       |
| ------------------ | ---- | ---------------------------------------- |
| title              | 是    | 标题                                       |
| thumb_media_id     | 是    | 图文消息的封面图片素材id（必须是永久mediaID）              |
| author             | 否    | 作者                                       |
| digest             | 否    | 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空。如果本字段为没有填写，则默认抓取正文前64个字。 |
| show_cover_pic     | 是    | 是否显示封面，0为false，即不显示，1为true，即显示           |
| content            | 是    | 图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS,涉及图片url必须来源 "上传图文消息内的图片获取URL"接口获取。外部图片url将被过滤。 |
| content_source_url | 是    | 图文消息的原文地址，即点击“阅读原文”后的URL                 |

提交数据示例：

```json
[
  {
    "title": TITLE,
    "thumb_media_id": THUMB_MEDIA_ID,
    "show_cover_pic": SHOW_COVER_PIC(0 / 1),
    "author": AUTHOR,
    "digest": DIGEST,
    "content": CONTENT,
    "url": URL,
    "content_source_url": CONTETN_SOURCE_URL
  },
  {
    "title": TITLE,
    "thumb_media_id": THUMB_MEDIA_ID,
    "show_cover_pic": SHOW_COVER_PIC(0 / 1),
    "author": AUTHOR,
    "digest": DIGEST,
    "content": CONTENT,
    "url": URL,
    "content_source_url": CONTETN_SOURCE_URL
  },
]



```

返回：

```json
{
   "media_id":MEDIA_ID
}
```

> 返回的即为新增的图文消息素材的media_id。

## 微信永久素材图文消息修改

```html
POST - /wechat/materialUpdateArticle
```

| 参数     | 是否必填 | 说明                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| media_id | 是       | 要更新的文章的 mediaId                                       |
| article  | 是       | 文章内容                                                     |
| index    | 是       | 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0； |

article包含参数说明：

| 参数               | 是否必须 | 说明                                                         |
| ------------------ | -------- | ------------------------------------------------------------ |
| title              | 是       | 标题                                                         |
| thumb_media_id     | 是       | 图文消息的封面图片素材id（必须是永久mediaID）                |
| author             | 是       | 作者                                                         |
| digest             | 是       | 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空       |
| show_cover_pic     | 是       | 是否显示封面，0为false，即不显示，1为true，即显示            |
| content            | 是       | 图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS |
| content_source_url | 是       | 图文消息的原文地址，即点击“阅读原文”后的URL                  |

提交数据示例：

```json
{
  "media_id":MEDIA_ID,
  "index":INDEX,
  "article": {
       "title": TITLE,
       "thumb_media_id": THUMB_MEDIA_ID,
       "author": AUTHOR,
       "digest": DIGEST,
       "show_cover_pic": SHOW_COVER_PIC(0 / 1),
       "content": CONTENT,
       "content_source_url": CONTENT_SOURCE_URL
    }
}
```



##微信永久素材图文消息图片上传

```htm
POST - /wechat/materialUploadArticleImage
```

| 参数    | 是否必填 | 说明                                       |
| ----- | ---- | ---------------------------------------- |
| media | 是    | form-data中媒体文件标识，有filename、filelength、content-type等信息 |

> 返回值中 url 就是上传图片的 URL，可用于后续群发中，放置到图文消息中。
>
> 本接口所上传的图片不占用公众号的素材库中图片数量的5000个的限制。图片仅支持jpg/png格式，大小必须在1MB以下。

## 微信永久素材获取单条

```html
GET - /wechat/materialGet
```

| 参数       | 是否必填 | 说明   |
| -------- | ---- | ---- |
| media_id | 是    | 素材ID |

图文素材:

```json
{
 "news_item": [
       {
       "title":TITLE,
       "thumb_media_id"::THUMB_MEDIA_ID,
       "show_cover_pic":SHOW_COVER_PIC(0/1),
       "author":AUTHOR,
       "digest":DIGEST,
       "content":CONTENT,
       "url":URL,
       "content_source_url":CONTENT_SOURCE_URL
       },
       //多图文消息有多篇文章
    ]
  }
```

视频消息素材：

```json
{
  "title":TITLE,
  "description":DESCRIPTION,
  "down_url":DOWN_URL,
}

```

### 微信永久素材获取列表

```html
GET - /wechat/materialList
```

| 参数     | 是否必填 | 说明                                       |
| ------ | ---- | ---------------------------------------- |
| type   | 是    | 素材的类型，图片（`image`）、视频（`video`）、语音 （`voice`）、图文（`news`） |
| offset | 是    | 从全部素材的该偏移位置开始返回，可选，默认 `0`，0 表示从第一个素材 返回  |
| count  | 是    | 返回素材的数量，可选，默认 `20`, 取值在 1 到 20 之间        |

图片、语音、视频 等类型的返回如下

```json
{
   "total_count": TOTAL_COUNT,
   "item_count": ITEM_COUNT,
   "item": [{
       "media_id": MEDIA_ID,
       "name": NAME,
       "update_time": UPDATE_TIME,
       "url":URL
   },
   //可能会有多个素材
   ]
}
```

永久图文消息素材列表的响应如下：

```json
{
   "total_count": TOTAL_COUNT,
   "item_count": ITEM_COUNT,
   "item": [{
       "media_id": MEDIA_ID,
       "content": {
           "news_item": [{
               "title": TITLE,
               "thumb_media_id": THUMB_MEDIA_ID,
               "show_cover_pic": SHOW_COVER_PIC(0 / 1),
               "author": AUTHOR,
               "digest": DIGEST,
               "content": CONTENT,
               "url": URL,
               "content_source_url": CONTETN_SOURCE_URL
           },
           //多图文消息会在此处有多篇文章
           ]
        },
        "update_time": UPDATE_TIME
    },
    //可能有多个图文消息item结构
  ]
}
```

## 获取素材计数

```html
GET - /wechat/materialStats
```

结果：

```json
 {
   "voice_count":COUNT,
   "video_count":COUNT,
   "image_count":COUNT,
   "news_count":COUNT
 }
```

## 删除永久素材

```html
POST - /wechat/materialDelete
```

| 参数       | 是否必填 | 说明   |
| -------- | ---- | ---- |
| media_id | 是    | 素材ID |

## 本地图文添加

> 本地图文模块，属于服务器内部的存储，和微信数据无关。

```html
POST - /wechat/localNewsAdd
```

| 参数    | 是否必填 | 说明   |
| ----- | ---- | ---- |
| media | 是    | 数组   |

media包含参数说明：

| 参数          | 是否必填 | 说明         |
| ----------- | ---- | ---------- |
| title       | 是    | 标题         |
| cover_pic   | 是    | 封面图链接      |
| link        | 是    | 链接         |
| link.action | 是    | 行为，具体见链接说明 |
| link.param  | 是    | 参数，具体见链接说明 |

请求示例：

```json
[
  {
    "title" : "本地图文示例",
    "cover_pic" : "https://www.fashop.cn/logo.png",
    "link" : {
      "action" : "goods",
      "param" : {
        "id" : 20
      }
    }
  },
  {
    "title" : "本地图文示例",
    "cover_pic" : "https://www.fashop.cn/logo.png",
    "link" : {
      "action" : "goods",
      "param" : {
        "id" : 20
      }
    }
  }
]
```
## 本地图文修改

```html
POST - /wechat/localNewsEdit
```

| 参数    | 是否必填 | 说明   |
| ----- | ---- | ---- |
| id    | 是    | 图文id |
| media | 是    | 数组   |

media包含参数说明：

| 参数          | 是否必填 | 说明         |
| ----------- | ---- | ---------- |
| title       | 是    | 标题         |
| cover_pic   | 是    | 封面图链接      |
| link        | 是    | 链接         |
| link.action | 是    | 行为，具体见链接说明 |
| link.param  | 是    | 参数，具体见链接说明 |

请求示例：

```json
[
  {
    "title" : "本地图文示例",
    "cover_pic" : "https://www.fashop.cn/logo.png",
    "link" : {
      "action" : "goods",
      "param" : {
        "id" : 20
      }
    }
  },
  {
    "title" : "本地图文示例",
    "cover_pic" : "https://www.fashop.cn/logo.png",
    "link" : {
      "action" : "goods",
      "param" : {
        "id" : 20
      }
    }
  }
]
```

## 本地图文删除

```html
POST - /wechat/localNewsDel
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 图文id |

## 本地图文列表

```html
POST - /wechat/localNews
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| page | 是    | 分页   |
| rows | 是    | 条数   |

## 自动回复开关设置

```
POST - /wechat/autoReplyStatusSet
```

| 参数   | 是否必填   | 说明                                      |
| ------ | ---------- | ----------------------------------------- |
| status | 是，可选填 | 是否开启自动回复功能，开启 `1` 、关闭 `0` |

## 自动回复开关设置获取

```html
GET - /wechat/autoReplyStatusGet
```

返回

```json
{
    "status" : 1
}
```



## 被关注自动回复内容设置获取

```html
GET - /wechat/autoReplySubscribeGet
```

返回

```json
{
    "reply_content" : {
        "type" : "text",
        "content" : "你好，我是机器人(●—●)"
    }
}
```



## 被关注自动回复内容设置

```html
POST - /wechat/autoReplySubscribeSet
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| reply_content               | 是，可选填                                        | 回复内容                                                     |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |
> shop表字段

请求示例：

文本

```json

{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    }
}
```

图片

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "image",
      "media_id" : MEDIA_ID,
      "extra" : {
           "url" : "http://xxxxxxxxxxxxxxxxxx.jpg"
       }
    }
}
```

图文

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "news",
      "media_id" : MEDIA_ID,
      "extra" : [
       {
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        },
    	{
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        }
      ]
    }
}
```

音频

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "voice",
      "media_id" : MEDIA_ID,
       "extra" : {
           "name" : "1521009709656服装大甩卖.mp3"
       }
    }
}
```

视频

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
      "extra" : {
             "title":TITLE,
             "description":DESCRIPTION,
             "down_url":DOWN_URL
        }
    }
}
```

本地图文

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
      "extra" : [
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	},
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	}
       ]
    }
}
```



## 开启/关闭

```html
POST - /wechat/autoReplyKeywordsSet
```

| 参数     | 是否必填 | 说明           |
| ------ | ---- | ------------ |
| status | 是    | 开关，开`1`、关`0` |

```json
{
  "status" : 1
}
```



## 关键词规则列表

```html
GET - /wechat/replyKeywordsList
```

| 参数       | 是否必填 | 说明                  |
| -------- | ---- | ------------------- |
| keywords | 否    | 搜索关键，支持规则名称搜索和关键词搜索 |

## 关键词规则添加

```html
POST - /wechat/autoReplyKeywordsAdd
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| rule_name                   | 是                                                | 规则名称                                                     |
| keywords                    | 是                                                | 触发的关键词集合，数组，最多10组                             |
| keywords.key                | 是                                                | 要匹配的关键词，最长30字符                                   |
| keywords.match_mode         | 是                                                | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| reply_mode                  | 是                                                | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条，回复内容，最多5条 |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```



## 关键词规则修改

```html
POST - /wechat/autoReplyKeywordsEdit
```


| 参数                           | 是否必填                                     | 说明                                       |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| id                           | 是                                        | 规则id                                     |
| rule_name                    | 是                                        | 规则名称                                     |
| keywords                     | 是                                        | 触发的关键词集合，数组                              |
| keywords.match_mode          | 是                                        | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| keywords.key                 | 是                                        | 要匹配的关键词                                  |
| reply_mode                   | 是                                        | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条 |
| replay_content               | 是                                        | 回复内容                                     |
| replay_content.type          | 是                                        | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| replay_content.content       | 当type为`text`时必填                          | 文本内容                                     |
| replay_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                 |
| replay_content.local_news_id | 当type 为 `local_news` 时必填                 | 本地图文ID                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "id" : 1,
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```

## 规则关键词删除

```html
POST - /wechat/autoReplyKeywordsDel
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

## 规则关键词详情

```html
POST - /wechat/autoReplyKeywordsInfo
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

## 自动回复开关设置

```
POST - /wechat/autoReplyStatusSet
```

| 参数   | 是否必填   | 说明                                      |
| ------ | ---------- | ----------------------------------------- |
| status | 是，可选填 | 是否开启自动回复功能，开启 `1` 、关闭 `0` |

## 自动回复开关设置获取

```html
GET - /wechat/autoReplyStatusGet
```

返回

```json
{
    "status" : 1
}
```



## 被关注自动回复内容设置获取

```html
GET - /wechat/autoReplySubscribeGet
```

返回

```json
{
    "reply_content" : {
        "type" : "text",
        "content" : "你好，我是机器人(●—●)"
    }
}
```



## 被关注自动回复内容设置

```html
POST - /wechat/autoReplySubscribeSet
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| reply_content               | 是，可选填                                        | 回复内容                                                     |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |
> shop表字段

请求示例：

文本

```json

{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    }
}
```

图片

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "image",
      "media_id" : MEDIA_ID,
      "extra" : {
           "url" : "http://xxxxxxxxxxxxxxxxxx.jpg"
       }
    }
}
```

图文

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "news",
      "media_id" : MEDIA_ID,
      "extra" : [
       {
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        },
    	{
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        }
      ]
    }
}
```

音频

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "voice",
      "media_id" : MEDIA_ID,
       "extra" : {
           "name" : "1521009709656服装大甩卖.mp3"
       }
    }
}
```

视频

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
      "extra" : {
             "title":TITLE,
             "description":DESCRIPTION,
             "down_url":DOWN_URL
        }
    }
}
```

本地图文

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
      "extra" : [
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	},
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	}
       ]
    }
}
```



## 开启/关闭

```html
POST - /wechat/autoReplyKeywordsSet
```

| 参数     | 是否必填 | 说明           |
| ------ | ---- | ------------ |
| status | 是    | 开关，开`1`、关`0` |

```json
{
  "status" : 1
}
```



## 关键词规则列表

```html
GET - /wechat/replyKeywordsList
```

| 参数       | 是否必填 | 说明                  |
| -------- | ---- | ------------------- |
| keywords | 否    | 搜索关键，支持规则名称搜索和关键词搜索 |

## 关键词规则添加

```html
POST - /wechat/autoReplyKeywordsAdd
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| rule_name                   | 是                                                | 规则名称                                                     |
| keywords                    | 是                                                | 触发的关键词集合，数组，最多10组                             |
| keywords.key                | 是                                                | 要匹配的关键词，最长30字符                                   |
| keywords.match_mode         | 是                                                | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| reply_mode                  | 是                                                | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条，回复内容，最多5条 |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```



## 关键词规则修改

```html
POST - /wechat/autoReplyKeywordsEdit
```


| 参数                           | 是否必填                                     | 说明                                       |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| id                           | 是                                        | 规则id                                     |
| rule_name                    | 是                                        | 规则名称                                     |
| keywords                     | 是                                        | 触发的关键词集合，数组                              |
| keywords.match_mode          | 是                                        | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| keywords.key                 | 是                                        | 要匹配的关键词                                  |
| reply_mode                   | 是                                        | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条 |
| replay_content               | 是                                        | 回复内容                                     |
| replay_content.type          | 是                                        | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| replay_content.content       | 当type为`text`时必填                          | 文本内容                                     |
| replay_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                 |
| replay_content.local_news_id | 当type 为 `local_news` 时必填                 | 本地图文ID                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "id" : 1,
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```

## 规则关键词删除

```html
POST - /wechat/autoReplyKeywordsDel
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

## 规则关键词详情

```html
POST - /wechat/autoReplyKeywordsInfo
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

## 自动回复开关设置

```
POST - /wechat/autoReplyStatusSet
```

| 参数   | 是否必填   | 说明                                      |
| ------ | ---------- | ----------------------------------------- |
| status | 是，可选填 | 是否开启自动回复功能，开启 `1` 、关闭 `0` |

## 自动回复开关设置获取

```html
GET - /wechat/autoReplyStatusGet
```

返回

```json
{
    "status" : 1
}
```



## 被关注自动回复内容设置获取

```html
GET - /wechat/autoReplySubscribeGet
```

返回

```json
{
    "reply_content" : {
        "type" : "text",
        "content" : "你好，我是机器人(●—●)"
    }
}
```



## 被关注自动回复内容设置

```html
POST - /wechat/autoReplySubscribeSet
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| reply_content               | 是，可选填                                        | 回复内容                                                     |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |
> shop表字段

请求示例：

文本

```json

{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    }
}
```

图片

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "image",
      "media_id" : MEDIA_ID,
      "extra" : {
           "url" : "http://xxxxxxxxxxxxxxxxxx.jpg"
       }
    }
}
```

图文

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "news",
      "media_id" : MEDIA_ID,
      "extra" : [
       {
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        },
    	{
            "title": TITLE,
            "thumb_media_id": THUMB_MEDIA_ID,
            "author": AUTHOR,
            "digest": DIGEST,
            "show_cover_pic": SHOW_COVER_PIC(0 / 1),
            "content": CONTENT,
            "content_source_url": CONTENT_SOURCE_URL
        }
      ]
    }
}
```

音频

```json
{
  "status" : 1,
  "replay_content" : 
   {
      "type" : "voice",
      "media_id" : MEDIA_ID,
       "extra" : {
           "name" : "1521009709656服装大甩卖.mp3"
       }
    }
}
```

视频

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
      "extra" : {
             "title":TITLE,
             "description":DESCRIPTION,
             "down_url":DOWN_URL
        }
    }
}
```

本地图文

```json
{
  "status" : 1,
  "replay_content" : 
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
      "extra" : [
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	},
            {
            "title" : "xxxxxxxxx",
            "cover_pic" : "http://xxxxxxxxxx.jpg"
        	}
       ]
    }
}
```



## 开启/关闭

```html
POST - /wechat/autoReplyKeywordsSet
```

| 参数     | 是否必填 | 说明           |
| ------ | ---- | ------------ |
| status | 是    | 开关，开`1`、关`0` |

```json
{
  "status" : 1
}
```



## 关键词规则列表

```html
GET - /wechat/replyKeywordsList
```

| 参数       | 是否必填 | 说明                  |
| -------- | ---- | ------------------- |
| keywords | 否    | 搜索关键，支持规则名称搜索和关键词搜索 |

## 关键词规则添加

```html
POST - /wechat/autoReplyKeywordsAdd
```

| 参数                        | 是否必填                                          | 说明                                                         |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| rule_name                   | 是                                                | 规则名称                                                     |
| keywords                    | 是                                                | 触发的关键词集合，数组，最多10组                             |
| keywords.key                | 是                                                | 要匹配的关键词，最长30字符                                   |
| keywords.match_mode         | 是                                                | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| reply_mode                  | 是                                                | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条，回复内容，最多5条 |
| reply_content.type          | 是                                                | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| reply_content.content       | 当type为`text`时必填                              | 文本内容                                                     |
| reply_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                               |
| reply_content.local_news_id | 当type 为 `local_news` 时必填                     | 本地图文ID                                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```



## 关键词规则修改

```html
POST - /wechat/autoReplyKeywordsEdit
```


| 参数                           | 是否必填                                     | 说明                                       |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| id                           | 是                                        | 规则id                                     |
| rule_name                    | 是                                        | 规则名称                                     |
| keywords                     | 是                                        | 触发的关键词集合，数组                              |
| keywords.match_mode          | 是                                        | 匹配模式，contain代表消息中含有该关键词即可，equal表示消息内容必须和关键词严格相同 |
| keywords.key                 | 是                                        | 要匹配的关键词                                  |
| reply_mode                   | 是                                        | 回复模式，`reply_all`代表全部回复，`random_one`代表随机回复其中一条 |
| replay_content               | 是                                        | 回复内容                                     |
| replay_content.type          | 是                                        | 是，`text`文本、`image`图片、`news`图文 、`voice`音频、 `video`视频、`local_news` 本地图文 |
| replay_content.content       | 当type为`text`时必填                          | 文本内容                                     |
| replay_content.media_id      | 当type为`image`、`news`、`voice`、`video`、时必填 | 微信永久素材ID                                 |
| replay_content.local_news_id | 当type 为 `local_news` 时必填                 | 本地图文ID                                   |

> 关键词回复和被关注的回复数据结构是一样的

请求数据示例：

```json
{
  "id" : 1,
  "rule_name" : "回复fashop是什么",
  "keywords" : [
    {
      "match_mode" : "contain",
      "key" : "是什么", // 如果用户给公众号发“是什么”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "fashop", // 如果用户给公众号发“fashop”，此处应该有消息回复
    },
    {
      "match_mode" : "contain",
      "key" : "什么", // 如果用户给公众号发“什么”，此处应该有消息回复
    }
  ], 
  "replay_content" : [
    {
      "type" : "text",
      "content" : "fashop是个商城系统",
    },
    {
      "type" : "image",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "voice",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "video",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "news",
      "media_id" : MEDIA_ID,
    },
    {
      "type" : "local_news",
      "local_news_id" : LOCAL_NEWS_ID,
    }
  ],
  "reply_mode" : "reply_all"
}
```

## 规则关键词删除

```html
POST - /wechat/autoReplyKeywordsDel
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

## 规则关键词详情

```html
POST - /wechat/autoReplyKeywordsInfo
```

| 参数   | 是否必填 | 说明   |
| ---- | ---- | ---- |
| id   | 是    | 规则id |

