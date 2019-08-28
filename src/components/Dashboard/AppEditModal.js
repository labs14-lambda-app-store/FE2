import React from "react"
import { Modal } from "@material-ui/core"
import AppEditContent from "./AppEditContent"

const AppEditModal = ({ app, isModalOpen, setIsOpen}) => {
  return (
    <main>
      <Modal
        aria-labelledby="App edit modal view"
        aria-describedby="Further details on app"
        open={isModalOpen}
        onClose={() => setIsOpen(!isModalOpen)}
      >
        <AppEditContent
          isModalOpen={isModalOpen}
          setIsOpen={setIsOpen}
          app={app}
        />
      </Modal>
    </main>
  )
}

export default AppEditModal