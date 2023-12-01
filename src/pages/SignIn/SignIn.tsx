import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';
import useInput from '@/hooks/useInput';
import SocialButton from '@/components/Button/SocialButton/SocialButton';
import { postSignIn } from '@/apis/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import PolicyLinkText from '@/components/PolicyLinkText/PolicyLinkText';

export default function SignIn() {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const email = useInput<HTMLInputElement>(); 
    const password = useInput<HTMLInputElement>();

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: () =>
        postSignIn(email.value, password.value),
        onSuccess: async () => {
            navigate('/redirect');
        },
    });

    const handleCheckBlank = () => {
        // 입력값을 검사합니다.
        if (!email.value.trim() || !password.value.trim()) {
            alert('이메일 혹은 비밀번호를 입력해주세요!');
            return false; // 검사에 실패하면 false 반환
        } 
        return true; // 모든 입력값이 있으면 true 반환
    };

    const handleSignIn = () => {
        if(handleCheckBlank()) {
            mutate();
        }
    }

    const handleButtonKakao = () => {
        window.location.href = `https://snowmailbox.com/oauth2/authorization/kakao`;
    };

    const handleButtonNaver = () => {
        window.location.href = `https://snowmailbox.com/oauth2/authorization/naver`; 
        //alert("네이버 로그인은 1일 뒤에 오픈됩니다! 카카오 로그인을 이용해주세요!")
    };

    return (
        <>
        <PageLayout>
            <S.LoginForm >
                    <S.LoginInput
                        type="text"
                        placeholder="이메일"
                        value={email.value}
                        onChange={email.handleChange}
                    />
                    <S.LoginInput
                        type="password"
                        placeholder="비밀번호"
                        value={password.value}
                        onChange={password.handleChange}
                    />
                <LongButton 
                margin="64px 0 0 0" 
                onClick={handleSignIn} 
                type = "submit"
                >
                    <S.ButtonText>{'로그인하기'}</S.ButtonText>
                </LongButton>
                
            </S.LoginForm>

        
            <SocialButton 
            margin="8px 0 0 0" 
            socialType="KakaoSignIn"
            onClick={handleButtonKakao}
            />
            <SocialButton 
            margin="8px 0 0 0" 
            socialType="NaverSignIn"
            onClick={handleButtonNaver}
            />

            <PolicyLinkText />

        </PageLayout>
        
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            imageType={'SmallModal'}
            modalTitle={"예시"}
        >

        </Modal> 
        
        </>
    )
}
