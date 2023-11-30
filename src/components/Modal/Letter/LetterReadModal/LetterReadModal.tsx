import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getDayLetter } from '@/apis/letter';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useNavigate } from 'react-router';

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
    const navigate = useNavigate();
    const [letters, setLetters] = useState<Letter[]>([]); // 선택된 날짜의 편지들을 저장할 상태입니다.

    
    // const {data} = useSuspenseQuery({
    //     queryKey: ['dayLetter', myId],
    //     queryFn: () => getDayLetter(selectedDate, myId),
    //     staleTime: 0,
    //     gcTime: 0,
    // });

    useEffect(() => {
      const fetchData = async () => {

          try {
              const response = await getDayLetter(selectedDate, myId);
              setLetters(response.letterList); // 요청 성공 시 데이터 설정
          } catch (err) {
            alert('세션이 만료되었어요. 다시 로그인 해주세요.')
            navigate('/signin')
          } 
      };

      if (isOpen) {
          fetchData();
      }
  }, [isOpen, selectedDate, myId]); // 의존성 배열에 isOpen, selectedDate, myId 추가

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={`12월 ${selectedDate}일`}
        imageType={'Modal'}
        >
        <S.Wrapper>
          <S.InnerWrapper>
            {letters !== null && letters.length > 0 ? (
              letters.map((letter, index) => (
                <S.LetterContent key={index}>
                    <S.TextsStyle>
                    <S.SenderNameText>보낸이: {letter.sender}</S.SenderNameText>
                    <S.ImageWrapper>
                      <S.LetterImage src={letter.image} />
                    </S.ImageWrapper>
                    <S.LetterContentText>{letter.content}</S.LetterContentText>
                    </S.TextsStyle>
                </S.LetterContent>
                ))
              ) : (
                  <S.NoContent>
                      아직 받은 편지가 없어요.
                  </S.NoContent>
              )}  
          </S.InnerWrapper>
        </S.Wrapper>
        </Modal>
    );
}
export default React.memo(LetterReadModal);
