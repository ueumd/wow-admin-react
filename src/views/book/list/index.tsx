import { Table, Tag, Space, Pagination } from "antd"
import React, { useEffect, useState, useCallback, Component } from "react"
import type { PaginationProps } from "antd"
import api from "@/api"
import "./list.scss"

const { Column } = Table

const App = () => {
	const [list, setList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [numPerPage, setNumPerPage] = useState(10)
	const [totalCount, setTotalCount] = useState(10)
	const pageSizeOptions = ["10", "20", "50", "100"]

	const [loading, setLoading] = useState(false)
	const getBookList = data => {
		console.log("getBookList currentPage:", currentPage)
		setLoading(true)
		api.book
			.getBookList(data)
			.then(book => {
				setList(book.recordList)
				setTotalCount(book.totalCount)
				setNumPerPage(book.numPerPage)
				setCurrentPage(book.currentPage)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const resetCurrentPage = useCallback(num => setCurrentPage(num), [setCurrentPage])

	const onChange: PaginationProps["onChange"] = pageNumber => {
		console.log("Page: ", pageNumber)
		getBookList({ currentPage: pageNumber, numPerPage })
		setCurrentPage(pageNumber)
	}

	const onShowSizeChange = (current, size) => {
		resetCurrentPage(1)
		getBookList({ currentPage: 1, numPerPage: size })
		setNumPerPage(size)
	}

	useEffect(() => {
		console.log("useEffect currentPage:", currentPage)
		getBookList({ currentPage, numPerPage })
	}, [])

	return (
		<div>
			<button onClick={resetCurrentPage}>resetCurrentPage</button>
			<Table dataSource={list} pagination={false} loading={loading} rowKey={(record: any) => record.id}>
				<Column title="Author" dataIndex="author" key="author" />
				<Column title="BookName" dataIndex="merchName" key="merchName" />
				<Column title="Type" dataIndex="merchTypeName" key="merchTypeName" />
				<Column
					title="Action"
					key="action"
					render={(_: any, record) => (
						<Space size="middle">
							<a>Edit</a>
							<a>Delete</a>
						</Space>
					)}
				/>
			</Table>
			<Pagination
				className="pagination"
				showQuickJumper
				defaultCurrent={currentPage}
				total={totalCount}
				pageSize={numPerPage}
				onShowSizeChange={onShowSizeChange}
				pageSizeOptions={pageSizeOptions}
				onChange={onChange}
			/>
		</div>
	)
}
export default App
