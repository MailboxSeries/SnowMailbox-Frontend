import * as S from './style';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import LongButton from '@/components/Button/LongButton/LongButton';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Character} from '@/assets/Character'
import {Tree} from '@/assets/Tree'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Data, HomeDataAtom } from '@/atoms/HomeAtom';
import { skinDataState } from '@/atoms/SkinAtom'
type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function MissionModal({closeModal, isOpen}: Props) {
  const data = useRecoilValue<Data>(HomeDataAtom);
  const [isSkinData, setSkinData] = useRecoilState(skinDataState);
  const skinData = useRecoilValue(skinDataState);

  useEffect(() => {
    // setSkinData로 상태를 업데이트한 후에 이 코드가 실행됩니다.
    // 이 시점에서 업데이트된 상태를ㄴ 사용할 수 있습니다.
    console.log('Updated skinData:', isSkinData);
  }, [isSkinData]); // isSkinData가 변경될 때마다 useEffect가 실행됩니다.


  const handleSelectSkin = () => {
    //TODO: api 호출 후 성공하면 recoil로 저장하고 모달 닫기.

      /*
    //TODO: 요청에 성공했을 때 recoil로 저장
    const newHomeData = {
      refreshToken: data.refreshToken,
      accessToken: data.accessToken,
      nickname: data.nickname,
      treeType: treeType,
      characterType: characterType,
      starType: starType,
      boxType: boxType,
      ornamentType: boxType,
      nowDate: data.nowDate,
    };
    setSkinData(newHomeData);
    */
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
            크리스마스 트리
          </S.MissionDiscription>
          
        </S.SelectWrapper>
        

        <LongButton margin="12px 0 0 0" >
          <S.ButtonText onClick={handleSelectSkin}>{'선택 완료하기'}</S.ButtonText>
        </LongButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(MissionModal);
