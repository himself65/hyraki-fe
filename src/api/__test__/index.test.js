import * as app from '../../../mock/server'
import * as API from '../'
import * as sinon from 'sinon'

let stubExit

beforeAll(() => {
  app.listen(3000)
  stubExit = sinon.stub(process, 'exit')
})

describe('API test', () => {
  it('should all pass', (done) => {
    const promises = Object.keys(API)
      .map(v => {
        if (['default', 'axiosInstance'].indexOf(v) !== -1) {

        } else {
          return v
        }
      })
      .filter(v => v)
      .map(v => {
        return API[v]
      })
    Promise.all(promises).then(() => done())
  })
})

afterAll(() => {
  stubExit.restore()
})
