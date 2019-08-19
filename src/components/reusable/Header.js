import React from "react"
import lambdaStudentPic from "../../assets/lambda-student.png"

export default function Header() {
  return (
    <header>
      <div className="home-header">
        <p>Lambda App Store</p>
        <img src={lambdaStudentPic} alt="lambda-student-header"></img>
      </div>
    </header>
  )
}
