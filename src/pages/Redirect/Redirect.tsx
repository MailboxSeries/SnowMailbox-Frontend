import { getHealthCheck, getMyIdAtRedirectPage } from '@/apis/auth';
import { Data, initialUserInfoState, userInfoAtom } from '@/atoms/SignInAtom';
import PageLayout from '@/components/PageLayout/PageLayout'
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';

export default function Redirect() {
    const setUserInfoState = useSetRecoilState(userInfoAtom);
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getHealthCheck();
          try {
            const data = await getMyIdAtRedirectPage();
            if (data !== null) {
              setUserInfoState(data);
              navigate(`/home/${data.myId}`);
            } else {
              setUserInfoState(initialUserInfoState);
            }
          } catch (error) {
            // 에러 처리
            console.error(error);
          }
        }catch (error) {
          // 에러 처리
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <PageLayout>로그인 중...</PageLayout>
  )
}
