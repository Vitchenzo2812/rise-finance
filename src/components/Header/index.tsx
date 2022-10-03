import { useState } from 'react';

import * as S from './styled';

export default function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  
  return(
    <S.Wrapper>
      <S.Navbar>
        <S.Logo href="/" />
        <S.Menu isOpened={isOpened} onClick={() => setIsOpened(old => !old)}>
          <div></div>
          <div></div>
          <div></div>
        </S.Menu>
      
        <S.NavList isOpened={isOpened}>
          <S.NavItems>
            <S.NavItem>
              Consulting For Startups
            </S.NavItem>
          </S.NavItems>

          <S.NavItems>
            <S.NavItem>
              Delivering Value
            </S.NavItem>  
          </S.NavItems>

          <S.NavItems>
            <S.NavItem>
              Case Study
            </S.NavItem>
          </S.NavItems>

          <S.NavItems>
            <S.NavItem>
              Coruma Finance
            </S.NavItem>
          </S.NavItems>
        </S.NavList>
      </S.Navbar>
    </S.Wrapper>
);
}