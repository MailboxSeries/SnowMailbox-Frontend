import styled from 'styled-components';
import Background from '@/assets/Background/Background.png';

export const Layout = styled.div`
  width: 100vw;
  //height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
    position: absolute;
        z-index: 2;
        top: 0px;
        //top: 40px;
        height: 100%;
        min-height: 820px;
        width: 100%;
        margin: 0;
        padding: 0;
        background: url(${Background});
        background-position: center;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        background-size: 820px 1180px; 
        overflow: auto;
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
  padding-top: 70px;
  color: #F9FCFB;
  `;

export const Nav = styled.nav`
  width: 340px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonBox = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const GoBackContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LeftButtonImage = styled.img`
  margin-right: 10px;
  @media (max-width: 768px) {
    display: none; /* 모바일 화면일 때 숨김 */
  }
`;

export const RightButtonImage = styled.img`
  margin-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
