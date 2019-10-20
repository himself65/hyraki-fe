import React from 'react'
import { Breadcrumb, message } from 'antd'
import { AxiosResponse } from 'axios'

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

export function defaultAxiosHandle<T>(req: AxiosResponse<T>): PromiseLike<AxiosResponse<T>>
export function defaultAxiosHandle<T>(req: AxiosResponse<T>,
                                      config: {
                                        check?: (req: AxiosResponse<T>) => boolean,
                                        onCheckFailedHandle?: Function,
                                        onCheckSuccessHandle?: Function
                                      }): PromiseLike<AxiosResponse<T>>
export function defaultAxiosHandle<T> (
  req: AxiosResponse<T>, {
    check = req => req.status === 200,
    onCheckFailedHandle = () => message.error('失败'),
    onCheckSuccessHandle = () => message.success('成功')
  }: {
    check?: (req: AxiosResponse<T>) => boolean,
    onCheckFailedHandle?: Function,
    onCheckSuccessHandle?: Function
  } = {}
): PromiseLike<AxiosResponse<T>> {
  if (check(req)) {
    onCheckFailedHandle(req)
  } else {
    onCheckSuccessHandle(req)
  }
  return Promise.resolve(req)
}

export const booleanToString = (value: any): string => value ? '是' : '否'

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
