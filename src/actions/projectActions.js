import axios from "axios"
import { baseProjectsUrl } from "../constants"
export const GET_PROJECTS_START = "GET_PROJECTS_START"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL"

export const getProjects = page => async dispatch => {
  dispatch({ type: GET_PROJECTS_START })

  try {
    const result = await axios.get(`${baseProjectsUrl}?page=${page}`)
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: result.data })
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAIL, payload: err })
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
    dispatch(getProjects())
  } catch (err) {
    dispatch({ type: ADD_PROJECTS_FAIL, payload: err })
  }
}
