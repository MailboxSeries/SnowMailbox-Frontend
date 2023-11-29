import theme from '@/theme';
import styled from 'styled-components';
import CheckImg from '@/assets/Icon/Check.png';


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

export const MissionDiscription = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  font-family: 'BareunHipi';
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



export const NameInput = styled.input`
font-family: 'BareunHipi';
margin-top: 50px;
width: 180px;
height: 10px;
border-radius: 20px;
padding: 15px;
border-bottom: 2px solid ${theme.colors.textNavy};
color: ${theme.colors.textMain};
margin-bottom: 0px;
background-color: ${theme.colors.textNavy};;
font-size: 16px;
&::placeholder {
    color: ${theme.colors.textMain};
    font-size: 16px;
  }
`;