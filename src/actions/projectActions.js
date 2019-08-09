import axios from "axios"
import { baseProjectsUrl } from "../constants"
export const GET_APPROVED_PROJECTS_START = "GET_APPROVED_PROJECTS_START"
export const GET_APPROVED_PROJECTS_SUCCESS = "GET_APPROVED_PROJECTS_SUCCESS"
export const GET_APPROVED_PROJECTS_FAIL = "GET_APPROVED_PROJECTS_FAIL"

export const getApprovedProjects = page => async dispatch => {
  dispatch({ type: GET_APPROVED_PROJECTS_START })

  try {
    const result = await axios.get(
      `${baseProjectsUrl}?page=${page}&approved=true`
    )

    // payload = projects from backend; projectLength = project length from backend for pagination total
    dispatch({
      type: GET_APPROVED_PROJECTS_SUCCESS,
      payload: result.data.projects,
      projectLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: GET_APPROVED_PROJECTS_FAIL, payload: err })
  }
}

export const GET_PENDING_PROJECTS_START = "GET_PENDING_PROJECTS_START"
export const GET_PENDING_PROJECTS_SUCCESS = "GET_PENDING_PROJECTS_SUCCESS"
export const GET_PENDING_PROJECTS_FAIL = "GET_PENDING_PROJECTS_FAIL"

export const getPendingProjects = page => async dispatch => {
  dispatch({ type: GET_PENDING_PROJECTS_START })

  try {
    const result = await axios.get(
      `${baseProjectsUrl}?page=${page}&approved=false`
    )

    // payload = projects from backend; projectLength = project length from backend for pagination total
    dispatch({
      type: GET_PENDING_PROJECTS_SUCCESS,
      payload: result.data.projects,
      projectLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: GET_PENDING_PROJECTS_FAIL, payload: err })
  }
}

export const SEARCH_PROJECTS_START = "SEARCH_PROJECTS_START"
export const SEARCH_PROJECTS_SUCCESS = "SEARCH_PROJECTS_SUCCESS"
export const SEARCH_PROJECTS_FAIL = "SEARCH_PROJECTS_FAIL"

export const searchProjects = (page, search, filter) => async dispatch => {
  dispatch({ type: SEARCH_PROJECTS_START })

  try {
    const result = await axios.get(
      `${baseProjectsUrl}?page=${page}&search=${search}&approved=${filter}`
    )
    // payload = projects from backend; projectLength = project length from backend for pagination total
    console.log(result.data.length)

    dispatch({
      type: SEARCH_PROJECTS_SUCCESS,
      payload: result.data.projects,
      projectLength: result.data.length,
    })
  } catch (err) {
    dispatch({ type: SEARCH_PROJECTS_FAIL, payload: err })
  }
}

export const ADD_PROJECTS_START = "ADD_PROJECTS_START"
export const ADD_PROJECTS_SUCCESS = "ADD_PROJECTS_SUCCESS"
export const ADD_PROJECTS_FAIL = "ADD_PROJECTS_FAIL"

export const addProject = newProject => async dispatch => {
  dispatch({ type: ADD_PROJECTS_START })

  try {
    const postResult = await axios.post(baseProjectsUrl, newProject)
    dispatch({ type: ADD_PROJECTS_SUCCESS, payload: postResult })
    dispatch(getApprovedProjects())
  } catch (err) {
    dispatch({ type: ADD_PROJECTS_FAIL, payload: err })
  }
}
