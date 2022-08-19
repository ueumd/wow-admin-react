import { request } from "@/config"

export const getBookList = () => {
	return request.post("/web/api/book/getBookList")
}
