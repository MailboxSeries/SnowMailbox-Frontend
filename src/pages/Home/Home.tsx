import React from 'react'
import * as S from './style';
import copy from 'copy-to-clipboard';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';

export default function Home() {
    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.RudolfButtonWrapper>
                            <RudolfButton />
                    </S.RudolfButtonWrapper>
                    <S.SpeechBubble />
                </S.ObjectWrapper>
            </PageLayout>
        </>
    ) 
}
