import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import Loader from "react-loader-spinner"
import { connect } from "react-redux"

const Success = props => {
  const { addAppSuccessMessage, isAdding } = props

  useEffect(() => {
    const timer = setTimeout(() => {
      props.history.push("/apps")
    }, 3500)
    return () => clearTimeout(timer)
  }, [props.history, addAppSuccessMessage])

  return (
    <div className="submission">
      {isAdding ? (
        <div className="submitPending"><Loader type="ThreeDots" height={80} width={80} /></div>
      ) : !addAppSuccessMessage ? (
        <i className="fas fa-times-circle fa-lg submitFail"></i>
      ) : (
        <i className="fas fa-check-circle fa-lg submitSuccess"></i>
      )}
    </div>
  )
}

const mapStateToProps = ({ appsReducer }) => {
  return {
    addAppSuccessMessage: appsReducer.addAppSuccessMessage,
    isAdding: appsReducer.isAdding,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Success)
)
