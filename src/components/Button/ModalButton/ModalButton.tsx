import {ButtonProps} from '../type';
import MediumButton from '@/assets/Button/MediumButton.png';
import Button from '../Button';

type MediumButtonProps = Partial<ButtonProps>;

export default function ModalButton(props: MediumButtonProps) {
  return (
    <Button width={160} height={40} background={MediumButton} {...props}>
      {props.children}
    </Button>
  );
}
