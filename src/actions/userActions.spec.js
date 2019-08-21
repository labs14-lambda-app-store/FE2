import React from "react"
import { Provider } from "react-redux"
import { store } from "../utils/store"
// import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
// import usersReducer from "../reducers"
// import loginUser from "./userActions"

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
// const mockServiceCreator = (body, succeeds = true) => () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10)
//   })

describe("authenticate action", () => {
  // let store
  // set up a fake store for all our tests
  // beforeEach(() => {
  //   store = mockStore({
  //     username: "lambda.app.store",
  //     password: "B3stTe@mEver"
  //   })
  // })

  describe("when a user logs in", () => {
    it("fires a login request action", () => {
      // store.dispatch(
      //   loginUser(
      //     { username: "lambda.app.store", password: "B3stTe@mEver" },
      //     mockServiceCreator(REQUIRED_BODY)
      //   )
      //     .then(() => expectExport(store.getActions()).toContainEqual({ type: LOGIN_USER_START }))
      // )
    })
    describe("when login succeeds", () => {
      // beforeEach(() => {
      //   store.dispatch(loginUser(
      //     { username: "lambda.app.store", password: "B3stTe@mEver" },
      //     mockServiceCreator(REQUIRED_BODY)
      //   ))
      // })
      it("dispatches action to store user data", () => {
      //   const actions = store.getActions()
      //   const { username, password } = REQUIRED_BODY
      //   expect(actions).toContainEqual({ type: LOGIN_USER_SUCCESS, payload: {username, password}})
      })
    })
    
  })
})
