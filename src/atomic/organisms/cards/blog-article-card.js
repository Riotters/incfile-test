import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import BlogArticleImage from "../../molecules/image-blocks/blog-article-image";
import HeartsCounter from "../../molecules/buttons/hearts-counter";
import BlogArticleTags from "../../molecules/lists/blog-article-tags";
import BlogArticleTexts from "../../molecules/text-blocks/blog-article-texts";
import BlogArticleFooter from "../../molecules/mixed-blocks/blog-article-footer";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .tags {
      padding: 16px 24px 8px;
    }
`

const BlogArticleCard = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="card" overflow>
            <div>
              <BlogArticleImage image={content.image}>
                  <HeartsCounter likes={content.likes} />
              </BlogArticleImage>
              <BlogArticleTags className="tags" content={content.tags} />
              <BlogArticleTexts content={content.texts} />
            </div>
            <BlogArticleFooter />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogArticleCard;
