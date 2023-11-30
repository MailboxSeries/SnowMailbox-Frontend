import theme from '@/theme';
import styled from 'styled-components';
import {ImagePreviewProps} from '@/interface/home'

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
background-color: ${theme.colors.textMain};
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
  width: 226px;
  height: 226px;
  background-image: ${(props) => `url(${props.src})`};
  border: 3px solid ${theme.colors.textNavy};
  border-radius: 10px;
  background-size: 236.538px 236.538px;
`;

export const NameInput = styled.input`
font-family: 'BareunHipi';
margin-top: 10px;
width: 210px;
height: 10px;
border-radius: 20px;
padding: 15px;
border-bottom: 2px solid ${theme.colors.textNavy};
color: ${theme.colors.textMain};
margin-bottom: 10px;
background-color: ${theme.colors.textNavy};;
font-size: 16px;
&::placeholder {
    color: ${theme.colors.textMain};
    font-size: 16px;
  }
`;


export const CheckTextLength = styled.div`
font-family: 'BareunHipi';
margin-top: -35px;
margin-right: 15px;;
display: flex;
flex-direction: column;
align-self: flex-end;   // 이 부분을 추가
font-size: 14px;
font-weight: 400;
color: ${theme.colors.textMain} !important;
margin-bottom: 10px;
z-index: 2;
`;

export const LetterArea = styled.textarea`
font-family: 'BareunHipi';
width: 210px;
height: 100px;
border: none;
border-radius: 20px;
color: ${theme.colors.textMain};
overflow: auto;
padding: 15px;
padding-bottom: 30px;
resize: none;
background-color: ${theme.colors.textNavy};
font-size: 16px;
&::placeholder {
    color: ${theme.colors.textMain};
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center; 
  justify-content: center;
`;


export const ImageUploadLabel = styled.label`
  cursor: pointer;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: ${theme.colors.textNavy};
  background-size: cover;
  display: inline-block;
  position: relative;
  margin-top: 50px;
`;

export const ImageUploadLabelText = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMain};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 108px;
`;


export const ImageInput = styled.input`
  opacity: 0; // 투명하게 설정
  position: absolute; // 절대적 위치 설정
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
`;

export const ImagePreview = styled.div<ImagePreviewProps>`
  width: 240px;
  height: 240px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-image: url(${(props) => props.src});
`;