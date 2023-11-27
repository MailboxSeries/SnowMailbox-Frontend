import { styled } from "styled-components";
import MainTreeImg from '@/assets/Tree/MainTree.png'
import theme from '../../theme';
import MainCharImg from '@/assets/Character/main.png'
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
    transform: translateY(10%);
    margin-top: 180px;
    margin-bottom: 50px;
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
 
export const MainCharacter = styled.img.attrs({
  src: MainCharImg
})`
  position: absolute;
  z-index: 2;

  top: 77%; // top offset from tree image
  right: 22%; // right offset from tree image
`;