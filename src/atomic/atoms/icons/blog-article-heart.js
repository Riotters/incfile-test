import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import HeartSVG from "../../../images/icons/heart.inline.svg"

const Wrapper = styled.button`
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
    border: 0;
    cursor: pointer;

    svg {
      path {
        transition: fill .3s ease;
      }
    }

    &:hover {
      svg {
        path {
          fill: ${color.blue1};
        }
      }
    }
`

const BlogArticleHeart = ({ className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
        <HeartSVG />
    </Wrapper>
  )
}

export default BlogArticleHeart;
