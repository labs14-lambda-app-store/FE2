import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#1a61b0",
      contrastText: "#efeef3",
    },
    secondary: {
      main: "#f32667",
      contrastText: "#efeef3",
    },
    lambdaRed: {
      main: "#bb1333",
      contrastText: "#efeef3",
    },
    lambdaTeal: {
      main: "#3ab5e5",
      contrastText: "#efeef3",
    },
  },
})

export default theme
