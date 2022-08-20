import React, { Suspense } from "react"
import { Spin } from "antd"
import { BrowserRouter } from "react-router-dom"
import RoutesList from "@/routers"
export default () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Spin size="large" className="page-loading" />}>
				<RoutesList />
			</Suspense>
		</BrowserRouter>
	)
}
