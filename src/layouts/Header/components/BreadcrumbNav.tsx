import { Breadcrumb } from "antd"
import { useLocation } from "react-router-dom"
import { useStore, observer } from "@/hooks/store-hook"

export default observer(() => {
	const { commonStore } = useStore()
	const { pathname } = useLocation()
	const list = commonStore.breadcrumbList[pathname] || []

	return (
		<Breadcrumb>
			<Breadcrumb.Item href="/">首页</Breadcrumb.Item>
			{list.map(item => {
				return <Breadcrumb.Item key={item}>{item !== "首页" ? item : null}</Breadcrumb.Item>
			})}
		</Breadcrumb>
	)
})
