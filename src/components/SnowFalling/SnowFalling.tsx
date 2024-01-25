import React, { useEffect, useState, CSSProperties } from 'react';
import MediumSnowImg from "@/assets/Snow/MediumSnow.png"
import SmallSnowImg from "@/assets/Snow/SmallSnow.png"
import { s } from './style'; 

const numLeaves = 30;

// CSSProperties를 확장하여 사용자 정의 CSS 변수를 포함
interface CSSPropertiesWithCustomVars extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
  '--rotation-start'?: string;
  '--rotation-end'?: string;
}

const LeafFalling: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newLeaves = [];
      
    for (let i = 0; i < numLeaves; i++) {
      const leafType = Math.random() > 0.5 ? MediumSnowImg : SmallSnowImg;
      const delay = Math.random() * 10;
      const startLeft = `${Math.random() * 200 - 50}%`;  
      const endLeft = `${Math.random() * 200 - 50}%`;   
      const rotateStart = `${Math.floor(Math.random() * 180)}deg`;
      const rotateEnd = `${Math.floor(Math.random() * 180)}deg`;

      newLeaves.push(
        <s.LeafDiv key={i}>
          <s.Leaf
            style={{
              backgroundImage: `url(${leafType})`,
              animationDelay: `${delay}s`,
              "--start-left": startLeft,
              "--end-left": endLeft,
              "--rotation-start": rotateStart,
              "--rotation-end": rotateEnd
            } as CSSPropertiesWithCustomVars}
          />
        </s.LeafDiv>
      );
    }

    setLeaves(newLeaves);
  }, []);

  return <>{leaves}</>;
};

export default LeafFalling;





