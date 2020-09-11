import React from 'react'
import styled from 'styled-components'

//components
import { OverlayNav } from "./OverlayNav"

//assets
import portrait from "../assets/images/portrait.png"

// styled components
const HeaderContainer = styled.section`
  background-color: white;
  width: 100%;
  opacity: 1;
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
`

const HeaderText = styled.div`
  display: flex;
  margin-top: 90px;
  -moz-flex-direction: column;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-left: 220px;
  }
`

const HeaderOne = styled.h1`
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

const HeaderTwo  = styled.h2`
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
  @media (min-width: 992px) {
    margin-right: 220px;
    margin-bottom: -8vh;
  }
`

const Portrait = styled.img`
  width: 160px;
  height: 160px;
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
  return (
    <>
      <HeaderContainer role="banner">
        <OverlayNav />
        <HeaderText>
          <HeaderOne>anne-sophie gendron</HeaderOne>
          <HeaderTwo>front-end developer</HeaderTwo>
      </HeaderText>
      <HeaderPortrait>
        <Portrait src={portrait} alt="anne-sophie portrait"></Portrait>
      </HeaderPortrait>
      </HeaderContainer>
      </>
  )
}

