import React from 'react'
import rebrandImage from "../../assets/img/re-brand.png"
import { ContLink, ContTitle, ContentWrapper, ImageWrapper, Img, Left, PWarapper, ProjectContainer, ProjectTitle, Right, SubContent, SubTitleDesc, ContDesc } from './styles';

const Rebrand = () => {
  return (
          <ProjectContainer>
            <ProjectTitle>Re-Brand Project-v2</ProjectTitle>
            <SubTitleDesc>
              명품 대여 & 판매 서비스 <span>2021.07-2021-10</span>(1인 프로젝트)
            </SubTitleDesc>
            <ContentWrapper>
              <Left>
                {/* <ImgWrapper /> */}
                <ImageWrapper>
                  <Img src={rebrandImage} />
                </ImageWrapper>
              </Left>
              <Right>
                <PWarapper>
                  <p>기존의 쇼핑몰 서비스 구현을 경험하고, 쇼핑몰의 복잡한 구조를 최소화하고자 하는 목표를 가지고 구현한 웹 사이트입니다.</p>
                  <p><span>Webpack</span>과 <span>Babel</span>을 이용하여 React 개발 환경 구성하여 기존의 <span>CRA</span>를 통한 프로젝트의 차이를 알고, 
                    복잡한 규모에 따라 파일간 관계가 복잡하고 무거워져 브라우저 로딩이 길어지는 현상을 대비하여, 웹팩을 통해 최적화를 도전했습니다.
                  </p>
                  <p>로그인 처리를 위한 <span>React Context</span>를 구현하여 상태관리를 하였습니다.</p>
                  <p>SQL 기초 개념 확립을 위한 <span>ORM</span>을 사용하지 않고, <span>Raw query 사용</span></p>
                </PWarapper>
                <SubContent>
                  <ContTitle>주요 기능</ContTitle>
                  <ContDesc>React Hooks, session 및 passport.js 사용하여 유저 인증 처리</ContDesc>
                </SubContent>
                <SubContent>
                  <ContTitle>깃 허브</ContTitle>
                  <ContLink onClick={() => window.open('https://github.com/bellDev-code/Re-brand-project-v2')}>https://github.com/bellDev-code/Re-brand-project-v2</ContLink>
                </SubContent>
                <SubContent>
                  <ContTitle>Front-End</ContTitle>
                  <ContDesc>Javascript, React, axios, styled-components</ContDesc>
                </SubContent>
                <SubContent>
                  <ContTitle>Back-End</ContTitle>
                  <ContDesc>Node.js, express, session, passport</ContDesc>
                </SubContent>
                <SubContent>
                  <ContTitle>DataBase</ContTitle>
                  <ContDesc>Postgresql</ContDesc>
                </SubContent>
              </Right>
            </ContentWrapper>
          </ProjectContainer>
  )
}

export default Rebrand