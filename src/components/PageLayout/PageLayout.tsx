import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import * as S from './style';
import Menu from '@/components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';
import SnowFalling from '@/components/SnowFalling/SnowFalling';

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
    const { ownerId } = useParams<{ ownerId?: string }>(); // useParams 사용
    const navigate = useNavigate();
    const { isOpen, openModal, closeModal } = useModal();

    // ownerId가 있을 경우 nickname을 사용, 없으면 기본 텍스트
    const titleText = ownerId ? `${homeData.nickname}의 크리스마스 트리` : "눈꽃 우편함";

    return (
        <S.Layout>
            <Menu />
            <SnowFalling />
            <S.Wrapper>
                <S.TextWrapper>
                    <S.SubLogoText>2024년을 기다리며,</S.SubLogoText>
                    <S.LogoText>{titleText}</S.LogoText>
                    <S.SubLogoText>따뜻한 마음으로 크리스마스 트리를 꾸며봐요.</S.SubLogoText>
                </S.TextWrapper>
                {children}
            </S.Wrapper>
        </S.Layout>
    )
}
