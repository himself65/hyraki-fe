import { Card, Client } from '~type/Client'
import { Gender } from '~util/shared'

export const card1: Card = {
  id: '1',
  name: '会员卡',
  type: '', // fixme: 我也不知道这里应该是什么
  discount: 0,
  total: 20000,
  cost: 1000,
  balance: 18000,
  gift: 1000,
  expiated: 0
}

export const card2: Card = {
  id: '2',
  name: '优惠卡',
  type: '',
  discount: 0,
  total: 10000,
  cost: 100,
  balance: 99000,
  gift: 0,
  expiated: 0
}

export const client1: Required<Client> = {
  id: '1',
  name: '王面包',
  phone: '13133441356',
  gender: Gender.man,
  remark: '此人很强',
  created_date: Date.now() - 1000 * 10,
  last_appear: Date.now(),
  cards: [card1],
  times: 1,
  integration: 100
}

export const client12: Required<Client> = {
  id: '2',
  name: '杨面包',
  phone: '13143451356',
  gender: Gender.woman,
  remark: '此人很弱',
  created_date: Date.now() - 1000 * 20,
  last_appear: Date.now() - 1000 * 5,
  cards: [card1, card2],
  times: 10,
  integration: 10
}
