import {instance} from './axios';

// 스킨 모달에서 미션 성공 여부를 가져옴
export const getMissionStatus = async (myId: string) => {
  try {
    const response = await instance.get(
      `/api/v1/user/${myId}/skin`,
    );
    return response.data; //treeList, ornamentList, starList, boxList
  } catch (error) {
    return null;
  }
};

// 아직 깨지 않은 미션 선택시
export const getUnCompletedById = async (myId: string, missionId: string) => {
    try {
      const response = await instance.get(
        `/api/v1/mission/${missionId}/${myId}`,
      );
      return response.data; //missionContent
    } catch (error) {
      return null;
    }
  };

  // 아직 깨지 않은 미션의 완료버튼을 누를 시 
export const postCompletedMissionChecked = async (myId: string, missionId: string, missionChecked: boolean) => {
    try {
      await instance.post(
        `/api/v1/mission/${missionId}/${myId}`, {
            "missionChecked" : missionChecked,
        });
    } catch (error) {
      return null;
    }
  };

    // 마지막 미션은 “크리스마스” 입력하는 건데, 이거에 대한 요청 따로 해야해서 만든 api
export const postCompletedChristmas = async (myId: string, missionId: string, missionAnswer: string) => {
    try {
        const response = await instance.post(
        `/api/v1/mission/${missionId}/${myId}/christmas`, {
            "missionAnswer" : missionAnswer 
        });
        return response.data //missionAnswerIsChristmas
    } catch (error) {
        return null;
    }
};

    // 스킨을 모두 선택하고 난 후, 스킨 적용 버튼을 눌렀을 때
    export const postSelectedSkin = async (
        myId: string, 
        treeType: number,
        characterType: number,
        starType: number,
        boxType: number,
        ornamentType: number
        
        ) => {
        try {
            await instance.post(
            `/api/v1/user/${myId}/skin-apply`, {
                "treeType" : treeType,
                "characterType" : characterType,
                "starType" : starType,
                "boxType" : boxType,
                "ornamentType" : ornamentType
            });

        } catch (error) {
            return null;
        }
    };
