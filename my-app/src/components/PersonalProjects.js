import React from 'react'
import styled from "styled-components"

// styles
import { SectionWrapperGrey, SectionTitle, Text } from "../styles/globalStyle"

// assets
import Cubes from "../assets/videos/cubesvideo.mp4"
import Photography from "../assets/videos/photowebsite.mp4"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    width: 80%;
  }
`
const PersonalContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 992px) {
    padding-bottom: inherit;
    width: 80%;
    margin-right: 3vh;
  }
`

const Video = styled.video`
border-radius: 0px;
background: linear-gradient(45deg, #ffffff, #dadada);
box-shadow:  13px -13px 26px #dcdcdc, 
             -13px 13px 26px #ffffff;
  width: 280px;
  overflow: hidden;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    width: 100%;
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
          <Text><strong>Personal website</strong> built using React and some nice animations libraries like <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer">GSAP</a> and <a href="https://www.framer.com/api/motion/" target="_blank" rel="noopener noreferrer">Framer motion</a>. <br></br>See the <a href="https://github.com/annesophiegendron/photography" target="_blank" rel="noopener noreferrer">source code here</a> or see the project live <strong><a href="https://photography.annesophiegendron.vercel.app/" target="_blank" rel="noopener noreferrer">here</a></strong>.</Text>
        </PersonalContainer>

        <PersonalContainer>
          <Video autoPlay playsInline muted loop>
            <source src={Cubes} type="video/mp4"></source>
        "Your browser is not supported!"
          </Video>
          <Text><strong>Cubes animation</strong> using Three.js and the React renderer Three Fiber. <br></br> See the <a href="https://github.com/annesophiegendron/cubes" target="_blank" rel="noopener noreferrer">source code here</a> or see the project live <strong><a href="https://cubes.annesophiegendron.vercel.app/" target="_blank" rel="noopener noreferrer">here</a></strong>.<br></br><br></br></Text>
        </PersonalContainer>
      </Wrapper>

    </SectionWrapperGrey>
  )
}

