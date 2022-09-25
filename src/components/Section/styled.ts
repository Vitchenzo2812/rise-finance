import styled from 'styled-components';

export const Container = styled.div<{ background?: string }>`
  width: 100vw;
  height: max-content;
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

Container.defaultProps = {
  background: ''
}