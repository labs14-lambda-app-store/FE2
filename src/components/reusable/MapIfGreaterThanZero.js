import React from "react"

const MapIfGreaterThanZero = ({ array, component: Component, ...rest }) => {
  if (array.length > 0) {
    {
      return array.map(item => <Component test="aoaishfsdhsd" item={item}/>)
    }
  } else {
  return <p className="no-show-message">nothing to show</p>
  }
}

export default MapIfGreaterThanZero
