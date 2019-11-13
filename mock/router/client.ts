import { Express } from 'express'
import { client1, client2 } from '../data/client'

export default function (app: Express) {
  app.get('/clients', (req, res) => {
    res.json({
      data: [client1, client2]
    })
    res.end()
  })
}
