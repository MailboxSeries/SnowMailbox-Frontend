import React from 'react'
import * as S from './style';
import Menu from '@/components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';
import SnowFalling from '@/components/SnowFalling/SnowFalling';

type Props = {
    children: React.ReactNode;
  };

export default function PageLayout({
    children,
  }: Props) {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const navigate = useNavigate();

    return (
        <S.Layout>
            <SnowFalling />
            <Menu 
                onSignIn={() => navigate('/signin')} 
                onServiceDescription={openMission}/>
            <S.Wrapper>
                <S.TextWrapper>
                    <S.SubLogoText>2024년을 기다리며,</S.SubLogoText>
                    <S.LogoText>눈꽃 우편함</S.LogoText>
                    <S.SubLogoText>따뜻한 마음으로 크리스마스 트리를 꾸며봐요.</S.SubLogoText>
                </S.TextWrapper>
                {children}

            </S.Wrapper>
        </S.Layout>
    )
}
