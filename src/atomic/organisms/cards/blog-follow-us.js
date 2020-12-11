import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Texts from "../../molecules/text-blocks/blog-follow-us-text";
import Button from "../../molecules/buttons/blog-follow-us-btn";
import FacebookSVG from "../../../images/icons/facebook32.inline.svg";
import TwitterSVG from "../../../images/icons/twitter32.inline.svg";
import YoutubeSVG from "../../../images/icons/youtube32.inline.svg";

const Wrapper = styled.div`
    width: 100%;

    .follow-us {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 32px 32px;
    }
`
const icons = [FacebookSVG, TwitterSVG, YoutubeSVG];

const BlogFollowUs = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="follow-us" overflow>
            <Texts />
              {content.map((item, i) => (
                <Button key={i} Icon={icons[i]} text={item.text} url={item.url} />
              ))}
        </Whitebox>
    </Wrapper>
  )
}

export default BlogFollowUs;
