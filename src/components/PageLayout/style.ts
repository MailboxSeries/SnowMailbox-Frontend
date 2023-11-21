import styled from 'styled-components';
import Background from '@/assets/Background/Background.png';
import theme from '../../theme';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; // 수직 중앙 정렬 추가

`;
export const Wrapper = styled.div`
    position: absolute;
    z-index: 2;
    top: 0px;
    //top: 40px;
    height: 100%;
    min-height: 820px;
    max-width: 820px; // 최대 너비 설정
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; // 배경 이미지 사이즈 조정
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: pixelated;
    background-size: 820px 1180px; 
    background-attachment: scroll;
    display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoText = styled.div`
    height: 30px;
    font-size: 40px;
    font-family: 'BareunHipi';
    margin-bottom: 35px;
`;

export const SubLogoText = styled.div`
    height: 40px;
    font-size: 16px;
    margin-bottom: -20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.textMain};
  margin-top: 100px;
  `;
