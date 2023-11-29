import theme from '@/theme';
import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
  width: 230px;
`;

type OrnamentButtonProps = {
    OrnamentImage: string;
};

export const OrnamentButton = styled.button<OrnamentButtonProps>`
  font-family: 'NanumBarunpenB';
  font-weight: bolder;
  text-align: center;
  font-size: 18px;
  line-height: 1;
  color: ${theme.colors.textMain};
  position: relative;
  background: url(${props => props.OrnamentImage}) no-repeat center;
  background-size: 45px 45px;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  z-index: 3;
  //padding-right: 25px;
  padding-top: 3px;
  margin: 12px;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;

export const InnerWrapper = styled.div`
  width: 250px;
  height: 450px;
  margin-top: 55px;
  padding-top: 45px;
  overflow-y: auto;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;