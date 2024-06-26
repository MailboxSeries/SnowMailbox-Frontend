import styled from 'styled-components';

export const OrnamentImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;


export const Frame = styled.div<{
  width: number;
  height: number;
  margin?: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: none;
  padding: 0;
  margin: ${(props) => `${props.margin}` || 0};
  position: relative;
  z-index: 4;
`;

