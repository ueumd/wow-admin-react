import { useEffect, useState } from "react"
import { Tabs } from "antd"
import { HomeFilled } from "@ant-design/icons"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const { TabPane } = Tabs
import utils from "@/utils"
import { routeList } from "@/routers"
import { useStore, observer } from "@/hooks/store-hook"

import MoreButton from "./components/MoreButton"

import "./index.scss"

export default observer(() => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { commonStore } = useStore()

	const [activeValue, setActiveValue] = useState(pathname)

	const onChange = path => {
		navigate(path)
	}

	useEffect(() => {
		addTab()
		setActiveValue(pathname)
	}, [pathname])

	// add tabs
	const addTab = () => {
		const route = utils.router.searchRoute(pathname, routeList)
		if (commonStore.tabList.every(item => item.path !== route.path)) {
			// commonStore.tabList.push({ title: route.meta.title, path: route.path })
			commonStore.setTabListValue({ title: route.meta.title, path: route.path })
		}
	}

	const removeTab = tabPath => {
		if (tabPath === "/") return
		if (pathname === tabPath) {
			commonStore.tabList.forEach((item, index) => {
				if (item.path !== pathname) return
				const nextTab = commonStore.tabList[index + 1] || commonStore.tabList[index - 1]
				if (!nextTab) return
				navigate(nextTab.path)
			})
		}
		commonStore.removeTab(tabPath)
	}

	return (
		<>
			<div className="header-tabs">
				<Tabs
					activeKey={activeValue}
					hideAdd
					type="editable-card"
					onEdit={path => {
						removeTab(path)
					}}
					defaultActiveKey="1"
					onChange={onChange}
				>
					{commonStore.tabList.map(item => {
						return (
							<TabPane
								key={item.path}
								tab={
									<span>
										{item.path === "/" ? <HomeFilled /> : ""}
										{item.title}
									</span>
								}
								closable={item.path !== "/"}
							></TabPane>
						)
					})}
				</Tabs>
				<MoreButton />
			</div>
		</>
	)
})
