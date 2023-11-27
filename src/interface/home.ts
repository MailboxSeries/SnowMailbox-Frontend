export interface TreeTypeProps {
    treeType: number;
  }

  export interface CharacterTypeProps {
    characterType: number;
  }


  export interface StarTypeProps {
    starType: number;
  }

  export interface BoxTypeProps {
    boxType: number;
  }

  export interface ImagePreviewProps {
    src: string; // 여기서는 string 타입만 받도록 설정
  }

  export interface HomeData {
    nickname : string;
    treeType : number;
    characterType : number;
    starType : number;
    boxType : number;
    ornamentType : number;
    nowDate : number;
  };