import styled from "styled-components"

export const SectionWrapperWhite = styled.section`
  padding-top: 40px;
  font-family: 'Montserrat', sans-serif;
  text-align: -moz-center;
  text-align: center;
  padding: 60px 40px;
    @media (min-width: 992px) {
      text-align: -webkit-center;
      text-align: -moz-center;
  }
`

export const SectionWrapperGrey = styled.section`
  background: #F2F2F2 0% 0% no-repeat padding-box;
  text-align: -moz-center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 60px 40px;
  width: 100%;
    @media (min-width: 992px) {
      text-align: -webkit-center;
      text-align: -moz-center;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-transform: uppercase;
  background-color:#0D0D0D;
  display: inline-block;
  padding: 4px 10px 4px 10px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-top: 10px;
  line-height: 32px;
`

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: left;
  line-height: 29px;
  
  a {
    color: inherit;
  }
`

export const Tag = styled.p`
  border: 1px solid #8C8C8C;
  background-color: #8C8C8C;
  display: inline-block;
  margin-right: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding: 4px 8px 4px 8px;
  color: white;
  margin-top: 2px;
`

export const Subtitle = styled.p`
  color:black;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 17px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`

export const ProjectDescription = styled.div`
  color: black;
  font-size: 16px;
  font-weight: lighter;
  text-transform: initial;
  line-height: 28px;
`