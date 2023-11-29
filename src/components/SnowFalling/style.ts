import styled, { keyframes } from 'styled-components';
import { CSSProperties } from 'react';

// Leaf 컴포넌트에서 사용할 속성의 타입을 정의
interface LeafProps extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
  '--rotation-start'?: string;
  '--rotation-end'?: string;
}

const leafFall = keyframes`
  0% {
     opacity: 0.5;
      top: -10%;
      left: var(--start-left);  
      transform: rotate(var(--rotation-start));
      
  }
  100% {
      opacity: 0;
      top: 90%;
      left: var(--end-left); 
      transform: rotate(var(--rotation-end));
  }
  
`;

export const Snow = styled.div<LeafProps>`
  position: absolute;
  top: -20px;
  width: 20px;
  height: 20px;
  background-size: cover;
  
  animation: ${leafFall} 6s linear infinite;
`;

export const SnowWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 820px;
  max-height: 1180px;
  height: 800px;
  top: -10px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  //z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 820px;
  max-height: 1180px;
  height: 800px;
  
`;
