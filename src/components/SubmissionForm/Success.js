import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const Success = props => {
  const { addAppSuccessMessage } = props

  useEffect(() => {
    const timer = setTimeout(() => {
      props.history.push("/apps")
    }, 3500)
    return () => clearTimeout(timer)
  }, [props.history, addAppSuccessMessage])

  return (
    <div className="submission">
      {addAppSuccessMessage ? (
        <i class="fas fa-check-circle fa-lg"></i>
      ) : (
        <i class="fas fa-times-circle fa-lg"></i>
      )}
    </div>
  )
}

const mapStateToProps = ({ appsReducer }) => {
  return {
    addAppSuccessMessage: appsReducer.addAppSuccessMessage,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Success)
)
