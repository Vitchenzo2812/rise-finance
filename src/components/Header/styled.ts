import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 3rem 9rem;

  position: sticky;

  z-index: 100;
`

export const Logo = styled.div`
  width: 37.8rem;
  height: 4rem;

  background-image: url(./public/logo-rise-finance.svg);
  background-repeat: no-repeat;
  background-size: cover;
`

export const Menu = styled.div`
  width: 4.4rem;
  height: 1.7rem;

  background-image: url(./public/icon-menu.svg);

  cursor: pointer;
`