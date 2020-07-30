import React from "react";
import styled from "styled-components";
import Tag from "../../atoms/text-fields/blog-article-tag";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    span {
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
`

const BlogArticleLists = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map(tag => (
            <Tag content={tag} />
        ))}
    </Wrapper>
  )
}

export default BlogArticleLists;
