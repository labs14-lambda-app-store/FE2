import { combineReducers } from "redux"
import projectsReducer from "./projectsReducer"
import imagesReducer from "./imagesReducer"
import usersReducer from "./usersReducer"
import commentsReducer from "./commentsReducer"
export default combineReducers({
  projectsReducer,
  imagesReducer,
  usersReducer,
  commentsReducer,
})
