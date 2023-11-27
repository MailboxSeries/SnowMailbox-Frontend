import * as S from './style';
import React from 'react';
import Modal from '../Modal';
import { useParams} from 'react-router-dom';
import copy from 'copy-to-clipboard';
import ModalButton from '@/components/Button/ModalButton/ModalButton';
type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

const BASE_URL = 'https://snowmailbox.com';

function ShareModal({closeModal, isOpen}: Props) {
  const { ownerId } = useParams<{ ownerId?: string }>(); // useParams 사용
  const link = `${BASE_URL}/home/${ownerId}`;

  const handleCopy = () => {
    copy(link);
    alert("링크가 복사되었습니다! 지인들에게 공유해보아요!")
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={'\n링크 공유하기'}
      imageType={'SmallModal'}
    >
      <S.Wrapper>
        <S.ShareLinkContainer>
          <S.ShareLinkWrapper>
            <S.Link className="box">{link}</S.Link>
          </S.ShareLinkWrapper>
            <ModalButton margin="30px 0 0 38px" onClick={handleCopy}>
              <S.ButtonText>{'링크 복사하기'}</S.ButtonText>
            </ModalButton>
        </S.ShareLinkContainer>
      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(ShareModal);
