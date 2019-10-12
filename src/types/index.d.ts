import { RouteChildrenProps } from 'react-router'
import { LocationState } from './Router'

export type Optional<T> = T extends object ?
  { [K in keyof T]: T[K] | undefined } : T | undefined

export interface DefaultProps extends RouteChildrenProps<{}, LocationState> {

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
