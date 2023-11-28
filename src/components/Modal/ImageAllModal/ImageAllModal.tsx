import * as S from './style';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { getDayImages } from '@/apis/imageAll';
import { useQuery } from '@tanstack/react-query';
import useIsMyHome from '@/hooks/useIsMyHome';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  selectedDate: number;
};

function ImageAllModal({closeModal, isOpen, selectedDate}: Props) {
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const [imageList, setImageList] = useState([
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ]); // 이미지 리스트를 위한 상태

    const {data} = useQuery({
        queryKey: ['images', myId],
        queryFn: () => getDayImages(selectedDate, myId),
        staleTime: 10000,
    });

    if (data !== null) {
        setImageList(data.imageList);
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
