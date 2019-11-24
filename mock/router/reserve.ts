import { Express } from 'express'
import { reserve1, reserve2, reserve3 } from '../data/reserve'

export default function (app: Express) {
  app.post('/reserves', (req, res) => {

  })

  app.get('/reserves', (req, res) => {
    res.json({
      data: [reserve1, reserve2, reserve3]
    })
  })
}
