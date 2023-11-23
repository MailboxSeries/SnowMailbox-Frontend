import * as S from './style';

type Props = {
  width: number;
  height: number;
  imgs: string[]; // 이미지 배열
  margin?: string;
};

export default function OrnamentLayer({ width, height, imgs, margin }: Props) {
  console.log(imgs);
  return (
    <S.Frame width={width} height={height} margin={margin}>
      {imgs.map((img, idx) => (
        <S.OrnamentImg key={idx} src={img} />
      ))}
    </S.Frame>
  );
}
