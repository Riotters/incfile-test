import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import BlogArticleImage from "../../molecules/image-blocks/blog-article-image";
import HeartsCounter from "../../molecules/buttons/hearts-counter";
import BlogArticleTags from "../../molecules/lists/blog-article-tags";
import BlogArticleTexts from "../../molecules/text-blocks/blog-article-texts";
import BlogArticleFooter from "../../molecules/mixed-blocks/blog-article-footer";
import { article } from "../../../static/blog"

const Wrapper = styled.div`
    width: 100%;
    max-width: 370px;
`

const BlogArticleCard = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Whitebox>
            <BlogArticleImage>
                <HeartsCounter />
            </BlogArticleImage>
            <BlogArticleTags content={article.tags} />
            <BlogArticleTexts content={article.texts} />
            <BlogArticleFooter />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogArticleCard;
