import React from 'react'
import { styled } from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
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

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
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
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar