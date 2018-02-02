

# sbox_dashboard

##Get SPU List API


|  Tables  |          说明          | 默认值  |
| :------: | :------------------: | :--: |
|   URL    | /api/sbmanage/v2/get_spu_list |      |
| HTTP请求方式 |         POST          |      |
|  是否需要登录  |          否           |      |
|  授权访问限制  |          暂无          |      |
|  授权范围()  |          暂无          |      |
|   支持格式   |         JSON         |      |


表头参数:

| Tables | 类型及其范围 | 说明    | 默认值  |
| ------ | ------ | ----- | ---- |
| uuid   | string | 接口验证用 |      |

接口说明：
获取SPU List

请求字段:

| Tables | 类型及其范围 | 必填  | 默认值  |  说明  |
| ------ | ------ | ----- | ---- | ---- |
| iv_page_size | number | 否 |  20  |  |
| iv_page_number | number | 否 |  1  |  |


返回字段说明:

| Tables     | 类型及其范围 | 说明       | 默认值        |
| ---------- | ------ | -------- | ---------- |
| ev_error   | number | 请求是否成功   | 0为成功, 1为错误 |
| ev_message | string | 报错信息     | 空          |
| ea_spu_list  | array  |  |          |

| ea_spu_list | 类型及其范围 | 说明          |
| --------------- | ------ | --------------------------------------- |
| spu_id          | number | spu ID                                  |
| spu_name           | float  | 名称                                    _  |
| spu_image_id         | string | 图片链接                                    |
| spu_price    | string | 减价前价钱（string格式返回）                       |
| spu_status          | array  | 0 = ok, 1 = sold out, 9 = 下线（这个后端直接不返回） |


返回结果(默认JSON): 
```
{
    "ev_error": 0,
    "ev_message": "",
}
```


