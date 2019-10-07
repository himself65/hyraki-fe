import { RouteChildrenProps } from 'react-router'

export type Optional<T> = T extends object ?
  { [K in keyof T]?: T[K] } : T | undefined

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
