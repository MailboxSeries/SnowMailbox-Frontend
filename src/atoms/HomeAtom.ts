import {atom} from 'recoil';

export type Data = {
  refreshToken: string | null;
  accessToken: string | null;
  nickname : string | null;
	treeType : number | null;
	characterType : number | null;
	starType : number | null;
	boxType : number | null;
	ornamentType : number | null;
	nowDate : number | null;
};

export const HomeDataAtom = atom<Data>({
  key: 'Data',
  default: {
    refreshToken: '',
    accessToken: '',
    nickname : "겨울이의",
	treeType : 1, // 디폴트는 1
	characterType : 1, // 디폴트는 1
	starType : 0, //없을 경우 0
	boxType : 0,  //없을 경우 0
	ornamentType : 1, //디폴트는 1
	nowDate : 1, // 가입한 날부터 1일
  },
});

