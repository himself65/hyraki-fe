import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import * as Sentry from '@sentry/browser'
import 'ant-design-pro/lib/Charts/style/index.less'
import 'office-ui-fabric-react/dist/sass/Fabric.scss'
import './index.less'
import './style/theme.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

// tip: config/webpack.dev.config.js 中定义了 DEBUG 全局变量
if (DEBUG) {
  localStorage.debug = 'hyraki-fe:*'
} else {
  // tip: Production 环境下报错后会发给 himself65@outlook.com 邮件
  Sentry.init({ dsn: 'https://1fbf6fa0850d48748c77a03259fe3540@sentry.io/1532395' })
}

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<App/>, document.getElementById('root'))
} else {
  const HotApp = hot(App)
  ReactDOM.render(<HotApp/>, document.getElementById('root'))
}

if (!DEBUG) {
  serviceWorker.register()
}
