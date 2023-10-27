import { styled } from 'styled-components'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'
import Career from './components/Career'
import Project from './components/Project'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  color: white;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  
  return (
    <Container>
      <About />
      <Career />
      <Skills />
      <Project />
      <Contact />
    </Container>
  )
}

export default App
