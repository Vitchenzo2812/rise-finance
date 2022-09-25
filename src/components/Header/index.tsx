import Section from '../Section';
import * as S from './styled';

export default function Header() {
  return(
    <Section background="url(./public/hero.svg)">
      <S.Wrapper>
        <S.Logo />
        <S.Menu />
      </S.Wrapper>
    </Section>
  );
}