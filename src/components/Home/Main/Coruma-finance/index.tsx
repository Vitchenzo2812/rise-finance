import * as S from './styled';

import Section from '../../../Section';
import Heading from '../../../Heading';

export default function CorumaFinance() {
  return(
    <Section background='url(./public/bg-coruma-finance.svg)'>
      <S.Wrapper>
        <S.WrapperText>
          <Heading
            title="Coruma Finance"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            colorText="#fff"
            sizeGap="1.5rem"
            sizeW="15%"
            lineHeight="5rem"
          />
        </S.WrapperText>
        <S.MacImg />
      </S.Wrapper>
    </Section>
  );
}