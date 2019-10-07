import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { AxiosPromise } from 'axios'

export function useFetch<T = any> (
  func: (...args: any[]) => AxiosPromise<T>,
  defaultVal: T
): [T, Dispatch<SetStateAction<T>>]
export function useFetch<T = any> (
  func: (...args: any[]) => AxiosPromise<T>,
  defaultVal: T,
  handle?: Function
): [T, Dispatch<SetStateAction<T>>]
export function useFetch<T = any> (
  func: (...args: any[]) => AxiosPromise<T>,
  defaultVal: T,
  handle?: Function
): [T, Dispatch<SetStateAction<T>>] {
  const [data, setData] = useState<T>(defaultVal)
  const fetchData = async () => {
    await func().then(res => {
      if (res.status === 200) {
        setData(res.data)
      } else {
        handle && handle(res)
      }
    })
  }
  useEffect(() => {
    fetchData().then()
  }, [])
  return [data, setData]
}
