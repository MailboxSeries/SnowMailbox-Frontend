import {atom} from 'recoil';

export type Data = {
  myId: number | null;
  refreshToken: string | null;
  accessToken: string | null;
};

export const DataAtom = atom<Data>({
  key: 'Data',
  default: {
    myId: null,
    refreshToken: '',
    accessToken: '',
  },
});

export const loginMethodAtom = atom<string>({
  key: 'loginMethod',
  default: 'kakao',
});
