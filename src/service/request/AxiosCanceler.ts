/**
 * @author ueumd
 */
import type { AxiosRequestConfig, Canceler } from "axios"
import axios from "axios"

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join("@")

export default class AxiosCanceler {
	private urlPendingMap = new Map<string, Canceler>()
	/**
	 * Add request
	 * @param {Object} config
	 */
	addPending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config)
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!this.urlPendingMap.has(url)) {
					this.urlPendingMap.set(url, cancel)
				}
			})
	}
	/**
	 * @description: Clear all pending
	 */
	removeAllPending() {
		this.urlPendingMap.forEach(cancel => {
			if (cancel && typeof cancel === "function") {
				cancel()
			}
		})
		this.urlPendingMap.clear()
	}

	/**
	 * Removal request
	 * @param {Object} config
	 */
	abort(config: AxiosRequestConfig) {
		const url = getPendingUrl(config)
		if (this.urlPendingMap.has(url)) {
			const cancel = this.urlPendingMap.get(url)
			cancel && cancel(url)
			this.urlPendingMap.delete(url)
		}
	}

	/**
	 * @description: reset
	 */
	reset() {
		this.urlPendingMap = new Map<string, Canceler>()
	}
}
