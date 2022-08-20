import React from "react"
import { Avatar, Modal, Menu, Dropdown, message } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import avatar from "@/assets/avatar.png"

import utils from "@/utils"

import { useStore, observer } from "@/hooks/store-hook"

const AvatarIcon = props => {
	const navigate = useNavigate()
	const { commonStore } = useStore()

	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				utils.removeToken("")
				commonStore.resetTab()
				message.success("退出登录成功！")
				navigate("/login")
			}
		})
	}

	// Dropdown Menu
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">首页</span>,
					onClick: () => navigate("/")
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">退出登录</span>,
					onClick: logout
				}
			]}
		></Menu>
	)
	return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="small" src={avatar} />
			</Dropdown>
		</>
	)
}

export default AvatarIcon
