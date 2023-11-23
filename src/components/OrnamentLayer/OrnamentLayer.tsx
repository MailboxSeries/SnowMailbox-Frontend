import * as S from './style';

type Props = {
  width: number;
  height: number;
  imgs: string[]; // 이미지 배열
  margin?: string;
  nowDate: number;
};

export default function OrnamentLayer({ width, height, imgs, margin, nowDate }: Props) {
  const ornaments = imgs.slice(0, nowDate);
  console.log(imgs);
  
  return (
    <S.Frame width={width} height={height} margin={margin}>
      {ornaments.map((img, idx) => (
        <S.OrnamentImg key={idx} src={img} />
      ))}
    </S.Frame>
  );
}
