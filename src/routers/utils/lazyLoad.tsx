import React, { Suspense } from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */

const lazyLoad = Comp => {
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
	return (
		<Suspense fallback={<Spin indicator={antIcon} className="page-loading" />}>
			<Comp />
		</Suspense>
	)
}

export default lazyLoad
