import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ paddingTop: "120px", paddingBottom: "20px" }}>
      <Container>
        <h1>404</h1>
        <p>NOT FOUND</p>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage
