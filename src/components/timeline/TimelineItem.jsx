import React, { useState } from "react"
import styled, { css } from "styled-components"
import { colors, styles } from "../consts"

const ItemHeader = styled.h3`
  white-space: nowrap;
  margin-bottom: 3%;
`

const TimelineItemWrapper = styled.div`
  background-color: ${colors.greyBackground};
  width: 500px;
  grid-row: span 2;
  align-content: middle;
  border-radius: 10px;
  margin: 14px 0;
  padding: 12px 14px;
  box-shadow: ${styles.boxShadow};

  :nth-child(odd) {
    justify-self: flex-end;
  }
  ::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    left: calc(50% - 16px);
    box-shadow: ${styles.softBoxShadow};
    transform: translateY(calc(50% + 16px + 7px));
    background-color: #4a148c;
  }
`
const SWAP_TIME = "0.4s"

const FeatList = styled.ul`
  overflow: hidden;
  margin: 0;
  transition: max-height ${SWAP_TIME}, visibility ${SWAP_TIME},
    opacity ${SWAP_TIME};
  ${({ visible }) =>
    visible
      ? css`
          max-height: 500px;
          visibility: visible;
          opacity: 1;
        `
      : css`
          max-height: 0px;
          visibility: hidden;
          opacity: 0;
        `}
`
const Brief = styled.p`
  transition: visibility ${SWAP_TIME}, opacity ${SWAP_TIME},
    max-height ${SWAP_TIME};
  margin: 0;
  overflow: hidden;
  ${({ visible }) =>
    visible
      ? css`
          visibility: visible;
          opacity: 1;
          max-height: 100px;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          max-height: 0px;
        `}
`
const Feat = styled.li``

function TimelineItem({ position, org, feats, brief }) {
  const [showDetails, toggleDetails] = useState(false)
  return (
    <TimelineItemWrapper onClick={() => toggleDetails(!showDetails)}>
      <ItemHeader>{`${position} @ ${org}`}</ItemHeader>
      <Brief visible={!showDetails}>{brief}</Brief>
      <FeatList visible={showDetails}>
        {feats.map(feat => (
          <Feat key={feat}>{feat}</Feat>
        ))}
      </FeatList>
    </TimelineItemWrapper>
  )
}

export default TimelineItem
