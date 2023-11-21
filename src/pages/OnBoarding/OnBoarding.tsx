import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import { S } from './style'
import { useNavigate } from 'react-router-dom';  // useNavigate import
import PageLayout from '@/components/PageLayout/PageLayout';

export default function OnBoarding() {
  // 모달 상태관리
  const {
    isOpen: isOpen,
    openModal: openMission,
    closeModal: closeModal,
  } = useModal();

  const navigate = useNavigate(); // useNavigate hook 사용


  return (
    <>
    <PageLayout/>
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
