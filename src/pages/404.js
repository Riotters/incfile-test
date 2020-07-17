import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Container from "../components/container"
import Top from "../components/partials/sections/top";
import Button from "../components/button"

const Wrapper = styled.div`
  h1 {
    font-size: 72px;
    line-height: 1.2;
  }

  p {
    font-size: 48px;
    line-height: 1.2;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Top>
          <h1>404</h1>
          <p>NOT FOUND</p>
          <Button to="/" theme="primary56" width="200px">Home Page</Button>
      </Top>
      </Wrapper>
  </Layout>
)

export default NotFoundPage
