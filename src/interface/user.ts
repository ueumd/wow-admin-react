export interface IUserLoginReq {
  password: string
  username: string
}

export interface IUserLoginRes {
  token: string
  uid: string
  username: string
}
