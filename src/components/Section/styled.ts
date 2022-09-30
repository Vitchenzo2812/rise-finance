import styled from 'styled-components';

export const Container = styled.div<{ background?: string }>`
  width: 100%;
  height: max-content;
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: local;
`

Container.defaultProps = {
  background: '#fff',
}