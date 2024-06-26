import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getUnCompletedMissionContent, postCompletedChristmas, postCompletedMissionChecked } from '@/apis/skin';
import useInput from '@/hooks/useInput';
import MediumButtonImg from '@/assets/Button/MediumButton.png';
import MediumButtonDisabledImg from '@/assets/Button/MediumButtonDisabled.png';
import { useNavigate } from 'react-router-dom';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  missionId: string;
  typeNumber: number;
  objectType: string;
  missionStatus: string;
};

function MissionModal({closeModal, isOpen, missionId, typeNumber, objectType, missionStatus}: Props) {
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const [missionContent, setMissionContent] = useState<string>("");
  const queryClient = useQueryClient();
  const missionAnswer = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태
  const navigate = useNavigate();
  const {data} = useSuspenseQuery({
    queryKey: ['disabledSkin', myId],
    queryFn: () => getUnCompletedMissionContent(myId, missionId),
  });
  useEffect(() => {
    if (data) {
      setMissionContent(data.missionContent);
    }
  }, [data]);

  const mutation = useMutation({
      mutationFn: () =>
      postCompletedMissionChecked(myId, missionId, true),
      onSuccess: async () => {
          await queryClient.invalidateQueries({queryKey: ['abledSkin', myId]});
          alert("미션에 성공했어요! 새로운 스킨을 적용해보아요!")
          closeModal();
      },
      onError: (error) => {
        alert("세션이 만료되었어요. 다시 로그인 해주세요!")
        navigate('/signin')      
      },
  });

  const mutation2 = useMutation({
    mutationFn: () =>
    postCompletedChristmas(myId, missionId, missionAnswer.value),
    onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['abledSkin', myId]});
        alert("메리 크리스마스! 축하드려요!")
        closeModal();
    },
    onError: (error) => {
      alert("세션이 만료되었어요. 다시 로그인 해주세요!")
      navigate('/signin')
    },
});

  const handleMissionClear = () => {
    if(typeNumber == 4 && objectType == "star") {
      if(missionStatus == 'unlocked') {
        mutation2.mutate();
      } else {
        alert('미션을 완료하지 못했어요.')
        closeModal();
      }
      
    } else {
      if(missionStatus == 'unlocked') {
        mutation.mutate();
      } else {
        alert('미션을 완료하지 못했어요.')
        closeModal();
      }
      
    }
  }

  const modalButtonBackground = missionStatus === 'unlocked' 
  ? MediumButtonImg 
  : (missionAnswer.value === '크리스마스' || missionAnswer.value === 'christmas') 
      ? MediumButtonImg 
      : MediumButtonDisabledImg;

  return (
    <Modal
      isOpen={isOpen}
      onClose={()=>{closeModal()}}
      modalTitle={'미션'}
      imageType={'Modal'}
    >
      <S.Wrapper>
      <ModalCloseButton onClick={()=>{closeModal()}} />
        <S.SelectWrapper>
          <S.DiscriptionText>
            잠금표시 된 스킨은 미션을 클리어해야<br/>획득할 수 있어요. 미션을 클리어해봐요.
          </S.DiscriptionText>
          <S.MissionDiscription>
            {missionContent}
          </S.MissionDiscription>
          
        </S.SelectWrapper>
        { typeNumber == 4 && objectType == "star" &&(
          <S.NameInput
              maxLength={15}
              type="text"
              name="missionAnswer"
              placeholder="정답을 입력해주세요!"
              value={missionAnswer.value}
              onChange={missionAnswer.handleChange}
          />
          )
        }
        <ModalButton margin="12px 0 0 0" background={modalButtonBackground}>
          <S.ButtonText onClick={handleMissionClear}>{'미션 완료하기'}</S.ButtonText>
        </ModalButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(MissionModal);
