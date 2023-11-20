import React, { useEffect } from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';

export default function OnBoarding() {
  // 모달 상태관리
  const {
    isOpen: isOpen,
    openModal: openMission,
    closeModal: closeModal,
  } = useModal();

  useEffect(() => {
    openMission();
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        imageType={'SmallModalGreen'}
        modalTitle={"예시"}
      >

      </Modal> 
    </>
  )
}
