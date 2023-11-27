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
export const getCompletedMissionById = async (myId: string, missionId: string, missionChecked: boolean) => {
    try {
      await instance.post(
        `/api/v1/mission/${missionId}/${myId}`, {
            "missionChecked" : missionChecked,
        });
    } catch (error) {
      return null;
    }
  };