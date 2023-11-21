import * as S from './style';
import React from 'react';
import ModalCloseButton from '@/components/Modal/ModalCloseButton/ModalCloseButton';
import Modal from '../Modal';
import { useParams} from 'react-router-dom';
import copy from 'copy-to-clipboard';
import LongButton from '@/components/Button/LongButton/LongButton';
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
      modalTitle={'링크 공유하기'}
      imageType={'SmallModalGreen'}
    >
      <S.Wrapper>
        <S.ShareLinkContainer>
          <S.ShareLinkWrapper>
            <S.Link className="box">{link}</S.Link>
          </S.ShareLinkWrapper>
            <LongButton margin="12px 0 0 0" onClick={handleCopy}>
              <S.ButtonText>{'링크 복사하기'}</S.ButtonText>
            </LongButton>
        </S.ShareLinkContainer>
      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(ShareModal);
