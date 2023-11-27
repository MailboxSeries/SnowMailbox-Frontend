import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { skinDataState } from '@/atoms/SkinAtom'
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import { HomeData } from '@/interface/home';
type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function MissionModal({closeModal, isOpen}: Props) {
  const data = useRecoilValue<HomeData>(HomeDataAtom);
  const [isSkinData, setSkinData] = useRecoilState(skinDataState);
  const skinData = useRecoilValue(skinDataState);
  const [missionContent, setMissionContent] = useState<string>("지인에게 따뜻한 마음이 담긴 편지 1장을 보내봐요. 추운 겨울을 이겨내는 데에 큰 도움이 될 거예요. 어쩌면 지인이 당신임을 알게 된다면, 답장 편지가 되돌아올지도..?");
  useEffect(() => {
    // setSkinData로 상태를 업데이트한 후에 이 코드가 실행됩니다.
    // 이 시점에서 업데이트된 상태를ㄴ 사용할 수 있습니다.
    console.log('Updated skinData:', isSkinData);
  }, [isSkinData]); // isSkinData가 변경될 때마다 useEffect가 실행됩니다.


  const handleMissionClear = () => {
    //TODO: api 호출 
    //TODO: skinAtom에서 missionId를 가져와서 호출하면 될듯.
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
