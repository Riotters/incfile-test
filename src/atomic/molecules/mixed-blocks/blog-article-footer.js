import React from "react";
import styled from "styled-components";
import Button from "../buttons/button";
import Socials from "../../molecules/lists/blog-article-socials";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 24px 24px 32px;
`

const BlogArticleFooter = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Button theme="primary48" content="More" arrow />
        <Socials />
    </Wrapper>
  )
}

export default BlogArticleFooter;
