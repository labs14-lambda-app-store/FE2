import React from 'react'
import Button from "@material-ui/core/Button"

const MyAppItem = ({item, setIsOpen}) => {
      
      return (
            <div
              onClick={() => setIsOpen(true)}
              style={{ display: "flex", flexDirection: "column" }}
            >
                  <h2>{item.name}</h2>
                  <img
                  src={item.display_image}
                  style={{ width: 500, height: "auto" }}
                  />
                  <p>{item.description}</p>
                  <Button>EDIT iCON</Button>
                  <hr/>
            </div>
            
      )
}

export default MyAppItem