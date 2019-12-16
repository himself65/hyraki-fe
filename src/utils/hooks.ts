import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { AxiosPromise } from 'axios'
import { BaseAPI } from '~type/API'

export type Trigger<T extends Array<any> = any[],
  U extends (...args: any[]) => any = (...args: any[]) => any> = (...args: T) => ReturnType<U>

export function useFetch<T = any, U extends Array<any> = any[], V extends BaseAPI<T | undefined> = BaseAPI<T | undefined>> (
  func: (...args: U) => AxiosPromise<V>
): [T | undefined, {
  data: V
  trigger: Trigger<U, (...args: U) => AxiosPromise<V>>
}, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[], V extends BaseAPI<T> = BaseAPI<T>> (
  func: (...args: U) => AxiosPromise<V>,
  defaultVal: T
): [T, {
  data: V
  trigger: Trigger<U, (...args: U) => AxiosPromise<V>>
}, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[], V extends BaseAPI<T> = BaseAPI<T>> (
  func: (...args: U) => AxiosPromise<V>,
  defaultVal: T,
  options: {
    defaultParams?: U
    handle?: Function
  }
): [T, {
  data: V
  trigger: Trigger<U, (...args: U) => AxiosPromise<V>>
}, Dispatch<SetStateAction<T>>]

// implement
export function useFetch<T = any,
  U extends Array<any> = any[],
  V extends BaseAPI<T | undefined> = BaseAPI<T | undefined>> (
  func: (...args: U) => AxiosPromise<V>,
  defaultVal?: T,
  options?: {
    defaultParams?: U
    handle?: Function
  }
): [T | undefined, {
  data: V
  trigger: Trigger<U, (...args: U) => AxiosPromise<V>>
}, Dispatch<SetStateAction<T | undefined>>] {
  const [data, setData] = useState<T | undefined>(defaultVal)
  const [allData, setAllData] = useState<V>({
    data: defaultVal
  } as V)
  const [destroyed, destroy] = useState<boolean>(false)
  const fetchData = async (...args: U) => func(...args).then(res => {
    if (res.status === 200) {
      !destroyed && setData(res.data.data)
      !destroyed && setAllData(res.data)
    } else {
      options && options.handle && options.handle(res)
    }
    return res
  })
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const args: U = (options && options.defaultParams) || []
    fetchData(...args).then()
    return () => {
      destroy(true)
    }
  }, [])
  const trigger = useCallback((...args: U) => fetchData(...args), [])
  return [data, {
    data: allData,
    trigger: trigger
  }, setData]
}
