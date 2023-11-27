import styled from 'styled-components';
import Background from '@/assets/Background/Background.png';
import theme from '../../theme';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; // 수직 중앙 정렬 추가
  height: 100vh;
  min-height: 1020px;
  max-height: 1180px;
`;
export const Wrapper = styled.div`
    position: absolute;
    z-index: 2;
    //top: -80px;
    //bottom: 80px;
    max-height: 1180px;
    //height: 100%;
    min-height: 1020px;
    max-width: 820px; // 최대 너비 설정
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${Background});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto; // 배경 이미지 사이즈 조정
    image-rendering: pixelated;
    background-attachment: scroll;
    display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoText = styled.div`
    height: 30px;
    font-size: 40px;
    font-family: 'BareunHipi';
    margin-bottom: 30px;
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
  position: absolute;
  `;
