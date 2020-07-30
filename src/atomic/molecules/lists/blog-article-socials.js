import React from "react";
import styled from "styled-components";
import TwitterSVG from "../../../images/icons/twitter32.inline.svg";
import FacebookSVG from "../../../images/icons/facebook32.inline.svg";
import PinterestSVG from "../../../images/icons/pinterest32.inline.svg";
import LinkedinSVG from "../../../images/icons/linkedin32.inline.svg";

const Wrapper = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;

    span {
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
`

const Social = styled.li`
    height: 32px;
    width: 32px;

    a {
        display: block;
        height: 100%;
        width: 100%;
    }
`;

const BlogArticleSocials = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Social>
            <a href="#">
                <TwitterSVG />
            </a>
        </Social>
        <Social>
            <a href="#">
                <FacebookSVG />
            </a>
        </Social>
        <Social>
            <a href="#">
                <PinterestSVG />
            </a>
        </Social>
        <Social>
            <a href="#">
                <LinkedinSVG />
            </a>
        </Social>
    </Wrapper>
  )
}

export default BlogArticleSocials;
