import { styled } from "styled-components";

export const PolicyTextsWrapper = styled.div`
  //bottom: -20px;  // 화면 하단에 고정
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  z-index: 4;
  margin-top: 60px;
`;

export const PolicyTextsStyle = styled.p`
  margin-top: 6px;
  font-size: 9px;
  padding-bottom: 10px;
  color: #444;
`;

export const PolicyStyledLink = styled.a`
  color: #444;
  text-decoration: underline;  // 밑줄 추가

  &:hover {
    color: darkblue;  // 마우스 오버 시 색상 변경
  }
`;