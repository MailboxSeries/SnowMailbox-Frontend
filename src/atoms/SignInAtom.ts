import {atom} from 'recoil';

export type Data = {
  myId: string;
};

export const initialUserInfoState : Data = {
    myId: null,
};

export const userInfoAtom = atom<Data>({
  key: 'userInfo',
  default: initialUserInfoState,
});

export const loginMethodAtom = atom<string>({
  key: 'loginMethod',
  default: 'kakao',
});
