import {S} from './style';
import {ModalButtonProps} from '@/interface/modal'

function ModalCloseButton({onClick}: ModalButtonProps) {
  return (
    <>
      <S.ModalCloseButton onClick={onClick} />
    </>
  );
}

export default ModalCloseButton;
