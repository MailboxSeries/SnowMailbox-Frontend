import {ButtonProps} from '../type';
import RudolfButtonImg from '@/assets/Animal/Rudolf.png';
import Button from '../Button';

type LongButtonProps = Partial<ButtonProps>;

export default function RudolfButton(props: LongButtonProps) {
  return (
    <Button width={80} height={80} background={RudolfButtonImg} {...props}>
      {props.children}
    </Button>
  );
}
