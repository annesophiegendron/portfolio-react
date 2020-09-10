import React, { useState } from 'react'

// libraries
import styled from "styled-components"

const Overlay = styled.div`
  height: 100%;
  width: ${(props) => props.width || 0};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  @media screen and (max-height: 450px) {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
`

const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`

const OverlayLink = styled.a`
  padding: 8px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 26px;
  color: #818181;
  cursor: pointer;
  display: block;
  transition: 0.4s;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover{
    color: #f1f1f1;
  }
@media screen and (max-height: 450px) {
  font-size: 20px
}
`

const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover{
    color: grey;
  }
`

const Hamburger = styled.span`
  font-size: 4vh;
  cursor: pointer;
  position: fixed;
  &:hover{
    color: grey;
  }
`

export const OverlayNav = () => {
  const [showMenu, setMenu] = useState(false)

  return (
    <>
      {!showMenu && (
        <Hamburger onClick={() => setMenu(true)}>&#9776;</Hamburger>
      )}

      {showMenu && (

        <Overlay width="100%">
          <CloseButton onClick={() => setMenu(false)}>&#8855;</CloseButton>
          <OverlayContent>
            <OverlayLink href="#about-section" onClick={() => setMenu(false)}>about</OverlayLink>
            <OverlayLink href="#tech-section" onClick={() => setMenu(false)}>tech</OverlayLink>
            <OverlayLink href="#personal-section" onClick={() => setMenu(false)}>personal projects</OverlayLink>
            <OverlayLink href="#featured-section" onClick={() => setMenu(false)}>featured projects</OverlayLink>
            <OverlayLink href="#other-projects" onClick={() => setMenu(false)}>others projects</OverlayLink>
            <OverlayLink href="#contact-section" onClick={() => setMenu(false)}>contact</OverlayLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}

