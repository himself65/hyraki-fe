// 供应商
export interface Supplier {
  id: string
  name: string
}

export type Brand = Supplier

// 货物
export interface Good {
  id: string
  name: string
  barCode?: string // 条码
  image?: string // 图片
  unit?: string // 单位
  mainClass: string // 大类
  subClass: string // 小类
  forSale?: boolean // 是否非卖品
  // 价格
  purchasePrice?: string // 进货价
  costPrice?: string // 成本价
  sellingPrice?: string // 销售价
  // 库存
  safeStock?: number
  currentStock?: number
  unsalableWarningDays?: number

  supplier?: Supplier
  brand?: Brand

  remark?: string // 备注
}
