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

function ImageAllModal({closeModal, isOpen, selectedDate}: Props) {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
    const [imageList, setImageList] = useState([
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ]); // 이미지 리스트를 위한 상태

    //TODO: api호출

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={`12월 ${selectedDate}일`}
        imageType={'Modal'}
        >
        <S.Wrapper>
            {imageList.map((imageSrc, index) => (
            <S.LetterContent key={index}>
                <S.LetterImage src={imageSrc} />
            </S.LetterContent>
            ))}
        </S.Wrapper>
        </Modal>
    );
}
export default React.memo(ImageAllModal);
