import * as S from './styled';

interface HeadingProps {
  title: string;
  subtitle?: string;
  sizeGap?: string;
  sizeW?: string;
  colorText: string;
  lineHeight?: string;
}

export default function Heading({ title, subtitle, sizeGap, sizeW, colorText, lineHeight }: HeadingProps) {
  return(
    <S.Wrapper sizeGap={sizeGap}>
      <S.Title 
        sizeW={sizeW}    
        lineHeight={lineHeight}
      >
        {title}
      </S.Title>
      <S.Subtitle
        colorText={colorText}
      >
        {subtitle}
      </S.Subtitle>
    </S.Wrapper>
  );
}