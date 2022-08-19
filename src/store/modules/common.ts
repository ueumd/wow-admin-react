import { makeAutoObservable } from "mobx"

class Common {
	collapsed: boolean
	breadcrumbList: object
	tabList: Array<any>

	constructor() {
		this.collapsed = false
		this.breadcrumbList = {}
		this.tabList = [{ title: "home", path: "/" }]
		makeAutoObservable(this)
		/*makeObservable(this, {
            collapsed: observable,
            setCollapsed: action.bound
        })*/
	}

	setCollapsed(val) {
		this.collapsed = val
	}

	setBreadcrumbList(route) {
		Object.assign(this.breadcrumbList, route)
	}

	setTabListValue(tab) {
		this.tabList.push(tab)
	}

	removeTab(tabPath) {
		this.tabList = this.tabList.filter(item => item.path !== tabPath)
	}

	setTbaList(list) {
		this.tabList = list
	}

	resetTab() {
		this.tabList = [{ title: "home", path: "/" }]
	}
}

export default new Common()
