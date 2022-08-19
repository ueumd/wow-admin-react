import React from 'react'
import ReactDOM from 'react-dom/client'
import "@/locales/index"
import App from './App'

// 导入antd样式文件
import "antd/dist/antd.min.css"

// 引入index.scss文件
import "./styles/index.scss"


const RootEle: HTMLElement = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(RootEle)
root.render(
  <App />
)
