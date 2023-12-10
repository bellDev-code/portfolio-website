import React from 'react'
import SecretoutImg from "../../assets/img/Secretout.png"
import { ContLink, ContTitle, ContentWrapper, ImageWrapper, Img, Left, PWarapper, ProjectContainer, ProjectTitle, Right, SubContent, SubTitleDesc, ContDesc } from './styles';

const Secretout = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Secretout - 시크릿 아웃</ProjectTitle>
      <SubTitleDesc>
        질문 답하기 웹 앱 서비스<span>2023.11-2023-11</span>(2인 프로젝트)
      </SubTitleDesc>
      <ContentWrapper>
        <Left>
          <ImageWrapper>
            <Img src={SecretoutImg} />
          </ImageWrapper>
        </Left>
        <Right>
          <PWarapper>
              <p>
                싱글 디바이스 기능과 멀티 디바이스 모드를 지원하여, 여러 명이 함께 하나의 디바이스를 사용해 질문에 답할 수 있습니다.
                또한, 각자의 디바이스를 통해 동시에 질문과 답변을 할 수 있는 멀티 디바이스 모드도 지원하고 있습니다.
              </p>
              <p>
                연말에 가족과 친구가 모이는 자리에서, 우리의 서비스를 활용하여 사용자들이 서로 가까워지고 궁금증을 해결할 수 있는 
                특별한 경험을 제공하고자 하였습니다.
              </p>
          </PWarapper>
          <SubContent>
            <ContTitle>주요 기능</ContTitle>
            <ContDesc>React, TypeScript, Vite, Zustand, React-Query</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>깃 허브</ContTitle>
            <ContLink onClick={() => open('https://github.com/bellDev-code/Answer-the-question-Front')}>https://github.com/bellDev-code/Answer-the-question-Front</ContLink>
          </SubContent>
          <SubContent>
            <ContTitle>Front-End</ContTitle>
            <ContDesc>React, TypeScript, TailWindCss, Zustand, React-Query, Axios</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>Back-End</ContTitle>
            <ContDesc>Node, Mongoose, Docker</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>DataBase</ContTitle>
            <ContDesc>MongoDB</ContDesc>
          </SubContent>
        </Right>
      </ContentWrapper>
    </ProjectContainer>
  )
}

export default Secretout