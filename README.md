

# sbox_dashboard

## 2018-01-29 update
- 新增API Document [3.1 Home Data](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/home_data.md) [3.2 Product base](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/product_base.md)
[3.3 Before checkout](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/before_checkout.md)
-  [Database schema ](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/database_schema.md) 新增表`sbox_addr_base` 替换旧表`sb_addr_base`，移除`cbid`字段
- [3.2 Product base](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/product_base.md) 和  [1.1 Single product spu data sample](#1.1) 新增字段`spu_service_img`
-  [3.3 Add order](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/add_order.md)


## Contents
* [1. Data sample](#1)
  * [1.1 get spu list data sample](#1.1)
  * [1.2 get spu_detail data sample](#1.2)
  
* [3. API Document (v2)](https://github.com/ace68723/sweetfulBox_1.1/tree/master/Document/API_Document)
  * [3.1 Home data](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/home_data.md)
  
  
<div id="1"> <div/>

## 1. data sample

<div id="1.1"> <div/>

### 1.1 single product spu data sample 


```
{
  spu_id:5,
  spu_name:"与美懒人大厨四川冒菜",
  spu_status:0, //status = 1, 页面跳回
  spu_service_img: "https://chanmao.us/storage/image/sb_app/service.png"
  sku_image:[
    {
      image_id:762,
      image_url:"https://chanmao.us/storage/image/sb_app/image/1_20170828.png"
    },
    {
      image_id:835,
      image_url:"https://chanmao.us/storage/image/sb_app/image/12_20170828.png"
    },
    {
      image_id:275,
      image_url:"https://chanmao.us/storage/image/sb_app/image/23_20170828.png"
    }
  ],
  sku_fact:[
    {
      image_id:852,
      image_url:"https://chanmao.us/storage/image/sb_app/facts/2_20170828.png"
    },
    {
      image_id:523,
      image_url:"https://chanmao.us/storage/image/sb_app/facts/3_20170828.png"
    },
    {
      image_id:632,
      image_url:"https://chanmao.us/storage/image/sb_app/facts/5_20170828.png"
    }
  ],
  sku_list:[
    {
      spu_id:5,
      sku_id:52,
      sku_name:"豚骨菌菇(大包装)",
      sku_status:0,
      sku_amount:329,
      sku_image_id:762,
      sku_fact_image_id:852,
      sku_original_price:10.86,
      sku_price:10.86,
      
    },
    {
      spu_id:5,
      sku_id:22,
      sku_name:"豚骨菌菇(小包装)",
      sku_status:0,
      sku_amount:182,
      sku_image_id:762,
      sku_fact_image_id:523,
      sku_original_price:7.53,
      sku_price:5.22
    },
    {
      spu_id:5,
      sku_id:48,
      sku_name:"浓香麻辣",
      sku_status:1,
      sku_amount:0, //check amount || status
      sku_image_id:835,
      sku_fact_image_id:632,
      sku_original_price:5.23,
      sku_price:2.33
    },
    {
      spu_id:5,
      sku_id:48,
      sku_name:"黑糖海盐",
      sku_status:0,
      sku_amount:235,
      sku_image_id:275,
      sku_fact_image_id:523,
      sku_original_price:8.23,
      sku_price:6.59
    }
  ]
}
```


<div id="1.2"> <div/>

### 1.2 home data sample


```
{
    "ev_error": 0,
    "ev_message": "",
    "ea_banner": [
        {
            "id": 3,
            "image": "https://chanmao.us/storage/image/sb_app/home_banner/3_20170828.png",
            "type": 3,
            "param": "param3"
        },
        {
            "id": 2,
            "image": "https://chanmao.us/storage/image/sb_app/home_banner/2_20170828.png",
            "type": 2,
            "param": "param2"
        },
        {
            "id": 1,
            "image": "https://chanmao.us/storage/image/sb_app/home_banner/1_20170828.png",
            "type": 1,
            "param": "param"
        }
    ],
    "ea_theme": [
        {
            "tmid": 1,
            "name": "零食零食",
            "active_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/1_active_20170828.png",
            "inactive_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/1_inactive_20170828.png",
            "section_list": [
                {
                    "section_id": 1,
                    "section_name": "新品速递",
                    "section_icon": "https://chanmao.us/storage/image/sb_app/2.0/tmp/new.png",
                    "prod_start_idx": 0
                },
                {
                    "section_id": 2,
                    "section_name": "好货热卖",
                    "section_icon": "https://chanmao.us/storage/image/sb_app/2.0/tmp/hot.png",
                    "prod_start_idx": 6
                },
                {
                    "section_id": 3,
                    "section_name": "超值特价",
                    "section_icon": "https://chanmao.us/storage/image/sb_app/2.0/tmp/sale.png",
                    "prod_start_idx": 12
                }
            ],
            "prod_list": [
                {
                    "type": "section_left",
                    "section_id": 1
                },
                {
                    "type": "section",
                    "section_id": 1,
                    "section_name": "新品速递"
                },
                {
                    "type": "section_right",
                    "section_id": 1
                },
                {
                    "sku_id": 1,
                    "name": "张君雅海苔味10G",
                    "sku_original_price": "10.99",
                    "sku_price": "10.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/1_20170828.png",
                    "section_id": 1,
                    "type": "sku"
                },
                {
                    "sku_id": 2,
                    "name": "张君雅原味味10G",
                    "sku_original_price": "10.99",
                    "sku_price": "10.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/2_20170828.png",
                    "section_id": 1,
                    "type": "sku"
                },
                {
                    "type": "empty"
                },
                {
                    "type": "section_left",
                    "section_id": 2
                },
                {
                    "type": "section",
                    "section_id": 2,
                    "section_name": "好货热卖"
                },
                {
                    "type": "section_right",
                    "section_id": 2
                },
                {
                    "sku_id": 3,
                    "name": "浪味仙田园蔬菜10G",
                    "sku_original_price": "16.99",
                    "sku_price": "12.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/3_20170828.png",
                    "section_id": 2,
                    "type": "sku"
                },
                {
                    "sku_id": 4,
                    "name": "浪味仙烧烤味10G",
                    "sku_original_price": "16.99",
                    "sku_price": "12.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/4_20170828.png",
                    "section_id": 2,
                    "type": "sku"
                },
                {
                    "type": "empty"
                },
                {
                    "type": "section_left",
                    "section_id": 3
                },
                {
                    "type": "section",
                    "section_id": 3,
                    "section_name": "超值特价"
                },
                {
                    "type": "section_right",
                    "section_id": 3
                },
                {
                    "spu_id": 1,
                    "name": "浪味仙",
                    "spu_price": "10.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/zjy_big.png",
                    "section_id": 3,
                    "type": "spu"
                },
                {
                    "spu_id": 2,
                    "name": "张君雅",
                    "spu_price": "12.99",
                    "image": "https://chanmao.us/storage/image/sb_app/2.0/tmp/lwx_big.png",
                    "section_id": 3,
                    "type": "spu"
                },
                {
                    "type": "empty"
                }
            ]
        },
        {
            "tmid": 2,
            "name": "生活用品",
            "active_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/2_active_20170828.png",
            "inactive_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/2_inactive_20170828.png",
            "section_list": [],
            "prod_list": []
        },
        {
            "tmid": 3,
            "name": "Gift Card",
            "active_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/3_active_20170828.png",
            "inactive_icon": "https://chanmao.us/storage/image/sb_app/theme_icon/3_inactive_20170828.png",
            "section_list": [],
            "prod_list": []
        }
    ]
}
```

