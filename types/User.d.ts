export enum Permission {
  all = 0,
  user = 1,
  worker = 1,
  root = 2
}

export interface Message {
  id: string
  message: string
  read: boolean // 是否已读
}
