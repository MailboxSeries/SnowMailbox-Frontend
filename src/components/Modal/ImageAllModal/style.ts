import theme from '@/theme';
import styled from 'styled-components';

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

export const TextsStyle = styled.div`
font-family: 'BareunHipi';
display: flex;
flex-direction: column;
font-size: 25px; 
border:2px; 
border-style:hidden;
border-radius: 5%;
background-color: #FFE5CC;
padding: 10px;
margin-top:5px;
margin-bottom:10px;

`;

export const LetterContent = styled.div`
    margin-top: 50px;
    color: ${theme.colors.textNavy};

`;

export const SenderNameText = styled.span`
font-size: 20px;
`;

export const LetterContentText = styled.span`
margin-top:5px;
margin-bottom:10px;
font-size: 20px;
`;

export const LetterImage = styled.div<{src: string}>`
  position: relative;
  width: 236px;
  height: 236px;
  background-image: ${(props) => `url(${props.src})`};
  border: 3px solid ${theme.colors.textNavy};
  border-radius: 10px;
  background-size: 236.538px 236.538px;
`;