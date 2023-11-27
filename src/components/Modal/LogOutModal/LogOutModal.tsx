import * as S from './style';
import React, { useCallback, useState } from 'react';
import Modal from '../Modal';
import { useNavigate} from 'react-router-dom';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import useLogout from '@/hooks/useLogout';
import { useRecoilValue } from 'recoil';
import SignOutModal from '../SignOutModal/SignOutModal';
import ModalButton from '@/components/Button/ModalButton/ModalButton';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function LogoutModal({closeModal, isOpen}: Props) {
  const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
  const navigate = useNavigate();
  const logout = useLogout();
  const [signoutModalOpen, setSignoutModalOpen] = useState(false);
  const closeSignout = useCallback(() => {
    setSignoutModalOpen(false);
  }, []);

  const handleSignoutModal = () => {
    setSignoutModalOpen(true)
  }

  //TODO: api 호출하기
  const handleLogout = () => {
    alert("로그아웃 되었어요.")
    navigate('/')
    logout();
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={'\n로그아웃 하시겠어요?'}
        imageType={'SmallModal'}
      >
        <S.Wrapper>
          
              <ModalButton margin="180px 0 0 0" onClick={handleLogout}>
                <S.ButtonText>{'로그아웃'}</S.ButtonText>
              </ModalButton>
              <S.SignoutButton onClick={handleSignoutModal}> 탈퇴하기 </S.SignoutButton>
        </S.Wrapper>
      </Modal>

    <SignOutModal closeModal={closeSignout} isOpen={signoutModalOpen} />
    </>
    
  );
}
export default React.memo(LogoutModal);
