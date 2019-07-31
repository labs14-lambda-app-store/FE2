import React, { useState, useEffect } from "react"
import { Modal } from "@material-ui/core"
import ModalContent from "./ModalContent"

//will need react router for card contents
//axios for getProjectById request
const ProjectModal = props => {
  return (
    <main>
      <ModalContent />
    </main>
  )
}

export default ProjectModal
