import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;

  align-items: center;
`

export const Texts = styled.div`
  width: 50%;
  text-align: center;
`

export const Graphic = styled.div`
  width: 115rem;
  height: 70rem;
  background-image: url(./public/graph.svg);
  background-repeat: no-repeat;
  background-size: cover;
`