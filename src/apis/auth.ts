import { useNavigate } from 'react-router';
import {instance} from './axios';
const navigate = useNavigate();

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

        alert("회원가입에 성공했어요. 로그인 페이지로 이동합니다!")
        navigate('/signin')
    } catch (error) {
      alert("회원가입에 실패했어요. 다시 진행해주세요.")
      //return null;
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

            navigate('/redirect')
        } catch (error) {
          alert("정확한 이메일과 비밀번호를 입력해주세요.")

//          return null;
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

        // 리다이렉트 페이지에서 myId 받기
        export const getHealthCheck= async (
          ) => {
              try {
                const response = await instance.get(
                  `/api/v1/user/health-check`);
        
                  return response.data;
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