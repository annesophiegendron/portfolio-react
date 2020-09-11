import React from 'react'
import styled from "styled-components"

// assets
import { GithubLogo } from "../assets/svg/github_svg"
import { LinkedinLogo } from "../assets/svg/linkedin_svg"

const Footer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color :#0D0D0D;
  color: white;
  text-align: center;
  line-height: 29px;
  height: 100vh; 
  padding-top: 30vh;

    @media (min-width: 992px) {
      height: inherit;
      padding: 70px 40px;
    }
`

const FooterTitle = styled.h6`
  margin-bottom: 25px;
  padding-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  font-family: 'Montserrat', sans-serif;
`

const FooterText = styled.p`
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
    :hover {
      color: grey;
    }
`

const LogoContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`

const Logo = styled.a`
  text-decoration: none;
  padding: 30px;
  cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
    }
`

export const Contact = () => {
  return (
    <>
      <Footer id="contact-section">

        <FooterTitle>contact</FooterTitle>
        <FooterText>Anne-Sophie Gendron</FooterText>
        <FooterLink href="mailto:annesophie.gendron@gmail.com" target="_blank">annesophie.gendron@gmail.com</FooterLink>

        <LogoContainer>
          <Logo href="https://github.com/annesophiegendron" target="_blank">
            <GithubLogo />
          </Logo>
          <Logo href="https://www.linkedin.com/in/anne-sophie-gendron/" target="_blank">
            <LinkedinLogo />
          </Logo>
        </LogoContainer>
      </Footer>
    </>
  )
}

export default Contact
