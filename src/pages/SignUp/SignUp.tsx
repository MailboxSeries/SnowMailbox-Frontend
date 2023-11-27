import React from 'react'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal';
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import LongButton from '@/components/Button/LongButton/LongButton';
import useInput from '@/hooks/useInput';
import { Button } from '@/components/Button/style';

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

    const handleCheckBlank = () => {
        // 모든 입력값을 검사합니다.
        if (!userName.value.trim() || !email.value.trim() || !password.value.trim()) {
            alert('이름, 이메일, 비밀번호를 모두 입력해주세요!');
            return false; // 검사에 실패하면 false 반환
        } 
        return true; // 모든 입력값이 있으면 true 반환
    };
    

    const handleSignUp = () => { //TODO: 나중에 api구현해서 호출해야함
        if (handleCheckBlank()) {
            // TODO: 회원가입 API 호출
        }
    }

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

            
            <LongButton margin="8px 0 0 0" route="https://snowmailbox.com/oauth2/authorization/kakao">
            <S.ButtonText>{'카카오로 가입하기'}</S.ButtonText>
            </LongButton>
            <LongButton margin="8px 0 0 0" route="https://snowmailbox.com/oauth2/authorization/naver">
            <S.ButtonText>{'네이버로 가입하기'}</S.ButtonText>
            </LongButton>
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
