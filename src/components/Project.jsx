import React from 'react'
import { styled } from 'styled-components';
import Rebrand from "./projects/Rebrand"
import MMA from "./projects/MMA"

const Section = styled.section`
  height: 500vh;
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
        <Rebrand />
        <MMA />
      </Container>
    </Section>
  )
}

export default Project