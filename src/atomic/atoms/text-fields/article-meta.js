import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 24px;

    p, a {
        font-size: 16px;
        line-height: 24px;
    }

    p {
      color: ${color.grey2};
    }

    a {
        text-decoration: none;
        transition: color .3s ease;
        
        &:hover {
          color: ${color.orange1};
        }
    }
`

const ArticleMeta = ({ className, date, from }) => {
  return (
    <Wrapper className={className}>
        <p>{date} in <a href="#">{from}</a></p>
    </Wrapper>
  )
}

export default ArticleMeta;
