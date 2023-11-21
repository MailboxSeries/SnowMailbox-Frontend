import React from 'react'
import * as S from './style';
import copy from 'copy-to-clipboard';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import OrnamentLayer from '@/components/OrnamentLayer/OrnamentLayer';

export default function Home() {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용

    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.OrnamentLayerWrapper>
                        <S.TreeImage treeType={homeData.treeType} />
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
