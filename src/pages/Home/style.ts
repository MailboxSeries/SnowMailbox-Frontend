import { styled } from "styled-components";
import SpeechBubbleGif from '@/assets/SpeechBubble/SpeechBubble.gif'
import Tree  from '@/assets/Tree';
import Character  from '@/assets/Character';
import { TreeTypeProps, CharacterTypeProps } from '@/interface/home';
import theme from "@/theme";

export const ObjectWrapper = styled.div`
position: relative;
width: 300px;
height: 400px;
  z-index: 2;
  margin-top: 220px;
    margin-bottom: 10px;
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
  color: ${theme.colors.textNavy};
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


export const MainCharacter = styled.img.attrs<CharacterTypeProps>(props => ({
  src: Character[props.characterType - 1], // 이미지 가져오기
}))`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 90px;
  top: 77%; // top offset from tree image
  right: 22%; // right offset from tree image
`;



