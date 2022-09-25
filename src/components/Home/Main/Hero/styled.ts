import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  color: #fff;
`

export const WrapperText = styled.div`
  grid-column: 1;

  padding: 10rem;
`

export const WrapperCard = styled.div`
  grid-column: 2;
`

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 100%;
`

export const Description = styled.p`
  font-size: 2.2rem;
  line-height: 130%;
`

export const Button = styled.button`
  width: 27.4rem;
  height: 7.4rem;

  font-size: 1.8rem;
  line-height: 100%;
  font-weight: 500;

  color: #fff;

  cursor: pointer;

  background: transparent;
  border: 5px solid transparent;
  border-image: linear-gradient(90deg, rgba(129,45,226,1) 0%, rgba(58,73,249,1) 100%);
  border-image-slice: 1;
  
  transition: all cubic-bezier(0,.68,.78,.6);

  :hover {
    background: var(--gradient);
  }
`

export const CardImage = styled.div<{ img: string }>`
  width: 77.0rem;
  height: 52.8rem;

  background-image: ${props => props.img};
  background-repeat: no-repeat;
  background-size: cover;
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

  padding: 1.5rem;
`