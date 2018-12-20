# 微信
## JSSDK配置信息

```html
GET - /wechat/jssdk
```

| 参数 | 是否必填 | 说明                           |
| ---- | -------- | ------------------------------ |
| url  | 否       | 授权地址，默认是当前请求的地址 |

## 微信code

```html
GET - /wechat/code
```

| 参数          | 是否必填 | 说明                                       |
| ----------- | ---- | ---------------------------------------- |
| request_url | 是    | 拿到code要返回的地址，授权后重定向的回调链接地址，请使用urlEncode对链接进行处理 |
| scope       | 否    | `snsapi_userinfo`为正常授权 `snsapi_base`为静默授权 不传默认为正常授权 |

## 微信openid

```html
GET - /wechat/openid
```

| 参数   | 是否必填 | 说明        |
| ---- | ---- | --------- |
| code | 是    | 微信授权的code |

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |

> 如果用户注册了，将不再重新注册

## 获得用户信息

```html
GET - /wechat/userinfo
```

| 参数   | 是否必填 | 说明       |
| ---- | ---- | -------- |
| code | 是    | 微信给的code |

## 微信公众平台消息触发接口

```html
GET | POST - /wechat/message
```

> 该接口是提供给微信公众平台使用的





## 杂项介绍

收到message的信息里有

GET

```json
{
"signature": "d60732295809601bfc196c5d0e1f7733f7f10fcab3",
"timestamp": "1531894358",
"nonce": "1863958205",
"openid": "oyEkT1tzpNf2IPfj3sNjwGLKjOuI",
"encrypt_type": "aes",
"msg_signature": "da00333bf0116647255903c4cef0384056e8c1eedf"
}
```

RAW

```xml
<xml>
    <ToUserName><![CDATA[gh_886b27456e6e]]></ToUserName>
    <FromUserName><![CDATA[oyEkT1tzpNf2IPfj3sNjwGLKjOuI]]></FromUserName>
    <CreateTime>1531893527</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[SCAN]]></Event>
    <EventKey><![CDATA[share,10,714]]></EventKey>
    <Ticket>
        <[CDATA[gQFw7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAycjRzbnRJODljam0xb0lTbWhyY1IAAgQszU5bAwQA6QcA]]>
    </Ticket>
    <Encrypt>   <[CDATA[ZDJg+kzqHDSrdkcNeatcyAL1IlAp0lCJ0g+vkQZqAh5B/3Qtqtruz9ILQHvn9s80hiCPEbjwaUlG1EHiugG/qvpVQ4ppH1gRTHioRvTFux/6xPtPzf5WZ4eOBV9upygwPaOduepuo7yhpZHQ3g9cw7JFbIYA0gzXxxDAudyoQ4nPtGrosAURGa0GWKoPlSYbiNgH8J/njDTVTUOdeGGDa3lHT9q0hdSWsT6TCIClmogb60UQOu0YnB04XLvuCV4afz5iVNtfSLzr00vzoIGF9A+X90J/UPrJr7Tpbc5FD3rPMzKuRqgBBko7ZS1TieGA+17z6neLJYr7KhL3WMbjWL6Qbc+Uw0SARtehUPOHjmpgHaYjzazc/8SapnoF8jFRlnrqg1nZ/KcwHOoUbp3DqxR7526AK849bDq+NmRJkB08EG7BL+bJgKx9wAw3Xbkv8dmrVqXZ/e7KBTsfcylMyUfu4K2sm6ovEsffH4UzV62FnDZPu5inDlPzq5NdLjXTyZqNKUh78GSGzRA3mAENk+DPjs4kufdnAoxFrfET0I0+e7P1NSvQSt+wwtg1ZDS5GYM4aXZB5oCiRI6DKD2s1ilKXRiRBsPuGPAU9nDOaQh++kfJFY9Pas6gqFKDuugV]]>
    </Encrypt>
</xml>
```

解析RAW后

```json
{
"ToUserName": "gh_88ada6b27456e6e",
"FromUserName": "oyEkaaaT1tzpNf2IPfj3sNjwGLKjOuI",
"CreateTime": "1531894358",
"MsgType": "event",
"Event": "SCAN",
"EventKey": "share,10,714",
"Ticket": "gQFw7zwAAAAAAAAAaaaxxxxAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAycjRzbnRJODljam0xb0lTbWhyY1IAAgQszU5bAwQA6QcA"
}
```

