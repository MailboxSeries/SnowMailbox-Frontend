import { styled } from "styled-components";
import SpeechBubbleGif from '@/assets/speechBubble/speechBubble.gif'

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
  top: 75%;
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