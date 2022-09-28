import { useState } from 'react';
import Section from '../Section';
import * as S from './styled';

export default function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  
  return(
    <Section background="url(./public/hero.svg)">
      <S.Wrapper>
        <S.Logo />
        <S.Menu isOpened={isOpened} onClick={() => setIsOpened(old => !old)}>
          <div></div>
          <div></div>
          <div></div>
        </S.Menu>
      </S.Wrapper>
    </Section>
  );
}