import React, { useState } from "react"
import { connect } from "react-redux"
import { sendImageToCloudinary } from "../../actions"
import {DropzoneArea} from 'material-ui-dropzone'

// const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL
// const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

const ImageUpload = props => {

  return (
    <div className="card">

      <DropzoneArea filesLimit={1} acceptedFiles={['image/*']} onChange={e =>  
        props.sendImageToCloudinary(e)}/>
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
