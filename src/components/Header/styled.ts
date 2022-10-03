import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  position: sticky;

  /* overflow: hidden; */

  top:0;
  left:0;

  width: 100%;
  height: max-content;

  padding: 3rem 9rem;

  z-index: 100;
  
  background-image: url(./public/hero.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  
`

export const Logo = styled.a`
  width: 37.8rem;
  height: 4rem;

  background-image: url(./public/logo-rise-finance.svg);
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s;

  :hover {
    opacity: 0.7;
  }
`

export const Menu = styled.div<{ isOpened: boolean }>`
  width: 4.4rem;
  height: max-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;

  transition: 0.5s;

  :hover {
    opacity: 0.7;
  }

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

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled.ul<{ isOpened: boolean }>`
  width: 25vw;
  height: 92vh;

  border-top: 5px solid #020024;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: 13.2vh;
  right: 0;

  list-style: none;

  background-image: url(./public/hero.svg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;

  transition: transform 0.3s ease-in-out;
  
  ${props => props.isOpened ? css`
  transform: translateX(0%);
  ` 
  : css`
  transform: translateX(100%);
  `}
`

export const NavItems = styled.li`
  letter-spacing: 3px;
`

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

  cursor: pointer;

  transition: 0.5s;

  :hover {
    opacity: 0.3;
  }
`