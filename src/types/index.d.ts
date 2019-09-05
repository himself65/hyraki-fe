import { RouteChildrenProps } from 'react-router'

export interface DefaultProps extends RouteChildrenProps {

}

export interface IState {
  user: {
    loginMessage: string,
    logout: boolean
  },
  drawer: {
    drawerState: boolean
  }
}
