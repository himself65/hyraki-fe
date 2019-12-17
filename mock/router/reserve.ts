import { Express } from 'express'
import { reserve1, reserve2, reserve3 } from '../data/reserve'

export default function (app: Express) {
  // fixme: 需要后端支持
  app.post('/reserves', (req, res) => {

  })

  // fixme: 需要后端支持
  app.get('/reserves', (req, res) => {
    res.json({
      data: [reserve1, reserve2, reserve3]
    })
  })
}
