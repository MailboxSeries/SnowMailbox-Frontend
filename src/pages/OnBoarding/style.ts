import { styled } from "styled-components";
import MainTreeImg from '@/assets/Tree/4.png'
import theme from '../../theme';

export const MainTree = styled.div`
    position: absolute;
    background-image: url(${MainTreeImg});
    background-size: 300px 400px;
    position: relative;
    width: 300px;
    height: 400px;
    z-index: 2;
`;

export const Container = styled.div`
    font-family: 'BareunHipi';
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
 


