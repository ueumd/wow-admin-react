import screenfull from "screenfull"
import { message } from "antd"
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"

const Fullscreen = () => {
	const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen)

	useEffect(() => {
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) setFullScreen(true)
			else setFullScreen(false)
			return () => screenfull.off("change", () => {})
		})
	}, [])

	const handleFullScreen = () => {
		if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌")
		screenfull.toggle()
	}
	return <span onClick={handleFullScreen}>{fullScreen ? <FullscreenExitOutlined style={{ width: 100 }} /> : <FullscreenOutlined />}</span>
}
export default Fullscreen
