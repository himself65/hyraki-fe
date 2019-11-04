import React, { ReactElement, useMemo } from 'react'
import { DetailsList, DetailsListLayoutMode, IColumn, MarqueeSelection, Selection } from 'office-ui-fabric-react'
import { Good } from '../../../types/Good'
import { booleanToString } from '../../../utils/helpers'
import './index.less'

export interface GoodListProps {
  items: Good[],
  style?: React.CSSProperties,
  compact?: boolean
  className?: string
}

interface GoodColumn extends IColumn {
  key: string,
  onRender: (item: Good) => ReactElement | null
}

const columns: GoodColumn[] = [
  {
    key: 'index',
    name: '编号',
    minWidth: 32,
    maxWidth: 64,
    onRender: item => <div>{item.id}</div>
  },
  {
    key: 'name',
    name: '名称',
    minWidth: 200,
    maxWidth: 270,
    onRender: item => <span>{item.name}</span>
  },
  {
    key: 'class',
    name: '类型',
    minWidth: 36,
    onRender: item => <span>{item.mainClass} - {item.subClass}</span>
  },
  {
    key: 'sellingPrice',
    name: '销售价',
    minWidth: 48,
    onRender: item => <span>{item.sellingPrice || '未知'}</span>
  },
  {
    key: 'costPrice',
    name: '进货价',
    minWidth: 48,
    onRender: item => <span>{item.costPrice || ''}</span>
  },
  {
    key: 'forSale',
    name: '非卖品',
    minWidth: 48,
    onRender: item => <span>{booleanToString(item.forSale)}</span>
  },
  {
    key: 'currentStock',
    name: '当前库存',
    minWidth: 64,
    onRender: item => <span>{item.currentStock || '未知'}</span>
  },
  {
    key: 'unsalableWarningDays',
    name: '滞销预警天数',
    minWidth: 100,
    onRender: item => <span>{item.unsalableWarningDays || '暂无'}</span>
  },
  {
    key: 'supplier',
    name: '供应商',
    minWidth: 64,
    // fixme: 这里应该是个 List
    onRender: item => <span>{(item.supplier && item.supplier.name) || '暂无'}</span>
  },
  {
    key: 'brand',
    name: '品牌',
    minWidth: 64,
    // fixme: 这里应该是个 List
    onRender: item => <span>{(item.brand && item.brand.name) || '暂无'}</span>
  }
]

export const GoodList: React.FC<GoodListProps> = ({ style, className, items = [], ...restProps }) => {
  const selection = useMemo(() => (new Selection({
    onSelectionChanged: () => 'Selection'
  })), [])
  return (
    <div style={style} className={`${className} hy-marquee-selection`}>
      <MarqueeSelection selection={selection}>
        <DetailsList
          items={items}
          columns={columns}
          layoutMode={DetailsListLayoutMode.justified}
          {...restProps}
        />
      </MarqueeSelection>
    </div>
  )
}
