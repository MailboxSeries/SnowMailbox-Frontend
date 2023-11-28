import * as S from './style';
import React, { useState } from 'react';
import Modal from '../Modal';
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getUnCompletedMissionContent, postCompletedChristmas, postCompletedMissionChecked } from '@/apis/skin';
import useInput from '@/hooks/useInput';
type Props = {
  closeModal: () => void;
  isOpen: boolean;
  missionId: string;
  missionNumber: number;
  objectType: string;
};

function MissionModal({closeModal, isOpen, missionId, missionNumber, objectType}: Props) {
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const [missionContent, setMissionContent] = useState<string>("지인에게 따뜻한 마음이 담긴 편지 1장을 보내봐요. 추운 겨울을 이겨내는 데에 큰 도움이 될 거예요. 어쩌면 지인이 당신임을 알게 된다면, 답장 편지가 되돌아올지도..?");
  const queryClient = useQueryClient();
  const missionAnswer = useInput<HTMLInputElement>(); // 보내는 사람 이름을 관리하는 상태

  const {data} = useSuspenseQuery({
    queryKey: ['disabledSkin', myId],
    queryFn: () => getUnCompletedMissionContent(myId, missionId),
  });

  if (data !== null) {
    setMissionContent(data.missionContent);
  } else {
    alert("데이터를 가져오는 데에 실패했어요. 다시 로그인 해주세요.")
    //TODO: 로그인 페이지로 
  }


  const mutation = useMutation({
      mutationFn: () =>
      postCompletedMissionChecked(myId, missionId, true),
      onSuccess: async () => {
          await queryClient.invalidateQueries({queryKey: ['completedmissionChecked']});
          alert("미션에 성공했어요! 새로운 스킨을 적용해보아요!")
          closeModal();
      },
  });

  const mutation2 = useMutation({
    mutationFn: () =>
    postCompletedChristmas(myId, missionId, missionAnswer.value),
    onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['completedmissionChecked']});
        alert("메리 크리스마스! 축하드려요!")
        closeModal();
    },
});

  const handleMissionClear = () => {
    if(missionNumber == 4 && objectType == "star") {
      mutation2.mutate();
    } else {
      mutation.mutate();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={'미션'}
      imageType={'Modal'}
    >
      <S.Wrapper>
        <S.SelectWrapper>
          <S.DiscriptionText>
            잠금표시 된 스킨은 미션을 클리어해야<br/>획득할 수 있어요. 미션을 클리어해봐요.
          </S.DiscriptionText>
          <S.MissionDiscription>
            {missionContent}
          </S.MissionDiscription>
          
        </S.SelectWrapper>
        { missionNumber == 4 && objectType == "star" &&(
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
        <ModalButton margin="12px 0 0 0" >
          <S.ButtonText onClick={handleMissionClear}>{'미션 완료하기'}</S.ButtonText>
        </ModalButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(MissionModal);
