import * as S from './style';
import React, { useState } from 'react';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';
import useLogout from '@/hooks/useLogout';
import useInput from '@/hooks/useInput';
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import useLeave from '@/hooks/useLeave';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function SignOutModal({ closeModal, isOpen }: Props) {
  const navigate = useNavigate();
  const leave = useLeave();
  const signoutText = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태

  const handleSignout = () => {
    if (signoutText.value === 'SnOwMaIlBoX') {
      leave();
      closeModal();
    } else {
      alert("입력한 값이 올바르지 않습니다.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={''}
      imageType={'SmallModal'}
    >
      <S.Wrapper>
        <S.Text>
        {'탈퇴하시면 지금까지 모인 추억들이 \n모두 사라져요. 그래도 하시겠어요? '}
        </S.Text>
        <S.NameInput
            maxLength={10}
            type="text"
            name="signoutText"
            placeholder="'SnOwMaIlBoX'를 입력해주세요."
            value={signoutText.value}
            onChange={signoutText.handleChange}
        />
        <ModalButton margin="20px 0 0 0" onClick={handleSignout}>
          <S.ButtonText>{'탈퇴하기'}</S.ButtonText>
        </ModalButton>
      </S.Wrapper>
    </Modal>
  );
}

export default React.memo(SignOutModal);
