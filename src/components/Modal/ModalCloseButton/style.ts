import {styled} from 'styled-components';
import ModalCloseButtonImg from '@/assets/Button/LeftArrow.png';

const ModalCloseButton = styled.button`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 20px;
  height: 20px;
  background-image: url(${ModalCloseButtonImg});
  background-size: 20px 20px;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const S = {
  ModalCloseButton,
};
