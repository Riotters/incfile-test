import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: ${color.white};
    border-radius: 0 5px 5px 0;
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 1;
    color: ${color.grey2};
`

const BlogArticleHeart = ({ className }) => {
  return (
    <Wrapper className={className}>
        {"<3"}
    </Wrapper>
  )
}

export default BlogArticleHeart;
