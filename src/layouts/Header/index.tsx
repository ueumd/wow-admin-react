import React from "react"
import { Layout, Space } from "antd"

import CollapseIcon from "./components/CollapseIcon"
import BreadcrumbNav from "./components/BreadcrumbNav"
import Fullscreen from "./components/Fullscreen"
import AvatarIcon from "./components/AvatarIcon"

export default () => {
  return (
    <Layout.Header className="site-layout-background rowBC" style={{ paddingLeft: 20, paddingRight: 20, height: 40 }}>
      <div className="rowSC header-lf">
        <Space>
          <CollapseIcon />
          <BreadcrumbNav />
        </Space>
      </div>
      <div className="rowSC header-rf">
        <Space>
          <Fullscreen />
          <AvatarIcon />
        </Space>
      </div>
    </Layout.Header>
  )
}
