import * as S from './styled';

import Section from '../Section';

export default function Footer() {
  return(
    <Section background="url(./public/bg-footer.svg)">
      <S.Container>
        <S.WrapperLogo>
          <S.Logo />
        </S.WrapperLogo>

        <S.WrapperGridColumn>
          <S.GridColumns 
            gridColumn={1}
          >
            <S.List>
              <S.TitleListItem>
                Services
              </S.TitleListItem>
              <S.ListItem>
                Web Hosting
              </S.ListItem>
              <S.ListItem>
                Domains
              </S.ListItem>
              <S.ListItem>
                Premium Hosting
              </S.ListItem>
              <S.ListItem>
                Private Server
              </S.ListItem>
              <S.ListItem>
                E-mail Hosting
              </S.ListItem>
            </S.List>
          </S.GridColumns>

          <S.GridColumns 
            gridColumn={2}
          >
            <S.List>
              <S.TitleListItem>
                Support
              </S.TitleListItem>
              <S.ListItem>
                Pricing Plan
              </S.ListItem>
              <S.ListItem>
                Documentation
              </S.ListItem>
              <S.ListItem>
                Guide
              </S.ListItem>
              <S.ListItem>
                Tutorial
              </S.ListItem>
            </S.List>
          </S.GridColumns>

          <S.GridColumns 
            gridColumn={3}
          >
            <S.List>
              <S.TitleListItem>
                Company
              </S.TitleListItem>
              <S.ListItem>
                About
              </S.ListItem>
              <S.ListItem>
                Blog
              </S.ListItem>
              <S.ListItem>
                Join Us
              </S.ListItem>
              <S.ListItem>
                Press
              </S.ListItem>
              <S.ListItem>
                Partners
              </S.ListItem>
            </S.List>
          </S.GridColumns>

          <S.GridColumns 
            gridColumn={4}
          >
            <S.List>
              <S.TitleListItem>
                Legal
              </S.TitleListItem>
              <S.ListItem>
                Claim
              </S.ListItem>
              <S.ListItem>
                Privacy
              </S.ListItem>
              <S.ListItem>
                Terms
              </S.ListItem>
            </S.List>
          </S.GridColumns>

          <S.GridColumns 
            gridColumn={5}
          >
            <S.WrapperText>
              <S.TitleDescription>
                Subcribe to our newsletter
              </S.TitleDescription>

              <S.SubtitleDescription>
              Funding freemium long tail hypotheses first mover advantage assets ownership
              </S.SubtitleDescription>
            </S.WrapperText>
          </S.GridColumns>
        </S.WrapperGridColumn>
        
        <S.WrapperFinal>
          <S.Line />
          <S.copyright>
            Design with love © TanahAirStudio 2020. All right reserved
          </S.copyright>
        </S.WrapperFinal>
      </S.Container>
    </Section>
  );
}