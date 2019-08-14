import { combineReducers } from "redux"
import appsReducer from "./appsReducer"
import imagesReducer from "./imagesReducer"
import usersReducer from "./usersReducer"
import commentsReducer from "./commentsReducer"
export default combineReducers({
  appsReducer,
  imagesReducer,
  usersReducer,
  commentsReducer,
})
