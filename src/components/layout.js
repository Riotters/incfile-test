/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import Header from "./header-dropdown";
import Footer from "./footer-v2";
//import Avenir400 from "../fonts/avenir/Avenir-12.woff2"
//import Avenir600 from "../fonts/avenir/Avenir-Heavy-05.woff2"
//import MarkPro from "../fonts/mark-pro/MarkPro-Bold.woff2"
import "../fonts/fonts.css";
import { color } from "./styles/colors";
import HeaderAlt from "./header-v2";

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
  font-family: Avenir, sans-serif;
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

h1, h2, h3, h4, h5, h6 {
  &.uppercase {
    text-transform: uppercase;
  }
}

h1, h2, h3, h4, h5 {
  color: ${color.black};
}

h1, h2, h3, h5, h6 {
  font-family: MarkPro;
}

h1 {
  font-size: 40px;
  line-height: 48px;

  @media (min-width: 769px) {
    font-size: 48px;
    line-height: 56px;
  }
}

h2 {
  font-size: 32px;
  line-height: 40px;
  text-align: center;

  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 48px;
  }
}

h3 {
  font-size: 24px;
  line-height: 32px;
  width: 100%;
  max-width: 670px;
}

h4 {
  font-family: Avenir;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
}

h5 {
  font-size: 16px;
  line-height: 24px;
}

h6 {
  color: ${color.grey2};
  font-size: 12px;
  line-height: 1;
}

p {
  color: #757575;
  font-family: Avenir;
  font-size: 20px;
  line-height: 31px;
}

a {
  color: ${color.blue1};
  font-family: Avenir;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
}

@media (min-width: 769px) {
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
`;

const Layout = ({ children, isDashboardPage, header }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<GlobalStyle />
			{header === "v2" && !isDashboardPage && (
				<HeaderAlt siteTitle={data.site.siteMetadata.title} />
			)}
			{header == null && !isDashboardPage && (
				<Header siteTitle={data.site.siteMetadata.title} />
			)}
			<main>{children}</main>
			{!isDashboardPage && <Footer />}

			{/** Use this element to append the lightbox video outside of main wrapper
			 * So that it should be overlay entire of page
			 */}
			<div id="portal-lightbox"></div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
	header: null,
};

export default Layout;
