import React from "react"
import { Modal } from "@material-ui/core"
import AppContent from "./AppContent"

const AppContentModal = ({ app, isModalOpen, setIsOpen, ref }) => {
  return (
    <main>
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

export default AppContentModal