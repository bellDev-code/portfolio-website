import React from 'react'
import { styled } from 'styled-components';
import portfolio from "../../assets/img/portfolio.png"

const ProjectContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  height: 80vh;
  margin-bottom: 20px;
  padding: 40px 20px;
  color: black;
`

const ContentWrapper = styled.div`
  display: flex;
`

const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
  font-size: 40px;
`

const SubTitleDesc = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  color: #6c757d;

  > span {
    padding-left: 10px;
  }
`

const Left = styled.div`
  flex: 1;
  padding-right: 30px;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Right = styled.div`
  margin-bottom: 25px;
  flex: 1.2;
`

const PWarapper = styled.div`
  margin-bottom: 30px;
  > p {
    margin-top: 0;
    font-weight: 300;

    > span {
      font-weight: 500;
      color: #da4ea2;
    }
  }
`

const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const ContTitle = styled.div`
  flex: 1;
  font-weight: 600;
  padding-right: 15px;
`

const ContDesc = styled.div`
  flex: 5;
  font-weight: 300;
`

const ContLink = styled.div`
  flex: 5;
  font-weight: 300;
  color: #999292;
  cursor: pointer;
`

const Portfolio = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Web-Portfolio</ProjectTitle>
      <SubTitleDesc>
        Portfolio Website<span>2023.10-2023.10</span>(1인 프로젝트)
      </SubTitleDesc>
      <ContentWrapper>
        <Left>
          <ImageWrapper>
            <Img src={portfolio} />
          </ImageWrapper>
        </Left>
        <Right>
          <PWarapper>
              <p>포트폴리오 웹사이트를 구축하면서 React 및 <span>three.js</span>를 활용하여, 
                포트폴리오를 검토하는 방문자들에게 기억에 남고 시각적으로 흥미로운 경험을 제공하기 위해 시작된 포트폴리오 웹 사이트입니다.
              </p>
              <p>
                방문자들에게 Interactive한 경험을 주기 위한 <span>3D Model</span>과 Web에서 <span>3차원 공간</span>을 즐길 수 있게 설계하였습니다.
                기존 Javascript-Animation 효과뿐만 아니라 3D를 활용하여 더욱 더 입체감 있는 웹을 구성할 수 있다는 생각이 들었습니다.
              </p>
          </PWarapper>
          <SubContent>
            <ContTitle>주요 기능</ContTitle>
            <ContDesc>Three.js를 활용한 3D 모델링 적용, 3차원 공간 구성, Canvas, GLTF-pipline을 활용하여 GLTF 변환</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>깃 허브</ContTitle>
            <ContLink onClick={() => open('https://github.com/bellDev-code/portfolio-website')}>https://github.com/bellDev-code/portfolio-website</ContLink>
          </SubContent>
          <SubContent>
            <ContTitle>Front-End</ContTitle>
            <ContDesc>React, Three.js, React-Three-Fiber</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>Deployment</ContTitle>
            <ContDesc>Github</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>URL</ContTitle>
            <ContDesc></ContDesc>
          </SubContent>
        </Right>
      </ContentWrapper>
    </ProjectContainer>
  )
}

export default Portfolio