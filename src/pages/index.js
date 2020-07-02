import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../components/sections/top"
import About from "../components/sections/about"
import Search from "../components/sections/search"
import Faq from "../components/sections/faq"
import Cta from "../components/sections/cta"
import Articles from "../components/sections/articles"

const IndexPage = () => (
  <Layout>
    <SEO
      title="What is a Nonprofit Organization? How to Start a Nonprofit"
      description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."
    />
    <Top />
    <About />
    <Search />
    <Faq />
    <Cta />
    <Articles />
  </Layout>
)

export default IndexPage
