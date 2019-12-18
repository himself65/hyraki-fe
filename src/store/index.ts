import { observable } from 'mobx'

export const store = observable({
  logout: true,
  currentBrandName: MOCK ? 'himself65' : '',
  currentBrandID: MOCK ? 'himself65' : '',
  currentShopID: MOCK ? 'himself65' : ''
})
