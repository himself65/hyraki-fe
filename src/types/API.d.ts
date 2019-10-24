export interface BaseAPI<T> {
  data: T
}

export interface ListAPI<T> extends BaseAPI<T> {
  page: number
}

export type PostAPI<T extends {} = {}> = {
  success: boolean // Post 是否成功
  message: string
} & T & BaseAPI<undefined>
