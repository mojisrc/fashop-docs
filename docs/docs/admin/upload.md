# 上传
## 证书上传

```html
POST - /upload/addCert
```

| 参数 | 是否必填 | 说明                                                         |
| ---- | -------- | ------------------------------------------------------------ |
| cert | 是       | form-data中媒体文件标识，有filename、filelength、content-type等信息 |

返回：

```json
{
    "path" : "Upload/cert/xxx-xxx.pem"
}
```

