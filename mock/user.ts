import type { MockMethod } from "vite-plugin-mock"

const menus = [
	{
		_id: "6281cf1b1424d9aa31b7a234",
		rid: 3,
		pid: 0,
		path: "/book",
		name: "Book",
		icon: "goods",
		title: "书籍管理"
	},
	{
		_id: "6281cf1b1424d9aa31b7aqq1",
		rid: 4,
		pid: 3,
		path: "/book/list",
		name: "BookList",
		icon: "AddLocation",
		title: "书籍列表"
	},
	{
		_id: "6281cf1b1424d9aa31b7a51e",
		rid: 5,
		pid: 3,
		path: "/book/test",
		name: "BookTest",
		icon: "List",
		title: "测试"
	}
]

export default [
	{
		url: "/web/api/login",
		method: "post",
		response: ({ body }) => {
			console.log(body)
			return {
				code: 0,
				msg: "success",
				data: {
					token: "eyJhbGciInR5cCI6IkpXVCJ9.eyJpZzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1OTYwMTU1OX0.NemTFPTtHDO23e39NYUPk8",
					uid: "6281d355ebd7058a7e93c82c",
					username: "admin"
				}
			}
		}
	},
	{
		url: "/web/api/logout",
		method: "get",
		response: ({ body }) => {
			return {
				code: 0,
				msg: "success",
				data: {}
			}
		}
	},
	{
		url: "/web/api/test",
		method: "get",
		response: ({ body }) => {
			return {
				code: 0,
				msg: "success",
				data: {
					userId: "1",
					username: "admin",
					desc: "manager",
					token: "fakeToken1"
				}
			}
		}
	},
	{
		url: "/web/api/user/getUserMenu",
		method: "post",
		response: ({ body }) => {
			return {
				code: 0,
				msg: "success",
				data: menus
			}
		}
	},
	{
		url: "/web/api/user/resource",
		method: "get",
		response: ({ body }) => {
			return {
				code: 0,
				msg: "success",
				data: [
					{
						title: "Babel",
						desc: "JavaScript 编译器",
						url: "https://babeljs.io/"
					},
					{
						title: "Vite 中文",
						desc: "下一代前端开发与构建工具",
						url: "https://cn.vitejs.dev/"
					},
					{
						title: "PnPm",
						desc: "快速的，节省磁盘空间的包管理工具",
						url: "https://pnpm.io/zh/"
					},
					{
						title: "unocss",
						desc: "受Windi CSS、Tailwind CSS 和 Twind 的启发",
						url: "https://github.com/unocss/unocss"
					},
					{
						title: "React",
						desc: "官方文档",
						url: "https://zh-hans.reactjs.org/"
					},
					{
						title: "Lifecycles",
						desc: "show lifecycles",
						url: "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
					},
					{
						title: "React Router",
						desc: "官方文档",
						url: "https://reactrouter.com/"
					},
					{
						title: "React Router",
						desc: "React Router",
						url: "http://react-guide.github.io/react-router-cn/"
					},
					{
						title: "MobX",
						desc: "Mobx官网",
						url: "https://zh.mobx.js.org/README.html"
					},
					{
						title: "Pinina",
						desc: "Pinina",
						url: "https://pinia.vuejs.org/"
					},
					{
						title: "Ant Design",
						desc: "企业级产品设计体系，创造高效愉悦的工作体验",
						url: "https://ant.design/"
					},
					{
						title: "arco.design",
						desc: "字节跳动出品的企业级设计系统",
						url: "https://arco.design/"
					},
					{
						title: "Iconpark",
						desc: "2400+基础图标，29种图标分类，提供更多的选择",
						url: "https://iconpark.oceanengine.com/home"
					},
					{
						title: "React-Draggable",
						desc: "React draggable component",
						url: "https://github.com/react-grid-layout/react-draggable"
					},
					{
						title: "Echarts5.0",
						desc: "一个基于 JavaScript 的开源可视化图表库",
						url: "https://echarts.apache.org/zh/index.html"
					},
					{
						title: "XGplayer",
						desc: "带解析器、能节省流量的 Web 视频播放器",
						url: "http://v2.h5player.bytedance.com/"
					}
				]
			}
		}
	}
] as MockMethod[]
