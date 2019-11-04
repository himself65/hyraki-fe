export interface BaseAPI<T = undefined> {
  data: T
}

export interface ListAPI<T> extends BaseAPI<T> {
  page: number
}

export interface MessageAPI extends BaseAPI {
  message: string
}

export type PostAPI<T extends {} = {}> = {
  success: boolean // Post 是否成功
} & T & MessageAPI
