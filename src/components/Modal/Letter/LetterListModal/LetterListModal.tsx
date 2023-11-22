import * as S from './style';
import React, { useCallback, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import LetterReadModal from '../LetterReadModal/LetterReadModal';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function LetterListModal({closeModal, isOpen}: Props) {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
    const [selectedDate, setSelectedDate] = useState<number>(1);
    const [LetterReadModalOpen, setLetterReadModalOpen] = useState<boolean>(false);
    const closeLetterReadModal = useCallback(
        () => setLetterReadModalOpen(false),
        [setLetterReadModalOpen],
    );

    const handleLetterReadModalOpen = (selectedDate: number) => {
        setSelectedDate(selectedDate); // 버튼을 클릭하면 선택된 날짜를 설정합니다.
        setLetterReadModalOpen(true);
    };

    return (
        <>
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={'2024년을 기다리는 편지'}
        imageType={'Modal'}
        >
        <S.Wrapper>
        <S.ButtonWrapper>
            {Array.from({ length: 25 }).map((_, index) => {
            
                const date = index + 1;
                let isButtonActive = false;
                if (homeData.nowDate !== null && date < homeData.nowDate) {
                    isButtonActive = true;
                } else if (homeData.nowDate !== null && date === homeData.nowDate) {
                    isButtonActive = true;
                } 

                return (
                    <S.OrnamentButton
                    key={index}
                    onClick={() => {
                        if (isButtonActive) {
                            handleLetterReadModalOpen(date);
                        } else {
                            alert(`${date - homeData.nowDate}일 뒤에 열람 가능해요.`)
                        }
                    }}
                    OrnamentImage={
                    (!isButtonActive ? "OrnamentButtonDisabledImg" : "OrnamentButtonImg" ) }
                    >
                    {date}
                    </S.OrnamentButton>
                );
            })}
        </S.ButtonWrapper>
        </S.Wrapper>
        </Modal>

         {/* 편지 리스트 모달 */}
         <LetterReadModal closeModal={closeLetterReadModal} isOpen={LetterReadModalOpen} selectedDate={selectedDate}/>
         </>
    );
}
export default React.memo(LetterListModal);
