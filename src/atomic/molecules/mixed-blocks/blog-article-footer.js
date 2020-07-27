import React from "react";
import styled from "styled-components";
import Button from "../buttons/button";
import Tag from "../../atoms/text-fields/blog-article-tag";

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
        <Tag content="aaa"/>
    </Wrapper>
  )
}

export default BlogArticleFooter;
