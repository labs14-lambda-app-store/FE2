import { combineReducers } from "redux"
import projectsReducer from "./projectsReducer"
import imagesReducer from "./imagesReducer"
export default combineReducers({
  projectsReducer,
  imagesReducer,
})
