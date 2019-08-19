import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/cleanup-after-each"
import { render } from "@testing-library/react"
import AppModal from "../components/AppCard/AppModal"
import NavBar from "../components/reusable/NavBar"

describe("<AppModal />", () => {
  it("should render the App component without errors", () => {
    render(<AppModal />)
    const { getAllByText } = render(<AppModal />);
      // find the button
      const text = getAllByText(/Hello/i);

    //   // confirm that "View Website" is there
      expect(queryAllByText(/Hello/i)).toBeTruthy();
  })
  // it("should render the App component without errors", () => {
  //   render(<NavBar />)
  // })
})
