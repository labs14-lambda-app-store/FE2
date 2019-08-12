import axios from "axios"
import { baseUsersUrl } from "../constants"
export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START })

  try {
    const result = await axios.post(`${baseUsersUrl}`, user)

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: result.data,
    })
  } catch (err) {
    dispatch({ type: LOGIN_USER_FAIL, payload: err.message })
  }
}
