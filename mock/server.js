const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const { random } = require('./utils')
const { secretKey } = require('./utils/shared')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'content-type, authorization')
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() === 'options') {
    res.send(200)
  } else {
    next()
  }
})

app.use(expressJwt({ secret: secretKey })
  .unless({ path: ['/user/login', '/user/register'] }))

app.get('/dashboard', (req, res) => {
  res.json({
    data: {
      today: {
        full_income: {
          type: 'increase',
          number: random(10000)
        },
        customer_cost: {
          type: 'decrease',
          number: random(10000)
        },
        all_customers: {
          type: '',
          number: random(10000)
        }
      },
      trend: {
        today: random(10000),
        sales: Array.from({ length: 30 }).map(() => random(100)),
        all_sales: random(10000)
      },
      todo: {
        serviced: random(100),
        pay: random(100),
        ship: random(100),
        review: random(100)
      }
    }
  })
  res.end()
})

// 全局设置获取，根据 query['type'] 来返回值
app.get('/settings', (req, res) => {
  // 查询预约（Reserve）的相关设置
  if (req.query['type'] === 'date') {
    // 通过 shop 字段查询
    // 例如 POST /settings?type=reserve&shop=10086
    // 则查询key为10086的店铺设置
    res.json({})
  } else {
    res.status(404)
  }
  res.end()
})

require('./good')(app)
require('./shop')(app)
require('./user')(app)
require('./worker')(app)

module.exports = app
