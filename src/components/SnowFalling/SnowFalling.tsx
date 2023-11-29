import React, { useEffect, useState, CSSProperties } from 'react';
import MediumSnowImg from "@/assets/Snow/MediumSnow.png"
import SmallSnowImg from "@/assets/Snow/SmallSnow.png"
import * as S from './style';

const numSnows = 30;

// CSSProperties를 확장하여 사용자 정의 CSS 변수를 포함
interface CSSPropertiesWithCustomVars extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
  '--rotation-start'?: string;
  '--rotation-end'?: string;
}

const SnowFalling: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newLeaves = [];
      
    for (let i = 0; i < numSnows; i++) {
      const leafType = Math.random() > 0.5 ? MediumSnowImg : SmallSnowImg;
      const delay = Math.random() * 10;
      const startLeft = `${Math.random() * 200 - 50}%`;  
      const endLeft = `${Math.random() * 200 - 50}%`;   
      const rotateStart = `${Math.floor(Math.random() * 180)}deg`;
      const rotateEnd = `${Math.floor(Math.random() * 180)}deg`;

      newLeaves.push(
        <S.Container>
          <S.SnowWrapper key={i}>
            <S.Snow
              style={{
                backgroundImage: `url(${leafType})`,
                animationDelay: `${delay}s`,
                "--start-left": startLeft,
                "--end-left": endLeft,
                "--rotation-start": rotateStart,
                "--rotation-end": rotateEnd
              } as CSSPropertiesWithCustomVars}
            />
          </S.SnowWrapper>
        </S.Container>
        
      );
    }

    setLeaves(newLeaves);
  }, []);

  return <>{leaves}</>;
};

export default SnowFalling