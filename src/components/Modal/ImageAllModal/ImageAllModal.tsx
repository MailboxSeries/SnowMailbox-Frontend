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
    // const {data} = useQuery({
    //     queryKey: ['images', myId],
    //     queryFn: () => getDayImages(selectedDate, myId),
    //     staleTime: 0,
    //     gcTime: 0
    // });


    // useEffect(() => {
    // // data가 로드된 후에 이미지 목록을 설정
    //     if (data) {
    //         setImageList(data.imageList);
    //     }
    // }, [data]);

    useEffect(() => {
        const fetchData = async () => {
  
            try {
                const response = await getDayImages(selectedDate, myId);
                setImageList(response.imageList); // 요청 성공 시 데이터 설정
            } catch (err) {
              alert('세션이 만료되었어요. 다시 로그인 해주세요.')
              navigate('/signin')
            } 
        };
  
        if (isOpen) {
            fetchData();
        }
    }, [isOpen, selectedDate]);
  


    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            modalTitle={`12월 ${selectedDate}일`}
            imageType={'Modal'}
        >
            <S.Wrapper>
                <S.InnerWrapper>
                    {imageList !== null && imageList.length > 0 ? (
                        imageList.map((imageSrc, index) => (
                            <S.LetterContent key={index}>
                                <S.LetterImage src={imageSrc} />
                            </S.LetterContent>
                        ))
                    ) : (
                        <S.NoContent>
                            아직 모인 사진이 없어요.
                        </S.NoContent>
                    )}  
                </S.InnerWrapper>
            </S.Wrapper>
        </Modal>
    );
    
}
export default React.memo(ImageAllModal);
