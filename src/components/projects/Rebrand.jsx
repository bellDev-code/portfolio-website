import React from 'react'
import { styled } from 'styled-components';
import rebrandImage from "../../assets/img/re-brand.png"

const ProjectContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  height: 100vh;
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

const ImgWrapper = styled.div`
  background-image: url(${rebrandImage});
  background-size: cover;
  width: 100%;
  height: 450px;
`

const Right = styled.div`
  margin-bottom: 25px;
  flex: 1.2;
`

const PWarapper = styled.div`
  margin-bottom: 16px;
  > p {
    margin-top: 0;
    font-weight: 300;

    > span {
      color: #da4ea2;
    }
  }
`

const Rebrand = () => {
  return (
          <ProjectContainer>
            <ProjectTitle>Re-Brand Project</ProjectTitle>
            <SubTitleDesc>
              명품 대여 & 판매 서비스 <span>2021.07-2021-10</span>(1인 프로젝트)
            </SubTitleDesc>
            <ContentWrapper>
              <Left>
                <ImgWrapper />
              </Left>
              <Right>
                <PWarapper>
                  <p>기존의 쇼핑몰 서비스 구현을 경험하고, 쇼핑몰의 복잡한 구조를 최소화하고자 하는 목표를 가지고 구현한 웹 사이트입니다.</p>
                  <p><span>Webpack</span>과 <span>Babel</span>을 이용하여 React 개발 환경 구성하여 기존의 CRA를 통한 프로젝트의 차이를 알고, 복잡한 규모에 따라 파일간 관계가 복잡하고 무거워져 브라우저 로딩이 길어지고, 따라서 웹팩을 통해 파일간 의존성 관계 정리 및 최적화를 도전했습니다.</p>
                  <p>로그인 처리를 위한 <span>React Context</span>를 구현하여 상태관리를 하였습니다.</p>
                  <p>session 및 passport.js 사용하여 유저 인증 처리</p>
                  <p>SQL 기초 개념 확립을 위한 <span>ORM</span>을 사용하지 않고, <span>Raw query 사용</span></p>
                  <button>자세히 보기</button>
                </PWarapper>
              </Right>
            </ContentWrapper>
          </ProjectContainer>
  )
}

export default Rebrand