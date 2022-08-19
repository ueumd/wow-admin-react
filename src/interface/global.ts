export interface IPageInfo {
  recordList: Array<any>
  totalCount: number
  // 判断时候显示分页
  pageCount: number
  // 每页页数
  numPerPage: number
  // 当前页数
  currentPage: number
}
