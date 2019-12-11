import jwt from 'jsonwebtoken'
import { random } from '../utils'
import { secretKey } from '../utils/shared'
import { Express } from 'express'
import { message1, message2, message3 } from '../data/user'

export default function (app: Express) {
  // 创建全站管理用户，需要最高权限
  app.get('/create_admin', (req, res) => {
    // tip: mock 服务器不做任何处理
    res.status(200)
  })

  app.post('/user/login', (req, res) => {
    const { username, password } = req.body
    if (username && password) {
      // tip: hack code
      const token = jwt.sign({},
        secretKey, {
          expiresIn: 60 * 60 * 24, // 授权时效24小时,
          algorithm: 'HS256',
          issuer: 'hyraki-ba',
          audience: 'himself65'
        })
      res.json({
        token
      })
    } else {
      res.status(500)
    }
    res.end()
  })

  app.get('/user/messages/count', (req, res) => {
    res.json({
      data: {
        count: random(100)
      }
    })
    res.end()
  })

  app.get('/user/messages', (req, res) => {
    res.json({
      data: [message1, message2, message3],
      page: 2
    })
  })
}
