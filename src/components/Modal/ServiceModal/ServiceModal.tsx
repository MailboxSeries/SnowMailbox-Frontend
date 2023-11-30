import * as S from './style';
import React, { useState } from 'react';
import Modal from '../Modal';


type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function ServiceModal({closeModal, isOpen}: Props) {

  const handleNavigateInstagram = () => {
    window.location.href = 'https://instagram.com/snowmailbox_official?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr';
}

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
              {"눈꽃우편함 이용방법 \n"}
            </S.DiscriptionText>
            <S.Text>
            {"-내 트리를 만들고 지인들에게 링크를 공유해요."}
            </S.Text>
            <S.Text>
            {"-미션을 수행하며 스킨을 획득해 트리를 더 멋지게 꾸며요."}
            </S.Text>
            <S.Text>
            {"-지인에게 편지와 추억이 담긴 사진을 받을 수 있어요."}
            </S.Text>
            <S.Text>
            {"-오늘 편지를 받지 못하더라도 걱정말아요. 눈꽃나라 친구들이 따뜻한 위로의 편지를 보내줄거니까요."}
            </S.Text>

            <S.DiscriptionText>
              {"눈꽃우편함 인스타그램 공식계정\n"}
            </S.DiscriptionText>
            <S.InstagramButton onClick={handleNavigateInstagram}>
              @snowmailbox_official
            </S.InstagramButton>
            <S.Text>
            {"-인스타그램 공식계정에서 공지사항을 확인해주세요!"}
            </S.Text>
            <S.Text>
            {"-불편사항/건의사항 등이 있다면 인스타그램 공식계정을 통해 문의 부탁드려요."}
            </S.Text>

            <S.DiscriptionText>
              {"우편함 Series\n"}
            </S.DiscriptionText>
            <S.Text>
            {"-단풍 우편함에 이어 겨울 시즌을 위한 서비스에요."}
            </S.Text>
            <S.Text>
            {"-겨울에 이어 봄, 여름에도 출시 예정이니 많은 기대 부탁드려요!"}
            </S.Text>
            <S.Text>
            {"-눈꽃 우편함은 동국대, 삼육대 학생 4명에서 만든 크리스마스 시즌 서비스예요."}
            </S.Text>
            <S.Text>
            {"-눈꽃 우편함은 수익을 창출하지 않는 비영리 서비스예요."}
            </S.Text>
          </S.TextWrapper>
          
          

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(ServiceModal);
