import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13.1rem 12rem;
  gap: 3.1rem;

  width: 100%;
  height: max-content;
`

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const Logo = styled.div`
  width: 37.8rem;
  height: 4rem;

  mask: url(./public/logo-rise-finance.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3A49F9;
`

export const WrapperGridColumn = styled.div`
  display: grid;
  gap: 7rem;
`

export const GridColumns = styled.div<{ gridColumn: number }>`
  grid-column: ${props => props.gridColumn};
  display: flex;
  flex-direction: row;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

export const TitleListItem = styled.p`
  color: #92989F;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`

export const ListItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 4rem;
  color: #fff;
  list-style: none;
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  gap: .8rem;
`

export const TitleDescription = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: #92989F;
`

export const SubtitleDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #fff;
  `

export const WrapperFinal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Line = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: transparent;
  border-top: 1px solid #71777D;
`
export const copyright = styled.small`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #92989F;
`