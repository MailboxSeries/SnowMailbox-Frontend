import { styled } from "styled-components";
import MainTreeImg from '@/assets/Tree/snowTree.png'
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

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 67px;
`;

export const SignUpInput = styled.input`
  font-family: 'NanumBarunpenB';
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 2px solid #F9FCFB; // 아래쪽 테두리만 추가합니다.
  background-color: transparent;
  color: ${theme.colors.textMain};
  z-index: 5;
  
  &::placeholder {
    color: #F9FCFB;
  }

  &:focus {
    outline: none;
  }
`;