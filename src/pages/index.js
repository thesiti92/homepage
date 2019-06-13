import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline/Timeline"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Timeline />
  </Layout>
)

export default IndexPage
