import React from 'react'
import * as S from './style';

export default function PolicyLinkText() {
  return (
    <>
    <S.PolicyTextsWrapper>
      <S.PolicyTextsStyle>
        계속 진행하면 <S.PolicyStyledLink target="_blank" href="https://lyrical-recess-827.notion.site/87a6e9da3df641598501537a5e7bc67f?pvs=4">
            서비스 이용약관
        </S.PolicyStyledLink>
            에 동의하고
      </S.PolicyTextsStyle>
      <S.PolicyTextsStyle>
        <S.PolicyStyledLink target="_blank" href="https://lyrical-recess-827.notion.site/696a9f5695114d2d8db0a4d7ae0b672b?pvs=4">
            개인정보 처리방침
        </S.PolicyStyledLink>
            을 읽었음을 인정하는 것으로 간주됩니다.
      </S.PolicyTextsStyle>
    </S.PolicyTextsWrapper>
    </>
  )
}
