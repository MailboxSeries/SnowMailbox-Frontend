import { getMyIdAtRedirectPage } from '@/apis/auth';
import { Data, initialUserInfoState, userInfoAtom } from '@/atoms/SignInAtom';
import PageLayout from '@/components/PageLayout/PageLayout'
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';

export default function Redirect() {
    const setUserInfoState = useSetRecoilState(userInfoAtom);
    const navigate = useNavigate();

    const GoToHome = async () => {

      const {data} = useSuspenseQuery<Data>({
          queryKey: ['userInfo'],
          queryFn: () => getMyIdAtRedirectPage(),
          staleTime: 10000,
        });

        if (data !== null) {
          setUserInfoState(data);
          navigate(`/home/${data.myId}`)
        } else {
          setUserInfoState(initialUserInfoState);
        }
    }

    useEffect(() => {
      GoToHome();
    }, []);
    
  return (
    <PageLayout>로그인 중...</PageLayout>
  )
}
