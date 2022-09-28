import * as S from './styled';

import Section from '../../../Section';
import Heading from '../../../Heading';

export default function ConsultingForStartups() {
  return(
    <Section>
      <S.Wrapper>
        <S.Texts>
          <Heading 
            size="4.4rem"
            title="Consulting For Startups In Fintech"
            subtitle="Our Team consists of proven experts from finance, tech and science. This mix makes it possible for our team to deliver the best results to all our clients."
          />
        </S.Texts>
        <S.Graphic />
      </S.Wrapper>
    </Section>
  );
}