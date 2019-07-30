import React, { useState } from "react"
import { connect } from "react-redux"
import { sendImageToCloudinary } from "../../actions"

const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

const ImageUpload = props => {
  return (
    <div className="card">
      <img src={""} id="img-preview" alt="Chosen file preview" />
      <label className="file-upload-container" htmlFor="file-upload">
        <input
          id="file-upload"
          onChange={e => props.sendImageToCloudinary(e)}
          type="file"
          style={{ display: "none" }}
        />
        Select an Image
      </label>
    </div>
  )
}

const mapStateToProps = ({ imagesReducer }) => {
  return {
    ...imagesReducer,
  }
}

export default connect(
  mapStateToProps,
  { sendImageToCloudinary }
)(ImageUpload)
