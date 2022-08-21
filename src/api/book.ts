import { request } from "@/config"

export const getBookList = (data) => {
	return request.post("/web/api/book/getBookList", data)
}
