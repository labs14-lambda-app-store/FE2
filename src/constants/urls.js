const deployEnv = process.env.REACT_APP_DEPLOY_ENV

export const baseProjectsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/projects`
    : `https://lambdaappstore2.herokuapp.com/api/projects`

export const baseUsersUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/users`
    : `https://lambdaappstore2.herokuapp.com/api/users`

export const baseCommentsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/comments`
    : `https://lambdaappstore.herokuapp.com/api/comments`
