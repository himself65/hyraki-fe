import { Express } from 'express'
import { shop1, shop2, shop3 } from '../data/shop'
export default function (app: Express) {
  // 在 Brand 创建shop，需要对此 Brand 的管理权限。
  app.post('/brand/:brand_id/shop', (req, res) => {

  })

  // 获取 Brand 下所有 shop，需要对此 Brand 的管理权限。
  app.get('/brand/:brand_id/shops', (req, res) => {
    res.json({
      data: [shop1, shop2, shop3]
    })
    res.end()
  })

  /***
   * @deprecated
   */
  app.get('/shops', (req, res) => {
    console.error('deprecated api')
    res.json({
      data: [
        { id: 1, name: '面包店' },
        { id: 2, name: '超市' }
      ]
    })
    res.end()
  })

  /***
   * @deprecated
   */
  app.get('/shop/serves', (req, res) => {
    // 根据 query 中的 id 决定返回内容
    // '/shop/serve?id=10086'
    // 则查找店铺名称10086的服务（或者说商品）
    res.json({
      page: 10,
      data: [
        { id: '1', name: '面包', price: 10 },
        { id: '3', name: '甜筒', price: 20 },
        { id: '2', name: '圣代', price: 30 }
      ]
    })
    res.end()
  })
}
