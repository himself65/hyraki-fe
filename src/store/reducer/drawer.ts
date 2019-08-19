import { Action } from 'redux'
import DRAWER_STATE from '../action-type/drawer'

const INITIAL_STATE = {
  drawerState: false // false 表示关闭，反之
}

// todo: drawerState 暂时未被使用过
export default function drawer (state = INITIAL_STATE, action: Action<DRAWER_STATE>) {
  if (action.type === DRAWER_STATE.OPEN) {
    return { ...state, drawerState: true }
  } else if (action.type === DRAWER_STATE.CLOSED) {
    return { ...state, drawerState: false }
  } else {
    return { ...state }
  }
}
