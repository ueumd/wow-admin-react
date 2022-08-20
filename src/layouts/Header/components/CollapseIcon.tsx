import React from "react"
import { observer, useStore } from "@/hooks/store-hook"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
export default observer(() => {
	const { commonStore } = useStore()
	return (
		<div
			className="collapsed"
			onClick={() => {
				commonStore.setCollapsed(!commonStore.collapsed)
			}}
		>
			{commonStore.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	)
})
