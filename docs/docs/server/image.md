# 图片
## 图片上传

```html
POST - /upload/addImage
```

| 参数  | 是否必填 | 说明                                                         |
| ----- | -------- | ------------------------------------------------------------ |
| type  | 是       | `file` `` base64``                                           |
| image | 是       | `file` ：form-data中媒体文件标识，有filename、filelength、content-type等信，`base64` ：字符串 |

```json
{
	"code": 0,
	"result": {
		"origin": {
			"name": "AwbCipRek5F4WaH",
			"path": "https://demo.fashop.cn/Upload/20180603/AwbCipRek5F4WaH.jpeg",
			"size": 381525,
			"type": "image/jpeg"
		},
		"bmid": {
			"name": "AwbCipRek5F4WaH",
			"path": "https://demo.fashop.cn/Upload/20180603/AwbCipRek5F4WaH_bmid.jpeg",
			"size": 72112,
			"type": "image/jpeg"
		},
		"thumb": {
			"name": "AwbCipRek5F4WaH",
			"path": "https://demo.fashop.cn/Upload/20180603/AwbCipRek5F4WaH_thumb.jpeg",
			"size": 63229,
			"type": "image/jpeg"
		}
	},
	"msg": null
}
```

