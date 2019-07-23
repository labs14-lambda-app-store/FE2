import axios from 'axios'

export const GET_PROJECTS_START = 'GET_PROJECTS_START'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAIL = 'GET_PROJECTS_FAIL'

export const getProjects = () => dispatch => {
  dispatch({ type: GET_PROJECTS_START})

  return axios
    .get(`https://lambdaappstore2.herokuapp.com/api/projects`)
    .then(res => {
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: GET_PROJECTS_FAIL, payload: err})
    })
}
