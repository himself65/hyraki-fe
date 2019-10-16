module.exports = app => {
  app.get('/worker', (req, res) => {
    res.json([
      {
        shop: '主店铺',
        name: '甜面包',
        id: 761282619,
        phone: 1008611,
        position: 'boss',
        avatar: null,
        gender: '男',
        remark: 'none'
      }
    ])
    res.end()
  })

  app.post('/worker', (req, res) => {
    res.json({
      message: '创建成功'
    })
    res.end()
  })

  app.delete('/worker', (req, res) => {
    res.json({
      message: '删除成功'
    })
    res.end()
  })

  app.get('/worker/position', (req, res) => {
    if (req.query['brief']) {
      res.json([
        { id: 1, value: '高级员工' },
        { id: 2, value: '普通员工' },
        { id: 3, value: '其他' }
      ])
    } else {
      res.json([
        { id: 1, value: '高级员工', count: 5 },
        { id: 2, value: '普通员工', count: 10 },
        { id: 3, value: '其他', count: 3 }
      ])
    }
    res.end()
  })
}
