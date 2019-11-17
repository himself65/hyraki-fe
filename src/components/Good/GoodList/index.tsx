import React, { ReactElement, useMemo } from 'react'
import { DetailsList, DetailsListLayoutMode, IColumn, MarqueeSelection, Selection } from 'office-ui-fabric-react'
import { Good } from '../../../../types/Good'
import { booleanToString, filterItems } from '../../../utils/helpers'
import './index.less'

export interface GoodListProps {
  items: Good[]
  compact: boolean
}

interface GoodColumn extends IColumn {
  key: string
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
    key: 'supplier',
    name: '供应商',
    minWidth: 64,
    // fixme: 这里应该是个 List
    onRender: item => <span>{(item.supplier && item.supplier.name) || '暂无'}</span>
  }
]

export const GoodList: React.FC<GoodListProps> = ({ items = [], compact }) => {
  const selection = useMemo(() => (new Selection({
    onSelectionChanged: () => {
      // tip: 已经找到了选中的keys
      const selectedKeys = filterItems(selection.getItems(), selection.getSelectedIndices()).map(v => v.id)
    }
  })), [])
  return (
    <MarqueeSelection selection={selection}>
      <DetailsList
        items={items}
        columns={columns}
        compact={compact}
        layoutMode={DetailsListLayoutMode.justified}
        selection={selection}
      />
    </MarqueeSelection>
  )
}
