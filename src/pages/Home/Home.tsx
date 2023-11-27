import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import LongButton from '@/components/Button/LongButton/LongButton';
import ShareModal from '@/components/Modal/ShareModal/ShareModal';
import SkinModal from '@/components/Modal/SkinModal/SkinModal';
import LetterListModal from '@/components/Modal/Letter/LetterListModal/LetterListModal';
import useIsMyHome from '@/hooks/useIsMyHome';
import SendLetterModal from '@/components/Modal/Letter/SendLetterModal/SendLetterModal';
import OrnamentLayer from '@/components/OrnamentLayer/OrnamentLayer';
import OrnamentLayer1 from '@/assets/OrnamentLayer/1'
import OrnamentLayer2 from '@/assets/OrnamentLayer/2'
import OrnamentLayer3 from '@/assets/OrnamentLayer/3'
import OrnamentLayer4 from '@/assets/OrnamentLayer/4'
import home from '@/apis/home';
import { useQuery } from '@tanstack/react-query';
import { HomeData } from '@/interface/home';

const STALE_MIN = 5;

export default function Home() {
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const homeData = useRecoilValue(HomeDataAtom);
    const setHomeData = useSetRecoilState(HomeDataAtom);
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
    const handleShare = () => setShareModalOpen(true);
    const [skinModalOpen, setSkinModalOpen] = useState<boolean>(false);
    const handleSkin = () => setSkinModalOpen(true);
    const [LetterListModalOpen, setLetterListModalOpen] = useState<boolean>(false);
    const handleLetterList = () => setLetterListModalOpen(true);
    const [sendLetterModalOpen, setSendLetterModalOpen] = useState<boolean>(false);
    const handleSendLetter = () => setSendLetterModalOpen(true);
    const myURL = `https://snowmailbox.com/home/${myId}`;
    const imageAllURL = `https://snowmailbox.com/image-all/${myId}`;

    const {data} = useQuery<HomeData>({
        queryKey: [ownerId],
        queryFn: () => home.getHomeData(ownerId),
        staleTime: 1000 * 60 * STALE_MIN,
        gcTime: 1000 * 60 * STALE_MIN,
    });

    // 서버에서 가져온 데이터를 Recoil Atom에 저장
    useEffect(() => {
        if (data) {
        setHomeData(data);
        }
    }, [data, setHomeData]);

    const closeShareModal = useCallback(
        () => setShareModalOpen(false),
        [setShareModalOpen],
    );

    const closeSkinModal = useCallback(
        () => setSkinModalOpen(false),
        [setSkinModalOpen],
    );

    const closeLetterListModal = useCallback(
        () => setLetterListModalOpen(false),
        [setLetterListModalOpen],
    );

    const closeSendLetterModal = useCallback(
        () => setSendLetterModalOpen(false),
        [setSendLetterModalOpen],
    );

    // selectedOrnamentLayer를 배열로 만듭니다
    let selectedOrnamentLayer = [];

    switch(homeData.ornamentType) {
        case 1: selectedOrnamentLayer = OrnamentLayer1; break;
        case 2: selectedOrnamentLayer = OrnamentLayer2; break;
        case 3: selectedOrnamentLayer = OrnamentLayer3; break;
        case 4: selectedOrnamentLayer = OrnamentLayer4; break;
        default: selectedOrnamentLayer = []; // 기본값 혹은 오류 처리
    }


    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.OrnamentLayerWrapper>
                        <S.StarImage starType={homeData.starType}/>
                        <S.TreeImage treeType={homeData.treeType}/>
                        <OrnamentLayer
                            width={300}
                            height={400}
                            margin="0 0 0 0"
                            imgs={selectedOrnamentLayer}
                            nowDate = {homeData.nowDate}
                        />
                        <S.MainCharacter characterType = {homeData.characterType} />
                        <S.BoxImage boxType={homeData.boxType} />
                    </S.OrnamentLayerWrapper>
                    {isMyHome ? (
                        <>
                            <S.RudolfButtonWrapper>
                                <RudolfButton onClick={handleSkin}/>
                            </S.RudolfButtonWrapper>
                            <S.SpeechBubble />
                        </>
                    ) : (
                        <>
                            <>
                                <S.RudolfButtonWrapper>
                                    <RudolfButton onClick={handleSkin}/>
                                </S.RudolfButtonWrapper>
                                <S.SpeechBubble />
                            </>
                        </>
                    )}
                </S.ObjectWrapper>
                {isMyHome ? (
                    <>
                        <LongButton margin="52px 0 0 0" onClick={handleLetterList}>
                            <S.ButtonText>{'편지 확인하기'}</S.ButtonText>
                        </LongButton>
                        <LongButton margin="12px 0 0 0" onClick={handleShare}>
                            <S.ButtonText>{'링크 공유하기'}</S.ButtonText>
                        </LongButton>
                        <LongButton margin="12px 0 0 0" route={imageAllURL}>
                            <S.ButtonText>{'사진 모아보기'}</S.ButtonText>
                        </LongButton>
                    </>
                ) : (
                    <>
                        <LongButton margin="52px 0 0 0" onClick={handleSendLetter}>
                            <S.ButtonText>{'추억 달아주기'}</S.ButtonText>
                        </LongButton>
                        <LongButton margin="12px 0 0 0" route={myURL}>
                            <S.ButtonText>{'내 트리 보러가기'}</S.ButtonText>
                        </LongButton>

                    </>
                )}
            </PageLayout>

            {/* 공유하기 모달 */}
            <ShareModal closeModal={closeShareModal} isOpen={shareModalOpen} />
            {/* 스킨 선택 모달 */}
            <SkinModal closeModal={closeSkinModal} isOpen={skinModalOpen} />
             {/* 편지 리스트 모달 */}
            <LetterListModal closeModal={closeLetterListModal} isOpen={LetterListModalOpen} />
             {/* 편지 쓰기 모달 */}
            <SendLetterModal closeModal={closeSendLetterModal} isOpen={sendLetterModalOpen}/>
        </>
    ) 
}
