/**
 * @author ueumd
 */
import axios, { AxiosError } from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from "axios"
import AxiosCanceler from "./AxiosCanceler"

/**
 * @description: request method
 */
enum RequestEnum {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE"
}

/**
 * @description:  contentType
 */
enum ContentTypeEnum {
	// json
	JSON = "application/json;charset=UTF-8",
	// form-data qs
	FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
	// form-data  upload
	FORM_DATA = "multipart/form-data;charset=UTF-8"
}

export interface IAxiosRequestConfig extends AxiosRequestConfig {
	abort?: boolean
	load?: boolean
}

export interface IAxiosResponse extends AxiosResponse {
	config: IAxiosRequestConfig
}

export { AxiosError }

export default class CreateAxiosInstance extends AxiosCanceler {
	instance: AxiosInstance

	// Loading
	public requestStart
	public requestEnd

	// 错误处理
	public requestError

	// response
	public dataFactory

	constructor(options) {
		super()
		this.instance = axios.create({
			load: false,
			abort: false,
			withCredentials: true,
			...options
		})

		// request config
		this.instance.interceptors.request.use(
			(config: IAxiosRequestConfig) => {
				if (config!.headers) {
					Object.assign(this.instance.defaults.headers, config.headers)
				}

				if (config.abort) {
					this.addPending(config)
				}

				this.requestStart && this.requestStart(config)
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)

		// response
		this.instance.interceptors.response.use(
			(response: IAxiosResponse) => {
				// console.log('response:', response)
				this.requestEnd && this.requestEnd(response.config)
				return this.dataFactory && this.dataFactory(response)
			},
			error => {
				// console.error('error:', error)
				if (error.config) {
					this.requestEnd && this.requestEnd(error.config)
				}
				return this.requestError && this.requestError(error)
			}
		)
	}

	request = <T = any>(url: string, data, config: IAxiosRequestConfig): Promise<T> => {
		if (!url) {
			throw new Error("Please configure the correct request parameters!")
		}
		if (config.method?.toUpperCase() === RequestEnum.GET) {
			config.params = Object.assign(data || {})
		} else {
			config.data = Object.assign(data || {})
		}
		config.url = url
		return this.instance.request<T, T>(config)
	}

	/**
	 * @description:  get
	 * @param url
	 * @param data
	 * @param config
	 */
	get<T = any>(url: string, data?: any, config?: IAxiosRequestConfig): Promise<T> {
		return this.request(url, data, { ...config, method: RequestEnum.GET })
	}

	/**
	 * @description:  post
	 * @param url
	 * @param data
	 * @param config
	 */
	post<T = any>(url: string, data?: any, config?: IAxiosRequestConfig): Promise<T> {
		return this.request(url, data, { ...config, method: RequestEnum.POST })
	}

	/**
	 * @description:  put
	 * @param url
	 * @param data
	 * @param config
	 */
	put<T = any>(url: string, data?: any, config?: IAxiosRequestConfig): Promise<T> {
		return this.request(url, data, { ...config, method: RequestEnum.PUT })
	}

	/**
	 * @description:  delete
	 * @param url
	 * @param data
	 * @param config
	 */
	delete<T = any>(url: string, data?: any, config?: IAxiosRequestConfig): Promise<T> {
		return this.request(url, data, { ...config, method: RequestEnum.DELETE })
	}

	/**
	 * @description:  File Upload
	 */
	upload<T = any>(url: string, data?: any, config?: IAxiosRequestConfig): Promise<T> {
		return this.instance.request<T, T>({
			url,
			data,
			...config,
			method: RequestEnum.POST,
			headers: {
				"Content-type": ContentTypeEnum.FORM_DATA,
				ignoreCancelToken: true
			}
		})
	}
}
