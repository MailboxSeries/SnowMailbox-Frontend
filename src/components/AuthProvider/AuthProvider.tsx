import {useSuspenseQuery} from '@tanstack/react-query';
import {useSetRecoilState, } from 'recoil';
import {getMyIdAtRedirectPage} from '@/apis/auth';
import {
  initialUserInfoState, userInfoAtom
} from '@/atoms/SignInAtom';
import {Data} from '@/atoms/SignInAtom';
import {instance} from '@/apis/axios';
import Cookies from 'js-cookie';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({children}: Props) {
  const getAccessTokenFromCookies = () => Cookies.get('accessCookie');
  const getRefreshTokenFromCookies = () => Cookies.get('refreshCookie'); 

  const setUserInfoState = useSetRecoilState(userInfoAtom);

  const {data, isSuccess} = useSuspenseQuery<null | Data>({
    queryKey: ['signInState'],
    queryFn: getMyIdAtRedirectPage,
  });

  if (data !== null) {
    setUserInfoState(data);
  } else {
    setUserInfoState(initialUserInfoState);
  }

  return <>{isSuccess && children}</>;
}
