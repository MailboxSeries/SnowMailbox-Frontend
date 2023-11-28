import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom, Data, initialUserInfoState } from '@/atoms/SignInAtom';
import { getMyIdAtRedirectPage } from '@/apis/auth';
import PageLayout from '@/components/PageLayout/PageLayout';

export default function Redirect() {
  const setUserInfoState = useSetRecoilState(userInfoAtom);
  const userInfo = useRecoilValue(userInfoAtom); // Recoil 상태를 구독
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyIdAtRedirectPage();
        if (data !== null) {
          setUserInfoState({
            ...initialUserInfoState,
            myId: data.myId
          });
        } else {
          setUserInfoState(initialUserInfoState);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setUserInfoState]);

  useEffect(() => {
    if (userInfo.myId !== initialUserInfoState.myId) {
      const redirectOwnerId = localStorage.getItem("redirectOwnerId");
      if (redirectOwnerId) {
        navigate(`/home/${redirectOwnerId}`);
        localStorage.removeItem("redirectOwnerId");
      } else {
        navigate(`/home/${userInfo.myId}`);
      }
    }
  }, [userInfo, navigate]);

  return <PageLayout>로그인 중...</PageLayout>;
}
