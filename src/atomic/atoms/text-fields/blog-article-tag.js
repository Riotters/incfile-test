import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: avenir, sans-serif;
    size: 16px;
    line-height: 24px;
    background-color: ${color.blue3};
    border-radius: 16px;
    color: ${color.blue1};
    padding: 4px 12px;
    margin-bottom: 8px;
`

const BlogArticleTag = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content}
    </Wrapper>
  )
}

export default BlogArticleTag;
