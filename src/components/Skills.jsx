import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['JavaScript', 'TypeScript', 'React'];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: white;

`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  },[])
  
  return (
    <Section>
      <Container>
        <Left>
          <List>
          <TextTransition springConfig={presets.wobbly}>
            <ListItem>{TEXTS[index % TEXTS.length]}</ListItem>
          </TextTransition>
          </List>
        </Left>
        <Right>
          {/* 조건부 렌더링을 사용하여 내용을 변경 */}
          {TEXTS[index % TEXTS.length] === 'JavaScript' && (
            <div>JavaScript content here</div>
          )}
          {TEXTS[index % TEXTS.length] === 'TypeScript' && (
            <div>TypeScript content here</div>
          )}
          {TEXTS[index % TEXTS.length] === 'React' && (
            <div>React content here</div>
          )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works