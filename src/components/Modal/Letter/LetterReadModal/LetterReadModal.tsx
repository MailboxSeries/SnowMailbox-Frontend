import * as S from './style';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getDayLetter } from '@/apis/letter';
import useIsMyHome from '@/hooks/useIsMyHome';

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
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const [letters, setLetters] = useState<Letter[]>([ //TODO: 더미데이터. 배포시 삭제
        {
            sender:"ㅇㅇ",
            image:"",
            content:"ㅇㅇ"
        }
    ]); // 선택된 날짜의 편지들을 저장할 상태입니다.

    const {data} = useSuspenseQuery({
        queryKey: ['dayLetter', myId],
        queryFn: () => getDayLetter(selectedDate, myId),
    });
  
      if (data !== null) {
        setLetters(data.letterList);
      } else {
        alert("데이터를 가져오는 데에 실패했어요. 다시 로그인 해주세요.")
        //TODO: 로그인 페이지로 
      }
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
