import React from "react"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import TimelineItem from "./TimelineItem"
import { GoInfo } from "react-icons/go"
import { colors, styles } from "../consts"

const TimelineWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  align-items: center;
  width: 1200px;
  margin: auto;
  ::before {
    content: "";
    background: #455a64;
    width: 5px;
    top: 0;
    bottom: 0;
    position: absolute;
    left: 50%;
    border-radius: 6px;
    transform: translateX(-50%);
  }
`

const OFF_SCREEN_POS = "-700px"

const slideIn = keyframes`

  0% {
    right: ${OFF_SCREEN_POS};
  }
  10% {
    right: 0;
  }
  90% {
    right: 0;
  }
  100% {
    right: ${OFF_SCREEN_POS};
  }
`
const HelperText = styled.h4`
  position: absolute;
  top: 6%;
  right: ${OFF_SCREEN_POS};
  color: #546e7a;
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  background-color: ${colors.greyBackground};
  padding: 6px;
  border-radius: 6px;
  animation: ${slideIn} 6s ease-out 10s;
  animation-fill-mode: forwards;
  box-shadow: ${styles.softBoxShadow};
`

const StyledGoInfo = styled(GoInfo)`
  margin-right: 0.3rem;
`

function Timeline() {
  const {
    allTimelineJson: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allTimelineJson {
          edges {
            node {
              org
              position
              feats
              brief
            }
          }
        }
      }
    `
  )
  return (
    <TimelineWrapper>
      <HelperText>
        <StyledGoInfo />
        Click an item for more info!
      </HelperText>
      {edges.map(({ node }) => (
        <TimelineItem {...node} />
      ))}
    </TimelineWrapper>
  )
}

export default Timeline
