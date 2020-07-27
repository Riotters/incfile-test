import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import BlogArticleNum from "../../atoms/text-fields/blog-article-num";
import BlogArticleHeart from "../../atoms/icons/blog-article-heart";

const Wrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 81px;
    background-color: ${color.grey3};
    border-radius: 5px;
    position: relative;
    z-index: 1;
    border: none;
`

const HeartsCounter = ({ className }) => {
  return (
    <Wrapper className={className}>
        <BlogArticleNum content="0" />
        <BlogArticleHeart />
    </Wrapper>
  )
}

export default HeartsCounter;
