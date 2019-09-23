export interface Shop {
  id: string,
  name: string
}

export type ShopListAPI = Shop[]

export interface Serve {
  id: string
  name: string
  price: number
}

export type ServeListAPI = Serve[]
