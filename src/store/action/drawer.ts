import DRAWER_STATE from '../action-type/drawer'

export const drawerAction = (open?: boolean) => open == null
  ? ({ type: DRAWER_STATE.UNKNOWN })
  : (open
    ? ({ type: DRAWER_STATE.OPEN })
    : ({ type: DRAWER_STATE.CLOSED }))

drawerAction.open = () => ({ type: DRAWER_STATE.OPEN })
drawerAction.close = () => ({ type: DRAWER_STATE.CLOSED })
