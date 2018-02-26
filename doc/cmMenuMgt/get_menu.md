## 菜单菜品 API - 读取菜单

|  Tables  |           说明            | 默认值  |
| :------: | :---------------------: | :--: |
|   URL    | /api/cmapp/v1/get_menu |      |
| HTTP请求方式 |          POST           |      |
|  是否需要登录  |            否            |      |
|  授权访问限制  |           暂无            |      |
|  授权范围()  |           暂无            |      |
|   支持格式   |          JSON           |      |

表头参数:

| Tables      | 类型及其范围 | 说明        | 默认值  |
| ----------- | ------ | --------- | ---- |
| Authortoken | string | token验证信息 |      |
| uuid | string |  |      |


请求参数:

| Tables  | 类型及其范围 | 说明     | 默认值  |
| ------- | ------ | ------ | ---- |
| rid     | number | 餐馆ID   |      |


返回字段说明:

| Tables     | 类型及其范围 | 说明     | 默认值        |
| ---------- | ------ | ------ | ---------- |
| ev_result  | number | 请求是否成功 | 0为成功, 1为错误 |
| ev_message | string | 报错信息   | 空          |
| ea_dishes | array | 菜单列表   |           |


| ea_dishes     | 类型及其范围 | 说明     | 默认值        |
| ---------- | ------ | ------ | ---------- |
| ds_id     | number | 菜品ID  |    |
| rid     | number | 餐馆ID   |      |
| int_no  | string | 菜品内部ID |      |
| dt_id   | number | 菜品分类ID |      |
| ds_name | string | 菜品名字   |      |
| ds_desc | string | 菜品描述   |      |
| ds_price   | number | 价格     |      |
| tpg_ids   | array(int) | topping group IDs    |      |
| tpgs   | array | topping groups（**可能不含此属性**）    |      |

| tpgs  | 类型及其范围 | 说明     | 默认值  |
| ------- | ------ | ------ | ---- |
| tpg_id     | number | Topping group ID   |    |
| tpg_name     | string | Topping group name   |    |
| tpg_limit     | number | Topping group limit（最多选几项）  |    |
| tpgs     | array | Topping 选项  |    |

| tps  | 类型及其范围 | 说明     | 默认值  |
| ------- | ------ | ------ | ---- |
| tp_id     | number | Topping ID   |    |
| tp_name     | string | Topping Name   |    |
| tp_price     | number | Topping Price   |    |


返回结果(默认JSON):

```
{
    ev_result: number,
    ev_message: string
}
```
