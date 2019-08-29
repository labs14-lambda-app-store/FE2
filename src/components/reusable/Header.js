import React from "react"
import { withRouter } from 'react-router'

import lambdaStudentPic from "../../assets/lambda-student.png"

const Header = ({ location }) => {
  if (location.pathname === "/dashboard") {
    return null;
  } else {
    return (
      <header>
        <div className="home-header">
          <p>Lambda App Store</p>
          <img src={lambdaStudentPic} alt="lambda-student-header"></img>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);