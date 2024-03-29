# API 文档

## 权限系统

```ts
export enum Permission {
  all = 0,  // 允许所有人访问
  user = 1, // 允许已登录访问
  worker = 1,   // 允许该商店工作人员访问
  root = 2  // 允许该商店顶级权限人员访问
}

example:

Permission: worker
表示需要worker权限，但是root权限一样可以

Permission: worker | root
表示需要worker权限及root权限，而且这两个权限返回内容有变化
```

## 基本API

1. 所有请求的数据放到 `res.data.data` 中

example:

```json
{
  "data": [
    // ...
  ]
}
```

```json
{
  "data": {
    // ...
  }
}
```

2. 错误信息放到 `res.data.message` 中

```json
{
  "message": "请求错误"
}
```
3. 附加信息放到 `res.data.xxx` 中，`xxx`，例如：`page`

```json
{
  "data": [
    // ...
  ],
  "page": 100
}
```

## 货物

### /goods

获取所有的货物清单

> type: GET 
>
> Permission: worker

* `request.query`
    * `brief` {boolean} 是否返回简要信息
    * `page` {number|null} 请求页数，默认为`0`
* `response.data`
    * `page` {number} 最大页数
    * `data` {Good[]|GoodBrief[]} 货物列表

例子：

```js
const { data } = await axios.get('/goods', { param: { brief: true } })
data.page
// 10
data.data
//  详细接口参考 'src/types/Good.d.ts' 中 GoodBrief 类型
//  [
//    { ... },
//    { ... },
//    { ... }
//  ]
```

```js
const { data } = await axios.get('/goods', { param: { brief: false, page: 1 } })
data.page
// 5
data.data
//  详细接口参考 'src/types/Good.d.ts' 中 Good 类型
//  [
//    { ... },
//    { ... },
//    { ... },
//    { ... }
//  ]
```

### /shops

获取所有店铺信息

> type: GET
>
> Permission: root | worker
> （会对root返回全部的shop，而对worker返回他所在的shop）

```js
const { data } = await axios.get('/shop')

data.data
// 详细接口参考 'src/types/Shop.d.ts' 中 Shop 类型
// [
//   ...
// ]

// worker权限下
data.data.length === 1
// true

// root 权限下
data.data.length > 1
// true
```

### /shop/serves

获取所有的服务

> type: GET
>
> Permission: worker

```js
const { data } = await axios.get('/shop/serves')

data.data
// 详细接口参考 'src/types/Shop.d.ts' 中 Serve 类型
// [
//   ...
// ]
```
