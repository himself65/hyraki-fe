import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import 'ant-design-pro/dist/ant-design-pro.css' // 导入 ant-design-pro 的 css
import './index.less'
import './style/theme.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

// tip: config/webpack.dev.config.js 中定义了 DEBUG 全局变量
if (DEBUG) {
  localStorage.debug = 'hyraki-fe:*'
} else {
  Sentry.init({ dsn: 'https://1fbf6fa0850d48748c77a03259fe3540@sentry.io/1532395' })
}

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.register()
