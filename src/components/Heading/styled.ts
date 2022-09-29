import styled from "styled-components";

export const Wrapper = styled.div<{ sizeGap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.sizeGap};
  padding: 8rem;
  align-items: center;
`

export const Title = styled.h2<{ sizeW?: string }>`
  width: ${props => props.sizeW};
  justify-content: center;
  font-size: 5rem;
  font-weight: 600;
  background: linear-gradient(90deg, rgba(58,73,249,1) 0%, rgba(129,45,226,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const Subtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: #121139;
  justify-content: center;
`
