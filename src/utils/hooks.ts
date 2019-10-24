import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react'
import { AxiosPromise } from 'axios'
import { BaseAPI } from '../types/API'

export type Trigger<T extends Array<any> = any[]> = (...args: T) => void

export function useFetch<T = any, U extends Array<any> = any[]>(
  func: (...args: U) => AxiosPromise<BaseAPI<T>>
): [T | undefined, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]> (
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal: T
): [T, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]> (
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal: T,
  options?: {
    defaultParams?: U,
    handle?: Function
  }
): [T, Trigger<U>, Dispatch<SetStateAction<T>>]
export function useFetch<T = any, U extends Array<any> = any[]> (
  func: (...args: U) => AxiosPromise<BaseAPI<T>>,
  defaultVal?: T,
  options?: {
    defaultParams?: U,
    handle?: Function
  }
): [T | undefined, Trigger<U>, Dispatch<SetStateAction<T>>] {
  const [data, setData] = useState()
  if (defaultVal) {
    setData(defaultVal)
  }
  const fetchData = async (...args: U) => {
    await func(...args).then(res => {
      if (res.status === 200) {
        setData(res.data.data)
      } else {
        options && options.handle && options.handle(res)
      }
    })
  }
  useEffect(() => {
    // @ts-ignore
    const args: U = (options && options.defaultParams) || []
    fetchData.apply(null, args).then()
  }, [])
  const trigger = useCallback((...args: U) => {
    fetchData.apply(null, args)
  }, [])
  return [data, trigger, setData]
}
