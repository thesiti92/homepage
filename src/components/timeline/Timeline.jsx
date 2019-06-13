import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const TimelineItemWrapper = styled.div`
  width: 300px;
  background-color: white;
  height: 100px;
  border-style: solid;
  grid-row: span 2;
  align-content: middle;
  :nth-child(odd) {
    justify-self: flex-end;
  }
  ::before {
    content: "";
    position: absolute;
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    left: calc(50% - 16px);
    transform: translateY(calc(50% + 16px));

    background-color: #4a148c;
  }
`

function TimelineItem({ message }) {
  return <TimelineItemWrapper>{message}</TimelineItemWrapper>
}

const TimelineWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  align-items: center;
  margin: 0 48px;
  ::before {
    content: "";
    background: #455a64;
    width: 5px;
    top: 0;
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
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
              message
            }
          }
        }
      }
    `
  )
  return (
    <TimelineWrapper>
      {edges.map(({ node }) => (
        <TimelineItem {...node} />
      ))}
    </TimelineWrapper>
  )
}

export default Timeline
