import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.span`
    display: flex;
    width: 100%;
`

const BlogArticleText = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <p>{content}</p>
    </Wrapper>
  )
}

export default BlogArticleText;
