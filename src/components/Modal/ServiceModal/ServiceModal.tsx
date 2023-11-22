import * as S from './style';
import React, { useState } from 'react';
import Modal from '../Modal';


type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function ServiceModal({closeModal, isOpen}: Props) {


 //TODO: 내용 집어넣어야 함
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={''}
      imageType={'Modal'}
    >
      <S.Wrapper>
          <S.SubTitle>
            2024년을 기다리며,
          </S.SubTitle>
          <S.Title>
            눈꽃 우편함
          </S.Title>
          <S.SubTitle>
            따뜻한 마음으로 크리스마스 트리를 꾸며봐요.
          </S.SubTitle>
          <S.TextWrapper>
            <S.DiscriptionText>
              눈꽃우편함 이용방법<br/>
              
            </S.DiscriptionText>
          </S.TextWrapper>
          
      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(ServiceModal);
