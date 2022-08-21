/**
 * 高阶组件
 * 1. 判断token是否存在
 * 2. 如果存在 直接正常渲染
 * 3. 如果不存在 重定向到登录路由
 */
import utils from "@/utils"
import { Navigate } from "react-router-dom"

function AuthComponent({ children }) {
  const isToken = utils.getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}

export { AuthComponent }
