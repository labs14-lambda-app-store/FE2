import React from "react"
import uxPlaceholderImg from "../../assets/LambdaLandingUX.jpeg"
import { Header } from "../reusable";

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
