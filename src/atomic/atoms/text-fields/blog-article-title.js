import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.span`
    display: flex;
    width: 100%;
    padding-bottom: 8px;
`

const BlogArticleTitle = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <h3>{content}</h3>
    </Wrapper>
  )
}

export default BlogArticleTitle;