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
  
  // 메인화면에서 편지 보내기 (게스트일 경우)
export const postLetter = async (
    nowDate: number, 
    ownerId: string, 
    myId: string,
    image: File | null,
    sender: string,
    content: string,
) => {

    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('content', content);
    formData.append('sender', sender);
    try {
      instance.post(
        `/api/v1/letter/${nowDate}/${ownerId}/${myId}`, formData
      );
    } catch (error) {
      return null;
    }
  };
