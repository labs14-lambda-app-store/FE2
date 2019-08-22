import React from "react"

const PaginationConfig = ({ offset, appsLength, searchString }) => {
  return (
    <>
      <Pagination
        // limit of 1 array per page (in this case, one array of 12 apps being sent from the BE)
        limit={1}
        innerButtonCount={0}
        outerButtonCount={1}
        reduced={true}
        offset={offset}
        // total number of pages we want to render; dynamic by rounding up quotient of approvedAppsLength and apps per page (12)
        total={appsLength}
        onClick={(e, offset) => {
          setOffset(offset)
          // send the correct page query (i.e. /api/apps?page=2)
          if (searchString) {
            searchApps(offset + 1, searchString, true)
          } else {
            checkAppType(offset + 1)
          }
        }}
      />
    </>
  )
}

export default PaginationConfig
