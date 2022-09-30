import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  position: relative;
`

export const ContainerCoruma = styled.div`
  display: flex;
  flex-direction: column;
  width: 91.9rem;
  height: 91.7rem;
  margin-left: 3.5rem;
  margin-top: 14.4rem;
  margin-bottom: 27.2rem;
  background-image: url(./public/bg-case-study.svg);
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContainerPhone = styled.div`
  width: 75.1rem;
  height: 57rem;
  background-image: url(./public/iphone.svg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 30.7rem;
  right: 2rem;
` 

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: justify;
  gap: 6rem;
  padding-top: 30.3rem;
  padding-left: 7.4rem;
`

export const TitleDescription = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
`
export const SubtitleDescription = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
`