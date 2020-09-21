import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../atomic/partials/top";
import Button from "../components/button"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="not found"/>
    <Top imageName="error-503-3209" alt="Mr Bulb is showing 404 communique" imageWidth="670">
        <h1>Whoops, service unavailable</h1>
        <p>We are working on fixig the problem. Please try again</p>
        <Button to="/" theme="primary56" width="200px">Refresh Page</Button>
    </Top>
  </Layout>
)

export default NotFoundPage
