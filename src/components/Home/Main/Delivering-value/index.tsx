import * as S from './styled';

import Section from '../../../Section';
import Heading from '../../../Heading';

export default function DeliveringValue() {
  return(
  <Section background='url(./public/bg-delivering.svg)'>
      <S.TitleSettings>        
        <Heading 
          title="Delivering Value In Every Step Of Production"
          sizeW="55%"          
        />      
      </S.TitleSettings>

    <S.Wrapper>
      <S.WrapperGraph>
        <S.Graph />
      </S.WrapperGraph>
      <S.WrapperText>
        <S.ContainerText>
          <S.TitleDescription>
            The Progress
          </S.TitleDescription>
          <S.SubtitleDescription>
          Strategic phrases we run through with every client make it possible to implement highly efficinet processes, even in high pace startups that like to scale as fast as possible.
          </S.SubtitleDescription>
          <S.Cards />
        </S.ContainerText>
      </S.WrapperText>
    </S.Wrapper>
  </Section>
  );
}