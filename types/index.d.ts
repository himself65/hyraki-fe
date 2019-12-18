import React from 'react'
import { RouteChildrenProps, RouteComponentProps } from 'react-router'
import { LocationState } from './Router'

export type Optional<T> = T extends object ?
  { [K in keyof T]?: T[K] } : T | undefined

export type DefaultProps = RouteChildrenProps<{}, LocationState>

export interface StoreProps {
  brandID: string
  shopID: string
}

export interface RouteItem {
  name: string
  displayName: string
  path: string
  icon: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | null
}

export type TODO = unknown
