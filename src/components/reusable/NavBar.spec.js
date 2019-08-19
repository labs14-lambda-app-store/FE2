import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/cleanup-after-each"
import { render, fireEvent } from "@testing-library/react"

import NavBar from "./NavBar.js"

describe("<NavBar />", () => {
  it("should render the NavBar component without errors", () => {
    render(<NavBar />)
  })
  it('Navbar Apps', () => {
      const { getByText } = render(<NavBar />);
    //   const { queryByText } = render(<Control />);
      // find the button
      const button = getByText(/Apps/i);

      // click it
      fireEvent.click(button);

    //   // confirm that "Apps" is there
      expect(queryByText(/Apps/i)).toBeTruthy();
    });
})
