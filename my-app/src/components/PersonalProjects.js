import React from 'react'
import styled from "styled-components"

// styles
import { SectionWrapperGrey, SectionTitle, Text } from "../styles/globalStyle"

// assets
import Cubes from "../assets/videos/cubesvideo.mp4"
import Photography from "../assets/videos/photography_website.mp4"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1448px) {
    flex-direction: row;
    width: 65%;
  }
`
const PersonalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 992px) {
    padding-bottom: inherit;
  }
`

const Video = styled.video`
  border: 1px black solid;
  width: 300px;
  overflow: hidden;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    width: 430px;
  }
`

export const PersonalProjects = () => {
  return (
    <SectionWrapperGrey id="personal-section">

      <SectionTitle>personal projects</SectionTitle>

      <Wrapper>
        <PersonalContainer>
          <Video autoPlay playsInline muted loop>
            <source src={Photography} type="video/mp4"></source>
        "Your browser is not supported!"
          </Video>
          <Text><strong>Personal website</strong> built using React and some nice animations libraries like <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer">GSAP</a> and <a href="https://www.framer.com/api/motion/" target="_blank" rel="noopener noreferrer">Framer motion</a>. See the <a href="https://github.com/annesophiegendron/photography" target="_blank" rel="noopener noreferrer">source code here</a> or see the project live <strong><a href="https://photography.annesophiegendron.vercel.app/" target="_blank" rel="noopener noreferrer">here</a></strong>.</Text>
        </PersonalContainer>

        <PersonalContainer>
          <Video autoPlay playsInline muted loop>
            <source src={Cubes} type="video/mp4"></source>
        "Your browser is not supported!"
          </Video>
          <Text><strong>Cubes animation</strong> using Three.js and the React renderer Three Fiber. See the <a href="https://github.com/annesophiegendron/cubes" target="_blank" rel="noopener noreferrer">source code here</a> or see the project live <strong><a href="https://cubes.annesophiegendron.vercel.app/" target="_blank" rel="noopener noreferrer">here</a></strong>.</Text>
        </PersonalContainer>
      </Wrapper>

    </SectionWrapperGrey>
  )
}

