// 供应商
export interface Supplier {
  id: string
  name: string
}

export interface GoodBrief {
  id: string
  name: string

  sellingPrice: number // 销售价
}

// 货物
export interface Good extends GoodBrief {
  id: string
  name: string
  barCode?: string // 条码
  unit?: string // 单位
  mainClass?: string // 大类
  subClass?: string // 小类
  forSale?: boolean // 是否非卖品
  // 价格
  costPrice?: number // 成本价
  sellingPrice: number // 销售价
  // 库存
  safeStock?: number
  currentStock?: number

  supplier?: Supplier // 供货商

  remark?: string // 备注
}
