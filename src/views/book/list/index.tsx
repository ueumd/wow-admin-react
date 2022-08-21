import { Table, Tag, Space, Pagination } from "antd"
import React, { useEffect, useState } from "react"
import type { PaginationProps } from "antd"
import api from "@/api"
import "./list.scss"

const { Column } = Table

const App = () => {
	const [list, setList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [numPerPage, setNumPerPage] = useState(10)
	const [totalCount, setTotalCount] = useState(100)
	const [pageSizeOptions] = useState(["10", "20", "50", "100"])

	const [loading, setLoading] = useState(false)
	const getBookList = (data) => {
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

	const onChange: PaginationProps["onChange"] = pageNumber => {
		console.log("Page: ", pageNumber)
		setCurrentPage(pageNumber)
	}

	const onShowSizeChange = (current, size) => {
		setCurrentPage(1)
		setNumPerPage(size)
	}

	useEffect(() => {
		getBookList({ currentPage: currentPage, numPerPage: numPerPage })
	}, [currentPage])
	return (
		<div>
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
