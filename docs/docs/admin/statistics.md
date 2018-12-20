# 统计
## 数量统计

```html
GET - /Statistics/quantity
```



## 柱状图-月销售额

```html
GET - /Statistics/monthSalesHistogram
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |

```json
{
    "code": 0,
    "result": {
        "list": [
            {
                "day": 1,
                "sale_number": 755
            },
            {
                "day": 2,
                "sale_number": 1833
            },
            {
                "day": 3,
                "sale_number": 2188
            },
            {
                "day": 4,
                "sale_number": 408
            },
            {
                "day": 5,
                "sale_number": 319
            },
            {
                "day": 6,
                "sale_number": 1584
            },
            {
                "day": 7,
                "sale_number": 458
            },
            {
                "day": 8,
                "sale_number": 1296
            },
            {
                "day": 9,
                "sale_number": 275
            },
            {
                "day": 10,
                "sale_number": 1144
            },
            {
                "day": 11,
                "sale_number": 424
            },
            {
                "day": 12,
                "sale_number": 434
            },
            {
                "day": 13,
                "sale_number": 2038
            },
            {
                "day": 14,
                "sale_number": 1701
            },
            {
                "day": 15,
                "sale_number": 2601
            },
            {
                "day": 16,
                "sale_number": 1123
            },
            {
                "day": 17,
                "sale_number": 1106
            },
            {
                "day": 18,
                "sale_number": 2429
            },
            {
                "day": 19,
                "sale_number": 2308
            },
            {
                "day": 20,
                "sale_number": 653
            },
            {
                "day": 21,
                "sale_number": 2494
            },
            {
                "day": 22,
                "sale_number": 479
            },
            {
                "day": 23,
                "sale_number": 676
            },
            {
                "day": 24,
                "sale_number": 903
            },
            {
                "day": 25,
                "sale_number": 619
            },
            {
                "day": 26,
                "sale_number": 1541
            },
            {
                "day": 27,
                "sale_number": 2322
            },
            {
                "day": 28,
                "sale_number": 1876
            },
            {
                "day": 29,
                "sale_number": 652
            },
            {
                "day": 30,
                "sale_number": 1643
            }
        ]
    },
    "msg": null
}
```



## 柱状图-月订单量

```html
GET - /Statistics/monthOrderCountHistogram
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |

```json
{
    "code": 0,
    "result": {
        "list": [
            {
                "day": 1,
                "order_number": 2219
            },
            {
                "day": 2,
                "order_number": 2309
            },
            {
                "day": 3,
                "order_number": 232
            },
            {
                "day": 4,
                "order_number": 2374
            },
            {
                "day": 5,
                "order_number": 979
            },
            {
                "day": 6,
                "order_number": 931
            },
            {
                "day": 7,
                "order_number": 1091
            },
            {
                "day": 8,
                "order_number": 2808
            },
            {
                "day": 9,
                "order_number": 1741
            },
            {
                "day": 10,
                "order_number": 827
            },
            {
                "day": 11,
                "order_number": 908
            },
            {
                "day": 12,
                "order_number": 1450
            },
            {
                "day": 13,
                "order_number": 2284
            },
            {
                "day": 14,
                "order_number": 1499
            },
            {
                "day": 15,
                "order_number": 905
            },
            {
                "day": 16,
                "order_number": 1587
            },
            {
                "day": 17,
                "order_number": 2131
            },
            {
                "day": 18,
                "order_number": 2614
            },
            {
                "day": 19,
                "order_number": 604
            },
            {
                "day": 20,
                "order_number": 1360
            },
            {
                "day": 21,
                "order_number": 1283
            },
            {
                "day": 22,
                "order_number": 1423
            },
            {
                "day": 23,
                "order_number": 249
            },
            {
                "day": 24,
                "order_number": 2576
            },
            {
                "day": 25,
                "order_number": 2544
            },
            {
                "day": 26,
                "order_number": 2681
            },
            {
                "day": 27,
                "order_number": 1721
            },
            {
                "day": 28,
                "order_number": 858
            },
            {
                "day": 29,
                "order_number": 873
            },
            {
                "day": 30,
                "order_number": 2466
            }
        ]
    },
    "msg": null
}
```



## 柱状图-客户增量

```html
GET - /Statistics/monthUserAddCountHistogram
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |

```json
{
    "code": 0,
    "result": {
        "list": [
            {
                "day": 1,
                "customer_number": 2959
            },
            {
                "day": 2,
                "customer_number": 1722
            },
            {
                "day": 3,
                "customer_number": 2602
            },
            {
                "day": 4,
                "customer_number": 976
            },
            {
                "day": 5,
                "customer_number": 1131
            },
            {
                "day": 6,
                "customer_number": 2976
            },
            {
                "day": 7,
                "customer_number": 1706
            },
            {
                "day": 8,
                "customer_number": 1539
            },
            {
                "day": 9,
                "customer_number": 2902
            },
            {
                "day": 10,
                "customer_number": 2795
            },
            {
                "day": 11,
                "customer_number": 2009
            },
            {
                "day": 12,
                "customer_number": 995
            },
            {
                "day": 13,
                "customer_number": 1161
            },
            {
                "day": 14,
                "customer_number": 1668
            },
            {
                "day": 15,
                "customer_number": 561
            },
            {
                "day": 16,
                "customer_number": 418
            },
            {
                "day": 17,
                "customer_number": 1769
            },
            {
                "day": 18,
                "customer_number": 2146
            },
            {
                "day": 19,
                "customer_number": 574
            },
            {
                "day": 20,
                "customer_number": 1315
            },
            {
                "day": 21,
                "customer_number": 2564
            },
            {
                "day": 22,
                "customer_number": 2535
            },
            {
                "day": 23,
                "customer_number": 1429
            },
            {
                "day": 24,
                "customer_number": 2146
            },
            {
                "day": 25,
                "customer_number": 1459
            },
            {
                "day": 26,
                "customer_number": 1010
            },
            {
                "day": 27,
                "customer_number": 674
            },
            {
                "day": 28,
                "customer_number": 2967
            },
            {
                "day": 29,
                "customer_number": 2184
            },
            {
                "day": 30,
                "customer_number": 1352
            }
        ]
    },
    "msg": null
}
```



## 柱状图-新客户消费

```html
GET - /Statistics/monthNewUserSalesHistogram
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |

```json
{
    "code": 0,
    "result": {
        "list": [
            {
                "day": 1,
                "cost": 861
            },
            {
                "day": 2,
                "cost": 419
            },
            {
                "day": 3,
                "cost": 1482
            },
            {
                "day": 4,
                "cost": 1374
            },
            {
                "day": 5,
                "cost": 1602
            },
            {
                "day": 6,
                "cost": 237
            },
            {
                "day": 7,
                "cost": 1083
            },
            {
                "day": 8,
                "cost": 922
            },
            {
                "day": 9,
                "cost": 1335
            },
            {
                "day": 10,
                "cost": 2816
            },
            {
                "day": 11,
                "cost": 1921
            },
            {
                "day": 12,
                "cost": 2893
            },
            {
                "day": 13,
                "cost": 393
            },
            {
                "day": 14,
                "cost": 1431
            },
            {
                "day": 15,
                "cost": 928
            },
            {
                "day": 16,
                "cost": 431
            },
            {
                "day": 17,
                "cost": 2973
            },
            {
                "day": 18,
                "cost": 2594
            },
            {
                "day": 19,
                "cost": 1459
            },
            {
                "day": 20,
                "cost": 997
            },
            {
                "day": 21,
                "cost": 2954
            },
            {
                "day": 22,
                "cost": 2888
            },
            {
                "day": 23,
                "cost": 584
            },
            {
                "day": 24,
                "cost": 1711
            },
            {
                "day": 25,
                "cost": 1754
            },
            {
                "day": 26,
                "cost": 1727
            },
            {
                "day": 27,
                "cost": 2350
            },
            {
                "day": 28,
                "cost": 334
            },
            {
                "day": 29,
                "cost": 2812
            },
            {
                "day": 30,
                "cost": 2824
            }
        ]
    },
    "msg": null
}
```



## 柱状图-销售累计

```html
GET - /Statistics/saleAccumulativeAmount
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |

## 销售日均

```html
GET - /Statistics/dayAverage
```

| 参数 | 是否必填 | 说明          |
| ---- | -------- | ------------- |
| date | 是       | 格式：2017-07 |


