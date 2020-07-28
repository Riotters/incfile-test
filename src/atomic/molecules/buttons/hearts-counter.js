import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import BlogArticleNum from "../../atoms/text-fields/blog-article-num";
import BlogArticleHeart from "../../atoms/icons/blog-article-heart";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 81px;
    background-color: ${color.grey4};
    border-radius: 5px;
    position: relative;
    z-index: 1;
`

const HeartsCounter = ({ className, likes }) => {
  const [likesSum, setLikesSum] = useState(likes)

  const handleClick = () => {
    setLikesSum(parseInt(likesSum) + 1);
  }

  return (
    <Wrapper className={className}>
        <BlogArticleNum likes={likesSum} />
        <BlogArticleHeart onClick={handleClick}/>
    </Wrapper>
  )
}

export default HeartsCounter;
