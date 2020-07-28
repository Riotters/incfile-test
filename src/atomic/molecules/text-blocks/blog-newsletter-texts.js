import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 0 16px;

    h3, p {
      text-align: center;
    }

    h3 {
        padding-bottom: 8px;
    }

    p {
      max-width: 280px;
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};
    }
`

const BlogNewsletterTexts = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <h3>Like what you’re reading?</h3>
        <p>Get fresh monthly tips to start & grow your LLC.</p>
    </Wrapper>
  )
}

export default BlogNewsletterTexts;
