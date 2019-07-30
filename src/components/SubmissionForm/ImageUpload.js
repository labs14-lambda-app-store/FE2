import React, { useState } from "react"
import { connect } from "react-redux"
import { sendImageToCloudinary } from "../../actions"
import {DropzoneArea} from 'material-ui-dropzone'

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
