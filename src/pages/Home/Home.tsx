import React from 'react'
import * as S from './style';
import copy from 'copy-to-clipboard';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';
import OrnamentLayer from '@/components/OrnamentLayer/OrnamentLayer';

export default function Home() {


    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.OrnamentLayerWrapper>

                    </S.OrnamentLayerWrapper>
                    <S.RudolfButtonWrapper>
                            <RudolfButton />
                    </S.RudolfButtonWrapper>
                    <S.SpeechBubble />
                </S.ObjectWrapper>
                
            </PageLayout>
        </>
    ) 
}
