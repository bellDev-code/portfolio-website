import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const FlipCard = styled.div`
    background-color: transparent;
    width: 300px;
    height: 400px;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.18);
    perspective: 1000px;
`;

// Flip Card Inner
const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${FlipCard}:hover & {
        transform: rotateY(180deg);
    }
`;

// Front and Back Sides
const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: white;
    color: black;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: first baseline;
`;

const Title = styled.h1`
`

const Desc = styled.h2`

`

const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: white;
    color: black;
    transform: rotateY(180deg);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: first baseline;
`;

const Javascript = () => {
  return (
    <>
    <Container>
        <FlipCard>
            <FlipCardInner>
                <FlipCardFront>
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </FlipCardFront>
                <FlipCardBack>
                    <Title>Re-Brand Project</Title>
                    <Desc>라라라</Desc>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    </Container>
    </>
  )
}

export default Javascript