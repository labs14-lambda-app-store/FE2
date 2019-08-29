import axios from "axios"
import Cookie from "js-cookie"
import { baseUsersUrl } from "../constants"

export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

// checks for user_id cookie set on successful login and returns or creates a user based off of it
export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START })
  //check for cookie
  const userID = Cookie.get("user_id")

  try {
    let result = null
    //if cookie with userID exists, get user with ID in database
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
      //checks for user object to ensure block only runs for user creation
    } else if (user) {
      //post request returns user data if user is already in DB or creates user then returns user
      result = await axios.post(`${baseUsersUrl}`, user)
      //sets user_id cookie when user logs in - expires in 7 days
      Cookie.set("user_id", `${result.data.user.id} `, { expires: 7 })
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: result.data,
      })
    }
  } catch (e) {
    dispatch({ type: LOGIN_USER_FAIL, payload: e.message })
  }
}

export const UPDATE_USER_START = "UPDATE_USER_START"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"

export const updateUser = (change, id) => async dispatch => {
  dispatch({ type: UPDATE_USER_START })

  try {
    const putResult = await axios.put(`${baseUsersUrl}/${id}`, change)
    dispatch({ type: UPDATE_USER_SUCCESS, payload: putResult })
  } catch (err) {
    dispatch({ type: UPDATE_USER_FAIL, payload: err })
  }
}

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAIL = "GET_USER_FAIL"

export const getUser = id => async dispatch => {
  dispatch({ type: GET_USER_START })

  try {
    const result = await axios.get(`${baseUsersUrl}/${id}`)
    dispatch({
      type: GET_USER_SUCCESS,
      payload: result.data,
    })
  } catch (err) {
    dispatch({ type: GET_USER_FAIL, payload: err })
  }
}
