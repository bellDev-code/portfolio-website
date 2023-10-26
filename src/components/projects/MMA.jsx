import React from 'react'
import { styled } from 'styled-components';
import mmaImage from "../../assets/img/MMA.png"

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

const ImgWrapper = styled.div`
  background-image: url(${mmaImage});
  background-size: cover;
  width: 100%;
  height: 450px;
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

const MMA = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>MMA-Simulator</ProjectTitle>
      <SubTitleDesc>
        Vanilla TypeScript Simulator 구현<span>2021.06-2021-07</span>(1인 프로젝트)
      </SubTitleDesc>
      <ContentWrapper>
        <Left>
          <ImgWrapper />
        </Left>
        <Right>
          <PWarapper>
              <p>이 프로젝트는 <span>TypeScript</span>를 활용하여 객체 지향 프로그래밍으로 설계된 프로젝트 입니다. 
                  설정된 플레이어들이 무작위로 선택한 기술을 사용하여 상대방과 경합하는 시뮬레이터를 구현했습니다. 
                  TypeScrip를 재밌게 공부하기 위하여 진행한 프로젝트입니다.
              </p>
              <p>이 프로젝트를 통해 클래스 기반의 <span>객체 지향 프로그래밍</span> 개념을 깊이 이해하고, 
                  추후 다른 언어에서의 객체 지향 프로그래밍을 빠르게 익숙해질 수 있을 자신감을 얻었습니다.
              </p>
              <p>또한, 제가 추구하는 기술적 도전을 해결하는 데 어떤 방식으로 접근하고 문제를 해결하는지를 대변하고 있으며, 다른 프로그래밍 언어나 프레임워크에 빠르게 적응하고 새로운 프로젝트에 적용하는 자신감을 나타냅니다.</p>
          </PWarapper>
          <SubContent>
            <ContTitle>주요 기능</ContTitle>
            <ContDesc>타입 정의, class 객체 구현</ContDesc>
          </SubContent>
          <SubContent>
            <ContTitle>깃 허브</ContTitle>
            <ContLink onClick={() => open('https://github.com/bellDev-code/mma-simulater')}>https://github.com/bellDev-code/mma-simulater</ContLink>
          </SubContent>
        </Right>
      </ContentWrapper>
    </ProjectContainer>
  )
}

export default MMA