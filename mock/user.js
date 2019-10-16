const jwt = require('jsonwebtoken')
const { random } = require('./utils')
const { secretKey } = require('./utils/shared')

module.exports = app => {
  app.post('/user/login', (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    if (username && password) {
      // tip: hack code
      const token = jwt.sign({ username: '123456', password: '123456' },
        secretKey, {
          expiresIn: 60 * 60 * 24 // 授权时效24小时
        })
      res.json({
        token
      })
    } else {
      res.status(500)
      res.statusText = '暂未开发完成'
    }
    res.end()
  })

  app.get('/user/message', (req, res) => {
    res.json({
      count: random(100)
    })
    res.end()
  })
}
