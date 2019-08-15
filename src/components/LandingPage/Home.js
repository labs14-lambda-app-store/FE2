import React from "react"
import LambdaLandingUX from "../../assets/LambdaLandingUX.png"

const Home = () => {
  return (
    <div className="landing-page">
      <img
        className="landingMockup"
        src={LambdaLandingUX}
        alt="lambda landing page mockup"
      />
      <div className="coming-soon">COMING SOON!</div>
    </div>
  )
}

export default Home
