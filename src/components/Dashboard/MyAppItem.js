import React from 'react'

const MyAppItem = (props) => {
      console.log(props)
      
      return (
            <div
            //   onClick={() => setIsOpen(true)}
              style={{ display: "flex", flexDirection: "column" }}
            >
            <h2>hiiiii</h2>
              {/* <img
                src={item.display_image}
                style={{ width: 500, height: "auto" }}
              /> */}
            </div>
      )
}

export default MyAppItem