import React, { Fragment } from 'react'
import { HyHeader, HyContent } from '~component/Layout'
import { Breadcrumb, Card, Menu } from 'antd'
import { BreadcrumbFactory } from '~util/helpers'
import { DefaultProps } from '~type/index'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import ClientList from '~component/Client/ClientList'
import { useFetch } from '~util/hooks'
import { getClients } from '~api/client'
import { Client } from '~type/Client'
import './ClientContent.less'
import { Text } from 'office-ui-fabric-react'

const ClientView: React.FC<DefaultProps> = (props) => {
  const [clients] = useFetch<Client[]>(getClients, [], {
    defaultParams: [0]
  })
  return (
    <Fragment>
      <Breadcrumb className='top-element hy-top-breadcrumb'>
        {...BreadcrumbFactory(props.location.pathname)}
      </Breadcrumb>
      <Card className='hy-card'>
        <Text variant='large'>会员资料</Text>
        <ClientList style={{
          marginTop: '1rem'
        }} items={clients}/>
      </Card>
    </Fragment>
  )
}

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
