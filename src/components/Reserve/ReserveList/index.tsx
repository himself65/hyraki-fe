import React from 'react'
import { DetailsList } from 'office-ui-fabric-react'
import { Reserve } from '~type/Reserve'

interface ReserveListProps {
  items: Reserve[]
}

// todo
const ReserveList: React.FC<ReserveListProps> = () => {
  return (
    <DetailsList items={[]} />
  )
}

export default ReserveList
