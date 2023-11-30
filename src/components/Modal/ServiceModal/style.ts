import theme from '@/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  overflow-y: auto;

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

export const Title = styled.span`
  color: ${theme.colors.textNavy};
  font-size: 28px;
  font-weight: 700;
  //margin-top: 10px;
  font-family: 'BareunHipi';
`;

export const SubTitle = styled.span`
  color: ${theme.colors.textNavy};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: -5px;
`;

export const DiscriptionText = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  line-height: 1.8;
  font-size: 14px;
    font-style: normal;
  font-weight: 700;
  white-space: pre-line;
  //padding-top: 10px;
`;


export const TextWrapper = styled.div`
  width: 230px;
  height: 600px;
  margin-top: 25px;
  flex-direction: column;

`;

export const Text = styled.span`
    margin-top: 0px;
    margin-left: 5px;
    font-family: 'BareunHipi';
    font-size: 13px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 7px;
    margin-top: -4px;
    margin-bottom: 2px;
    white-space: pre-line;
    line-height: 1.5;
    display: flex;

`;

export const InstagramButton = styled.button`
  background:  #7c7e9a;
  background-size: 180px 36px;
  z-index: 2;
  width:180px;
  height:36px;
  margin-left: 5px;
  margin-top: 2px;
  margin-bottom: 5px;
  padding-left: 17px;
  padding-top: 8px;
  align-items:center;
  border: transparent;
  border-radius: 10px;
  font-size: 16px;
  color : ${theme.colors.textNavy};
  &:active {
    background-color: rgba(128, 128, 128, 0.5);  // 반투명한 회색
    border-radius: 10px;
  }
`;