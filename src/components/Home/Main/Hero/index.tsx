import Header from '../../../Header';
import Section from '../../../Section';
import * as S from './styled';

export default function Hero() {
  return(
    <Section background="url(./public/hero.svg)">
      <Header />

      <S.Container>
        <S.WrapperText>
          <S.Title><S.TitleGradient>Scale Fintech</S.TitleGradient><br/>Safe And Secure</S.Title>
          <S.Description>Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide.</S.Description>
          <S.Button>
            <span>Consultation</span>
            <S.ButtonLayer className='button-layer' />
          </S.Button>
        </S.WrapperText>
        <S.WrapperCard>
          <S.CardImage img="url(./public/cards.svg)"/>
        </S.WrapperCard>
      </S.Container>

      <S.Footer>
        <S.Sponsors img="url(./public/sponsor-1.svg)" sizeW="23.6rem" sizeH="6rem"/>
        <S.Sponsors img="url(./public/sponsor-2.svg)" sizeW="10rem" sizeH="5.1rem"/>
        <S.Sponsors img="url(./public/sponsor-3.svg)" sizeW="11.9rem" sizeH="3rem"/>
        <S.Sponsors img="url(./public/sponsor-4.svg)" sizeW="10rem" sizeH="5.1rem"/>
      </S.Footer>
    </Section>
  );
}