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
background-color:#e1e2ff;
padding: 4px;
margin-top:5px;
margin-bottom:10px;

`;

export const LetterContent = styled.div`
    margin-top: 10px;
    color: ${theme.colors.textNavy};
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NoContent = styled.div`
    margin-top: -30px;
    color: ${theme.colors.textNavy};
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  width: 200px;
  height: 200px;
  background-image: ${(props) => `url(${props.src})`};
  border: 3px solid #7c7e9a;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; 
`;

export const InnerWrapper = styled.div`
  width: 250px;
  height: 450px;
  margin-top: 55px;
  padding-top: 45px;
  top: 120px;
  overflow-y: auto;
  flex-direction: column;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;