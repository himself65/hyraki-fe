module.exports = app => {
  app.get('/brands', (req, res) => {
    // 根据 req.query['id'] 来判断返回值
    // id 指的是 shopID
    res.json({
      data: [
        { id: 1, name: '面包新语' },
        { id: 2, name: '星巴克' }
      ]
    })
    res.end()
  })

  app.get('/supplier', (req, res) => {
    res.json({
      data: [
        { id: 1, name: '隔壁' },
        { id: 2, name: '楼下' }
      ]
    })
    res.end()
  })

  app.get('/goods', (req, res) => {
    if (req.query['brief'] === 'true') {
      res.json({
        page: 10,
        data: [
          { id: '1', name: '面包', sellingPrice: '2' },
          { id: '2', name: '甜筒', sellingPrice: '3' },
          { id: '3', name: '圣代', sellingPrice: '4' }
        ]
      })
    } else {
      // detail模式
      // 返回详细数据
      res.json({
        page: 10,
        data: [
          {
            id: '1',
            name: '面包',
            barCode: '10086',
            unit: '个',
            mainClass: '食物',
            subClass: '农副产品',
            forSale: true,
            costPrice: '100',
            sellingPrice: '120',
            safeStock: 1e3,
            currentStock: 1e5,
            unsalableWarningDays: 5,

            supplier: { id: '1', name: '面包新语' },
            brand: { id: '1', name: '面包新语' },

            remark: '扩散性百万甜面包自己正在被卖'
          },
          {
            id: '2',
            name: '圣代',
            barCode: '10087',
            unit: '个',
            mainClass: '食物',
            subClass: '肯德基主打产品',
            forSale: false,
            costPrice: '100',
            sellingPrice: '120',
            safeStock: 1,
            currentStock: 1,
            unsalableWarningDays: 100,

            supplier: { id: '1', name: '面包新语' },
            brand: { id: '1', name: '面包新语' },

            remark: '圣代好吃'
          },
          {
            id: '3',
            name: '甜筒',
            barCode: '10088',
            unit: '个',
            mainClass: '食物',
            subClass: '肯德基主打产品',
            forSale: true,
            costPrice: '100',
            sellingPrice: '120',
            safeStock: 1,
            currentStock: 0,
            unsalableWarningDays: 1000,

            supplier: { id: '1', name: '面包新语' },
            brand: { id: '1', name: '面包新语' },

            remark: '甜筒也好吃'
          }
        ]
      })
    }
    res.end()
  })
}
