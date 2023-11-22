import {atom} from 'recoil';

export type Data = {
  MyId: number | null;
  refreshToken: string | null;
  accessToken: string | null;
};

export const DataAtom = atom<Data>({
  key: 'Data',
  default: {
    MyId: null,
    refreshToken: '',
    accessToken: '',
  },
});

export const loginMethodAtom = atom<string>({
  key: 'loginMethod',
  default: 'kakao',
});
