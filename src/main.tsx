import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import "@/locales/index"
import App from './App'
import zhCN from "antd/es/locale/zh_CN"
// 导入antd样式文件
import "antd/dist/antd.min.css"

// 引入index.scss文件
import "./styles/index.scss"


const RootEle: HTMLElement = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(RootEle)
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
