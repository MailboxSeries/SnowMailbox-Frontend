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
`;

export const LetterContent = styled.div`
    margin-top: 10px;
    color: ${theme.colors.textNavy};

`;

export const LetterImage = styled.div<{src: string}>`
  position: relative;
  width: 200px;
  height: 200px;
  background-image: ${(props) => `url(${props.src})`};
  border: 3px solid #7c7e9a;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 7px;
`;

export const NoContent = styled.div`
    margin-top: -30px;
    color: ${theme.colors.textNavy};
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const InnerWrapper = styled.div`
  width: 250px;
  height: 450px;
  margin-top: 75px;
  padding-top: 75px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;