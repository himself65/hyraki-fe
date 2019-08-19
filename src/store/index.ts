import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = compose(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

export default function configStore () {
  return createStore(rootReducer, enhancer)
}
