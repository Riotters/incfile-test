import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${color.grey4};
    padding-bottom: 24px;
    margin-bottom: 24px;

    h4 {
        text-align: center;
    }
`

const BlogFollowUsTexts = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <h4>Follow Incfile</h4>
    </Wrapper>
  )
}

export default BlogFollowUsTexts;
