import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useTheme } from 'context/useTheme'
import GenericButton from 'components/input/generic_button'
import GenericModal from 'components/page/genericModal'

interface IModalComponentProps {
  closeModal: () => void
  visibilityHandler: (e: any) => void | null
  modalIsOpen: boolean
}

export const ConfirmDismissNotificationModal: React.FC<IModalComponentProps> = props => {
  const { closeModal, modalIsOpen, visibilityHandler } = props
  const { theme } = useTheme()

  const handleConfirm = e => {
    e.preventDefault()
    visibilityHandler(e)
    closeModal()
  }

  return (
    <GenericModal isOpen={modalIsOpen} closeModal={closeModal} label="Hide Rule Modal">
      <div className="flex-row">
        <div className={`col ${theme.text} text-center`}>
          <h4 className="mb-3">Hide rule?</h4>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center">
        <GenericButton className={theme.modalDangerClass} onClick={handleConfirm}>
          <FaCheck className="mr-2" /> Hide
        </GenericButton>
        <GenericButton className={theme.modalConfirmClass} onClick={closeModal}>
          Never mind
        </GenericButton>
      </div>
    </GenericModal>
  )
}
