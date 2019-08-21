import React from "react"
import { Provider } from "react-redux"
import { store } from "../../utils/store"
import ReactDOM from "react-dom"
import "@testing-library/jest-dom"
import { render, cleanup } from "@testing-library/react"
import AppDetails from "./AppDetails"
import AppForm from "./AppForm"
import NavBar from '../reusable/NavBar'
import Confirm from './Confirm'
import Success from './Success'

afterEach(cleanup)

describe("<AppForm />", () => {
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
  it("renders without crashing", () => {
    render(<Provider store={store}><AppForm app={app}/></Provider>)
  })
  it("should find h1 title", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Submit Your App/i)
  })
  it("should find input Categories", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Categories/i)
  })
  it("should find input App Name", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/App Name/i)
  })
  it("should find input Description", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Description/i)
  })
  it("should find input Hosted Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Hosted URL/i)
  })
  it("should find input frontend Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Frontend URL/i)
  })
  it("should find input backend Url", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Backend URL/i)
  })
  it("should find button Continue", () => {
      const {getByText} = render(<Provider store={store}><AppForm app={app}/></Provider>)
      getByText(/Continue/i)
  })

})

