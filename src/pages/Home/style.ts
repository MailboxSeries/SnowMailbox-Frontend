import { styled } from "styled-components";
import SpeechBubbleGif from '@/assets/SpeechBubble/SpeechBubble.gif'
import Tree  from '@/assets/Tree';
import Character  from '@/assets/Character';
import { TreeTypeProps, CharacterTypeProps, StarTypeProps, BoxTypeProps } from '@/interface/home';
import theme from "@/theme";
import Star from "@/assets/Star";
import Box from "@/assets/Box";
import ChristmasButton from  '@/assets/Button/XmasButton.png'

export const ObjectWrapper = styled.div`
position: relative;
width: 300px;
height: 400px;
  z-index: 2;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (min-height: 1021px) {
    margin-top: 30px;
  }
`;

export const RudolfButtonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 89%;
  right: 76%;
  border: transparent;
`;

export const SpeechBubble = styled.button`
  position: absolute;
  background: url(${SpeechBubbleGif});
  width: 80px;
  height: 60px;
  z-index: 2;
  top: 82%;
  right: 63%;
  border: transparent;
`;

export const OrnamentLayerWrapper = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
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

export const TreeImage = styled.div<TreeTypeProps>`
  position: absolute;
    width: 300px;
    height: 400px;
    background: ${(props) => props.treeType && `url(${Tree[props.treeType - 1]})`};
    background-size: 300px 400px;
`;

export const StarImage = styled.div<StarTypeProps>`
  position: absolute;
    width: 300px;
    height: 400px;
    background: ${(props) => props.starType && `url(${Star[props.starType - 1]})`};
    background-size: 300px 400px;
    z-index: 1;
`;


export const BoxImage = styled.div<BoxTypeProps>`
  position: absolute;
    width: 300px;
    height: 400px;
    background: ${(props) => props.boxType && `url(${Box[props.boxType - 1]})`};
    background-size: 300px 400px;
    z-index: 1;
`;

export const DdayCount = styled.button`
  margin-bottom: 15px;
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 75px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  margin-top: 15px;
  margin-left: 15px;
  background: url(${ChristmasButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  font-weight: bolder;
  color: ${theme.colors.white};
  text-shadow: -1px -1px 0 ${theme.colors.textNavy}, 
  1px -1px 0 ${theme.colors.textNavy}, 
  -1px 1px 0 ${theme.colors.textNavy}, 
  1px 1px 0 ${theme.colors.textNavy};
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center; // 자식 요소들을 세로 방향 중앙에 정렬
  margin: 0 auto; // 컨테이너를 수평 중앙에 위치
  width: 260px; // 필요한 경우 너비 조정
  height: 40px; // 버튼 높이를 조정
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 52px;
`;

export const MainCharacter = styled.img.attrs<CharacterTypeProps>(props => ({
  src: Character[props.characterType - 1], // 이미지 가져오기
}))`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 90px;
  top: 83%; // top offset from tree image
  right: 15%; // right offset from tree image
  z-index: 3;
`;



