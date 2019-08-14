import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

const Success = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.history.push("/apps")
    }, 4000)
    return () => clearTimeout(timer)
  }, [props.history])

  return (
    <div className="submission">
      <h1>Thanks for the submission!</h1>
      <p>You will be receiving a postcard with further instructions</p>
    </div>
  )
}

export default withRouter(Success)
