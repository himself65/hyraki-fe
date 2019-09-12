import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { AxiosPromise } from 'axios'

export const useFetch = <T = any, U = any>(
  func: (...args: any[]) => AxiosPromise<U>,
  defaultVal: U,
  handle?: Function
): [U, Dispatch<SetStateAction<U>>] => {
  const [data, setData] = useState<U>(defaultVal)
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
