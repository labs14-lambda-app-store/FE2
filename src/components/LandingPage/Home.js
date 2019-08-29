import React from "react"

import { Header } from "../reusable"
import uxPlaceholderImg from "../../assets/LambdaLandingUX.jpeg"

const Home = () => {
  return (
    <div className="landing-page">
      <Header />
      <img
        className="landingMockup"
        src={uxPlaceholderImg}
        alt="lambda landing page mockup"
      />
      {/* <div className="coming-soon">COMING SOON!</div> */}
    </div>
  )
}

export default Home
