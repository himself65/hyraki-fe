import supertest from 'supertest'
import * as API from '../'
import * as sinon from 'sinon'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../../mock/utils/shared'
import app from '../../../mock/server'

const token = jwt.sign({ username: '123456', password: '123456' },
  secretKey, {
    expiresIn: 60 * 60 * 24
  })

let stubExit: sinon.SinonStub

const { axiosInstance } = API
const unableAPI = [
  API.postAddReserve,
  API.login
]

beforeAll(() => {
  axiosInstance.defaults.baseURL = 'http://localhost:4000'
  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
  app.listen(4000)
})

beforeAll(() => {
  // @ts-ignore
  stubExit = sinon.stub(process, 'exit')
})

describe('api: api with defaultAxiosHandle', () => {
  it('should pass by manual control', (done) => {
    supertest(app).get('/goods').expect(200).end(() => done())
  })

  it('should pass', (done) => {
    API.getGoods(false).then(res => {
      expect(typeof res.data).toBe('object')
      done()
    })
  })
})

afterAll(() => {
  stubExit.restore()
})
