import React, { useState } from "react"
import axios from "axios"
const ImageUpload = props => {
// })
  return (
    <div className="card">
      <img src={imgPreviewUrl} id="img-preview" />
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
