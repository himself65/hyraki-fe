import debug from 'debug'

// tip: 全局Logger，只在 process.env.NODE_ENV === 'development' 下开启
const logger = debug('hyraki-fe:log')

export function Logger (formatter: any, ...args: any[]): void {
  logger(formatter, ...args)
}

Logger.error = (formatter: any, ...args: any[]): void => {
  logger('%c', 'background: red', formatter, ...args)
}
