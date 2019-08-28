import validator from "validator"
// @param url = url string to check if valid
// @param state = object to change
// @param setStateValues = function to change object
// @params errorStateName = key name to change inside object
const isUrlValid = (url, state, setStateValues, errorStateName) => {
// checks if url is valid, returns boolean
  const isValidatorValid = validator.isURL(url, {
    protocols: ["http", "https"],
    require_protocol: true,
  })

  if (url.length === 0) {
    setStateValues({ ...state, [errorStateName]: "" })
  } else if (!isValidatorValid) {
    setStateValues({
      ...state,
      [errorStateName]:
        "Invalid URL. Please enter a URL that includes http:// or https://",
    })
  } 
}

export { isUrlValid }
