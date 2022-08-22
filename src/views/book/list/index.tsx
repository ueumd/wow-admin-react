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

class ListApp extends Component {
	state = {
		list: [],
		loading: false,
		totalCount: 0,
		listQuery: {
			currentPage: 1,
			numPerPage: 10
		}
	}
	getBookList = () => {
		this.setState({ loading: true })
		api.book
			.getBookList(this.state.listQuery)
			.then(book => {
				this.setState({
					list: book.recordList,
					totalCount: book.totalCount,
					listQuery: {
						currentPage: book.currentPage,
						numPerPage: book.numPerPage
					}
				})
			})
			.finally(() => {
				this.setState({ loading: false })
			})
	}
	onChange = (currentPage, pageSize) => {
		this.setState(
			state => ({
				listQuery: {
					...state.listQuery,
					currentPage
				}
			}),
			() => {
				this.getBookList()
			}
		)
	}
	onShowSizeChange = (current, numPerPage) => {
		this.setState(
			state => ({
				listQuery: {
					...state.listQuery,
					currentPage: 1,
					numPerPage
				}
			}),
			() => {
				this.getBookList()
			}
		)
	}
	componentDidMount() {
		this.getBookList()
	}
	render() {
		return (
			<div>
				<Table dataSource={this.state.list} pagination={false} loading={this.state.loading} rowKey={(record: any) => record.id}>
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
					defaultCurrent={this.state.listQuery.currentPage}
					total={this.state.totalCount}
					pageSize={this.state.listQuery.numPerPage}
					onShowSizeChange={this.onShowSizeChange}
					pageSizeOptions={["10", "20", "50", "100"]}
					onChange={this.onChange}
					showSizeChanger
					showQuickJumper
					hideOnSinglePage={true}
				/>
			</div>
		)
	}
}

export default App
