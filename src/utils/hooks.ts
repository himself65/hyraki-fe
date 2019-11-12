import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { AxiosPromise } from 'axios'
import { BaseAPI } from '../../types/API'

export type Trigger<T extends Array<any> = any[]> = (...args: T) => void

export function useFetch<T = any, U extends Array<any> = any[]>(
  func: (...args: U) => AxiosPromise<BaseAPI<T>>
): [T | undefined, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]>(
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal: T
): [T, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]>(
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal: T,
  options?: {
    defaultParams?: U
    handle?: Function
  }
): [T, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]> (
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal?: T,
  options?: {
    defaultParams?: U
    handle?: Function
  }
): [T | undefined, Trigger<U>, Dispatch<SetStateAction<T | undefined>>] {
  const [data, setData] = useState(defaultVal)
  const [destroyed, destroy] = useState<boolean>(false)
  const fetchData = async (...args: U) => {
    await func(...args).then(res => {
      if (res.status === 200) {
        !destroyed && setData(res.data.data)
      } else {
        options && options.handle && options.handle(res)
      }
    })
  }
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const args: U = (options && options.defaultParams) || []
    fetchData(...args).then()
    return () => {
      destroy(true)
    }
  }, [])
  const trigger = useCallback((...args: U) => {
    fetchData(...args).then()
  }, [])
  return [data, trigger, setData]
}
