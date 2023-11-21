import theme from '@/theme';
import styled from 'styled-components';
import CheckImage from '@/assets/Icon/Check.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonText = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`;

type ImageButtonProps = {
  src: string;
  selected: boolean;
};

export const SelectWrapper = styled.div`
  width: 250px;
`;

export const ImageButton = styled.button<ImageButtonProps>`
cursor: pointer;
border: ${props => props.selected ? 'none' : 'none'};
background-image: url(${props => props.src});
background-size: cover;
background-color: transparent;
z-index: 5;
`;

export const SelectClickEvent = styled.div<{ isSelected?: boolean }>`
    position: relative; 
    margin-bottom: 15px;
    &::after {
        content: ${props => props.isSelected ? `url(${CheckImage})` : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;  // 높은 z-index를 주어 상단에 나타나게 합니다.
    }
`;