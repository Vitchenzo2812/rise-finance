import * as S from "./styled";

import Section from "../../../Section";
import Heading from "../../../Heading";
import Button from "../../../Button";

export default function CaseStudy() {
  return(
    <Section>
      <Heading
        title="Case Study"
        subtitle="Some results from our clients"
        sizeGap="5.1rem"
      />

      <S.Container>
        <S.ContainerCoruma>
          <S.WrapperText>
            <S.TitleDescription>
              Coruma Finance
            </S.TitleDescription>

            <S.SubtitleDescription>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </S.SubtitleDescription>

            <Button width="44rem" description="READ MORE ABOUT THIS CLIENT"/>          
          </S.WrapperText>
        </S.ContainerCoruma>
        <S.ContainerPhone />
      </S.Container>
    </Section>
  );
}