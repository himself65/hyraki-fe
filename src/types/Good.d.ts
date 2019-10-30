// 供应商
export interface Supplier {
  id: string
  name: string
}

// tip: 供应商和品牌是一个类型，但不使用一个接口
export type Brand = Supplier

export interface GoodBrief {
  id: string
  name: string

  sellingPrice: string // 销售价
}

// 货物
export interface Good extends GoodBrief {
  id: string
  name: string
  barCode?: string // 条码
  unit?: string // 单位
  mainClass: string // 大类
  subClass: string // 小类
  forSale?: boolean // 是否非卖品
  // 价格
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
