import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../components/sections/top/top"
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
    <Top 
      headline="Starting a nonprofit can truly help make the world better"
      text="Start for $0 + state fee. Learn how forming an LLC, an
      S-Corporation, an C-Corporation, or a Non Profit will impact
      both your liability and taxation."
      imageName="MrsBulbNonprofit"
      imageAlt="Mr Bulb with seedling"
    />
    <About />
    <Search />
    <Faq />
    <Cta />
    <Articles />
  </Layout>
)

export default IndexPage
