import {ButtonProps} from '../type';
import LongButtonImg from '@/assets/Button/LongButton.png';
import Button from '../Button';

type LongButtonProps = Partial<ButtonProps>;

export default function LongButton(props: LongButtonProps) {
  return (
    <Button width={250} height={40} background={LongButtonImg} {...props}>
      {props.children}
    </Button>
  );
}
