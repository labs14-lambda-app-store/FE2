import axios from "axios"

export const POST_IMAGE_START = "POST_IMAGE_START"
export const POST_IMAGE_FAIL = "POST_IMAGE_FAIL"
export const POST_IMAGE_SUCCESS = "POST_IMAGE_SUCCESS"

const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const sendImageToCloudinary = e => async dispatch => {
  dispatch({ type: POST_IMAGE_START })

  let file = e.target.files[0]
  let formData = new FormData()

  formData.append("file", file)
  formData.append("upload_preset", uploadPreset)

  try {
    const image = await axios.post(cloudinaryUrl, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    dispatch({ type: POST_IMAGE_SUCCESS, payload: image })
  } catch (err) {
    dispatch({ type: POST_IMAGE_FAIL, payload: err })
  }
}
