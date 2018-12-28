# 小程序模板消息

![image](https://ws4.sinaimg.cn/large/006tNbRwgy1fykiyaiawdj317t0u07bt.jpg)

首先选择要创建的模板消息

![image](https://ws3.sinaimg.cn/large/006tNbRwgy1fykiz6rhfbj31410u0dq7.jpg)

然后在后台设置模板消息，并且对应上要显示的数据，微信小程序接口https://developers.weixin.qq.com/miniprogram/dev/api/getTemplateLibraryById.html 会返回要展示关键词列表，展示在左侧，右侧用来选择要对应的FaShop系统的关键词

每次用户触发按钮才能有一次发送模板消息的权限，有效期为7天，所以发货通知暂时不处理是因为无法确定是7天发货，而且在订单支付成功通知的时候用了一次，不作弊的情况下不能确保正常获得多条发送的权利