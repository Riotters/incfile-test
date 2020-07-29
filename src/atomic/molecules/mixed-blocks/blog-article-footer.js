import React from "react";
import styled from "styled-components";
import Button from "../buttons/button";
import Socials from "../../molecules/lists/blog-article-socials";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 24px 24px 32px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .more-button {
      margin-bottom: 16px;

      @media (min-width: 768px) {
        margin-bottom: 0;
      } 
    }
`

const BlogArticleFooter = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Button className="more-button" theme="primary48" content="More" arrow />
        <Socials />
    </Wrapper>
  )
}

export default BlogArticleFooter;
