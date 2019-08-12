import axios from "axios"
import Cookie from "js-cookie"
import { baseUsersUrl } from "../constants"
export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START })

  try {
    //post request returns user data if user is already in DB or creates user then returns user
    const result = await axios.post(`${baseUsersUrl}`, user)
    //sets user_id cookie when user logs in - expires in 7 days
    Cookie.set("user_id", `${result.data.user.id}`, { expires: 7 })
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: result.data,
    })
  } catch (e) {
    dispatch({ type: LOGIN_USER_FAIL, payload: e.message })
  }
}

export const CHECK_COOKIE_LOGIN_START = "CHECK_COOKIE_LOGIN_START"
export const CHECK_COOKIE_LOGIN_SUCCESS = "CHECK_COOKIE_LOGIN_SUCCESS"
export const CHECK_COOKIE_LOGIN_FAIL = "CHECK_COOKIE_LOGIN_FAIL"

export const checkTokenLoginUser = async dispatch => {
  dispatch({ type: CHECK_COOKIE_LOGIN_START })

  const userID = Cookie.get("user_id")

  //checks cookie for user id key and gets user with that id from BE
  if (userID) {
    try {
      const user = await axios.get(`${baseUsersUrl}/${userID}`)
      dispatch({ type: CHECK_COOKIE_LOGIN_SUCCESS, payload: result })
    } catch (e) {
      dispatch({ type: CHECK_COOKIE_LOGIN_FAIL, payload: e.message })
    }
  }
}
