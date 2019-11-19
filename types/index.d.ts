import { RouteChildrenProps } from 'react-router'
import { LocationState } from './Router'

export type Optional<T> = T extends object ?
  { [K in keyof T]: T[K] | undefined } : T | undefined

export type DefaultProps = RouteChildrenProps<{}, LocationState>

export type TODO = unknown
