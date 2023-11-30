import { styled } from "styled-components";
import theme from '../../theme';
import Background from '@/assets/Background/PhotoBackground.png';


export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; // 수직 중앙 정렬 추가
  height: 100vh;
  min-height: 1020px;
  max-height: 1180px;
  @media (min-height: 1021px) {
    min-height: 1180px;

    }
`;
export const Container = styled.div`
    position: absolute;
    z-index: 2;
    max-height: 1180px;
    //height: 100%;
    min-height: 1020px;
    @media (min-height: 1021px) {
    min-height: 1180px;
    }
    max-width: 820px; // 최대 너비 설정
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto; // 배경 이미지 사이즈 조정
    image-rendering: pixelated;
    background-attachment: scroll;
    display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PictureProps {
  imgSrc: string;
}

export const Picture = styled.button<PictureProps>`
    position: relative;
    background-image: url(${props => props.imgSrc});
    background-size: 45px 45px;
    position: relative;
    width: 45px;
    height: 45px;
    z-index: 2;
    background-color: transparent;
    margin-bottom: 10px;
    color: ${theme.colors.textNavy};
    font-family: 'BareunHipi';
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

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 27px;
  margin-top: 100px;
  margin-bottom: 100px;
`;
