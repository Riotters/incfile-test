import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../atomic/partials/error-top";
import { gradient } from "../atomic/atoms/styles/colors";
//texts
import { top } from "../static/other/503"

const NotFoundPage = () => (
  <Layout>
    <SEO title="503" description="Error 503"/>
    <Top content={top} imageName="error-503-3209" alt="Mr Bulb is showing 503 communique" imageWidth="670" textWidth="350" bgColor={gradient.blue3} />
  </Layout>
)

export default NotFoundPage
