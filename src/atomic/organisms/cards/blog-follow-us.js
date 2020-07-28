import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import Texts from "../../molecules/text-blocks/blog-follow-us-text";
import Button from "../../molecules/buttons/blog-follow-us-btn";

import HeartsCounter from "../../molecules/buttons/hearts-counter";
import BlogArticleTags from "../../molecules/lists/blog-article-tags";
import BlogArticleFooter from "../../molecules/mixed-blocks/blog-article-footer";
import { article } from "../../../static/blog"

const Wrapper = styled.div`
    width: 100%;

    .follow-us {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 32px 32px;
    }
`

const BlogFollowUs = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="follow-us" overflow>
            <Texts />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogFollowUs;
