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
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMissionStatus, postSelectedSkin } from '@/apis/skin';
import useIsMyHome from '@/hooks/useIsMyHome';
import home from '@/apis/home';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function SkinModal({closeModal, isOpen}: Props) {
  const {ownerId, myId, isMyHome} = useIsMyHome();
  const setHomeData = useSetRecoilState<HomeData>(HomeDataAtom);
  const homeData = useRecoilValue<HomeData>(HomeDataAtom);
  const [treeType, setTreeType] = useState<number>(homeData?.treeType);
  const [characterType, setCharacterType] = useState<number>(homeData?.characterType);
  const [starType, setStarType] = useState<number>(homeData?.starType);
  const [boxType, setBoxType] = useState<number>(homeData?.boxType);
  const [ornamentType, setOrnamentType] = useState<number>(homeData?.ornamentType);
  const [missionModalOpen, setMissionModalOpen] = useState<boolean>(false);
  const [isSkinData, setSkinData] = useRecoilState(skinDataState);
  const skinData = useRecoilValue(skinDataState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const closeMissionModal = useCallback(
    () => setMissionModalOpen(false),
    [setMissionModalOpen],
  );

  const [selectedMission, setSelectedMission] = useState({
    missionId: '',
    typeNumber: 0,
    objectType: '',
    missionStatus: ''
  });

  const typeData = useQuery<HomeData>({
    queryKey: ["homeData", ownerId],
    queryFn: () => home.getHomeData(ownerId),
    enabled: !!ownerId, // ownerId가 정의되었을 때만 쿼리를 활성화
});

  useEffect(() => {
    if (typeData) {
      setHomeData(typeData.data);
    }
  }, [typeData]);

  const {data} = useSuspenseQuery({
      queryKey: ['abledSkin', myId],
      queryFn: () => getMissionStatus(myId),
      staleTime: 10000,
      gcTime: 10000
    });

    useEffect(() => {
      if (data) {
        setSkinData(data);
      }
    }, [data]);

    useEffect(() => {
      if (homeData) {
        setTreeType(homeData?.treeType);
        setCharacterType(homeData?.characterType);
        setStarType(homeData?.starType);
        setBoxType(homeData?.boxType);
        setOrnamentType(homeData?.ornamentType)
      }
    }, [homeData]);

  const getSkinStatus = (type, index) => {
    const item = skinData[type + 'List'] && skinData[type + 'List'][index];
    if (!item) return 'disabled'; // 유효하지 않은 type 또는 index
    if (item.missionStatus && item.missionChecked) return 'clear';
    if (item.missionStatus && !item.missionChecked) return 'unlocked';
    if (!item.missionStatus && !item.missionChecked) return 'locked';
    return 'none'; // 모든 조건을 만족하지 않을 경우
  };

  const handleSelectSkinType = (type, index) => {
    const status = getSkinStatus(type, index-1);
    if (status === 'clear') {
      switch (type) {
        case 'tree':
          setTreeType(index);
          break;
        case 'ornament':
          setOrnamentType(index);
          break;
        case 'box':
          setBoxType(index);
          break;
        case 'star':
          setStarType(index);
          break;
        // 캐릭터는 모든 상태에서 선택 가능
        case 'character':
          setCharacterType(index);
          break;
        default:
          break;
      }
    }
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

        if (newHomeData) {
          // HomeDataAtom의 상태를 업데이트합니다.
          setHomeData(newHomeData);
        }

      await queryClient.invalidateQueries({queryKey:  ["homeData", ownerId]});
      alert("새로운 스킨이 적용되었어요!")
      closeModal();
    },
    onError: (error) => {
      alert("세션이 만료되었어요. 다시 로그인 해주세요!")
      navigate('/signin')
    },
});

  const handleSelectSkin = useCallback(() => {
    mutate();
  }, []);

  const handleMissionModal = (missionId: string, missionNumber: number, objectType: string) => {
    const missionStatus = getSkinStatus(objectType, missionNumber-1);
    const typeNumber = missionNumber;
    setSelectedMission({ missionId, typeNumber, objectType, missionStatus});
    setMissionModalOpen(true);
  };
  
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
                onClick={() => handleSelectSkinType('tree', tree.index)}
                isSelected={treeType === tree.index}>
                  <S.ImageButton
                    src={tree.imgSrc} 
                    style={{width: "80px", height: "107px"}}
                  />
                  {getSkinStatus('tree', index) === 'locked' && <S.LockIcon onClick={() => {handleMissionModal(skinData.treeList[index].missionId, tree.index, "tree")}}/>}
                  {getSkinStatus('tree', index) === 'unlocked' && <S.UnLockIcon onClick={() => {handleMissionModal(skinData.treeList[index].missionId, tree.index, "tree")}}/>}
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
                onClick={() => handleSelectSkinType('ornament', ornament.index)}
                isSelected={ornamentType === ornament.index}>
                  <S.ImageButton
                    src={ornament.imgSrc} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('ornament', index) === 'locked' && <S.LockIcon onClick={() => {handleMissionModal(skinData.ornamentList[index].missionId, ornament.index, "ornament")}}/>}
                  {getSkinStatus('ornament', index) === 'unlocked' && <S.UnLockIcon onClick={() => {handleMissionModal(skinData.ornamentList[index].missionId, ornament.index, "ornament")}}/>}
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
                onClick={() => handleSelectSkinType('box', box.index)}
                isSelected={boxType === box.index}>
                  <S.ImageButton
                    src={box.imgSrc} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('box', index) === 'locked' && <S.LockIcon onClick={() => {handleMissionModal(skinData.boxList[index].missionId, box.index, "box")}}/>}
                  {getSkinStatus('box', index) === 'unlocked' && <S.UnLockIcon onClick={() => {handleMissionModal(skinData.boxList[index].missionId, box.index, "box")}}/>}                
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
                onClick={() => handleSelectSkinType('star', star.index)}
                isSelected={starType === star.index}>
                  <S.ImageButton
                    src={star.imgSrc} 
                    style={{width: "60px", height: "90px"}}
                  />
                  {getSkinStatus('star', index) === 'locked' && <S.LockIcon onClick={() => {handleMissionModal(skinData.starList[index].missionId, star.index, "star")}}/>}
                  {getSkinStatus('star', index) === 'unlocked' && <S.UnLockIcon onClick={() => {handleMissionModal(skinData.starList[index].missionId, star.index, "star")}}/>}                                
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
                onClick={() => {setCharacterType(character.index)}}
                isSelected={characterType === character.index}
                >
                  <S.ImageButton
                    src={character.imgSrc} 
                    style={{width: "60px", height: "90px"}}
                  />
                </S.SelectClickEvent>
              ))}
          </Carousel>
        </S.SelectWrapper>
  
        <ModalButton margin="12px 0 0 0" >
          <S.ButtonText onClick={() => {handleSelectSkin()}}>{'선택 완료하기'}</S.ButtonText>
        </ModalButton>

      </S.Wrapper>

      {missionModalOpen && (
        <MissionModal 
          closeModal={closeMissionModal} 
          isOpen={missionModalOpen} 
          missionId={selectedMission.missionId} 
          typeNumber={selectedMission.typeNumber} 
          objectType={selectedMission.objectType}
          missionStatus={selectedMission.missionStatus}
        />
      )}

    </Modal>
    </>
  );
}
export default React.memo(SkinModal);
