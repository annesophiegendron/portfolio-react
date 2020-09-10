import React from 'react'
import styled from 'styled-components'

// assets
import lineIntro from "../assets/images/line_intro.png"

// styles
import {Text} from "../styles/globalStyle"

const IntroContainer = styled.div`
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-top: solid #D9D9D9 1px;
  padding: 60px 40px;
  @media (min-width: 992px) {
    text-align: -webkit-center;
    text-align: -moz-center;
  }
`

const Icon = styled.img`
  width: 50px;
  height: 8px;
  opacity: 1;
  margin-right: 10px;
  padding-bottom: 2px;
`

export const About = () => {
  return (
    <IntroContainer id="about-section">

      <Text>
        <Icon src={lineIntro} alt="black line"></Icon>
          Hi! I'm a junior front-end developer. With over 10 years of working experience, I have had the chance to work with inspiring people who helped me to get there, first in finance, then in marketing and event management - which makes me used to handling stressful situations and knowing how valuable it is to work well with your team. <br></br><br></br> I’m creative and solution-oriented, always curious to understand how things work and how they can be improved. People describe me as a relaxed and reliable person.
          My preferred technologies right now are React and JavaScript, and I want to dig deeper into that. I also have a goal to get more into Design and UX, where I can use my creative skills to the fullest.
      </Text>
  </IntroContainer>
  )
}

export default About

