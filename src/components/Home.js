import React from "react"
import lambdaLandingUX from "../assets/LambdaLandingUX.png"

const Home = () => {
  return (
    <div landing-page>
      <img
        className="landingMockup"
        src={lambdaLandingUX}
        alt="lambda landing page mockup"
      />
      <div className="landing-page coming-soon">COMING SOON!</div>
    </div>
  )
}

export default Home
