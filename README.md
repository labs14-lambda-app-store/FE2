# Lambda App Store

<div align="center"><img src="./src/assets/Lambda_Logo.png" alt="logo"></div>

### Contributors:

|                                                      [Jeff Lapp](https://github.com/lappjeff)                                                      |                                                      [Chris Petito](https://github.com/chrispetito)                                                       |                                                     [James Starks](https://github.com/Shadowborn)                                                      |                                                    [Victor Ngyuen](https://github.com/victor082)                                                     |                                                      [Joshua Disney](https://github.com/Joshua-Disney)                                                       |                                                        [Kayla Crow](https://github.com/blackmacaroon)                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://github.com/lappjeff.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/lappjeff) | [<img src="https://github.com/chrispetito.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;"  />](https://github.com/chrispetito) | [<img src="https://github.com/Shadowborn.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/Shadowborn) | [<img src="https://github.com/victor082.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/victor082) | [<img src="https://github.com/Joshua-Disney.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/Joshua-Disney) | [<img src="https://github.com/blackmacaroon.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/blackmacaroon) |
|                               [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lappjeff)                                |                                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chrispetito)                                  |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Shadowborn)                                 |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/victor082)                                |                                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Joshua-Disney)                                  |                                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/blackmacaroon)                                  |
|      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jeffrey-lapp-622298181/)       |          [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chris-petito-349499184/)          |         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/james-starks-2547b392/)         |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/victor-nguyen-bb5898177/)       |           [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joshua-disney-553325176/)           |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kayla-crow/)                  |

<br>
<br>

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)
![React](https://img.shields.io/badge/React-v16.8.6-blue.svg)
![Redux](https://img.shields.io/badge/Redux-v4.0.4-orange.svg)
![auth0](https://img.shields.io/badge/auth0-v1.1.0-red.svg)
![Material UI](https://img.shields.io/badge/MaterialUI/core-v4.2.1-blueviolet.svg)

## Project Overview

[Trello Board](https://trello.com/b/8ek8Dqxo/labs-14-lambda-app-store)

[Vision Doc](https://www.notion.so/Lambda-App-Store-0a5cde7e511446e6af5f66dcd3d96579)

[UX Design files](https://docs.google.com/presentation/d/1upSlMfvh0DpfZR6eyFzHYUU6q_TCFpPPNxIYr8qJbzU/edit?usp=sharing)

Feature Canvases
[App Gallery](https://www.notion.so/App-Gallery-Feature-Canvas-7a6638a26940490f908506fee1c35fdf)
[Admin Dashboard](https://www.notion.so/Admin-Dashboard-Feature-Canvas-1d7dff49af804a8783f47aa8f0ec4418)
[Student Dashboard](https://www.notion.so/Student-Dashboard-Feature-Canvas-82a2b9b67be0472ea85786873b7f9b97)
[Landing Page](https://www.notion.so/The-Landing-Page-Feature-Canvas-3f33be139cf94a799ba4440cccc4341e)
[Subscription](https://www.notion.so/The-Subscription-Feature-Canvas-1d7bb594fade4606a3de09abbdf31ed6)

"Lambda App Store" is a Lambda Labs project built for Lambda School to create a central place to view and use the apps that our awesome students create.

### 5️⃣ Key Features

- Students can create a profile to submit their completed/deployed apps
- Admins can approve or deny student app submissions
- Visitors can browse Lambda apps by featured/category/trending/new/key word
- Visitors can access free student apps/free versions of student apps
- Visitors can purchase a subscription for full access to premium apps

## Tech Stack

### Front end built using:

- React
- React Hooks
- Redux

#### Front end deployed to `netlify`

#### [Back end](https://github.com/labs14-lambda-app-store/be2) built using:

- Node.JS
- PostgreSQL
- Express

#### Back end deployed to `heroku`

# APIs

## 1️⃣ Authentication API here

All accounts use [Auth0](https://auth0.com) for authentication.
Auth0 provides us with authentication & authorization services and help keeps our app secured.

## 2️⃣ Payment API here

Stripe API
We intend to implement Stripe into our app in a future product cycle. This will allow us to include the ability to subscribe and pay for access to premium apps.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    * REACT_APP_CLOUDINARY_URL - Our personal URL that we upload the images to.
    * REACT_APP_CLOUDINARY_UPLOAD_ PRESET - Consists of upload parameters centrally managed using the Admin API.
    * REACT_APP_OAUTH_CLIENT_ID - Is assigned to you by Auth0 upon account creation.
    * REACT_APP_OAUTH_DOMAIN - Is assigned to you by Auth0 upon account creation.

# 4️⃣ Content Licenses

| Image Filename               | Source / Creator | License          |
| ---------------------------- | ---------------- | ---------------- |
| Lambda_Avatar_Red.jpg        | Lambda School    | [UNCERTAIN](url) |
| Lambda_Avatar_White.jpg      | Lambda School    | [UNCERTAIN](url) |
| Lambda_Logo_white.png        | Lambda School    | [UNCERTAIN](url) |
| Lambda_Logo.png              | Lambda School    | [UNCERTAIN](url) |
| lambda-student.png           | Lambda School    | [UNCERTAIN](url) |
| LambdaLandingUX-Original.png | Lambda School    | [UNCERTAIN](url) |
| LambdaLandingUX.png          | Lambda School    | [UNCERTAIN](url) |

# 5️⃣ Testing

For testing, we are using Cypress.io. Cypress.io responds and reloads in real time, automatically waits for the DOM to load before testing, the errors are easy to debug, and the documentation is clear.

# 6️⃣ Installation Instructions

Run yarn install after cloning.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them
    * eject - moves create-react-app’s config files and start/build/test scripts into the app directory.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs14-lambda-app-store/be2) for details on the backend of our project.
