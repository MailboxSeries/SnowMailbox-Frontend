import { useNavigate } from 'react-router-dom';
import { deleteLeave } from '../apis/auth';
import { skinDataState } from '@/atoms/SkinAtom';
import { userInfoAtom } from '../atoms/SignInAtom';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useResetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useIsMyHome from './useIsMyHome';

const useLeave = () => {

    const resetHomeData = useResetRecoilState(HomeDataAtom);
    const resetData = useResetRecoilState(userInfoAtom);
    const resetSkinData = useResetRecoilState(skinDataState);
    const {ownerId, myId, isMyHome} = useIsMyHome();
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: () => 
      deleteLeave(myId),
      onError: (error) => {
        console.error('오류: ', error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['userInfo']});
        // Recoil 상태를 초기화합니다
        resetHomeData();
        resetData();
        resetSkinData();
        alert("탈퇴 되었어요. 또 다시 만나요!");
        navigate('/');
      },
    });
  
    const Leave = () => {
      mutation.mutate();
    };

    return Leave;
}
export default useLeave;