import axios from "axios"
import { baseCommentsUrl } from "../constants"
export const ADD_COMMENT_START = "ADD_COMMENT_START"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_FAIL = "ADD_COMMENT_FAIL"

export const addComment = newComment => async dispatch => {
  dispatch({ type: ADD_COMMENT_START })

  try {
    const postResult = await axios.post(baseCommentsUrl, newComment)
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: postResult })
  } catch (err) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: err })
  }
}
