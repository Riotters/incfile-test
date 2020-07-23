import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../styles/colors";

const Wrapper = styled(Link)`
    font-size: 14px; 
    color: ${color.blue1}; 
    line-height: 24px; 
    font-family: Avenir, sans-serif;
    text-decoration: none;
`

const CustomLink = ({ className, linkText, linkUrl }) => (
  <Wrapper className={className} to={linkUrl}>
      {linkText}
  </Wrapper>
)

export default CustomLink