import { observable } from 'mobx'

export const store = observable({
  logout: true,
  currentBrandName: DEBUG ? 'himself65' : '',
  currentBrandID: DEBUG ? 'himself65' : '',
  currentShopID: DEBUG ? 'himself65' : ''
})
