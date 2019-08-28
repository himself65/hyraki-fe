import { RouteProps } from 'react-router-dom'

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
