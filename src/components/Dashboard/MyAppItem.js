import React from 'react'
import Button from "@material-ui/core/Button"

const MyAppItem = ({item, setIsOpen}) => {
      
      return (
            <div
              className="my-app"
              onClick={() => setIsOpen(true)}
              style={{ display: "flex", flexDirection: "column" }}
            >
                  <h2>{item.name}</h2>
                  <div className="app-card">
                        <img
                        className="my-app-image"
                        src={item.display_image}
                        style={{ width: 500, height: "auto" }}
                        />
                  <p>{item.description}</p></div>
                  <hr/>
            </div>
            
      )
}

export default MyAppItem