Cypress.Commands.add('login', (overrides = {}) => {
      Cypress.log({
            name: 'loginWithAuth0',
      })

      const options = {
            method: 'POST',
            url: Cypress.env(REACT_APP_OAUTH_DOMAIN),
            body: {
                  grant_type: 'password',
                  username: Cypress.env('auth_username'),
                  password: Cypress.env('auth_password'),
                  audience: Cypress.env('auth_audience'),
                  scope: 'openid profile email',
                  client_id: Cypress.env(REACT_APP_OAUTH_CLIENT_ID),
                  client_secret: Cypress.env('auth_client_secret'),
            },
      };
      cy.request(options);
});

describe('/login', () => {
      beforeEach(() => {
            // cy.visit('/#/login')
      })
      it('greets with "sign in"', () => {
            // cy.contains('button', 'Sign In')
      })
      it('links to "/register"', () => {
            // cy.contains('a', "Sign Up")
      }) 
      it('requires an email', () => {

      })
      it('requires a password', () => {

      })
      it('requires a valid username and password', () => {

      })
      it('navigates to "/" on success', () => {

      })

})