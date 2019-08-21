import React from "react"
import { Provider } from "react-redux"
import { store } from "../../utils/store"
import ReactDOM from "react-dom"
import "@testing-library/jest-dom"
import { render, fireEvent, cleanup } from "@testing-library/react"
import AppDetails from "./AppDetails"
import AppForm from "./AppForm"
import NavBar from '../reusable/NavBar'
import Confirm from './Confirm'
import Success from './Success'

afterEach(cleanup)

describe("<AppForm />", () => {
     
  it("renders without crashing", () => {
    render(<Provider store={store}><AppForm /></Provider>)
  })
  it("should find h1 element with title 'submit your app'", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Submit Your App/i)
  })
  it("should find input element Categories", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Categories/i)
  })
  it("should find input element App Name", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/App Name/i)
  })
  it("should find input element Description", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Description/i)
  })
  it("should find input element Hosted Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Hosted URL/i)
  })
  it("should find input element Frontend Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Frontend URL/i)
  })
  it("should find input element Fackend Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm /></Provider>)
      getByText(/Backend URL/i)
  })
  it("should find button element Continue", () => {
      const {getByText, queryByText} = render(<Provider store={store}><AppForm /></Provider>)
      const button = getByText(/Continue/i);
      fireEvent.click(button);
      expect(queryByText(/continue/i)).toBeTruthy();
  })
  it("renders AppDetails without crashing", async () => {
      const state = {
            "name": "FancyPlants",
            "description": "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
            "hosted_url": "https://en.wikipedia.org/wiki/Animal_Crossing",
            "frontend_url": "https://github.com/labs14-lambda-app-store/be2",
            "backend_url": "https://github.com/labs14-lambda-app-store/FE2",
            "display_image": "https://source.unsplash.com/700x390/?flowers,wildflowers",
          }
      await render(<Provider store={store}><AppDetails state={state} /></Provider>)
    })
   
    

})

