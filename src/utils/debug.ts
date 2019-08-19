import debug from 'debug'

// tip: 全局Logger，只在 process.env.NODE_ENV === 'development' 下开启
export const Logger = debug('hyraki-fe:log')
