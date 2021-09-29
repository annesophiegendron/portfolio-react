import React, { useState } from "react";
// import styled from "styled-components";
import styled from "@emotion/styled";

// assets
import { GithubLogo } from "./assets/svg/github_svg";
import { LinkedinLogo } from "./assets/svg/linkedin_svg";
import { CodepenLogo } from "./assets/svg/codepen_svg";

function App() {
  const [background, setBackground] = useState("#F2ECE9");

  const SectionWrapper = styled.div`
    text-align: center;
    position: relative;
    height: 100vh;
    background: ${background};
    transition-duration: 3s ease-in-out;
  `;

  const TextCard = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    text-transform: capitalize;
    color: #010d00;
  `;

  const TextName = styled.h1`
    font-weight: 600;
    font-size: 1.15rem;
    @media (min-width: 992px) {
      font-size: 2rem;
    }
  `;

  const TextRole = styled.h2`
    margin-top: 5%;
    font-weight: lighter;
    font-size: 0.85rem;
    @media (min-width: 992px) {
      font-size: 1rem;
    }
  `;

  const SectionContact = styled.div`
    margin: 0;
    position: absolute;
    bottom: 10%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 992px) {
      bottom: 5%;
    }
  `;

  const Logo = styled.a`
    text-decoration: none;
    padding: 30px;
    color: black;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
    }
  `

  return (
    <SectionWrapper>
      <TextCard>
        <TextName>anne-sophie gendron</TextName>
        <TextRole>Front-end developer</TextRole>
      </TextCard>
      <SectionContact>
        <Logo
          href="https://github.com/annesophiegendron"
          target="_blank"
          onMouseEnter={() =>
            setBackground(
              "#85FFBD linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
            )
          }
        >
          <GithubLogo />
        </Logo>
        <Logo
          href="https://codepen.io/annesophiegdn"
          target="_blank"
          onMouseEnter={() =>
            setBackground(
              "#A9C9FF linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)"
            )
          }
        >
          <CodepenLogo />
        </Logo>
        <Logo
          href="https://www.linkedin.com/in/anne-sophie-gendron/"
          target="_blank"
          onMouseEnter={() =>
            setBackground(
              "#FBAB7E linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
            )
          }
        >
          <LinkedinLogo />
        </Logo>
      </SectionContact>
    </SectionWrapper>
  );
}

export default App;
