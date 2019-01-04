# WebSocket

>  客户端

## 登陆

发送

```json
{
    "sign":"识别标识，作为服务器端给fd发送的标识",
    "type":"login",
    "data": {
        "access_token":"xxxxxxxxxxxxxxxx"
    }
}
```

收到

```json
{
    "sign":"客户端发来的标识",
    "type":"login",
    "code" : 0
}
```



- 登陆后，uid对应的fd都会记录到数据库里，是一对多的关系，其他请求将不再登陆，根据fd去识别用户uid。

用户断开，系统将会自动删除数据库里的uid对应的fd。

- 系统每次重启后将会删除所有uid、fd信息



> 服务器端

## 广播通知

```json
{
    "type":"notice.order.new",
    "code" : 0,
    "data" : {
        "info":{
            "id":123
        }
    }
}
```

