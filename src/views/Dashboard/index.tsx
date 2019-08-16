import React from 'react'
import { Avatar, Layout, Row, Menu, Icon } from 'antd'
import { Logger } from '../../utils/debug'
import { HySidebar, HyContent, HyLayout } from '../../components/Layout'
import { DefaultProps } from '../../types'
import './DashboardView.less'
import { Link } from 'react-router-dom'

const DashboardView: React.FC = (props: DefaultProps) => {
  Logger('Opened \'%s\'', props.location ? props.location.pathname || 'UNKNOWN' : 'UNKNOWN')
  return (
    <HyLayout>
      <HySidebar
        breakpoint='lg'
        collapsedWidth='0'
        width={140}
      >
        <Row className='top-element' type='flex' justify='center'>
          <Avatar size={64}/>
        </Row>
        <Menu style={{ backgroundColor: 'transparent' }} theme='light' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Link to='/dashboard' />
            <Icon type='dashboard' />
            <span className='nav-text'> 概览 </span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/dashboard/date' />
            <Icon type='schedule' />
            <span className='nav-text'> 预约 </span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/dashboard/good' />
            <Icon type='upload' />
            <span className='nav-text'> 商品 </span>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/dashboard/order' />
            <Icon type='profile' />
            <span className='nav-text'> 订单 </span>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/dashboard/client' />
            <Icon type='user' />
            <span className='nav-text'> 客户 </span>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to='/dashboard/report' />
            <Icon type='line-chart' />
            <span className='nav-text'> 数据 </span>
          </Menu.Item>
          <Menu.Item key='7'>
            <Link to='/dashboard/asset' />
            <Icon type='account-book' />
            <span className='nav-text'> 资产 </span>
          </Menu.Item>
          <Menu.Item key='8'>
            <Link to='/dashboard/market' />
            <Icon type='user' />
            <span className='nav-text'> 营销 </span>
          </Menu.Item>
          <Menu.Item key='9'>
            <Link to='/dashboard/shop' />
            <Icon type='shop' />
            <span className='nav-text'> 店铺 </span>
          </Menu.Item>
          <Menu.Item key='10'>
            <Link to='/dashboard/setting' />
            <Icon type='setting' />
            <span className='nav-text'> 设置 </span>
          </Menu.Item>
        </Menu>
      </HySidebar>
      <Layout>
        <HyContent />
      </Layout>
    </HyLayout>
  )
}

export default DashboardView
