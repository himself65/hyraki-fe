import { Reserve } from '~type/Reserve'

export const reserve1: Reserve = {
  id: '1',
  phone: '+861008611',
  targetShop: '1',
  order: {},
  startTime: Math.floor(Date.now() / 1000) + 60 * 10,
  tip: '没有'
}

export const reserve2: Reserve = {
  id: '2',
  phone: '+8613944441314',
  targetShop: '1',
  order: {},
  startTime: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
  tip: '没有'
}

export const reserve3: Reserve = {
  id: '3',
  phone: '+8613933331313',
  targetShop: '1',
  order: {},
  startTime: Math.floor(Date.now() / 1000) + 60,
  tip: '没有'
}
