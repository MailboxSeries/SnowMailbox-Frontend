import React, { useCallback, useState } from 'react'
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
//import OrnamentLayer from '@/components/OrnamentLayer/OrnamentLayer'; //TODO: 오너먼트레이어 이미지 다 나오면 구현해야함.
import LongButton from '@/components/Button/LongButton/LongButton';
import ShareModal from '@/components/Modal/ShareModal/ShareModal';
import SkinModal from '@/components/Modal/SkinModal/SkinModal';
import LetterListModal from '@/components/Modal/Letter/LetterListModal/LetterListModal';
import useIsMyHome from '@/hooks/useIsMyHome';
import SendLetterModal from '@/components/Modal/Letter/SendLetterModal/SendLetterModal';
export default function Home() {
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const homeData = useRecoilValue(HomeDataAtom);
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
    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.OrnamentLayerWrapper>
                        <S.TreeImage treeType={homeData.treeType} />
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
