import React from "react"
// import ReactDOM from 'react-dom'
import "@testing-library/jest-dom"
import { render, cleanup } from "@testing-library/react"
import AppDetails from "./AppDetails"
import AppForm from "./AppForm"
// import Confirm from "./Confirm"
// import Success from "./Success"

afterEach(cleanup)

describe("<AppForm />", () => {
  it("renders without errors", () => {
    render(<AppForm />)
  })
})

describe("<AppDetails />", () => {
  it("renders without errors", () => {
    const { form } = render(<AppDetails />)
    expect(form).toHaveClass("submission")
  })
})

//   it("should render <Confirm /> without errors", async () => {
//         // await render(<Confirm />)
//   });
//   it("should render <Success /> without errors", async () => {
//         // await render(<Success />)
//   })
