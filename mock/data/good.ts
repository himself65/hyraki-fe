import { Good, GoodBrief, Supplier } from '../../types/Good'
import { Optional } from '../../types'

type PropertiesList<T extends object> = {
  [K in keyof T]-?: T[K][]
}

export const supplier1: Required<Supplier> = {
  id: '1',
  name: '供货商1'
}

export const supplier2: Required<Supplier> = {
  id: '2',
  name: '供货商2'
}

export const supplier3: Required<Supplier> = {
  id: '3',
  name: '供货商3'
}

export const goodBrief1: Required<GoodBrief> = {
  id: '1',
  name: '面包',
  sellingPrice: 10
}

export const goodBrief2: Required<GoodBrief> = {
  id: '2',
  name: '甜筒',
  sellingPrice: 1.2
}

export const goodBrief3: Required<GoodBrief> = {
  id: '3',
  name: '圣代',
  sellingPrice: 12
}

export const good1: Required<Good> = {
  ...goodBrief1,
  barCode: '1003012301203102',
  unit: '个',
  mainClass: '食品',
  subClass: '五谷杂粮',
  forSale: true,
  costPrice: 20,
  safeStock: 10,
  currentStock: 120,
  supplier: supplier1,
  remark: '太好吃了'
}

export const good2: Required<Good> = {
  ...goodBrief2,
  barCode: '1003012301203102',
  unit: '个',
  mainClass: 'KFC',
  subClass: '吃的',
  forSale: true,
  costPrice: 10,
  safeStock: 1212,
  currentStock: 1002,
  supplier: supplier2,
  remark: '太便宜了'
}

export const good3: Required<Good> = {
  ...goodBrief3,
  barCode: '1003012301203102',
  unit: '个',
  mainClass: '必胜客',
  subClass: '好吃的',
  forSale: true,
  costPrice: 100,
  safeStock: 12321,
  currentStock: 1121,
  supplier: supplier3,
  remark: '太贵了'
}

const propertiesList = [] as unknown as PropertiesList<Good>
;[good1, good2, good3].forEach(item => {
  for (const key in item) {
    // @ts-ignore
    if (Array.isArray(propertiesList[key])) {
      // @ts-ignore
      propertiesList[key].push(item[key])
    } else {
      // @ts-ignore
      propertiesList[key] = []
    }
  }
})

function randomGood (options: Optional<Good>): Required<Good> {
  const map = {}
  for (const key in propertiesList) {
    // @ts-ignore
    map[key] = propertiesList[key][propertiesList[key].length]
  }
  return {
    ...map,
    ...options
  } as Required<Good>
}
