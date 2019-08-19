import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const Success = props => {
  const { addAppMessage } = props

  useEffect(() => {
    console.log("this is a screen", props)

    const timer = setTimeout(() => {
      props.history.push("/apps")
    }, 3500)
    return () => clearTimeout(timer)
  }, [props.history])

  return (
    <div className="submission">
      {addAppMessage === "App successfully created." ? (
        <i class="fas fa-check-circle fa-lg"></i>
      ) : (
        <i class="fas fa-times-circle fa-lg"></i>
      )}
    </div>
  )
}

const mapStateToProps = ({ appsReducer }) => {
  return {
    addAppMessage: appsReducer.addAppMessage,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Success)
)
