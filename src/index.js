import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Auth0Provider from "./components/Auth/react-auth0-spa"
import { Provider } from "react-redux"
import { store } from "./utils/store"

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const domain = process.env.REACT_APP_OAUTH_DOMAIN
const client_id = process.env.REACT_APP_OAUTH_CLIENT_ID
ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      client_id={client_id}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>,

  document.getElementById("root")
)
