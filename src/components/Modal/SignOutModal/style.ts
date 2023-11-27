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
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`;

export const NameInput = styled.input`
font-family: 'BareunHipi';
margin-top: 120px;
width: 180px;
height: 10px;
border-radius: 20px;
padding: 15px;
border-bottom: 2px solid ${theme.colors.textNavy};
color: ${theme.colors.textMain};
margin-bottom: 0px;
background-color: ${theme.colors.textNavy};;
font-size: 16px;
&::placeholder {
    color: ${theme.colors.textMain};
    font-size: 16px;
  }
`;


export const Text = styled.span`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  top: 70px;
  position: absolute;
  white-space: pre-line;
`;