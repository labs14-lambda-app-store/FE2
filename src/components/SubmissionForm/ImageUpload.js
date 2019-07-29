import React, { useState } from "react"
import axios from "axios"

const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

const ImageUpload = props => {
  const [imgPreviewUrl, setImgPreviewUrl] = useState()

  const handleImage = async e => {
    let file = e.target.files[0]
    let formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", uploadPreset)

    axios
      .post(cloudinaryUrl, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(res => {
        setImgPreviewUrl(res.data.secure_url)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="card">
      <img src={imgPreviewUrl} id="img-preview" alt="Chosen file preview" />
      <label className="file-upload-container" htmlFor="file-upload">
        <input
          id="file-upload"
          onChange={e => handleImage(e)}
          type="file"
          style={{ display: "none" }}
        />
        Select an Image
      </label>
    </div>
  )
}

export default ImageUpload
