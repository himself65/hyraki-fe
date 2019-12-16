import React, { ReactElement, useMemo, useRef, useState } from 'react'
import { DetailsList, DetailsListLayoutMode, IColumn, MarqueeSelection, Selection, Stack, PrimaryButton } from 'office-ui-fabric-react'
import { Subject } from 'rxjs'
import { observer } from 'mobx-react'
import { Good } from '~type/Good'
import { booleanToString, filterItems } from '~util/helpers'
import './index.less'
import { Modal } from 'antd'
import AddGoodForm from '~component/Good/AddGoodForm'
import { deleteGoods, getSupplier } from '~api/good'

export interface GoodListProps {
  api: {
    getSupplier: typeof getSupplier
    deleteGoods: typeof deleteGoods
  }
  store: {
    brandID: string
    shopID: string
  }
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

export const GoodList: React.FC<GoodListProps> = observer((
  {
    items = [], compact, api: { getSupplier, deleteGoods },
    store: { brandID, shopID }
  }) => {
  const subject = useRef(new Subject<boolean>())
  const [showAddGoodModal, setShowAddGoodModal] = useState<boolean>(false)
  const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>([])
  const selection = useMemo(() => (new Selection({
    onSelectionChanged: () => {
      // tip: 已经找到了选中的keys
      setSelectedItemKeys(
        filterItems(selection.getItems() as typeof items, selection.getSelectedIndices()).map(v => v.id)
      )
    }
  })), [])
  return (
    <MarqueeSelection selection={selection}>
      <Stack
        horizontal
        tokens={{
          childrenGap: '10'
        }}>
        <Stack.Item>
          <PrimaryButton
            onClick={() => setShowAddGoodModal(true)}>
        添加
          </PrimaryButton>
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton
            onClick={() => {
              deleteGoods(brandID, shopID, selectedItemKeys).then(
                () => {
                  // todo
                }
              )
            }}
          >
        删除
          </PrimaryButton>
        </Stack.Item>
      </Stack>
      <DetailsList
        items={items}
        columns={columns}
        compact={compact}
        layoutMode={DetailsListLayoutMode.justified}
        selection={selection}
      />
      <Modal
        title={'添加库存'}
        visible={showAddGoodModal}
        onOk={() => {
          subject.current.next(true)
        }}
        onCancel={() => {
          subject.current.next(false)
          setShowAddGoodModal(false)
        }}
      >
        <AddGoodForm
          subject={subject}
          api={{
            getSupplier
          }}
        />
      </Modal>
    </MarqueeSelection>
  )
})
