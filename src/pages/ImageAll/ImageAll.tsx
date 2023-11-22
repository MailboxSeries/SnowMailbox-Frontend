import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';

export default function ImageAll() {
  // 모달 상태관리
  const {
    isOpen: isOpen,
    openModal: openMission,
    closeModal: closeModal,
  } = useModal();

  return (
    <>
      <PageLayout>
        <S.MainTree />
        <LongButton margin="52px 0 0 0" route="/signin">
          <S.ButtonText>{'로그인'}</S.ButtonText>
        </LongButton>
        <LongButton margin="12px 0 0 0" route="/signup">
          <S.ButtonText>{'회원가입'}</S.ButtonText>
        </LongButton>
      </PageLayout>
    
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
