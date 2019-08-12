import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from "../actions"

const initialState = {
  message: "",
  isAdding: false,
  error: null,
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_START:
      return {
        ...state,
        isAdding: true,
        error: null,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: action.payload,
        error: null,
      }
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        isAdding: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default commentsReducer
