import React from "react"
import { Modal } from "@material-ui/core"
import ModalContent from "./ModalContent"

//will need react router for card contents
//axios for getAppById request
const AppModal = props => {
  const { app, isModalOpen, setIsOpen } = props

  return (
    <main>
    <h1>Hello</h1>
      <Modal
        aria-labelledby="App modal view"
        aria-describedby="Further details on app"
        open={isModalOpen}
        onClose={() => setIsOpen(!isModalOpen)}
      >
        <ModalContent
          isModalOpen={isModalOpen}
          setIsOpen={setIsOpen}
          app={app}
        />
      </Modal>
    </main>
  )
}

export default AppModal
