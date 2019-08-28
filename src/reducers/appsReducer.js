import {
  GET_APPROVED_APPS_START,
  GET_APPROVED_APPS_SUCCESS,
  GET_APPROVED_APPS_FAIL,
  GET_PENDING_APPS_START,
  GET_PENDING_APPS_SUCCESS,
  GET_PENDING_APPS_FAIL,
  SEARCH_APPS_START,
  SEARCH_APPS_SUCCESS,
  SEARCH_APPS_FAIL,
  ADD_APPS_START,
  ADD_APPS_SUCCESS,
  ADD_APPS_FAIL,
  UPDATE_APPS_START,
  UPDATE_APPS_SUCCESS,
  UPDATE_APPS_FAIL,
  DELETE_APPS_START,
  DELETE_APPS_SUCCESS,
  DELETE_APPS_FAIL,
} from "../actions"

const initialState = {
  apps: [],
  approvedAppsLength: null,
  pendingAppsLength: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  message: "",
  request_status: "",
}

const appsReducer = (state = initialState, action) => {
  //approved apps cases
  switch (action.type) {
    case GET_APPROVED_APPS_START:
      return {
        ...state,
        isFetching: true,
      }
    case GET_APPROVED_APPS_SUCCESS:
      return {
        ...state,
        apps: action.payload,
        approvedAppsLength: action.appLength,
        isFetching: false,
      }
    case GET_APPROVED_APPS_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    //pending apps cases

    case GET_PENDING_APPS_START:
      return {
        ...state,
        isFetching: true,
      }
    case GET_PENDING_APPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        apps: action.payload,
        pendingAppsLength: action.appLength,
      }
    case GET_PENDING_APPS_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    //searching apps cases

    case SEARCH_APPS_START:
      return {
        ...state,
        isFetching: true,
      }
    case SEARCH_APPS_SUCCESS:
      return {
        ...state,
        apps: action.payload,
        approvedAppsLength: action.appLength,
        pendingAppsLength: action.appLength,
        isFetching: false,
      }
    case SEARCH_APPS_FAIL:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      }
    //app creation, update and delete cases
    case ADD_APPS_START:
      return {
        ...state,
        isAdding: true,
        message: "",
        request_status: "",
      }
    case ADD_APPS_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: action.payload.data.message,
        status_code: action.payload.status,
      }
    case ADD_APPS_FAIL:
      return {
        ...state,
        isAdding: false,
        message: "Failed to create app. Please try again",
        request_status: action.payload.status,
      }
    case UPDATE_APPS_START:
      return {
        ...state,
        isUpdating: true,
        message: "",
      }
    case UPDATE_APPS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        message: action.payload.message,
      }
    case UPDATE_APPS_FAIL:
      return {
        ...state,
        isUpdating: false,
        message: action.payload,
      }
    case DELETE_APPS_START:
      return {
        ...state,
        isDeleting: true,
        message: "",
      }
    case DELETE_APPS_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        message: action.payload.data.message,
      }
    case DELETE_APPS_FAIL:
      return {
        ...state,
        isDeleting: false,
        message: action.payload,
      }
    default:
      return state
  }
}

export default appsReducer
