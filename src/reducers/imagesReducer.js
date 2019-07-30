import {
  POST_IMAGE_FAIL,
  POST_IMAGE_START,
  POST_IMAGE_SUCCESS,
} from "../actions"

const initalState = {
  isAdding: false,
  message: "",
  image: "",
}

const imagesReducer = (state = initalState, action) => {
  switch (action.type) {
    case POST_IMAGE_START:
      return {
        ...state,
        isAdding: true,
      }
    case POST_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload,
        isAdding: false,
      }
    case POST_IMAGE_FAIL:
      return {
        ...state,
        isAdding: false,
        message: action.payload,
      }
    default:
      return state
  }
}

export default imagesReducer
