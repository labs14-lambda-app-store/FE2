import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  ADD_PROJECTS_START,
  ADD_PROJECTS_SUCCESS,
  ADD_PROJECTS_FAIL,
} from "../actions"

const initialState = {
  projects: [],
  projectLength: null,
  isFetching: false,
  isAdding: false,
  message: "",
}

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_START:
      return {
        ...state,
        isFetching: true,
      }
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        projectLength: action.projectLength,
        isFetching: false,
      }
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    case ADD_PROJECTS_START:
      return {
        ...state,
        isAdding: true,
        message: "",
      }
    case ADD_PROJECTS_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: action.payload.data.message,
      }
    case ADD_PROJECTS_FAIL:
      return {
        ...state,
        isAdding: false,
        message: "Could not add project...",
      }
    default:
      return state
  }
}

export default projectsReducer
