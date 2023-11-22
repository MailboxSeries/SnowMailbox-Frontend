import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import LongButton from '@/components/Button/LongButton/LongButton';
import useIsMyHome from '@/hooks/useIsMyHome';
import Picture1Img from '@/assets/Picture/1.png';
import Picture2Img from '@/assets/Picture/2.png';
import Picture3Img from '@/assets/Picture/3.png';

export default function ImageAll() {
  // 모달 상태관리
  const {
    isOpen: isOpen,
    openModal: openMission,
    closeModal: closeModal,
  } = useModal();
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const myURL = `/home/${myId}`;
  const images = [Picture1Img, Picture2Img, Picture3Img];

  return (
    <>
      <S.Layout>
        <S.Container>
          <S.GridWrapper>
            {Array.from({ length: 25 }, (_, index) => (
              <S.Picture
                key={index}
                imgSrc={images[index % images.length]} // 이미지 순환
              />
            ))}
          </S.GridWrapper>
          <LongButton margin="52px 0 0 0" route={myURL}>
            <S.ButtonText>{'홈으로 돌아가기'}</S.ButtonText>
          </LongButton>

        </S.Container>      
      </S.Layout>
    
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