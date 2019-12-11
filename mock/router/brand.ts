import { Express } from 'express'
import { brand1, brand2 } from '../data/brand'

export default function (app: Express) {
  // 创建新的 Brand，需要全站管理权限
  app.post('/brand', (req, res) => {
    res.status(200)
  })

  // 获取该权限下所有可获得的 Brands
  app.get('/brands', (req, res) => {
    res.json({
      data: [brand1, brand2]
    })
    res.end()
  })

  app.get('/my_brand', (req, res) => {
    // todo
    res.json({
      data: [

      ]
    })
    res.end()
  })

  // 修改 Brand，需要对此 Brand 的管理权限
  app.put('/brand/:brand_id', (req, res) => {
    res.status(200)
  })

  // 获取 Brand 基本信息，需要登录
  app.get('/brand/:brand_id', (req, res) => {
    // todo: 增加数据
  })

  // 创建新的Brand管理员，需要全站管理权限
  app.post('/brand/:brand_id/new_manager', (req, res) => {
    // todo: 增加数据
  })
}
