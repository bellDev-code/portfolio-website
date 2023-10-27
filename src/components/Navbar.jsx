import React from 'react'
import { styled } from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;

    @media only screen and (max-width: 768px) {
        position: inherit;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding-left: 30px;
`

const Logo = styled.div`
    font-family: 'Dancing';
    font-size: 30px;
    height: 50px;
    display: flex;
    align-items: center;
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo>JONGHO LEE</Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Career</ListItem>
                    <ListItem>Skills</ListItem>
                    <ListItem>Project</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar