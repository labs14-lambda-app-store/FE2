const deployEnv = process.env.NODE_ENV

export const baseProjectsUrl =
  deployEnv === "production"
    ? `https://lambdaappstore.herokuapp.com/api/projects`
    : `https://lambdaappstore2.herokuapp.com/api/projects`
