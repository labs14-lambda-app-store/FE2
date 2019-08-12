import React, { useState, useEffect, useContext } from "react"
import createAuth0Client from "@auth0/auth0-spa-js"
import { loginUser } from "../../actions"
import { connect } from "react-redux"

//https://github.com/auth0/auth0-spa-js - refer for further details on auth usage

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext()
export const useAuth0 = () => useContext(Auth0Context)
const Auth0Provider = ({
  children,
  loginUser,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useState()
  const [auth0Client, setAuth0] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions)
      setAuth0(auth0FromHook)

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()

        //sent to backend to check if user from auth0 exists in // DB and returns user
        const retrieveUser = {
          username: user.nickname,
          email: user.email,
          sub_id: user.sub,
          first_name: user.given_name,
          last_name: user.family_name,
          pictureURL: user.picture,
        }
        loginUser(retrieveUser)

        setUser(user)
      }

      setLoading(false)
    }
    initAuth0()
    //eslint-disable-next-line
  }, [])

  const handleRedirectCallback = async () => {
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const user = await auth0Client.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}

export default connect(
  null,
  { loginUser }
)(Auth0Provider)
