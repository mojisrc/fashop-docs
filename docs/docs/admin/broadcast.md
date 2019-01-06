# 广播

> 用于系统内部广播通知

## 使用方法

```php
// call方法接受string
\App\Broadcast\Dispatch::call( json_encode( [
    'action'  => 'admin.order.pay',
    'payload' => [],
    'confirm'=>true,
] ) );
```

- action 为要执行的方法，action = admin.order.new 是执行 \App\Broadcast\Admin\Order->pay()方法
- payload 为要执行的数据



