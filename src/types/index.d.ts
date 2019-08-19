import { RouteProps } from 'react-router-dom'

// todo: DefaultProps 需要添加 IState
export interface DefaultProps extends RouteProps {

}

export interface IState {
  user: {
    loginMessage: string
  },
  drawer: {
    drawerState: boolean
  }
}
