import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../components/partials/sections/top";
import Button from "../components/button"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Top imageName="404">
        <h1>Whoops, that Page is Gone</h1>
        <p>The link you clicked may be broke or the page may have been removed.</p>
        <Button to="/" theme="primary56" width="200px">Go to the home page</Button>
    </Top>
  </Layout>
)

export default NotFoundPage
