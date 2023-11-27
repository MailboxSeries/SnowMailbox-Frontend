import { useNavigate } from 'react-router-dom';
import { postSignOut } from './../apis/auth';
import { skinDataState } from '@/atoms/SkinAtom';
import { userInfoAtom } from './../atoms/SignInAtom';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useResetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useIsMyHome from './useIsMyHome';

export default function useLogout() {
  const resetHomeData = useResetRecoilState(HomeDataAtom);
  const resetData = useResetRecoilState(userInfoAtom);
  const resetSkinData = useResetRecoilState(skinDataState);
  const {ownerId, myId, isMyHome} = useIsMyHome();

  const logout = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: () => 
      postSignOut(myId),
      onError: (error) => {
        console.error('오류: ', error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['userInfo']});
        // Recoil 상태를 초기화합니다
        resetHomeData();
        resetData();
        resetSkinData();
        navigate('/');
      },
    });
  
    const GoOut = () => {
      mutation.mutate();
    };
  };

  return logout;
}
