import { Express } from 'express'
import { good1, good2, good3, goodBrief1, goodBrief2, goodBrief3, supplier1, supplier2, supplier3 } from '../data/good'

export default function (app: Express) {
  // 供货商
  app.get('/suppliers', (req, res) => {
    res.json({
      data: [supplier1, supplier2, supplier3]
    })
    res.end()
  })

  app.delete('/goods', (req, res) => {
    res.end()
  })

  app.post('/goods', (req, res) => {
    res.end()
  })

  app.get('/goods', (req, res) => {
    if (req.query.brief === 'true') {
      res.json({
        page: 10,
        data: [goodBrief1, goodBrief2, goodBrief3]
      })
    } else {
      // detail模式
      // 返回详细数据
      res.json({
        page: 10,
        data: [good1, good2, good3]
      })
    }
    res.end()
  })
}
