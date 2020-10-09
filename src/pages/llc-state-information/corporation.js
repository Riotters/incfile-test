import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Top from "../../components/partials/sections/top";
import Button from "../../components/button"

const CorporationStateInformationPage = () => (
  <Layout>
    <SEO title="WIP Page" description="wip page"/>
    <Top imageName="after-formation" alt="wip">
        <h1>WIP</h1>
        <p>Corporation State Information</p>
        <Button to="/" theme="primary56" width="200px">Go to the home page</Button>
    </Top>
  </Layout>
)

export default CorporationStateInformationPage
