import * as S from './style';
import React from 'react';
import Modal from '../Modal';
import { useNavigate} from 'react-router-dom';
import LongButton from '@/components/Button/LongButton/LongButton';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import useLogout from '@/hooks/useLogout';
import { useRecoilValue } from 'recoil';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function LogoutModal({closeModal, isOpen}: Props) {
  const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
  const navigate = useNavigate();
  const logout = useLogout();

  //TODO: api 호출하기
  const handleLogout = () => {
    alert("로그아웃 되었어요.")
    navigate('/')
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={'로그아웃 하시겠어요?'}
      imageType={'SmallModalGreen'}
    >
      <S.Wrapper>
        
            <LongButton margin="150px 0 0 0" onClick={handleLogout}>
              <S.ButtonText>{'로그아웃'}</S.ButtonText>
            </LongButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(LogoutModal);
