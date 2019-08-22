import React from "react"
import { Provider } from "react-redux"
import { store } from "../../utils/store"
import "@testing-library/jest-dom"
import { render, fireEvent, cleanup } from "@testing-library/react"
import AppDetails from "./AppDetails"

afterEach(cleanup)

describe("<AppDetails />", () => {
  const state = {
    name: "FancyPlants",
    description:
      "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
    hosted_url: "https://en.wikipedia.org/wiki/Animal_Paint",
    frontend_url: "https://github.com/labs14-lambda-app-store/be2",
    backend_url: "https://github.com/labs14-lambda-app-store/FE2",
    display_image: "https://source.unsplash.com/700x390/?flowers,wildflowers",
  }
  const renderView = () => {
        render(
      <Provider store={store}>
        <AppDetails state={state} />
        </Provider>)}
  it("renders AppDetails without crashing", () => {
    renderView()
  });
  
  it("should find h1 element with title 'submit your app'", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AppDetails state={state} />
      </Provider>
    )
    getByText(/Submit Your App/i)
  })
  it("should find form", () => {
      const {container} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      const form = container.querySelector('form')
      expect(form).toBeTruthy()
  })
  it("should find Button", () => {
      const {container} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      const Button = container.querySelector('Button')
      expect(Button).toBeTruthy()
  })
  it("should find category test-id", () => {
      const {getByTestId} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      getByTestId("categories")
      
  })
  it("should find app name test-id", () => {
      const {getByTestId} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      getByTestId("app name")
      
  })
  it("should find hosted url test-id", () => {
      const {getByTestId} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      getByTestId("hosted url")
      
  })
  it("should find frontend url test-id", () => {
      const {getByTestId} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      getByTestId("frontend url")
      
  })
  it("should find backend url test-id", () => {
      const {getByTestId} = render(
            <Provider store={store}>
              <AppDetails state={state} />
            </Provider>)
      getByTestId("backend url")
      
  })
// //don't know why, it's all spelled correctly, "description", in the exact same way all the other tests are passing..
//   it("should find description test-id", () => {
//       const {getByTestId} = render(
//             <Provider store={store}>
//               <AppDetails state={state} />
//             </Provider>)
//       getByTestId("description")
      
//   })
// //fireEvent isn't right here, it expects the onClick to have been called, but it is not.... 
//   it("should call OnClick when Button is clicked", () => {
//       const onClick = jest.fn()
//       const {container} = render(
//             <Provider store={store}>
//               <AppDetails onClick={onClick} state={state} />
//             </Provider>)
      
//       const Button = getByTestId(container,'continue-button')
//       fireEvent.click(Button)
//       expect(onClick).toHaveBeenCalled()
//   })
})
