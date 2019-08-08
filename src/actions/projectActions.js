import axios from "axios"
import { baseProjectsUrl } from "../constants"
export const GET_PROJECTS_START = "GET_PROJECTS_START"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL"

export const getProjects = page => async dispatch => {
  dispatch({ type: GET_PROJECTS_START })

  try {
    const result = await axios.get(`${baseProjectsUrl}?page=${page}`)
    // payload = projects from backend; projectLength = project length from backend for pagination total
    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: result.data.projects,
      projectLength: result.data.projectLength,
    })
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAIL, payload: err })
  }
}

export const SEARCH_PROJECTS_START = "SEARCH_PROJECTS_START"
export const SEARCH_PROJECTS_SUCCESS = "SEARCH_PROJECTS_SUCCESS"
export const SEARCH_PROJECTS_FAIL = "SEARCH_PROJECTS_FAIL"

export const searchProjects = (page, search) => async dispatch => {
  dispatch({ type: SEARCH_PROJECTS_START })

  try {
    const result = await axios.get(
      `${baseProjectsUrl}?page=${page}&search=${search}`
    )
    // payload = projects from backend; projectLength = project length from backend for pagination total
    dispatch({
      type: SEARCH_PROJECTS_SUCCESS,
      payload: result.data.projects,
      projectLength: result.data.projectLength,
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
    dispatch(getProjects())
  } catch (err) {
    dispatch({ type: ADD_PROJECTS_FAIL, payload: err })
  }
}

export const UPDATE_PROJECTS_START = "UPDATE_PROJECTS_START"
export const UPDATE_PROJECTS_SUCCESS = "UPDATE_PROJECTS_SUCCESS"
export const UPDATE_PROJECTS_FAIL = "UPDATE_PROJECTS_FAIL"

export const updateProject = (project, id) => async dispatch => {
  dispatch({ type: UPDATE_PROJECTS_START })

  try {
    const putResult = await axios.put(`${baseProjectsUrl}/${id}`, project)
    dispatch({ type: UPDATE_PROJECTS_SUCCESS, payload: putResult })
  } catch (err) {
    dispatch({ type: UPDATE_PROJECTS_FAIL, payload: err })
  }
}

export const DELETE_PROJECTS_START = "DELETE_PROJECTS_START"
export const DELETE_PROJECTS_SUCCESS = "DELETE_PROJECTS_SUCCESS"
export const DELETE_PROJECTS_FAIL = "DELETE_PROJECTS_FAIL"

export const deleteProject = ( id) => async dispatch => {
  dispatch({ type: DELETE_PROJECTS_START })

  try {
    const deleteResult = await axios.delete(`${baseProjectsUrl}/${id}`)
    dispatch({ type: DELETE_PROJECTS_SUCCESS, payload: deleteResult })
  } catch (err) {
    dispatch({ type: DELETE_PROJECTS_FAIL, payload: err })
  }
}