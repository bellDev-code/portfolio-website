import React from 'react'
import { styled } from 'styled-components';
import Rebrand from "./projects/Rebrand"
import MMA from "./projects/MMA"
import Portfolio from "./projects/Portfolio"

const Section = styled.section`
  height: 300vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
  color: #da4ea2;
`

const Project = () => {
  return (
    <Section>
      <Container>
        <Title>PROJECT</Title>
        <Portfolio />
        <Rebrand />
        <MMA />
      </Container>
    </Section>
  )
}

export default Project