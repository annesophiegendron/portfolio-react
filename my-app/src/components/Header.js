import React from 'react'

// libraries
import styled from 'styled-components'
import { useAnimation } from "framer-motion"
import { motion } from "framer-motion"

//components
import { OverlayNav } from "./OverlayNav"

//assets
import portrait from "../assets/images/portrait.png"

// styled components
const HeaderContainer = styled.section`
  background-color: white;
  width: 100%;
  height: 55vh;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  -moz-flex-direction: column;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 30px;
  justify-content: space-between;
  text-align: left;
  @media (min-width: 992px) {
    left: 10%;
    margin-top: 50px;
  }
`

const HeaderText = styled(motion.div)`
  display: flex;
  margin-top: 130px;
  -moz-flex-direction: column;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: left;
  @media (min-width: 992px) {
    margin-top: 180px;
  }
`

const HeaderOne = styled(motion.h1)`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: normal;
  letter-spacing: 2px;
  margin-bottom: 15px;
  color: #0D0D0D;
  @media (min-width: 992px) {
    font-size: 30px;
    letter-spacing: 1.15px;
    font-weight: lighter;
    margin-bottom: 10px;
  }
`

const HeaderTwo = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  letter-spacing: 4px;
  font-weight: bold;
  color: #595959;
  @media (min-width: 992px) {
    font-size: 25px;
    letter-spacing: 0px;
    display: contents;
  }
`

const HeaderPortrait = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: -8vh;
  @media (min-width: 992px) {
    margin-right: 40vh;
  }
`

const Portrait = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: solid 4px white;
  @media (min-width: 992px) {
    width: 27vh;
    height: 27vh;
  }
`

// header component
export const Header = () => {
  const parent = {
    initial: { y: 0 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: -350 },
    animate: {
      y: 0,
      transition: {
        duration: 2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <>
      <HeaderContainer role="banner">
        <OverlayNav />
        <HeaderText variants={parent} initial="initial" animate="animate">
          <motion.div variants={child}>
          <HeaderOne>anne-sophie gendron</HeaderOne>
            <HeaderTwo>front-end developer</HeaderTwo>
          </motion.div>
      </HeaderText>
      <HeaderPortrait>
        <Portrait src={portrait} alt="anne-sophie portrait"></Portrait>
      </HeaderPortrait>
        </HeaderContainer>
      </>
  )
}

