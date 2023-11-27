import {ButtonProps} from '../type';
import NaverSignInButtonImg from '@/assets/Button/SocialButton/NaverSignIn.svg'
import KakaoSignInButtonImg from '@/assets/Button/SocialButton/KakaoSignIn.svg'
import NaverSignUpButtonImg from '@/assets/Button/SocialButton/NaverSignUp.svg'
import KakaoSignUpButtonImg from '@/assets/Button/SocialButton/KakaoSignUp.svg'

import Button from '../Button';

type SocialButtonProps = Partial<ButtonProps>;

export default function SocialButton(props: SocialButtonProps) {

  const getImageForSocialType = () => {
    if(props.socialType == "NaverSignIn") {
      return NaverSignInButtonImg;
    } else if (props.socialType == "NaverSignUp") {
      return NaverSignUpButtonImg;
    } else if (props.socialType == "KakaoSignIn") {
      return KakaoSignInButtonImg;
    } else if (props.socialType == "KakaoSignUp") {
      return KakaoSignUpButtonImg;
    }
  };

  const socialImg = getImageForSocialType();


  return (
    <Button width={250} height={40} background={socialImg} {...props}>
      {props.children}
    </Button>
  );
}
