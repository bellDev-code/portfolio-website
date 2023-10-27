import React, { Suspense } from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Mac from './Mac'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Typewriter from "../hooks/Typewriter"

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 60px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 30px;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const WhtaWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const SubTitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  width: 100px;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  /* position: relative; */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const About = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>BellDev-code Portfolio</Title>
          <WhtaWeDo>
            <Line src="./img/line.png" />
            <SubTitle>
              <Typewriter text="Web Front-End Developer" delay={100} />
            </SubTitle>
          </WhtaWeDo>
          <Desc>
            <Typewriter text="사용자에게 편하고 Interactive한 UI/UX 추구합니다." delay={100} />
          </Desc>
          <Button onClick={() => window.open('https://github.com/bellDev-code')}>Github</Button>
        </Left>
        <Right>
          {/* 3D Model */}
          <Canvas>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Mac />
              </Stage>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5}  />
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default About