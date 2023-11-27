import {instance} from './axios';

  // 회원가입(기본)
  export const postSignUp = async (
    email: string, 
    nickname: string, 
    password: string
) => {
    try {
      await instance.post(
        `/api/v1/user/sign-up`, {
            "email" : email,
            "nickname" : nickname,
            "password" : password
        });
    } catch (error) {
      return null;
    }
  };

    // 로그인(기본)
    export const postSignIn = async (
        email: string, 
        password: string
    ) => {
        try {
          await instance.post(
            `/api/v1/user/sign-in`, {
                "email" : email,
                "password" : password
            });
        } catch (error) {
          return null;
        }
      };

    // 리다이렉트 페이지에서 myId 받기
    export const getMyIdAtRedirectPage = async (
  ) => {
      try {
        const response = await instance.get(
          `/api/v1/user/user-id`);

          return response.data; //myId
      } catch (error) {
        return null;
      }
    };

  // 로그아웃
  export const postSignOut = async (
    myId: string
  ) => {
    try {
      await instance.post(
        `/api/v1/user/${myId}/sign-out`, {});
    } catch (error) {
      return null;
    }
  };

  // 로그아웃
  export const deleteLeave = async (
    myId: string
  ) => {
    try {
      await instance.delete(
        `/api/v1/user/${myId}/leave`, {});
    } catch (error) {
      return null;
    }
  };