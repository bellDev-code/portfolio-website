import styled from "styled-components"

export const ProjectContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  height: 100%;
  margin-bottom: 20px;
  padding: 40px 20px;
  color: black;
`

export const ContentWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
  font-size: 40px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const SubTitleDesc = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  color: #6c757d;

  > span {
    padding-left: 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;

    > span {
      padding-left: inherit;
    }
  }
`

export const Left = styled.div`
  flex: 1;
  padding-right: 30px;

  @media only screen and (max-width: 768px) {
    padding-right: inherit;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

`

export const Img = styled.img`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    height: 80%;
  }
`

export const Right = styled.div`
  margin-bottom: 25px;
  flex: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 11px
  }
`

export const PWarapper = styled.div`
  margin-bottom: 30px;
  > p {
    margin-top: 0;
    font-weight: 300;

    > span {
      font-weight: 500;
      color: #da4ea2;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 30px 0;
  }
`

export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const ContTitle = styled.div`
  flex: 1;
  font-weight: 600;
  padding-right: 15px;
`

export const ContDesc = styled.div`
  flex: 5;
  font-weight: 300;
`

export const ContLink = styled.div`
  flex: 5;
  font-weight: 300;
  color: #999292;
  cursor: pointer;
`