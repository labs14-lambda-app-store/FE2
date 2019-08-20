import React from "react"
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom"
import "@testing-library/react/cleanup-after-each"
import { render } from "@testing-library/react"
import AppDetails from "./AppDetails";
import Confirm from "./Confirm";
import Success from "./Success";

describe("<AppForm />", () => {
      it("should render <AppDetails /> without errors", async () => {
            await render(<AppDetails />)
      });
      it("should render <Confirm /> without errors", async () => {
            await render(<Confirm />)
      });
      it("should render <Success /> without errors", async () => {
            await render(<Success />)
      })
})