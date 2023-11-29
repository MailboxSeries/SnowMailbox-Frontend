import React from 'react';
import ServiceModal from '../Modal/ServiceModal/ServiceModal';
import LogOutModal from '../Modal/LogOutModal/LogOutModal';
import {s} from "./style";
import { useRecoilValue } from 'recoil';
import { loginStateAtom } from '@/atoms/SignInAtom';


export default function Menu() { 
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = React.useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = React.useState(false);
  const loggedIn = useRecoilValue(loginStateAtom); //로그인 상태인지 확인하기 위함.

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleServiceModalToggle = () => {
    setIsServiceModalOpen((prev) => !prev);
  };

  const handleLogOutModalToggle = () => {
    setIsLogOutModalOpen((prev) => !prev);
  };

  return (
    <s.Wrapper>
    <s.SunWrapper>
    <s.SunButton onClick={handleMenuToggle} />
    {isOpen &&
      Array.from({ length: 70 }, (_, i) => (
        <s.SunRay
            key={i}
            style={{
                transform: `rotate(${-5 + i}deg)`,
                transformOrigin: 'top',
            }}
            isActive={isOpen}
        />
    ))
    }

      {isOpen && (
        <s.MenuWrapper>
          {loggedIn ? (
              <s.MenuItem onClick={handleLogOutModalToggle} isActive={isOpen}>로그아웃</s.MenuItem>
            ) : (
              <s.LinkContainer isActive={isOpen}>
                <s.LinkText to="/signin">로그인</s.LinkText>
              </s.LinkContainer>
            )}
          <s.MenuItem onClick={handleServiceModalToggle} isActive={isOpen}>이용안내</s.MenuItem>
        </s.MenuWrapper>
      )}
    </s.SunWrapper>

    <ServiceModal 
      isOpen={isServiceModalOpen} 
      closeModal={handleServiceModalToggle} 
    />

    <LogOutModal 
      isOpen={isLogOutModalOpen} 
      closeModal={handleLogOutModalToggle} 
    />
    </s.Wrapper>
  );
}

