import theme from '@/theme';
import styled from 'styled-components';
import CheckImg from '@/assets/Icon/Check.png';
import LockIconImg from '@/assets/Icon/LockIcon.png'
import UnLockIconImg from '@/assets/Icon/UnLockIcon.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonText = styled.span`
  color: ${theme.colors.textMain};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`;

export const SelectTitle = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const DiscriptionText = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type ImageButtonProps = {
  src: string;
  selected: boolean;
};

export const SelectWrapper = styled.div`
  width: 250px;
  height: 450px;
  margin-top: 55px;
  overflow-y: auto;
`;

export const ImageButton = styled.button<ImageButtonProps>`
cursor: pointer;
border: ${props => props.selected ? 'none' : 'none'};
background-image: url(${props => props.src});
background-size: cover;
background-color: transparent;
z-index: 2;
`;

export const SelectClickEvent = styled.div<{ isSelected?: boolean }>`
    position: relative; 
    margin-bottom: 15px;
    &::after {
        content: ${props => props.isSelected ? `url(${CheckImg})` : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;  // 높은 z-index를 주어 상단에 나타나게 합니다.
    }
`;

export const LockIcon = styled.button`
  position: absolute;
    width: 50px;
    height: 50px;
    background-size: 50px 50px;
    background-image: url(${LockIconImg});
    background-repeat: no-repeat;
    z-index: 3;
    top: 30px;
    left: 17px;
    background-color: transparent;
`;

export const UnLockIcon = styled.button`
  position: absolute;
    width: 50px;
    height: 50px;
    background-size: 50px 50px;
    background-image: url(${UnLockIconImg});
    background-repeat: no-repeat;
    z-index: 3;
    top: 30px;
    left: 17px;
    background-color: transparent;
`;