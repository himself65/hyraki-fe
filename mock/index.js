const app = require('./server')
require('./good')
require('./shop')
require('./user')
require('./worker')

app.listen(3001, () => {
  console.log(`listen at http://localhost:3001`)
})
