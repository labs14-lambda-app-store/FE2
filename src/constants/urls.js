const deployEnv = process.env.REACT_APP_DEPLOY_ENV

export const baseProjectsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/projects`
    : `https://lambdaappstore2.herokuapp.com/api/projects`
