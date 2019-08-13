import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

//redirects user if not logged in - takes an optional adminRoute boolean to enable admin role checking on user
const ProtectedRoute = ({
  component: Component,
  role,
  adminRoute,
  ...rest
}) => {
  //if adminRoute is true and user role not admin - redirect user to home page
  if (adminRoute && role !== "admin") {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  } else {
    //if not adminRoute not true, hit else block and return component if logged in, else return redirect to home page
    return (
      <Route
        {...rest}
        render={props =>
          role ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    ...usersReducer.user,
  }
}

export default connect(
  mapStateToProps,
  {}
)(ProtectedRoute)
