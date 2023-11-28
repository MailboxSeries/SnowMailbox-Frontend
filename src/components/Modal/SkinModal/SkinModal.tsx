import * as S from './style';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Character} from '@/assets/Character'
import {Tree} from '@/assets/Tree'
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
    });

    if (data !== null) {
      setSkinData(data);
    } else {
      alert("데이터를 가져오는 데에 실패했어요. 다시 로그인 해주세요.")
      //TODO: 로그인 페이지로 
    }
    
  useEffect(() => {
    // setSkinData로 상태를 업데이트한 후에 이 코드가 실행됩니다.
    // 이 시점에서 업데이트된 상태를ㄴ 사용할 수 있습니다.
    console.log('Updated skinData:', isSkinData);
  }, [isSkinData]); // isSkinData가 변경될 때마다 useEffect가 실행됩니다.

  const isDisabled = (type, index) => {
    if (!skinData[type + 'List'] || index < 0 || index >= skinData[type + 'List'].length) {
      return true; // 유효하지 않은 type 또는 index
    }
    
    return !skinData[type + 'List'][index].missionStatus;
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
      await queryClient.invalidateQueries({queryKey: ['checkSkin']});
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
      <MissionModal closeModal={closeMissionModal} isOpen={missionModalOpen} missionId={missionId} missionNumber={missionNumber} objectType={objectType}/>
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
                onClick={() => !isDisabled('tree', index) && setTreeType(tree.index)}
                isSelected={treeType === tree.index}
                >
                  <S.ImageButton
                    src={tree.imgSrc} 
                    selected={treeType === tree.index} 
                    style={{width: "80px", height: "107px"}}
                  />
                  {isDisabled('tree', index) && <S.LockIcon onClick={() => handleMissionModal(skinData.treeList[tree.index].missionId, tree.index, "tree")}/>}
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
          {Character.map((ornament, index) => ( //TODO: 오너먼트로 바꿔야함
                <S.SelectClickEvent 
                onClick={() => !isDisabled('ornament', index) && setOrnamentType(ornament.index)}
                isSelected={ornamentType === ornament.index}
                >
                  <S.ImageButton
                    src={ornament.imgSrc} 
                    selected={ornamentType === ornament.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {isDisabled('ornament', index) && <S.LockIcon onClick={() => handleMissionModal(skinData.ornamentList[ornament.index].missionId, ornament.index, "ornament")}/>}

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
          {Character.map((box, index) => ( //TODO: 선물상자로 바꿔야함
                <S.SelectClickEvent 
                onClick={() => !isDisabled('box', index) && setBoxType(box.index)}
                isSelected={boxType === box.index}
                >
                  <S.ImageButton
                    src={box.imgSrc} 
                    selected={boxType === box.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {isDisabled('box', index) && <S.LockIcon onClick={() => handleMissionModal(skinData.boxList[box.index].missionId, box.index, "box")}/>}
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
          {Character.map((star, index) => ( //TODO: 별로 바꿔야함
                <S.SelectClickEvent 
                onClick={() => !isDisabled('star', index) && setStarType(star.index)}
                isSelected={starType === star.index}
                >
                  <S.ImageButton
                    src={star.imgSrc} 
                    selected={starType === star.index} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {isDisabled('star', index) && <S.LockIcon onClick={() => handleMissionModal(skinData.starList[star.index].missionId, star.index, "star")}/>}
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
