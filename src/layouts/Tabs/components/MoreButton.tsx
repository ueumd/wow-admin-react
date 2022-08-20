import { Button, Dropdown, Menu } from "antd"
import { useStore } from "@/hooks/store-hook"
import { DownOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom"

const MoreButton = () => {
	const { commonStore } = useStore()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const tabList = commonStore.tabList

	// close tab
	const closeMultipleTab = tabPath => {
		const handleTabsList = tabList.filter(item => {
			return item.path === tabPath || item.path === "/"
		})
		commonStore.setTbaList(handleTabsList)
		tabPath ?? navigate("/")
	}

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>关闭当前</span>,
					onClick: () => commonStore.removeTab(pathname)
				},
				{
					key: "2",
					label: <span>关闭其它</span>,
					onClick: () => closeMultipleTab(pathname)
				},
				{
					key: "3",
					label: <span>关闭所有</span>,
					onClick: () => closeMultipleTab('')
				}
			]}
		/>
	)
	return (
		<Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
			<Button className="more-button" type="primary" size="small">
				更多<DownOutlined />
			</Button>
		</Dropdown>
	)
}
export default MoreButton
