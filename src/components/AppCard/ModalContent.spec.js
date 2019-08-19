import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/cleanup-after-each"
import { render } from "@testing-library/react"
import ModalContent from "./ModalContent";

describe("<ModalContent />", () => {
  const app = {
    "id": 6,
    "name": "FancyPlants",
    "is_approved": true,
    "description": "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
    "hosted_url": "https://en.wikipedia.org/wiki/Animal_Crossing",
    "frontend_url": "https://github.com/labs14-lambda-app-store/be2",
    "backend_url": "https://github.com/labs14-lambda-app-store/FE2",
    "display_image": "https://source.unsplash.com/700x390/?flowers,wildflowers",
    "category_id": 4,
  }
  it("should render the App component without errors", async () => {
    await render(<ModalContent app={app}/>)
  })
  it("Should find github text", async () => {
    // render(<ModalContent app={app}/>)
    const { getByText } = await render(<ModalContent app={app}/>);
      // find the button
      getByText(/Github/i);

    //   // confirm that "Github" is there
    
  })
})
