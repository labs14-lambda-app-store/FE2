import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../actions"

const initialState = {
  user: null,
  message: "",
  isLoggingIn: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOGIN_USER_SUCCESS:
      console.log(action)
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
    default:
      return state
  }
}

export default usersReducer
