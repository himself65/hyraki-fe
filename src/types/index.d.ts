import { RouteProps } from 'react-router-dom'

export interface DefaultProps extends RouteProps {

}

export interface IState {
  loginMessage: string,
  drawerState: boolean
}
