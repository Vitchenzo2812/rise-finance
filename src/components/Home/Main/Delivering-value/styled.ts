import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 18.5rem;
`

export const TitleSettings = styled.div`
  width: 100%;
  text-align: center;
`

export const WrapperGraph = styled.div`
  grid-column: 1;
  padding-left: 10rem;
  padding-bottom: 12rem;
`

export const Graph = styled.div`
  width: 50rem;
  height: 63.5rem;

  background-image: url(./public/cardGraph.svg);
  background-repeat: no-repeat;
  background-size: cover;
`

export const WrapperText = styled.div`
  grid-column: 2;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
  padding-top: 7rem;
  padding-right: 18.2rem;
  gap: 2.2rem;
`

export const TitleDescription = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
`

export const SubtitleDescription = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 130%;
  padding-bottom: 7.5rem;
`

export const Cards = styled.div`
  width: 48rem;
  height: 15.8rem;

  background-image: url(./public/cardProcess.svg);
  background-repeat: no-repeat;
  background-size: cover;
`