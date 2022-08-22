import React from "react"
import { render } from "react-dom"
import { Spin } from "antd"

import CreateAxiosInstance from "@/service/request"
import type { IAxiosRequestConfig, IAxiosResponse, AxiosError } from "@/service/request"
import utils from "@/utils"

const request = new CreateAxiosInstance({
	baseURL: "",
	timeout: 10000,
	headers: {
		token: utils.getToken()
	},
	abort: false,
	load: false
})

const ErrMessageInfo = {
	operationFailed: "操作失败",
	errorTip: "错误提示",
	errorMessage: "操作失败,系统异常!",
	timeoutMessage: "登录超时,请重新登录!",
	apiTimeoutMessage: "接口请求超时,请刷新页面重试!",
	apiRequestFailed: "请求出错，请稍候重试",
	networkException: "网络异常",
	networkExceptionMsg: "网络异常，请检查您的网络连接是否正常!",
	canceledError: "已终止请求",

	errMsg401: "用户没有权限（令牌、用户名、密码错误）!",
	errMsg403: "用户得到授权，但是访问是被禁止的。!",
	errMsg404: "网络请求错误,未找到该资源!",
	errMsg405: "网络请求错误,请求方法未允许!",
	errMsg408: "网络请求超时!",
	errMsg500: "服务器错误,请联系管理员!",
	errMsg501: "网络未实现!",
	errMsg502: "网络错误!",
	errMsg503: "服务不可用，服务器暂时过载或维护!",
	errMsg504: "网络超时!",
	errMsg505: "http版本不支持该请求!"
}

// 当前接口请求数
let requestNum = 0

request.requestStart = (config: IAxiosRequestConfig) => {
	if (config.load) {
		if (requestNum <= 0) {
			const dom = document.createElement("div")
			dom.setAttribute("id", "axiosLoading")
			document.body.appendChild(dom)
			render(<Spin tip="Loading..." size="large" />, dom)
		}
		requestNum += 1
	}
	if (config.headers!.token) {
		config.headers!.token = utils.getToken()
	}

	return config
}

request.requestEnd = (config: IAxiosRequestConfig) => {
	if (config.load) {
		requestNum -= 1
		if (requestNum <= 0) {
			const LoadingEle: HTMLElement = document.querySelector("#axiosLoading") as HTMLElement
			document.body.removeChild(LoadingEle)
		}
	}
}

// 响应处理
request.dataFactory = (response: IAxiosResponse) => {
	if (response.status === 200 && response.data) {
		const { code, data, message } = response.data
		if (code === 0) {
			return data
		} else {
			return Promise.reject(response.data)
		}
	}
	return Promise.reject({ message: ErrMessageInfo.errorMessage })
}

// 异常处理
request.requestError = (error: AxiosError) => {
	// console.error(`【接口异常： 】`, error)
	const { response, code, message } = error || {}
	if (code === "ECONNABORTED" && message.indexOf("timeout") !== -1) {
		return { message: ErrMessageInfo.apiTimeoutMessage }
	}
	if (code === "ERR_CANCELED") {
		return Promise.resolve({
			code,
			message: ErrMessageInfo.canceledError
		})
	}
	if (response) {
		const errMessage = checkStatus(response.status)
		if (errMessage) {
			return Promise.reject({
				code: response.status,
				message: errMessage
			})
		}
	}
	return Promise.reject({ message: ErrMessageInfo.errorMessage })
}

function checkStatus(code) {
	let errMessage
	switch (code) {
		case 400:
			errMessage = ErrMessageInfo.errMsg401
			break
		// 401: Not logged in
		case 401:
			// token
			errMessage = ErrMessageInfo.errMsg401
			break
		case 403:
			errMessage = ErrMessageInfo.errMsg403
			break
		case 404:
			errMessage = ErrMessageInfo.errMsg404
			break
		case 405:
			errMessage = ErrMessageInfo.errMsg405
			break
		case 408:
			errMessage = ErrMessageInfo.errMsg408
			break
		case 500:
			errMessage = ErrMessageInfo.errMsg500
			break
		case 501:
			errMessage = ErrMessageInfo.errMsg501
			break
		case 502:
			errMessage = ErrMessageInfo.errMsg502
			break
		case 503:
			errMessage = ErrMessageInfo.errMsg503
			break
		case 504:
			errMessage = ErrMessageInfo.errMsg504
			break
		case 505:
			errMessage = ErrMessageInfo.errMsg505
			break
		default:
	}
	return errMessage
}

export default request
