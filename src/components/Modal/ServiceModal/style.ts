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
  line-height: ;
  font-size: 14px;
    font-style: normal;
  font-weight: 700;
`;


export const TextWrapper = styled.div`
  width: 230px;
  height: 600px;
  margin-top: 15px;

`;
