import React from "react"
import { Provider } from "react-redux"
import { store } from "../../utils/store"
import { render } from "@testing-library/react"
import Confirm from "./Confirm"

describe("<Confirm />", () => {
  const app = {
    id: 6,
    name: "FancyPlants",
    is_approved: true,
    description:
      "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
    hosted_url: "https://en.wikipedia.org/wiki/Animal_Crossing",
    frontend_url: "https://github.com/labs14-lambda-app-store/be2",
    backend_url: "https://github.com/labs14-lambda-app-store/FE2",
    display_image: "https://source.unsplash.com/700x390/?flowers,wildflowers",
    category_id: 4,
  }
  const {
    id,
    name,
    is_approved,
    description,
    hosted_url,
    frontend_url,
    backend_url,
    display_image,
    category_id,
  } = app

  it("should render the App component without errors", async () => {
//     await render(
//       <Provider store={store}>
//         <Confirm app={app} />
//       </Provider>
//       expect()
//     )
  })
})
