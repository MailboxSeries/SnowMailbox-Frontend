import * as S from './style';
import React, { useState } from 'react';
import Modal from '../Modal';
import LongButton from '@/components/Button/LongButton/LongButton';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Character} from '@/assets/Character'
import {Tree} from '@/assets/Tree'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Data, HomeDataAtom } from '@/atoms/HomeAtom';

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

function SkinModal({closeModal, isOpen}: Props) {
  const data = useRecoilValue<Data>(HomeDataAtom);
  const [skinData, setSkinData] = useRecoilState<Data>(HomeDataAtom);
  const [treeType, setTreeType] = useState<number>(data.treeType);
  const [characterType, setCharacterType] = useState<number>(data.characterType);
  const [starType, setStarType] = useState<number>(data.starType);
  const [boxType, setBoxType] = useState<number>(data.boxType);
  const [ornamentType, setOrnamentType] = useState<number>(data.ornamentType);
  
  // TODO: 서버에서 미션 성공 여부 데이터 받아오기
  // 예시로, 각 항목의 disabled 여부를 나타내는 상태
  const [isMissionCompleted, setIsMissionCompleted] = useState({
    trees: [true, false, false, false], // treeType 2, 3, 4는 미션을 완료해야 사용 가능
    ornaments: [true, false, false, false],
    boxes: [false, false, false, false],
    stars: [false, false, false, false]
  });

  // 각 항목의 disabled 여부를 체크하는 함수
  const isDisabled = (type, index) => {
    switch (type) {
      case 'tree':
        return !isMissionCompleted.trees[index];
      case 'ornament':
        return !isMissionCompleted.ornaments[index];
      case 'box':
        return !isMissionCompleted.boxes[index];
      case 'star':
        return !isMissionCompleted.stars[index];
      default:
        return false;
    }
  };

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
                  {isDisabled('tree', index) && <S.LockIcon />}
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
                  {isDisabled('ornament', index) && <S.LockIcon />}

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
                  {isDisabled('box', index) && <S.LockIcon />}
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
                  {isDisabled('star', index) && <S.LockIcon />}
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
        

        <LongButton margin="12px 0 0 0" >
          <S.ButtonText onClick={handleSelectSkin}>{'선택 완료하기'}</S.ButtonText>
        </LongButton>

      </S.Wrapper>
    </Modal>
  );
}
export default React.memo(SkinModal);
