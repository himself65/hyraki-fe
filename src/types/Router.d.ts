import { LoginState } from './User'

export type LocationState = undefined | {
  user?: LoginState | null
}
