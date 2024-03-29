import React from 'react'
import { Breadcrumb, message } from 'antd'
import { AxiosResponse } from 'axios'
import { Logger } from './debug'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: (...args: any[]) => any = () => {}

export function loggerHelper<T> (response: AxiosResponse<T>) {
  const url = response.config.url
  if (response.status === 200) {
    message.success(`成功获取 ${url}`)
  } else {
    message.error(`异常获取 ${url}`)
  }
  Logger(`${url}`, response.data)
}

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

export function axiosHandle<T = any> (
  req: AxiosResponse<T>
): Promise<AxiosResponse<T>>
export function axiosHandle<T = any> (req: AxiosResponse<T>,
  config: {
    check?: (req: AxiosResponse<T>) => boolean
    onSuccessDebug?: Function
    onFailedDebug?: Function
    onSuccess?: Function
    onFailed?: Function
  }): Promise<AxiosResponse<T>>
export function axiosHandle<T = any> (
  req: AxiosResponse<T>, {
    check = req => req.status === 200,
    onSuccessDebug = (res: AxiosResponse<T>) => loggerHelper(res),
    onFailedDebug = (res: AxiosResponse<T>) => loggerHelper(res),
    onFailed = noop,
    onSuccess = noop
  }: {
    check?: (req: AxiosResponse<T>) => boolean
    onSuccessDebug?: Function
    onFailedDebug?: Function
    onSuccess?: Function
    onFailed?: Function
  } = {}
): Promise<AxiosResponse<T>> {
  if (check(req)) {
    DEBUG && onFailedDebug(req)
    onSuccess(req)
  } else {
    DEBUG && onSuccessDebug(req)
    onFailed(req)
  }
  return Promise.resolve(req)
}

export function filterItems<T = any> (items: T[] = [], indexes: number[] = []): T[] {
  return indexes.map(idx => items[idx])
}

export const getRandomColor = () => '#' + (Math.random() * 0xffffff << 0).toString(16)

// only assert on LoggerMode
export const assert = DEBUG ? (judgement: boolean, message: string) => {
  !judgement && Logger(message)
} : noop

export const booleanToString = (value: any): string => value ? '是' : '否'

export const numberFormatter = (value: string | number | undefined, suffix: string[0]) =>
  `${value === undefined ? '' : value} ${suffix}`

export const connectPath = (...args: string[]): string =>
  args
    .map((arg, index) => index === 0 ? `/${arg}` : arg)
    .reduce((res, arg) => `${res}/${arg}`)

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
