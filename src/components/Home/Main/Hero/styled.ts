import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  color: #fff;
  padding-top: 10rem;

  @media (max-width: 1084px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const WrapperText = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 10rem;
`

export const WrapperCard = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 100%;
`

export const TitleGradient = styled.span`
  background: linear-gradient(90deg, rgba(58,73,249,1) 0%, rgba(129,45,226,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const Description = styled.p`
  font-size: 2.2rem;
  line-height: 130%;
`

export const CardImage = styled.div<{ img: string }>`
  width: 77.0rem;
  height: 52.8rem;

  background-image: ${props => props.img};
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1164px) {
    width: 65rem;
    height: 45rem;
  }
`

export const Sponsors = styled.div<{ img: string, sizeW: string, sizeH: string }>`
  width: ${props => props.sizeW};
  height: ${props => props.sizeH};
  
  background: transparent;
  background-image: ${props => props.img};
  background-repeat: no-repeat;
  background-size: cover;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.5rem;
  padding-bottom: 14.9rem;
`