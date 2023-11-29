import React, { useCallback, useEffect, useState, useMemo } from 'react'
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
import ArrowButton from '@/components/Button/ArrowButton/ArrowButton';
import RightArrowButtonImg from '@/assets/Button/RightArrow.png'
import { loginStateAtom, userInfoAtom } from '@/atoms/SignInAtom';
import { useNavigate } from 'react-router-dom';

const STALE_MIN = 5;

function Home() {
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const homeData = useRecoilValue(HomeDataAtom);
    const setHomeData = useSetRecoilState(HomeDataAtom);
    const navigate = useNavigate();
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
    const handleShare = useCallback(() => { 
        setShareModalOpen(true);
    }, []);
    const [skinModalOpen, setSkinModalOpen] = useState<boolean>(false);
    const handleSkin = useCallback(() => {
        setSkinModalOpen(true);
    }, []);
    const [LetterListModalOpen, setLetterListModalOpen] = useState<boolean>(false);
    const handleLetterList = useCallback(() => { 
        setLetterListModalOpen(true);
    }, []);
    const [sendLetterModalOpen, setSendLetterModalOpen] = useState<boolean>(false);
    const handleSendLetter = useCallback(() => { 
        if(loggedIn) {
            setSendLetterModalOpen(true);
        } else {
            alert('로그인을 하면 이용 가능해요!')
            navigate("/signin");
            localStorage.setItem("redirectOwnerId", `${ownerId}`) //다시 이동하기 위함.
        }
    }, []);
    const myURL = `https://snowmailbox.com/home/${myId}`;
    const handleGoMyHome = useCallback(() => {
        if(loggedIn) {
            window.location.href = myURL
        } else {
            alert('로그인을 하면 이용 가능해요!')
            navigate("/signin");
            localStorage.setItem("redirectOwnerId", `${ownerId}`) //다시 이동하기 위함.
        }
    }, []);
    const imageAllURL = `/image-all/${myId}`;
    const loggedIn = useRecoilValue(loginStateAtom); //로그인 상태인지 확인하기 위함.

    const {data} = useQuery<HomeData>({
        queryKey: ["homeData", ownerId],
        queryFn: () => home.getHomeData(ownerId),
        staleTime: 1000 * 60 * STALE_MIN,
        gcTime: 1000 * 60 * STALE_MIN,
        enabled: !!ownerId, // ownerId가 정의되었을 때만 쿼리를 활성화
    });

    // 서버에서 가져온 데이터를 Recoil Atom에 저장
    useEffect(() => {
        if (data) {
        setHomeData(data);
        }
    }, [data]);

    const closeShareModal = useCallback(() => {
        setShareModalOpen(false)
    }, []);

    const closeSkinModal = useCallback(() => {
        setSkinModalOpen(false)
    }, []);

    const closeLetterListModal = useCallback(() => {
        setLetterListModalOpen(false)

    }, []);

    const closeSendLetterModal = useCallback(() => {
        setSendLetterModalOpen(false)
    }, []);

    const selectedOrnamentLayer = useMemo(() => {
        switch(homeData.ornamentType) {
            case 1: return OrnamentLayer1;
            case 2: return OrnamentLayer2;
            case 3: return OrnamentLayer3;
            case 4: return OrnamentLayer4;
            default: return [];
        }
    }, [homeData.ornamentType]);

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
                                <RudolfButton onClick={() => {handleSkin()}}/>
                            </S.RudolfButtonWrapper>
                            <S.SpeechBubble />
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </S.ObjectWrapper>
                {isMyHome ? (
                    <>
                        <LongButton margin="52px 0 0 0" onClick={() => {handleLetterList()}}>
                            <S.ButtonText>{'편지 확인하기'}</S.ButtonText>
                        </LongButton>
                        <LongButton margin="12px 0 0 0" onClick={() => {handleShare()}}>
                            <S.ButtonText>{'링크 공유하기'}</S.ButtonText>
                        </LongButton>
                        <ArrowButton currentImg={RightArrowButtonImg} route={imageAllURL} />
                    </>
                ) : (
                    <>
                        <LongButton margin="52px 0 0 0" onClick={() => {handleSendLetter()}}>
                            <S.ButtonText>{'추억 달아주기'}</S.ButtonText>
                        </LongButton>
                        <LongButton margin="12px 0 0 0" onClick={() => {handleGoMyHome()}}>
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
export default React.memo(Home);
