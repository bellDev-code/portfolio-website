import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['JavaScript', 'TypeScript', 'React', 'Three.js'];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20%;

  @media only screen and (max-width: 768px) {
    padding: inherit 20%
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: inherit;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 100px;
  margin-top: 0;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const Works = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500,
    );
    return () => clearTimeout(intervalId);
  },[])

  return (
    <Section id='skill'>
      <Title>My Skills</Title>
      <Container>
        <List>
          <TextTransition springConfig={presets.wobbly}>
            <ListItem>{TEXTS[index % TEXTS.length]}</ListItem>
          </TextTransition>
        </List>
      </Container>
    </Section>
  )
}

export default Works