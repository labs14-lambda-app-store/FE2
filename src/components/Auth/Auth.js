import auth0 from 'auth0-js'

require('dotenv').config()

const domain = process.env.REACT_APP_OAUTH_DOMAIN
const clientID = process.env.REACT_APP_OAUTH_CLIENT_ID_DEV

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: domain,
      audience: `https://${domain}/userinfo`,
      clientID: clientID,
      redirectUri: 'http://localhost:3000/callback',
      responseType:'id_token token',
      scope: 'openid profile'
    })
  }

  getProfile = () => {
    return this.profile
  }

  getIdToken = () => {
    return this.idToken
  }

  isAuthenticated = () => {
    return new Date().getTime() < this.expiresAt;
  }

  signIn = () => {
    this.auth0.authorize({
      connection: 'google-oauth2'
    });
  }

  signOut = () => {
    this.auth0.logout({
      returnTo: window.location.origin,
      clientID
    })
  }
  setSession(authResult) {
    this.idToken = authResult.idToken
    this.profile = authResult.idTokenPayload
    this.expiresAt = authResult.idTokenPayload.exp * 1000
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if(err) return reject(err)
        if(!authResult || !authResult.idToken) {
          return reject(err)
        }

        this.setSession(authResult)

        resolve()
      })
    })
  }
}

const auth0Client = new Auth()

export default auth0Client
