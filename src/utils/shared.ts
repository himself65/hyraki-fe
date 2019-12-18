import { RouteItem } from '~type/index'
import DashboardContent from '~view/Dashboard/Dashboard'
import ReserveContent from '~view/Dashboard/Reserve'
import { GoodContent } from '~view/Dashboard/Good'
import ClientContent from '~view/Dashboard/Client'
import ShopContent from '~view/Dashboard/Shop'

export const JWT_TOKEN = 'JWT_TOKEN'
export const USER_ERROR_LAST_STATE = 'USER_ERROR_LAST_STATE'
export const DashBoardPath = 'dashboard'

// tip: 性别
export enum Gender {
  man = 1,
  woman = 2
}

export const dashBoardRoutes: RouteItem[] = [
  { name: 'dashboard', displayName: '概览', icon: 'dashboard', path: '/dashboard', component: DashboardContent },
  { name: 'reserve', displayName: '预约', icon: 'schedule', path: '/dashboard/reserve', component: ReserveContent },
  { name: 'good', displayName: '库存', icon: 'upload', path: '/dashboard/good', component: GoodContent },
  { name: 'client', displayName: '客户', icon: 'user', path: '/dashboard/client', component: ClientContent },
  { name: 'report', displayName: '数据', icon: 'line-chart', path: '/dashboard/report', component: null },
  { name: 'asset', displayName: '资产', icon: 'account-book', path: '/dashboard/asset', component: null },
  { name: 'market', displayName: '营销', icon: 'user', path: '/dashboard/market', component: null },
  { name: 'shop', displayName: '店铺', icon: 'shop', path: '/dashboard/shop', component: ShopContent },
  { name: 'setting', displayName: '设置', icon: 'setting', path: '/dashboard/setting', component: null }
]
