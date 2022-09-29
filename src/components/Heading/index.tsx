import * as S from './styled';

interface HeadingProps {
  title: string;
  subtitle?: string;
  sizeGap?: string;
  sizeW?: string;
}

export default function Heading({ title, subtitle, sizeGap, sizeW }: HeadingProps) {
  return(
    <S.Wrapper sizeGap={sizeGap}>
      <S.Title 
        sizeW={sizeW}    
      >
        {title}
      </S.Title>
      <S.Subtitle>
        {subtitle}
      </S.Subtitle>
    </S.Wrapper>
  );
}