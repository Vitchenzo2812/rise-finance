import styled from 'styled-components';

export const Button = styled.button<{ width: string }>`
  width: ${props => props.width};
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
      width: calc(${props => props.width} - 0.5rem);
    }
  }
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