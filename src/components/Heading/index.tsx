import * as S from './styled';

interface HeadingProps {
  title: string;
  subtitle: string;
  size: string;
}

export default function Heading({ title, subtitle, size }: HeadingProps) {
  return(
    <S.Wrapper size={size}>
      <S.Title>
        {title}
      </S.Title>
      <S.Subtitle>
        {subtitle}
      </S.Subtitle>
    </S.Wrapper>
  );
}