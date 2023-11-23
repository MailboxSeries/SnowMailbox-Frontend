import * as S from './style';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import useInput from '@/hooks/useInput';
import LongButton from '@/components/Button/LongButton/LongButton';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  selectedDate: number;
};

function SendLetterModal({closeModal, isOpen}: Props) {
    const homeData = useRecoilValue(HomeDataAtom); // Recoil 상태 사용
    const sender = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
    const content = useInput<HTMLTextAreaElement>(); // 편지 내용을 관리하는 상태
    const [imageFile, setImageFile] = useState(null); // 업로드할 이미지 파일을 관리하는 상태
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer>(''); // 업로드 된 이미지 url 관리하는 상태

      // 편지를 보내는 함수입니다.
    const handleSendLetter = async () => {
        //TODO: api 호출
        closeModal();
    };

    // 이미지 업로드 핸들링 
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // 이미지 객체를 생성하여 크기 확인
            const img = new Image();
            img.onload = () => {
            setUploadedImage(reader.result as string); // 타입 단언을 사용하여 string으로 설정
            };
            img.src = reader.result as string; // 여기도 타입 단언을 사용하여 string으로 설정
        };
        reader.readAsDataURL(file);
        setImageFile(file); // 나중에 업로드할 이미지 파일을 상태에 저장
        }
    };

    const handleCheckExistSenderContent = async () => {
        if (!imageFile || !content.value.trim()) {
          alert('이름과 편지 모두 입력해야 해요.');
          //return; //TODO: 실제 환경에서 주석 해제하기
        } else {
            handleSendLetter();
        }
      };

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={`추억 달아주기`}
        imageType={'Modal'}
        >
        <S.Wrapper>
            <S.Form onSubmit={handleSendLetter}>

                <S.ImageUploadLabel
                    htmlFor="image-upload"
                    onClick={(event) => event.stopPropagation()}
                >
                    <S.ImageInput
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                    />
                    {uploadedImage ? (
                    <S.ImagePreview src={uploadedImage as string} />
                    ) : (
                        <></>
                    )}
                </S.ImageUploadLabel>
                <S.NameInput
                    maxLength={10}
                    type="text"
                    name="guestName" // 상태와 일치하는 name 속성
                    placeholder="이름을 적어주세요."
                    value={sender.value}
                    onChange={sender.handleChange}
                />
                <S.CheckTextLength>{sender.value.length}/10</S.CheckTextLength>
                <S.LetterArea
                    placeholder="따뜻한 마음을 남겨주세요."
                    maxLength={200}
                    value={content.value}
                    onChange={content.handleChange}
                />
                <S.CheckTextLength>{content.value.length}/200</S.CheckTextLength>
            </S.Form>
            
            <LongButton margin="12px 0 0 0">
                <S.ButtonText onClick={
                  handleCheckExistSenderContent
                }>{'보내기'}</S.ButtonText>
            </LongButton>
        </S.Wrapper>
        </Modal>
    );
}
export default React.memo(SendLetterModal);
