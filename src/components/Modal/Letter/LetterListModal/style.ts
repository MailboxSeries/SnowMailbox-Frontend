import theme from '@/theme';
import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  width: 45px;
  height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
`;