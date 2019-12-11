import { RouteChildrenProps } from 'react-router'
import { LocationState } from './Router'

export type Optional<T> = T extends object ?
  { [K in keyof T]?: T[K] } : T | undefined

export type DefaultProps = RouteChildrenProps<{}, LocationState>

export interface StoreProps {
  brandID: string
  shopID: string
}

export type TODO = unknown
