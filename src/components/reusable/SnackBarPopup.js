import React from "react"

import clsx from "clsx"
import ErrorIcon from "@material-ui/icons/Error"
import { green } from "@material-ui/core/colors"
import Snackbar from "@material-ui/core/Snackbar"
import { makeStyles } from "@material-ui/core/styles"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import SnackbarContent from "@material-ui/core/SnackbarContent"

const snackBarStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
}))

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
}

const SnackBarPopup = ({ message, variant, open, ...other }) => {
  const classes = snackBarStyles()
  const Icon = variantIcon[variant]

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
    >
      <SnackbarContent
        className={clsx(classes[variant], classes.margin)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      />
    </Snackbar>
  )
}

export default SnackBarPopup
