import {ButtonProps} from '../type';
import Button from '../Button';
import * as S from './style';

type ArrowButtonProps = Partial<ButtonProps> & {
  currentImg: string; 
};

export default function ArrowButton({ currentImg, ...props }: ArrowButtonProps) {

  return (
    <S.ButtonWrapper background={currentImg}>
      <Button width={40} height={40} background={"transparent"} {...props}>
        {props.children}
      </Button>
    </S.ButtonWrapper>
  );
}
