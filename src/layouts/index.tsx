import React, { useEffect } from "react"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import { useStore } from "@/hooks/store-hook"
import utils from "@/utils"
import { routeList } from "@/routers"

import Aside from "./Aside"
import Header from "./Header"
import Tab from "./Tabs"

import "./index.scss"

export default () => {
	const { commonStore } = useStore()
	useEffect(() => {
		// 提前初始面包屑
		commonStore.setBreadcrumbList(utils.router.findAllBreadcrumb(utils.router.generateRouterList(routeList)))
	}, [])

	return (
		<section className="container">
			<Layout>
				<Aside />
				<Layout className="site-layout">
					<Header />
					<Tab />
					<Layout className="layout-content" style={{ padding: 20 }}>
						<Outlet />
					</Layout>
				</Layout>
			</Layout>
		</section>
	)
}
