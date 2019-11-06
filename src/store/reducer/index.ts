import { combineReducers } from 'redux'
import brand from './brand'
import drawer from './drawer'
import user from './user'

export default combineReducers({
  brand,
  drawer,
  user
})
