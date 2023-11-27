import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { skinDataState } from '@/atoms/SkinAtom'
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import { HomeData } from '@/interface/home';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getUnCompletedMissionContent, postCompletedMissionChecked } from '@/apis/skin';
type Props = {
  closeModal: () => void;
  isOpen: boolean;
  missionId: string;
};

function MissionModal({closeModal, isOpen, missionId}: Props) {
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const homeData = useRecoilValue<HomeData>(HomeDataAtom);
  const skinData = useRecoilValue(skinDataState);
  const [missionContent, setMissionContent] = useState<string>("지인에게 따뜻한 마음이 담긴 편지 1장을 보내봐요. 추운 겨울을 이겨내는 데에 큰 도움이 될 거예요. 어쩌면 지인이 당신임을 알게 된다면, 답장 편지가 되돌아올지도..?");
  const queryClient = useQueryClient();
  
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


  const {mutate} = useMutation({
      mutationFn: () =>
      postCompletedMissionChecked(myId, missionId, true),
      onSuccess: async () => {
          await queryClient.invalidateQueries({queryKey: ['completedmissionChecked']});
          alert("미션에 성공했어요! 새로운 스킨을 적용해보아요!")
          closeModal();
      },
  });

  const handleMissionClear = () => {
    mutate();
    closeModal();
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
        

        <ModalButton margin="12px 0 0 0" >
          <S.ButtonText onClick={handleMissionClear}>{'미션 완료하기'}</S.ButtonText>
        </ModalButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(MissionModal);
