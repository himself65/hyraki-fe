import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from 'office-ui-fabric-react/lib/Styling'
import 'ant-design-pro/lib/Charts/style/index.less'
import 'office-ui-fabric-react/dist/sass/Fabric.scss'
import './index.less'
import './style/theme.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

// fixme: 需要敲定配色
loadTheme({
  palette: {
    themePrimary: '#FF6400',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#FFDC3C',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
})

// tip: config/webpack.dev.config.js 中定义了 DEBUG 全局变量
if (DEBUG) {
  localStorage.debug = 'hyraki-fe:*'
} else {
  // tip: Production 环境下报错后会发给 himself65@outlook.com 邮件
  Sentry.init({ dsn: 'https://1fbf6fa0850d48748c77a03259fe3540@sentry.io/1532395' })
}

// tip: 初始化 fabric 图标库
initializeIcons()

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<App/>, document.getElementById('root'))
} else {
  const HotApp = hot(module)(App)
  ReactDOM.render(<HotApp/>, document.getElementById('root'))
}

if (!DEBUG) {
  serviceWorker.register()
}
