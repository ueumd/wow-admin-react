import { lazy } from "react"
import lazyLoad from "@/routers/utils/lazyLoad"

export default [
	{
		path: "/book",
		meta: {
			requiresAuth: true,
			title: "书籍管理",
			icon: "ProfileOutlined"
		},
		children: [
			{
				path: "/book/list",
				element: lazyLoad(lazy(() => import("@/views/book/list/index"))),
				meta: {
					requiresAuth: true,
					title: "书籍列表",
					icon: "AppleOutlined"
				}
			}
		]
	}
]
