const deployEnv = process.env.REACT_APP_DEPLOY_ENV

export const baseAppsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/apps`
    : `https://lambdaappstore2.herokuapp.com/api/apps`

export const baseUsersUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/users`
    : `https://lambdaappstore2.herokuapp.com/api/users`

export const baseCommentsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/comments`
    : `https://lambdaappstore2.herokuapp.com/api/comments`
