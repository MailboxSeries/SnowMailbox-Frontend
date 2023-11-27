import {instance} from './axios';

//  편지 확인 모달에서 각각의 해당하는 날짜의 버튼을 눌렀을 때
export const getDayLetter = async (day: number, myId: string) => {
    try {
      const response = await instance.get(
        `/api/v1/letter/${day}/${myId}`,
      );
      return response.data; //letterList
    } catch (error) {
      return null;
    }
  };
  