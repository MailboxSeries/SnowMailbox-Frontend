import * as S from './style';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Character} from '@/assets/Character'
import {Tree} from '@/assets/Tree'
import { OrnamentThumnail } from '@/assets/OrnamentThumbnail';
import { BoxThumnail } from '@/assets/BoxThumbnail';
import { StarThumbnail } from '@/assets/StarThumbnail';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { skinDataState } from '@/atoms/SkinAtom'
import MissionModal from "@/components/Modal/MissionModal/MissionModal"
import { HomeData } from '@/interface/home';
import ModalButton from '@/components/Button/ModalButton/ModalButton';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getMissionStatus, postSelectedSkin } from '@/apis/skin';
import useIsMyHome from '@/hooks/useIsMyHome';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function SkinModal({closeModal, isOpen}: Props) {
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const homeData = useRecoilValue<HomeData>(HomeDataAtom);
  const setHomeData = useSetRecoilState(HomeDataAtom);
  const [treeType, setTreeType] = useState<number>(homeData.treeType);
  const [characterType, setCharacterType] = useState<number>(homeData.characterType);
  const [starType, setStarType] = useState<number>(homeData.starType);
  const [boxType, setBoxType] = useState<number>(homeData.boxType);
  const [ornamentType, setOrnamentType] = useState<number>(homeData.ornamentType);
  const [missionModalOpen, setMissionModalOpen] = useState<boolean>(false);
  const [isSkinData, setSkinData] = useRecoilState(skinDataState);
  const skinData = useRecoilValue(skinDataState);
  const queryClient = useQueryClient();
  const closeMissionModal = useCallback(
    () => setMissionModalOpen(false),
    [setMissionModalOpen],
  );

  const {data} = useSuspenseQuery({
      queryKey: ['abledSkin', myId],
      queryFn: () => getMissionStatus(myId),
      staleTime: 10000,
    });

    if (data !== null) {
      setSkinData(data);
    } else {
      alert("데이터를 가져오는 데에 실패했어요. 다시 로그인 해주세요.")
      //TODO: 로그인 페이지로 
    }

  const getSkinStatus = (type, index) => {
    const item = skinData[type + 'List'] && skinData[type + 'List'][index];
    if (!item) return 'disabled'; // 유효하지 않은 type 또는 index
  
    if (item.missionStatus && !item.missionChecked) return 'unlocked';
    if (!item.missionStatus && !item.missionChecked) return 'locked';
    return 'none'; // 모든 조건을 만족하지 않을 경우
  };

  const {mutate} = useMutation({
    mutationFn: () =>
    postSelectedSkin(myId, treeType, characterType, starType, boxType, ornamentType),
    onSuccess: async () => {
      const newHomeData = {
        ...homeData, // 기존의 homeData를 유지하면서
        treeType: treeType,
        characterType: characterType,
        starType: starType,
        boxType: boxType,
        ornamentType: ornamentType,
      };

      // HomeDataAtom의 상태를 업데이트합니다.
      setHomeData(newHomeData);
      await queryClient.invalidateQueries({queryKey:  ["homeData", ownerId]});
      alert("새로운 스킨이 적용되었어요!")
      closeModal();
        
    },
});

  const handleSelectSkin = () => {
    mutate();
  }
  const handleMissionModal = (missionId : string, missionNumber: number, objectType: string) => {
    setMissionModalOpen(true)
    return(
      <MissionModal closeModal={closeMissionModal} isOpen={true} missionId={missionId} missionNumber={missionNumber} objectType={objectType}/>
    )
  }
  
  return (
    <> 
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      modalTitle={'트리 꾸미기'}
      imageType={'Modal'}
    >
      <S.Wrapper>
        <S.SelectWrapper>
          <S.DiscriptionText>
            잠금표시 된 스킨은 미션을 클리어해야<br/>획득할 수 있어요. 자물쇠를 클릭해봐요.
          </S.DiscriptionText>
          <S.SelectTitle>
            크리스마스 트리
          </S.SelectTitle>
          <Carousel 
          showThumbs={false} 
          showStatus={false} 
          centerMode 
          centerSlidePercentage={33}>
          {Tree.map((tree, index) => (
                <S.SelectClickEvent 
                onClick={() => getSkinStatus('tree', index) !== 'disabled' && setTreeType(tree.index)}
                isSelected={treeType === tree.index && getSkinStatus('tree', index) == 'disabled'}
                >
                  <S.ImageButton
                    src={tree.imgSrc} 
                    selected={treeType === tree.index} 
                    style={{width: "80px", height: "107px"}}
                  />
                  {getSkinStatus('tree', index) === 'locked' && <S.LockIcon onClick={() => handleMissionModal(skinData.treeList[tree.index].missionId, tree.index, "tree")}/>}
                  {getSkinStatus('tree', index) === 'unlocked' && <S.UnLockIcon onClick={() => handleMissionModal(skinData.treeList[tree.index].missionId, tree.index, "tree")}/>}
                </S.SelectClickEvent>
              ))}
          </Carousel>

          <S.SelectTitle>
            오너먼트
          </S.SelectTitle>
          <Carousel 
          showThumbs={false} 
          showStatus={false} 
          centerMode 
          centerSlidePercentage={33}>
          {OrnamentThumnail.map((ornament, index) => ( 
                <S.SelectClickEvent 
                onClick={() => getSkinStatus('ornament', index) !== 'disabled' && setOrnamentType(ornament.index)}
                isSelected={ornamentType === ornament.index && getSkinStatus('ornament', index) == 'disabled'}
                >
                  <S.ImageButton
                    src={ornament.imgSrc} 
                    selected={ornamentType === ornament.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('ornament', index) === 'locked' && <S.LockIcon onClick={() => handleMissionModal(skinData.ornamentList[ornament.index].missionId, ornament.index, "ornament")}/>}
                  {getSkinStatus('ornament', index) === 'unlocked' && <S.UnLockIcon onClick={() => handleMissionModal(skinData.ornamentList[ornament.index].missionId, ornament.index, "ornament")}/>}
                </S.SelectClickEvent>
              ))}
          </Carousel>

          <S.SelectTitle>
            선물상자
          </S.SelectTitle>
          <Carousel 
          showThumbs={false} 
          showStatus={false} 
          centerMode 
          centerSlidePercentage={33}>
          {BoxThumnail.map((box, index) => (
                <S.SelectClickEvent 
                onClick={() => getSkinStatus('box', index) !== 'disabled' && setBoxType(box.index)}
                isSelected={boxType === box.index && getSkinStatus('box', index) == 'disabled'}
                >
                  <S.ImageButton
                    src={box.imgSrc} 
                    selected={boxType === box.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('box', index) === 'locked' && <S.LockIcon onClick={() => handleMissionModal(skinData.boxList[box.index].missionId, box.index, "box")}/>}
                  {getSkinStatus('box', index) === 'unlocked' && <S.UnLockIcon onClick={() => handleMissionModal(skinData.boxList[box.index].missionId, box.index, "box")}/>}                
                </S.SelectClickEvent>
              ))}
          </Carousel>

          <S.SelectTitle>
            별 오너먼트
          </S.SelectTitle>
          <Carousel 
          showThumbs={false} 
          showStatus={false} 
          centerMode 
          centerSlidePercentage={33}>
          {StarThumbnail.map((star, index) => (
                <S.SelectClickEvent 
                onClick={() => getSkinStatus('star', index) !== 'disabled' && setStarType(star.index)}
                isSelected={starType === star.index && getSkinStatus('star', index) == 'disabled'}
                >
                  <S.ImageButton
                    src={star.imgSrc} 
                    selected={starType === star.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('star', index) === 'locked' && <S.LockIcon onClick={() => handleMissionModal(skinData.starList[star.index].missionId, star.index, "star")}/>}
                  {getSkinStatus('star', index) === 'unlocked' && <S.UnLockIcon onClick={() => handleMissionModal(skinData.starList[star.index].missionId, star.index, "star")}/>}                                
                </S.SelectClickEvent>
              ))}
          </Carousel>

          <S.SelectTitle>
            캐릭터
          </S.SelectTitle>
          <Carousel 
          showThumbs={false} 
          showStatus={false} 
          centerMode 
          centerSlidePercentage={33}>
          {Character.map((character) => (
                <S.SelectClickEvent 
                onClick={() => setCharacterType(character.index)}
                isSelected={characterType === character.index}
                >
                  <S.ImageButton
                    src={character.imgSrc} 
                    selected={characterType === character.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                </S.SelectClickEvent>
              ))}
          </Carousel>
        </S.SelectWrapper>
  
        <ModalButton margin="12px 0 0 0" >
          <S.ButtonText onClick={handleSelectSkin}>{'선택 완료하기'}</S.ButtonText>
        </ModalButton>

      </S.Wrapper>
    </Modal>
    </>
  );
}
export default React.memo(SkinModal);
