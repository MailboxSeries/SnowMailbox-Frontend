import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { getDayImages } from '@/apis/imageAll';
import { useQuery } from '@tanstack/react-query';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useNavigate } from 'react-router';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  selectedDate: number;
};

function ImageAllModal({closeModal, isOpen, selectedDate}: Props) {
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const navigate = useNavigate();
    const [imageList, setImageList] = useState([]);
    const {data} = useQuery({
        queryKey: ['images', myId],
        queryFn: () => getDayImages(selectedDate, myId),
        staleTime: 10000,
        gcTime: 15000
    });

    useEffect(() => {
    // data가 로드된 후에 이미지 목록을 설정
        if (data) {
            setImageList(data.imageList);
        }
    }, [data]);


    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            modalTitle={`12월 ${selectedDate}일`}
            imageType={'Modal'}
        >
            <S.Wrapper>
                {data !== null && imageList.map((imageSrc, index) => (
                <S.LetterContent key={index}>
                    <S.LetterImage src={imageSrc} />
                </S.LetterContent>
                ))}
            </S.Wrapper>
        </Modal>
    );
    
}
export default React.memo(ImageAllModal);
