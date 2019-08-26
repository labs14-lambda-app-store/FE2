import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../actions"

const initialState = {
  user: null,
  message: "",
  isLoggingIn: false,
  isUpdating: false,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        isLoggingIn: false,
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        message: action.payload.message,
        isLoggingIn: false,
      }
    case UPDATE_USER_START:
      return {
        ...state,
        isUpdating: true,
        message: "",
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        message: action.payload.message,
      }
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isUpdating: false,
        message: `it's not that easy. ${action.payload}`,
      }
    case GET_USER_START:
      return {
        ...state,
        isFetching: true,
      }
    case GET_USER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      }
    case GET_USER_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default usersReducer
