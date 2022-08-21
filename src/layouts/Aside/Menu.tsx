import { Menu } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import utils from "@/utils"
import { routeList } from "@/routers"

import "./menu.scss"

export default () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { pathname } = location
	const [selectedKeys, setSelectedKeys] = useState([pathname])

	const [openKeys, setOpenKeys] = useState([])

	const [menuList, setMenuList] = useState([])

	// 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname])
		setOpenKeys(utils.router.getOpenKeys(pathname))
	}, [pathname])

	// console.log(pathname)

	const clickMenu = ({ key }) => {
		// console.log(key)
		navigate(key)
	}

	const onOpenChange = openKeys => {
		console.log("openKeys", openKeys)
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)
		const latestOpenKey = openKeys[openKeys.length - 1]
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
		// @ts-ignore
		setOpenKeys([latestOpenKey])
	}

	useEffect(() => {
		setMenuList(utils.router.generateRouterList(routeList))
	}, [])

	return (
		<Menu
			theme="dark"
			mode="inline"
			triggerSubMenuAction="click"
			openKeys={openKeys}
			selectedKeys={selectedKeys}
			items={menuList}
			onClick={clickMenu}
			onOpenChange={onOpenChange}
		></Menu>
	)
}
