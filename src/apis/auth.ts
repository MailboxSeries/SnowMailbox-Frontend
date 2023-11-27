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

  