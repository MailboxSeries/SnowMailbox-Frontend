import {atom} from 'recoil';

export type Data = {
  myId: string;
  refreshToken: string;
  accessToken: string;
};

export const DataAtom = atom<Data>({
  key: 'Data',
  default: {
    myId: '1',
    refreshToken: '',
    accessToken: '',
  },
});

export const loginMethodAtom = atom<string>({
  key: 'loginMethod',
  default: 'kakao',
});
