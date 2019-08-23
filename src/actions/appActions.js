import axios from "axios"
import { baseAppsUrl } from "../constants"
export const GET_APPROVED_APPS_START = "GET_APPROVED_APPS_START"
export const GET_APPROVED_APPS_SUCCESS = "GET_APPROVED_APPS_SUCCESS"
export const GET_APPROVED_APPS_FAIL = "GET_APPROVED_APPS_FAIL"

export const getApprovedApps = page => async dispatch => {
  dispatch({ type: GET_APPROVED_APPS_START })

  try {
    const result = await axios.get(`${baseAppsUrl}?page=${page}&approved=true`)

    // payload = apps from backend; appLength = app length from backend for pagination total
    dispatch({
      type: GET_APPROVED_APPS_SUCCESS,
      payload: result.data.apps,
      appLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: GET_APPROVED_APPS_FAIL, payload: err })
  }
}

export const GET_PENDING_APPS_START = "GET_PENDING_APPS_START"
export const GET_PENDING_APPS_SUCCESS = "GET_PENDING_APPS_SUCCESS"
export const GET_PENDING_APPS_FAIL = "GET_PENDING_APPS_FAIL"

export const getPendingApps = page => async dispatch => {
  dispatch({ type: GET_PENDING_APPS_START })

  try {
    const result = await axios.get(`${baseAppsUrl}?page=${page}&approved=false`)

    // payload = apps from backend; appLength = app length from backend for pagination total
    dispatch({
      type: GET_PENDING_APPS_SUCCESS,
      payload: result.data.apps,
      appLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: GET_PENDING_APPS_FAIL, payload: err })
  }
}

export const SEARCH_APPS_START = "SEARCH_APPS_START"
export const SEARCH_APPS_SUCCESS = "SEARCH_APPS_SUCCESS"
export const SEARCH_APPS_FAIL = "SEARCH_APPS_FAIL"

export const searchApps = (page, search, filter) => async dispatch => {
  dispatch({ type: SEARCH_APPS_START })

  try {
    const result = await axios.get(
      `${baseAppsUrl}?page=${page}&search=${search}&approved=${filter}`
    )
    // payload = apps from backend; appLength = app length from backend for pagination total

    dispatch({
      type: SEARCH_APPS_SUCCESS,
      payload: result.data.apps,
      appLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: SEARCH_APPS_FAIL, payload: err })
  }
}

export const ADD_APPS_START = "ADD_APPS_START"
export const ADD_APPS_SUCCESS = "ADD_APPS_SUCCESS"
export const ADD_APPS_FAIL = "ADD_APPS_FAIL"

export const addApp = (newApp, history) => async dispatch => {
  dispatch({ type: ADD_APPS_START })
  try {
    const postResult = await axios.post(baseAppsUrl, newApp)
    dispatch({ type: ADD_APPS_SUCCESS, payload: postResult })
    setTimeout(() => history.push("/apps"), 3000)
  } catch (err) {
    dispatch({ type: ADD_APPS_FAIL, payload: err })
  }
}

export const UPDATE_APPS_START = "UPDATE_APPS_START"
export const UPDATE_APPS_SUCCESS = "UPDATE_APPS_SUCCESS"
export const UPDATE_APPS_FAIL = "UPDATE_APPS_FAIL"

export const updateApp = (app, id) => async dispatch => {
  dispatch({ type: UPDATE_APPS_START })

  try {
    const putResult = await axios.put(`${baseAppsUrl}/${id}`, app)
    dispatch({ type: UPDATE_APPS_SUCCESS, payload: putResult })
  } catch (err) {
    dispatch({ type: UPDATE_APPS_FAIL, payload: err })
  }
}

export const DELETE_APPS_START = "DELETE_APPS_START"
export const DELETE_APPS_SUCCESS = "DELETE_APPS_SUCCESS"
export const DELETE_APPS_FAIL = "DELETE_APPS_FAIL"

export const deleteApp = id => async dispatch => {
  dispatch({ type: DELETE_APPS_START })

  try {
    const deleteResult = await axios.delete(`${baseAppsUrl}/${id}`)
    dispatch({ type: DELETE_APPS_SUCCESS, payload: deleteResult })
  } catch (err) {
    dispatch({ type: DELETE_APPS_FAIL, payload: err })
  }
}
