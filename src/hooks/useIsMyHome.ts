import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {DataAtom} from '../atoms/SignInAtom';

export default function useIsMyHome() {
  const {ownerId} = useParams(); // 현재 접속한 주인의 아이디
  const {myId} = useRecoilValue(DataAtom);
  const isMyHome = (ownerId) === myId; // 지금 위치가 나의 집인지?
  return {ownerId, myId, isMyHome};
}
