import { observable } from 'mobx'

export const store = observable({
  logout: true,
  currentBrandName: process.env.NODE_ENV === 'development' ? 'himself65' : '',
  currentBrandID: process.env.NODE_ENV === 'development' ? 'himself65' : '',
  currentShopID: process.env.NODE_ENV === 'development' ? 'himself65' : ''
})
