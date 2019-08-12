import React from "react"
import { Modal } from "@material-ui/core"
import ModalContent from "./ModalContent"

//will need react router for card contents
//axios for getProjectById request
const ProjectModal = props => {
  const { project, isModalOpen, setIsOpen } = props

  return (
    <main>
      <Modal
        aria-labelledby="Project modal view"
        aria-describedby="Further details on project"
        open={isModalOpen}
        onClose={() => setIsOpen(!isModalOpen)}
      >
        <ModalContent isModalOpen={isModalOpen} setIsOpen={setIsOpen} project={project} />
      </Modal>
    </main>
  )
}

export default ProjectModal
