import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline/Timeline"
import Intro from "../components/intro/Intro"
import styled from "styled-components"

const TimelineHeader = styled.h1`
  text-align: center;
`

const IndexPage = () => (
  <SEO title="Home" />,
  (
    <Layout>
      <Intro />
      <TimelineHeader>Here's All the Stuff I've Done!</TimelineHeader>
      <Timeline />
    </Layout>
  )
)

export default IndexPage
