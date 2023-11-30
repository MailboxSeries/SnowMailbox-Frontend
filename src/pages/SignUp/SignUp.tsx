import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';
import useInput from '@/hooks/useInput';
import { Button } from '@/components/Button/style';
import SocialButton from '@/components/Button/SocialButton/SocialButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSignUp } from '@/apis/auth';
import { useNavigate } from 'react-router-dom';
import PolicyLinkText from '@/components/PolicyLinkText/PolicyLinkText';

export default function SignUp() {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const userName = useInput<HTMLInputElement>(); 
    const email = useInput<HTMLInputElement>(); 
    const password = useInput<HTMLInputElement>();
    const BASE_URL = "https://snowmailbox.com"
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: () =>
        postSignUp(email.value, userName.value, password.value),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            navigate('/redirect');
        },
    });

    const handleCheckBlank = () => {
        // 모든 입력값을 검사합니다.
        if (!userName.value.trim() || !email.value.trim() || !password.value.trim()) {
            alert('이름, 이메일, 비밀번호를 모두 입력해주세요!');
            return false; // 검사에 실패하면 false 반환
        } 
        return true; // 모든 입력값이 있으면 true 반환
    };
    

    const handleSignUp = () => {
        if (handleCheckBlank()) {
            mutate();
        }
    }
    const handleButtonKakao = () => {
        window.location.href = `https://snowmailbox.com/oauth2/authorization/kakao`;
    };

    const handleButtonNaver = () => {
        //window.location.href = `https://snowmailbox.com/oauth2/authorization/naver`; //TODO: 검수 끝나면 주석 해제
        alert("네이버로 가입하기는 1일 뒤에 오픈됩니다! 카카오 로그인을 이용해주세요!")
    };

  return (
    <>
      <PageLayout>
        <S.SignUpForm >
            
            <S.SignUpInput
                type="text"
                placeholder="이름"
                value={userName.value}
                onChange={userName.handleChange}
            />

            <S.SignUpInput
                type="email"
                placeholder="이메일"
                value={email.value}
                onChange={email.handleChange}
            />
            
            <S.SignUpInput
                type="password"
                placeholder="비밀번호"
                value={password.value}
                onChange={password.handleChange}
            />
            <LongButton margin="64px 0 0 0" onClick={handleSignUp} type = "submit">
                <S.ButtonText>{'회원가입하기'}</S.ButtonText>
            </LongButton>
        </S.SignUpForm>

            
            <SocialButton 
            margin="8px 0 0 0" 
            socialType="KakaoSignUp"
            onClick={handleButtonKakao}
            />
            <SocialButton 
            margin="8px 0 0 0" 
            socialType="NaverSignUp"
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
