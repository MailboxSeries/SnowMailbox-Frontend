import theme from '@/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShareLinkContainer = styled.div`
  background-size: cover;
  width: 237.5px;
  height: 50px;
  position: relative;
  margin-top: 90px;
  padding: 0;
  
`;

export const ShareLinkWrapper = styled.div`
  background: #e1e2ff;
  border-radius: 30px;
  width: 215px;
  height: 50px;
  position: relative;
  //margin-top: 82px;
  padding: 0;
  margin-left: 11px;
`;

export const Link = styled.p`
  color: ${theme.colors.textNavy};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: scroll;
  margin-left: 15px;
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