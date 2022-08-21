import { Navigate, useRoutes } from "react-router-dom"
import { lazy } from "react"

import { AuthComponent } from "@/components/AuthComponent"
import lazyLoad from "@/routers/utils/lazyLoad"

// 按需导入组件
const Login = lazy(() => import("@/views/login/index"))
const Layout = lazy(() => import("@/layouts/index"))
const NotFound = lazy(() => import("@/components/ErrorMessage/404"))

const routeList: Array<any> = []


const metaRouters: any = import.meta.globEager("./modules/*.ts")
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routeList.push(...metaRouters[item][key])
	})
})

routeList.unshift({
	path: "/",
	element: lazyLoad(lazy(() => import("@/views/home/home"))),
	meta: {
		requiresAuth: true,
		icon: "HomeOutlined",
		title: "Home"
	}
})

export const rootRouter = [
	{
		path: "/",
		element: (
			<AuthComponent>
				<Layout />
			</AuthComponent>
		),
		children: [...routeList]
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		path: "*",
		element: <NotFound />
	}
]

const Router = () => {
	return useRoutes(rootRouter)
}

export default Router

export { routeList }
