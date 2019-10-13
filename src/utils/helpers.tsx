import React, { ComponentType } from 'react'
import { Breadcrumb } from 'antd'
import { DefaultProps, IState } from '../types'
import { Logger } from './debug'
import { connect } from 'react-redux'
import { LocationDescriptorObject } from 'history'
import { Redirect } from 'react-router-dom'
import { LocationState } from '../types/Router'
import { JWT_TOKEN } from './shared'

/***
 * @example
 * import { BreadCrumb } from 'antd'
 * function App() {
 *   return (
 *     <BreadCrumb>
 *       {...BreadcrumbFactory('/foo/goo')}
 *     </BreadCrumb>
 *   )
 * }
 */
export function BreadcrumbFactory (pathname: string) {
  let path = '/'
  let key = 1
  return ([<Breadcrumb.Item key={key++}>Home</Breadcrumb.Item>,
    pathname.split('/')
      .splice(1)
      .map((name, index, array) => {
        const fixedName = name.charAt(0).toUpperCase().concat(name.slice(1))
        path += name
        // tip: 最后一个地址不显示链接
        return array.length === index + 1
          ? (<Breadcrumb.Item key={key++}>{fixedName}</Breadcrumb.Item>)
          : (<Breadcrumb.Item key={key++}><a href={path}>{fixedName}</a></Breadcrumb.Item>)
      })])
}

interface AccessRequiredProps extends DefaultProps {
  logout: boolean
}

/**
 * 此方法仅仅是前端简单判断和跳转，不能当作真正的安全防御
 * @param Component 组件
 */
export const AccessRequired = function (Component: ComponentType<any>) {
  const mapStateToProps = (state: IState) => ({ logout: state.user.logout })
  return connect(mapStateToProps)((props: AccessRequiredProps) => {
    const token = localStorage.getItem(JWT_TOKEN)
    // when no logout and have token
    const maybeAccess = !props.logout || token
    Logger('userState: %s, path: %s',
      maybeAccess ? 'logout' : 'login',
      props.location.pathname
    )
    if (!maybeAccess) {
      // maybe no access
      const location: LocationDescriptorObject<LocationState> = {
        pathname: '/error',
        state: {
          user: null
        }
      }
      return (<Redirect to={location}/>)
    } else {
      return (<Component {...props}/>)
    }
  })
}

export enum LoginState {
  Login,
  Logout,
  LoginError
}

const stateMap = {
  user: {
    [LoginState.Login]: '用户已登录',
    [LoginState.Logout]: '用户未登录',
    [LoginState.LoginError]: '登录时出现错误'
  }
}

export const StateMap: {
  [key: string]: (key: any) => string
} = {
  User: (key: LoginState | null | undefined): string => {
    if (key) {
      return stateMap.user[key]
    }
    return '未知状态'
  }
}
