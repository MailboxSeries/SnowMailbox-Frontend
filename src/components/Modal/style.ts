import styled, { keyframes } from 'styled-components';
import SmallModalRedImg from '@/assets/Modal/SmallModalRed.png';
import SmallModalGreenImg from '@/assets/Modal/SmallModalGreen.png';
import ModalImg from '@/assets/Modal/Modal.png';
import {ModalContentProps, ModalWrapperProps} from '@/interface/modal';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// ModalWrapper 컴포넌트에 ModalWrapperProps 타입을 적용하여 show 프로퍼티를 사용할 수 있도록 했습니다.
const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.15);
`;

const getModalBackgroundImage = (
  imageType?: 'SmallModalGreen' | 'SmallModalRed' | 'Modal' ,
) => {
  switch (imageType) {
    case 'SmallModalRed':
      return SmallModalRedImg;
    case 'SmallModalGreen':
      return SmallModalGreenImg;
    case 'Modal':
      return ModalImg;
    default:
      return ModalImg;
  }
};

const getModalSize = (
  imageType?: 'SmallModalGreen' | 'SmallModalRed' | 'Modal' ,
) => {
  switch (imageType) {
    case 'SmallModalRed':
      return {width: '300px', height: '300px'};
    case 'SmallModalGreen':
      return {width: '300px', height: '300px'};
    case 'Modal':
      return {width: '300px', height: '600px'};
    default:
      return {width: '300px', height: '600px'}; // 기본값
  }
};

const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${(props) => getModalBackgroundImage(props.imageType)});
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  padding: 15px;
  ${({imageType}) => {
    const {width, height} = getModalSize(imageType);
    return `
      width: ${width};
      height: ${height};
    `;
  }}
  bottom: 50%;
  transform: translate(-50%, -50%);
  color: #572E16;
  font-size: 20px;
  overflow-y: auto;
`;

const ModalInnerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: #572e16;
  font-size: 20px;
  overflow-y: auto;
  white-space: pre;
  overflow: hidden;
`;



export const S = {
  fadeIn,
  fadeOut,
  ModalWrapper,
  ModalContent,
  ModalInnerContent,
  ModalTitle,
};