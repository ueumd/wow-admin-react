import React from "react"
import * as Icons from "@ant-design/icons"

/**
 * @description 菜单列表并处理成 antd menu 需要的格式
 */
export function generateRouterList(userRouters) {
	return userRouters.map(router => {
		const routes = {
			parent: router.parent,
			element: router.element,
			label: router.meta.title,
			title: router.meta.title,
			key: router.path,
			path: router.path,
			icon: React.createElement(Icons[router.meta.icon]),
			// children: []
			children: undefined
		}
		if (router.children && router.children.length) {
			router.children = router.children.map(it => {
				it.parent = router.path
				return it
			})
			routes.children = generateRouterList(router.children)
		}
		return routes
	})
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path, routes) => {
	let result = {}
	for (let item of routes) {
		if (item.path === path) return item
		if (item.children) {
			const res = searchRoute(path, item.children)
			if (Object.keys(res).length) result = res
		}
	}
	return result
}

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = path => {
	let newStr = ""
	let newArr: Array<any> = []
	let arr = path.split("/").map(i => "/" + i)
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i]
		newArr.push(newStr)
	}
	return newArr
}

/**
 * @description 获取父级路由信息
 * @param menus
 * @param pathname
 * @returns {string|*|string}
 */
export const getParentPath = (menus, pathname) => {
	if (!menus.length) return ""
	for (const it of menus) {
		if (it.key === pathname) {
			return it.parent
		}
		if (it.children) {
			return getParentPath(it.children, pathname)
		}
	}
}

/**
 * @description 双重递归 找出 所有面包屑生成对象存到 redux 中，就不用每次都去递归查找了
 * @param {String} menuList 当前菜单列表
 * @returns object
 *
 * { '/' : ['Home'], '/antd/menu': ['antd', 'Menu']}
 */
export const findAllBreadcrumb = menuList => {
	let handleBreadcrumbList = {}
	const loop = menuItem => {
		if (menuItem?.children?.length) menuItem.children.forEach(item => loop(item))
		else handleBreadcrumbList[menuItem.path] = getBreadcrumbList(menuItem.path, menuList)
	}
	menuList.forEach(item => loop(item))
	return handleBreadcrumbList
}

/**
 * @description 递归当前路由的所有关联的路由，生成面包屑导航栏
 * @param {String} path 当前访问地址
 * @param {Array} menuList 菜单列表
 * @returns array
 */
export const getBreadcrumbList = (path, menuList) => {
	let tempPath: Array<any> = []
	try {
		const getNodePath = node => {
			tempPath.push(node)
			// 找到符合条件的节点，通过throw终止掉递归
			if (node.path === path) {
				throw new Error("GOT IT!")
			}
			if (node.children && node.children.length > 0) {
				for (let i = 0; i < node.children.length; i++) {
					getNodePath(node.children[i])
				}
				tempPath.pop()
			} else {
				tempPath.pop()
			}
		}
		for (let i = 0; i < menuList.length; i++) {
			getNodePath(menuList[i])
		}
	} catch (e) {
		return tempPath.map(item => item.title)
	}
}
