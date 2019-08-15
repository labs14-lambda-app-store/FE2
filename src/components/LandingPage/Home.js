import React from "react"
import lambdaLandingUX from "../../assets/LambdaLandingUX.png"

const Home = () => {
  return (
    <>
      <h1 className="comingSoon">COMING SOON</h1>
      <img
        className="landingMockup"
        src={lambdaLandingUX}
        alt="lambda landing page mockup"
      />
    </>
  )
}

export default Home
