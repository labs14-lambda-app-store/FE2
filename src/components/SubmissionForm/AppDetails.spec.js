import React from "react"
import { Provider } from "react-redux"
import { store } from "../../utils/store"
import ReactDOM from "react-dom"
import "@testing-library/jest-dom"
import { render, fireEvent, cleanup } from "@testing-library/react"
import AppDetails from "./AppDetails"

afterEach(cleanup)

describe("<AppDetails />", () => {
      it("renders AppDetails without crashing", async () => {
            const state = {
                  "name": "FancyPlants",
                  "description": "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
                  "hosted_url": "https://en.wikipedia.org/wiki/Animal_Crossing",
                  "frontend_url": "https://github.com/labs14-lambda-app-store/be2",
                  "backend_url": "https://github.com/labs14-lambda-app-store/FE2",
                  "display_image": "https://source.unsplash.com/700x390/?flowers,wildflowers",
                }
            await render(<Provider store={store}><AppDetails state={state} select="children"/></Provider>)
          })
})