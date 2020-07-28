import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import Texts from "../../molecules/text-blocks/blog-follow-us-text";
import Button from "../../molecules/buttons/blog-follow-us-btn";
import FacebookSVG from "../../../images/icons/facebook32.inline.svg"
import TwitterSVG from "../../../images/icons/twitter32.inline.svg"
import PinterestSVG from "../../../images/icons/pinterest32.inline.svg"
import YoutubeSVG from "../../../images/icons/youtube32.inline.svg"

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

const BlogFollowUs = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="follow-us" overflow>
            <Texts />
            <Button Icon={FacebookSVG} text={content[0].text} url={content[0].url} />
            <Button Icon={TwitterSVG} text={content[1].text} url={content[1].url}/>
            <Button Icon={PinterestSVG} text={content[2].text} url={content[2].url}/>
            <Button Icon={YoutubeSVG} text={content[3].text} url={content[3].url}/>
        </Whitebox>
    </Wrapper>
  )
}

export default BlogFollowUs;
