import { css, styled } from "styled-components";
import LeftArrowButtonImg from '@/assets/Button/LeftArrow.png'
import RightArrowButtonImg from '@/assets/Button/RightArrow.png'

interface ButtonWrapperProps {
    background: string; // 배경 이미지 URL을 받을 수 있도록 설정
    // ... 다른 스타일 관련 props
  }

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    position: fixed;
    font-family: 'BareunHipi';
    top: 50%;
    right: 5px;
    z-index: 5;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 820px) {
        position: fixed;
        left: calc(50% + 350px);
        }
    width: 20px;
    height: 20px;
        
    ${(props) => 
        props.background == RightArrowButtonImg &&
        css`
        /* LeftArrowButtonImg에 대한 스타일 */
        right: 15px;
        z-index: 5;
        @media (min-width: 820px) {
            position: fixed;
            left: calc(50% + 380px);
        }

        background: url(${RightArrowButtonImg}); /* 배경 이미지 설정 */
        `
    }

    ${(props) =>
        props.background == LeftArrowButtonImg &&
        css`
        /* LeftArrowButtonImg에 대한 스타일 */
        left: 15px;
        z-index: 5;
        @media (min-width: 820px) {
            position: fixed;
            left: calc(50% - 400px);
            
        }      
        background: url(${LeftArrowButtonImg}); /* 배경 이미지 설정 */

    `}

`;
