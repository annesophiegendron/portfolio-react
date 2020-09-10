import React from 'react'

// librairies
import styled from "styled-components"

// styles
import { SectionWrapperWhite, SectionTitle } from "../styles/globalStyle"

const List = styled.ul`
  list-style-type: none;
`

const TechList = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  text-align: center;
  line-height: 29px;
  justify-content: center;
  justify-content: space-around;
    @media (min-width: 992px) {
      width: 65%;
  } 
`

export const Tech = () => {
  return (
    <SectionWrapperWhite id="tech-section">
    <SectionTitle>tech</SectionTitle>
      <TechList>
        <List>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React</li>
        </List>
        <List>
          <li>Redux</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Mongo DB</li>
          <li>Web Accessibility</li>
        </List>
      </TechList>
  </SectionWrapperWhite>
  )
}

export default Tech
