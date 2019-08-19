const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')

const app = express()
const secretKey = 'secretKey'

app.use(morgan('combined'))
app.use(bodyParser())
app.use(expressJwt({ secret: secretKey }).unless({ path: ['/user/login', '/user/register'] }))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.post('/user/login', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  if (username && password) {
    // tip: hack code
    const token = jwt.sign({ username: '123456', password: '123456' }, secretKey, {
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

app.get('/user/dashboard', (req, res) => {
  console.log(req.body)
})

app.listen(3001, () => {
  console.log(`listen at http://localhost:3001`)
})
