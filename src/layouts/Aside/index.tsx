import { Layout } from "antd"
import { observer, useStore } from "@/hooks/store-hook"
import Menu from "./Menu"
import Logo from "./Logo"

import "./index.scss"

export default observer(() => {
  const { commonStore } = useStore()
  return (
    <>
      <Layout.Sider trigger={null} collapsible collapsed={commonStore.collapsed} width={260}>
        <div className="layout-aside-wrap">
          <Logo />
          <Menu />
        </div>
      </Layout.Sider>
    </>
  )
})
