/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import Footer from "./footer"
//import Avenir400 from "../fonts/avenir/Avenir-Roman-12.woff2"
//import Avenir600 from "../fonts/avenir/Avenir-Heavy-05.woff2"
//import MarkPro from "../fonts/mark-pro/MarkPro-Bold.woff2"
import "../fonts/fonts.css"
const GlobalStyle = createGlobalStyle`

html {
  font-family: sans-serif;
  /* scroll-behavior: smooth; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  min-height: 100%;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
}

*:before {
  box-sizing: inherit;
}

*:after {
  box-sizing: inherit;
}

main {
  padding-top: 50px;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 190px;
  }
}

h1 {
  color: #1d1d1d;
    font-family: MarkPro;
    font-size: 40px;
    line-height: 48px;
    width: 100%;
    max-width: 480px;
    padding-bottom: 40px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 58px;
      text-align: left;
      padding-bottom: 20px;
    }
}

h2 {
  color: #1D1D1D;
  font-family: MarkPro;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}

h3 {
  color: #1D1D1D;
  font-family: MarkPro;
  font-size: 24px;
  line-height: 29px;
  width: 100%;
  max-width: 670px;
}

h4 {
  color: #757575;
  font-family: MarkPro;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 14px;
  opacity: 0.9;
  padding-bottom: 24px;
  text-transform: uppercase;
}

p {
  color: #757575;
    font-family: Avenir;
    font-size: 20px;
    line-height: 31px;
}

a {
  color: #5088fd;
  font-family: Avenir;
  font-size: 20px;
  line-height: 24px;
}
@media (min-width: 768px) {
  .slideUp {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    opacity: 0;
    transform: translateY(40px);
  }

  .slideUp.enter {
    transition: opacity 1s ease-in-out,
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
    transform: translateY(0);
  }

  .slideLeft {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    opacity: 0;
    transform: translateX(40px);
  }

  .slideLeft.enter {
    transition: opacity 1s ease-in-out,
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
    transform: translateX(0);
  }

  .slideRight {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    opacity: 0;
    transform: translateX(-40px);
  }

  .slideRight.enter {
    transition: opacity 1s ease-in-out,
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
    transform: translateX(0);
  }

  .scaleUp {
    transition: transform 3s ease-in-out;
    transform: scale(0.9);
  }

  .scaleUp.enter {
    transition: transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: scale(1);
  }
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
