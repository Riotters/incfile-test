import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.span`
    display: flex;
    min-height: 120px;
    width: 100%;

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey2};
    }
`

const BlogArticleText = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <p>{content}</p>
    </Wrapper>
  )
}

export default BlogArticleText;
