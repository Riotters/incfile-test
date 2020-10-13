import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import BlogArticleTitle from "../../atoms/text-fields/blog-article-title";
import BlogArticleMeta from "../../atoms/text-fields/blog-article-meta";
import BlogArticleText from "../../atoms/text-fields/blog-article-text";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
`

const BlogArticleTexts = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <BlogArticleTitle content={content[0].title ? content[0].title : ""} />
        <BlogArticleMeta date={content[0].meta[0].date ? content[0].meta[0].date : ""} author={content[0].meta[0].author ? content[0].meta[0].author : ""} from={content[0].meta[0].from ? content[0].meta[0].from : ""} />
        <BlogArticleText content={content[0].text ? content[0].text : ""} />
    </Wrapper>
  )
}

export default BlogArticleTexts;
