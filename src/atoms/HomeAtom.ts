import { HomeData } from '@/interface/home';
import {atom} from 'recoil';

export const HomeDataAtom = atom<HomeData>({
  key: 'Data',
  default: {
    nickname : "겨울이",
	treeType : 4, // 디폴트는 1
	characterType : 1, // 디폴트는 1
	starType : 4, //없을 경우 0
	boxType : 4,  //없을 경우 0
	ornamentType : 3, //디폴트는 1
	nowDate : 25, // 가입한 날부터 1일
  },
});

