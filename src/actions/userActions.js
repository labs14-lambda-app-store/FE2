import axios from "axios"
import Cookie from "js-cookie"
import { baseUsersUrl } from "../constants"
export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START })
  const userID = Cookie.get("user_id")

  try {
    let result = null
    //if userID stored in cookie, get user with ID in database
    if (userID) {
      result = await axios.get(`${baseUsersUrl}/${userID}`)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: {
            ...result.data,
          },
        },
      })
    } else {
      //post request returns user data if user is already in DB or creates user then returns user
      result = await axios.post(`${baseUsersUrl}`, user)
      //sets user_id cookie when user logs in - expires in 7 days
      console.log(result.data.user.id)
      Cookie.set("user_id", `${result.data.user.id}`, { expires: 7 })
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: result.data,
      })
    }
  } catch (e) {
    dispatch({ type: LOGIN_USER_FAIL, payload: e.message })
  }
}
