import {instance} from './axios';

// 사진 모아보기 화면에서 각각의 해당하는 날짜의 버튼을 눌렀을 때
export const getDayImages = async (day: number, myId: string) => {
    try {
      const response = await instance.get(
        `/api/v1/letter/${day}/${myId}/images`,
      );
      return response.data; //imageList
    } catch (error) {
      return null;
    }
  };