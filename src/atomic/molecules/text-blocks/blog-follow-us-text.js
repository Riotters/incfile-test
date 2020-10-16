import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${color.grey4};
    padding-bottom: 24px;
    margin-bottom: 24px;

    h4 {
        text-align: ${props => props.leftAlign ? "left" : "center"};
    }
`

const BlogFollowUsTexts = ({ className, content, leftAlign }) => {
  return (
    <Wrapper className={className} leftAlign={leftAlign}>
        <h4>{content ? content : "Follow Incfile"}</h4>
    </Wrapper>
  )
}

export default BlogFollowUsTexts;
