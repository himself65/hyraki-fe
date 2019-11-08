import { RouteChildrenProps } from 'react-router'
import { LocationState } from './Router'
import { RootReducer } from '../src/store'

export type Optional<T> = T extends object ?
  { [K in keyof T]: T[K] | undefined } : T | undefined

export interface DefaultProps extends RouteChildrenProps<{}, LocationState> {

}
