import React from 'react'
import { styled } from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  padding-top: 10px;
  font-size: 45px;
  margin: 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  margin: 0;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Career = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{
          fov: 25,
          position: [5, 5, 5]
        }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
        </Canvas>
        </Left>
        <Right>
        <Title>주식회사 앤스페이스</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>스페이스 클라우드 개발팀 (2022.01.08 - 2022.11.11)</Subtitle>
          </WhatWeDo>
          <Desc>
            스페이스 클라우드 GUEST & HOST 웹 서비스 기능 개발 / FE 개발
          </Desc>
          <Button>go to service</Button>
          <Title>주식회사 UI/UX</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>IT 개발팀 (2020.03.02 - 2020.09.18)</Subtitle>
          </WhatWeDo>
          <Desc>
            Web Publishing / FE 개발 인턴
          </Desc>
        </Right>
      </Container>
    </Section>
  )
}

export default Career