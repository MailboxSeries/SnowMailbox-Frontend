import React from 'react'
import * as S from './style';
import Menu from '@/components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';

export default function PageLayout() {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const navigate = useNavigate();

    return (
        <S.Layout>
            <S.Wrapper>
                <Menu 
                onSignIn={() => navigate('/signin')} 
                onServiceDescription={openMission}/>
            </S.Wrapper>
        </S.Layout>
    )
}
