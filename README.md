

# sbox_dashboard

## 2018-02-02 update
- Add data sample for get APIs. 
- [3.3 Add order](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/add_order.md)


## Contents
* [1. Data sample](#1) 
  * [1.1 get spu list data sample](#1.1)
  * [1.2 get spu_detail data sample](#1.2)
  
* [3. API Document (v2)](https://github.com/ace68723/sweetfulBox_1.1/tree/master/Document/API_Document)
  * [3.1 Home data](https://github.com/ace68723/sweetfulBox_1.1/blob/master/Document/API_Document/v2/home_data.md)
  
  
<div id="1"> <div/>

## 1. data sample

<div id="1.1"> <div/>

### 1.1 get spu list data sample 


```
{
    "ev_error": 0,
    "ev_message": "",
    "ev_total_count": 10,
    "ev_total_page":3,
    "ev_page_number":1,
    "ev_page_size":4,
    "ea_spu_list":[
        {
            "spu_id":1,
            "spu_name":"浪味仙",
            "spu_image_id":101,
            "spu_image":"https://chanmao.us/pic/xxx.jpg",
            "spu_price": "20.99",
            "spu_status": 0
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
         spu_id:5,
         spu_name:"与美懒人大厨四川冒菜",
         spu_status:0,
         sku_total_count:6,
         sku_total_page:3,
         sku_page_size:2,
         sku_page_number:1,
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
           }
         ]
     }
}
```

