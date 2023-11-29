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
        alert("세션이 만료되었어요. 다시 로그인 해주세요!")
        navigate('/sign-in')
      }
    };

    fetchData();
  }, []);

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
  }, [userInfo]);

  return <PageLayout>로그인 중...</PageLayout>;
}
