import { skinDataState } from '@/atoms/SkinAtom';
import { DataAtom } from './../atoms/SignInAtom';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import { useResetRecoilState } from 'recoil';

export default function useLogout() {
  const resetHomeData = useResetRecoilState(HomeDataAtom);
  const resetData = useResetRecoilState(DataAtom);
  const resetSkinData = useResetRecoilState(skinDataState);

  const logout = () => {
    // Recoil 상태를 초기화합니다
    resetHomeData();
    resetData();
    resetSkinData();

    // 로그아웃 관련 로직
    console.log('Logged out');
  };

  return logout;
}
