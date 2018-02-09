

# sbox_dashboard


## 2018-02-06 update
- API [2.3 Set Spu](https://github.com/ace68723/sbox_dashboard/blob/master/doc/set_spu.md)
- API [2.4 Set Sku](https://github.com/ace68723/sbox_dashboard/blob/master/doc/set_sku.md)


## 2018-02-05 update
- Update [Data sample](#1) with actual response, suffix "page_number" changes to "page_num". 
- API 文档 [2.2 Get Spu Detail](https://github.com/ace68723/sbox_dashboard/blob/master/doc/get_spu_detail.md)
- API Get Spu List 和 Get Spu Detail在测试服务器可用，参见postman账号中 甜满箱/norgta.com/v2/甜满箱管理


## 2018-02-02 update
- Add [Data sample](#1) for get APIs. 
- API 文档 [2.1 Get Spu List](https://github.com/ace68723/sbox_dashboard/blob/master/doc/get_spu_list.md)


## Contents
* [1. Data sample](#1)
  * [1.1 get spu list data sample](#1.1)
  * [1.2 get spu_detail data sample](#1.2)
  
  
* [2. API Document](https://github.com/ace68723/sbox_dashboard/blob/master/doc)
  * [2.1 Get Spu List](https://github.com/ace68723/sbox_dashboard/blob/master/doc/get_spu_list.md)
  * [2.2 Get Spu Detail](https://github.com/ace68723/sbox_dashboard/blob/master/doc/get_spu_detail.md)  
  * [2.3 Set Spu](https://github.com/ace68723/sbox_dashboard/blob/master/doc/set_spu.md)
  * [2.4 Set Sku](https://github.com/ace68723/sbox_dashboard/blob/master/doc/set_sku.md)
  
<div id="1"> <div/>

## 1. data sample

<div id="1.1"> <div/>

### 1.1 get spu list data sample 


```
{
    "ev_error": 0,
    "ev_message": "",
    "ev_total_count": 63,
    "ev_total_page": 4,
    "ev_page_num": 1,
    "ev_page_size": 20,
    "ea_spu_list": [
        {
            "spu_id": 1,
            "name": "太阳锅巴",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/1_20170828.png",
            "status": 9
        },
        {
            "spu_id": 2,
            "name": "与美懒人大厨四川冒菜",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/2_20170828.png",
            "status": 9
        },
        {
            "spu_id": 3,
            "name": "与美懒人大厨真火锅粉",
            "spu_price": "3.69",
            "image": "https://chanmao.us/storage/image/sb_app/image/4_20170828.png",
            "status": 0
        },
        {
            "spu_id": 4,
            "name": "徽记瓜子",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/5_20170828.png",
            "status": 0
        },
        {
            "spu_id": 5,
            "name": "徽记好巴食豆干",
            "spu_price": "1.69",
            "image": "https://chanmao.us/storage/image/sb_app/image/9_20170828.png",
            "status": 0
        },
        {
            "spu_id": 6,
            "name": "好巴食素肉豆干三合一",
            "spu_price": "1.69",
            "image": "https://chanmao.us/storage/image/sb_app/image/10_20170828.png",
            "status": 0
        },
        {
            "spu_id": 7,
            "name": "悠哈味觉糖果汁软糖",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/11_20170828.png",
            "status": 0
        },
        {
            "spu_id": 8,
            "name": "徽记好巴食豆腐干",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/14_20170828.png",
            "status": 0
        },
        {
            "spu_id": 9,
            "name": "安厨海苔",
            "spu_price": "0.50",
            "image": "https://chanmao.us/storage/image/sb_app/image/16_20170828.png",
            "status": 0
        },
        {
            "spu_id": 10,
            "name": "安厨风味素肉",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/17_20170828.png",
            "status": 0
        },
        {
            "spu_id": 11,
            "name": "安厨有机甘栗",
            "spu_price": "2.29",
            "image": "https://chanmao.us/storage/image/sb_app/image/18_20170828.png",
            "status": 0
        },
        {
            "spu_id": 12,
            "name": "安厨咸干花生",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/28_20170828.png",
            "status": 0
        },
        {
            "spu_id": 13,
            "name": "都来枣",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/20_20170828.png",
            "status": 0
        },
        {
            "spu_id": 14,
            "name": "卡乐比水果麦片",
            "spu_price": "14.99",
            "image": "https://chanmao.us/storage/image/sb_app/image/21_20170828.png",
            "status": 0
        },
        {
            "spu_id": 15,
            "name": "明治雪吻巧克力",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/22_20170828.png",
            "status": 0
        },
        {
            "spu_id": 16,
            "name": "柳全螺蛳粉",
            "spu_price": "2.59",
            "image": "https://chanmao.us/storage/image/sb_app/image/23_20170828.png",
            "status": 0
        },
        {
            "spu_id": 17,
            "name": "康师傅方便面",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/24_20170828.png",
            "status": 0
        },
        {
            "spu_id": 18,
            "name": "张君雅",
            "spu_price": "1.49",
            "image": "https://chanmao.us/storage/image/sb_app/image/29_20170828.png",
            "status": 0
        },
        {
            "spu_id": 19,
            "name": "中祥自然蔬菜梳打饼",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/33_20170828.png",
            "status": 0
        },
        {
            "spu_id": 20,
            "name": "湖池屋FF洋芋条",
            "spu_price": "0.00",
            "image": "https://chanmao.us/storage/image/sb_app/image/35_20170828.png",
            "status": 9
        }
    ]
}

```


<div id="1.2"> <div/>

### 1.2 get spu detail (single spu) data sample


```
{
    "ev_error": 0,
    "ev_message": "",
    "eo_spu": {
        "spu_id": 2,
        "spu_name": "与美懒人大厨四川冒菜",
        "spu_price": "0.00",
        "spu_image": "https://chanmao.us/storage/image/sb_app/image/2_20170828.png",
        "spu_status": 9,
        "sku_total_count": 2,
        "sku_total_page": 1,
        "sku_page_num": 1,
        "sku_page_size": 20,
        "sku_list": [
            {
                "spu_id": 2,
                "sku_id": 2,
                "sku_name": "豚骨菌菇",
                "sku_status": 9,
                "sku_alias": "",
                "sku_price": "0.00",
                "sku_amount": 0,
                "sku_threshold": 1,
                "sku_original_price": "0.00",
                "sku_image_id": 2,
                "sku_fact_image_id": 202,
                "sku_image": "https://chanmao.us/storage/image/sb_app/image/2_20170828.png",
                "sku_fact_image": "https://chanmao.us/storage/image/sb_app/facts/2_20170828.png"
            },
            {
                "spu_id": 2,
                "sku_id": 3,
                "sku_name": "浓香麻辣",
                "sku_status": 9,
                "sku_alias": "",
                "sku_price": "0.00",
                "sku_amount": 1,
                "sku_threshold": 1,
                "sku_original_price": "0.00",
                "sku_image_id": 3,
                "sku_fact_image_id": 203,
                "sku_image": "https://chanmao.us/storage/image/sb_app/image/3_20170828.png",
                "sku_fact_image": "https://chanmao.us/storage/image/sb_app/facts/3_20170828.png"
            }
        ]
    }
}
```

