import React, { useState } from 'react'
import styled from "styled-components"

//styles
import { SectionWrapperGrey, SectionTitle, Tag, Subtitle, ProjectDescription } from "../styles/globalStyle"

const ProjectSpacing = styled.div`
  margin-top: 20px;
  margin-bottom: 70px;
    @media (min-width: 992px) {
      width: 80%;
    }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const GithubLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: black;
`

const ButtonContainer = styled.div`
  height: 33.33%;
  justify-content: center;
  align-items: center;
  display: flex;
    @media (min-width: 992px) {
      width: 30%;
      display: flex;
    }
`

const Button = styled.div`
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  font-weight: bolder;
  color: black;
  transition: all 0.5s ease-in-out;
  position: relative;
  .span {
    transition: all 0.3s;
  }
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: rgb(0, 0, 0);
      border-bottom-color: rgba(0, 0, 0);
      transform: scale(0.1, 1);
    }
    :hover::before {
      opacity: 1;	
      transform: scale(1, 1);	
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255,255,255,0.1);
    }
    :hover::after {
      opacity: 0;	
      transform: scale(0.1, 1);
    }
`

export const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <SectionWrapperGrey id="other-projects">
        <SectionTitle>other projects</SectionTitle>

        {!showMore && (
          <>
            <ProjectSpacing>
              <Subtitle>Recipes app
        <ProjectDescription>Front-end built in React, back-end in Node.js, navigation using React Router. The user can search for recipes by keywords, save and comment them. An authentication page is also implemented.
          <GithubLink href="https://github.com/annesophiegendron/fp_goodfood" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Mongoose</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Express</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>React</Tag>
              </TagsContainer>
            </ProjectSpacing>

            <ProjectSpacing>
              <Subtitle>Social media API
      <ProjectDescription>Use of Express and Mongodb to build an API which includes both GET request endpoints to return data and POST endpoints to create data.
          <GithubLink href="https://github.com/annesophiegendron/project-happy-thoughts-api" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Mongoose</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Express</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>React</Tag>
              </TagsContainer>
            </ProjectSpacing>

            <ProjectSpacing>
              <Subtitle>Express API project
          <ProjectDescription>API built in Node using Express
      <GithubLink href="https://github.com/annesophiegendron/project-express-api" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Node.js</Tag>
                <Tag>Express framework</Tag>
                <Tag>Javascript ES6</Tag>
              </TagsContainer>
            </ProjectSpacing >

            <ButtonContainer>
              <Button onClick={() => setShowMore(true)}>
                <span>SEE MORE ˯</span>
              </Button>
            </ButtonContainer>
          </>
        )}

        {showMore && (
          <>
            <ProjectSpacing>
              <Subtitle>Recipes app
              <ProjectDescription>Front-end built in React, back-end in Node.js, navigation using React Router. The user can search for recipes by keywords, save and comment them. An authentication page is also implemented.
                <GithubLink href="https://github.com/annesophiegendron/fp_goodfood" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Mongoose</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Express</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>React</Tag>
              </TagsContainer>
            </ProjectSpacing>

            <ProjectSpacing>
              <Subtitle>Social media API
            <ProjectDescription>Use of Express and Mongodb to build an API which includes both GET request endpoints to return data and POST endpoints to create data.
                <GithubLink href="https://github.com/annesophiegendron/project-happy-thoughts-api" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Mongoose</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Express</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>React</Tag>
              </TagsContainer>
            </ProjectSpacing>

            <ProjectSpacing>
              <Subtitle>Express API project
          <ProjectDescription>API built in Node using Express
      <GithubLink href="https://github.com/annesophiegendron/project-express-api" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>Node.js</Tag>
                <Tag>Express framework</Tag>
                <Tag>Javascript ES6</Tag>
              </TagsContainer>
            </ProjectSpacing >

            <ProjectSpacing>
              <Subtitle>React Native project
        <ProjectDescription>A mobile jokes generator application built with React Native.
            <GithubLink href="https://github.com/annesophiegendron/project-react-native-app" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>HTML5</Tag>
                <Tag>Styled Components</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>REACT NATIVE</Tag>
              </TagsContainer>
            </ProjectSpacing>

            <ProjectSpacing>
              <Subtitle>Survey project
      <ProjectDescription>A multi-pages React application, using form fields
            <GithubLink href="https://github.com/annesophiegendron/project-survey" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>HTML5</Tag>
                <Tag>CSS3</Tag>
                <Tag>Javascript ES6</Tag>
                <Tag>REACT</Tag>
              </TagsContainer>
            </ProjectSpacing >

            <ProjectSpacing>
              <Subtitle>Pizza bot
      <ProjectDescription>A little pizza bot using Javascript. First pair-programming project
        <GithubLink href="https://github.com/annesophiegendron/project-pizza-bot" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>HTML5</Tag>
                <Tag>CSS3</Tag>
                <Tag>Javascript ES6</Tag>
              </TagsContainer>
            </ProjectSpacing >

            <ProjectSpacing>
              <Subtitle>Business site webpage
      <ProjectDescription>This web page displays a form and an accordion, using a bit of JavaScript.
        <GithubLink href="https://github.com/annesophiegendron/project-business-site" target="_blank"><span> →</span></GithubLink>
                </ProjectDescription>
              </Subtitle>
              <TagsContainer>
                <Tag>HTML5</Tag>
                <Tag>CSS3</Tag>
                <Tag>Javascript ES6</Tag>
              </TagsContainer>
            </ProjectSpacing >

            <ButtonContainer>
              <Button onClick={() => setShowMore(false)}>
                <span>SEE LESS ˰</span>
              </Button>
            </ButtonContainer>
          </>
        )}
      </SectionWrapperGrey>
    </>
  )
}

