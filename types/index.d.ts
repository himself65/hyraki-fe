import { RouteChildrenProps } from 'react-router'
import { LocationState } from './Router'

// tip: 性别
export enum Gender {
  man = 1,
  woman = 2
}

export type Optional<T> = T extends object ?
  { [K in keyof T]: T[K] | undefined } : T | undefined

export type DefaultProps = RouteChildrenProps<{}, LocationState>
