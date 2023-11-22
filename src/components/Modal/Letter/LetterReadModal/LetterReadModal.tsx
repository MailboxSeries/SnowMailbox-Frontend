import * as S from './style';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  selectedDate: number;
};

// 편지 정보를 저장할 타입을 정의합니다.
type Letter = {
    sender: string;
    image: string;
    content: string;
  };

function LetterReadModal({closeModal, isOpen, selectedDate}: Props) {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
    const [letters, setLetters] = useState<Letter[]>([ //TODO: 더미데이터. 배포시 삭제
        {
            sender:"ㅇㅇ",
            image:"",
            content:"ㅇㅇ"
        }
    ]); // 선택된 날짜의 편지들을 저장할 상태입니다.
    //TODO: api호출해서 받은 값을 setLetters 해야함.

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={`12월 ${selectedDate}일`}
        imageType={'Modal'}
        >
        <S.Wrapper>
            {letters.map((letter, index) => (
            <S.LetterContent key={index}>
                <S.TextsStyle>
                <S.SenderNameText>보낸이: {letter.sender}</S.SenderNameText>
                <S.LetterImage src={letter.image} />
                <S.LetterContentText>{letter.content}</S.LetterContentText>
                </S.TextsStyle>
            </S.LetterContent>
            ))}
        </S.Wrapper>
        </Modal>
    );
}
export default React.memo(LetterReadModal);
