import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  color: #fff;
`

export const WrapperText = styled.div`
  grid-column: 1;
  display: flex;
  row-gap: 2rem;
  padding: 10rem;
  flex-direction: column;
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

export const ButtonLayer = styled.div`
  width: 0rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background: var(--gradient);
  transition: all .2s linear;
`

export const Button = styled.button`
  width: 27.4rem;
  height: 7.4rem;
  position: relative;
  font-size: 1.8rem;
  line-height: 100%;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  border: 5px solid transparent;
  border-image: linear-gradient(90deg, rgba(129,45,226,1) 0%, rgba(58,73,249,1) 100%);
  border-image-slice: 1;
  color: #fff;
  span {
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  :hover {
    .button-layer {
      width: 26.4rem;
    }
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