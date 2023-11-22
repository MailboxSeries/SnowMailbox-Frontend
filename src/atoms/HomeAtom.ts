import {atom} from 'recoil';

export type Data = {
  refreshToken: string ;
  accessToken: string ;
  nickname : string;
	treeType : number;
	characterType : number;
	starType : number;
	boxType : number;
	ornamentType : number;
	nowDate : number;
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
