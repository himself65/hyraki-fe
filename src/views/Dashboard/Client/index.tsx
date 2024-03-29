import React, { Fragment } from 'react'
import { HyHeader, HyContent } from '~component/Layout'
import { Breadcrumb, Card, Menu } from 'antd'
import { BreadcrumbFactory } from '~util/helpers'
import { DefaultProps } from '~type/index'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import ClientList from '~component/Client/ClientList'
import { deleteClients, getClients } from '~api/client'
import { observer } from 'mobx-react'
import './ClientContent.less'
import { Text } from 'office-ui-fabric-react'
import { store } from '~store/index'

const ClientView: React.FC<DefaultProps> = observer((props) => {
  return (
    <Fragment>
      <Breadcrumb className='top-element hy-top-breadcrumb'>
        <Fragment>
          {BreadcrumbFactory(props.location.pathname)}
        </Fragment>
      </Breadcrumb>
      <Card className='hy-card'>
        <Text variant='large'>会员资料</Text>
        <ClientList
          style={{
            marginTop: '1rem'
          }}
          api={{
            deleteClients: deleteClients,
            getClients: getClients
          }}
          store={{
            shopID: store.currentShopID,
            brandID: store.currentBrandID
          }}
        />
      </Card>
    </Fragment>
  )
})

ClientView.propTypes = {
  location: PropTypes.any
}

const ClientContent: React.FC<DefaultProps> = () => {
  return (
    <Fragment>
      <HyHeader>
        <Menu style={{ lineHeight: '64px' }}
          selectedKeys={['1']}
          mode='horizontal'
        >
          <Menu.Item key='1'>预览</Menu.Item>
        </Menu>
      </HyHeader>
      <HyContent style={{ margin: '0.5rem 1rem' }}>
        <Switch>
          <Route exact path='/dashboard/client' component={ClientView}/>
        </Switch>
      </HyContent>
    </Fragment>
  )
}

ClientContent.propTypes = {
  location: PropTypes.any
}

export default ClientContent
