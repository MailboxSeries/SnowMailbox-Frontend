import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {DataAtom} from '../atoms/SignInAtom';

export default function useIsMyHouse() {
  const {ownerId} = useParams(); // 현재 접속한 쿠키하우스 주인의 아이디
  const {MyId} = useRecoilValue(DataAtom);
  const isMyHouse = Number(ownerId) === MyId; // 지금 위치가 나의 집인지?
  return {ownerId, MyId, isMyHouse};
}
