import React from "react"

import { Modal } from "@material-ui/core"

import ModalContent from "./ModalContent"

//will need react router for card contents
//axios for getAppById request
const ProfileEditModal = ({ user, isModalOpen, setIsOpen }) => {
  return (
    <main>
      <Modal
        aria-labelledby="Profile Edit modal view"
        aria-describedby="Edit details on profile"
        open={isModalOpen}
        onClose={() => setIsOpen(!isModalOpen)}
      >
        <ModalContent
          isModalOpen={isModalOpen}
          setIsOpen={setIsOpen}
          user={user}
        />
      </Modal>
    </main>
  )
}

export default ProfileEditModal
