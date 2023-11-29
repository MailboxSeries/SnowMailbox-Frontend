import {atom, selector} from 'recoil';

export type Data = {
  myId: string | null;
};

export const initialUserInfoState : Data = {
    myId: null,
};

export const userInfoAtom = atom<Data>({
  key: 'userInfo',
  default: initialUserInfoState,
});

// 로그인 여부
export const loginStateAtom = selector<boolean>({
  key: 'loginStateAtom',
  get: ({get}) => {
    const userInfo = get(userInfoAtom);

    // userInfo가 default 상태인지 확인하고, 그에 따라 true 혹은 false 반환
    return userInfo.myId !== null;
  },
});
