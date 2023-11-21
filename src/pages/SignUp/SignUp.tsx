import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';

export default function SignUp() {
  // 모달 상태관리
  const {
    isOpen: isOpen,
    openModal: openMission,
    closeModal: closeModal,
  } = useModal();

  return (
    <>
      <PageLayout>


        <LongButton margin="64px 0 0 0" route="/signup">
          <S.ButtonText>{'회원가입하기'}</S.ButtonText>
        </LongButton>
        <LongButton margin="8px 0 0 0" route=""> {/*TODO: 추가해야함*/}
          <S.ButtonText>{'카카오로 가입하기'}</S.ButtonText>
        </LongButton>
        <LongButton margin="8px 0 0 0" route=""> {/*TODO: 추가해야함*/}
          <S.ButtonText>{'네이버로 가입하기'}</S.ButtonText>
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
