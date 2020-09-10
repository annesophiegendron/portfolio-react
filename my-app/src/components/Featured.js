import React from 'react'
import styled from "styled-components"

//styles
import { SectionWrapperWhite, SectionTitle, Tag, Subtitle, ProjectDescription } from "../styles/globalStyle"

// assets
import cluedo from "./../assets/images/projects_img/cluedo_image.png"
import thoughts from "./../assets/images/projects_img/happythoughts.png"
import magazine from "./../assets/images/projects_img/magazine_image.png"
import movie from "./../assets/images/projects_img/movieproject.png"
import music from "./../assets/images/projects_img/musicrelease.png"
import nutrition from "./../assets/images/projects_img/nutrition.png"
import todolist from "./../assets/images/projects_img/todolist.png"
import weather from "./../assets/images/projects_img/weatherapp_picture.png"
import auth from "./../assets/images/projects_img/authcolor.png"


const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
  @media (min-width: 992px) {
    width: 65%;
  }
`

const Card = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  opacity: 1;
  transition: .5s ease;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 992px) {background-color: transparent;
    margin: 20px;
  }
`

const CardFront = styled.div`
  background-color: #F4F4F4;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const CardBack = styled.div`
  background-color: white;
  border: 1px solid #A6A6A6;
  padding: 30px;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  &:hover {
    opacity: 1;
  }
`

const Image = styled.img`
  width: 300px;
  height: 300px;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Featured = () => {
  return (
    <SectionWrapperWhite id="featured-section">
      <SectionTitle>featured projects</SectionTitle>

      <ProjectsContainer>

        {/* <!--nutrition--> */}
        <Card>
          <CardFront>
            <Image src={nutrition} alt="nutrition scanner website picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-nutrition" target="_blank" rel="noopener noreferrer">
              <Subtitle>Barcode scanner web app
                <ProjectDescription>This app is using the web camera to scan bar codes on food packages to retrieve the product information.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>Javascript ES6</Tag>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--todolist--> */}
        <Card>
          <CardFront>
            <Image src={todolist} alt="todo list app picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-todos" target="_blank" rel="noopener noreferrer">
              <Subtitle>todo list web app
                <ProjectDescription>An application which pulls together all the parts of redux by building a todo app.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Javascript ES6</Tag>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--movies website--> */}
        <Card>
          <CardFront>
            <Image src={movie} alt="movie website picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-movies" target="_blank" rel="noopener noreferrer">
              <Subtitle>movies website
                 <ProjectDescription>A multi-pages React application, using themoviedb.org API
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Javascript ES6</Tag>
              <Tag>React</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--music website--> */}
        <Card>
          <CardFront>
            <Image src={music} alt="music release webpage"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-music-releases" target="_blank" rel="noopener noreferrer">
              <Subtitle>music release webpage
                <ProjectDescription>A project using React components to build a page which shows new album and single releases.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Javascript ES6</Tag>
              <Tag>React</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--Auth project--> */}
        <Card>
          <CardFront>
            <Image src={auth} alt="auth website"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-auth" target="_blank" rel="noopener noreferrer">
              <Subtitle>Authentication page
                <ProjectDescription>This project is about building an API with authentication to implement a registration flow.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>Javascript ES6</Tag>
              <Tag>React</Tag>
              <Tag>Node.js</Tag>
              <Tag>MongoDB</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--cluedo game--> */}
        <Card>
          <CardFront>
            <Image src={cluedo} alt="cluedo game picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-cluedo" target="_blank" rel="noopener noreferrer">
              <Subtitle>cluedo game
                <ProjectDescription>A piece of the classic board game Cluedo using objects and arrays and also connect this to the DOM.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Javascript ES6</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--weather app--> */}
        <Card>
          <CardFront>
            <Image src={weather} alt="weather app picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-weather-app" target="_blank" rel="noopener noreferrer">
              <Subtitle>weather app
                <ProjectDescription>Web app built in Javascript using open API.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Javascript ES6</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--magazine webpage--> */}
        <Card>
          <CardFront>
            <Image src={magazine} alt="magazine website picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-news-site" target="_blank" rel="noopener noreferrer">
              <Subtitle>magazine webpage
                <ProjectDescription>Project using flexbox to layout the page. The design is responsive for mobiles, tablets and desktops.
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
            </TagContainer>
          </CardBack>
        </Card>

        {/* <!--happy thoughts--> */}
        <Card>
          <CardFront>
            <Image src={thoughts} alt="business website picture"></Image>
          </CardFront>
          <CardBack>
            <a href="https://github.com/annesophiegendron/project-happy-thoughts" target="_blank" rel="noopener noreferrer">
              <Subtitle>Happy Thoughts tweets
                <ProjectDescription>Web app using React to build a Twitter-like app to fetch and post data to an API
                  </ProjectDescription>
              </Subtitle>
            </a>
            <TagContainer>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>JavascriTagt ES6</Tag>
              <Tag>REACT</Tag>
            </TagContainer>
          </CardBack>
        </Card>

      </ProjectsContainer>
    </SectionWrapperWhite>
  )
}

