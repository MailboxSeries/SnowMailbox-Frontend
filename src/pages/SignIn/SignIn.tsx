import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';
import useInput from '@/hooks/useInput';

export default function SignIn() {
    // 모달 상태관리
    const {
        isOpen: isOpen,
        openModal: openMission,
        closeModal: closeModal,
    } = useModal();
    const email = useInput<HTMLInputElement>(); 
    const password = useInput<HTMLTextAreaElement>();

    const handleCheckBlank = () => {
        // 입력값을 검사합니다.
        if (!email.value.trim() || !password.value.trim()) {
          alert('이메일 혹은 비밀번호를 입력해주세요!');
          return;
        } 
      };

    const handleSignUp = () => {
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
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                    />
                    <S.LoginInput
                        type="password"
                        placeholder="비밀번호"
                        value={password.value}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                    />
                <LongButton margin="64px 0 0 0" onClick={handleSignUp} type = "submit">
                    <S.ButtonText>{'로그인하기'}</S.ButtonText>
                </LongButton>
                
                {/*<GoogleLoginButton buttonImage={GoogleLoginImage} />*/}
            </S.LoginForm>

        
            <LongButton margin="8px 0 0 0" route=""> {/*TODO: 추가해야함*/}
            <S.ButtonText>{'카카오로 로그인하기'}</S.ButtonText>
            </LongButton>
            <LongButton margin="8px 0 0 0" route=""> {/*TODO: 추가해야함*/}
            <S.ButtonText>{'네이버로 로그인하기'}</S.ButtonText>
            </LongButton>
        </PageLayout>
        
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            imageType={'SmallModalGreen'}
            modalTitle={"예시"}
        >

        </Modal> 
        
        </>
    )
}
