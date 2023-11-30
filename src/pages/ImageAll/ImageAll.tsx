import { useCallback, useState } from 'react'
import * as S from './style';
import LongButton from '@/components/Button/LongButton/LongButton';
import useIsMyHome from '@/hooks/useIsMyHome';
import Picture1Img from '@/assets/Picture/1.png';
import Picture2Img from '@/assets/Picture/2.png';
import Picture3Img from '@/assets/Picture/3.png';
import ImageAllModal from '@/components/Modal/ImageAllModal/ImageAllModal';
import ArrowButton from '@/components/Button/ArrowButton/ArrowButton';
import LeftArrowButtonImg from '@/assets/Button/LeftArrow.png'

export default function ImageAll() {

  const {ownerId, myId, isMyHome} = useIsMyHome();
  const myURL = `/home/${myId}`;
  const images = [Picture1Img, Picture2Img, Picture3Img];
  const [day, setDay] = useState<number>(1);
  const [imageAllModalOpen, setImageAllModalOpen] = useState<boolean>(false);
  const nowDate = new Date().getDate(); //TODO: 
  //const nowDate = 1;

  const handleImageAll = useCallback((day) => {
    if(day+1 === nowDate) {
      setDay(day + 1);
      setImageAllModalOpen(true);
    } else if(day+1 > nowDate){
      alert(`${day + 1 - nowDate}일 뒤에 열어봐요!`);
    } else if(day+1 < nowDate){
      setDay(day + 1);
      setImageAllModalOpen(true);
    } 
  }, [setDay, setImageAllModalOpen]);
  

  const closeImageAllModal = useCallback(
    () => setImageAllModalOpen(false),
    [setImageAllModalOpen],
  );
  return (
    <>
      <S.Layout>
        <S.Container>
          <S.GridWrapper>
            {Array.from({ length: 25 }, (_, index) => (
              <S.Picture
                key={index}
                imgSrc={images[index % images.length]} // 이미지 순환//
                onClick={() => handleImageAll(index)}
              >{index+1}</S.Picture>
            ))}
          </S.GridWrapper>
          <ArrowButton currentImg={LeftArrowButtonImg} route={myURL}/>

        </S.Container>      
      </S.Layout>
    
      {/* 편지 모아보기 모달 */}
      <ImageAllModal closeModal={closeImageAllModal} isOpen={imageAllModalOpen} selectedDate={day}/>
    </>
  )
}
