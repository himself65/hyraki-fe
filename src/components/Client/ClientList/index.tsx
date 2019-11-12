import React, { ReactElement, useMemo } from 'react'
import { Client } from '../../../../types/Client'
import { DetailsList, DetailsListLayoutMode, IColumn, MarqueeSelection, Selection } from 'office-ui-fabric-react'
import PropTypes from 'prop-types'

export interface ClientListProps {
  items: Client[]
}

interface ClientColumn extends IColumn {
  key: string
  onRender: (item: Client) => ReactElement | null
}

const columns: ClientColumn[] = [
  {
    key: 'id',
    name: '编号',
    minWidth: 32,
    maxWidth: 64,
    onRender: item => <div>{item.id}</div>
  },
  {
    key: 'name',
    name: '姓名',
    minWidth: 200,
    onRender: item => <div>{item.name}</div>
  }
]

const ClientList: React.FC<ClientListProps> = ({ items }) => {
  const selection = useMemo(() => new Selection({
    onSelectionChanged: () => 'Selection'
  }), [])
  return (
    <MarqueeSelection selection={selection}>
      <DetailsList
        items={items}
        columns={columns}
        layoutMode={DetailsListLayoutMode.justified}
      />
    </MarqueeSelection>
  )
}

ClientList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ClientList
