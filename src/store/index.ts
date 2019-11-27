import { observable } from 'mobx'

export const store = observable({
  logout: true,
  currentStoreName: ''
})
