import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/atoms/SignInAtom';
import { getMyIdAtRedirectPage } from '@/apis/auth';
import PageLayout from '@/components/PageLayout/PageLayout';

export default function Redirect() {
  const setUserInfoState = useSetRecoilState(userInfoAtom);
  const navigate = useNavigate();
  const [isReadyToNavigate, setIsReadyToNavigate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyIdAtRedirectPage();
        if (data !== null) {
          setUserInfoState((prevState) => ({
            ...prevState,
            myId: data.myId,
          }));
          setIsReadyToNavigate(true);
        } else {
          setUserInfoState((prevState) => ({ ...prevState }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setUserInfoState]);

  useEffect(() => {
    if (isReadyToNavigate) {
      const redirectOwnerId = localStorage.getItem("redirectOwnerId");
      if (redirectOwnerId) {
        navigate(`/home/${redirectOwnerId}`);
        localStorage.removeItem("redirectOwnerId");
      } else {
        setUserInfoState((prevState) => {
          navigate(`/home/${prevState.myId}`);
          return prevState;
        });
      }
    }
  }, [isReadyToNavigate, setUserInfoState, navigate]);

  return <PageLayout>로그인 중...</PageLayout>;
}
