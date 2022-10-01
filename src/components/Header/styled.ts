import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: sticky;

  top:0;
  left:0;

  width: 100%;
  height: max-content;

  align-items: center;
  justify-content: space-between;

  padding: 3rem 9rem;

  z-index: 100;
  
  background-image: url(./public/hero.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  
`

export const Logo = styled.div`
  width: 37.8rem;
  height: 4rem;

  background-image: url(./public/logo-rise-finance.svg);
  background-repeat: no-repeat;
  background-size: cover;
`

export const Menu = styled.div<{ isOpened: boolean }>`
  width: 4.4rem;
  height: max-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;
  div {
    height: .3rem;
    width: 4.4rem;
    background: #fff;
  }
  div {
    transition: all .2s ease-in-out;
  }
  ${props => props.isOpened ? css`
  div:nth-child(2) { display: none; }

  div:nth-child(1) { 
    transform: rotate(-45deg) translateY(.9rem);
  }
  div:nth-child(3) {
    transform: rotate(45deg) translateY(-.9rem);
  }
  ` : ''}
`