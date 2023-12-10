import React from 'react'
import { styled } from 'styled-components';
import Rebrand from "./projects/Rebrand"
import MMA from "./projects/MMA"
import Portfolio from "./projects/Portfolio"
import Secretout from './projects/Screatout';

const Section = styled.section`
  height: 400vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 600vh;
  }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
  margin-top: 60px;
  font-size: 40px;
  color: #da4ea2;
`

const Project = () => {
  return (
    <Section id='project'>
      <Container>
        <Title>PROJECT</Title>
        <Secretout />
        <Portfolio />
        <Rebrand />
        <MMA />
      </Container>
    </Section>
  )
}

export default Project