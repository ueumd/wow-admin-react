import { makeAutoObservable } from "mobx"

class User {
  userinfo = {}
  constructor() {
    makeAutoObservable(this)
  }

  setUserinfo(obj) {
    this.userinfo = obj
  }
}

export default new User()
