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
        //bottom: 0;
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
// TODO: 로고 추가 필요
export const LogoImg = styled.img`
  width: 110px;
  height: 49.7px;
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
