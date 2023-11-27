import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';
import useInput from '@/hooks/useInput';
import SocialButton from '@/components/Button/SocialButton/SocialButton';

export default function SignIn() {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const email = useInput<HTMLInputElement>(); 
    const password = useInput<HTMLInputElement>();

    const handleCheckBlank = () => {
        // 입력값을 검사합니다.
        if (!email.value.trim() || !password.value.trim()) {
            alert('이메일 혹은 비밀번호를 입력해주세요!');
            return false; // 검사에 실패하면 false 반환
        } 
        return true; // 모든 입력값이 있으면 true 반환
    };

    const handleSignIn = () => { //TODO: 나중에 api구현해서 호출해야함
        handleCheckBlank();
    }

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
                
                {/*<GoogleLoginButton buttonImage={GoogleLoginImage} />*/}
            </S.LoginForm>

        
            <SocialButton 
            margin="8px 0 0 0" 
            route="https://snowmailbox.com/oauth2/authorization/kakao"
            socialType="KakaoSignIn"
            />
            <SocialButton 
            margin="8px 0 0 0" 
            route="https://snowmailbox.com/oauth2/authorization/naver"
            socialType="NaverSignIn"
            />
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
