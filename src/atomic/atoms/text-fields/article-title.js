import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    display: flex;
    min-height: 92px;
    width: 100%;
    padding-bottom: 8px;

    h1 {
      font-size: 40px;
      line-height: 48px;
    }
`

const BlogArticleTitle = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <h1>{content}</h1>
    </Wrapper>
  )
}

export default BlogArticleTitle;