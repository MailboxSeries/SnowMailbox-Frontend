import { styled } from "styled-components";
import SpeechBubbleGif from '@/assets/speechBubble/speechBubble.gif'
import Tree from '@/assets/Tree';
import { TreeTypeProps } from '@/interface/home';

export const ObjectWrapper = styled.div`
position: relative;
width: 300px;
height: 400px;
  z-index: 2;
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

export const TreeImage = styled.img.attrs<TreeTypeProps>(props => ({
  src: Tree[props.treeType - 1] // 배열 인덱스에 맞춰 접근
}))`
    width: 300px;
    height: 400px;
    
`;