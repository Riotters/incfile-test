import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import BlogArticleImage from "../../molecules/image-blocks/blog-article-image";
import HeartsCounter from "../../molecules/buttons/hearts-counter";
import BlogArticleTags from "../../molecules/lists/blog-article-tags";
import BlogArticleTexts from "../../molecules/text-blocks/blog-article-texts";
import BlogArticleFooter from "../../molecules/mixed-blocks/blog-article-footer";

const Wrapper = styled.div`
    width: 100%;
`

const BlogArticleCard = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox overflow>
            <BlogArticleImage content={content.image}>
                <HeartsCounter />
            </BlogArticleImage>
            <BlogArticleTags content={content.tags} />
            <BlogArticleTexts content={content.texts} />
            <BlogArticleFooter />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogArticleCard;
