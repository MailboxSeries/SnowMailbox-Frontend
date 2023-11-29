import { useNavigate } from 'react-router-dom';
import { postSignOut } from './../apis/auth';
import { skinDataState } from '@/atoms/SkinAtom';
import { userInfoAtom } from './../atoms/SignInAtom';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useResetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useIsMyHome from './useIsMyHome';

const useLogout = () => {

    const resetHomeData = useResetRecoilState(HomeDataAtom);
    const resetData = useResetRecoilState(userInfoAtom);
    const resetSkinData = useResetRecoilState(skinDataState);
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: () => 
      postSignOut(myId),
      onError: (error) => {
        alert("세션이 만료되었어요. 다시 로그인 해주세요!")
        navigate('/signin')
      },
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['userInfo']});
        // Recoil 상태를 초기화합니다
        resetHomeData();
        resetData();
        resetSkinData();
        alert("로그아웃 되었어요.")
        navigate('/')
      },
    });
  
    const SignOut = () => {
      mutation.mutate();
    };

    return SignOut;
}
export default useLogout;