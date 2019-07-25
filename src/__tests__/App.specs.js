import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/cleanup-after-each"
import { render } from "@testing-library/react"
import App from "../App"

describe("<App />", () => {
  it("should render the App component without errors", () => {
    render(<App />)
  })
})
