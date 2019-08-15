import React from "react";
import lambdaStudent from '../../assets/lambda-student.png'

export default function Header() {
  return (
    <header>
      <div className="home-header">
        <p>Lambda App Store</p>
        <img src={lambdaStudent} alt='lambda-student-header'></img>
      </div>
    </header>
  );
}
