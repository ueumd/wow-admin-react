import type { MockMethod } from 'vite-plugin-mock'

const menus = [
  {
    _id: '6281cf1b1424d9aa31b7a234',
    rid: 3,
    pid: 0,
    path: '/book',
    name: 'Book',
    icon: 'goods',
    title: '书籍管理'
  },
  {
    _id: '6281cf1b1424d9aa31b7aqq1',
    rid: 4,
    pid: 3,
    path: '/book/list',
    name: 'BookList',
    icon: 'AddLocation',
    title: '书籍列表'
  },
  {
    _id: '6281cf1b1424d9aa31b7a51e',
    rid: 5,
    pid: 3,
    path: '/book/test',
    name: 'BookTest',
    icon: 'List',
    title: '测试'
  }
]

export default [
  {
    url: '/web/api/login',
    method: 'post',
    response: ({ body }) => {
      console.log(body)
      return {
        code: 0,
        msg: 'success',
        data: {
          token: 'eyJhbGciInR5cCI6IkpXVCJ9.eyJpZzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1OTYwMTU1OX0.NemTFPTtHDO23e39NYUPk8',
          uid: '6281d355ebd7058a7e93c82c',
          username: 'admin'
        }
      }
    }
  },
  {
    url: '/web/api/logout',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  },
  {
    url: '/web/api/test',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: {
          userId: '1',
          username: 'admin',
          desc: 'manager',
          token: 'fakeToken1'
        }
      }
    }
  },
  {
    url: '/web/api/user/getUserMenu',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: menus
      }
    }
  }
] as MockMethod[]
