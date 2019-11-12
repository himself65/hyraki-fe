import React from 'react'
import { Avatar, Badge, Icon, Layout, Menu, Row } from 'antd'
import { Logger } from '../../utils/debug'
import { Link, Route, Switch } from 'react-router-dom'
import { HyFooter, HyLayout, HySidebar } from '../../components/Layout'
import { DefaultProps } from '../../../types'
import './DashboardView.less'
import DashboardContent, { Footer } from './Dashboard'
import ReserveContent from './Reserve'
import ClientContent from './Client'
import ShopContent from './Shop'
import { GoodContent } from './Good'
import { useFetch } from '../../utils/hooks'
import { getMessagesCount } from '../../api/user'

const DashboardView: React.FC<DefaultProps> = (props) => {
  const selectedKey = props.location.pathname || '/dashboard'
  const [{ count }] = useFetch(getMessagesCount, { count: 0 })
  Logger('Opened \'%s\'', selectedKey)
  return (
    <HyLayout className='dashboard-view'>
      <HySidebar
        breakpoint='lg'
        collapsedWidth='0'
        width={140}
      >
        <Row className='top-element' type='flex' justify='center'>
          {/* fixme: 需要API支持 */}
          <Badge count={count}>
            <Avatar size={64}/>
          </Badge>
        </Row>
        <Menu style={{ backgroundColor: 'transparent' }}
          theme='light'
          mode='inline'
          defaultSelectedKeys={[selectedKey]}
        >
          <Menu.Item key='/dashboard'>
            <Link to='/dashboard'/>
            <Icon type='dashboard'/>
            <span className='nav-text'> 概览 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/reserve'>
            <Link to='/dashboard/reserve'/>
            <Icon type='schedule'/>
            <span className='nav-text'> 预约 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/good'>
            <Link to='/dashboard/good'/>
            <Icon type='upload'/>
            <span className='nav-text'> 库存 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/order'>
            <Link to='/dashboard/order'/>
            <Icon type='profile'/>
            <span className='nav-text'> 订单 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/client'>
            <Link to='/dashboard/client'/>
            <Icon type='user'/>
            <span className='nav-text'> 客户 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/report'>
            <Link to='/dashboard/report'/>
            <Icon type='line-chart'/>
            <span className='nav-text'> 数据 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/asset'>
            <Link to='/dashboard/asset'/>
            <Icon type='account-book'/>
            <span className='nav-text'> 资产 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/market'>
            <Link to='/dashboard/market'/>
            <Icon type='user'/>
            <span className='nav-text'> 营销 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/shop'>
            <Link to='/dashboard/shop'/>
            <Icon type='shop'/>
            <span className='nav-text'> 店铺 </span>
          </Menu.Item>
          <Menu.Item key='/dashboard/setting'>
            <Link to='/dashboard/setting'/>
            <Icon type='setting'/>
            <span className='nav-text'> 设置 </span>
          </Menu.Item>
        </Menu>
      </HySidebar>
      <Layout>
        <Switch>
          <Route exact path='/dashboard' component={DashboardContent}/>
          <Route path='/dashboard/reserve' component={ReserveContent}/>
          <Route path='/dashboard/good' component={GoodContent}/>
          <Route path='/dashboard/client' component={ClientContent}/>
          <Route path='/dashboard/shop' component={ShopContent}/>
        </Switch>
        {Footer ? <Footer/> : <HyFooter/>}
      </Layout>
    </HyLayout>
  )
}

export default DashboardView
