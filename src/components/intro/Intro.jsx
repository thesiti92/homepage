import React from "react"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { styles, colors } from "../consts"

const IntroWrapper = styled.div`
  padding: 6% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Headshot = styled(Img)`
  border-radius: 50%;
  box-shadow: ${styles.softBoxShadow};
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 660px;
  margin-left: 6%;
`

const Tagline = styled.div`
  font-size: 2rem;
  color: ${colors.secondaryText};
`
const Name = styled.h1`
  font-size: 3.2rem;
`

function Intro() {
  const {
    file: { childImageSharp: headshot },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 220, height: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <IntroWrapper>
      <Headshot fixed={headshot.fixed} />
      <TextWrapper>
        <Name>Alex Iansiti</Name>
        <Tagline>
          Just your average quarter Japanese male who likes to code, cook, and
          speak Italian.
        </Tagline>
      </TextWrapper>
    </IntroWrapper>
  )
}

export default Intro
